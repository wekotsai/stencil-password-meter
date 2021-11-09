import { r as registerInstance, h } from './index-6c3223ca.js';
import { K as KEY_EVENTS } from './constants-952d794d.js';

const navigationMenuCss = ".navigation-menu{display:block;position:relative;z-index:var(--z-index-navigation-menu)}button[aria-haspopup]{padding:14px 10px;cursor:pointer}.is-sub-menu button[aria-haspopup]{padding:0}.navigation-menu__burger{display:block;width:24px;height:2px;margin-bottom:5px;border-radius:2px;background-color:var(--color-primary);transition:transform 0.25s cubic-bezier(1, 0, 0, 1),\n    opacity 0.25s cubic-bezier(1, 0, 0, 1)}.navigation-menu__burger--no-margin{margin:0}button[aria-expanded='true'] span.navigation-menu__burger:nth-of-type(1){transform:rotate(45deg) translate(5px, 4px)}button[aria-expanded='true'] span.navigation-menu__burger:nth-of-type(2){opacity:0}button[aria-expanded='true'] span.navigation-menu__burger:nth-of-type(3){transform:rotate(-45deg) translate(6px, -5px)}.navigation-menu__icon-button{color:currentColor;height:var(--space-m);margin:0;box-sizing:content-box;text-decoration:none;display:grid;grid-template-columns:1fr;grid-template-rows:24px 15px 3px;gap:0px;align-items:center;justify-items:center;height:100%;padding:1px var(--space-s)}.navigation-menu__icon-button.navigation-menu__icon-button--no-label{grid-template-rows:30px}.navigation-menu__icon-button .navigation-menu__icon-button__label{font-size:var(--font-size-desktop-xs);color:var(--color-primary)}@media screen and (min-width: 768px){.navigation-menu__icon-button{grid-template-columns:24px 1fr;grid-template-rows:24px 2px;gap:2px 0px;align-items:center;padding:8px var(--space-s)}.navigation-menu__icon-button .navigation-menu__icon-button__label{margin-left:var(--space-xs)}}button .navigation-menu__icon-button:after{content:'';height:2px;width:110%;background-color:transparent;transition:0.3s background-color ease-in-out;grid-column:1/-1}button[aria-expanded='true'] .navigation-menu__icon-button:not(.navigation-menu__icon-button--no-label):after{background-color:var(--color-primary)}.navigation-menu button{position:relative}.navigation-menu__dot{position:absolute;right:9px;top:9px;width:10px;height:10px;border-radius:100%;background-color:var(--color-secondary)}button[aria-expanded='true'] .navigation-menu__dot{display:none}ul[role='menu'] li{border-top:1px solid var(--color-primary-extra-lightest)}ul[role='menu'] li:first-of-type,ul[role='menu'] li.navigation-menu__sub-item{border-top:1px solid transparent}ul[role='menu'] li:last-of-type{border-bottom:1px solid var(--color-primary-extra-lightest)}ul[role='menu'] li>button,ul[role='menu'] li>stencil-route-link>a,ul[role='menu'] li>a{display:flex;align-items:center;text-decoration:none;padding:var(--space-s);color:var(--color-primary);width:100%;cursor:pointer}ul[role='menu'] li.navigation-menu__sub-item>stencil-route-link>a,ul[role='menu'] li.navigation-menu__sub-item>a{padding-top:var(--space-xxs);padding-bottom:var(--space-xxs)}ul[role='menu'] li>button:focus,ul[role='menu'] li>button:hover,ul[role='menu'] li>stencil-route-link>a:focus,ul[role='menu'] li>stencil-route-link>a:hover,ul[role='menu'] li>a:focus,ul[role='menu'] li>a:hover{background-color:var(--color-neutral-extra-lightest)}.navigation-menu__sub-item__icon{min-width:36px}.navigation-menu__link-container{margin-left:var(--space-s);margin-right:var(--space-xs)}.navigation-menu__link-container--no-left-margin{margin-left:0}.navigation-menu__link-container--no-icon{margin-left:var(--space-s);padding-left:36px}.navigation-menu__link-container>p{font-size:0.875rem;font-weight:100;margin:0}.navigation-menu__link-text{font-weight:500;font-size:0.875rem;line-height:1.5;font-family:var(--font-family-secondary)}.navigation-menu__header{border-bottom:1px solid var(--color-primary-lightest);display:flex;flex-direction:row;justify-content:space-between;align-items:center}.navigation-menu__header>span{display:block;font-weight:500;font-size:var(--font-size-mobile-xl);color:var(--color-primary)}.navigation-menu__card{width:288px;margin:var(--space-l) auto 0;position:absolute;display:none}.navigation-menu__card--right-aligned{left:0}.navigation-menu__card--left-aligned{right:0}.navigation-menu__header{padding:var(--space-m)}.navigation-menu__content--padded{padding-bottom:var(--space-xl)}ul.navigation-menu__footer{display:flex;flex-direction:row;width:100%;margin:0 auto;justify-content:center;flex-wrap:wrap}ul.navigation-menu__footer li,ul.navigation-menu__footer li stencil-route-link{display:flex;flex-basis:auto;justify-content:center;white-space:nowrap;align-items:center}ul.navigation-menu__footer li .navigation-menu__footer__link{cursor:pointer;color:var(--color-neutral);font-size:var(--font-size-desktop-xs);text-decoration:none}ul.navigation-menu__footer li:not(:first-of-type) .navigation-menu__footer__link::before{content:'';width:2px;height:2px;border-radius:50%;background:var(--color-neutral);display:inline-block;margin:3px 5px}ul.navigation-menu__footer li .navigation-menu__footer__link:hover,ul.navigation-menu__footer li .navigation-menu__footer__link:focus{text-decoration:underline}button[aria-expanded='true']~.navigation-menu__card{display:block}";

