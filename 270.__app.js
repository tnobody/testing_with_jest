exports.ids = [270];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-regex.min.js":
/*!************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-regex.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function(n){var e={pattern:/\\\\[\\\\(){}[\\]^$+*?|.]/,alias:\"escape\"},a=/\\\\(?:x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|u\\{[\\da-fA-F]+\\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,r=/\\\\[wsd]|\\.|\\\\p{[^{}]+}/i,i=\"(?:[^\\\\\\\\-]|\"+a.source+\")\",s=RegExp(i+\"-\"+i),t={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:\"variable\"},c=[/\\\\(?![123][0-7]{2})[1-9]/,{pattern:/\\\\k<[^<>']+>/,inside:{\"group-name\":t}}];n.languages.regex={charset:{pattern:/((?:^|[^\\\\])(?:\\\\\\\\)*)\\[(?:[^\\\\\\]]|\\\\[\\s\\S])*\\]/,lookbehind:!0,inside:{\"charset-negation\":{pattern:/(^\\[)\\^/,lookbehind:!0},\"charset-punctuation\":/^\\[|\\]$/,range:{pattern:s,inside:{escape:a,\"range-punctuation\":/-/}},\"special-escape\":e,charclass:r,backreference:c,escape:a}},\"special-escape\":e,charclass:r,backreference:c,anchor:/[$^]|\\\\[ABbGZz]/,escape:a,group:[{pattern:/\\((?:\\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,inside:{\"group-name\":t}},/\\)/],quantifier:/[+*?]|\\{(?:\\d+,?\\d*)\\}/,alternation:/\\|/},[\"actionscript\",\"coffescript\",\"flow\",\"javascript\",\"typescript\",\"vala\"].forEach(function(e){var a=n.languages[e];a&&(a.regex.inside={\"regex-flags\":/[a-z]+$/,\"regex-delimiter\":/^\\/|\\/$/,\"language-regex\":{pattern:/[\\s\\S]+/,inside:n.languages.regex}})})}(Prism);\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-regex.min.js?");

/***/ })

};;