exports.ids = [91];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-flow.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-flow.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\tPrism.languages.flow = Prism.languages.extend('javascript', {});\n\n\tPrism.languages.insertBefore('flow', 'keyword', {\n\t\t'type': [\n\t\t\t{\n\t\t\t\tpattern: /\\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\\b/,\n\t\t\t\talias: 'tag'\n\t\t\t}\n\t\t]\n\t});\n\tPrism.languages.flow['function-variable'].pattern = /[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*=\\s*(?:function\\b|(?:\\([^()]*\\)(?:\\s*:\\s*\\w+)?|[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)\\s*=>))/i;\n\tdelete Prism.languages.flow['parameter'];\n\n\tPrism.languages.insertBefore('flow', 'operator', {\n\t\t'flow-punctuation': {\n\t\t\tpattern: /\\{\\||\\|\\}/,\n\t\t\talias: 'punctuation'\n\t\t}\n\t});\n\n\tif (!Array.isArray(Prism.languages.flow.keyword)) {\n\t\tPrism.languages.flow.keyword = [Prism.languages.flow.keyword];\n\t}\n\tPrism.languages.flow.keyword.unshift(\n\t\t{\n\t\t\tpattern: /(^|[^$]\\b)(?:type|opaque|declare|Class)\\b(?!\\$)/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t{\n\t\t\tpattern: /(^|[^$]\\B)\\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\\b(?!\\$)/,\n\t\t\tlookbehind: true\n\t\t}\n\t);\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-flow.js?");

/***/ })

};;