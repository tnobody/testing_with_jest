exports.ids = [169];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-keyman.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-keyman.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.keyman = {\n\t'comment': /\\bc\\s.*/i,\n\t'function': /\\[\\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\\s+)*(?:[TKU]_[\\w?]+|\".+?\"|'.+?')\\s*\\]/i,  // virtual key\n\t'string': /(\"|').*?\\1/,\n\t'bold': [   // header statements, system stores and variable system stores\n\t\t/&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\\b/i,\n\t\t/\\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\\b/i\n\t],\n\t'keyword': /\\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\\b/i,  // rule keywords\n\t'atrule': /\\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\\b/i,   // structural keywords\n\t'number': /\\b(?:U\\+[\\dA-F]+|d\\d+|x[\\da-f]+|\\d+)\\b/i, // U+####, x###, d### characters and numbers\n\t'operator': /[+>\\\\,()]/,\n\t'tag': /\\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i   // prefixes\n};\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-keyman.js?");

/***/ })

};;