exports.ids = [81];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-ejs.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ejs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tPrism.languages.ejs = {\n\t\t'delimiter': {\n\t\t\tpattern: /^<%[-_=]?|[-_]?%>$/,\n\t\t\talias: 'punctuation'\n\t\t},\n\t\t'comment': /^#[\\s\\S]*/,\n\t\t'language-javascript': {\n\t\t\tpattern: /[\\s\\S]+/,\n\t\t\tinside: Prism.languages.javascript\n\t\t}\n\t};\n\n\tPrism.hooks.add('before-tokenize', function(env) {\n\t\tvar ejsPattern = /<%(?!%)[\\s\\S]+?%>/g;\n\t\tPrism.languages['markup-templating'].buildPlaceholders(env, 'ejs', ejsPattern);\n\t});\n\n\tPrism.hooks.add('after-tokenize', function(env) {\n\t\tPrism.languages['markup-templating'].tokenizePlaceholders(env, 'ejs');\n\t});\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-ejs.js?");

/***/ })

};;