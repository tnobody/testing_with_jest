exports.ids = [52];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-coffeescript.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-coffeescript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(Prism) {\n\n// Ignore comments starting with { to privilege string interpolation highlighting\nvar comment = /#(?!\\{).+/,\n    interpolation = {\n    \tpattern: /#\\{[^}]+\\}/,\n    \talias: 'variable'\n    };\n\nPrism.languages.coffeescript = Prism.languages.extend('javascript', {\n\t'comment': comment,\n\t'string': [\n\n\t\t// Strings are multiline\n\t\t{\n\t\t\tpattern: /'(?:\\\\[\\s\\S]|[^\\\\'])*'/,\n\t\t\tgreedy: true\n\t\t},\n\n\t\t{\n\t\t\t// Strings are multiline\n\t\t\tpattern: /\"(?:\\\\[\\s\\S]|[^\\\\\"])*\"/,\n\t\t\tgreedy: true,\n\t\t\tinside: {\n\t\t\t\t'interpolation': interpolation\n\t\t\t}\n\t\t}\n\t],\n\t'keyword': /\\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\\b/,\n\t'class-member': {\n\t\tpattern: /@(?!\\d)\\w+/,\n\t\talias: 'variable'\n\t}\n});\n\nPrism.languages.insertBefore('coffeescript', 'comment', {\n\t'multiline-comment': {\n\t\tpattern: /###[\\s\\S]+?###/,\n\t\talias: 'comment'\n\t},\n\n\t// Block regexp can contain comments and interpolation\n\t'block-regex': {\n\t\tpattern: /\\/{3}[\\s\\S]*?\\/{3}/,\n\t\talias: 'regex',\n\t\tinside: {\n\t\t\t'comment': comment,\n\t\t\t'interpolation': interpolation\n\t\t}\n\t}\n});\n\nPrism.languages.insertBefore('coffeescript', 'string', {\n\t'inline-javascript': {\n\t\tpattern: /`(?:\\\\[\\s\\S]|[^\\\\`])*`/,\n\t\tinside: {\n\t\t\t'delimiter': {\n\t\t\t\tpattern: /^`|`$/,\n\t\t\t\talias: 'punctuation'\n\t\t\t},\n\t\t\trest: Prism.languages.javascript\n\t\t}\n\t},\n\n\t// Block strings\n\t'multiline-string': [\n\t\t{\n\t\t\tpattern: /'''[\\s\\S]*?'''/,\n\t\t\tgreedy: true,\n\t\t\talias: 'string'\n\t\t},\n\t\t{\n\t\t\tpattern: /\"\"\"[\\s\\S]*?\"\"\"/,\n\t\t\tgreedy: true,\n\t\t\talias: 'string',\n\t\t\tinside: {\n\t\t\t\tinterpolation: interpolation\n\t\t\t}\n\t\t}\n\t]\n\n});\n\nPrism.languages.insertBefore('coffeescript', 'keyword', {\n\t// Object property\n\t'property': /(?!\\d)\\w+(?=\\s*:(?!:))/\n});\n\ndelete Prism.languages.coffeescript['template-string'];\n\nPrism.languages.coffee = Prism.languages.coffeescript;\n}(Prism));\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-coffeescript.js?");

/***/ })

};;