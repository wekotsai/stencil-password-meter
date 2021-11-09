import { r as registerInstance, h } from './index-6c3223ca.js';

const cardCss = ".card.sc-d4l-card{border-radius:var(--border-radius-medium, var(--border-radius-s));color:var(--color-primary);--card-default-padding:1em 1.5em 1.75em;--card-default-background-color:#fff;--card-default-box-shadow:var(--shadow-s)}.card--sharp-corners.sc-d4l-card{border-radius:0}.card--round-corners-s.sc-d4l-card{border-radius:var(--border-radius-xs)}.card--round-corners-l.sc-d4l-card{border-radius:var(--border-radius-m)}.card--box-shadow.sc-d4l-card{box-shadow:var(--shadow-s);background:#fff}.card--text-center.sc-d4l-card{text-align:center}.card--clickable.sc-d4l-card{cursor:pointer;padding:1em 1.5em;transition:box-shadow 0.2s}.card--desktop.sc-d4l-card{padding:var(--card-default-padding);background-color:var(--card-default-background-color);box-shadow:var(--card-default-box-shadow)}.card--clickable.sc-d4l-card:focus,.card--clickable.sc-d4l-card:hover{outline:none;box-shadow:var(--shadow-m)}.card.card--no-padding.sc-d4l-card{padding:0}.card--overflow-hidden.sc-d4l-card{overflow:hidden}@media screen and (min-width: 768px){.card.sc-d4l-card{padding:var(--card-default-padding);background-color:var(--card-default-background-color);box-shadow:var(--card-default-box-shadow)}}";

let Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  onKeyDown(event) {
    const { key } = event;
    (key === 'Enter' || key === ' ') && this.handleClick(event);
  }
  render() {
    const { classes, handleClick } = this;
    return (h("div", { class: `card ${classes} ${handleClick ? 'card--clickable' : ''}`, tabIndex: handleClick ? 0 : null, role: handleClick ? 'button' : null, onClick: handleClick, onKeyDown: handleClick && (event => this.onKeyDown(event)) }, h("div", { class: "card__header" }, h("slot", { name: "card-header" })), h("div", { class: "card__content" }, h("slot", { name: "card-content" })), h("div", { class: "card__footer" }, h("slot", { name: "card-footer" }))));
  }
};
Card.style = cardCss;

export { Card as d4l_card };
