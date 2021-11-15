import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconCheckboxWithoutTick = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("path", { fill: "currentColor", "fill-rule": "evenodd", d: "M22 19a3 3 0 01-2.824 2.995L19 22H5a3 3 0 01-2.995-2.824L2 19V5a3 3 0 012.824-2.995L5 2h14a3 3 0 012.995 2.824L22 5v14zM5 4a1 1 0 00-.993.883L4 5v14a1 1 0 00.883.993L5 20h14a1 1 0 00.993-.883L20 19V5a1 1 0 00-.883-.993L19 4H5z" }))));
  }
};
IconCheckboxWithoutTick.style = iconCss;

export { IconCheckboxWithoutTick as d4l_icon_checkbox_without_tick };
