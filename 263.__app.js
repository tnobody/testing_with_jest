exports.ids = [263];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-qore.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-qore.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.qore = Prism.languages.extend('clike', {\n\t'comment': {\n\t\tpattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|(?:\\/\\/|#).*)/,\n\t\tlookbehind: true\n\t},\n\t// Overridden to allow unescaped multi-line strings\n\t'string': {\n\t\tpattern: /(\"|')(\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n\t\tgreedy: true\n\t},\n\t'variable': /\\$(?!\\d)\\w+\\b/,\n\t'keyword': /\\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\\b/,\n\t'number': /\\b(?:0b[01]+|0x[\\da-f]*\\.?[\\da-fp\\-]+|\\d*\\.?\\d+e?\\d*[df]|\\d*\\.?\\d+)\\b/i,\n\t'boolean': /\\b(?:true|false)\\b/i,\n\t'operator': {\n\t\tpattern: /(^|[^.])(?:\\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\\|[|=]?|[*\\/%^]=?|[~?])/,\n\t\tlookbehind: true\n\t},\n\t'function': /\\$?\\b(?!\\d)\\w+(?=\\()/\n});\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-qore.js?");

/***/ })

};;