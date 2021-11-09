import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconFlagSpain = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: `icon icon--flag ${this.classes}`, width: "28", height: "20" }, h("defs", null, h("rect", { id: "a", width: "28", height: "20", x: "0", y: "0", rx: "2" })), h("g", { fill: "none", "fill-rule": "evenodd" }, h("mask", { id: "b", fill: "#fff" }, h("use", { xlinkHref: "#a" })), h("use", { fill: "#FFF", xlinkHref: "#a" }), h("path", { fill: "#DD172C", d: "M0 0h28v5.333H0zm0 14.667h28V20H0z", mask: "url(#b)" }), h("path", { fill: "#FFD133", d: "M0 5.333h28v9.333H0z", mask: "url(#b)" }), h("path", { fill: "#FFEDB1", d: "M7.333 9.333h1.334V10H7.333z", mask: "url(#b)" }), h("path", { stroke: "#A41517", "stroke-width": ".667", d: "M8.36 9.002l.084 2.317c-.024.26-.144.496-.32.675-.178.18-.413.303-.671.333a1.326 1.326 0 01-.85-.292 1.063 1.063 0 01-.382-.728h0l-.144-1.726L8.361 9z", mask: "url(#b)" }), h("path", { fill: "#A41517", d: "M6 10h2.667v.667H8L7.333 12l-.666-1.333H6zM4 8h1.333v4.667H4zm5.333 0h1.333v4.667H9.333zM6 7.333c0-.368.306-.666.673-.666h1.32c.372 0 .674.296.674.666v.33A.33.33 0 018.34 8H6.327A.327.327 0 016 7.664v-.33z", mask: "url(#b)" })))));
  }
};
IconFlagSpain.style = iconCss;

export { IconFlagSpain as d4l_icon_flag_es };
