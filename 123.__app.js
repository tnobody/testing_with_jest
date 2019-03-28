exports.ids = [123];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-hcl.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-hcl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.hcl = {\n\t'comment': /(?:\\/\\/|#).*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n\t'heredoc': {\n\t\tpattern: /<<-?(\\w+)[\\s\\S]*?^\\s*\\1/m,\n\t\tgreedy: true,\n\t\talias: 'string'\n\t},\n\t'keyword': [\n\t\t{\n\t\t\tpattern: /(?:resource|data)\\s+(?:\"(?:\\\\[\\s\\S]|[^\\\\\"])*\")(?=\\s+\"[\\w-]+\"\\s+{)/i,\n\t\t\tinside: {\n\t\t\t\t'type': {\n\t\t\t\t\tpattern: /(resource|data|\\s+)(?:\"(?:\\\\[\\s\\S]|[^\\\\\"])*\")/i,\n\t\t\t\t\tlookbehind: true,\n\t\t\t\t\talias: 'variable'\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\tpattern: /(?:provider|provisioner|variable|output|module|backend)\\s+(?:[\\w-]+|\"(?:\\\\[\\s\\S]|[^\\\\\"])*\")\\s+(?={)/i,\n\t\t\tinside: {\n\t\t\t\t'type': {\n\t\t\t\t\tpattern: /(provider|provisioner|variable|output|module|backend)\\s+(?:[\\w-]+|\"(?:\\\\[\\s\\S]|[^\\\\\"])*\")\\s+/i,\n\t\t\t\t\tlookbehind: true,\n\t\t\t\t\talias: 'variable'\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\tpattern: /[\\w-]+(?=\\s+{)/\n\t\t}\n\t],\n\t'property': [\n\t\t/[\\w-\\.]+(?=\\s*=(?!=))/,\n\t\t/\"(?:\\\\[\\s\\S]|[^\\\\\"])+\"(?=\\s*[:=])/,\n\t],\n\t'string': {\n\t\tpattern: /\"(?:[^\\\\$\"]|\\\\[\\s\\S]|\\$(?:(?=\")|\\$+|[^\"${])|\\$\\{(?:[^{}\"]|\"(?:[^\\\\\"]|\\\\[\\s\\S])*\")*\\})*\"/,\n\t\tgreedy: true,\n\t\tinside: {\n\t\t\t'interpolation': {\n\t\t\t\tpattern: /(^|[^$])\\$\\{(?:[^{}\"]|\"(?:[^\\\\\"]|\\\\[\\s\\S])*\")*\\}/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: {\n\t\t\t\t\t'type': {\n\t\t\t\t\t\tpattern: /(\\b(?:terraform|var|self|count|module|path|data|local)\\b\\.)[\\w\\*]+/i,\n\t\t\t\t\t\tlookbehind: true,\n\t\t\t\t\t\talias: 'variable'\n\t\t\t\t\t},\n\t\t\t\t\t'keyword': /\\b(?:terraform|var|self|count|module|path|data|local)\\b/i,\n\t\t\t\t\t'function': /\\w+(?=\\()/,\n\t\t\t\t\t'string': {\n\t\t\t\t\t\tpattern: /\"(?:\\\\[\\s\\S]|[^\\\\\"])*\"/,\n\t\t\t\t\t\tgreedy: true,\n\t\t\t\t\t},\n\t\t\t\t\t'number': /\\b0x[\\da-f]+|\\d+\\.?\\d*(?:e[+-]?\\d+)?/i,\n\t\t\t\t\t'punctuation': /[!\\$#%&'()*+,.\\/;<=>@\\[\\\\\\]^`{|}~?:]/,\n\t\t\t\t}\n\t\t\t},\n\t\t}\n\t},\n\t'number': /\\b0x[\\da-f]+|\\d+\\.?\\d*(?:e[+-]?\\d+)?/i,\n\t'boolean': /\\b(?:true|false)\\b/i,\n\t'punctuation': /[=\\[\\]{}]/,\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-hcl.js?");

/***/ })

};;