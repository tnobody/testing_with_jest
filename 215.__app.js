exports.ids = [215];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-nix.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-nix.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.nix = {\n\t'comment': /\\/\\*[\\s\\S]*?\\*\\/|#.*/,\n\t'string': {\n\t\tpattern: /\"(?:[^\"\\\\]|\\\\[\\s\\S])*\"|''(?:(?!'')[\\s\\S]|''(?:'|\\\\|\\$\\{))*''/,\n\t\tgreedy: true,\n\t\tinside: {\n\t\t\t'interpolation': {\n\t\t\t\t// The lookbehind ensures the ${} is not preceded by \\ or ''\n\t\t\t\tpattern: /(^|(?:^|(?!'').)[^\\\\])\\$\\{(?:[^}]|\\{[^}]*\\})*}/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: {\n\t\t\t\t\t'antiquotation': {\n\t\t\t\t\t\tpattern: /^\\$(?=\\{)/,\n\t\t\t\t\t\talias: 'variable'\n\t\t\t\t\t}\n\t\t\t\t\t// See rest below\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\t'url': [\n\t\t/\\b(?:[a-z]{3,7}:\\/\\/)[\\w\\-+%~\\/.:#=?&]+/,\n\t\t{\n\t\t\tpattern: /([^\\/])(?:[\\w\\-+%~.:#=?&]*(?!\\/\\/)[\\w\\-+%~\\/.:#=?&])?(?!\\/\\/)\\/[\\w\\-+%~\\/.:#=?&]*/,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'antiquotation': {\n\t\tpattern: /\\$(?=\\{)/,\n\t\talias: 'variable'\n\t},\n\t'number': /\\b\\d+\\b/,\n\t'keyword': /\\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\\b/,\n\t'function': /\\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\\b|\\bfoldl'\\B/,\n\t'boolean': /\\b(?:true|false)\\b/,\n\t'operator': /[=!<>]=?|\\+\\+?|\\|\\||&&|\\/\\/|->?|[?@]/,\n\t'punctuation': /[{}()[\\].,:;]/\n};\n\nPrism.languages.nix.string.inside.interpolation.inside.rest = Prism.languages.nix;\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-nix.js?");

/***/ })

};;