exports.ids = [89];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-erlang.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-erlang.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.erlang = {\n\t'comment': /%.+/,\n\t'string': {\n\t\tpattern: /\"(?:\\\\.|[^\\\\\"\\r\\n])*\"/,\n\t\tgreedy: true\n\t},\n\t'quoted-function': {\n\t\tpattern: /'(?:\\\\.|[^\\\\'\\r\\n])+'(?=\\()/,\n\t\talias: 'function'\n\t},\n\t'quoted-atom': {\n\t\tpattern: /'(?:\\\\.|[^\\\\'\\r\\n])+'/,\n\t\talias: 'atom'\n\t},\n\t'boolean': /\\b(?:true|false)\\b/,\n\t'keyword': /\\b(?:fun|when|case|of|end|if|receive|after|try|catch)\\b/,\n\t'number': [\n\t\t/\\$\\\\?./,\n\t\t/\\d+#[a-z0-9]+/i,\n\t\t/(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?/i\n\t],\n\t'function': /\\b[a-z][\\w@]*(?=\\()/,\n\t'variable': {\n\t\t// Look-behind is used to prevent wrong highlighting of atoms containing \"@\"\n\t\tpattern: /(^|[^@])(?:\\b|\\?)[A-Z_][\\w@]*/,\n\t\tlookbehind: true\n\t},\n\t'operator': [\n\t\t/[=\\/<>:]=|=[:\\/]=|\\+\\+?|--?|[=*\\/!]|\\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\\b/,\n\t\t{\n\t\t\t// We don't want to match <<\n\t\t\tpattern: /(^|[^<])<(?!<)/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t{\n\t\t\t// We don't want to match >>\n\t\t\tpattern: /(^|[^>])>(?!>)/,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'atom': /\\b[a-z][\\w@]*/,\n\t'punctuation': /[()[\\]{}:;,.#|]|<<|>>/\n\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-erlang.js?");

/***/ })

};;