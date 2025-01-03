import {
  __commonJS
} from "./chunk-3OV72XIM.js";

// node_modules/ev-emitter/ev-emitter.js
var require_ev_emitter = __commonJS({
  "node_modules/ev-emitter/ev-emitter.js"(exports, module) {
    (function(global, factory) {
      if (typeof module == "object" && module.exports) {
        module.exports = factory();
      } else {
        global.EvEmitter = factory();
      }
    })(typeof window != "undefined" ? window : exports, function() {
      function EvEmitter() {
      }
      let proto = EvEmitter.prototype;
      proto.on = function(eventName, listener) {
        if (!eventName || !listener) return this;
        let events = this._events = this._events || {};
        let listeners = events[eventName] = events[eventName] || [];
        if (!listeners.includes(listener)) {
          listeners.push(listener);
        }
        return this;
      };
      proto.once = function(eventName, listener) {
        if (!eventName || !listener) return this;
        this.on(eventName, listener);
        let onceEvents = this._onceEvents = this._onceEvents || {};
        let onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
      };
      proto.off = function(eventName, listener) {
        let listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return this;
        let index = listeners.indexOf(listener);
        if (index != -1) {
          listeners.splice(index, 1);
        }
        return this;
      };
      proto.emitEvent = function(eventName, args) {
        let listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return this;
        listeners = listeners.slice(0);
        args = args || [];
        let onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (let listener of listeners) {
          let isOnce = onceListeners && onceListeners[listener];
          if (isOnce) {
            this.off(eventName, listener);
            delete onceListeners[listener];
          }
          listener.apply(this, args);
        }
        return this;
      };
      proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
        return this;
      };
      return EvEmitter;
    });
  }
});

