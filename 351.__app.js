exports.ids = [351];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-yaml.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-yaml.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.yaml = {\n\t'scalar': {\n\t\tpattern: /([\\-:]\\s*(?:![^\\s]+)?[ \\t]*[|>])[ \\t]*(?:((?:\\r?\\n|\\r)[ \\t]+)[^\\r\\n]+(?:\\2[^\\r\\n]+)*)/,\n\t\tlookbehind: true,\n\t\talias: 'string'\n\t},\n\t'comment': /#.*/,\n\t'key': {\n\t\tpattern: /(\\s*(?:^|[:\\-,[{\\r\\n?])[ \\t]*(?:![^\\s]+)?[ \\t]*)[^\\r\\n{[\\]},#\\s]+?(?=\\s*:\\s)/,\n\t\tlookbehind: true,\n\t\talias: 'atrule'\n\t},\n\t'directive': {\n\t\tpattern: /(^[ \\t]*)%.+/m,\n\t\tlookbehind: true,\n\t\talias: 'important'\n\t},\n\t'datetime': {\n\t\tpattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)(?:\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \\t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?[ \\t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?)?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?)(?=[ \\t]*(?:$|,|]|}))/m,\n\t\tlookbehind: true,\n\t\talias: 'number'\n\t},\n\t'boolean': {\n\t\tpattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)(?:true|false)[ \\t]*(?=$|,|]|})/im,\n\t\tlookbehind: true,\n\t\talias: 'important'\n\t},\n\t'null': {\n\t\tpattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)(?:null|~)[ \\t]*(?=$|,|]|})/im,\n\t\tlookbehind: true,\n\t\talias: 'important'\n\t},\n\t'string': {\n\t\tpattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)(\"|')(?:(?!\\2)[^\\\\\\r\\n]|\\\\.)*\\2(?=[ \\t]*(?:$|,|]|}|\\s*#))/m,\n\t\tlookbehind: true,\n\t\tgreedy: true\n\t},\n\t'number': {\n\t\tpattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+\\.?\\d*|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)[ \\t]*(?=$|,|]|})/im,\n\t\tlookbehind: true\n\t},\n\t'tag': /![^\\s]+/,\n\t'important': /[&*][\\w]+/,\n\t'punctuation': /---|[:[\\]{}\\-,|>?]|\\.\\.\\./\n};\n\nPrism.languages.yml = Prism.languages.yaml;\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-yaml.js?");

/***/ })

};;