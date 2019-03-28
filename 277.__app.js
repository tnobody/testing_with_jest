exports.ids = [277];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-roboconf.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-roboconf.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.roboconf = {\n\t'comment': /#.*/,\n\t'keyword': {\n\t\t'pattern': /(^|\\s)(?:(?:facet|instance of)(?=[ \\t]+[\\w-]+[ \\t]*\\{)|(?:external|import)\\b)/,\n\t\tlookbehind: true\n\t},\n\t'component': {\n\t\tpattern: /[\\w-]+(?=[ \\t]*\\{)/,\n\t\talias: 'variable'\n\t},\n\t'property': /[\\w.-]+(?=[ \\t]*:)/,\n\t'value': {\n\t\tpattern: /(=[ \\t]*)[^,;]+/,\n\t\tlookbehind: true,\n\t\talias: 'attr-value'\n\t},\n\t'optional': {\n\t\tpattern: /\\(optional\\)/,\n\t\talias: 'builtin'\n\t},\n\t'wildcard': {\n\t\tpattern: /(\\.)\\*/,\n\t\tlookbehind: true,\n\t\talias: 'operator'\n\t},\n\t'punctuation': /[{},.;:=]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-roboconf.js?");

/***/ })

};;