exports.ids = [205];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-n4js.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-n4js.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.n4js = Prism.languages.extend('javascript', {\n\t// Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html\n\t'keyword': /\\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\\b/\n});\n\nPrism.languages.insertBefore('n4js', 'constant', {\n\t// Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations\n\t'annotation': {\n\t\tpattern: /@+\\w+/,\n\t\talias: 'operator'\n\t}\n});\n\nPrism.languages.n4jsd=Prism.languages.n4js;\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-n4js.js?");

/***/ })

};;