exports.ids = [175];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-less.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-less.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* FIXME :\n :extend() is not handled specifically : its highlighting is buggy.\n Mixin usage must be inside a ruleset to be highlighted.\n At-rules (e.g. import) containing interpolations are buggy.\n Detached rulesets are highlighted as at-rules.\n A comment before a mixin usage prevents the latter to be properly highlighted.\n */\n\nPrism.languages.less = Prism.languages.extend('css', {\n\t'comment': [\n\t\t/\\/\\*[\\s\\S]*?\\*\\//,\n\t\t{\n\t\t\tpattern: /(^|[^\\\\])\\/\\/.*/,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'atrule': {\n\t\tpattern: /@[\\w-]+?(?:\\([^{}]+\\)|[^(){};])*?(?=\\s*\\{)/i,\n\t\tinside: {\n\t\t\t'punctuation': /[:()]/\n\t\t}\n\t},\n\t// selectors and mixins are considered the same\n\t'selector': {\n\t\tpattern: /(?:@\\{[\\w-]+\\}|[^{};\\s@])(?:@\\{[\\w-]+\\}|\\([^{}]*\\)|[^{};@])*?(?=\\s*\\{)/,\n\t\tinside: {\n\t\t\t// mixin parameters\n\t\t\t'variable': /@+[\\w-]+/\n\t\t}\n\t},\n\n\t'property': /(?:@\\{[\\w-]+\\}|[\\w-])+(?:\\+_?)?(?=\\s*:)/i,\n\t'operator': /[+\\-*\\/]/\n});\n\nPrism.languages.insertBefore('less', 'property', {\n\t'variable': [\n\t\t// Variable declaration (the colon must be consumed!)\n\t\t{\n\t\t\tpattern: /@[\\w-]+\\s*:/,\n\t\t\tinside: {\n\t\t\t\t\"punctuation\": /:/\n\t\t\t}\n\t\t},\n\n\t\t// Variable usage\n\t\t/@@?[\\w-]+/\n\t],\n\t'mixin-usage': {\n\t\tpattern: /([{;]\\s*)[.#](?!\\d)[\\w-]+.*?(?=[(;])/,\n\t\tlookbehind: true,\n\t\talias: 'function'\n\t}\n});\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-less.js?");

/***/ })

};;