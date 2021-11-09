import { r as registerInstance, h } from './index-6c3223ca.js';

const articleAuthorThumbnailCss = ".article-author-thumbnail__container{display:block}.article-author-thumbnail__link{display:block;text-decoration:none}.article-author-thumbnail.article-author-thumbnail.article-author-thumbnail{display:block}.article-author-thumbnail{width:32px;height:32px;line-height:32px;text-align:center;letter-spacing:2px;font-weight:500;font-size:0.7rem;color:var(--color-neutral)}.article-author-thumbnail img{display:block;width:32px;height:32px;box-sizing:content-box;border:3px solid #fff;background:var(--color-neutral-lighter)}.article-author-thumbnail--large{width:48px;height:48px;line-height:48px}.article-author-thumbnail--large img{width:48px;height:48px;border:0 none}";

let ArticleAuthorThumbnailComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
    this.baseUrl = '/';
    this.large = false;
  }
  get initials() {
    return this.author.name
      .split(' ')
      .map((part) => part.slice(0, 1).toUpperCase())
      .join('');
  }
  render() {
    const { pictures, uri, name } = this.author;
    return (pictures && (h("stencil-route-link", { url: `${this.baseUrl}${uri}`, anchorClass: "article-author-thumbnail__link" }, h("d4l-responsive-image", { class: "article-author-thumbnail__container", classes: `article-author-thumbnail responsive-image--portrait ${this.large ? 'article-author-thumbnail--large' : ''} ${this.classes}`, alt: this.initials, title: name, "aria-label": name, "mobile-src": this.large ? pictures.medium : pictures.small }))));
  }
};
ArticleAuthorThumbnailComponent.style = articleAuthorThumbnailCss;

export { ArticleAuthorThumbnailComponent as d4l_article_author_thumbnail };
