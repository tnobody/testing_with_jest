exports.ids = [23];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-aspnet.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-aspnet.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.aspnet=Prism.languages.extend(\"markup\",{\"page-directive tag\":{pattern:/<%\\s*@.*%>/i,inside:{\"page-directive tag\":/<%\\s*@\\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,rest:Prism.languages.markup.tag.inside}},\"directive tag\":{pattern:/<%.*%>/i,inside:{\"directive tag\":/<%\\s*?[$=%#:]{0,2}|%>/i,rest:Prism.languages.csharp}}}),Prism.languages.aspnet.tag.pattern=/<(?!%)\\/?[^\\s>\\/]+(?:\\s+[^\\s>\\/=]+(?:=(?:(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+))?)*\\s*\\/?>/i,Prism.languages.insertBefore(\"inside\",\"punctuation\",{\"directive tag\":Prism.languages.aspnet[\"directive tag\"]},Prism.languages.aspnet.tag.inside[\"attr-value\"]),Prism.languages.insertBefore(\"aspnet\",\"comment\",{\"asp comment\":/<%--[\\s\\S]*?--%>/}),Prism.languages.insertBefore(\"aspnet\",Prism.languages.javascript?\"script\":\"tag\",{\"asp script\":{pattern:/(<script(?=.*runat=['\"]?server['\"]?)[\\s\\S]*?>)[\\s\\S]*?(?=<\\/script>)/i,lookbehind:!0,inside:Prism.languages.csharp||{}}});\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-aspnet.min.js?");

/***/ })

};;