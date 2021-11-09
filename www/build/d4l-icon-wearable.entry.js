import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconWearable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}` }, h("path", { fill: "currentColor", d: "M14.2 0A2 2 0 0 1 16 1.5v.1l.6 3a2 2 0 0 1-.3 1.6A3 3 0 0 1 17 8v8a3 3 0 0 1-.6 1.8c.2.4.4.8.4 1.3V19.4l-.7 3a2 2 0 0 1-1.6 1.6H9.8A2 2 0 0 1 8 22.7l-.1-.1v-.2l-.6-3a2 2 0 0 1 .3-1.6A3 3 0 0 1 7 16V8c0-.7.2-1.3.6-1.8a2 2 0 0 1-.4-1.5l.7-3A2 2 0 0 1 9.7 0h.1zM10 19h-.7l.5 3h4.4l.6-3zm4-12h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm.2-5H9.8l-.6 3h5.6z" }))));
  }
};
IconWearable.style = iconCss;

export { IconWearable as d4l_icon_wearable };
