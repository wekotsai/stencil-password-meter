import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconLike = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", class: `icon ${this.classes}` }, h("path", { fill: "currentColor", d: "M24 0a24 24 0 110 48 24 24 0 010-48zm0 3a21 21 0 100 42 21 21 0 000-42zM10.86 28.77c3.74 2.63 8.1 3.94 13.14 3.94s9.4-1.31 13.14-3.94a1.5 1.5 0 111.72 2.46C34.6 34.2 29.63 35.7 24 35.7s-10.6-1.5-14.86-4.48a1.5 1.5 0 111.72-2.46zM13 14a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6z" }))));
  }
};
IconLike.style = iconCss;

export { IconLike as d4l_icon_like };
