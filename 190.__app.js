exports.ids = [190];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-markdown.min.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markdown.min.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.markdown=Prism.languages.extend(\"markup\",{}),Prism.languages.insertBefore(\"markdown\",\"prolog\",{blockquote:{pattern:/^>(?:[\\t ]*>)*/m,alias:\"punctuation\"},code:[{pattern:/^(?: {4}|\\t).+/m,alias:\"keyword\"},{pattern:/``.+?``|`[^`\\n]+`/,alias:\"keyword\"},{pattern:/^```[\\s\\S]*?^```$/m,greedy:!0,inside:{\"code-block\":{pattern:/^(```.*(?:\\r?\\n|\\r))[\\s\\S]+?(?=(?:\\r?\\n|\\r)^```$)/m,lookbehind:!0},\"code-language\":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\\S.*(?:\\r?\\n|\\r)(?:==+|--+)/,alias:\"important\",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\\s*)#+.+/m,lookbehind:!0,alias:\"important\",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\\s*)([*-])(?:[\\t ]*\\2){2,}(?=\\s*$)/m,lookbehind:!0,alias:\"punctuation\"},list:{pattern:/(^\\s*)(?:[*+-]|\\d+\\.)(?=[\\t ].)/m,lookbehind:!0,alias:\"punctuation\"},\"url-reference\":{pattern:/!?\\[[^\\]]+\\]:[\\t ]+(?:\\S+|<(?:\\\\.|[^>\\\\])+>)(?:[\\t ]+(?:\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*'|\\((?:\\\\.|[^)\\\\])*\\)))?/,inside:{variable:{pattern:/^(!?\\[)[^\\]]+/,lookbehind:!0},string:/(?:\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*'|\\((?:\\\\.|[^)\\\\])*\\))$/,punctuation:/^[\\[\\]!:]|[<>]/},alias:\"url\"},bold:{pattern:/(^|[^\\\\])(\\*\\*|__)(?:(?:\\r?\\n|\\r)(?!\\r?\\n|\\r)|.)+?\\2/,lookbehind:!0,greedy:!0,inside:{punctuation:/^\\*\\*|^__|\\*\\*$|__$/}},italic:{pattern:/(^|[^\\\\])([*_])(?:(?:\\r?\\n|\\r)(?!\\r?\\n|\\r)|.)+?\\2/,lookbehind:!0,greedy:!0,inside:{punctuation:/^[*_]|[*_]$/}},strike:{pattern:/(^|[^\\\\])(~~?)(?:(?:\\r?\\n|\\r)(?!\\r?\\n|\\r)|.)+?\\2/,lookbehind:!0,greedy:!0,inside:{punctuation:/^~~?|~~?$/}},url:{pattern:/!?\\[[^\\]]+\\](?:\\([^\\s)]+(?:[\\t ]+\"(?:\\\\.|[^\"\\\\])*\")?\\)| ?\\[[^\\]\\n]*\\])/,inside:{variable:{pattern:/(!?\\[)[^\\]]+(?=\\]$)/,lookbehind:!0},string:{pattern:/\"(?:\\\\.|[^\"\\\\])*\"(?=\\)$)/}}}}),[\"bold\",\"italic\",\"strike\"].forEach(function(a){[\"url\",\"bold\",\"italic\",\"strike\"].forEach(function(n){a!==n&&(Prism.languages.markdown[a].inside[n]=Prism.languages.markdown[n])})}),Prism.hooks.add(\"after-tokenize\",function(n){\"markdown\"!==n.language&&\"md\"!==n.language||!function n(a){if(a&&\"string\"!=typeof a)for(var t=0,e=a.length;t<e;t++){var r=a[t];if(\"code\"===r.type){var i=r.content[1],o=r.content[3];if(i&&o&&\"code-language\"===i.type&&\"code-block\"===o.type&&\"string\"==typeof i.content){var s=\"language-\"+i.content.trim().split(/\\s+/)[0].toLowerCase();o.alias?\"string\"==typeof o.alias?o.alias=[o.alias,s]:o.alias.push(s):o.alias=[s]}}else n(r.content)}}(n.tokens)}),Prism.hooks.add(\"wrap\",function(n){if(\"code-block\"===n.type){for(var a=\"\",t=0,e=n.classes.length;t<e;t++){var r=n.classes[t],i=/language-(.+)/.exec(r);if(i){a=i[1];break}}var o=Prism.languages[a];if(o){var s=n.content.replace(/&lt;/g,\"<\").replace(/&amp;/g,\"&\");n.content=Prism.highlight(s,o,a)}}}),Prism.languages.md=Prism.languages.markdown;\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-markdown.min.js?");

/***/ })

};;