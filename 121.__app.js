exports.ids = [121];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-haxe.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-haxe.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.haxe = Prism.languages.extend('clike', {\n\t// Strings can be multi-line\n\t'string': {\n\t\tpattern: /([\"'])(?:(?!\\1)[^\\\\]|\\\\[\\s\\S])*\\1/,\n\t\tgreedy: true,\n\t\tinside: {\n\t\t\t'interpolation': {\n\t\t\t\tpattern: /(^|[^\\\\])\\$(?:\\w+|\\{[^}]+\\})/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: {\n\t\t\t\t\t'interpolation': {\n\t\t\t\t\t\tpattern: /^\\$\\w*/,\n\t\t\t\t\t\talias: 'variable'\n\t\t\t\t\t}\n\t\t\t\t\t// See rest below\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\t// The final look-ahead prevents highlighting of keywords if expressions such as \"haxe.macro.Expr\"\n\t'keyword': /\\bthis\\b|\\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\\.)\\b/,\n\t'operator': /\\.{3}|\\+\\+?|-[->]?|[=!]=?|&&?|\\|\\|?|<[<=]?|>[>=]?|[*\\/%~^]/\n});\nPrism.languages.insertBefore('haxe', 'class-name', {\n\t'regex': {\n\t\tpattern: /~\\/(?:[^\\/\\\\\\r\\n]|\\\\.)+\\/[igmsu]*/,\n\t\tgreedy: true\n\t}\n});\nPrism.languages.insertBefore('haxe', 'keyword', {\n\t'preprocessor': {\n\t\tpattern: /#\\w+/,\n\t\talias: 'builtin'\n\t},\n\t'metadata': {\n\t\tpattern: /@:?\\w+/,\n\t\talias: 'symbol'\n\t},\n\t'reification': {\n\t\tpattern: /\\$(?:\\w+|(?=\\{))/,\n\t\talias: 'variable'\n\t}\n});\nPrism.languages.haxe['string'].inside['interpolation'].inside.rest = Prism.languages.haxe;\ndelete Prism.languages.haxe['class-name'];\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-haxe.js?");

/***/ })

};;