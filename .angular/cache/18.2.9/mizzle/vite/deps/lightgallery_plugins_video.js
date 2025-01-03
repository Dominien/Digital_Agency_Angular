import "./chunk-3OV72XIM.js";

// node_modules/lightgallery/plugins/video/lg-video.es5.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var videoSettings = {
  autoplayFirstVideo: true,
  youTubePlayerParams: false,
  vimeoPlayerParams: false,
  wistiaPlayerParams: false,
  gotoNextSlideOnVideoEnd: true,
  autoplayVideoOnSlide: false,
  videojs: false,
  videojsTheme: "",
  videojsOptions: {}
};
var lGEvents = {
  afterAppendSlide: "lgAfterAppendSlide",
  init: "lgInit",
  hasVideo: "lgHasVideo",
  containerResize: "lgContainerResize",
  updateSlides: "lgUpdateSlides",
  afterAppendSubHtml: "lgAfterAppendSubHtml",
  beforeOpen: "lgBeforeOpen",
  afterOpen: "lgAfterOpen",
  slideItemLoad: "lgSlideItemLoad",
  beforeSlide: "lgBeforeSlide",
  afterSlide: "lgAfterSlide",
  posterClick: "lgPosterClick",
  dragStart: "lgDragStart",
  dragMove: "lgDragMove",
  dragEnd: "lgDragEnd",
  beforeNextSlide: "lgBeforeNextSlide",
  beforePrevSlide: "lgBeforePrevSlide",
  beforeClose: "lgBeforeClose",
  afterClose: "lgAfterClose",
  rotateLeft: "lgRotateLeft",
  rotateRight: "lgRotateRight",
  flipHorizontal: "lgFlipHorizontal",
  flipVertical: "lgFlipVertical",
  autoplay: "lgAutoplay",
  autoplayStart: "lgAutoplayStart",
  autoplayStop: "lgAutoplayStop"
};
var param = function(obj) {
  return Object.keys(obj).map(function(k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
  }).join("&");
};
var paramsToObject = function(url) {
  var paramas = url.slice(1).split("&").map(function(p) {
    return p.split("=");
  }).reduce(function(obj, pair) {
    var _a = pair.map(decodeURIComponent), key = _a[0], value = _a[1];
    obj[key] = value;
    return obj;
  }, {});
  return paramas;
};
var getYouTubeParams = function(videoInfo, youTubePlayerParamsSettings) {
  if (!videoInfo.youtube) return "";
  var slideUrlParams = videoInfo.youtube[2] ? paramsToObject(videoInfo.youtube[2]) : "";
  var defaultYouTubePlayerParams = {
    wmode: "opaque",
    autoplay: 0,
    mute: 1,
    enablejsapi: 1
  };
  var playerParamsSettings = youTubePlayerParamsSettings || {};
  var youTubePlayerParams = __assign(__assign(__assign({}, defaultYouTubePlayerParams), playerParamsSettings), slideUrlParams);
  var youTubeParams = "?" + param(youTubePlayerParams);
  return youTubeParams;
};
var isYouTubeNoCookie = function(url) {
  return url.includes("youtube-nocookie.com");
};
var getVimeoURLParams = function(defaultParams, videoInfo) {
  if (!videoInfo || !videoInfo.vimeo) return "";
  var urlParams = videoInfo.vimeo[2] || "";
  var defaultPlayerParams = defaultParams && Object.keys(defaultParams).length !== 0 ? "&" + param(defaultParams) : "";
  var urlWithHash = videoInfo.vimeo[0].split("/").pop() || "";
  var urlWithHashWithParams = urlWithHash.split("?")[0] || "";
  var hash = urlWithHashWithParams.split("#")[0];
  var isPrivate = videoInfo.vimeo[1] !== hash;
  if (isPrivate) {
    urlParams = urlParams.replace("/" + hash, "");
  }
  urlParams = urlParams[0] == "?" ? "&" + urlParams.slice(1) : urlParams || "";
  var vimeoPlayerParams = "?autoplay=0&muted=1" + (isPrivate ? "&h=" + hash : "") + defaultPlayerParams + urlParams;
  return vimeoPlayerParams;
};
var Video = (
  /** @class */
  function() {
    function Video2(instance) {
      this.core = instance;
      this.settings = __assign(__assign({}, videoSettings), this.core.settings);
      return this;
    }
    Video2.prototype.init = function() {
      var _this = this;
      this.core.LGel.on(lGEvents.hasVideo + ".video", this.onHasVideo.bind(this));
      this.core.LGel.on(lGEvents.posterClick + ".video", function() {
        var $el = _this.core.getSlideItem(_this.core.index);
        _this.loadVideoOnPosterClick($el);
      });
      this.core.LGel.on(lGEvents.slideItemLoad + ".video", this.onSlideItemLoad.bind(this));
      this.core.LGel.on(lGEvents.beforeSlide + ".video", this.onBeforeSlide.bind(this));
      this.core.LGel.on(lGEvents.afterSlide + ".video", this.onAfterSlide.bind(this));
    };
    Video2.prototype.onSlideItemLoad = function(event) {
      var _this = this;
      var _a = event.detail, isFirstSlide = _a.isFirstSlide, index = _a.index;
      if (this.settings.autoplayFirstVideo && isFirstSlide && index === this.core.index) {
        setTimeout(function() {
          _this.loadAndPlayVideo(index);
        }, 200);
      }
      if (!isFirstSlide && this.settings.autoplayVideoOnSlide && index === this.core.index) {
        this.loadAndPlayVideo(index);
      }
    };
    Video2.prototype.onHasVideo = function(event) {
      var _a = event.detail, index = _a.index, src = _a.src, html5Video = _a.html5Video, hasPoster = _a.hasPoster;
      if (!hasPoster) {
        this.appendVideos(this.core.getSlideItem(index), {
          src,
          addClass: "lg-object",
          index,
          html5Video
        });
        this.gotoNextSlideOnVideoEnd(src, index);
      }
    };
    Video2.prototype.onBeforeSlide = function(event) {
      if (this.core.lGalleryOn) {
        var prevIndex = event.detail.prevIndex;
        this.pauseVideo(prevIndex);
      }
    };
    Video2.prototype.onAfterSlide = function(event) {
      var _this = this;
      var _a = event.detail, index = _a.index, prevIndex = _a.prevIndex;
      var $slide = this.core.getSlideItem(index);
      if (this.settings.autoplayVideoOnSlide && index !== prevIndex) {
        if ($slide.hasClass("lg-complete")) {
          setTimeout(function() {
            _this.loadAndPlayVideo(index);
          }, 100);
        }
      }
    };
    Video2.prototype.loadAndPlayVideo = function(index) {
      var $slide = this.core.getSlideItem(index);
      var currentGalleryItem = this.core.galleryItems[index];
      if (currentGalleryItem.poster) {
        this.loadVideoOnPosterClick($slide, true);
      } else {
        this.playVideo(index);
      }
    };
    Video2.prototype.playVideo = function(index) {
      this.controlVideo(index, "play");
    };
    Video2.prototype.pauseVideo = function(index) {
      this.controlVideo(index, "pause");
    };
    Video2.prototype.getVideoHtml = function(src, addClass, index, html5Video) {
      var video = "";
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      var currentGalleryItem = this.core.galleryItems[index];
      var videoTitle = currentGalleryItem.title || currentGalleryItem.alt;
      videoTitle = videoTitle ? 'title="' + videoTitle + '"' : "";
      var commonIframeProps = 'allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';
      if (videoInfo.youtube) {
        var videoId = "lg-youtube" + index;
        var youTubeParams = getYouTubeParams(videoInfo, this.settings.youTubePlayerParams);
        var isYouTubeNoCookieURL = isYouTubeNoCookie(src);
        var youtubeURL = isYouTubeNoCookieURL ? "//www.youtube-nocookie.com/" : "//www.youtube.com/";
        video = '<iframe allow="autoplay" id=' + videoId + ' class="lg-video-object lg-youtube ' + addClass + '" ' + videoTitle + ' src="' + youtubeURL + "embed/" + (videoInfo.youtube[1] + youTubeParams) + '" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.vimeo) {
        var videoId = "lg-vimeo" + index;
        var playerParams = getVimeoURLParams(this.settings.vimeoPlayerParams, videoInfo);
        video = '<iframe allow="autoplay" id=' + videoId + ' class="lg-video-object lg-vimeo ' + addClass + '" ' + videoTitle + ' src="//player.vimeo.com/video/' + (videoInfo.vimeo[1] + playerParams) + '" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.wistia) {
        var wistiaId = "lg-wistia" + index;
        var playerParams = param(this.settings.wistiaPlayerParams);
        playerParams = playerParams ? "?" + playerParams : "";
        video = '<iframe allow="autoplay" id="' + wistiaId + '" src="//fast.wistia.net/embed/iframe/' + (videoInfo.wistia[4] + playerParams) + '" ' + videoTitle + ' class="wistia_embed lg-video-object lg-wistia ' + addClass + '" name="wistia_embed" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.html5) {
        var html5VideoMarkup = "";
        for (var i = 0; i < html5Video.source.length; i++) {
          html5VideoMarkup += '<source src="' + html5Video.source[i].src + '" type="' + html5Video.source[i].type + '">';
        }
        if (html5Video.tracks) {
          var _loop_1 = function(i2) {
            var trackAttributes = "";
            var track = html5Video.tracks[i2];
            Object.keys(track || {}).forEach(function(key) {
              trackAttributes += key + '="' + track[key] + '" ';
            });
            html5VideoMarkup += "<track " + trackAttributes + ">";
          };
          for (var i = 0; i < html5Video.tracks.length; i++) {
            _loop_1(i);
          }
        }
        var html5VideoAttrs_1 = "";
        var videoAttributes_1 = html5Video.attributes || {};
        Object.keys(videoAttributes_1 || {}).forEach(function(key) {
          html5VideoAttrs_1 += key + '="' + videoAttributes_1[key] + '" ';
        });
        video = '<video class="lg-video-object lg-html5 ' + (this.settings.videojs && this.settings.videojsTheme ? this.settings.videojsTheme + " " : "") + " " + (this.settings.videojs ? " video-js" : "") + '" ' + html5VideoAttrs_1 + ">\n                " + html5VideoMarkup + "\n                Your browser does not support HTML5 video.\n            </video>";
      }
      return video;
    };
    Video2.prototype.appendVideos = function(el, videoParams) {
      var _a;
      var videoHtml = this.getVideoHtml(videoParams.src, videoParams.addClass, videoParams.index, videoParams.html5Video);
      el.find(".lg-video-cont").append(videoHtml);
      var $videoElement = el.find(".lg-video-object").first();
      if (videoParams.html5Video) {
        $videoElement.on("mousedown.lg.video", function(e) {
          e.stopPropagation();
        });
      }
      if (this.settings.videojs && ((_a = this.core.galleryItems[videoParams.index].__slideVideoInfo) === null || _a === void 0 ? void 0 : _a.html5)) {
        try {
          return videojs($videoElement.get(), this.settings.videojsOptions);
        } catch (e) {
          console.error("lightGallery:- Make sure you have included videojs");
        }
      }
    };
    Video2.prototype.gotoNextSlideOnVideoEnd = function(src, index) {
      var _this = this;
      var $videoElement = this.core.getSlideItem(index).find(".lg-video-object").first();
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      if (this.settings.gotoNextSlideOnVideoEnd) {
        if (videoInfo.html5) {
          $videoElement.on("ended", function() {
            _this.core.goToNextSlide();
          });
        } else if (videoInfo.vimeo) {
          try {
            new Vimeo.Player($videoElement.get()).on("ended", function() {
              _this.core.goToNextSlide();
            });
          } catch (e) {
            console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
          }
        } else if (videoInfo.wistia) {
          try {
            window._wq = window._wq || [];
            window._wq.push({
              id: $videoElement.attr("id"),
              onReady: function(video) {
                video.bind("end", function() {
                  _this.core.goToNextSlide();
                });
              }
            });
          } catch (e) {
            console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
          }
        }
      }
    };
    Video2.prototype.controlVideo = function(index, action) {
      var $videoElement = this.core.getSlideItem(index).find(".lg-video-object").first();
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      if (!$videoElement.get()) return;
      if (videoInfo.youtube) {
        try {
          $videoElement.get().contentWindow.postMessage('{"event":"command","func":"' + action + 'Video","args":""}', "*");
        } catch (e) {
          console.error("lightGallery:- " + e);
        }
      } else if (videoInfo.vimeo) {
        try {
          new Vimeo.Player($videoElement.get())[action]();
        } catch (e) {
          console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
        }
      } else if (videoInfo.html5) {
        if (this.settings.videojs) {
          try {
            videojs($videoElement.get())[action]();
          } catch (e) {
            console.error("lightGallery:- Make sure you have included videojs");
          }
        } else {
          $videoElement.get()[action]();
        }
      } else if (videoInfo.wistia) {
        try {
          window._wq = window._wq || [];
          window._wq.push({
            id: $videoElement.attr("id"),
            onReady: function(video) {
              video[action]();
            }
          });
        } catch (e) {
          console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
        }
      }
    };
    Video2.prototype.loadVideoOnPosterClick = function($el, forcePlay) {
      var _this = this;
      if (!$el.hasClass("lg-video-loaded")) {
        if (!$el.hasClass("lg-has-video")) {
          $el.addClass("lg-has-video");
          var _html = void 0;
          var _src = this.core.galleryItems[this.core.index].src;
          var video = this.core.galleryItems[this.core.index].video;
          if (video) {
            _html = typeof video === "string" ? JSON.parse(video) : video;
          }
          var videoJsPlayer_1 = this.appendVideos($el, {
            src: _src,
            addClass: "",
            index: this.core.index,
            html5Video: _html
          });
          this.gotoNextSlideOnVideoEnd(_src, this.core.index);
          var $tempImg = $el.find(".lg-object").first().get();
          $el.find(".lg-video-cont").first().append($tempImg);
          $el.addClass("lg-video-loading");
          videoJsPlayer_1 && videoJsPlayer_1.ready(function() {
            videoJsPlayer_1.on("loadedmetadata", function() {
              _this.onVideoLoadAfterPosterClick($el, _this.core.index);
            });
          });
          $el.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg", function() {
            setTimeout(function() {
              _this.onVideoLoadAfterPosterClick($el, _this.core.index);
            }, 50);
          });
        } else {
          this.playVideo(this.core.index);
        }
      } else if (forcePlay) {
        this.playVideo(this.core.index);
      }
    };
    Video2.prototype.onVideoLoadAfterPosterClick = function($el, index) {
      $el.addClass("lg-video-loaded");
      this.playVideo(index);
    };
    Video2.prototype.destroy = function() {
      this.core.LGel.off(".lg.video");
      this.core.LGel.off(".video");
    };
    return Video2;
  }()
);
var lg_video_es5_default = Video;
export {
  lg_video_es5_default as default
};
/*! Bundled license information:

lightgallery/plugins/video/lg-video.es5.js:
  (*!
   * lightgallery | 2.7.2 | September 20th 2023
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=lightgallery_plugins_video.js.map
