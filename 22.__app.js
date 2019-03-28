exports.ids = [22];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-aspnet.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-aspnet.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.aspnet = Prism.languages.extend('markup', {\n\t'page-directive tag': {\n\t\tpattern: /<%\\s*@.*%>/i,\n\t\tinside: {\n\t\t\t'page-directive tag': /<%\\s*@\\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,\n\t\t\trest: Prism.languages.markup.tag.inside\n\t\t}\n\t},\n\t'directive tag': {\n\t\tpattern: /<%.*%>/i,\n\t\tinside: {\n\t\t\t'directive tag': /<%\\s*?[$=%#:]{0,2}|%>/i,\n\t\t\trest: Prism.languages.csharp\n\t\t}\n\t}\n});\n// Regexp copied from prism-markup, with a negative look-ahead added\nPrism.languages.aspnet.tag.pattern = /<(?!%)\\/?[^\\s>\\/]+(?:\\s+[^\\s>\\/=]+(?:=(?:(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+))?)*\\s*\\/?>/i;\n\n// match directives of attribute value foo=\"<% Bar %>\"\nPrism.languages.insertBefore('inside', 'punctuation', {\n\t'directive tag': Prism.languages.aspnet['directive tag']\n}, Prism.languages.aspnet.tag.inside[\"attr-value\"]);\n\nPrism.languages.insertBefore('aspnet', 'comment', {\n\t'asp comment': /<%--[\\s\\S]*?--%>/\n});\n\n// script runat=\"server\" contains csharp, not javascript\nPrism.languages.insertBefore('aspnet', Prism.languages.javascript ? 'script' : 'tag', {\n\t'asp script': {\n\t\tpattern: /(<script(?=.*runat=['\"]?server['\"]?)[\\s\\S]*?>)[\\s\\S]*?(?=<\\/script>)/i,\n\t\tlookbehind: true,\n\t\tinside: Prism.languages.csharp || {}\n\t}\n});\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-aspnet.js?");

/***/ })

};;