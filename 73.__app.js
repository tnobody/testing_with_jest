exports.ids = [73];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-django.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-django.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Django/Jinja2 syntax definition for Prism.js <http://prismjs.com> syntax highlighter.\n// Mostly it works OK but can paint code incorrectly on complex html/template tag combinations.\n\n(function (Prism) {\n\n\tPrism.languages.django = {\n\t\t'comment': /^{#[\\s\\S]*?#}$/,\n\t\t'tag': {\n\t\t\tpattern: /(^{%[+-]?\\s*)\\w+/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'keyword'\n\t\t},\n\t\t'delimiter': {\n\t\t\tpattern: /^{[{%][+-]?|[+-]?[}%]}$/,\n\t\t\talias: 'punctuation'\n\t\t},\n\t\t'string': {\n\t\t\tpattern: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n\t\t\tgreedy: true\n\t\t},\n\t\t'filter': {\n\t\t\tpattern: /(\\|)\\w+/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'function'\n\t\t},\n\t\t'test': {\n\t\t\tpattern: /(\\bis\\s+(?:not\\s+)?)(?!not\\b)\\w+/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'function'\n\t\t},\n\t\t'function': /\\b[a-z_]\\w+(?=\\s*\\()/i,\n\t\t'keyword': /\\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\\b/,\n\t\t'operator': /[-+*/%=]=?|!=|\\*\\*?=?|\\/\\/?=?|<[<=>]?|>[=>]?|[&|^~]/,\n\t\t'number': /\\b\\d+(?:\\.\\d+)?\\b/,\n\t\t'boolean': /[Tt]rue|[Ff]alse|[Nn]one/,\n\t\t'variable': /\\b\\w+?\\b/,\n\t\t'punctuation': /[{}[\\](),.:;]/\n\t};\n\n\n\tvar pattern = /{{[\\s\\S]*?}}|{%[\\s\\S]*?%}|{#[\\s\\S]*?#}/g;\n\tvar markupTemplating = Prism.languages['markup-templating'];\n\n\tPrism.hooks.add('before-tokenize', function (env) {\n\t\tmarkupTemplating.buildPlaceholders(env, 'django', pattern);\n\t});\n\tPrism.hooks.add('after-tokenize', function (env) {\n\t\tmarkupTemplating.tokenizePlaceholders(env, 'django');\n\t});\n\n\t// Add an Jinja2 alias\n\tPrism.languages.jinja2 = Prism.languages.django;\n\tPrism.hooks.add('before-tokenize', function (env) {\n\t\tmarkupTemplating.buildPlaceholders(env, 'jinja2', pattern);\n\t});\n\tPrism.hooks.add('after-tokenize', function (env) {\n\t\tmarkupTemplating.tokenizePlaceholders(env, 'jinja2');\n\t});\n\n})(Prism);\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-django.js?");

/***/ })

};;