exports.ids = [247];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-prolog.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-prolog.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.prolog = {\n\t// Syntax depends on the implementation\n\t'comment': [\n\t\t/%.+/,\n\t\t/\\/\\*[\\s\\S]*?\\*\\//\n\t],\n\t// Depending on the implementation, strings may allow escaped newlines and quote-escape\n\t'string': {\n\t\tpattern: /([\"'])(?:\\1\\1|\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n\t\tgreedy: true\n\t},\n\t'builtin': /\\b(?:fx|fy|xf[xy]?|yfx?)\\b/,\n\t'variable': /\\b[A-Z_]\\w*/,\n\t// FIXME: Should we list all null-ary predicates (not followed by a parenthesis) like halt, trace, etc.?\n\t'function': /\\b[a-z]\\w*(?:(?=\\()|\\/\\d+)/,\n\t'number': /\\b\\d+\\.?\\d*/,\n\t// Custom operators are allowed\n\t'operator': /[:\\\\=><\\-?*@\\/;+^|!$.]+|\\b(?:is|mod|not|xor)\\b/,\n\t'punctuation': /[(){}\\[\\],]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-prolog.js?");

/***/ })

};;