import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("g", { fill: "none", "fill-rule": "evenodd", stroke: "currentColor", "stroke-width": "1.5" }, h("path", { d: "M19 1.75H5a3.24 3.24 0 00-2.298.952A3.24 3.24 0 001.75 5v16.453l3.84-3.03H19a3.24 3.24 0 002.298-.951 3.24 3.24 0 00.952-2.298V5a3.24 3.24 0 00-.952-2.298A3.24 3.24 0 0019 1.75z" }), h("path", { "stroke-linecap": "square", d: "M6.5 6.042h11m-11 3.666h11m-11 3.667h6.417" })))));
  }
};
IconMessage.style = iconCss;

export { IconMessage as d4l_icon_message };
