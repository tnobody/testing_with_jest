exports.ids = [283];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-sas.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-sas.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.sas = {\n\t'datalines': {\n\t\tpattern: /^\\s*(?:(?:data)?lines|cards);[\\s\\S]+?(?:\\r?\\n|\\r);/im,\n\t\talias: 'string',\n\t\tinside: {\n\t\t\t'keyword': {\n\t\t\t\tpattern: /^(\\s*)(?:(?:data)?lines|cards)/i,\n\t\t\t\tlookbehind: true\n\t\t\t},\n\t\t\t'punctuation': /;/\n\t\t}\n\t},\n\t'comment': [\n\t\t{\n\t\t\tpattern: /(^\\s*|;\\s*)\\*.*;/m,\n\t\t\tlookbehind: true\n\t\t},\n\t\t/\\/\\*[\\s\\S]+?\\*\\//\n\t],\n\t'datetime': {\n\t\t// '1jan2013'd, '9:25:19pm't, '18jan2003:9:27:05am'dt\n\t\tpattern: /'[^']+'(?:dt?|t)\\b/i,\n\t\talias: 'number'\n\t},\n\t'string': {\n\t\tpattern: /([\"'])(?:\\1\\1|(?!\\1)[\\s\\S])*\\1/,\n\t\tgreedy: true\n\t},\n\t'keyword': /\\b(?:data|else|format|if|input|proc\\s\\w+|quit|run|then|libname|set|output|options)\\b/i,\n\t// Decimal (1.2e23), hexadecimal (0c1x)\n\t'number': /\\b(?:[\\da-f]+x|\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?)/i,\n\t'operator': /\\*\\*?|\\|\\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\\/=&]|[~¬^]=?|\\b(?:eq|ne|gt|lt|ge|le|in|not)\\b/i,\n\t'punctuation': /[$%@.(){}\\[\\];,\\\\]/\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-sas.js?");

/***/ })

};;