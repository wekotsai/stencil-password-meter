import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconMail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { class: `icon ${this.classes}`, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", focusable: this.focusable }, h("path", { fill: "currentColor", d: "M21.89 3H2.11C.947 3 0 3.932 0 5.077v13.846C0 20.064.944 21 2.11 21h19.78c1.16 0 2.11-.929 2.11-2.077V5.077C24 3.936 23.056 3 21.89 3zm-.29 1.385l-9.555 9.407-9.638-9.407H21.6zM1.405 18.636V5.357l6.773 6.611-6.773 6.668zm.995.98l6.776-6.673 2.375 2.318a.712.712 0 00.992-.002l2.315-2.28 6.74 6.636H2.401zm20.193-.98L15.854 12l6.74-6.636v13.272z" }))));
  }
};
IconMail.style = iconCss;

export { IconMail as d4l_icon_mail };
