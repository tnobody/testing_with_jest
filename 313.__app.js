exports.ids = [313];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-tcl.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-tcl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.tcl = {\n\t'comment': {\n\t\tpattern: /(^|[^\\\\])#.*/,\n\t\tlookbehind: true\n\t},\n\t'string': {\n\t\tpattern: /\"(?:[^\"\\\\\\r\\n]|\\\\(?:\\r\\n|[\\s\\S]))*\"/,\n\t\tgreedy: true\n\t},\n\t'variable': [\n\t\t{\n\t\t\tpattern: /(\\$)(?:::)?(?:[a-zA-Z0-9]+::)*\\w+/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t{\n\t\t\tpattern: /(\\$){[^}]+}/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t{\n\t\t\tpattern: /(^\\s*set[ \\t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\\w+/m,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'function': {\n\t\tpattern: /(^\\s*proc[ \\t]+)[^\\s]+/m,\n\t\tlookbehind: true\n\t},\n\t'builtin': [\n\t\t{\n\t\t\tpattern: /(^\\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\\b/m,\n\t\t\tlookbehind: true\n\t\t},\n\t\t/\\b(?:elseif|else)\\b/\n\t],\n\t'scope': {\n\t\tpattern: /(^\\s*)(?:global|upvar|variable)\\b/m,\n\t\tlookbehind: true,\n\t\talias: 'constant'\n\t},\n\t'keyword': {\n\t\tpattern: /(^\\s*|\\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\\b/m,\n\t\tlookbehind: true\n\t},\n\t'operator': /!=?|\\*\\*?|==|&&?|\\|\\|?|<[=<]?|>[=>]?|[-+~\\/%?^]|\\b(?:eq|ne|in|ni)\\b/,\n\t'punctuation': /[{}()\\[\\]]/\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-tcl.js?");

/***/ })

};;