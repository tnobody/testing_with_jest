exports.ids = [171];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-kotlin.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-kotlin.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\tPrism.languages.kotlin = Prism.languages.extend('clike', {\n\t\t'keyword': {\n\t\t\t// The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get\n\t\t\tpattern: /(^|[^.])\\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\\b/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t'function': [\n\t\t\t/\\w+(?=\\s*\\()/,\n\t\t\t{\n\t\t\t\tpattern: /(\\.)\\w+(?=\\s*\\{)/,\n\t\t\t\tlookbehind: true\n\t\t\t}\n\t\t],\n\t\t'number': /\\b(?:0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\\d+(?:_\\d+)*(?:\\.\\d+(?:_\\d+)*)?(?:[eE][+-]?\\d+(?:_\\d+)*)?[fFL]?)\\b/,\n\t\t'operator': /\\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\\/*%<>]=?|[?:]:?|\\.\\.|&&|\\|\\||\\b(?:and|inv|or|shl|shr|ushr|xor)\\b/\n\t});\n\n\tdelete Prism.languages.kotlin[\"class-name\"];\n\n\tPrism.languages.insertBefore('kotlin', 'string', {\n\t\t'raw-string': {\n\t\t\tpattern: /(\"\"\"|''')[\\s\\S]*?\\1/,\n\t\t\talias: 'string'\n\t\t\t// See interpolation below\n\t\t}\n\t});\n\tPrism.languages.insertBefore('kotlin', 'keyword', {\n\t\t'annotation': {\n\t\t\tpattern: /\\B@(?:\\w+:)?(?:[A-Z]\\w*|\\[[^\\]]+\\])/,\n\t\t\talias: 'builtin'\n\t\t}\n\t});\n\tPrism.languages.insertBefore('kotlin', 'function', {\n\t\t'label': {\n\t\t\tpattern: /\\w+@|@\\w+/,\n\t\t\talias: 'symbol'\n\t\t}\n\t});\n\n\tvar interpolation = [\n\t\t{\n\t\t\tpattern: /\\$\\{[^}]+\\}/,\n\t\t\tinside: {\n\t\t\t\tdelimiter: {\n\t\t\t\t\tpattern: /^\\$\\{|\\}$/,\n\t\t\t\t\talias: 'variable'\n\t\t\t\t},\n\t\t\t\trest: Prism.languages.kotlin\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\tpattern: /\\$\\w+/,\n\t\t\talias: 'variable'\n\t\t}\n\t];\n\n\tPrism.languages.kotlin['string'].inside = Prism.languages.kotlin['raw-string'].inside = {\n\t\tinterpolation: interpolation\n\t};\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-kotlin.js?");

/***/ })

};;