exports.ids = [79];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-eiffel.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-eiffel.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.eiffel = {\n\t'comment': /--.*/,\n\t'string': [\n\t\t// Aligned-verbatim-strings\n\t\t{\n\t\t\tpattern: /\"([^[]*)\\[[\\s\\S]*?\\]\\1\"/,\n\t\t\tgreedy: true\n\t\t},\n\t\t// Non-aligned-verbatim-strings\n\t\t{\n\t\t\tpattern: /\"([^{]*)\\{[\\s\\S]*?\\}\\1\"/,\n\t\t\tgreedy: true\n\t\t},\n\t\t// Single-line string\n\t\t{\n\t\t\tpattern: /\"(?:%\\s+%|%.|[^%\"\\r\\n])*\"/,\n\t\t\tgreedy: true\n\t\t}\n\t],\n\t// normal char | special char | char code\n\t'char': /'(?:%.|[^%'\\r\\n])+'/,\n\t'keyword': /\\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\\b/i,\n\t'boolean': /\\b(?:True|False)\\b/i,\n\t// Convention: class-names are always all upper-case characters\n\t'class-name': {\n\t\t'pattern': /\\b[A-Z][\\dA-Z_]*\\b/,\n\t\t'alias': 'builtin'\n\t},\n\t'number': [\n\t\t// hexa | octal | bin\n\t\t/\\b0[xcb][\\da-f](?:_*[\\da-f])*\\b/i,\n\t\t// Decimal\n\t\t/(?:\\d(?:_*\\d)*)?\\.(?:(?:\\d(?:_*\\d)*)?e[+-]?)?\\d(?:_*\\d)*|\\d(?:_*\\d)*\\.?/i\n\t],\n\t'punctuation': /:=|<<|>>|\\(\\||\\|\\)|->|\\.(?=\\w)|[{}[\\];(),:?]/,\n\t'operator': /\\\\\\\\|\\|\\.\\.\\||\\.\\.|\\/[~\\/=]?|[><]=?|[-+*^=~]/\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-eiffel.js?");

/***/ })

};;