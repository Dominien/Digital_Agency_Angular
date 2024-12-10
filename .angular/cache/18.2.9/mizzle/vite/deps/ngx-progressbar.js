import {
  CommonModule,
  NgIf
} from "./chunk-7NIVXGKI.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-BLYXKAJQ.js";
import "./chunk-37AKNIK6.js";
import "./chunk-EG6SOSD2.js";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  Subscription,
  combineLatest,
  debounce,
  delay,
  filter,
  finalize,
  of,
  switchMap,
  takeUntil,
  tap,
  timer
} from "./chunk-YBINNAIN.js";
import {
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/ngx-progressbar/fesm2022/ngx-progressbar.mjs
var _c0 = ["progressbar"];
var _c1 = ["progressbarWrapper"];
function NgProgressComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("box-shadow", "0 0 10px " + ctx_r0.color + ", 0 0 5px " + ctx_r0.color);
  }
}
function NgProgressComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelement(1, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("border-top-color", ctx_r0.color)("border-left-color", ctx_r0.color);
  }
}
var NgProgressRef = class {
  // Get current progress state
  get snapshot() {
    return this._state.value;
  }
  // Check if progress has started
  get isStarted() {
    return this.snapshot.active;
  }
  constructor(customConfig, _onDestroyCallback) {
    this._onDestroyCallback = _onDestroyCallback;
    this._started = new Subject();
    this.started = this._started.pipe(filter(() => !this.isStarted));
    this._completed = new Subject();
    this.completed = this._completed.pipe(filter(() => this.isStarted));
    this._trickling = new Subject();
    this._worker = Subscription.EMPTY;
    this._state = new BehaviorSubject({
      active: false,
      value: 0
    });
    this._config = new BehaviorSubject(customConfig);
    this.state = this._state.asObservable();
    this.config = this._config.asObservable();
    this._worker = combineLatest([this._trickling, this._config]).pipe(debounce(([start, config]) => timer(start ? config.debounceTime : 0)), switchMap(([start, config]) => start ? this.onTrickling(config) : this.onComplete(config))).subscribe();
  }
  /**
   * Start the progress
   */
  start() {
    this._started.next();
    this._trickling.next(true);
  }
  /**
   * Complete the progress
   */
  complete() {
    this._trickling.next(false);
  }
  /**
   * Increment the progress
   */
  inc(amount) {
    const n = this.snapshot.value;
    if (!this.isStarted) {
      this.start();
    } else {
      if (typeof amount !== "number") {
        amount = this._config.value.trickleFunc(n);
      }
      this.set(n + amount);
    }
  }
  /**
   * Set the progress
   */
  set(n) {
    this.setState({
      value: this.clamp(n),
      active: true
    });
  }
  /**
   * Set config
   */
  setConfig(config) {
    this._config.next(__spreadValues(__spreadValues({}, this._config.value), config));
  }
  /**
   * Destroy progress reference
   */
  destroy() {
    this._worker.unsubscribe();
    this._trickling.complete();
    this._state.complete();
    this._config.complete();
    this._started.complete();
    this._completed.complete();
    this._onDestroyCallback();
  }
  /**
   * Set progress state
   */
  setState(state) {
    this._state.next(__spreadValues(__spreadValues({}, this.snapshot), state));
  }
  /**
   * Clamps a value to be between min and max
   */
  clamp(n) {
    return Math.max(this._config.value.min, Math.min(this._config.value.max, n));
  }
  /**
   * Keeps incrementing the progress
   */
  onTrickling(config) {
    if (!this.isStarted) {
      this.set(this._config.value.min);
    }
    return timer(0, config.trickleSpeed).pipe(tap(() => this.inc()));
  }
  /**
   * Completes then resets the progress
   */
  onComplete(config) {
    this._completed.next();
    return !this.isStarted ? EMPTY : of({}).pipe(
      // Complete the progress
      tap(() => this.setState({
        value: 100
      })),
      // Deactivate the progress after a tiny delay
      delay(config.speed * 1.7),
      tap(() => this.setState({
        active: false
      })),
      // Use a tiny delay before resetting
      delay(config.speed),
      // Force the progress to reset even it got cancelled
      finalize(() => this.setState({
        value: 0
      })),
      // Cancel any of the finalizing delays if the progress has started again
      takeUntil(this._started)
    );
  }
};
var NG_PROGRESS_CONFIG = new InjectionToken("ngProgressConfig");
var defaultConfig = {
  min: 8,
  max: 100,
  speed: 200,
  debounceTime: 0,
  trickleSpeed: 300,
  fixed: true,
  meteor: true,
  thick: false,
  spinner: true,
  ease: "linear",
  color: "#1B95E0",
  direction: "ltr+",
  spinnerPosition: "right",
  trickleFunc: (n) => {
    if (n >= 0 && n < 20) return 10;
    if (n >= 20 && n < 50) return 4;
    if (n >= 50 && n < 80) return 2;
    if (n >= 80 && n < 99) return 0.5;
    return 0;
  }
};
var NgProgress = class _NgProgress {
  constructor(config) {
    this._instances = /* @__PURE__ */ new Map();
    this.config = config ? __spreadValues(__spreadValues({}, defaultConfig), config) : defaultConfig;
  }
  /**
   * Get or Create progress bar by ID
   */
  ref(id = "root", config) {
    if (this._instances.has(id)) {
      const progressRef = this._instances.get(id);
      if (config) {
        progressRef.setConfig(__spreadValues(__spreadValues({}, this.config), config));
      }
      return progressRef;
    } else {
      const progressRef = new NgProgressRef(__spreadValues(__spreadValues({}, this.config), config), this.deleteInstance(id));
      return this._instances.set(id, progressRef).get(id);
    }
  }
  /**
   * Destroy all progress bar instances
   */
  destroyAll() {
    this._instances.forEach((ref) => ref.destroy());
  }
  /**
   * A destroyer function for each progress bar instance
   */
  deleteInstance(id) {
    return () => {
      this._instances.delete(id);
    };
  }
  static {
    this.ɵfac = function NgProgress_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgProgress)(ɵɵinject(NG_PROGRESS_CONFIG, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgProgress,
      factory: _NgProgress.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgProgress, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [NG_PROGRESS_CONFIG]
      }]
    }];
  }, null);
})();
var NgProgressComponent = class _NgProgressComponent {
  get isStarted() {
    return this.progressRef?.isStarted;
  }
  constructor(_ngProgress) {
    this._ngProgress = _ngProgress;
    this.id = "root";
    this.min = this._ngProgress.config.min;
    this.max = this._ngProgress.config.max;
    this.ease = this._ngProgress.config.ease;
    this.color = this._ngProgress.config.color;
    this.speed = this._ngProgress.config.speed;
    this.thick = this._ngProgress.config.thick;
    this.fixed = this._ngProgress.config.fixed;
    this.meteor = this._ngProgress.config.meteor;
    this.spinner = this._ngProgress.config.spinner;
    this.trickleSpeed = this._ngProgress.config.trickleSpeed;
    this.debounceTime = this._ngProgress.config.debounceTime;
    this.trickleFunc = this._ngProgress.config.trickleFunc;
    this.spinnerPosition = this._ngProgress.config.spinnerPosition;
    this.direction = this._ngProgress.config.direction;
    this.started = new EventEmitter();
    this.completed = new EventEmitter();
  }
  ngOnChanges() {
    this.progressRef?.setConfig({
      max: this.max > 0 && this.max <= 100 ? this.max : 100,
      min: this.min < 100 && this.min >= 0 ? this.min : 0,
      speed: this.speed,
      trickleSpeed: this.trickleSpeed,
      trickleFunc: this.trickleFunc,
      debounceTime: this.debounceTime
    });
  }
  ngOnInit() {
    this.progressRef = this._ngProgress.ref(this.id, {
      max: this.max,
      min: this.min,
      speed: this.speed,
      trickleSpeed: this.trickleSpeed,
      debounceTime: this.debounceTime
    });
    const progress = this.progressElement.nativeElement;
    const progressWrapper = this.progressWrapperElement.nativeElement;
    this._state = this.progressRef.state.pipe(tap((state) => {
      progress.style.transform = `translate3d(${state.value}%,0,0)`;
      if (state.active) {
        progress.style.transition = `all ${this.speed}ms ${this.ease}`;
        progressWrapper.setAttribute("active", "true");
      } else {
        progress.style.transition = "none";
        progressWrapper.setAttribute("active", "false");
      }
    })).subscribe();
    if (this.started.observed) {
      this._started = this.progressRef.started.subscribe(() => this.started.emit());
    }
    if (this.completed.observed) {
      this._completed = this.progressRef.completed.subscribe(() => this.completed.emit());
    }
  }
  ngOnDestroy() {
    this._state?.unsubscribe();
    this._started?.unsubscribe();
    this._completed?.unsubscribe();
    this.progressRef?.destroy();
  }
  start() {
    this.progressRef.start();
  }
  complete() {
    this.progressRef.complete();
  }
  inc(n) {
    this.progressRef.inc(n);
  }
  set(n) {
    this.progressRef.set(n);
  }
  static {
    this.ɵfac = function NgProgressComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgProgressComponent)(ɵɵdirectiveInject(NgProgress));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgProgressComponent,
      selectors: [["ng-progress"]],
      viewQuery: function NgProgressComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
          ɵɵviewQuery(_c1, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progressElement = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progressWrapperElement = _t.first);
        }
      },
      hostAttrs: ["role", "progressbar"],
      hostVars: 4,
      hostBindings: function NgProgressComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("spinnerPosition", ctx.spinnerPosition)("direction", ctx.direction)("thick", ctx.thick)("fixed", ctx.fixed);
        }
      },
      inputs: {
        id: "id",
        min: "min",
        max: "max",
        ease: "ease",
        color: "color",
        speed: "speed",
        thick: "thick",
        fixed: "fixed",
        meteor: "meteor",
        spinner: "spinner",
        trickleSpeed: "trickleSpeed",
        debounceTime: "debounceTime",
        trickleFunc: "trickleFunc",
        spinnerPosition: "spinnerPosition",
        direction: "direction"
      },
      outputs: {
        started: "started",
        completed: "completed"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 7,
      vars: 6,
      consts: [["progressbarWrapper", ""], ["progressbar", ""], [1, "ng-progress-bar"], [1, "ng-bar-placeholder"], [1, "ng-bar"], ["class", "ng-meteor", 3, "boxShadow", 4, "ngIf"], ["class", "ng-spinner", 4, "ngIf"], [1, "ng-meteor"], [1, "ng-spinner"], [1, "ng-spinner-icon"]],
      template: function NgProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4, 1);
          ɵɵtemplate(5, NgProgressComponent_div_5_Template, 1, 2, "div", 5);
          ɵɵelementEnd()();
          ɵɵtemplate(6, NgProgressComponent_div_6_Template, 2, 4, "div", 6);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("transition", "opacity " + ctx.speed + "ms " + ctx.ease);
          ɵɵadvance(3);
          ɵɵstyleProp("background-color", ctx.color);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.meteor);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.spinner);
        }
      },
      dependencies: [CommonModule, NgIf],
      styles: ['[_nghost-%COMP%]{z-index:999999;pointer-events:none}[fixed=true][_nghost-%COMP%]   .ng-progress-bar[_ngcontent-%COMP%], [fixed=true][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{top:15px}[fixed=true][spinnerPosition=left][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{left:15px}[fixed=true][spinnerPosition=right][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{right:15px}[thick=true][_nghost-%COMP%]   .ng-spinner-icon[_ngcontent-%COMP%]{width:24px;height:24px;border-width:3px}[thick=true][_nghost-%COMP%]   .ng-bar-placeholder[_ngcontent-%COMP%]{height:3px!important}[direction="ltr+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=ltr-][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{transform:rotate(3deg)}[direction="ltr+"][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=ltr-][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{transform:rotate(4deg)}[direction="ltr+"][_nghost-%COMP%]   .ng-bar[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-bar[_ngcontent-%COMP%]{margin-left:-100%}[direction="ltr+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{right:0}[direction="ltr+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=rtl-][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{top:-3px}[direction="ltr+"][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=rtl-][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{top:-4px}[direction=ltr-][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{bottom:-3px}[direction=ltr-][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction="rtl+"][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{bottom:-4px}[direction=ltr-][_nghost-%COMP%]   .ng-bar-placeholder[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-bar-placeholder[_ngcontent-%COMP%]{transform:rotate(180deg)}[direction=ltr-][_nghost-%COMP%]   .ng-spinner-icon[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-spinner-icon[_ngcontent-%COMP%]{animation-directionection:reverse}[direction="rtl+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=rtl-][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{transform:rotate(-3deg)}[direction="rtl+"][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=rtl-][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{transform:rotate(-4deg)}[spinnerPosition=left][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{left:10px}[spinnerPosition=right][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{right:10px}.ng-progress-bar[_ngcontent-%COMP%]{position:relative;z-index:999999;top:0;left:0;width:100%;transform:scale(1);filter:alpha(opacity=0);opacity:0}.ng-progress-bar[active=true][_ngcontent-%COMP%]{filter:alpha(opacity=100);opacity:1;transition:none}.ng-bar-placeholder[_ngcontent-%COMP%]{position:absolute;height:2px;width:100%}.ng-bar[_ngcontent-%COMP%]{width:100%;height:100%;transform:translate(-100%,0,0)}.ng-meteor[_ngcontent-%COMP%]{display:block;position:absolute;width:100px;height:100%;opacity:1}.ng-spinner[_ngcontent-%COMP%]{position:absolute;display:block;z-index:1031;top:10px}.ng-spinner-icon[_ngcontent-%COMP%]{width:18px;height:18px;box-sizing:border-box;animation:_ngcontent-%COMP%_spinner-animation .25s linear infinite;border:2px solid transparent;border-radius:50%}@keyframes _ngcontent-%COMP%_spinner-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgProgressComponent, [{
    type: Component,
    args: [{
      selector: "ng-progress",
      host: {
        "role": "progressbar",
        "[attr.spinnerPosition]": "spinnerPosition",
        "[attr.direction]": "direction",
        "[attr.thick]": "thick",
        "[attr.fixed]": "fixed"
      },
      template: `
    <div #progressbarWrapper
         class="ng-progress-bar"
         [style.transition]="'opacity ' + speed + 'ms ' + ease">
      <div class="ng-bar-placeholder">
        <div #progressbar
             class="ng-bar"
             [style.backgroundColor]="color">
          <div *ngIf="meteor" class="ng-meteor" [style.boxShadow]="'0 0 10px ' + color + ', 0 0 5px ' + color"></div>
        </div>
      </div>
      <div *ngIf="spinner" class="ng-spinner">
        <div class="ng-spinner-icon"
             [style.borderTopColor]="color"
             [style.borderLeftColor]="color"></div>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CommonModule],
      styles: [':host{z-index:999999;pointer-events:none}:host[fixed=true] .ng-progress-bar,:host[fixed=true] .ng-spinner{position:fixed}:host[fixed=true] .ng-spinner{top:15px}:host[fixed=true][spinnerPosition=left] .ng-spinner{left:15px}:host[fixed=true][spinnerPosition=right] .ng-spinner{right:15px}:host[thick=true] .ng-spinner-icon{width:24px;height:24px;border-width:3px}:host[thick=true] .ng-bar-placeholder{height:3px!important}:host[direction="ltr+"] .ng-meteor,:host[direction=ltr-] .ng-meteor{transform:rotate(3deg)}:host[direction="ltr+"][thick=true] .ng-meteor,:host[direction=ltr-][thick=true] .ng-meteor{transform:rotate(4deg)}:host[direction="ltr+"] .ng-bar,:host[direction="rtl+"] .ng-bar{margin-left:-100%}:host[direction="ltr+"] .ng-meteor,:host[direction="rtl+"] .ng-meteor{right:0}:host[direction="ltr+"] .ng-meteor,:host[direction=rtl-] .ng-meteor{top:-3px}:host[direction="ltr+"][thick=true] .ng-meteor,:host[direction=rtl-][thick=true] .ng-meteor{top:-4px}:host[direction=ltr-] .ng-meteor,:host[direction="rtl+"] .ng-meteor{bottom:-3px}:host[direction=ltr-][thick=true] .ng-meteor,:host[direction="rtl+"][thick=true] .ng-meteor{bottom:-4px}:host[direction=ltr-] .ng-bar-placeholder,:host[direction="rtl+"] .ng-bar-placeholder{transform:rotate(180deg)}:host[direction=ltr-] .ng-spinner-icon,:host[direction="rtl+"] .ng-spinner-icon{animation-directionection:reverse}:host[direction="rtl+"] .ng-meteor,:host[direction=rtl-] .ng-meteor{transform:rotate(-3deg)}:host[direction="rtl+"][thick=true] .ng-meteor,:host[direction=rtl-][thick=true] .ng-meteor{transform:rotate(-4deg)}:host[spinnerPosition=left] .ng-spinner{left:10px}:host[spinnerPosition=right] .ng-spinner{right:10px}.ng-progress-bar{position:relative;z-index:999999;top:0;left:0;width:100%;transform:scale(1);filter:alpha(opacity=0);opacity:0}.ng-progress-bar[active=true]{filter:alpha(opacity=100);opacity:1;transition:none}.ng-bar-placeholder{position:absolute;height:2px;width:100%}.ng-bar{width:100%;height:100%;transform:translate(-100%,0,0)}.ng-meteor{display:block;position:absolute;width:100px;height:100%;opacity:1}.ng-spinner{position:absolute;display:block;z-index:1031;top:10px}.ng-spinner-icon{width:18px;height:18px;box-sizing:border-box;animation:spinner-animation .25s linear infinite;border:2px solid transparent;border-radius:50%}@keyframes spinner-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n']
    }]
  }], function() {
    return [{
      type: NgProgress
    }];
  }, {
    id: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    ease: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    speed: [{
      type: Input
    }],
    thick: [{
      type: Input
    }],
    fixed: [{
      type: Input
    }],
    meteor: [{
      type: Input
    }],
    spinner: [{
      type: Input
    }],
    trickleSpeed: [{
      type: Input
    }],
    debounceTime: [{
      type: Input
    }],
    trickleFunc: [{
      type: Input
    }],
    spinnerPosition: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    started: [{
      type: Output
    }],
    completed: [{
      type: Output
    }],
    progressElement: [{
      type: ViewChild,
      args: ["progressbar", {
        static: true
      }]
    }],
    progressWrapperElement: [{
      type: ViewChild,
      args: ["progressbarWrapper", {
        static: true
      }]
    }]
  });
})();
var NgProgressModule = class _NgProgressModule {
  static withConfig(config) {
    return {
      ngModule: _NgProgressModule,
      providers: [{
        provide: NG_PROGRESS_CONFIG,
        useValue: config
      }]
    };
  }
  static {
    this.ɵfac = function NgProgressModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgProgressModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgProgressModule,
      imports: [NgProgressComponent],
      exports: [NgProgressComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NgProgressComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgProgressModule, [{
    type: NgModule,
    args: [{
      exports: [NgProgressComponent],
      imports: [NgProgressComponent]
    }]
  }], null, null);
})();
export {
  NG_PROGRESS_CONFIG,
  NgProgress,
  NgProgressComponent,
  NgProgressModule,
  NgProgressRef
};
//# sourceMappingURL=ngx-progressbar.js.map
