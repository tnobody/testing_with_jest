exports.ids = [85];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-elm.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-elm.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.elm = {\n\tcomment: /--.*|{-[\\s\\S]*?-}/,\n\tchar: {\n\t\tpattern: /'(?:[^\\\\'\\r\\n]|\\\\(?:[abfnrtv\\\\']|\\d+|x[0-9a-fA-F]+))'/,\n\t\tgreedy: true\n\t},\n\tstring: [\n\t\t{\n\t\t\t// Multiline strings are wrapped in triple \". Quotes may appear unescaped.\n\t\t\tpattern: /\"\"\"[\\s\\S]*?\"\"\"/,\n\t\t\tgreedy: true\n\t\t},\n\t\t{\n\t\t\tpattern: /\"(?:[^\\\\\"\\r\\n]|\\\\(?:[abfnrtv\\\\\"]|\\d+|x[0-9a-fA-F]+))*\"/,\n\t\t\tgreedy: true\n\t\t}\n\t],\n\timport_statement: {\n\t\t// The imported or hidden names are not included in this import\n\t\t// statement. This is because we want to highlight those exactly like\n\t\t// we do for the names in the program.\n\t\tpattern: /^\\s*import\\s+[A-Z]\\w*(?:\\.[A-Z]\\w*)*(?:\\s+as\\s+([A-Z]\\w*)(?:\\.[A-Z]\\w*)*)?(?:\\s+exposing\\s+)?/m,\n\t\tinside: {\n\t\t\tkeyword: /\\b(?:import|as|exposing)\\b/\n\t\t}\n\t},\n\tkeyword: /\\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\\b/,\n\t// These are builtin variables only. Constructors are highlighted later as a constant.\n\tbuiltin: /\\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\\b/,\n\t// decimal integers and floating point numbers | hexadecimal integers\n\tnumber: /\\b(?:\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?|0x[0-9a-f]+)\\b/i,\n\t// Most of this is needed because of the meaning of a single '.'.\n\t// If it stands alone freely, it is the function composition.\n\t// It may also be a separator between a module name and an identifier => no\n\t// operator. If it comes together with other special characters it is an\n\t// operator too.\n\t// Valid operator characters in 0.18: +-/*=.$<>:&|^?%#@~!\n\t// Ref: https://groups.google.com/forum/#!msg/elm-dev/0AHSnDdkSkQ/E0SVU70JEQAJ\n\toperator: /\\s\\.\\s|[+\\-/*=.$<>:&|^?%#@~!]{2,}|[+\\-/*=$<>:&|^?%#@~!]/,\n\t// In Elm, nearly everything is a variable, do not highlight these.\n\thvariable: /\\b(?:[A-Z]\\w*\\.)*[a-z]\\w*\\b/,\n\tconstant: /\\b(?:[A-Z]\\w*\\.)*[A-Z]\\w*\\b/,\n\tpunctuation: /[{}[\\]|(),.:]/\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-elm.js?");

/***/ })

};;