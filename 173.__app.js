exports.ids = [173];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-latex.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-latex.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(Prism) {\n\tvar funcPattern = /\\\\(?:[^a-z()[\\]]|[a-z*]+)/i,\n\t    insideEqu = {\n\t\t    'equation-command': {\n\t\t\t    pattern: funcPattern,\n\t\t\t    alias: 'regex'\n\t\t    }\n\t    };\n\n\tPrism.languages.latex = {\n\t\t'comment': /%.*/m,\n\t\t// the verbatim environment prints whitespace to the document\n\t\t'cdata':  {\n\t\t\tpattern: /(\\\\begin\\{((?:verbatim|lstlisting)\\*?)\\})[\\s\\S]*?(?=\\\\end\\{\\2\\})/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t/*\n\t\t * equations can be between $ $ or \\( \\) or \\[ \\]\n\t\t * (all are multiline)\n\t\t */\n\t\t'equation': [\n\t\t\t{\n\t\t\t\tpattern: /\\$(?:\\\\[\\s\\S]|[^\\\\$])*\\$|\\\\\\([\\s\\S]*?\\\\\\)|\\\\\\[[\\s\\S]*?\\\\\\]/,\n\t\t\t\tinside: insideEqu,\n\t\t\t\talias: 'string'\n\t\t\t},\n\t\t\t{\n\t\t\t\tpattern: /(\\\\begin\\{((?:equation|math|eqnarray|align|multline|gather)\\*?)\\})[\\s\\S]*?(?=\\\\end\\{\\2\\})/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tinside: insideEqu,\n\t\t\t\talias: 'string'\n\t\t\t}\n\t\t],\n\t\t/*\n\t\t * arguments which are keywords or references are highlighted\n\t\t * as keywords\n\t\t */\n\t\t'keyword': {\n\t\t\tpattern: /(\\\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\\[[^\\]]+\\])?\\{)[^}]+(?=\\})/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t'url': {\n\t\t\tpattern: /(\\\\url\\{)[^}]+(?=\\})/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t/*\n\t\t * section or chapter headlines are highlighted as bold so that\n\t\t * they stand out more\n\t\t */\n\t\t'headline': {\n\t\t\tpattern: /(\\\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\\*?(?:\\[[^\\]]+\\])?\\{)[^}]+(?=\\}(?:\\[[^\\]]+\\])?)/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'class-name'\n\t\t},\n\t\t'function': {\n\t\t\tpattern: funcPattern,\n\t\t\talias: 'selector'\n\t\t},\n\t\t'punctuation': /[[\\]{}&]/\n\t};\n})(Prism);\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-latex.js?");

/***/ })

};;