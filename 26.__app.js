exports.ids = [26];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-autoit.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-autoit.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.autoit = {\n\t\"comment\": [\n\t\t/;.*/,\n\t\t{\n\t\t\t// The multi-line comments delimiters can actually be commented out with \";\"\n\t\t\tpattern: /(^\\s*)#(?:comments-start|cs)[\\s\\S]*?^\\s*#(?:comments-end|ce)/m,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t\"url\": {\n\t\tpattern: /(^\\s*#include\\s+)(?:<[^\\r\\n>]+>|\"[^\\r\\n\"]+\")/m,\n\t\tlookbehind: true\n\t},\n\t\"string\": {\n\t\tpattern: /([\"'])(?:\\1\\1|(?!\\1)[^\\r\\n])*\\1/,\n\t\tgreedy: true,\n\t\tinside: {\n\t\t\t\"variable\": /([%$@])\\w+\\1/\n\t\t}\n\t},\n\t\"directive\": {\n\t\tpattern: /(^\\s*)#\\w+/m,\n\t\tlookbehind: true,\n\t\talias: 'keyword'\n\t},\n\t\"function\": /\\b\\w+(?=\\()/,\n\t// Variables and macros\n\t\"variable\": /[$@]\\w+/,\n\t\"keyword\": /\\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\\b/i,\n\t\"number\": /\\b(?:0x[\\da-f]+|\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?)\\b/i,\n\t\"boolean\": /\\b(?:True|False)\\b/i,\n\t\"operator\": /<[=>]?|[-+*\\/=&>]=?|[?^]|\\b(?:And|Or|Not)\\b/i,\n\t\"punctuation\": /[\\[\\]().,:]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-autoit.js?");

/***/ })

};;