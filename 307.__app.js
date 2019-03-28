exports.ids = [307];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-t4-templating.js":
/*!****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-t4-templating.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tfunction createBlock(prefix, inside, contentAlias) {\n\t\treturn {\n\t\t\tpattern: RegExp('<#' + prefix + '[\\\\s\\\\S]*?#>'),\n\t\t\talias: 'block',\n\t\t\tinside: {\n\t\t\t\t'delimiter': {\n\t\t\t\t\tpattern: RegExp('^<#' + prefix + '|#>$'),\n\t\t\t\t\talias: 'important'\n\t\t\t\t},\n\t\t\t\t'content': {\n\t\t\t\t\tpattern: /[\\s\\S]+/,\n\t\t\t\t\tinside: inside,\n\t\t\t\t\talias: contentAlias\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t}\n\n\tfunction createT4(insideLang) {\n\t\tvar grammar = Prism.languages[insideLang];\n\t\tvar className = 'language-' + insideLang;\n\n\t\treturn {\n\t\t\t'block': {\n\t\t\t\tpattern: /<#[\\s\\S]+?#>/,\n\t\t\t\tinside: {\n\t\t\t\t\t'directive': createBlock('@', {\n\t\t\t\t\t\t'attr-value': {\n\t\t\t\t\t\t\tpattern: /=(?:(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+)/,\n\t\t\t\t\t\t\tinside: {\n\t\t\t\t\t\t\t\t'punctuation': /^=|^[\"']|[\"']$/\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t'keyword': /\\w+(?=\\s)/,\n\t\t\t\t\t\t'attr-name': /\\w+/\n\t\t\t\t\t}),\n\t\t\t\t\t'expression': createBlock('=', grammar, className),\n\t\t\t\t\t'class-feature': createBlock('\\\\+', grammar, className),\n\t\t\t\t\t'standard': createBlock('', grammar, className)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t}\n\n\tPrism.languages['t4-templating'] = Object.defineProperty({}, 'createT4', { value: createT4 });\n\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-t4-templating.js?");

/***/ })

};;