exports.ids = [36];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-bnf.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bnf.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.bnf = {\n\t'string': {\n\t\tpattern: /\"[^\\r\\n\"]*\"|'[^\\r\\n']*'/\n\t},\n\t'definition': {\n\t\tpattern: /<[^<>\\r\\n\\t]+>(?=\\s*::=)/,\n\t\talias: ['rule', 'keyword'],\n\t\tinside: {\n\t\t\t'punctuation': /^<|>$/\n\t\t}\n\t},\n\t'rule': {\n\t\tpattern: /<[^<>\\r\\n\\t]+>/,\n\t\tinside: {\n\t\t\t'punctuation': /^<|>$/\n\t\t}\n\t},\n\t'operator': /::=|[|()[\\]{}*+?]|\\.{3}/\n};\n\nPrism.languages.rbnf = Prism.languages.bnf;\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-bnf.js?");

/***/ })

};;