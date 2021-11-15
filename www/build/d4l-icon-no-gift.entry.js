import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconNoGift = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: `icon ${this.classes}`, focusable: this.focusable }, h("path", { fill: "currentColor", d: "M3.992 3.572l4.53 4.303H2.834v3.208h8.658v-.386l2.336 2.219h-.961v8.25h6.498v-2.989l1.834 1.742v2.164c0 .47-.353.858-.81.91l-.106.007H4.077c-.47 0-.857-.354-.91-.81l-.006-.107-.001-9.167H1.917c-.47 0-.858-.353-.91-.81L1 12V6.958c0-.47.354-.857.81-.91l.107-.006h2.366c-.257-.48-.402-1.025-.402-1.604 0-.3.039-.59.111-.866zm7.5 9.344H4.994v8.25h6.498v-8.25zM16.63 1c1.923 0 3.489 1.535 3.489 3.438 0 .58-.145 1.125-.402 1.603h2.366c.47 0 .858.355.91.81l.007.107V12c0 .47-.354.858-.81.91l-.107.007-.884-.001v4.244l-1.833-1.741v-2.503h-2.635l-1.929-1.833h6.365V7.875l-4.505-.001-.032.001h-3.763v1.37l-1.375-1.306v-.064h-.067L9.494 6.041h1.272l-.088-.23-.135-.315-.147-.309-.16-.3C9.498 3.57 8.557 2.832 7.37 2.832c-.354 0-.68.107-.948.29L5.078 1.845C5.692 1.319 6.494 1 7.37 1c1.964 0 3.435 1.153 4.465 2.989.057.102.113.206.166.31l.164-.31C13.195 2.153 14.666 1 16.63 1zm0 1.833c-1.187 0-2.128.738-2.866 2.053-.11.198-.213.402-.307.61l-.135.315-.09.23h3.398c.821 0 1.498-.577 1.632-1.33l.018-.143.006-.13c0-.882-.737-1.605-1.656-1.605z" }), h("path", { fill: "currentColor", d: "M1.276 2.31c.351-.369.918-.41 1.317-.115l.097.08 21 20c.4.382.415 1.015.034 1.415-.351.369-.918.41-1.317.115l-.097-.08-21-20C.91 3.342.895 2.71 1.276 2.31z" }))));
  }
};
IconNoGift.style = iconCss;

export { IconNoGift as d4l_icon_no_gift };
