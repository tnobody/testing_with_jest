exports.ids = [117];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-handlebars.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-handlebars.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(Prism) {\n\n\tPrism.languages.handlebars = {\n\t\t'comment': /\\{\\{![\\s\\S]*?\\}\\}/,\n\t\t'delimiter': {\n\t\t\tpattern: /^\\{\\{\\{?|\\}\\}\\}?$/i,\n\t\t\talias: 'punctuation'\n\t\t},\n\t\t'string': /([\"'])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n\t\t'number': /\\b0x[\\dA-Fa-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:[Ee][+-]?\\d+)?/,\n\t\t'boolean': /\\b(?:true|false)\\b/,\n\t\t'block': {\n\t\t\tpattern: /^(\\s*~?\\s*)[#\\/]\\S+?(?=\\s*~?\\s*$|\\s)/i,\n\t\t\tlookbehind: true,\n\t\t\talias: 'keyword'\n\t\t},\n\t\t'brackets': {\n\t\t\tpattern: /\\[[^\\]]+\\]/,\n\t\t\tinside: {\n\t\t\t\tpunctuation: /\\[|\\]/,\n\t\t\t\tvariable: /[\\s\\S]+/\n\t\t\t}\n\t\t},\n\t\t'punctuation': /[!\"#%&'()*+,.\\/;<=>@\\[\\\\\\]^`{|}~]/,\n\t\t'variable': /[^!\"#%&'()*+,.\\/;<=>@\\[\\\\\\]^`{|}~\\s]+/\n\t};\n\n\tPrism.hooks.add('before-tokenize', function(env) {\n\t\tvar handlebarsPattern = /\\{\\{\\{[\\s\\S]+?\\}\\}\\}|\\{\\{[\\s\\S]+?\\}\\}/g;\n\t\tPrism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);\n\t});\n\n\tPrism.hooks.add('after-tokenize', function(env) {\n\t\tPrism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');\n\t});\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-handlebars.js?");

/***/ })

};;