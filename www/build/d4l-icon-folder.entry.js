import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconFolder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("path", { fill: "currentColor", d: "M9.225 4H4.6C3.17 4 2 5.093 2 6.456v12.088C2 19.907 3.17 21 4.6 21h14.8c1.43 0 2.6-1.093 2.6-2.456V9.046l-.005-.156c-.085-1.29-1.22-2.3-2.595-2.3h-7.933L9.841 4.313C9.701 4.117 9.471 4 9.225 4zM4.6 5.457h4.232l1.627 2.277c.14.197.37.314.616.314H19.4c.614 0 1.1.453 1.1.998v9.498c0 .545-.486.999-1.1.999H4.6c-.614 0-1.1-.454-1.1-.999V6.456c0-.545.486-.999 1.1-.999z" }))));
  }
};
IconFolder.style = iconCss;

export { IconFolder as d4l_icon_folder };
