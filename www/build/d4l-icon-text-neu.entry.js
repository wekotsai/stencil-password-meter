import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconTextNeu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { class: `icon icon__fill--none ${this.classes}`, focusable: this.focusable, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 40 24" }, h("g", { fill: "#FF6A65", "fill-rule": "nonzero" }, h("path", { d: "M10.355 16.223v-5.537c-.002-.42-.01-.72-.023-.902h.023c.108.293.274.637.498 1.03l3.139 5.41h1.68V8h-1.356v5.374c0 .309.008.664.023 1.066h-.023c-.116-.325-.286-.676-.51-1.054L10.714 8H9v8.223h1.355zm12.775 0v-1.17h-3.926v-2.467h3.648v-1.158h-3.648V9.17h3.845V8h-5.34v8.223h5.42zm4.841.197c.695 0 1.291-.125 1.79-.376.497-.251.876-.608 1.134-1.072.26-.463.388-1.003.388-1.621V8H29.79v5.27c0 .587-.158 1.048-.474 1.384-.317.336-.765.504-1.344.504-.571 0-1.015-.168-1.332-.504-.316-.336-.475-.797-.475-1.384V8H24.67v5.35c0 .619.13 1.159.388 1.622.259.464.635.82 1.13 1.072.494.25 1.088.376 1.783.376z" }), h("path", { d: "M36 0c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h32zm0 1H4C2.402 1 1.096 2.249 1.005 3.824L1 4v16c0 1.598 1.249 2.904 2.824 2.995L4 23h32c1.598 0 2.904-1.249 2.995-2.824L39 20V4c0-1.598-1.249-2.904-2.824-2.995L36 1z" })))));
  }
};
IconTextNeu.style = iconCss;

export { IconTextNeu as d4l_icon_text_neu };
