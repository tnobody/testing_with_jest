exports.ids = [34];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-bison.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bison.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.bison = Prism.languages.extend('c', {});\n\nPrism.languages.insertBefore('bison', 'comment', {\n\t'bison': {\n\t\t// This should match all the beginning of the file\n\t\t// including the prologue(s), the bison declarations and\n\t\t// the grammar rules.\n\t\tpattern: /^[\\s\\S]*?%%[\\s\\S]*?%%/,\n\t\tinside: {\n\t\t\t'c': {\n\t\t\t\t// Allow for one level of nested braces\n\t\t\t\tpattern: /%\\{[\\s\\S]*?%\\}|\\{(?:\\{[^}]*\\}|[^{}])*\\}/,\n\t\t\t\tinside: {\n\t\t\t\t\t'delimiter': {\n\t\t\t\t\t\tpattern: /^%?\\{|%?\\}$/,\n\t\t\t\t\t\talias: 'punctuation'\n\t\t\t\t\t},\n\t\t\t\t\t'bison-variable': {\n\t\t\t\t\t\tpattern: /[$@](?:<[^\\s>]+>)?[\\w$]+/,\n\t\t\t\t\t\talias: 'variable',\n\t\t\t\t\t\tinside: {\n\t\t\t\t\t\t\t'punctuation': /<|>/\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\trest: Prism.languages.c\n\t\t\t\t}\n\t\t\t},\n\t\t\t'comment': Prism.languages.c.comment,\n\t\t\t'string': Prism.languages.c.string,\n\t\t\t'property': /\\S+(?=:)/,\n\t\t\t'keyword': /%\\w+/,\n\t\t\t'number': {\n\t\t\t\tpattern: /(^|[^@])\\b(?:0x[\\da-f]+|\\d+)/i,\n\t\t\t\tlookbehind: true\n\t\t\t},\n\t\t\t'punctuation': /%[%?]|[|:;\\[\\]<>]/\n\t\t}\n\t}\n});\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-bison.js?");

/***/ })

};;