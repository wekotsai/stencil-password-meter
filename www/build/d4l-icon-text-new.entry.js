import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconTextNew = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { class: `icon icon__fill--none ${this.classes}`, focusable: this.focusable, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 40 24" }, h("g", { fill: "#FF6A65", "fill-rule": "nonzero" }, h("path", { d: "M8.388 16.422V10.75c-.002-.429-.01-.737-.024-.923h.024c.11.3.28.652.51 1.055l3.214 5.54h1.72V8h-1.388v5.504c0 .316.008.68.024 1.09h-.024c-.118-.331-.292-.691-.522-1.078L8.755 8H7v8.422h1.388zm13.083 0v-1.198H17.45v-2.527h3.736v-1.186H17.45V9.198h3.938V8H15.92v8.422h5.55zm4.732 0l1.412-6.168c.04-.19.063-.356.071-.499h.048c.007.143.031.309.07.499l1.412 6.168h1.78L33 8h-1.554l-1.28 6.168c-.032.174-.056.364-.072.57h-.036c-.008-.167-.04-.357-.094-.57L28.48 8h-1.542l-1.483 6.168c-.055.213-.087.403-.095.57h-.035c-.016-.206-.04-.396-.071-.57L23.974 8H22.42l2.004 8.422h1.78z" }), h("path", { d: "M36 0c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h32zm0 1H4C2.402 1 1.096 2.249 1.005 3.824L1 4v16c0 1.598 1.249 2.904 2.824 2.995L4 23h32c1.598 0 2.904-1.249 2.995-2.824L39 20V4c0-1.598-1.249-2.904-2.824-2.995L36 1z" })))));
  }
};
IconTextNew.style = iconCss;

export { IconTextNew as d4l_icon_text_new };
