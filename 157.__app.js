exports.ids = [157];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-jsdoc.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jsdoc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tvar javascript = Prism.languages.javascript;\n\n\tvar type = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source;\n\tvar parameterPrefix = '(@(?:param|arg|argument|property)\\\\s+(?:' + type + '\\\\s+)?)';\n\n\tPrism.languages.jsdoc = Prism.languages.extend('javadoclike', {\n\t\t'parameter': {\n\t\t\t// @param {string} foo - foo bar\n\t\t\tpattern: RegExp(parameterPrefix + /[$\\w\\xA0-\\uFFFF.]+(?=\\s|$)/.source),\n\t\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\t'punctuation': /\\./\n\t\t\t}\n\t\t}\n\t});\n\n\tPrism.languages.insertBefore('jsdoc', 'keyword', {\n\t\t'optional-parameter': {\n\t\t\t// @param {string} [baz.foo=\"bar\"] foo bar\n\t\t\tpattern: RegExp(parameterPrefix + /\\[[$\\w\\xA0-\\uFFFF.]+(?:=[^[\\]]+)?\\](?=\\s|$)/.source),\n\t\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\t'parameter': {\n\t\t\t\t\tpattern: /(^\\[)[$\\w\\xA0-\\uFFFF\\.]+/,\n\t\t\t\t\tlookbehind: true,\n\t\t\t\t\tinside: {\n\t\t\t\t\t\t'punctuation': /\\./\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'code': {\n\t\t\t\t\tpattern: /(=)[\\s\\S]*(?=\\]$)/,\n\t\t\t\t\tlookbehind: true,\n\t\t\t\t\tinside: javascript,\n\t\t\t\t\talias: 'language-javascript'\n\t\t\t\t},\n\t\t\t\t'punctuation': /[=[\\]]/\n\t\t\t}\n\t\t},\n\t\t'class-name': [\n\t\t\t{\n\t\t\t\tpattern: RegExp('(@[a-z]+\\\\s+)' + type),\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: {\n\t\t\t\t\t'punctuation': /[.,:?=<>|{}()[\\]]/\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\tpattern: /(@(?:augments|extends|class|interface|memberof!?|this)\\s+)[A-Z]\\w*(?:\\.[A-Z]\\w*)*/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: {\n\t\t\t\t\t'punctuation': /\\./\n\t\t\t\t}\n\t\t\t}\n\t\t],\n\t\t'example': {\n\t\t\tpattern: /(@example\\s+)[^@]+?(?=\\s*(?:\\*\\s*)?(?:@\\w|\\*\\/))/,\n\t\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\t'code': {\n\t\t\t\t\tpattern: /^(\\s*(?:\\*\\s*)?).+$/m,\n\t\t\t\t\tlookbehind: true,\n\t\t\t\t\tinside: javascript,\n\t\t\t\t\talias: 'language-javascript'\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n\n\tPrism.languages.javadoclike.addSupport('javascript', Prism.languages.jsdoc);\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-jsdoc.js?");

/***/ })

};;