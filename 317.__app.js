exports.ids = [317];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-toml.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-toml.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\t// pattern: /(?:[\\w-]+|'[^'\\n\\r]*'|\"(?:\\.|[^\\\\\"\\r\\n])*\")/\n\tvar key = \"(?:[\\\\w-]+|'[^'\\n\\r]*'|\\\"(?:\\\\.|[^\\\\\\\\\\\"\\r\\n])*\\\")\";\n\n\tPrism.languages.toml = {\n\t\t'comment': {\n\t\t\tpattern: /#.*/,\n\t\t\tgreedy: true\n\t\t},\n\t\t'table': {\n\t\t\tpattern: RegExp(\"(\\\\[\\\\s*)\" + key + \"(?:\\\\s*\\\\.\\\\s*\" + key + \")*(?=\\\\s*\\\\])\"),\n\t\t\tlookbehind: true,\n\t\t\tgreedy: true,\n\t\t\talias: 'class-name'\n\t\t},\n\t\t'key': {\n\t\t\tpattern: RegExp(\"(^\\\\s*|[{,]\\\\s*)\" + key + \"(?:\\\\s*\\\\.\\\\s*\" + key + \")*(?=\\\\s*=)\", \"m\"),\n\t\t\tlookbehind: true,\n\t\t\tgreedy: true,\n\t\t\talias: 'property'\n\t\t},\n\t\t'string': {\n\t\t\tpattern: /\"\"\"(?:\\\\[\\s\\S]|[^\\\\])*?\"\"\"|'''[\\s\\S]*?'''|'[^'\\n\\r]*'|\"(?:\\\\.|[^\\\\\"\\r\\n])*\"/,\n\t\t\tgreedy: true\n\t\t},\n\t\t'date': [\n\t\t\t{\n\t\t\t\t// Offset Date-Time, Local Date-Time, Local Date\n\t\t\t\tpattern: /\\d{4}-\\d{2}-\\d{2}(?:[T\\s]\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:Z|[+-]\\d{2}:\\d{2})?)?/i,\n\t\t\t\talias: 'number'\n\t\t\t},\n\t\t\t{\n\t\t\t\t// Local Time\n\t\t\t\tpattern: /\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?/i,\n\t\t\t\talias: 'number'\n\t\t\t}\n\t\t],\n\t\t'number': /(?:\\b0(?:x[\\da-zA-Z]+(?:_[\\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\\b|[-+]?\\d+(?:_\\d+)*(?:\\.\\d+(?:_\\d+)*)?(?:[eE][+-]?\\d+(?:_\\d+)*)?\\b|[-+]?(?:inf|nan)\\b/,\n\t\t'boolean': /\\b(?:true|false)\\b/,\n\t\t'punctuation': /[.,=[\\]{}]/\n\t};\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-toml.js?");

/***/ })

};;