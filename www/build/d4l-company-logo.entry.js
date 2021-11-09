import { r as registerInstance, h } from './index-6c3223ca.js';

const companyLogoCss = ":host{display:block}.company-logo{display:block;width:54px;height:24px}.company-logo--compact{height:1em;width:auto}";

let CompanyLogo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.compact = false;
    this.beta = false;
  }
  get svgCompact() {
    return (h("svg", { class: "company-logo company-logo--compact", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 210 92" }, h("path", { fill: "#000E7E", d: "M96.6 51.23l33.6-50.18H96.6L63 51.23h33.6zm17.85 9.4c-8.7 0-15.75 7.03-15.75 15.69S105.75 92 114.45 92s15.75-7.02 15.75-15.68-7.05-15.68-15.75-15.68zm66.15 3.14V1.05h-28.35v89.9H210V63.77h-29.4zM0 0c25.52 0 46.2 20.6 46.2 46S25.51 92 0 92V0z" })));
  }
  get svgNormal() {
    return (h("svg", { width: "210", height: "92", viewBox: "0 0 210 92", class: "company-logo", xmlns: "http://www.w3.org/2000/svg" }, h("defs", null, h("path", { id: "a", d: "M0 0h210v92H0z" })), h("g", { fill: "none", "fill-rule": "evenodd" }, h("mask", { id: "b", fill: "#fff" }, h("use", { xlinkHref: "#a" })), h("path", { d: "M96.6 51.228l33.6-50.181H96.6L63 51.227h33.6zm17.85 9.408c-8.698 0-15.75 7.021-15.75 15.682 0 8.66 7.052 15.682 15.75 15.682s15.75-7.021 15.75-15.682c0-8.66-7.052-15.682-15.75-15.682zm66.15 3.138V1.047h-28.35v89.908H210V63.774h-29.4zM0 0c25.515 0 46.2 20.595 46.2 46S25.515 92 0 92V0z", fill: "#020D7D", "fill-rule": "nonzero", mask: "url(#b)" }))));
  }
  get svgBeta() {
    return (h("svg", { width: "78", height: "24", xmlns: "http://www.w3.org/2000/svg", "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }, h("g", { fill: "#000e7e" }, h("path", { d: "M24.353 13.612L33.176.716h-8.823l-8.824 12.896h8.824zm4.765 2.15c-2.242 0-4.06 1.844-4.06 4.119 0 2.275 1.818 4.119 4.06 4.119 2.241 0 4.058-1.844 4.058-4.12 0-2.274-1.817-4.119-4.058-4.119v.001zm16.63 1.199V.716H38.47V24h14.823v-7.04h-7.546l.001.001zM0 0c6.238 0 11.294 5.373 11.294 12S6.238 24 0 24V0zM57.174 4.35c.462.078.824.278 1.087.6.263.32.394.728.394 1.223 0 .353-.08.685-.24.996-.16.31-.426.567-.799.768-.373.201-.861.302-1.465.302h-2.857V.716h2.633c.902 0 1.547.198 1.934.594.387.395.581.865.581 1.409 0 .374-.108.71-.325 1.006-.217.297-.531.505-.943.625zm-2.867-2.786V3.98h1.62c1.009 0 1.513-.396 1.513-1.187 0-.353-.112-.646-.336-.88-.223-.232-.616-.349-1.177-.349h-1.62zm1.79 5.827c.547 0 .944-.123 1.189-.37.245-.248.367-.562.367-.944 0-.374-.119-.676-.357-.905-.238-.23-.602-.345-1.092-.345h-1.897v2.564h1.79zm8.975 0v.848h-4.765V.716h4.69v.848H61.32v2.394h3.496v.848H61.32v2.585h3.752zm6.672-5.827h-2.377v6.675h-1.013V1.564h-2.377V.716h5.767v.848zm4.433 4.503h-3.09l-.779 2.172h-1.044L74.131.716h1.002L78 8.24h-1.045l-.778-2.172v-.001zm-.298-.848l-1.055-2.935a6.43 6.43 0 0 1-.181-.572h-.022a6.423 6.423 0 0 1-.18.572L73.384 5.22h2.494l.001-.001z" }))));
  }
  render() {
    return this.compact
      ? this.svgCompact
      : this.beta
        ? this.svgBeta
        : this.svgNormal;
  }
};
CompanyLogo.style = companyLogoCss;

export { CompanyLogo as d4l_company_logo };
