exports.ids = [285];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-sass.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-sass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(Prism) {\n\tPrism.languages.sass = Prism.languages.extend('css', {\n\t\t// Sass comments don't need to be closed, only indented\n\t\t'comment': {\n\t\t\tpattern: /^([ \\t]*)\\/[\\/*].*(?:(?:\\r?\\n|\\r)\\1[ \\t]+.+)*/m,\n\t\t\tlookbehind: true\n\t\t}\n\t});\n\n\tPrism.languages.insertBefore('sass', 'atrule', {\n\t\t// We want to consume the whole line\n\t\t'atrule-line': {\n\t\t\t// Includes support for = and + shortcuts\n\t\t\tpattern: /^(?:[ \\t]*)[@+=].+/m,\n\t\t\tinside: {\n\t\t\t\t'atrule': /(?:@[\\w-]+|[+=])/m\n\t\t\t}\n\t\t}\n\t});\n\tdelete Prism.languages.sass.atrule;\n\n\n\tvar variable = /\\$[-\\w]+|#\\{\\$[-\\w]+\\}/;\n\tvar operator = [\n\t\t/[+*\\/%]|[=!]=|<=?|>=?|\\b(?:and|or|not)\\b/,\n\t\t{\n\t\t\tpattern: /(\\s+)-(?=\\s)/,\n\t\t\tlookbehind: true\n\t\t}\n\t];\n\n\tPrism.languages.insertBefore('sass', 'property', {\n\t\t// We want to consume the whole line\n\t\t'variable-line': {\n\t\t\tpattern: /^[ \\t]*\\$.+/m,\n\t\t\tinside: {\n\t\t\t\t'punctuation': /:/,\n\t\t\t\t'variable': variable,\n\t\t\t\t'operator': operator\n\t\t\t}\n\t\t},\n\t\t// We want to consume the whole line\n\t\t'property-line': {\n\t\t\tpattern: /^[ \\t]*(?:[^:\\s]+ *:.*|:[^:\\s]+.*)/m,\n\t\t\tinside: {\n\t\t\t\t'property': [\n\t\t\t\t\t/[^:\\s]+(?=\\s*:)/,\n\t\t\t\t\t{\n\t\t\t\t\t\tpattern: /(:)[^:\\s]+/,\n\t\t\t\t\t\tlookbehind: true\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t'punctuation': /:/,\n\t\t\t\t'variable': variable,\n\t\t\t\t'operator': operator,\n\t\t\t\t'important': Prism.languages.sass.important\n\t\t\t}\n\t\t}\n\t});\n\tdelete Prism.languages.sass.property;\n\tdelete Prism.languages.sass.important;\n\n\t// Now that whole lines for other patterns are consumed,\n\t// what's left should be selectors\n\tPrism.languages.insertBefore('sass', 'punctuation', {\n\t\t'selector': {\n\t\t\tpattern: /([ \\t]*)\\S(?:,?[^,\\r\\n]+)*(?:,(?:\\r?\\n|\\r)\\1[ \\t]+\\S(?:,?[^,\\r\\n]+)*)*/,\n\t\t\tlookbehind: true\n\t\t}\n\t});\n\n}(Prism));\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-sass.js?");

/***/ })

};;