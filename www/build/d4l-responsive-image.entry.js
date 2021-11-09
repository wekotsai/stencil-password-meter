import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const responsiveImageCss = ".responsive-image.sc-d4l-responsive-image{display:inline-block}.responsive-image.sc-d4l-responsive-image img.sc-d4l-responsive-image{display:block}.responsive-image--portrait.sc-d4l-responsive-image img.sc-d4l-responsive-image{border-radius:50%;overflow:hidden}.responsive-image--clickable.sc-d4l-responsive-image{cursor:pointer}";

let ResponsiveImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
    this.mobileSrc = '';
    this.tabletSrc = '';
    this.desktopSrc = '';
    this.widescreenSrc = '';
    this.alt = '';
    this.breakpoints = {
      mobile: 0,
      tablet: 768,
      desktop: 960,
      widescreen: 1152,
    };
  }
  get defaultSrc() {
    return (this.mobileSrc ||
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
  }
  render() {
    const { alt, classes, handleClick, defaultSrc, mobileSrc, tabletSrc, desktopSrc, widescreenSrc, } = this;
    const { mobile, tablet, desktop, widescreen } = this.breakpoints;
    return (h(Host, null, h("picture", { class: `responsive-image ${handleClick ? 'responsive-image--clickable' : ''} ${classes}`, onClick: handleClick }, widescreenSrc && (h("source", { media: `(min-width: ${widescreen}px)`, srcSet: widescreenSrc })), desktopSrc && (h("source", { media: `(min-width: ${desktop}px)`, srcSet: desktopSrc })), tabletSrc && (h("source", { media: `(min-width: ${tablet}px)`, srcSet: tabletSrc })), mobileSrc && (h("source", { media: `(min-width: ${mobile}px)`, srcSet: mobileSrc })), h("img", { loading: "lazy", src: defaultSrc, alt: alt }))));
  }
};
ResponsiveImage.style = responsiveImageCss;

export { ResponsiveImage as d4l_responsive_image };
