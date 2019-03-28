exports.ids = [281];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-rust.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-rust.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* TODO\n\tAdd support for Markdown notation inside doc comments\n\tAdd support for nested block comments...\n\tMatch closure params even when not followed by dash or brace\n\tAdd better support for macro definition\n*/\n\nPrism.languages.rust = {\n\t'comment': [\n\t\t{\n\t\t\tpattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?\\*\\//,\n\t\t\tlookbehind: true\n\t\t},\n\t\t{\n\t\t\tpattern: /(^|[^\\\\:])\\/\\/.*/,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'string': [\n\t\t{\n\t\t\tpattern: /b?r(#*)\"(?:\\\\.|(?!\"\\1)[^\\\\\\r\\n])*\"\\1/,\n\t\t\tgreedy: true\n\t\t},\n\t\t{\n\t\t\tpattern: /b?\"(?:\\\\.|[^\\\\\\r\\n\"])*\"/,\n\t\t\tgreedy: true\n\t\t}\n\t],\n\t'char': {\n\t\tpattern: /b?'(?:\\\\(?:x[0-7][\\da-fA-F]|u{(?:[\\da-fA-F]_*){1,6}|.)|[^\\\\\\r\\n\\t'])'/,\n\t\talias: 'string'\n\t},\n\t'lifetime-annotation': {\n\t\tpattern: /'[^\\s>']+/,\n\t\talias: 'symbol'\n\t},\n\t'keyword': /\\b(?:abstract|alignof|as|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\\b/,\n\n\t'attribute': {\n\t\tpattern: /#!?\\[.+?\\]/,\n\t\tgreedy: true,\n\t\talias: 'attr-name'\n\t},\n\n\t'function': [\n\t\t/\\w+(?=\\s*\\()/,\n\t\t// Macros can use parens or brackets\n\t\t/\\w+!(?=\\s*\\(|\\[)/\n\t],\n\t'macro-rules': {\n\t\tpattern: /\\w+!/,\n\t\talias: 'function'\n\t},\n\n\t// Hex, oct, bin, dec numbers with visual separators and type suffix\n\t'number': /\\b(?:0x[\\dA-Fa-f](?:_?[\\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\\d(?:_?\\d)*)?\\.?\\d(?:_?\\d)*(?:[Ee][+-]?\\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\\b/,\n\n\t// Closure params should not be confused with bitwise OR |\n\t'closure-params': {\n\t\tpattern: /\\|[^|]*\\|(?=\\s*[{-])/,\n\t\tinside: {\n\t\t\t'punctuation': /[|:,]/,\n\t\t\t'operator': /[&*]/\n\t\t}\n\t},\n\t'punctuation': /[{}[\\];(),:]|\\.+|->/,\n\t'operator': /[-+*\\/%!^]=?|=[=>]?|@|&[&=]?|\\|[|=]?|<<?=?|>>?=?/\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-rust.js?");

/***/ })

};;