import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconFlagPortugal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: `icon icon--flag ${this.classes}`, width: "28", height: "20" }, h("defs", null, h("rect", { id: "a", width: "28", height: "20", x: "0", y: "0", rx: "2" })), h("g", { fill: "none", "fill-rule": "evenodd" }, h("mask", { id: "b", fill: "#fff" }, h("use", { xlinkHref: "#a" })), h("use", { fill: "#FFF", xlinkHref: "#a" }), h("path", { fill: "#FF2936", d: "M0 0h28v20H0z", mask: "url(#b)" }), h("path", { fill: "#128415", d: "M0 0h10.667v20H0z", mask: "url(#b)" }), h("circle", { cx: "10.667", cy: "10", r: "3.333", stroke: "#FAF94F", "stroke-width": "1.333", mask: "url(#b)" }), h("path", { fill: "#FFF", d: "M9.333 8.341c0-.188.144-.341.327-.341h2.013c.18 0 .327.152.327.341v2.327A1.33 1.33 0 0110.667 12c-.737 0-1.334-.59-1.334-1.332V8.341z", mask: "url(#b)" }), h("path", { fill: "#1D50B5", d: "M10.667 10.667c.368 0 .666-.965.666-1.334a.666.666 0 10-1.333 0c0 .369.298 1.334.667 1.334z", mask: "url(#b)" })))));
  }
};
IconFlagPortugal.style = iconCss;

export { IconFlagPortugal as d4l_icon_flag_pt };
