import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconSnowflake = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("path", { fill: "currentColor", d: "M11.987 2c.561 0 1.016.455 1.016 1.016l-.001 7.34 6.509-3.68c.474-.267 1.076-.107 1.354.361.27.455.121 1.044-.334 1.315l-.018.01-6.522 3.687 6.522 3.687c.46.26.623.846.363 1.307l-.01.018c-.28.469-.881.629-1.355.36l-6.509-3.679.001 7.242c0 .561-.455 1.016-1.016 1.016-.56 0-1.015-.455-1.015-1.016l-.001-7.228-6.482 3.666c-.474.268-1.076.108-1.354-.36-.27-.456-.121-1.045.334-1.316l.018-.01 6.521-3.687-6.52-3.687c-.462-.26-.624-.846-.364-1.307l.01-.018c.28-.468.881-.628 1.355-.36l6.482 3.664V3.016c0-.561.455-1.016 1.016-1.016z" }))));
  }
};
IconSnowflake.style = iconCss;

export { IconSnowflake as d4l_icon_snowflake };
