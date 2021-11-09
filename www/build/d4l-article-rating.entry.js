import { r as registerInstance, f as createEvent, h } from './index-6c3223ca.js';

const articleRatingCss = ".article__rating.sc-d4l-article-rating{text-align:center;padding:var(--space-m);color:var(--color-primary)}.article__rating-headline.sc-d4l-article-rating{color:var(--color-neutral)}.article__rating-headline.sc-d4l-article-rating:empty{display:none}.article__rating-container.sc-d4l-article-rating{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}.article__rating-trigger.sc-d4l-article-rating{display:block;position:relative;cursor:pointer;background:transparent;border:0 none;margin:var(--space-xs);padding:var(--space-s);color:currentColor}.article__rating--initial.sc-d4l-article-rating .article__rating-label.sc-d4l-article-rating{color:var(--color-neutral)}.article__rating--down.sc-d4l-article-rating .article__rating-trigger--up.sc-d4l-article-rating,.article__rating--up.sc-d4l-article-rating .article__rating-trigger--down.sc-d4l-article-rating{color:var(--color-neutral-lighter)}.article__rating--down.sc-d4l-article-rating .article__rating-trigger--down.sc-d4l-article-rating{color:var(--color-secondary)}.article__rating-label.sc-d4l-article-rating{position:absolute;left:0;width:100%;text-align:center;font-size:10px;bottom:calc(var(--space-xs) * (-1));pointer-events:none}";

let ArticleRatingComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.articleRated = createEvent(this, "articleRated", 7);
    this.classes = '';
  }
  articleRatedHandler(up) {
    this.articleRated.emit(up);
  }
  get ratingClassModifier() {
    const { rating } = this;
    if (typeof rating !== 'boolean') {
      return 'initial';
    }
    return rating ? 'up' : 'down';
  }
  render() {
    const { headline, labelUp, labelDown } = this;
    return (h("div", { class: `article__rating article__rating--${this.ratingClassModifier} ${this.classes}` }, headline && h("div", { class: "article__rating-headline" }, headline), h("div", { class: "article__rating-container" }, h("button", { class: "article__rating-trigger article__rating-trigger--up", type: "button", onClick: () => this.articleRatedHandler(true) }, h("d4l-icon-like", { classes: "icon--current-color" }), labelUp && h("span", { class: "article__rating-label" }, labelUp)), h("button", { class: "article__rating-trigger article__rating-trigger--down", type: "button", onClick: () => this.articleRatedHandler(false) }, h("d4l-icon-dislike", { classes: "icon--current-color" }), labelDown && h("span", { class: "article__rating-label" }, labelDown)))));
  }
};
ArticleRatingComponent.style = articleRatingCss;

export { ArticleRatingComponent as d4l_article_rating };
