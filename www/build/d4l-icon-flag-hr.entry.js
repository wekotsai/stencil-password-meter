import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconFlagCroatia = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: `icon icon--flag ${this.classes}`, width: "28", height: "20" }, h("defs", null, h("linearGradient", { id: "c", x1: "50%", x2: "50%", y1: "0%", y2: "100%" }, h("stop", { offset: "0%", "stop-color": "#FF212E" }), h("stop", { offset: "100%", "stop-color": "#FD0D1B" })), h("rect", { id: "a", width: "28", height: "20", x: "0", y: "0", rx: "2" })), h("g", { fill: "none", "fill-rule": "evenodd" }, h("mask", { id: "b", fill: "#fff" }, h("use", { xlinkHref: "#a" })), h("rect", { width: "27.5", height: "19.5", x: ".25", y: ".25", stroke: "#F5F5F5", "stroke-width": ".5", rx: "2" }), h("path", { fill: "#FF202D", d: "M0 0h28v6.667H0z", mask: "url(#b)" }), h("path", { fill: "#1895DB", d: "M11.333 4.667l.667.666v1.334h-1.333V5.333l.666-.666zm2.667 0l.667.666v1.334h-1.334V5.333L14 4.667zm2.667 0l.666.666v1.334H16V5.333l.667-.666z", mask: "url(#b)", opacity: ".5" }), h("path", { fill: "#191F94", d: "M12.667 4.667l.666.666v1.334H12V5.333l.667-.666zm2.666 0l.667.666v1.334h-1.333V5.333l.666-.666z", mask: "url(#b)", opacity: ".5" }), h("path", { fill: "#2027AC", d: "M0 13.333h28V20H0z", mask: "url(#b)" }), h("path", { fill: "url(#c)", d: "M13.333 14.667H12v-1.334h1.333V12h1.334l-.001-1.333h-1.333V12H12v-1.333h-1.333V9.333H12v1.334h1.333V9.333h1.334V8h-1.334v1.333H12V8h1.333V6.667h1.334V8H16v1.333h-1.333v1.333H16V9.334h1.333v1.334H16V12h-1.333v1.333H16v1.334h-1.333v-1.334h-1.334v1.334zM12 12v1.333h-1.333V12H12zm5.333 0v1.333H16V12h1.333zm-.666-5.333L17.333 8H16V6.667h.667zm-4.667 0V8h-1.333l.666-1.333H12z", mask: "url(#b)" })))));
  }
};
IconFlagCroatia.style = iconCss;

export { IconFlagCroatia as d4l_icon_flag_hr };
