exports.ids = [145];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-javadoc.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javadoc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tvar codeLines = {\n\t\t'code': {\n\t\t\tpattern: /(^(\\s*(?:\\*\\s*)*)).*[^*\\s].+$/m,\n\t\t\tlookbehind: true,\n\t\t\tinside: Prism.languages.java,\n\t\t\talias: 'language-java'\n\t\t}\n\t};\n\n\tPrism.languages.javadoc = Prism.languages.extend('javadoclike', {});\n\tPrism.languages.insertBefore('javadoc', 'keyword', {\n\t\t'class-name': [\n\t\t\t{\n\t\t\t\tpattern: /(@(?:exception|throws|see|link|linkplain|value)\\s+(?:[a-z\\d]+\\.)*)[A-Z](?:\\w*[a-z]\\w*)?(?:\\.[A-Z](?:\\w*[a-z]\\w*)?)*/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: {\n\t\t\t\t\t'punctuation': /\\./\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\t// @param <T> the first generic type parameter\n\t\t\t\tpattern: /(@param\\s+)<[A-Z]\\w*>/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: {\n\t\t\t\t\t'punctuation': /[.<>]/\n\t\t\t\t}\n\t\t\t}\n\t\t],\n\t\t'namespace': {\n\t\t\tpattern: /(@(?:exception|throws|see|link|linkplain)\\s+)(?:[a-z\\d]+\\.)+/,\n\t\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\t'punctuation': /\\./\n\t\t\t}\n\t\t},\n\t\t'code-section': [\n\t\t\t{\n\t\t\t\tpattern: /(\\{@code\\s+)(?:[^{}]|\\{[^{}]*\\})+?(?=\\s*\\})/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: codeLines\n\t\t\t},\n\t\t\t{\n\t\t\t\tpattern: /(<(code|tt)>\\s*)[\\s\\S]+?(?=\\s*<\\/\\2>)/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: codeLines\n\t\t\t}\n\t\t],\n\t\t'tag': Prism.languages.markup.tag,\n\t});\n\n\tPrism.languages.javadoclike.addSupport('java', Prism.languages.javadoc);\n}(Prism));\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-javadoc.js?");

/***/ })

};;