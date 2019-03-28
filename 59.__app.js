exports.ids = [59];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-csharp.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-csharp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.csharp = Prism.languages.extend('clike', {\n\t'keyword': /\\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\\b/,\n\t'string': [\n\t\t{\n\t\t\tpattern: /@(\"|')(?:\\1\\1|\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n\t\t\tgreedy: true\n\t\t},\n\t\t{\n\t\t\tpattern: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*?\\1/,\n\t\t\tgreedy: true\n\t\t}\n\t],\n\t'class-name': [\n\t\t{\n\t\t\t// (Foo bar, Bar baz)\n\t\t\tpattern: /\\b[A-Z]\\w*(?:\\.\\w+)*\\b(?=\\s+\\w+)/,\n\t\t\tinside: {\n\t\t\t\tpunctuation: /\\./\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t// [Foo]\n\t\t\tpattern: /(\\[)[A-Z]\\w*(?:\\.\\w+)*\\b/,\n\t\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\tpunctuation: /\\./\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t// class Foo : Bar\n\t\t\tpattern: /(\\b(?:class|interface)\\s+[A-Z]\\w*(?:\\.\\w+)*\\s*:\\s*)[A-Z]\\w*(?:\\.\\w+)*\\b/,\n\t\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\tpunctuation: /\\./\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t// class Foo\n\t\t\tpattern: /((?:\\b(?:class|interface|new)\\s+)|(?:catch\\s+\\())[A-Z]\\w*(?:\\.\\w+)*\\b/,\n\t\t\tlookbehind: true,\n\t\t\tinside: {\n\t\t\t\tpunctuation: /\\./\n\t\t\t}\n\t\t}\n\t],\n\t'number': /\\b0x[\\da-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)f?/i,\n\t'operator': />>=?|<<=?|[-=]>|([-+&|?])\\1|~|[-+*/%&|^!=<>]=?/,\n\t'punctuation': /\\?\\.?|::|[{}[\\];(),.:]/\n});\n\nPrism.languages.insertBefore('csharp', 'class-name', {\n\t'generic-method': {\n\t\tpattern: /\\w+\\s*<[^>\\r\\n]+?>\\s*(?=\\()/,\n\t\tinside: {\n\t\t\tfunction: /^\\w+/,\n\t\t\t'class-name': {\n\t\t\t\tpattern: /\\b[A-Z]\\w*(?:\\.\\w+)*\\b/,\n\t\t\t\tinside: {\n\t\t\t\t\tpunctuation: /\\./\n\t\t\t\t}\n\t\t\t},\n\t\t\tkeyword: Prism.languages.csharp.keyword,\n\t\t\tpunctuation: /[<>(),.:]/\n\t\t}\n\t},\n\t'preprocessor': {\n\t\tpattern: /(^\\s*)#.*/m,\n\t\tlookbehind: true,\n\t\talias: 'property',\n\t\tinside: {\n\t\t\t// highlight preprocessor directives as keywords\n\t\t\t'directive': {\n\t\t\t\tpattern: /(\\s*#)\\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\\b/,\n\t\t\t\tlookbehind: true,\n\t\t\t\talias: 'keyword'\n\t\t\t}\n\t\t}\n\t}\n});\n\nPrism.languages.dotnet = Prism.languages.csharp;\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-csharp.js?");

/***/ })

};;