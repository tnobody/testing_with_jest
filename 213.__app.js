exports.ids = [213];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-nim.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-nim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.nim = {\n\t'comment': /#.*/,\n\t// Double-quoted strings can be prefixed by an identifier (Generalized raw string literals)\n\t// Character literals are handled specifically to prevent issues with numeric type suffixes\n\t'string': {\n\t\tpattern: /(?:(?:\\b(?!\\d)(?:\\w|\\\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:\"\"\"[\\s\\S]*?\"\"\"(?!\")|\"(?:\\\\[\\s\\S]|\"\"|[^\"\\\\])*\")|'(?:\\\\(?:\\d+|x[\\da-fA-F]{2}|.)|[^'])')/,\n\t\tgreedy: true\n\t},\n\t// The negative look ahead prevents wrong highlighting of the .. operator\n\t'number': /\\b(?:0[xXoObB][\\da-fA-F_]+|\\d[\\d_]*(?:(?!\\.\\.)\\.[\\d_]*)?(?:[eE][+-]?\\d[\\d_]*)?)(?:'?[iuf]\\d*)?/,\n\t'keyword': /\\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\\b/,\n\t'function': {\n\t\tpattern: /(?:(?!\\d)(?:\\w|\\\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\\r\\n]+`)\\*?(?:\\[[^\\]]+\\])?(?=\\s*\\()/,\n\t\tinside: {\n\t\t\t'operator': /\\*$/\n\t\t}\n\t},\n\t// We don't want to highlight operators inside backticks\n\t'ignore': {\n\t\tpattern: /`[^`\\r\\n]+`/,\n\t\tinside: {\n\t\t\t'punctuation': /`/\n\t\t}\n\t},\n\t'operator': {\n\t\t// Look behind and look ahead prevent wrong highlighting of punctuations [. .] {. .} (. .)\n\t\t// but allow the slice operator .. to take precedence over them\n\t\t// One can define his own operators in Nim so all combination of operators might be an operator.\n\t\tpattern: /(^|[({\\[](?=\\.\\.)|(?![({\\[]\\.).)(?:(?:[=+\\-*\\/<>@$~&%|!?^:\\\\]|\\.\\.|\\.(?![)}\\]]))+|\\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\\b)/m,\n\t\tlookbehind: true\n\t},\n\t'punctuation': /[({\\[]\\.|\\.[)}\\]]|[`(){}\\[\\],:]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-nim.js?");

/***/ })

};;