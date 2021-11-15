import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconFlagSlovenia = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: `icon icon--flag ${this.classes}`, width: "28", height: "20" }, h("defs", null, h("filter", { id: "c", width: "110.7%", height: "145%", x: "-5.4%", y: "-22.5%", filterUnits: "objectBoundingBox" }, h("feMorphology", { in: "SourceAlpha", operator: "dilate", radius: ".5", result: "shadowSpreadOuter1" }), h("feOffset", { in: "shadowSpreadOuter1", result: "shadowOffsetOuter1" }), h("feColorMatrix", { in: "shadowOffsetOuter1", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" })), h("rect", { id: "a", width: "28", height: "20", x: "0", y: "0", rx: "2" }), h("path", { id: "d", d: "M0 13.333h28V20H0z" })), h("g", { fill: "none", "fill-rule": "evenodd" }, h("mask", { id: "b", fill: "#fff" }, h("use", { xlinkHref: "#a" })), h("rect", { width: "27.5", height: "19.5", x: ".25", y: ".25", stroke: "#F5F5F5", "stroke-width": ".5", rx: "2" }), h("path", { fill: "#0C47B7", d: "M7.333 4.667c.97 0 1.911.666 1.911.666v1.334H28v6.666H0V6.667h5.333V5.333s1.03-.666 2-.666zm0 2a1.333 1.333 0 100 2.667 1.333 1.333 0 000-2.667z", mask: "url(#b)" }), h("g", { mask: "url(#b)" }, h("use", { fill: "#000", filter: "url(#c)", xlinkHref: "#d" }), h("use", { fill: "#E53B35", xlinkHref: "#d" }))))));
  }
};
IconFlagSlovenia.style = iconCss;

export { IconFlagSlovenia as d4l_icon_flag_si };
