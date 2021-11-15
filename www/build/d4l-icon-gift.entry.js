import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconGift = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("path", { fill: "currentColor", d: "M16.63 1c1.923 0 3.489 1.535 3.489 3.438 0 .58-.145 1.125-.402 1.603h2.366c.507 0 .917.411.917.917V12c0 .506-.41.917-.917.917l-.884-.001v9.167c0 .47-.353.858-.81.91l-.106.007H4.077c-.47 0-.857-.354-.91-.81l-.006-.107-.001-9.167H1.917c-.47 0-.858-.353-.91-.81L1 12V6.958c0-.506.41-.916.917-.916h2.366c-.257-.48-.402-1.025-.402-1.604C3.881 2.534 5.447 1 7.37 1c1.964 0 3.435 1.153 4.465 2.989.057.102.113.206.166.31l.164-.31C13.195 2.153 14.666 1 16.63 1zm-5.138 11.916H4.994v8.25h6.498v-8.25zm7.874 0h-6.499v8.25h6.498l.001-8.25zM7.338 7.875H2.833v3.208h8.659V7.875H7.338zm13.829 0l-4.505-.001-.032.001h-3.763v3.208h8.3V7.875zM7.37 2.833c-.919 0-1.656.723-1.656 1.604 0 .882.737 1.605 1.656 1.605h3.396l-.088-.23c-.086-.212-.18-.421-.282-.625l-.16-.3C9.498 3.57 8.557 2.832 7.37 2.832zm9.26 0c-1.187 0-2.128.738-2.866 2.053-.166.296-.313.608-.442.925l-.09.23h3.398c.873 0 1.582-.651 1.65-1.473l.006-.13c0-.882-.737-1.605-1.656-1.605z" }))));
  }
};
IconGift.style = iconCss;

export { IconGift as d4l_icon_gift };
