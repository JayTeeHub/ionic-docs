/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ColorVariable,
} from './components/color-gen/color-variables';
import {
  JSX,
} from '@stencil/core';
import {
  Link,
  MenuItems,
  Page,
  ReferenceKeys,
} from './definitions';
import {
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface CodeColor {
    'display': string;
    'mode': string;
    'value': string;
  }
  interface ColorAccordion {}
  interface ColorGenCssText {
    'cssText': string;
    'header': boolean;
  }
  interface ColorGenPreview {
    'cssText': string;
    'demoMode': string;
  }
  interface ColorGenSelectColors {
    'colors': ColorVariable[];
  }
  interface ColorGenVariableSelector {
    'editable': boolean;
    'isNew': boolean;
    'isParentOpen': boolean;
    'name': string;
    'property': string;
    'value': string;
  }
  interface ColorGenerator {}
  interface CommandCursor {
    'blink': boolean;
  }
  interface CommandLine {
    'nobuttons': boolean;
  }
  interface CommandOutput {}
  interface CommandPrompt {}
  interface ContributorList {
    'contributors': string[];
    'link': (contributor: string) => string;
  }
  interface DocsButton {
    'href': string;
    'round': boolean;
  }
  interface DocsCard {
    'header': string;
    'href': string;
    'icon': string;
    'img': string;
    'ionicon': string;
    'size': 'md' | 'lg';
  }
  interface DocsCards {}
  interface DocsCode {
    'language': string;
  }
  interface DocsCodepen {
    'defaultTab': string;
    'height': string | number;
    'penTitle': string;
    'preview': boolean;
    'slug': string;
    'theme': string;
    'user': string;
  }
  interface DocsDemo {
    'source': string;
    'url': string;
  }
  interface DocsDropdown {
    'align': 'left' | 'right' | 'center';
    'close': () => Promise<void>;
    'icon': (props: any) => JSX.Element;
    'label': string;
    'open': () => Promise<void>;
    'toggle': () => Promise<void>;
  }
  interface DocsHeader {
    'onToggleClick': (e: Event) => void;
  }
  interface DocsItem {
    'header': string;
    'href': string;
    'icon': string;
    'ionicon': string;
    'rounded': boolean;
  }
  interface DocsItemList {}
  interface DocsMenu {
    'onToggleClick': (e: Event) => void;
  }
  interface DocsMenuCollapsible {
    'heading': string;
  }
  interface DocsMenuNative {
    'category': 'community' | 'premier';
  }
  interface DocsMenuToggle {}
  interface DocsNav {
    'items': MenuItems;
  }
  interface DocsPage {
    'history': RouterHistory;
    'path': string;
  }
  interface DocsPageFooter {
    'page': Page;
  }
  interface DocsPagination {
    'page': Page;
  }
  interface DocsReference {
    'data': any[];
    'keys': ReferenceKeys;
  }
  interface DocsRoot {}
  interface DocsSelect {
    'initializer': (options: string[]) => string;
    'optionRenderer': (option: string) => any;
    'options': string[];
  }
  interface DocsTab {
    'selected': boolean;
    'tab': string;
  }
  interface DocsTableOfContents {
    'basepath': string;
    'label': string;
    'links': Link[];
  }
  interface DocsTabs {
    'listenFor': string;
  }
  interface FileTree {}
  interface FileTreeDirectory {
    'collapsed': boolean;
    'name': string;
  }
  interface FileTreeFile {
    'name': string;
  }
  interface FrameworkSelect {
    'onToggleClick': (e: Event) => void;
  }
  interface HeaderMobileCollapse {
    'darkMode': boolean;
  }
  interface HubspotForm {
    'formId': string;
  }
  interface InternalAd {}
  interface IonicSearch {
    'mobile': boolean;
  }
  interface LayeredColorsSelect {}
  interface NativeEntInstall {
    'capacitorSlug'?: string;
    'pluginId': string;
    'variables'?: string;
  }
  interface NewColorGenerator {}
  interface SmsForm {}
  interface SteppedColorGenerator {}
  interface WistiaVideo {
    'videoId': string;
  }
}

