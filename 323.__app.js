exports.ids = [323];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-twig.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-twig.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.twig = {\n\t'comment': /\\{#[\\s\\S]*?#\\}/,\n\t'tag': {\n\t\tpattern: /\\{\\{[\\s\\S]*?\\}\\}|\\{%[\\s\\S]*?%\\}/,\n\t\tinside: {\n\t\t\t'ld': {\n\t\t\t\tpattern: /^(?:\\{\\{-?|\\{%-?\\s*\\w+)/,\n\t\t\t\tinside: {\n\t\t\t\t\t'punctuation': /^(?:\\{\\{|\\{%)-?/,\n\t\t\t\t\t'keyword': /\\w+/\n\t\t\t\t}\n\t\t\t},\n\t\t\t'rd': {\n\t\t\t\tpattern: /-?(?:%\\}|\\}\\})$/,\n\t\t\t\tinside: {\n\t\t\t\t\t'punctuation': /.+/\n\t\t\t\t}\n\t\t\t},\n\t\t\t'string': {\n\t\t\t\tpattern: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n\t\t\t\tinside: {\n\t\t\t\t\t'punctuation': /^['\"]|['\"]$/\n\t\t\t\t}\n\t\t\t},\n\t\t\t'keyword': /\\b(?:even|if|odd)\\b/,\n\t\t\t'boolean': /\\b(?:true|false|null)\\b/,\n\t\t\t'number': /\\b0x[\\dA-Fa-f]+|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:[Ee][-+]?\\d+)?/,\n\t\t\t'operator': [\n\t\t\t\t{\n\t\t\t\t\tpattern: /(\\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\\s)/,\n\t\t\t\t\tlookbehind: true\n\t\t\t\t},\n\t\t\t\t/[=<>]=?|!=|\\*\\*?|\\/\\/?|\\?:?|[-+~%|]/\n\t\t\t],\n\t\t\t'property': /\\b[a-zA-Z_]\\w*\\b/,\n\t\t\t'punctuation': /[()\\[\\]{}:.,]/\n\t\t}\n\t},\n\n\t// The rest can be parsed as HTML\n\t'other': {\n\t\t// We want non-blank matches\n\t\tpattern: /\\S(?:[\\s\\S]*\\S)?/,\n\t\tinside: Prism.languages.markup\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-twig.js?");

/***/ })

};;