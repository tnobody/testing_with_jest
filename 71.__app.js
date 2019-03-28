exports.ids = [71];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-diff.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-diff.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.diff = {\n\t'coord': [\n\t\t// Match all kinds of coord lines (prefixed by \"+++\", \"---\" or \"***\").\n\t\t/^(?:\\*{3}|-{3}|\\+{3}).*$/m,\n\t\t// Match \"@@ ... @@\" coord lines in unified diff.\n\t\t/^@@.*@@$/m,\n\t\t// Match coord lines in normal diff (starts with a number).\n\t\t/^\\d+.*$/m\n\t],\n\n\t// Match inserted and deleted lines. Support both +/- and >/< styles.\n\t'deleted': /^[-<].*$/m,\n\t'inserted': /^[+>].*$/m,\n\n\t// Match \"different\" lines (prefixed with \"!\") in context diff.\n\t'diff': {\n\t\t'pattern': /^!(?!!).+$/m,\n\t\t'alias': 'important'\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-diff.js?");

/***/ })

};;