exports.ids = [42];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-c.js":
/*!****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-c.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.c = Prism.languages.extend('clike', {\n\t'class-name': {\n\t\tpattern: /(\\b(?:enum|struct)\\s+)\\w+/,\n\t\tlookbehind: true\n\t},\n\t'keyword': /\\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\\b/,\n\t'operator': />>=?|<<=?|->|([-+&|:])\\1|[?:~]|[-+*/%&|^!=<>]=?/,\n\t'number': /(?:\\b0x(?:[\\da-f]+\\.?[\\da-f]*|\\.[\\da-f]+)(?:p[+-]?\\d+)?|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?)[ful]*/i\n});\n\nPrism.languages.insertBefore('c', 'string', {\n\t'macro': {\n\t\t// allow for multiline macro definitions\n\t\t// spaces after the # character compile fine with gcc\n\t\tpattern: /(^\\s*)#\\s*[a-z]+(?:[^\\r\\n\\\\]|\\\\(?:\\r\\n|[\\s\\S]))*/im,\n\t\tlookbehind: true,\n\t\talias: 'property',\n\t\tinside: {\n\t\t\t// highlight the path of the include statement as a string\n\t\t\t'string': {\n\t\t\t\tpattern: /(#\\s*include\\s*)(?:<.+?>|(\"|')(?:\\\\?.)+?\\2)/,\n\t\t\t\tlookbehind: true\n\t\t\t},\n\t\t\t// highlight macro directives as keywords\n\t\t\t'directive': {\n\t\t\t\tpattern: /(#\\s*)\\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\\b/,\n\t\t\t\tlookbehind: true,\n\t\t\t\talias: 'keyword'\n\t\t\t}\n\t\t}\n\t},\n\t// highlight predefined macros as constants\n\t'constant': /\\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\\b/\n});\n\ndelete Prism.languages.c['boolean'];\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-c.js?");

/***/ })

};;