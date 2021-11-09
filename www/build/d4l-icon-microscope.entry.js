import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconMicroscope = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { class: `icon ${this.classes}`, viewBox: "0 0 24 24" }, h("path", { fill: "currentColor", d: "M16.864 22.27c.404 0 .73.332.73.74 0 .322-.205.602-.514.704l-.107.027-.109.009H6.81c-.405 0-.73-.333-.73-.74 0-.323.205-.603.514-.704l.107-.028.109-.009h10.055zM2.37.473c.24-.25.62-.296.912-.11.27.171.394.495.316.813l-.033.106-.065.121-.279.36 1.073.86.55-.716c.174-.227.457-.326.732-.265l.103.03.101.046.092.062 7.885 6.314c.25.2.34.536.228.843l-.044.1-.06.092-.554.724.983.8c.23.2.308.515.217.793l-.042.102-.058.097c-.187.263-.516.368-.826.265l-.102-.042-.1-.063-.975-.781-.549.717c-.056.074-.127.136-.21.184l-.087.044-.097.034-.124.02h-.059c-.092 0-.182-.018-.275-.057l-.093-.046-.083-.057-5.672-4.536-.034.058c-.69 1.219-1.098 2.581-1.196 3.984l-.018.351-.005.353c0 4.738 3.33 8.58 7.4 8.58 2.59 0 4.981-1.568 6.317-4.114l.088-.174h-2.67c-.333 0-.613-.226-.7-.534l-.022-.106-.007-.1c0-.322.204-.602.514-.704l.106-.027.11-.01h7.464c.404 0 .729.333.729.741 0 .322-.204.602-.514.704l-.106.027-.11.01-3.199-.001-.05.125c-1.402 3.258-4.225 5.401-7.402 5.626l-.28.015-.276.005c-4.893 0-8.858-4.52-8.858-10.06-.01-1.82.431-3.612 1.283-5.21l.19-.338.082-.138-1.046-.838c-.221-.177-.316-.461-.258-.738l.03-.103.043-.101.06-.093.555-.726-1.067-.86-.27.354c-.176.228-.46.327-.735.265l-.103-.03-.1-.047-.091-.061C.778 3.21.689 2.877.8 2.57l.044-.101.06-.092L2.369.474zm3.168 2.93l-.543.718-.553.722 6.744 5.395.55-.716.55-.723-6.748-5.396z" }))));
  }
};
IconMicroscope.style = iconCss;

export { IconMicroscope as d4l_icon_microscope };