declare global {


  interface HTMLCodeColorElement extends Components.CodeColor, HTMLStencilElement {}
  var HTMLCodeColorElement: {
    prototype: HTMLCodeColorElement;
    new (): HTMLCodeColorElement;
  };

  interface HTMLColorAccordionElement extends Components.ColorAccordion, HTMLStencilElement {}
  var HTMLColorAccordionElement: {
    prototype: HTMLColorAccordionElement;
    new (): HTMLColorAccordionElement;
  };

  interface HTMLColorGenCssTextElement extends Components.ColorGenCssText, HTMLStencilElement {}
  var HTMLColorGenCssTextElement: {
    prototype: HTMLColorGenCssTextElement;
    new (): HTMLColorGenCssTextElement;
  };

  interface HTMLColorGenPreviewElement extends Components.ColorGenPreview, HTMLStencilElement {}
  var HTMLColorGenPreviewElement: {
    prototype: HTMLColorGenPreviewElement;
    new (): HTMLColorGenPreviewElement;
  };

  interface HTMLColorGenSelectColorsElement extends Components.ColorGenSelectColors, HTMLStencilElement {}
  var HTMLColorGenSelectColorsElement: {
    prototype: HTMLColorGenSelectColorsElement;
    new (): HTMLColorGenSelectColorsElement;
  };

  interface HTMLColorGenVariableSelectorElement extends Components.ColorGenVariableSelector, HTMLStencilElement {}
  var HTMLColorGenVariableSelectorElement: {
    prototype: HTMLColorGenVariableSelectorElement;
    new (): HTMLColorGenVariableSelectorElement;
  };

  interface HTMLColorGeneratorElement extends Components.ColorGenerator, HTMLStencilElement {}
  var HTMLColorGeneratorElement: {
    prototype: HTMLColorGeneratorElement;
    new (): HTMLColorGeneratorElement;
  };

  interface HTMLCommandCursorElement extends Components.CommandCursor, HTMLStencilElement {}
  var HTMLCommandCursorElement: {
    prototype: HTMLCommandCursorElement;
    new (): HTMLCommandCursorElement;
  };

  interface HTMLCommandLineElement extends Components.CommandLine, HTMLStencilElement {}
  var HTMLCommandLineElement: {
    prototype: HTMLCommandLineElement;
    new (): HTMLCommandLineElement;
  };

  interface HTMLCommandOutputElement extends Components.CommandOutput, HTMLStencilElement {}
  var HTMLCommandOutputElement: {
    prototype: HTMLCommandOutputElement;
    new (): HTMLCommandOutputElement;
  };

  interface HTMLCommandPromptElement extends Components.CommandPrompt, HTMLStencilElement {}
  var HTMLCommandPromptElement: {
    prototype: HTMLCommandPromptElement;
    new (): HTMLCommandPromptElement;
  };

  interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {}
  var HTMLContributorListElement: {
    prototype: HTMLContributorListElement;
    new (): HTMLContributorListElement;
  };

  interface HTMLDocsButtonElement extends Components.DocsButton, HTMLStencilElement {}
  var HTMLDocsButtonElement: {
    prototype: HTMLDocsButtonElement;
    new (): HTMLDocsButtonElement;
  };

  interface HTMLDocsCardElement extends Components.DocsCard, HTMLStencilElement {}
  var HTMLDocsCardElement: {
    prototype: HTMLDocsCardElement;
    new (): HTMLDocsCardElement;
  };

  interface HTMLDocsCardsElement extends Components.DocsCards, HTMLStencilElement {}
  var HTMLDocsCardsElement: {
    prototype: HTMLDocsCardsElement;
    new (): HTMLDocsCardsElement;
  };

  interface HTMLDocsCodeElement extends Components.DocsCode, HTMLStencilElement {}
  var HTMLDocsCodeElement: {
    prototype: HTMLDocsCodeElement;
    new (): HTMLDocsCodeElement;
  };

  interface HTMLDocsCodepenElement extends Components.DocsCodepen, HTMLStencilElement {}
  var HTMLDocsCodepenElement: {
    prototype: HTMLDocsCodepenElement;
    new (): HTMLDocsCodepenElement;
  };

  interface HTMLDocsDemoElement extends Components.DocsDemo, HTMLStencilElement {}
  var HTMLDocsDemoElement: {
    prototype: HTMLDocsDemoElement;
    new (): HTMLDocsDemoElement;
  };

  interface HTMLDocsDropdownElement extends Components.DocsDropdown, HTMLStencilElement {}
  var HTMLDocsDropdownElement: {
    prototype: HTMLDocsDropdownElement;
    new (): HTMLDocsDropdownElement;
  };

  interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {}
  var HTMLDocsHeaderElement: {
    prototype: HTMLDocsHeaderElement;
    new (): HTMLDocsHeaderElement;
  };

  interface HTMLDocsItemElement extends Components.DocsItem, HTMLStencilElement {}
  var HTMLDocsItemElement: {
    prototype: HTMLDocsItemElement;
    new (): HTMLDocsItemElement;
  };

  interface HTMLDocsItemListElement extends Components.DocsItemList, HTMLStencilElement {}
  var HTMLDocsItemListElement: {
    prototype: HTMLDocsItemListElement;
    new (): HTMLDocsItemListElement;
  };

  interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {}
  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };

  interface HTMLDocsMenuCollapsibleElement extends Components.DocsMenuCollapsible, HTMLStencilElement {}
  var HTMLDocsMenuCollapsibleElement: {
    prototype: HTMLDocsMenuCollapsibleElement;
    new (): HTMLDocsMenuCollapsibleElement;
  };

  interface HTMLDocsMenuNativeElement extends Components.DocsMenuNative, HTMLStencilElement {}
  var HTMLDocsMenuNativeElement: {
    prototype: HTMLDocsMenuNativeElement;
    new (): HTMLDocsMenuNativeElement;
  };

  interface HTMLDocsMenuToggleElement extends Components.DocsMenuToggle, HTMLStencilElement {}
  var HTMLDocsMenuToggleElement: {
    prototype: HTMLDocsMenuToggleElement;
    new (): HTMLDocsMenuToggleElement;
  };

  interface HTMLDocsNavElement extends Components.DocsNav, HTMLStencilElement {}
  var HTMLDocsNavElement: {
    prototype: HTMLDocsNavElement;
    new (): HTMLDocsNavElement;
  };

  interface HTMLDocsPageElement extends Components.DocsPage, HTMLStencilElement {}
  var HTMLDocsPageElement: {
    prototype: HTMLDocsPageElement;
    new (): HTMLDocsPageElement;
  };

  interface HTMLDocsPageFooterElement extends Components.DocsPageFooter, HTMLStencilElement {}
  var HTMLDocsPageFooterElement: {
    prototype: HTMLDocsPageFooterElement;
    new (): HTMLDocsPageFooterElement;
  };

  interface HTMLDocsPaginationElement extends Components.DocsPagination, HTMLStencilElement {}
  var HTMLDocsPaginationElement: {
    prototype: HTMLDocsPaginationElement;
    new (): HTMLDocsPaginationElement;
  };

  interface HTMLDocsReferenceElement extends Components.DocsReference, HTMLStencilElement {}
  var HTMLDocsReferenceElement: {
    prototype: HTMLDocsReferenceElement;
    new (): HTMLDocsReferenceElement;
  };

  interface HTMLDocsRootElement extends Components.DocsRoot, HTMLStencilElement {}
  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };

  interface HTMLDocsSelectElement extends Components.DocsSelect, HTMLStencilElement {}
  var HTMLDocsSelectElement: {
    prototype: HTMLDocsSelectElement;
    new (): HTMLDocsSelectElement;
  };

  interface HTMLDocsTabElement extends Components.DocsTab, HTMLStencilElement {}
  var HTMLDocsTabElement: {
    prototype: HTMLDocsTabElement;
    new (): HTMLDocsTabElement;
  };

  interface HTMLDocsTableOfContentsElement extends Components.DocsTableOfContents, HTMLStencilElement {}
  var HTMLDocsTableOfContentsElement: {
    prototype: HTMLDocsTableOfContentsElement;
    new (): HTMLDocsTableOfContentsElement;
  };

  interface HTMLDocsTabsElement extends Components.DocsTabs, HTMLStencilElement {}
  var HTMLDocsTabsElement: {
    prototype: HTMLDocsTabsElement;
    new (): HTMLDocsTabsElement;
  };

  interface HTMLFileTreeElement extends Components.FileTree, HTMLStencilElement {}
  var HTMLFileTreeElement: {
    prototype: HTMLFileTreeElement;
    new (): HTMLFileTreeElement;
  };

  interface HTMLFileTreeDirectoryElement extends Components.FileTreeDirectory, HTMLStencilElement {}
  var HTMLFileTreeDirectoryElement: {
    prototype: HTMLFileTreeDirectoryElement;
    new (): HTMLFileTreeDirectoryElement;
  };

  interface HTMLFileTreeFileElement extends Components.FileTreeFile, HTMLStencilElement {}
  var HTMLFileTreeFileElement: {
    prototype: HTMLFileTreeFileElement;
    new (): HTMLFileTreeFileElement;
  };

  interface HTMLFrameworkSelectElement extends Components.FrameworkSelect, HTMLStencilElement {}
  var HTMLFrameworkSelectElement: {
    prototype: HTMLFrameworkSelectElement;
    new (): HTMLFrameworkSelectElement;
  };

  interface HTMLHeaderMobileCollapseElement extends Components.HeaderMobileCollapse, HTMLStencilElement {}
  var HTMLHeaderMobileCollapseElement: {
    prototype: HTMLHeaderMobileCollapseElement;
    new (): HTMLHeaderMobileCollapseElement;
  };

  interface HTMLHubspotFormElement extends Components.HubspotForm, HTMLStencilElement {}
  var HTMLHubspotFormElement: {
    prototype: HTMLHubspotFormElement;
    new (): HTMLHubspotFormElement;
  };

  interface HTMLInternalAdElement extends Components.InternalAd, HTMLStencilElement {}
  var HTMLInternalAdElement: {
    prototype: HTMLInternalAdElement;
    new (): HTMLInternalAdElement;
  };

  interface HTMLIonicSearchElement extends Components.IonicSearch, HTMLStencilElement {}
  var HTMLIonicSearchElement: {
    prototype: HTMLIonicSearchElement;
    new (): HTMLIonicSearchElement;
  };

  interface HTMLLayeredColorsSelectElement extends Components.LayeredColorsSelect, HTMLStencilElement {}
  var HTMLLayeredColorsSelectElement: {
    prototype: HTMLLayeredColorsSelectElement;
    new (): HTMLLayeredColorsSelectElement;
  };

  interface HTMLNativeEntInstallElement extends Components.NativeEntInstall, HTMLStencilElement {}
  var HTMLNativeEntInstallElement: {
    prototype: HTMLNativeEntInstallElement;
    new (): HTMLNativeEntInstallElement;
  };

  interface HTMLNewColorGeneratorElement extends Components.NewColorGenerator, HTMLStencilElement {}
  var HTMLNewColorGeneratorElement: {
    prototype: HTMLNewColorGeneratorElement;
    new (): HTMLNewColorGeneratorElement;
  };

  interface HTMLSmsFormElement extends Components.SmsForm, HTMLStencilElement {}
  var HTMLSmsFormElement: {
    prototype: HTMLSmsFormElement;
    new (): HTMLSmsFormElement;
  };

  interface HTMLSteppedColorGeneratorElement extends Components.SteppedColorGenerator, HTMLStencilElement {}
  var HTMLSteppedColorGeneratorElement: {
    prototype: HTMLSteppedColorGeneratorElement;
    new (): HTMLSteppedColorGeneratorElement;
  };

  interface HTMLWistiaVideoElement extends Components.WistiaVideo, HTMLStencilElement {}
  var HTMLWistiaVideoElement: {
    prototype: HTMLWistiaVideoElement;
    new (): HTMLWistiaVideoElement;
  };
  interface HTMLElementTagNameMap {
    'code-color': HTMLCodeColorElement;
    'color-accordion': HTMLColorAccordionElement;
    'color-gen-css-text': HTMLColorGenCssTextElement;
    'color-gen-preview': HTMLColorGenPreviewElement;
    'color-gen-select-colors': HTMLColorGenSelectColorsElement;
    'color-gen-variable-selector': HTMLColorGenVariableSelectorElement;
    'color-generator': HTMLColorGeneratorElement;
    'command-cursor': HTMLCommandCursorElement;
    'command-line': HTMLCommandLineElement;
    'command-output': HTMLCommandOutputElement;
    'command-prompt': HTMLCommandPromptElement;
    'contributor-list': HTMLContributorListElement;
    'docs-button': HTMLDocsButtonElement;
    'docs-card': HTMLDocsCardElement;
    'docs-cards': HTMLDocsCardsElement;
    'docs-code': HTMLDocsCodeElement;
    'docs-codepen': HTMLDocsCodepenElement;
    'docs-demo': HTMLDocsDemoElement;
    'docs-dropdown': HTMLDocsDropdownElement;
    'docs-header': HTMLDocsHeaderElement;
    'docs-item': HTMLDocsItemElement;
    'docs-item-list': HTMLDocsItemListElement;
    'docs-menu': HTMLDocsMenuElement;
    'docs-menu-collapsible': HTMLDocsMenuCollapsibleElement;
    'docs-menu-native': HTMLDocsMenuNativeElement;
    'docs-menu-toggle': HTMLDocsMenuToggleElement;
    'docs-nav': HTMLDocsNavElement;
    'docs-page': HTMLDocsPageElement;
    'docs-page-footer': HTMLDocsPageFooterElement;
    'docs-pagination': HTMLDocsPaginationElement;
    'docs-reference': HTMLDocsReferenceElement;
    'docs-root': HTMLDocsRootElement;
    'docs-select': HTMLDocsSelectElement;
    'docs-tab': HTMLDocsTabElement;
    'docs-table-of-contents': HTMLDocsTableOfContentsElement;
    'docs-tabs': HTMLDocsTabsElement;
    'file-tree': HTMLFileTreeElement;
    'file-tree-directory': HTMLFileTreeDirectoryElement;
    'file-tree-file': HTMLFileTreeFileElement;
    'framework-select': HTMLFrameworkSelectElement;
    'header-mobile-collapse': HTMLHeaderMobileCollapseElement;
    'hubspot-form': HTMLHubspotFormElement;
    'internal-ad': HTMLInternalAdElement;
    'ionic-search': HTMLIonicSearchElement;
    'layered-colors-select': HTMLLayeredColorsSelectElement;
    'native-ent-install': HTMLNativeEntInstallElement;
    'new-color-generator': HTMLNewColorGeneratorElement;
    'sms-form': HTMLSmsFormElement;
    'stepped-color-generator': HTMLSteppedColorGeneratorElement;
    'wistia-video': HTMLWistiaVideoElement;
  }
}