const Fragment = (_props, children) => children;
const isRouteLinkElement = (element) => element.tagName.toLowerCase() === 'stencil-route-link';
let NavigationMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
    /**
     * Side with which the menu is aligned with the menu button
     */
    this.direction = 'right';
    /**
     * Flag indicating if the menuButtonIcon and menuButtonLable should be visible instead of the burger menu button
     */
    this.menuButtonShow = false;
    /**
     * Label of the button to open the menu
     */
    this.menuButtonLabel = 'Navigation menu';
    this.menuButtonLabelShow = true;
    this.menuCardTitle = 'Menu';
    this.navigationItems = [];
    this.notification = false;
    this.isMenuOpen = false;
    this.toggleMenu = () => (this.isMenuOpen = !this.isMenuOpen);
    this.hideMenu = () => (this.isMenuOpen = false);
    this.handleMenuItemKeyDown = (event, index) => {
      const { menuListElement } = this;
      let isRouteLink = false;
      let selectedListElement = event.target.parentElement;
      if (isRouteLinkElement(selectedListElement)) {
        selectedListElement = selectedListElement.parentElement;
        isRouteLink = true;
      }
      const firstMenuItem = isRouteLink
        ? menuListElement.firstElementChild.firstElementChild
          .firstElementChild
        : menuListElement.firstElementChild.firstElementChild;
      const lastMenuItem = isRouteLink
        ? menuListElement.lastElementChild.lastElementChild
          .lastElementChild
        : menuListElement.lastElementChild.lastElementChild;
      if (KEY_EVENTS.isDown(event)) {
        event.preventDefault();
        // we've reached the last anchor element
        if (index === this.itemIndex.length - 1) {
          firstMenuItem.focus();
        }
        else {
          if (isRouteLinkElement(selectedListElement.nextElementSibling.firstElementChild)) {
            selectedListElement.nextElementSibling.firstElementChild.firstElementChild.focus();
          }
          else {
            selectedListElement.nextElementSibling.firstElementChild.focus();
          }
        }
      }
      if (KEY_EVENTS.isUp(event)) {
        event.preventDefault();
        // select previous anchor element until we reach the first one
        if (!!index) {
          if (isRouteLinkElement(selectedListElement.previousElementSibling.firstElementChild)) {
            selectedListElement.previousElementSibling.firstElementChild.firstElementChild.focus();
          }
          else {
            selectedListElement.previousElementSibling.firstElementChild.focus();
          }
        }
        else {
          lastMenuItem.focus();
        }
      }
      if (KEY_EVENTS.isEsc(event)) {
        event.preventDefault();
        const menuButton = this.menuContainerElement
          .firstElementChild;
        menuButton.focus();
      }
      if (KEY_EVENTS.isEnter(event)) {
        requestAnimationFrame(() => this.hideMenu());
      }
    };
    this.handleMenuButtonKeyDown = (event) => {
      if (KEY_EVENTS.isEsc(event)) {
        this.hideMenu();
      }
    };
    this.renderNavigationItem = (item, index, isSubItem = false) => {
      let Component = undefined;
      let props = {
        onKeyDown: (event) => this.handleMenuItemKeyDown(event, this.itemIndex.findIndex((value) => value === index)),
        onMouseUp: () => this.hideMenu(),
      };
      if ('fn' in item) {
        Component = 'button';
        props = Object.assign(Object.assign({}, props), { onKeyDown: (event) => {
            if (KEY_EVENTS.isEnter(event)) {
              this.handleNavigationItemAnalytics &&
                item.trackingEvent &&
                this.handleNavigationItemAnalytics(item.trackingEvent);
              item.fn();
            }
            this.handleMenuItemKeyDown(event, this.itemIndex.findIndex((value) => value === index));
          }, onMouseUp: () => {
            this.handleNavigationItemAnalytics &&
              item.trackingEvent &&
              this.handleNavigationItemAnalytics(item.trackingEvent);
            item.fn();
            this.hideMenu();
          }, class: 'u-button-reset navigation-menu__button-link' });
      }
      else if (item.internal) {
        Component = 'stencil-route-link';
        props = Object.assign(Object.assign(Object.assign({}, props), { class: 'navigation-menu__internal-link', url: item.route }), (this.handleNavigationItemAnalytics &&
          item.trackingEvent && {
          onClick: () => this.handleNavigationItemAnalytics(item.trackingEvent),
        }));
      }
      else {
        Component = 'a';
        props = Object.assign(Object.assign(Object.assign({}, props), { href: item.route, target: item.target, rel: item.target === '_blank' && `noreferrer noopener` }), (this.handleNavigationItemAnalytics &&
          item.trackingEvent && {
          onClick: () => this.handleNavigationItemAnalytics(item.trackingEvent),
        }));
      }
      return (h("li", { role: "menuitem", class: `${isSubItem ? 'navigation-menu__sub-item' : ''}` }, h(Component, Object.assign({}, props), item.icon && !item.iconSVG && (h("d4l-icon", { iconName: item.icon, iconClasses: `navigation-menu__sub-item__icon ${item.iconClasses}` })), !item.icon && item.iconSVG && (h("div", { innerHTML: item.iconSVG, class: `navigation-menu__sub-item__icon ${item.iconClasses}` })), h("div", { class: `navigation-menu__link-container ${item.icon || item.iconSVG
          ? ''
          : 'navigation-menu__link-container--no-left-margin'}
            ${!item.icon && !item.iconSVG
          ? 'navigation-menu__link-container--no-icon'
          : ''}` }, isSubItem ? (h("p", null, item.text)) : (h("span", { class: "navigation-menu__link-text" }, item.text))), Component !== 'button' && (h("div", { class: "u-margin-left--auto" }, h("d4l-icon-arrow-forward-ios", { classes: "icon--small" }))))));
    };
  }
  handleDocumentClick(event) {
    const { menuContainerElement, hideMenu } = this;
    if (menuContainerElement &&
      menuContainerElement !== event.target &&
      !menuContainerElement.contains(event.target)) {
      hideMenu();
    }
  }
  get itemIndex() {
    return [].concat(...this.navigationItems.map((item, itemIndex) => [
      `${itemIndex}`,
      ...(item.subItems
        ? item.subItems.map((_subItem, subItemIndex) => `${itemIndex}-${subItemIndex}`)
        : []),
    ]));
  }
  render() {
    const { classes, direction, menuButtonShow, menuButtonIcon, menuButtonLabel, menuButtonLabelShow, menuCardTitle, navigationItems, isMenuOpen, notification, supportedLanguages, selectedLanguage, menuFooterLinks, toggleMenu, handleMenuButtonKeyDown, } = this;
    return (h("div", { class: `navigation-menu ${classes}`, ref: (el) => (this.menuContainerElement = el) }, h("button", { class: "u-button-reset", "aria-expanded": isMenuOpen.toString(), "aria-haspopup": "true", type: "button", onClick: () => toggleMenu(), onKeyDown: (event) => handleMenuButtonKeyDown(event), title: menuButtonLabel }, notification && h("div", { class: "navigation-menu__dot" }), menuButtonShow ? (h("div", { class: `navigation-menu__icon-button ${!menuButtonLabelShow ? 'navigation-menu__icon-button--no-label' : ''}` }, menuButtonIcon && h("d4l-icon", { iconName: menuButtonIcon }), menuButtonLabelShow && (h("div", { class: "navigation-menu__icon-button__label" }, menuButtonLabelShow && menuButtonLabel)))) : (h(Fragment, null, h("span", { class: "navigation-menu__burger" }), h("span", { class: "navigation-menu__burger" }), h("span", { class: "navigation-menu__burger navigation-menu__burger--no-margin" }), h("span", { class: "u-visually-hidden" }, menuButtonLabel)))), h("div", { class: `navigation-menu__card
               ${direction === 'left'
        ? 'navigation-menu__card--left-aligned'
        : 'navigation-menu__card--right-aligned'}` }, h("d4l-card", { classes: "card--round-corners-l card--no-padding card--desktop" }, h("div", { slot: "card-header", class: "navigation-menu__header" }, h("span", null, menuCardTitle), supportedLanguages && (h("d4l-language-switcher", { "data-test": "languageSwitcher", languages: supportedLanguages, activeLanguage: selectedLanguage }))), h("div", { slot: "card-content", class: `${menuFooterLinks && !!menuFooterLinks.length
        ? 'navigation-menu__content'
        : 'navigation-menu__content--padded'}` }, h("ul", { class: "u-list-reset", role: "menu", ref: (el) => (this.menuListElement = el) }, navigationItems
      .filter(({ condition }) => condition !== undefined ? condition : true)
      .map((item, index) => (h(Fragment, null, this.renderNavigationItem(item, `${index}`), item.subItems &&
      item.subItems.map((subItem, subIndex) => this.renderNavigationItem(subItem, `${index}-${subIndex}`, true)))))), menuFooterLinks && !!menuFooterLinks.length && (h("ul", { class: "navigation-menu__footer u-list-reset u-padding-top--s u-padding-bottom--m u-padding-horizontal--m" }, menuFooterLinks.map((item) => {
      var _a;
      return (h("li", null, !item.internal ? (h("a", { class: "navigation-menu__footer__link", title: item.title, href: item.url, target: (_a = item.target) !== null && _a !== void 0 ? _a : '_blank', rel: item.target !== '_self' && 'noopener' }, item.text)) : (h("stencil-route-link", { url: item.url, anchorTitle: item.title, anchorClass: "navigation-menu__footer__link" }, item.text))));
    }))))))));
  }
};
NavigationMenu.style = navigationMenuCss;

export { NavigationMenu as d4l_navigation_menu };
