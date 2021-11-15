import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconBell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("path", { d: "M12.002 3c3.063 0 5.549 2.483 5.662 5.578l.005.222c0 2.291.4 4.005 1.05 5.231.326.616.626.966.8 1.108l.048.036c.778.534.447 1.725-.45 1.819l-.115.006h-14c-.943 0-1.344-1.17-.657-1.755l.091-.07c.163-.111.49-.466.85-1.144.611-1.153 1.001-2.74 1.045-4.833l.004-.398c0-3.197 2.53-5.8 5.667-5.8zm0 2C9.983 5 8.335 6.695 8.335 8.8c0 2.455-.42 4.403-1.144 5.894L7.034 15h9.935l-.017-.031c-.76-1.435-1.226-3.323-1.279-5.715L15.67 8.8l-.006-.202C15.562 6.588 13.955 5 12.002 5zm.728 13.552c.297-.493 1.019-.692 1.61-.444.593.249.831.85.533 1.343-.569.943-1.66 1.547-2.871 1.547-1.212 0-2.303-.604-2.872-1.547-.298-.493-.06-1.094.533-1.343.55-.23 1.21-.075 1.54.343l.07.101c.176.29.457.446.729.446a.847.847 0 00.657-.343l.07-.103z", fill: "currentColor" }))));
  }
};
IconBell.style = iconCss;

export { IconBell as d4l_icon_bell };
