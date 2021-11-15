import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconRKI = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { class: `icon ${this.classes}`, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { fill: "#D8E3F4", d: "M23.83 8l.17.003s-4.886 3.13-6.223 4.695l-.078.054.168.245c1.855 2.655 3.747 3.7 3.747 3.694l-.156.078c-1.463.623-4.479-3.508-4.479-3.508l-.197.144-.036-2.038.455.605S21.596 7.866 24 8.003zM.09 10.06s.234-.204.96.695c.725.9 1.534 1.649 1.534 1.649.034.04.191.2.504-.006l2.266-1.469v.798l-1.918 1.217-.18.108s-.084.071 0 .167l.84.678.479.336s.39.257.228.485c0 0-.33.246-.75 0 0 0-.01-.002-.033-.012l-.047-.022c-.144-.075-.507-.31-1.287-1.033l-.084-.072-.041-.048-.252.102-.666.408c-.467.162-.617-.078-.617-.078-.12-.288.24-.468.24-.468l.617-.378.008-.008c.034-.038.162-.198.052-.297l-1.48-1.613s-.708-.9-.373-1.14zm10.582-.798c.384-.101.75-.095 1.103-.018-.006 0-2.416 1.307-3.717 2.459-1.295 1.15-.186 1.636-.186 1.642.678.186 0 .426 0 .426-1.259.37-2.106-.349-2.25-.483l-.022-.02v-.876c2.225-2.076 4.488-2.93 4.976-3.098l.072-.024.024-.008zm.114-.36c-2.512.223-4.85 1.655-5.186 1.865v-.282c.324-.21 2.2-1.348 5.186-1.582z" }), h("path", { fill: "#0062BB", d: "M16.548 8.447H16.5v1.301l-1.265.923c-1.715-1.744-3.292-1.774-3.292-1.774-2.907-.234-5.947 1.63-6.337 1.876V8.46H5.36v7.452h.24v-.317c.738.437 1.577.491 2.039.521.521.036.617.03 1.115-.036 2.996-.415 6.276-3.91 6.276-3.91l1.47 2.183v1.552h.24V8.447h-.192zm-5.69 5.792c-2.47 1.9-3.381 1.498-3.381 1.498-1.103-.15-1.739-1.199-1.87-1.444v-1.901c2.511-2.344 5.071-3.13 5.071-3.13 2.057-.557 3.85 2.087 3.85 2.087l-3.67 2.89zm5.642-1.685l-.714-1.08.714-.617v1.697z" }))));
  }
};
IconRKI.style = iconCss;

export { IconRKI as d4l_icon_rki };
