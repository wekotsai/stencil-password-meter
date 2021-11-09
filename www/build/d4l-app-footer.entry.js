import { r as registerInstance, h } from './index-6c3223ca.js';

const appFooterCss = ".app-footer{margin:45px auto 0;padding:var(--space-s);width:var(--widescreen);max-width:100%;color:var(--color-neutral)}.app-footer ul{display:flex;flex-direction:column;width:100%;margin:0 auto}.app-footer ul li{display:flex;flex-basis:100%;justify-content:center;color:var(--color-neutral);margin-bottom:var(--space-m)}.app-footer__link{cursor:pointer;color:var(--color-neutral);font-weight:var(--link-font-weight);text-decoration:none}.app-footer__link:hover,.app-footer__link:focus{text-decoration:underline}.app-footer__copyright-info{font-size:10px;line-height:1.6;color:var(--color-neutral);text-align:center;width:100%}@media screen and (min-width: 768px){.app-footer ul{flex-flow:row nowrap;max-width:800px}}";

let AppFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    const { classes, footerLinks, handleNavigationItemAnalytics } = this;
    return (h("footer", { class: `app-footer u-font-size--small ${classes}` }, footerLinks && footerLinks.length && (h("ul", { class: "u-list-reset" }, footerLinks.map((item) => {
      var _a;
      return (h("li", null, !item.isStencilRoute ? (h("a", { onClick: () => item.trackingEvent && handleNavigationItemAnalytics
          ? handleNavigationItemAnalytics(item.trackingEvent)
          : null, class: "app-footer__link", title: item.title, href: item.url, target: (_a = item.target) !== null && _a !== void 0 ? _a : '_blank', rel: item.target !== '_self' && 'noopener' }, item.text)) : (h("stencil-router", { scrollTopOffset: 0 }, h("stencil-route-link", { onClick: () => item.trackingEvent && handleNavigationItemAnalytics
          ? handleNavigationItemAnalytics(item.trackingEvent)
          : null, url: item.url, anchorTitle: item.title, anchorClass: "app-footer__link" }, item.text)))));
    }))), h("div", { class: "app-footer__copyright-info" }, h("slot", { name: "copyright-info" }))));
  }
};
AppFooter.style = appFooterCss;

export { AppFooter as d4l_app_footer };
