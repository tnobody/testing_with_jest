exports.ids = [57];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-crystal.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-crystal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(Prism) {\n\tPrism.languages.crystal = Prism.languages.extend('ruby', {\n\t\tkeyword: [\n\t\t\t/\\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\\b/,\n\t\t\t{\n\t\t\t\tpattern: /(\\.\\s*)(?:is_a|responds_to)\\?/,\n\t\t\t\tlookbehind: true\n\t\t\t}\n\t\t],\n\n\t\tnumber: /\\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\\da-fA-F_]*[\\da-fA-F]|(?:\\d(?:[\\d_]*\\d)?)(?:\\.[\\d_]*\\d)?(?:[eE][+-]?[\\d_]*\\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\\b/\n\t});\n\n\tPrism.languages.insertBefore('crystal', 'string', {\n\t\tattribute: {\n\t\t\tpattern: /@\\[.+?\\]/,\n\t\t\talias: 'attr-name',\n\t\t\tinside: {\n\t\t\t\tdelimiter: {\n\t\t\t\t\tpattern: /^@\\[|\\]$/,\n\t\t\t\t\talias: 'tag'\n\t\t\t\t},\n\t\t\t\trest: Prism.languages.crystal\n\t\t\t}\n\t\t},\n\n\t\texpansion: [\n\t\t{\n\t\t\tpattern: /\\{\\{.+?\\}\\}/,\n\t\t\tinside: {\n\t\t\t\tdelimiter: {\n\t\t\t\t\tpattern: /^\\{\\{|\\}\\}$/,\n\t\t\t\t\talias: 'tag'\n\t\t\t\t},\n\t\t\t\trest: Prism.languages.crystal\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\tpattern: /\\{%.+?%\\}/,\n\t\t\tinside: {\n\t\t\t\tdelimiter: {\n\t\t\t\t\tpattern: /^\\{%|%\\}$/,\n\t\t\t\t\talias: 'tag'\n\t\t\t\t},\n\t\t\t\trest: Prism.languages.crystal\n\t\t\t}\n\t\t}\n\t\t]\n\t});\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-crystal.js?");

/***/ })

};;