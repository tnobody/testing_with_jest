exports.ids = [209];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-nasm.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-nasm.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.nasm = {\n\t'comment': /;.*$/m,\n\t'string': /([\"'`])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n\t'label': {\n\t\tpattern: /(^\\s*)[A-Za-z._?$][\\w.?$@~#]*:/m,\n\t\tlookbehind: true,\n\t\talias: 'function'\n\t},\n\t'keyword': [\n\t\t/\\[?BITS (?:16|32|64)\\]?/,\n\t\t{\n\t\t\tpattern: /(^\\s*)section\\s*[a-zA-Z.]+:?/im,\n\t\t\tlookbehind: true\n\t\t},\n\t\t/(?:extern|global)[^;\\r\\n]*/i,\n\t\t/(?:CPU|FLOAT|DEFAULT).*$/m\n\t],\n\t'register': {\n\t\tpattern: /\\b(?:st\\d|[xyz]mm\\d\\d?|[cdt]r\\d|r\\d\\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\\b/i,\n\t\talias: 'variable'\n\t},\n\t'number': /(?:\\b|(?=\\$))(?:0[hx][\\da-f]*\\.?[\\da-f]+(?:p[+-]?\\d+)?|\\d[\\da-f]+[hx]|\\$\\d[\\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\\d+|\\d*\\.?\\d+(?:\\.?e[+-]?\\d+)?[dt]?)\\b/i,\n\t'operator': /[\\[\\]*+\\-\\/%<>=&|$!]/\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-nasm.js?");

/***/ })

};;