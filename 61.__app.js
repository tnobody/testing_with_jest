exports.ids = [61];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-csp.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-csp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Original by Scott Helme.\n *\n * Reference: https://scotthelme.co.uk/csp-cheat-sheet/\n *\n * Supports the following:\n *  - CSP Level 1\n *  - CSP Level 2\n *  - CSP Level 3\n */\n\nPrism.languages.csp = {\n\t'directive':  {\n\t\tpattern: /\\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,\n\t\talias: 'keyword'\n\t},\n\t'safe': {\n\t\tpattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\\d+=/]+)'/,\n\t\talias: 'selector'\n\t},\n\t'unsafe': {\n\t\tpattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\\*)/,\n\t\talias: 'function'\n\t}\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-csp.js?");

/***/ })

};;