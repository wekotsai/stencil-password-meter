import { r as registerInstance, h } from './index-6c3223ca.js';

const articleContentSectionCss = ".article__content-section{display:block;font-size:var(--font-size-mobile-s);color:var(--color-primary)}.article--embedded .article__content-section{line-height:24px}.article__content-section--headline{margin:var(--space-l) 0 var(--space-xs);font-weight:500}.article--embedded .article__content-section--headline{margin:var(--space-l) 0 calc(var(--space-m) / 2)}.article__content-section--h3{font-size:var(--font-size-mobile-l)}.article__content-section--h4{font-size:var(--font-size-mobile-m)}.article__content-section--h5{font-size:var(--font-size-mobile-s)}.article--embedded .article__content-section--h5{margin-top:var(--space-m)}.article__content-section--paragraph,.article__content-section--list{margin:var(--space-xs) 0 var(--space-s)}.article--embedded .article__content-section--paragraph,.article--embedded .article__content-section--list{margin:var(--space-xs) 0 var(--space-m)}.article__content-section--paragraph strong{font-weight:500}.article__content-section--paragraph a{color:inherit;font-weight:500}.article__content-section--list{padding:0 0 0 1em;list-style-position:outside}.article__content-section--blockquote{margin:var(--space-s) 0;padding:0 var(--space-s);border-left:3px solid var(--color-primary-light);font-style:italic}.article--embedded .article__content-section--blockquote{margin:var(--space-m) 0}.article__content-section--image{margin:var(--space-m) 0;padding:0}.article__content-section--image img{display:block;width:100%}.article__content-section--image figcaption{display:block;text-align:center;font-size:var(--font-size-mobile-xs);color:var(--color-neutral);margin:var(--space-xs) 0 0}.article--embedded .article__content-section--image figcaption{text-align:left}.article__content-section--corona{padding:var(--space-m) var(--space-l);margin:var(--space-s) 0;text-align:center;border-radius:var(--border-radius-m)}.article__content-section--corona h3{font-weight:500;margin:0;font-size:calc(var(--font-size-desktop-xl) + 3px)}.article__content-section--corona p{margin:0 0 var(--space-xs);font-size:var(--font-size-desktop-xl)}.article__content-section--corona-green{background-color:var(--color-support-green)}.article__content-section--corona-red{background-color:var(--color-secondary-light)}.article__content-section--corona-blue{background-color:var(--color-primary-light)}.article__content-section--corona-blue>*{color:#fff}.article__content-section--unknown{margin:var(--space-m) 0}@media screen and (min-width: 768px){.article__content-section{font-size:var(--font-size-desktop-s)}.article__content-section--h3{font-size:var(--font-size-desktop-l)}.article__content-section--h4{font-size:var(--font-size-desktop-m)}.article__content-section--h5{font-size:var(--font-size-desktop-s)}.article__content-section--image figcaption{font-size:var(--font-size-desktop-xs)}}";

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
var _paragraphElRef;
let ArticleContentSectionComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    _paragraphElRef.set(this, void 0);
    this.classes = '';
    this.isEmbeddedContext = false;
    this.getClasses = (...modifiers) => `article__content-section ${modifiers
      .map((modifier) => `article__content-section--${modifier}`)
      .join(' ')} ${this.classes}`;
  }
  componentDidLoad() {
    var _a;
    (_a = __classPrivateFieldGet(this, _paragraphElRef)) === null || _a === void 0 ? void 0 : _a.querySelectorAll('a').forEach((linkEl) => {
      var _a;
      if (((_a = linkEl.href) === null || _a === void 0 ? void 0 : _a.indexOf(document.location.origin)) === 0) {
        return;
      }
      linkEl.setAttribute('rel', 'noopener noreferrer');
      linkEl.setAttribute('target', this.isEmbeddedContext ? '_self' : '_blank');
    });
  }
  componentDidRender() {
    var _a;
    (_a = __classPrivateFieldGet(this, _paragraphElRef)) === null || _a === void 0 ? void 0 : _a.querySelectorAll('[data-corona-statistic]').forEach((statEl) => {
      var _a, _b;
      const { coronaStatistic: src } = statEl.dataset;
      statEl.innerHTML = String((_b = (_a = this.coronaStats) === null || _a === void 0 ? void 0 : _a[src]) !== null && _b !== void 0 ? _b : '…');
    });
  }
  render() {
    var _a;
    const { getClasses, coronaStats } = this;
    const { type, content, attrs } = this.section;
    let TagName;
    switch (type) {
      case 'h1':
      case 'h2':
      case 'h3':
        const prio = type.slice(-1);
        TagName = type.replace(prio, String(parseInt(prio, 10) + 2));
        return h(TagName, { class: getClasses('headline', TagName) }, content);
      case 'paragraph':
      case 'kirbytext':
        return (h("div", { ref: (el) => (__classPrivateFieldSet(this, _paragraphElRef, el)), class: getClasses('paragraph'), innerHTML: content }));
      case 'ul':
      case 'ol':
        TagName = type;
        return (h(TagName, { class: getClasses('list') }, [].concat(content).map((item) => (h("li", null, item)))));
      case 'blockquote':
        return h("blockquote", { class: getClasses('blockquote') }, content);
      case 'image':
        return (h("figure", { class: getClasses('image') }, h("img", { loading: "lazy", src: attrs.src, alt: attrs.alt }), !!attrs.caption && h("figcaption", null, attrs.caption)));
      case 'corona':
        return (h("div", { class: getClasses('corona', `corona-${attrs.meta.theme}`) }, h("h3", null, (_a = coronaStats === null || coronaStats === void 0 ? void 0 : coronaStats[attrs.src]) !== null && _a !== void 0 ? _a : '…'), h("p", null, content)));
    }
    // TODO implement types code and video
    const errorText = `Unsupported content section type: ${this.section.type}`;
    window.requestAnimationFrame(() => {
      throw new Error(errorText);
    });
    return (h("d4l-notification-bar", { class: getClasses('unknown'), classes: "notification-bar--slim notification-bar--bgcolor-red notification-bar--color-white", headline: "Error", text: errorText }));
  }
};
_paragraphElRef = new WeakMap();
ArticleContentSectionComponent.style = articleContentSectionCss;

export { ArticleContentSectionComponent as d4l_article_content_section };
