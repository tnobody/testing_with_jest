exports.ids = [339];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-visual-basic.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-visual-basic.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages['visual-basic'] = {\n\t'comment': {\n\t\tpattern: /(?:['‘’]|REM\\b).*/i,\n\t\tinside: {\n\t\t\t'keyword': /^REM/i\n\t\t}\n\t},\n\t'directive': {\n\t\tpattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\\S\\r\\n]_[^\\S\\r\\n]*(?:\\r\\n?|\\n)|.)+/i,\n\t\talias: 'comment',\n\t\tgreedy: true\n\t},\n\t'string': {\n\t\tpattern: /[\"“”](?:[\"“”]{2}|[^\"“”])*[\"“”]C?/i,\n\t\tgreedy: true\n\t},\n\t'date': {\n\t\tpattern: /#[^\\S\\r\\n]*(?:\\d+([/-])\\d+\\1\\d+(?:[^\\S\\r\\n]+(?:\\d+[^\\S\\r\\n]*(?:AM|PM)|\\d+:\\d+(?::\\d+)?(?:[^\\S\\r\\n]*(?:AM|PM))?))?|(?:\\d+[^\\S\\r\\n]*(?:AM|PM)|\\d+:\\d+(?::\\d+)?(?:[^\\S\\r\\n]*(?:AM|PM))?))[^\\S\\r\\n]*#/i,\n\t\talias: 'builtin'\n\t},\n\t'number': /(?:(?:\\b\\d+(?:\\.\\d+)?|\\.\\d+)(?:E[+-]?\\d+)?|&[HO][\\dA-F]+)(?:U?[ILS]|[FRD])?/i,\n\t'boolean': /\\b(?:True|False|Nothing)\\b/i,\n\t'keyword': /\\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\\b/i,\n\t'operator': [\n\t\t/[+\\-*/\\\\^<=>&#@$%!]/,\n\t\t{\n\t\t\tpattern: /([^\\S\\r\\n])_(?=[^\\S\\r\\n]*[\\r\\n])/,\n\t\t\tlookbehind: true\n\t\t}\n\t],\n\t'punctuation': /[{}().,:?]/\n};\n\nPrism.languages.vb = Prism.languages['visual-basic'];\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-visual-basic.js?");

/***/ })

};;