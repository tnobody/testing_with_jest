exports.ids = [40];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-bro.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bro.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.bro = {\n\n\t'comment': {\n\t\tpattern: /(^|[^\\\\$])#.*/,\n\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\t'italic':  /\\b(?:TODO|FIXME|XXX)\\b/\n\t\t}\n\t},\n\n\t'string': {\n\t\tpattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n\t\tgreedy: true\n\t},\n\n\t'boolean': /\\b[TF]\\b/,\n\n\t'function': {\n\t\tpattern: /(?:function|hook|event) \\w+(?:::\\w+)?/,\n\t\tinside: {\n\t\t\tkeyword: /^(?:function|hook|event)/\n\t\t}\n\t},\n\n\t'variable':\t{\n\t\tpattern: /(?:global|local) \\w+/i,\n\t\tinside: {\n\t\t\tkeyword: /(?:global|local)/\n\t\t}\n\t},\n\n\t'builtin': /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,\n\n\t'constant': {\n\t\tpattern: /const \\w+/i,\n\t\tinside: {\n\t\t\tkeyword: /const/\n\t\t}\n\t},\n\n\t'keyword': /\\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\\b/,\n\n\t'operator': /--?|\\+\\+?|!=?=?|<=?|>=?|==?=?|&&|\\|\\|?|\\?|\\*|\\/|~|\\^|%/,\n\n\t'number': /\\b0x[\\da-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n\n\t'punctuation': /[{}[\\];(),.:]/\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-bro.js?");

/***/ })

};;