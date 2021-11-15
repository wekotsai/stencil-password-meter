import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconFlagAlbania = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: `icon icon--flag ${this.classes}`, width: "28", height: "20" }, h("defs", null, h("rect", { id: "a", width: "28", height: "20", x: "0", y: "0", rx: "2" })), h("g", { fill: "none", "fill-rule": "evenodd" }, h("mask", { id: "b", fill: "#fff" }, h("use", { xlinkHref: "#a" })), h("path", { fill: "#EE343C", d: "M0 0h28v20H0z", mask: "url(#b)" }), h("path", { fill: "#262626", d: "M12.474 4.474c-.262-.262-.72-.31-1.02-.11l-.907.605c-.302.201-.282.497.045.66l1.483.742c.327.163.592.592.592.962A.665.665 0 0112 8a3.34 3.34 0 01-1.258-.296l-1.484-.741a.976.976 0 00-1.058.17l-.4.4c-.258.258-.201.6.125.763l1.483.741c.327.164.347.46.045.66l-.906.605c-.302.202-.263.422.112.496l2.016.404c.363.072.412.316.119.536l-1.588 1.19c-.298.224-.243.405.127.405.369 0 .952-.071 1.313-.161l1.375-.344c.357-.09.482.084.281.385l-.604.907c-.202.302-.07.547.301.547h.668a.98.98 0 01.877.632l.245.735c.117.35.304.355.422 0l.245-.735a.982.982 0 01.877-.632H16c.368 0 .502-.246.301-.547l-.604-.907c-.202-.302-.08-.475.28-.385l1.376.344c.357.09.942.161 1.313.161.368 0 .42-.184.127-.404l-1.588-1.19c-.298-.224-.255-.463.12-.537l2.015-.404c.364-.072.414-.295.112-.496l-.906-.604c-.302-.202-.282-.497.045-.66l1.483-.742c.327-.164.383-.504.125-.762l-.4-.401a.976.976 0 00-1.058-.17l-1.484.741A3.298 3.298 0 0116 8a.666.666 0 01-.667-.667c0-.368.272-.802.603-.968L18 5.333l-1.453-.969c-.302-.2-.761-.15-1.021.11l-1.052 1.052a.672.672 0 01-.948 0l-1.052-1.052z", mask: "url(#b)" })))));
  }
};
IconFlagAlbania.style = iconCss;

export { IconFlagAlbania as d4l_icon_flag_al };
