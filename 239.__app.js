exports.ids = [239];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-phpdoc.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-phpdoc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tvar typeExpression = /(?:[a-zA-Z]\\w*|[|\\\\[\\]])+/.source;\n\n\tPrism.languages.phpdoc = Prism.languages.extend('javadoclike', {\n\t\t'parameter': {\n\t\t\tpattern: RegExp('(@(?:global|param|property(?:-read|-write)?|var)\\\\s+(?:' + typeExpression + '\\\\s+)?)\\\\$\\\\w+'),\n\t\t\tlookbehind: true\n\t\t}\n\t});\n\n\tPrism.languages.insertBefore('phpdoc', 'keyword', {\n\t\t'class-name': [\n\t\t\t{\n\t\t\t\tpattern: RegExp('(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\\\s+)' + typeExpression),\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: {\n\t\t\t\t\t'keyword': /\\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\\b/,\n\t\t\t\t\t'punctuation': /[|\\\\[\\]()]/\n\t\t\t\t}\n\t\t\t}\n\t\t],\n\t});\n\n\tPrism.languages.javadoclike.addSupport('php', Prism.languages.phpdoc);\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-phpdoc.js?");

/***/ })

};;