exports.ids = [289];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-scheme.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-scheme.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.scheme = {\n\t'comment': /;.*/,\n\t'string': {\n\t\tpattern: /\"(?:[^\"\\\\]|\\\\.)*\"|'[^()#'\\s]+/,\n\t\tgreedy: true\n\t},\n\t'character': {\n\t\tpattern: /#\\\\(?:[ux][a-fA-F\\d]+|[a-zA-Z]+|\\S)/,\n\t\talias: 'string'\n\t},\n\t'keyword': {\n\t\tpattern: /(\\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\\s])/,\n\t\tlookbehind: true\n\t},\n\t'builtin': {\n\t\tpattern: /(\\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\\/cc|append|abs|apply|eval)\\b|null\\?|pair\\?|boolean\\?|eof-object\\?|char\\?|procedure\\?|number\\?|port\\?|string\\?|vector\\?|symbol\\?|bytevector\\?)(?=[()\\s])/,\n\t\tlookbehind: true\n\t},\n\t'number': {\n\t\tpattern: /([\\s()])[-+]?\\d*\\.?\\d+(?:\\s*[-+]\\s*\\d*\\.?\\d+i)?\\b/,\n\t\tlookbehind: true\n\t},\n\t'boolean': /#[tf]/,\n\t'operator': {\n\t\tpattern: /(\\()(?:[-+*%\\/]|[<>]=?|=>?)(?=\\s|$)/,\n\t\tlookbehind: true\n\t},\n\t'function': {\n\t\tpattern: /(\\()[^()'\\s]+(?=[()\\s)]|$)/,\n\t\tlookbehind: true\n\t},\n\t'punctuation': /[()']/\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-scheme.js?");

/***/ })

};;