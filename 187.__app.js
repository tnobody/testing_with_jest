exports.ids = [187];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-makefile.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-makefile.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.makefile = {\n\t'comment': {\n\t\tpattern: /(^|[^\\\\])#(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n])*/,\n\t\tlookbehind: true\n\t},\n\t'string': {\n\t\tpattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n\t\tgreedy: true\n\t},\n\n\t// Built-in target names\n\t'builtin': /\\.[A-Z][^:#=\\s]+(?=\\s*:(?!=))/,\n\n\t// Targets\n\t'symbol': {\n\t\tpattern: /^[^:=\\r\\n]+(?=\\s*:(?!=))/m,\n\t\tinside: {\n\t\t\t'variable': /\\$+(?:[^(){}:#=\\s]+|(?=[({]))/\n\t\t}\n\t},\n\t'variable': /\\$+(?:[^(){}:#=\\s]+|\\([@*%<^+?][DF]\\)|(?=[({]))/,\n\n\t'keyword': [\n\t\t// Directives\n\t\t/-include\\b|\\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\\b/,\n\t\t// Functions\n\t\t{\n\t\t\tpattern: /(\\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \\t])/,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'operator': /(?:::|[?:+!])?=|[|@]/,\n\t'punctuation': /[:;(){}]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-makefile.js?");

/***/ })

};;