exports.ids = [225];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-oz.js":
/*!*****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-oz.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.oz = {\n\t'comment': /\\/\\*[\\s\\S]*?\\*\\/|%.*/,\n\t'string': {\n\t\tpattern: /\"(?:[^\"\\\\]|\\\\[\\s\\S])*\"/,\n\t\tgreedy: true\n\t},\n\t'atom': {\n\t\tpattern: /'(?:[^'\\\\]|\\\\[\\s\\S])*'/,\n\t\tgreedy: true,\n\t\talias: 'builtin'\n\t},\n\t'keyword': /[$_]|\\[\\]|\\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\\b/,\n\t'function': [\n\t\t/[a-z][A-Za-z\\d]*(?=\\()/,\n\t\t{\n\t\t\tpattern: /(\\{)[A-Z][A-Za-z\\d]*/,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'number': /\\b(?:0[bx][\\da-f]+|\\d+\\.?\\d*(?:e~?\\d+)?\\b)|&(?:[^\\\\]|\\\\(?:\\d{3}|.))/i,\n\t'variable': /\\b[A-Z][A-Za-z\\d]*|`(?:[^`\\\\]|\\\\.)+`/,\n\t'attr-name': /\\w+(?=:)/,\n\t'operator': /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\\\=:?|!!?|[|#+\\-*\\/,~^@]|\\b(?:andthen|div|mod|orelse)\\b/,\n\t'punctuation': /[\\[\\](){}.:;?]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-oz.js?");

/***/ })

};;