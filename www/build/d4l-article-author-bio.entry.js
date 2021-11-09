import { r as registerInstance, h } from './index-6c3223ca.js';

const articleAuthorBioCss = ".article-author-bio{text-align:left;display:block;font-size:var(--font-size-desktop-s);line-height:1.5;color:var(--color-primary)}.article-author-bio__picture{width:48px;margin:0 auto var(--space-xs)}.article-author-bio__name{text-align:center;font-weight:500;font-size:inherit;margin:0 0 var(--space-xs)}.article-author-bio a{color:inherit}@media screen and (min-width: 768px){.article-author-bio{display:flex;flex-flow:row wrap;align-items:flex-start}.article-author-bio__picture{flex:none;margin:0 var(--space-s) 0 0}.article-author-bio__name{text-align:left}.article-author-bio__text{flex:1}}";

let ArticleAuthorBioComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
    this.baseUrl = '/';
  }
  render() {
    return (h("div", { class: "article-author-bio" }, h("div", { class: "article-author-bio__picture" }, h("d4l-article-author-thumbnail", { author: this.author, baseUrl: this.baseUrl, large: true })), h("div", { class: "article-author-bio__text" }, h("h4", { class: "article-author-bio__name" }, this.author.name), h("div", { innerHTML: this.author.excerpt }), !!this.labelMore && (h("stencil-route-link", { url: `${this.baseUrl}${this.author.uri}` }, this.labelMore)))));
  }
};
ArticleAuthorBioComponent.style = articleAuthorBioCss;

export { ArticleAuthorBioComponent as d4l_article_author_bio };
