exports.ids = [185];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-lua.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-lua.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.lua = {\n\t'comment': /^#!.+|--(?:\\[(=*)\\[[\\s\\S]*?\\]\\1\\]|.*)/m,\n\t// \\z may be used to skip the following space\n\t'string': {\n\t\tpattern: /([\"'])(?:(?!\\1)[^\\\\\\r\\n]|\\\\z(?:\\r\\n|\\s)|\\\\(?:\\r\\n|[\\s\\S]))*\\1|\\[(=*)\\[[\\s\\S]*?\\]\\2\\]/,\n\t\tgreedy: true\n\t},\n\t'number': /\\b0x[a-f\\d]+\\.?[a-f\\d]*(?:p[+-]?\\d+)?\\b|\\b\\d+(?:\\.\\B|\\.?\\d*(?:e[+-]?\\d+)?\\b)|\\B\\.\\d+(?:e[+-]?\\d+)?\\b/i,\n\t'keyword': /\\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\\b/,\n\t'function': /(?!\\d)\\w+(?=\\s*(?:[({]))/,\n\t'operator': [\n\t\t/[-+*%^&|#]|\\/\\/?|<[<=]?|>[>=]?|[=~]=?/,\n\t\t{\n\t\t\t// Match \"..\" but don't break \"...\"\n\t\t\tpattern: /(^|[^.])\\.\\.(?!\\.)/,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'punctuation': /[\\[\\](){},;]|\\.+|:+/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-lua.js?");

/***/ })

};;