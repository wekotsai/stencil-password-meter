import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconStar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("path", { fill: "currentColor", d: "M8.246 8.34l-6.39.933-.113.023c-.735.191-1.005 1.13-.44 1.68l4.623 4.499-1.09 6.355-.014.11c-.05.76.764 1.31 1.464.943L12 19.881l5.714 3.002.1.046c.71.282 1.485-.32 1.35-1.099l-1.09-6.355 4.623-4.498.078-.085c.483-.587.15-1.505-.631-1.62l-6.391-.933-2.856-5.782c-.367-.743-1.427-.743-1.794 0L8.246 8.339zM12 5.254l2.194 4.44.06.106c.157.237.407.398.692.44l4.905.716-3.548 3.454-.083.09c-.177.222-.254.51-.205.794l.837 4.877-4.386-2.304-.111-.05c-.266-.1-.564-.084-.82.05l-4.386 2.304.838-4.877.013-.122c.014-.283-.094-.562-.3-.762l-3.55-3.454 4.906-.716c.325-.048.606-.252.752-.547l2.192-4.44z" }))));
  }
};
IconStar.style = iconCss;

export { IconStar as d4l_icon_star };
