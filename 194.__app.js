exports.ids = [194];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-markup.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markup.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.markup={comment:/<!--[\\s\\S]*?-->/,prolog:/<\\?[\\s\\S]+?\\?>/,doctype:/<!DOCTYPE[\\s\\S]+?>/i,cdata:/<!\\[CDATA\\[[\\s\\S]*?]]>/i,tag:{pattern:/<\\/?(?!\\d)[^\\s>\\/=$<%]+(?:\\s(?:\\s*[^\\s>\\/=]+(?:\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))|(?=[\\s/>])))+)?\\s*\\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\\/?[^\\s>\\/]+/i,inside:{punctuation:/^<\\/?/,namespace:/^[^\\s>\\/:]+:/}},\"attr-value\":{pattern:/=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\\s*)[\"']|[\"']$/,lookbehind:!0}]}},punctuation:/\\/?>/,\"attr-name\":{pattern:/[^\\s>\\/]+/,inside:{namespace:/^[^\\s>\\/:]+:/}}}},entity:/&#?[\\da-z]{1,8};/i},Prism.languages.markup.tag.inside[\"attr-value\"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add(\"wrap\",function(a){\"entity\"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,\"&\"))}),Object.defineProperty(Prism.languages.markup.tag,\"addInlined\",{value:function(a,e){var s={};s[\"language-\"+e]={pattern:/(^<!\\[CDATA\\[)[\\s\\S]+?(?=\\]\\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\\[CDATA\\[|\\]\\]>$/i;var n={\"included-cdata\":{pattern:/<!\\[CDATA\\[[\\s\\S]*?\\]\\]>/i,inside:s}};n[\"language-\"+e]={pattern:/[\\s\\S]+/,inside:Prism.languages[e]};var i={};i[a]={pattern:RegExp(\"(<__[\\\\s\\\\S]*?>)(?:<!\\\\[CDATA\\\\[[\\\\s\\\\S]*?\\\\]\\\\]>\\\\s*|[\\\\s\\\\S])*?(?=<\\\\/__>)\".replace(/__/g,a),\"i\"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore(\"markup\",\"cdata\",i)}}),Prism.languages.xml=Prism.languages.extend(\"markup\",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-markup.min.js?");

/***/ })

};;