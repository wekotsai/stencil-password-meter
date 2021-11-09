import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconQuestionmark = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { class: `icon ${this.classes}`, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" }, h("path", { fill: "currentColor", d: "M12 1c6.065 0 11 4.934 11 11s-4.935 11-11 11S1 18.066 1 12 5.935 1 12 1zm0 1.354C6.681 2.354 2.354 6.68 2.354 12c0 5.319 4.327 9.646 9.646 9.646 5.319 0 9.646-4.327 9.646-9.646 0-5.319-4.327-9.646-9.646-9.646zm.928 13.598V18h-2.176v-2.048h2.176zm-.944-9.584c2.336 0 3.728 1.088 3.728 3.008 0 1.136-.688 2.112-1.504 2.832l-.768.672c-.496.432-.672.8-.672 1.472v.464H10.88v-.72c0-.576.128-1.232.96-1.952l.8-.688c.576-.48 1.04-1.056 1.04-1.968 0-.944-.64-1.568-1.728-1.568-1.12 0-1.872.672-1.872 1.856 0 .256.016.464.096.832l-1.92-.192a4.259 4.259 0 01-.096-.896c0-1.856 1.376-3.152 3.824-3.152z" }))));
  }
};
IconQuestionmark.style = iconCss;

export { IconQuestionmark as d4l_icon_questionmark };