declare namespace LocalJSX {
  interface CodeColor {
    'display'?: string;
    'mode'?: string;
    'value'?: string;
  }
  interface ColorAccordion {}
  interface ColorGenCssText {
    'cssText'?: string;
    'header'?: boolean;
    'onCssTextChange'?: (event: CustomEvent<any>) => void;
  }
  interface ColorGenPreview {
    'cssText'?: string;
    'demoMode'?: string;
  }
  interface ColorGenSelectColors {
    'colors'?: ColorVariable[];
  }
  interface ColorGenVariableSelector {
    'editable'?: boolean;
    'isNew'?: boolean;
    'isParentOpen'?: boolean;
    'name'?: string;
    'onColorChange'?: (event: CustomEvent<any>) => void;
    'onNameChange'?: (event: CustomEvent<any>) => void;
    'property'?: string;
    'value'?: string;
  }
  interface ColorGenerator {
    'onDemoMessage'?: (event: CustomEvent<any>) => void;
  }
  interface CommandCursor {
    'blink'?: boolean;
  }
  interface CommandLine {
    'nobuttons'?: boolean;
  }
  interface CommandOutput {}
  interface CommandPrompt {}
  interface ContributorList {
    'contributors'?: string[];
    'link'?: (contributor: string) => string;
  }
  interface DocsButton {
    'href'?: string;
    'round'?: boolean;
  }
  interface DocsCard {
    'header'?: string;
    'href'?: string;
    'icon'?: string;
    'img'?: string;
    'ionicon'?: string;
    'size'?: 'md' | 'lg';
  }
  interface DocsCards {}
  interface DocsCode {
    'language'?: string;
  }
  interface DocsCodepen {
    'defaultTab'?: string;
    'height'?: string | number;
    'penTitle'?: string;
    'preview'?: boolean;
    'slug'?: string;
    'theme'?: string;
    'user'?: string;
  }
  interface DocsDemo {
    'source'?: string;
    'url'?: string;
  }
  interface DocsDropdown {
    'align'?: 'left' | 'right' | 'center';
    'icon'?: (props: any) => JSX.Element;
    'label'?: string;
  }
  interface DocsHeader {
    'onToggleClick'?: (e: Event) => void;
  }
  interface DocsItem {
    'header'?: string;
    'href'?: string;
    'icon'?: string;
    'ionicon'?: string;
    'rounded'?: boolean;
  }
  interface DocsItemList {}
  interface DocsMenu {
    'onToggleClick'?: (e: Event) => void;
  }
  interface DocsMenuCollapsible {
    'heading'?: string;
  }
  interface DocsMenuNative {
    'category'?: 'community' | 'premier';
  }
  interface DocsMenuToggle {}
  interface DocsNav {
    'items'?: MenuItems;
  }
  interface DocsPage {
    'history'?: RouterHistory;
    'path'?: string;
  }
  interface DocsPageFooter {
    'page'?: Page;
  }
  interface DocsPagination {
    'page'?: Page;
  }
  interface DocsReference {
    'data'?: any[];
    'keys'?: ReferenceKeys;
  }
  interface DocsRoot {
    'onPageChanged'?: (event: CustomEvent<any>) => void;
  }
  interface DocsSelect {
    'initializer'?: (options: string[]) => string;
    'onSelection'?: (event: CustomEvent<string>) => void;
    'optionRenderer'?: (option: string) => any;
    'options'?: string[];
  }
  interface DocsTab {
    'selected'?: boolean;
    'tab'?: string;
  }
  interface DocsTableOfContents {
    'basepath'?: string;
    'label'?: string;
    'links'?: Link[];
  }
  interface DocsTabs {
    'listenFor'?: string;
  }
  interface FileTree {}
  interface FileTreeDirectory {
    'collapsed'?: boolean;
    'name'?: string;
  }
  interface FileTreeFile {
    'name'?: string;
  }
  interface FrameworkSelect {
    'onToggleClick'?: (e: Event) => void;
  }
  interface HeaderMobileCollapse {
    'darkMode'?: boolean;
  }
  interface HubspotForm {
    'formId'?: string;
  }
  interface InternalAd {}
  interface IonicSearch {
    'mobile'?: boolean;
  }
  interface LayeredColorsSelect {}
  interface NativeEntInstall {
    'capacitorSlug'?: string;
    'pluginId'?: string;
    'variables'?: string;
  }
  interface NewColorGenerator {}
  interface SmsForm {}
  interface SteppedColorGenerator {}
  interface WistiaVideo {
    'videoId'?: string;
  }

