import { r as registerInstance, f as createEvent, h } from './index-6c3223ca.js';

const languageSwitcherCss = ".language-switcher.sc-d4l-language-switcher{display:flex;flex-flow:row nowrap;font-weight:400;font-size:15px;color:var(--color-primary)}.language-switcher__item.sc-d4l-language-switcher{flex:none}.language-switcher__item.sc-d4l-language-switcher+.language-switcher__item.sc-d4l-language-switcher::before{content:'\\a0/\\a0'}.language-switcher__button.sc-d4l-language-switcher{display:inline-block;background:transparent;padding:0.5em 0;border:0 none;text-transform:uppercase;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:inherit;color:inherit}.language-switcher__item--active.sc-d4l-language-switcher .language-switcher__button.sc-d4l-language-switcher{font-weight:500}";

let LanguageSwitcher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeLanguage = createEvent(this, "changeLanguage", 7);
    this.classes = '';
    this.languages = [];
  }
  async changeLanguageHandler(language) {
    this.changeLanguage.emit(language);
    return language !== this.activeLanguage;
  }
  render() {
    const { classes, languages, activeLanguage } = this;
    return (h("nav", { class: `language-switcher ${classes}` }, languages.map(language => {
      const { text, code, label } = language;
      const isActive = activeLanguage === language;
      return (h("div", { class: `language-switcher__item ${isActive ? 'language-switcher__item--active' : ''}` }, h("button", { class: "language-switcher__button", type: "button", onClick: event => {
          event.preventDefault();
          this.changeLanguageHandler(language);
        }, "aria-label": label, "aria-current": isActive, title: label }, text || code)));
    })));
  }
};
LanguageSwitcher.style = languageSwitcherCss;

export { LanguageSwitcher as d4l_language_switcher };
