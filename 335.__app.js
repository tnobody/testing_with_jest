exports.ids = [335];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-vhdl.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-vhdl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.vhdl = {\n\t'comment': /--.+/,\n\t// support for all logic vectors\n\t'vhdl-vectors': {\n\t\t'pattern': /\\b[oxb]\"[\\da-f_]+\"|\"[01uxzwlh-]+\"/i,\n\t\t'alias': 'number'\n\t},\n\t// support for operator overloading included\n\t'quoted-function': {\n\t\tpattern: /\"\\S+?\"(?=\\()/,\n\t\talias: 'function'\n\t},\n\t'string': /\"(?:[^\\\\\"\\r\\n]|\\\\(?:\\r\\n|[\\s\\S]))*\"/,\n\t'constant': /\\b(?:use|library)\\b/i,\n\t// support for predefined attributes included\n\t'keyword': /\\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\\b/i,\n\t'boolean': /\\b(?:true|false)\\b/i,\n\t'function': /\\w+(?=\\()/,\n\t// decimal, based, physical, and exponential numbers supported\n\t'number': /'[01uxzwlh-]'|\\b(?:\\d+#[\\da-f_.]+#|\\d[\\d_.]*)(?:e[-+]?\\d+)?/i,\n\t'operator': /[<>]=?|:=|[-+*/&=]|\\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\\b/i,\n\t'punctuation': /[{}[\\];(),.:]/\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-vhdl.js?");

/***/ })

};;