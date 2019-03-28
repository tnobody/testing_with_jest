exports.ids = [221];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-ocaml.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ocaml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.ocaml = {\n\t'comment': /\\(\\*[\\s\\S]*?\\*\\)/,\n\t'string': [\n\t\t{\n\t\t\tpattern: /\"(?:\\\\.|[^\\\\\\r\\n\"])*\"/,\n\t\t\tgreedy: true\n\t\t},\n\t\t{\n\t\t\tpattern: /(['`])(?:\\\\(?:\\d+|x[\\da-f]+|.)|(?!\\1)[^\\\\\\r\\n])\\1/i,\n\t\t\tgreedy: true\n\t\t}\n\t],\n\t'number': /\\b(?:0x[\\da-f][\\da-f_]+|(?:0[bo])?\\d[\\d_]*\\.?[\\d_]*(?:e[+-]?[\\d_]+)?)/i,\n\t'type': {\n\t\tpattern: /\\B['`]\\w*/,\n\t\talias: 'variable'\n\t},\n\t'directive': {\n\t\tpattern: /\\B#\\w+/,\n\t\talias: 'function'\n\t},\n\t'keyword': /\\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\\b/,\n\t'boolean': /\\b(?:false|true)\\b/,\n\t// Custom operators are allowed\n\t'operator': /:=|[=<>@^|&+\\-*\\/$%!?~][!$%&*+\\-.\\/:<=>?@^|~]*|\\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\\b/,\n\t'punctuation': /[(){}\\[\\]|_.,:;]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-ocaml.js?");

/***/ })

};;