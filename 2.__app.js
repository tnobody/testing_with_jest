exports.ids = [2];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-abnf.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-abnf.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tvar coreRules = '(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)';\n\n\tPrism.languages.abnf = {\n\t\t'comment': /;.*/,\n\t\t'string': {\n\t\t\tpattern: /(?:%[is])?\"[^\"\\n\\r]*\"/,\n\t\t\tgreedy: true,\n\t\t\tinside: {\n\t\t\t\t'punctuation': /^%[is]/\n\t\t\t}\n\t\t},\n\t\t'range': {\n\t\t\tpattern: /%(?:b[01]+-[01]+|d\\d+-\\d+|x[A-F\\d]+-[A-F\\d]+)/i,\n\t\t\talias: 'number'\n\t\t},\n\t\t'terminal': {\n\t\t\tpattern: /%(?:b[01]+(?:\\.[01]+)*|d\\d+(?:\\.\\d+)*|x[A-F\\d]+(?:\\.[A-F\\d]+)*)/i,\n\t\t\talias: 'number'\n\t\t},\n\t\t'repetition': {\n\t\t\tpattern: /(^|[^\\w-])(?:\\d*\\*\\d*|\\d+)/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'operator'\n\t\t},\n\t\t'definition': {\n\t\t\tpattern: /(^[ \\t]*)(?:[a-z][\\w-]*|<[^>\\r\\n]*>)(?=\\s*=)/m,\n\t\t\tlookbehind: true,\n\t\t\talias: 'keyword',\n\t\t\tinside: {\n\t\t\t\t'punctuation': /<|>/\n\t\t\t}\n\t\t},\n\t\t'core-rule': {\n\t\t\tpattern: RegExp('(?:(^|[^<\\\\w-])' + coreRules + '|<' + coreRules + '>)(?![\\\\w-])', 'i'),\n\t\t\tlookbehind: true,\n\t\t\talias: ['rule', 'constant'],\n\t\t\tinside: {\n\t\t\t\t'punctuation': /<|>/\n\t\t\t}\n\t\t},\n\t\t'rule': {\n\t\t\tpattern: /(^|[^<\\w-])[a-z][\\w-]*|<[^>\\r\\n]*>/i,\n\t\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\t'punctuation': /<|>/\n\t\t\t}\n\t\t},\n\t\t'operator': /=\\/?|\\//,\n\t\t'punctuation': /[()\\[\\]]/\n\t};\n\n})(Prism);\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-abnf.js?");

/***/ })

};;