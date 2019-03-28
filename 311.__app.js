exports.ids = [311];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-tap.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-tap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.tap = {\n\tfail: /not ok[^#{\\n\\r]*/,\n\tpass: /ok[^#{\\n\\r]*/,\n\tpragma: /pragma [+-][a-z]+/,\n\tbailout: /bail out!.*/i,\n\tversion: /TAP version \\d+/i,\n\tplan: /\\d+\\.\\.\\d+(?: +#.*)?/,\n\tsubtest: {\n\t\tpattern: /# Subtest(?:: .*)?/,\n\t\tgreedy: true\n\t},\n\tpunctuation: /[{}]/,\n\tdirective: /#.*/,\n\tyamlish: {\n\t\tpattern: /(^[^\\S\\r\\n]*)---(?:\\r\\n?|\\n)(?:.*(?:\\r\\n?|\\n))*?[^\\S\\r\\n]*\\.\\.\\.$/m,\n\t\tlookbehind: true,\n\t\tinside: Prism.languages.yaml,\n\t\talias: 'language-yaml'\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-tap.js?");

/***/ })

};;