// node_modules/imagesloaded/imagesloaded.js
var require_imagesloaded = __commonJS({
  "node_modules/imagesloaded/imagesloaded.js"(exports, module) {
    (function(window2, factory) {
      if (typeof module == "object" && module.exports) {
        module.exports = factory(window2, require_ev_emitter());
      } else {
        window2.imagesLoaded = factory(window2, window2.EvEmitter);
      }
    })(typeof window !== "undefined" ? window : exports, function factory(window2, EvEmitter) {
      let $ = window2.jQuery;
      let console = window2.console;
      function makeArray(obj) {
        if (Array.isArray(obj)) return obj;
        let isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) return [...obj];
        return [obj];
      }
      function ImagesLoaded(elem, options, onAlways) {
        if (!(this instanceof ImagesLoaded)) {
          return new ImagesLoaded(elem, options, onAlways);
        }
        let queryElem = elem;
        if (typeof elem == "string") {
          queryElem = document.querySelectorAll(elem);
        }
        if (!queryElem) {
          console.error(`Bad element for imagesLoaded ${queryElem || elem}`);
          return;
        }
        this.elements = makeArray(queryElem);
        this.options = {};
        if (typeof options == "function") {
          onAlways = options;
        } else {
          Object.assign(this.options, options);
        }
        if (onAlways) this.on("always", onAlways);
        this.getImages();
        if ($) this.jqDeferred = new $.Deferred();
        setTimeout(this.check.bind(this));
      }
      ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
      ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        this.elements.forEach(this.addElementImages, this);
      };
      const elementNodeTypes = [1, 9, 11];
      ImagesLoaded.prototype.addElementImages = function(elem) {
        if (elem.nodeName === "IMG") {
          this.addImage(elem);
        }
        if (this.options.background === true) {
          this.addElementBackgroundImages(elem);
        }
        let {
          nodeType
        } = elem;
        if (!nodeType || !elementNodeTypes.includes(nodeType)) return;
        let childImgs = elem.querySelectorAll("img");
        for (let img of childImgs) {
          this.addImage(img);
        }
        if (typeof this.options.background == "string") {
          let children = elem.querySelectorAll(this.options.background);
          for (let child of children) {
            this.addElementBackgroundImages(child);
          }
        }
      };
      const reURL = /url\((['"])?(.*?)\1\)/gi;
      ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        let style = getComputedStyle(elem);
        if (!style) return;
        let matches = reURL.exec(style.backgroundImage);
        while (matches !== null) {
          let url = matches && matches[2];
          if (url) {
            this.addBackground(url, elem);
          }
          matches = reURL.exec(style.backgroundImage);
        }
      };
      ImagesLoaded.prototype.addImage = function(img) {
        let loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
      };
      ImagesLoaded.prototype.addBackground = function(url, elem) {
        let background = new Background(url, elem);
        this.images.push(background);
      };
      ImagesLoaded.prototype.check = function() {
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        if (!this.images.length) {
          this.complete();
          return;
        }
        let onProgress = (image, elem, message) => {
          setTimeout(() => {
            this.progress(image, elem, message);
          });
        };
        this.images.forEach(function(loadingImage) {
          loadingImage.once("progress", onProgress);
          loadingImage.check();
        });
      };
      ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        this.emitEvent("progress", [this, image, elem]);
        if (this.jqDeferred && this.jqDeferred.notify) {
          this.jqDeferred.notify(this, image);
        }
        if (this.progressedCount === this.images.length) {
          this.complete();
        }
        if (this.options.debug && console) {
          console.log(`progress: ${message}`, image, elem);
        }
      };
      ImagesLoaded.prototype.complete = function() {
        let eventName = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = true;
        this.emitEvent(eventName, [this]);
        this.emitEvent("always", [this]);
        if (this.jqDeferred) {
          let jqMethod = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[jqMethod](this);
        }
      };
      function LoadingImage(img) {
        this.img = img;
      }
      LoadingImage.prototype = Object.create(EvEmitter.prototype);
      LoadingImage.prototype.check = function() {
        let isComplete = this.getIsImageComplete();
        if (isComplete) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          return;
        }
        this.proxyImage = new Image();
        if (this.img.crossOrigin) {
          this.proxyImage.crossOrigin = this.img.crossOrigin;
        }
        this.proxyImage.addEventListener("load", this);
        this.proxyImage.addEventListener("error", this);
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.proxyImage.src = this.img.currentSrc || this.img.src;
      };
      LoadingImage.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
      };
      LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        let {
          parentNode
        } = this.img;
        let elem = parentNode.nodeName === "PICTURE" ? parentNode : this.img;
        this.emitEvent("progress", [this, elem, message]);
      };
      LoadingImage.prototype.handleEvent = function(event) {
        let method = "on" + event.type;
        if (this[method]) {
          this[method](event);
        }
      };
      LoadingImage.prototype.onload = function() {
        this.confirm(true, "onload");
        this.unbindEvents();
      };
      LoadingImage.prototype.onerror = function() {
        this.confirm(false, "onerror");
        this.unbindEvents();
      };
      LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this);
        this.proxyImage.removeEventListener("error", this);
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
      };
      function Background(url, element) {
        this.url = url;
        this.element = element;
        this.img = new Image();
      }
      Background.prototype = Object.create(LoadingImage.prototype);
      Background.prototype.check = function() {
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.img.src = this.url;
        let isComplete = this.getIsImageComplete();
        if (isComplete) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          this.unbindEvents();
        }
      };
      Background.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
      };
      Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent("progress", [this, this.element, message]);
      };
      ImagesLoaded.makeJQueryPlugin = function(jQuery) {
        jQuery = jQuery || window2.jQuery;
        if (!jQuery) return;
        $ = jQuery;
        $.fn.imagesLoaded = function(options, onAlways) {
          let instance = new ImagesLoaded(this, options, onAlways);
          return instance.jqDeferred.promise($(this));
        };
      };
      ImagesLoaded.makeJQueryPlugin();
      return ImagesLoaded;
    });
  }
});
export default require_imagesloaded();
/*! Bundled license information:

imagesloaded/imagesloaded.js:
  (*!
   * imagesLoaded v5.0.0
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   *)
*/
//# sourceMappingURL=imagesloaded.js.map
