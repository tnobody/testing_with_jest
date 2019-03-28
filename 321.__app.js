exports.ids = [321];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-tt2.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-tt2.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(Prism) {\n\n\tPrism.languages.tt2 = Prism.languages.extend('clike', {\n\t\tcomment: {\n\t\t\tpattern: /#.*|\\[%#[\\s\\S]*?%\\]/,\n\t\t\tlookbehind: true\n\t\t},\n\t\tkeyword: /\\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\\b/,\n\t\tpunctuation: /[[\\]{},()]/\n\t});\n\n\tPrism.languages.insertBefore('tt2', 'number', {\n\t\toperator: /=[>=]?|!=?|<=?|>=?|&&|\\|\\|?|\\b(?:and|or|not)\\b/,\n\t\tvariable: {\n\t\t\tpattern: /[a-z]\\w*(?:\\s*\\.\\s*(?:\\d+|\\$?[a-z]\\w*))*/i\n\t\t}\n\t});\n\n\tPrism.languages.insertBefore('tt2', 'keyword', {\n\t\t'delimiter': {\n\t\t\tpattern: /^(?:\\[%|%%)-?|-?%]$/,\n\t\t\talias: 'punctuation'\n\t\t}\n\t});\n\n\tPrism.languages.insertBefore('tt2', 'string', {\n\t\t'single-quoted-string': {\n\t\t\tpattern: /'[^\\\\']*(?:\\\\[\\s\\S][^\\\\']*)*'/,\n\t\t\tgreedy: true,\n\t\t\talias: 'string'\n\t\t},\n\t\t'double-quoted-string': {\n\t\t\tpattern: /\"[^\\\\\"]*(?:\\\\[\\s\\S][^\\\\\"]*)*\"/,\n\t\t\tgreedy: true,\n\t\t\talias: 'string',\n\t\t\tinside: {\n\t\t\t\tvariable: {\n\t\t\t\t\tpattern: /\\$(?:[a-z]\\w*(?:\\.(?:\\d+|\\$?[a-z]\\w*))*)/i\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n\n\t// The different types of TT2 strings \"replace\" the C-like standard string\n\tdelete Prism.languages.tt2.string;\n\n\tPrism.hooks.add('before-tokenize', function(env) {\n\t\tvar tt2Pattern = /\\[%[\\s\\S]+?%\\]/g;\n\t\tPrism.languages['markup-templating'].buildPlaceholders(env, 'tt2', tt2Pattern);\n\t});\n\n\tPrism.hooks.add('after-tokenize', function(env) {\n\t\tPrism.languages['markup-templating'].tokenizePlaceholders(env, 'tt2');\n\t});\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-tt2.js?");

/***/ })

};;