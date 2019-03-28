exports.ids = [87];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-erb.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-erb.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tPrism.languages.erb = Prism.languages.extend('ruby', {});\n\tPrism.languages.insertBefore('erb', 'comment', {\n\t\t'delimiter': {\n\t\t\tpattern: /^<%=?|%>$/,\n\t\t\talias: 'punctuation'\n\t\t}\n\t});\n\n\tPrism.hooks.add('before-tokenize', function(env) {\n\t\tvar erbPattern = /<%=?(?:[^\\r\\n]|[\\r\\n](?!=begin)|[\\r\\n]=begin\\s[\\s\\S]*?^=end)+?%>/gm;\n\t\tPrism.languages['markup-templating'].buildPlaceholders(env, 'erb', erbPattern);\n\t});\n\n\tPrism.hooks.add('after-tokenize', function(env) {\n\t\tPrism.languages['markup-templating'].tokenizePlaceholders(env, 'erb');\n\t});\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-erb.js?");

/***/ })

};;