  interface IntrinsicElements {
    'code-color': CodeColor;
    'color-accordion': ColorAccordion;
    'color-gen-css-text': ColorGenCssText;
    'color-gen-preview': ColorGenPreview;
    'color-gen-select-colors': ColorGenSelectColors;
    'color-gen-variable-selector': ColorGenVariableSelector;
    'color-generator': ColorGenerator;
    'command-cursor': CommandCursor;
    'command-line': CommandLine;
    'command-output': CommandOutput;
    'command-prompt': CommandPrompt;
    'contributor-list': ContributorList;
    'docs-button': DocsButton;
    'docs-card': DocsCard;
    'docs-cards': DocsCards;
    'docs-code': DocsCode;
    'docs-codepen': DocsCodepen;
    'docs-demo': DocsDemo;
    'docs-dropdown': DocsDropdown;
    'docs-header': DocsHeader;
    'docs-item': DocsItem;
    'docs-item-list': DocsItemList;
    'docs-menu': DocsMenu;
    'docs-menu-collapsible': DocsMenuCollapsible;
    'docs-menu-native': DocsMenuNative;
    'docs-menu-toggle': DocsMenuToggle;
    'docs-nav': DocsNav;
    'docs-page': DocsPage;
    'docs-page-footer': DocsPageFooter;
    'docs-pagination': DocsPagination;
    'docs-reference': DocsReference;
    'docs-root': DocsRoot;
    'docs-select': DocsSelect;
    'docs-tab': DocsTab;
    'docs-table-of-contents': DocsTableOfContents;
    'docs-tabs': DocsTabs;
    'file-tree': FileTree;
    'file-tree-directory': FileTreeDirectory;
    'file-tree-file': FileTreeFile;
    'framework-select': FrameworkSelect;
    'header-mobile-collapse': HeaderMobileCollapse;
    'hubspot-form': HubspotForm;
    'internal-ad': InternalAd;
    'ionic-search': IonicSearch;
    'layered-colors-select': LayeredColorsSelect;
    'native-ent-install': NativeEntInstall;
    'new-color-generator': NewColorGenerator;
    'sms-form': SmsForm;
    'stepped-color-generator': SteppedColorGenerator;
    'wistia-video': WistiaVideo;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'code-color': LocalJSX.CodeColor & JSXBase.HTMLAttributes<HTMLCodeColorElement>;
      'color-accordion': LocalJSX.ColorAccordion & JSXBase.HTMLAttributes<HTMLColorAccordionElement>;
      'color-gen-css-text': LocalJSX.ColorGenCssText & JSXBase.HTMLAttributes<HTMLColorGenCssTextElement>;
      'color-gen-preview': LocalJSX.ColorGenPreview & JSXBase.HTMLAttributes<HTMLColorGenPreviewElement>;
      'color-gen-select-colors': LocalJSX.ColorGenSelectColors & JSXBase.HTMLAttributes<HTMLColorGenSelectColorsElement>;
      'color-gen-variable-selector': LocalJSX.ColorGenVariableSelector & JSXBase.HTMLAttributes<HTMLColorGenVariableSelectorElement>;
      'color-generator': LocalJSX.ColorGenerator & JSXBase.HTMLAttributes<HTMLColorGeneratorElement>;
      'command-cursor': LocalJSX.CommandCursor & JSXBase.HTMLAttributes<HTMLCommandCursorElement>;
      'command-line': LocalJSX.CommandLine & JSXBase.HTMLAttributes<HTMLCommandLineElement>;
      'command-output': LocalJSX.CommandOutput & JSXBase.HTMLAttributes<HTMLCommandOutputElement>;
      'command-prompt': LocalJSX.CommandPrompt & JSXBase.HTMLAttributes<HTMLCommandPromptElement>;
      'contributor-list': LocalJSX.ContributorList & JSXBase.HTMLAttributes<HTMLContributorListElement>;
      'docs-button': LocalJSX.DocsButton & JSXBase.HTMLAttributes<HTMLDocsButtonElement>;
      'docs-card': LocalJSX.DocsCard & JSXBase.HTMLAttributes<HTMLDocsCardElement>;
      'docs-cards': LocalJSX.DocsCards & JSXBase.HTMLAttributes<HTMLDocsCardsElement>;
      'docs-code': LocalJSX.DocsCode & JSXBase.HTMLAttributes<HTMLDocsCodeElement>;
      'docs-codepen': LocalJSX.DocsCodepen & JSXBase.HTMLAttributes<HTMLDocsCodepenElement>;
      'docs-demo': LocalJSX.DocsDemo & JSXBase.HTMLAttributes<HTMLDocsDemoElement>;
      'docs-dropdown': LocalJSX.DocsDropdown & JSXBase.HTMLAttributes<HTMLDocsDropdownElement>;
      'docs-header': LocalJSX.DocsHeader & JSXBase.HTMLAttributes<HTMLDocsHeaderElement>;
      'docs-item': LocalJSX.DocsItem & JSXBase.HTMLAttributes<HTMLDocsItemElement>;
      'docs-item-list': LocalJSX.DocsItemList & JSXBase.HTMLAttributes<HTMLDocsItemListElement>;
      'docs-menu': LocalJSX.DocsMenu & JSXBase.HTMLAttributes<HTMLDocsMenuElement>;
      'docs-menu-collapsible': LocalJSX.DocsMenuCollapsible & JSXBase.HTMLAttributes<HTMLDocsMenuCollapsibleElement>;
      'docs-menu-native': LocalJSX.DocsMenuNative & JSXBase.HTMLAttributes<HTMLDocsMenuNativeElement>;
      'docs-menu-toggle': LocalJSX.DocsMenuToggle & JSXBase.HTMLAttributes<HTMLDocsMenuToggleElement>;
      'docs-nav': LocalJSX.DocsNav & JSXBase.HTMLAttributes<HTMLDocsNavElement>;
      'docs-page': LocalJSX.DocsPage & JSXBase.HTMLAttributes<HTMLDocsPageElement>;
      'docs-page-footer': LocalJSX.DocsPageFooter & JSXBase.HTMLAttributes<HTMLDocsPageFooterElement>;
      'docs-pagination': LocalJSX.DocsPagination & JSXBase.HTMLAttributes<HTMLDocsPaginationElement>;
      'docs-reference': LocalJSX.DocsReference & JSXBase.HTMLAttributes<HTMLDocsReferenceElement>;
      'docs-root': LocalJSX.DocsRoot & JSXBase.HTMLAttributes<HTMLDocsRootElement>;
      'docs-select': LocalJSX.DocsSelect & JSXBase.HTMLAttributes<HTMLDocsSelectElement>;
      'docs-tab': LocalJSX.DocsTab & JSXBase.HTMLAttributes<HTMLDocsTabElement>;
      'docs-table-of-contents': LocalJSX.DocsTableOfContents & JSXBase.HTMLAttributes<HTMLDocsTableOfContentsElement>;
      'docs-tabs': LocalJSX.DocsTabs & JSXBase.HTMLAttributes<HTMLDocsTabsElement>;
      'file-tree': LocalJSX.FileTree & JSXBase.HTMLAttributes<HTMLFileTreeElement>;
      'file-tree-directory': LocalJSX.FileTreeDirectory & JSXBase.HTMLAttributes<HTMLFileTreeDirectoryElement>;
      'file-tree-file': LocalJSX.FileTreeFile & JSXBase.HTMLAttributes<HTMLFileTreeFileElement>;
      'framework-select': LocalJSX.FrameworkSelect & JSXBase.HTMLAttributes<HTMLFrameworkSelectElement>;
      'header-mobile-collapse': LocalJSX.HeaderMobileCollapse & JSXBase.HTMLAttributes<HTMLHeaderMobileCollapseElement>;
      'hubspot-form': LocalJSX.HubspotForm & JSXBase.HTMLAttributes<HTMLHubspotFormElement>;
      'internal-ad': LocalJSX.InternalAd & JSXBase.HTMLAttributes<HTMLInternalAdElement>;
      'ionic-search': LocalJSX.IonicSearch & JSXBase.HTMLAttributes<HTMLIonicSearchElement>;
      'layered-colors-select': LocalJSX.LayeredColorsSelect & JSXBase.HTMLAttributes<HTMLLayeredColorsSelectElement>;
      'native-ent-install': LocalJSX.NativeEntInstall & JSXBase.HTMLAttributes<HTMLNativeEntInstallElement>;
      'new-color-generator': LocalJSX.NewColorGenerator & JSXBase.HTMLAttributes<HTMLNewColorGeneratorElement>;
      'sms-form': LocalJSX.SmsForm & JSXBase.HTMLAttributes<HTMLSmsFormElement>;
      'stepped-color-generator': LocalJSX.SteppedColorGenerator & JSXBase.HTMLAttributes<HTMLSteppedColorGeneratorElement>;
      'wistia-video': LocalJSX.WistiaVideo & JSXBase.HTMLAttributes<HTMLWistiaVideoElement>;
    }
  }
}


