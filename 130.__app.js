exports.ids = [130];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-http.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-http.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function(t){t.languages.http={\"request-line\":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\\s(?:https?:\\/\\/|\\/)\\S+\\sHTTP\\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\\b/,\"attr-name\":/:\\w+/}},\"response-status\":{pattern:/^HTTP\\/1.[01] \\d+.*/m,inside:{property:{pattern:/(^HTTP\\/1.[01] )\\d+.*/i,lookbehind:!0}}},\"header-name\":{pattern:/^[\\w-]+:(?=.)/m,alias:\"keyword\"}};var a,e,n,i=t.languages,s={\"application/javascript\":i.javascript,\"application/json\":i.json||i.javascript,\"application/xml\":i.xml,\"text/xml\":i.xml,\"text/html\":i.html,\"text/css\":i.css},p={\"application/json\":!0,\"application/xml\":!0};for(var r in s)if(s[r]){a=a||{};var T=p[r]?(void 0,n=(e=r).replace(/^[a-z]+\\//,\"\"),\"(?:\"+e+\"|\\\\w+/(?:[\\\\w.-]+\\\\+)+\"+n+\"(?![+\\\\w.-]))\"):r;a[r]={pattern:RegExp(\"(content-type:\\\\s*\"+T+\"[\\\\s\\\\S]*?)(?:\\\\r?\\\\n|\\\\r){2}[\\\\s\\\\S]*\",\"i\"),lookbehind:!0,inside:{rest:s[r]}}}a&&t.languages.insertBefore(\"http\",\"header-name\",a)}(Prism);\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-http.min.js?");

/***/ })

};;