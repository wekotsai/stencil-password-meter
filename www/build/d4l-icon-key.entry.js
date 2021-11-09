import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconKey = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { class: `icon ${this.classes}`, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" }, h("path", { d: "M16.444 0h-.006c-4.141 0-7.549 3.408-7.549 7.549v.007c0 .889.177 1.777.444 2.667L0 19.556V24h4.444v-2.667h2.667v-2.667h2.667l3.999-3.999c.86.291 1.76.441 2.667.444h.007c4.141 0 7.549-3.408 7.549-7.549v-.006-.007C24 3.408 20.592 0 16.451 0h-.007zM19.2 7.2c-1.361 0-2.4-1.039-2.4-2.4 0-1.36 1.039-2.4 2.4-2.4 1.36 0 2.4 1.04 2.4 2.4 0 1.361-1.04 2.4-2.4 2.4z" }))));
  }
};
IconKey.style = iconCss;

export { IconKey as d4l_icon_key };
