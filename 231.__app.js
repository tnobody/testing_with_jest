exports.ids = [231];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-pascal.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-pascal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Based on Free Pascal\n\n/* TODO\n\tSupport inline asm ?\n*/\n\nPrism.languages.pascal = {\n\t'comment': [\n\t\t/\\(\\*[\\s\\S]+?\\*\\)/,\n\t\t/\\{[\\s\\S]+?\\}/,\n\t\t/\\/\\/.*/\n\t],\n\t'string': {\n\t\tpattern: /(?:'(?:''|[^'\\r\\n])*'|#[&$%]?[a-f\\d]+)+|\\^[a-z]/i,\n\t\tgreedy: true\n\t},\n\t'keyword': [\n\t\t{\n\t\t\t// Turbo Pascal\n\t\t\tpattern: /(^|[^&])\\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\\b/i,\n\t\t\tlookbehind: true\n\t\t},\n\t\t{\n\t\t\t// Free Pascal\n\t\t\tpattern: /(^|[^&])\\b(?:dispose|exit|false|new|true)\\b/i,\n\t\t\tlookbehind: true\n\t\t},\n\t\t{\n\t\t\t// Object Pascal\n\t\t\tpattern: /(^|[^&])\\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\\b/i,\n\t\t\tlookbehind: true\n\t\t},\n\t\t{\n\t\t\t// Modifiers\n\t\t\tpattern: /(^|[^&])\\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\\b/i,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'number': [\n\t\t// Hexadecimal, octal and binary\n\t\t/(?:[&%]\\d+|\\$[a-f\\d]+)/i,\n\t\t// Decimal\n\t\t/\\b\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?/i\n\t],\n\t'operator': [\n\t\t/\\.\\.|\\*\\*|:=|<[<=>]?|>[>=]?|[+\\-*\\/]=?|[@^=]/i,\n\t\t{\n\t\t\tpattern: /(^|[^&])\\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\\b/,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'punctuation': /\\(\\.|\\.\\)|[()\\[\\]:;,.]/\n};\n\nPrism.languages.objectpascal = Prism.languages.pascal;\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-pascal.js?");

/***/ })

};;