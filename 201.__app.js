exports.ids = [201];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-monkey.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-monkey.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.monkey = {\n\t'string': /\"[^\"\\r\\n]*\"/,\n\t'comment': [\n\t\t{\n\t\t\tpattern: /^#Rem\\s+[\\s\\S]*?^#End/im,\n\t\t\tgreedy: true\n\t\t},\n\t\t{\n\t\t\tpattern: /'.+/,\n\t\t\tgreedy: true\n\t\t}\n\t],\n\t'preprocessor': {\n\t\tpattern: /(^[ \\t]*)#.+/m,\n\t\tlookbehind: true,\n\t\talias: 'comment'\n\t},\n\t'function': /\\w+(?=\\()/,\n\t'type-char': {\n\t\tpattern: /(\\w)[?%#$]/,\n\t\tlookbehind: true,\n\t\talias: 'variable'\n\t},\n\t'number': {\n\t\tpattern: /((?:\\.\\.)?)(?:(?:\\b|\\B-\\.?|\\B\\.)\\d+(?:(?!\\.\\.)\\.\\d*)?|\\$[\\da-f]+)/i,\n\t\tlookbehind: true\n\t},\n\t'keyword': /\\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\\b/i,\n\t'operator': /\\.\\.|<[=>]?|>=?|:?=|(?:[+\\-*\\/&~|]|\\b(?:Mod|Shl|Shr)\\b)=?|\\b(?:And|Not|Or)\\b/i,\n\t'punctuation': /[.,:;()\\[\\]]/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-monkey.js?");

/***/ })

};;