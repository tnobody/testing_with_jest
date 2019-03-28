exports.ids = [245];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-processing.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-processing.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.processing = Prism.languages.extend('clike', {\n\t'keyword': /\\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\\b/,\n\t'operator': /<[<=]?|>[>=]?|&&?|\\|\\|?|[%?]|[!=+\\-*\\/]=?/\n});\nPrism.languages.insertBefore('processing', 'number', {\n\t// Special case: XML is a type\n\t'constant': /\\b(?!XML\\b)[A-Z][A-Z\\d_]+\\b/,\n\t'type': {\n\t\tpattern: /\\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\\w*)\\b/,\n\t\talias: 'variable'\n\t}\n});\n\n// Spaces are allowed between function name and parenthesis\nPrism.languages.processing['function'].pattern = /\\w+(?=\\s*\\()/;\n\n// Class-names is not styled by default\nPrism.languages.processing['class-name'].alias = 'variable';\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-processing.js?");

/***/ })

};;