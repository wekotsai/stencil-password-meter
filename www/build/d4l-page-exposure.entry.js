import { r as registerInstance } from './index-6c3223ca.js';

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
};
var _setupTimeout, _captureTimeout, _seenPortion, _relativeScrollPosition, _pageInterceptionRatio, _io;
let PageExposure = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    _setupTimeout.set(this, void 0);
    _captureTimeout.set(this, void 0);
    _seenPortion.set(this, 0);
    _relativeScrollPosition.set(this, 0);
    _pageInterceptionRatio.set(this, 0);
    _io.set(this, void 0);
    this.captureDebounce = 500;
    this.setup = this.setup.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onBeforeUnload = this.onBeforeUnload.bind(this);
    this.track = this.track.bind(this);
  }
  componentDidLoad() {
    var _a;
    if (!window.IntersectionObserver) {
      return;
    }
    (_a = this.history) === null || _a === void 0 ? void 0 : _a.block((() => {
      this.track(__classPrivateFieldGet(this, _seenPortion));
      this.start();
      return true;
    }));
    this.start();
  }
  reset() {
    var _a;
    clearTimeout(__classPrivateFieldGet(this, _setupTimeout));
    clearTimeout(__classPrivateFieldGet(this, _captureTimeout));
    __classPrivateFieldSet(this, _seenPortion, 0);
    __classPrivateFieldSet(this, _relativeScrollPosition, 0);
    __classPrivateFieldSet(this, _pageInterceptionRatio, 0);
    document.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('beforeunload', this.onBeforeUnload);
    (_a = __classPrivateFieldGet(this, _io)) === null || _a === void 0 ? void 0 : _a.unobserve(document.body);
  }
  start() {
    this.reset();
    __classPrivateFieldSet(this, _setupTimeout, setTimeout(this.setup, 1000));
  }
  setup() {
    // Tracking on beforeunload event only works if (matomo) beacons are activated!
    window.addEventListener('beforeunload', this.onBeforeUnload);
    document.addEventListener('scroll', this.onScroll);
    __classPrivateFieldSet(this, _io, new IntersectionObserver(([{ intersectionRatio }]) => {
      __classPrivateFieldSet(this, _pageInterceptionRatio, intersectionRatio);
      this.capture();
    }, {
      threshold: new Array(101).fill(null).map((_, i) => i / 100),
    }));
    __classPrivateFieldGet(this, _io).observe(document.body);
  }
  capture() {
    window.clearTimeout(__classPrivateFieldGet(this, _captureTimeout));
    __classPrivateFieldSet(this, _captureTimeout, setTimeout(() => {
      const ratio = __classPrivateFieldGet(this, _pageInterceptionRatio);
      const seenPortion = Math.round(Math.min(Math.max(__classPrivateFieldGet(this, _relativeScrollPosition) * ratio + ratio, 0), 1) * 10) * 10;
      if (__classPrivateFieldGet(this, _seenPortion) < seenPortion) {
        __classPrivateFieldSet(this, _seenPortion, seenPortion);
      }
    }, this.captureDebounce));
  }
  onBeforeUnload() {
    this.track(__classPrivateFieldGet(this, _seenPortion));
  }
  onScroll() {
    __classPrivateFieldSet(this, _relativeScrollPosition, window.pageYOffset / window.innerHeight);
    this.capture();
  }
};
_setupTimeout = new WeakMap(), _captureTimeout = new WeakMap(), _seenPortion = new WeakMap(), _relativeScrollPosition = new WeakMap(), _pageInterceptionRatio = new WeakMap(), _io = new WeakMap();

export { PageExposure as d4l_page_exposure };
