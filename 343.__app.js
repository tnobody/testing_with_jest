exports.ids = [343];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-wiki.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-wiki.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.wiki = Prism.languages.extend('markup', {\n\t'block-comment': {\n\t\tpattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?\\*\\//,\n\t\tlookbehind: true,\n\t\talias: 'comment'\n\t},\n\t'heading': {\n\t\tpattern: /^(=+).+?\\1/m,\n\t\tinside: {\n\t\t\t'punctuation': /^=+|=+$/,\n\t\t\t'important': /.+/\n\t\t}\n\t},\n\t'emphasis': {\n\t\t// TODO Multi-line\n\t\tpattern: /('{2,5}).+?\\1/,\n\t\tinside: {\n\t\t\t'bold italic': {\n\t\t\t\tpattern: /(''''').+?(?=\\1)/,\n\t\t\t\tlookbehind: true\n\t\t\t},\n\t\t\t'bold': {\n\t\t\t\tpattern: /(''')[^'](?:.*?[^'])?(?=\\1)/,\n\t\t\t\tlookbehind: true\n\t\t\t},\n\t\t\t'italic': {\n\t\t\t\tpattern: /('')[^'](?:.*?[^'])?(?=\\1)/,\n\t\t\t\tlookbehind: true\n\t\t\t},\n\t\t\t'punctuation': /^''+|''+$/\n\t\t}\n\t},\n\t'hr': {\n\t\tpattern: /^-{4,}/m,\n\t\talias: 'punctuation'\n\t},\n\t'url': [\n\t\t/ISBN +(?:97[89][ -]?)?(?:\\d[ -]?){9}[\\dx]\\b|(?:RFC|PMID) +\\d+/i,\n\t\t/\\[\\[.+?\\]\\]|\\[.+?\\]/\n\t],\n\t'variable': [\n\t\t/__[A-Z]+__/,\n\t\t// FIXME Nested structures should be handled\n\t\t// {{formatnum:{{#expr:{{{3}}}}}}}\n\t\t/\\{{3}.+?\\}{3}/,\n\t\t/\\{\\{.+?\\}\\}/\n\t],\n\t'symbol': [\n\t\t/^#redirect/im,\n\t\t/~{3,5}/\n\t],\n\t// Handle table attrs:\n\t// {|\n\t// ! style=\"text-align:left;\"| Item\n\t// |}\n\t'table-tag': {\n\t\tpattern: /((?:^|[|!])[|!])[^|\\r\\n]+\\|(?!\\|)/m,\n\t\tlookbehind: true,\n\t\tinside: {\n\t\t\t'table-bar': {\n\t\t\t\tpattern: /\\|$/,\n\t\t\t\talias: 'punctuation'\n\t\t\t},\n\t\t\trest: Prism.languages.markup['tag'].inside\n\t\t}\n\t},\n\t'punctuation': /^(?:\\{\\||\\|\\}|\\|-|[*#:;!|])|\\|\\||!!/m\n});\n\nPrism.languages.insertBefore('wiki', 'tag', {\n\t// Prevent highlighting inside <nowiki>, <source> and <pre> tags\n\t'nowiki': {\n\t\tpattern: /<(nowiki|pre|source)\\b[\\s\\S]*?>[\\s\\S]*?<\\/\\1>/i,\n\t\tinside: {\n\t\t\t'tag': {\n\t\t\t\tpattern: /<(?:nowiki|pre|source)\\b[\\s\\S]*?>|<\\/(?:nowiki|pre|source)>/i,\n\t\t\t\tinside: Prism.languages.markup['tag'].inside\n\t\t\t}\n\t\t}\n\t}\n});\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-wiki.js?");

/***/ })

};;