import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconLogout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("path", { fill: "currentColor", d: "M9 2a1 1 0 01.117 1.993L9 4H5a1 1 0 00-.993.883L4 5v14a1 1 0 00.883.993L5 20h4a1 1 0 01.117 1.993L9 22H5a3 3 0 01-2.995-2.824L2 19V5a3 3 0 012.824-2.995L5 2h4zm7.613 4.21l.094.083 5 5a.97.97 0 01.08.09l-.08-.09a.927.927 0 01.147.186l.021.037c.011.02.022.04.031.06l.023.053.021.06.014.045.016.065.009.053.007.06.003.056L22 12v.033l-.004.052L22 12c0 .05-.004.1-.011.149l-.01.052a.762.762 0 01-.015.065l-.014.046-.021.06-.023.051-.03.061-.022.037a1.2 1.2 0 01-.05.074l-.014.018c-.005.007-.007.01-.01.012l-.073.082-5 5a1 1 0 01-1.497-1.32l.083-.094L18.585 13H9a1 1 0 01-.117-1.993L9 11h9.585l-3.292-3.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z" }))));
  }
};
IconLogout.style = iconCss;

export { IconLogout as d4l_icon_logout };
