exports.ids = [153];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-jolie.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jolie.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.jolie = Prism.languages.extend('clike', {\n\t'keyword': /\\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\\b/,\n\t'builtin': /\\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\\b/,\n\t'number': /(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?l?/i,\n\t'operator': /-[-=>]?|\\+[+=]?|<[<=]?|[>=*!]=?|&&|\\|\\||[:?\\/%^]/,\n\t'symbol': /[|;@]/,\n\t'punctuation': /[,.]/,\n\t'string': {\n\t\tpattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n\t\tgreedy: true\n\t}\n});\n\ndelete Prism.languages.jolie['class-name'];\n\nPrism.languages.insertBefore( 'jolie', 'keyword', {\n\t'function':\n\t{\n\t\tpattern: /((?:\\b(?:outputPort|inputPort|in|service|courier)\\b|@)\\s*)\\w+/,\n\t\tlookbehind: true\n\t},\n\t'aggregates': {\n\t\tpattern: /(\\bAggregates\\s*:\\s*)(?:\\w+(?:\\s+with\\s+\\w+)?\\s*,\\s*)*\\w+(?:\\s+with\\s+\\w+)?/,\n\t\tlookbehind: true,\n\t\tinside: {\n\t\t\t'withExtension': {\n\t\t\t\tpattern: /\\bwith\\s+\\w+/,\n\t\t\t\tinside: {\n\t\t\t\t\t'keyword' : /\\bwith\\b/\n\t\t\t\t}\n\t\t\t},\n\t\t\t'function': {\n\t\t\t\tpattern: /\\w+/\n\t\t\t},\n\t\t\t'punctuation': {\n\t\t\t\tpattern: /,/\n\t\t\t}\n\t\t}\n\t},\n\t'redirects': {\n\t\tpattern: /(\\bRedirects\\s*:\\s*)(?:\\w+\\s*=>\\s*\\w+\\s*,\\s*)*(?:\\w+\\s*=>\\s*\\w+)/,\n\t\tlookbehind: true,\n\t\tinside: {\n\t\t\t'punctuation': {\n\t\t\t\tpattern: /,/\n\t\t\t},\n\t\t\t'function': {\n\t\t\t\tpattern: /\\w+/\n\t\t\t},\n\t\t\t'symbol': {\n\t\t\t\tpattern: /=>/\n\t\t\t}\n\t\t}\n\t}\n});\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-jolie.js?");

/***/ })

};;