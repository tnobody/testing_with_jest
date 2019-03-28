exports.ids = [141];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-j.js":
/*!****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-j.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.j = {\n\t'comment': /\\bNB\\..*/,\n\t'string': {\n\t\tpattern: /'(?:''|[^'\\r\\n])*'/,\n\t\tgreedy: true\n\t},\n\t'keyword': /\\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\\w+|goto_\\w+|if|label_\\w+|return|select|throw|try|while|whilst)\\.)/,\n\t'verb': {\n\t\t// Negative look-ahead prevents bad highlighting\n\t\t// of ^: ;. =. =: !. !:\n\t\tpattern: /(?!\\^:|;\\.|[=!][.:])(?:\\{(?:\\.|::?)?|p(?:\\.\\.?|:)|[=!\\]]|[<>+*\\-%$|,#][.:]?|[?^]\\.?|[;\\[]:?|[~}\"i][.:]|[ACeEIjLor]\\.|(?:[_\\/\\\\qsux]|_?\\d):)/,\n\t\talias: 'keyword'\n\t},\n\t'number': /\\b_?(?:(?!\\d:)\\d+(?:\\.\\d+)?(?:(?:[ejpx]|ad|ar)_?\\d+(?:\\.\\d+)?)*(?:b_?[\\da-z]+(?:\\.[\\da-z]+)?)?|_(?!\\.))/,\n\t'adverb': {\n\t\tpattern: /[~}]|[\\/\\\\]\\.?|[bfM]\\.|t[.:]/,\n\t\talias: 'builtin'\n\t},\n\t'operator': /[=a][.:]|_\\./,\n\t'conjunction': {\n\t\tpattern: /&(?:\\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\\.|`:?|[\\^LS]:|\"/,\n\t\talias: 'variable'\n\t},\n\t'punctuation': /[()]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-j.js?");

/***/ })

};;