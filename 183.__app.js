exports.ids = [183];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-lolcode.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-lolcode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.lolcode = {\n\t'comment': [\n\t\t/\\bOBTW\\s+[\\s\\S]*?\\s+TLDR\\b/,\n\t\t/\\bBTW.+/\n\t],\n\t'string': {\n\t\tpattern: /\"(?::.|[^\"])*\"/,\n\t\tinside: {\n\t\t\t'variable': /:\\{[^}]+\\}/,\n\t\t\t'symbol': [\n\t\t\t\t/:\\([a-f\\d]+\\)/i,\n\t\t\t\t/:\\[[^\\]]+\\]/,\n\t\t\t\t/:[)>o\":]/\n\t\t\t]\n\t\t},\n\t\tgreedy: true\n\t},\n\t'number': /(?:\\B-)?(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)/,\n\t'symbol': {\n\t\tpattern: /(^|\\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\\s|,|$)/,\n\t\tlookbehind: true,\n\t\tinside: {\n\t\t\t'keyword': /A(?=\\s)/\n\t\t}\n\t},\n\t'label': {\n\t\tpattern: /((?:^|\\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\\w*/,\n\t\tlookbehind: true,\n\t\talias: 'string'\n\t},\n\t'function': {\n\t\tpattern: /((?:^|\\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\\w*/,\n\t\tlookbehind: true\n\t},\n\t'keyword': [\n\t\t{\n\t\t\tpattern: /(^|\\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\\?|YA RLY|NO WAI|OIC|MEBBE|WTF\\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\\s|,|$)/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t/'Z(?=\\s|,|$)/\n\t],\n\t'boolean': {\n\t\tpattern: /(^|\\s)(?:WIN|FAIL)(?=\\s|,|$)/,\n\t\tlookbehind: true\n\t},\n\t'variable': {\n\t\tpattern: /(^|\\s)IT(?=\\s|,|$)/,\n\t\tlookbehind: true\n\t},\n\t'operator': {\n\t\tpattern: /(^|\\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\\s|,|$)/,\n\t\tlookbehind: true\n\t},\n\t'punctuation': /\\.{3}|…|,|!/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-lolcode.js?");

/***/ })

};;