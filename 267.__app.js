exports.ids = [267];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-reason.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-reason.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.reason = Prism.languages.extend('clike', {\n\t'comment': {\n\t\tpattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?\\*\\//,\n\t\tlookbehind: true\n\t},\n\t'string': {\n\t\tpattern: /\"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n\"])*\"/,\n\t\tgreedy: true\n\t},\n\t// 'class-name' must be matched *after* 'constructor' defined below\n\t'class-name': /\\b[A-Z]\\w*/,\n\t'keyword': /\\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\\b/,\n\t'operator': /\\.{3}|:[:=]|\\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\\-*\\/]\\.?|\\b(?:mod|land|lor|lxor|lsl|lsr|asr)\\b/\n});\nPrism.languages.insertBefore('reason', 'class-name', {\n\t'character': {\n\t\tpattern: /'(?:\\\\x[\\da-f]{2}|\\\\o[0-3][0-7][0-7]|\\\\\\d{3}|\\\\.|[^'\\\\\\r\\n])'/,\n\t\talias: 'string'\n\t},\n\t'constructor': {\n\t\t// Negative look-ahead prevents from matching things like String.capitalize\n\t\tpattern: /\\b[A-Z]\\w*\\b(?!\\s*\\.)/,\n\t\talias: 'variable'\n\t},\n\t'label': {\n\t\tpattern: /\\b[a-z]\\w*(?=::)/,\n\t\talias: 'symbol'\n\t}\n});\n\n// We can't match functions property, so let's not even try.\ndelete Prism.languages.reason.function;\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-reason.js?");

/***/ })

};;