exports.ids = [227];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-parigp.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-parigp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.parigp = {\n\t'comment': /\\/\\*[\\s\\S]*?\\*\\/|\\\\\\\\.*/,\n\t'string': {\n\t\tpattern: /\"(?:[^\"\\\\\\r\\n]|\\\\.)*\"/,\n\t\tgreedy: true\n\t},\n\t// PARI/GP does not care about white spaces at all\n\t// so let's process the keywords to build an appropriate regexp\n\t// (e.g. \"b *r *e *a *k\", etc.)\n\t'keyword': (function () {\n\t\tvar keywords = [\n\t\t\t'breakpoint', 'break', 'dbg_down', 'dbg_err', 'dbg_up', 'dbg_x',\n\t\t\t'forcomposite', 'fordiv', 'forell', 'forpart', 'forprime',\n\t\t\t'forstep', 'forsubgroup', 'forvec', 'for', 'iferr', 'if',\n\t\t\t'local', 'my', 'next', 'return', 'until', 'while'\n\t\t];\n\t\tkeywords = keywords.map(function (keyword) {\n\t\t\treturn keyword.split('').join(' *');\n\t\t}).join('|');\n\t\treturn RegExp('\\\\b(?:' + keywords + ')\\\\b');\n\t}()),\n\t'function': /\\w[\\w ]*?(?= *\\()/,\n\t'number': {\n\t\t// The lookbehind and the negative lookahead prevent from breaking the .. operator\n\t\tpattern: /((?:\\. *\\. *)?)(?:\\d(?: *\\d)*(?: *(?!\\. *\\.)\\.(?: *\\d)*)?|\\. *\\d(?: *\\d)*)(?: *e *[+-]? *\\d(?: *\\d)*)?/i,\n\t\tlookbehind: true\n\t},\n\t'operator': /\\. *\\.|[*\\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\\\(?: *\\/)?(?: *=)?|&(?: *&)?|\\| *\\||['#~^]/,\n\t'punctuation': /[\\[\\]{}().,:;|]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-parigp.js?");

/***/ })

};;