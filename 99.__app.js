exports.ids = [99];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-gedcom.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-gedcom.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.gedcom = {\n\t'line-value': {\n\t\t// Preceded by level, optional pointer, and tag\n\t\tpattern: /(^\\s*\\d+ +(?:@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@ +)?\\w+ +).+/m,\n\t\tlookbehind: true,\n\t\tinside: {\n\t\t\t'pointer': {\n\t\t\t\tpattern: /^@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@$/,\n\t\t\t\talias: 'variable'\n\t\t\t}\n\t\t}\n\t},\n\t'tag': {\n\t\t// Preceded by level and optional pointer\n\t\tpattern: /(^\\s*\\d+ +(?:@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@ +)?)\\w+/m,\n\t\tlookbehind: true,\n\t\talias: 'string'\n\t},\n\t'level': {\n\t\tpattern: /(^\\s*)\\d+/m,\n\t\tlookbehind: true,\n\t\talias: 'number'\n\t},\n\t'pointer': {\n\t\tpattern: /@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@/,\n\t\talias: 'variable'\n\t}\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-gedcom.js?");

/***/ })

};;