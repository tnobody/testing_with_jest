exports.ids = [63];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-css-extras.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-css-extras.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.css.selector = {\n\tpattern: Prism.languages.css.selector,\n\tinside: {\n\t\t'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\\w]+/,\n\t\t'pseudo-class': /:[-\\w]+/,\n\t\t'class': /\\.[-:.\\w]+/,\n\t\t'id': /#[-:.\\w]+/,\n\t\t'attribute': {\n\t\t\tpattern: /\\[(?:[^[\\]\"']|(\"|')(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1)*\\]/,\n\t\t\tgreedy: true,\n\t\t\tinside: {\n\t\t\t\t'punctuation': /^\\[|\\]$/,\n\t\t\t\t'case-sensitivity': {\n\t\t\t\t\tpattern: /(\\s)[si]$/i,\n\t\t\t\t\tlookbehind: true,\n\t\t\t\t\talias: 'keyword'\n\t\t\t\t},\n\t\t\t\t'namespace': {\n\t\t\t\t\tpattern: /^(\\s*)[-*\\w\\xA0-\\uFFFF]*\\|(?!=)/,\n\t\t\t\t\tlookbehind: true,\n\t\t\t\t\tinside: {\n\t\t\t\t\t\t'punctuation': /\\|$/\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'attribute': {\n\t\t\t\t\tpattern: /^(\\s*)[-\\w\\xA0-\\uFFFF]+/,\n\t\t\t\t\tlookbehind: true\n\t\t\t\t},\n\t\t\t\t'value': [\n\t\t\t\t\t/(\"|')(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n\t\t\t\t\t{\n\t\t\t\t\t\tpattern: /(=\\s*)[-\\w\\xA0-\\uFFFF]+(?=\\s*$)/,\n\t\t\t\t\t\tlookbehind: true\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t'operator': /[|~*^$]?=/\n\t\t\t}\n\t\t},\n\t\t'n-th': {\n\t\t\tpattern: /(\\(\\s*)[+-]?\\d*[\\dn](?:\\s*[+-]\\s*\\d+)?(?=\\s*\\))/,\n\t\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\t'number': /[\\dn]+/,\n\t\t\t\t'operator': /[+-]/\n\t\t\t}\n\t\t},\n\t\t'punctuation': /[()]/\n\t}\n};\n\nPrism.languages.insertBefore('css', 'property', {\n\t'variable': {\n\t\tpattern: /(^|[^-\\w\\xA0-\\uFFFF])--[-_a-z\\xA0-\\uFFFF][-\\w\\xA0-\\uFFFF]*/i,\n\t\tlookbehind: true\n\t}\n});\n\nPrism.languages.insertBefore('css', 'function', {\n\t'operator': {\n\t\tpattern: /(\\s)[+\\-*\\/](?=\\s)/,\n\t\tlookbehind: true\n\t},\n\t'hexcode': /#[\\da-f]{3,8}/i,\n\t'entity': /\\\\[\\da-f]{1,8}/i,\n\t'unit': {\n\t\tpattern: /(\\d)(?:%|[a-z]+)/,\n\t\tlookbehind: true\n\t},\n\t'number': /-?[\\d.]+/\n});\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-css-extras.js?");

/***/ })

};;