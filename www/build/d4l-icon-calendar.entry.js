import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconCalendar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: `icon ${this.classes}` }, h("path", { fill: "currentColor", d: "M29.3 3H25V1a1 1 0 10-2 0v2h-6V1a1 1 0 10-2 0v2H9V1a1 1 0 10-2 0v2H2.7A2.7 2.7 0 000 5.7v23.6C0 30.8 1.2 32 2.7 32h26.6c1.5 0 2.7-1.2 2.7-2.7V5.7C32 4.2 30.8 3 29.3 3zm.7 26.3c0 .4-.3.7-.7.7H2.7a.7.7 0 01-.7-.7V5.7c0-.4.3-.7.7-.7H7v2a1 1 0 102 0V5h6v2a1 1 0 102 0V5h6v2a1 1 0 102 0V5h4.3c.4 0 .7.3.7.7v23.6z" }), h("path", { fill: "currentColor", d: "M7 12h4v3H7zM7 17h4v3H7zM7 22h4v3H7zM14 22h4v3h-4zM14 17h4v3h-4zM14 12h4v3h-4zM21 22h4v3h-4zM21 17h4v3h-4zM21 12h4v3h-4z" }))));
  }
};
IconCalendar.style = iconCss;

export { IconCalendar as d4l_icon_calendar };
