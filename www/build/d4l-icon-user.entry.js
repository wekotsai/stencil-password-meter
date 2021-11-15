import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconUser = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("path", { fill: "currentColor", "fill-rule": "evenodd", d: "M16 14.583c2.689 0 4.882 2.211 4.995 4.983l.005.226v2.083c0 .575-.448 1.042-1 1.042-.513 0-.936-.402-.993-.92L19 21.874v-2.083c0-1.665-1.249-3.025-2.824-3.12L16 16.667H8c-1.598 0-2.904 1.3-2.995 2.941L5 19.792v2.083c0 .575-.448 1.042-1 1.042-.513 0-.936-.402-.993-.92L3 21.874v-2.083c0-2.801 2.122-5.086 4.783-5.204L8 14.583h8zm-4-12.5c2.761 0 5 2.332 5 5.209 0 2.876-2.239 5.208-5 5.208s-5-2.332-5-5.208c0-2.877 2.239-5.209 5-5.209zm0 2.084c-1.657 0-3 1.399-3 3.125s1.343 3.125 3 3.125 3-1.4 3-3.125c0-1.726-1.343-3.125-3-3.125z" }))));
  }
};
IconUser.style = iconCss;

export { IconUser as d4l_icon_user };
