exports.ids = [161];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-json5.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-json5.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tvar string = /(\"|')(?:\\\\(?:\\r\\n?|\\n|.)|(?!\\1)[^\\\\\\r\\n])*\\1/\n\n\tPrism.languages.json5 = Prism.languages.extend('json', {\n\t\t'property': [\n\t\t\t{\n\t\t\t\tpattern: RegExp(string.source + '(?=\\\\s*:)'),\n\t\t\t\tgreedy: true\n\t\t\t},\n\t\t\t{\n\t\t\t\tpattern: /[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*:)/,\n\t\t\t\talias: 'unquoted'\n\t\t\t}\n\t\t],\n\t\t'string': {\n\t\t\tpattern: string,\n\t\t\tgreedy: true\n\t\t},\n\t\t'number': /[+-]?(?:NaN|Infinity|0x[a-fA-F\\d]+|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)/\n\t});\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-json5.js?");

/***/ })

};;