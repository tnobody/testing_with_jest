exports.ids = [111];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-graphql.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-graphql.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.graphql = {\n\t'comment': /#.*/,\n\t'string': {\n\t\tpattern: /\"(?:\\\\.|[^\\\\\"\\r\\n])*\"/,\n\t\tgreedy: true\n\t},\n\t'number': /(?:\\B-|\\b)\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b/i,\n\t'boolean': /\\b(?:true|false)\\b/,\n\t'variable': /\\$[a-z_]\\w*/i,\n\t'directive': {\n\t\tpattern: /@[a-z_]\\w*/i,\n\t\talias: 'function'\n\t},\n\t'attr-name': {\n\t\tpattern: /[a-z_]\\w*(?=\\s*(?:\\((?:[^()\"]|\"(?:\\\\.|[^\\\\\"\\r\\n])*\")*\\))?:)/i,\n\t\tgreedy: true\n\t},\n\t'class-name': {\n\t\tpattern: /(\\b(?:enum|implements|interface|on|scalar|type|union)\\s+)[a-zA-Z_]\\w*/,\n\t\tlookbehind: true\n\t},\n\t'fragment': {\n\t\tpattern: /(\\bfragment\\s+|\\.{3}\\s*(?!on\\b))[a-zA-Z_]\\w*/,\n\t\tlookbehind: true,\n\t\talias: 'function'\n\t},\n\t'keyword': /\\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\\b/,\n\t'operator': /[!=|]|\\.{3}/,\n\t'punctuation': /[!(){}\\[\\]:=,]/,\n\t'constant': /\\b(?!ID\\b)[A-Z][A-Z_\\d]*\\b/\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-graphql.js?");

/***/ })

};;