import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconDocument = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { class: `icon ${this.classes}`, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", focusable: this.focusable }, h("path", { fill: "currentColor", d: "M14 1.25c.04 0 .077.003.115.009l.017.003a.806.806 0 01.12.031.867.867 0 01.07.03l.036.018a.766.766 0 01.172.129l-.08-.07.008.006.072.064 6 6a.77.77 0 01.07.08c.009.011.017.024.026.037a.616.616 0 01.033.055l.019.037c.01.021.02.044.028.067l.011.035c.012.037.02.077.026.117L20.75 8v12A2.75 2.75 0 0118 22.75H6A2.75 2.75 0 013.25 20V4A2.75 2.75 0 016 1.25h8zm-.75 1.5H6c-.69 0-1.25.56-1.25 1.25v16c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V8.75H14a.75.75 0 01-.743-.648L13.25 8V2.75zM16 16.25a.75.75 0 01.102 1.493L16 17.75H8a.75.75 0 01-.102-1.493L8 16.25h8zm0-4a.75.75 0 01.102 1.493L16 13.75H8a.75.75 0 01-.102-1.493L8 12.25h8zm-6-4a.75.75 0 01.102 1.493L10 9.75H8a.75.75 0 01-.102-1.493L8 8.25h2zm4.75-4.439V7.25h3.439L14.75 3.811z" }))));
  }
};
IconDocument.style = iconCss;

export { IconDocument as d4l_icon_document };
