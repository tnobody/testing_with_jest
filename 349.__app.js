exports.ids = [349];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-xquery.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-xquery.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tPrism.languages.xquery = Prism.languages.extend('markup', {\n\t\t'xquery-comment': {\n\t\t\tpattern: /\\(:[\\s\\S]*?:\\)/,\n\t\t\tgreedy: true,\n\t\t\talias: \"comment\"\n\t\t},\n\t\t'string': {\n\t\t\tpattern: /([\"'])(?:\\1\\1|(?!\\1)[\\s\\S])*\\1/,\n\t\t\tgreedy: true\n\t\t},\n\t\t'extension': {\n\t\t\tpattern: /\\(#.+?#\\)/,\n\t\t\talias: 'symbol'\n\t\t},\n\t\t'variable': /\\$[\\w-:]+/,\n\t\t'axis': {\n\t\t\tpattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'operator'\n\t\t},\n\t\t'keyword-operator': {\n\t\t\tpattern: /(^|[^:-])\\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\\b(?=$|[^:-])/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'operator'\n\t\t},\n\t\t'keyword': {\n\t\t\tpattern: /(^|[^:-])\\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\\b(?=$|[^:-])/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t'function': /[\\w-]+(?::[\\w-]+)*(?=\\s*\\()/,\n\t\t'xquery-element': {\n\t\t\tpattern: /(element\\s+)[\\w-]+(?::[\\w-]+)*/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'tag'\n\t\t},\n\t\t'xquery-attribute': {\n\t\t\tpattern: /(attribute\\s+)[\\w-]+(?::[\\w-]+)*/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'attr-name'\n\t\t},\n\t\t'builtin': {\n\t\t\tpattern: /(^|[^:-])\\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\\b(?=$|[^:-])/,\n\t\t\tlookbehind: true\n\t\t},\n\t\t'number': /\\b\\d+(?:\\.\\d+)?(?:E[+-]?\\d+)?/,\n\t\t'operator': [\n\t\t\t/[+*=?|@]|\\.\\.?|:=|!=|<[=<]?|>[=>]?/,\n\t\t\t{\n\t\t\t\tpattern: /(\\s)-(?=\\s)/,\n\t\t\t\tlookbehind: true\n\t\t\t}\n\t\t],\n\t\t'punctuation': /[[\\](){},;:/]/\n\t});\n\n\tPrism.languages.xquery.tag.pattern = /<\\/?(?!\\d)[^\\s>\\/=$<%]+(?:\\s+[^\\s>\\/=]+(?:=(?:(\"|')(?:\\\\[\\s\\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+))?)*\\s*\\/?>/i;\n\tPrism.languages.xquery['tag'].inside['attr-value'].pattern = /=(?:(\"|')(?:\\\\[\\s\\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+)/i;\n\tPrism.languages.xquery['tag'].inside['attr-value'].inside['punctuation'] = /^=\"|\"$/;\n\tPrism.languages.xquery['tag'].inside['attr-value'].inside['expression'] = {\n\t\t// Allow for two levels of nesting\n\t\tpattern: /{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}/,\n\t\tinside: {\n\t\t\trest: Prism.languages.xquery\n\t\t},\n\t\t'alias': 'language-xquery'\n\t};\n\n\t// The following will handle plain text inside tags\n\tvar stringifyToken = function (token) {\n\t\tif (typeof token === 'string') {\n\t\t\treturn token;\n\t\t}\n\t\tif (typeof token.content === 'string') {\n\t\t\treturn token.content;\n\t\t}\n\t\treturn token.content.map(stringifyToken).join('');\n\t};\n\n\tvar walkTokens = function (tokens) {\n\t\tvar openedTags = [];\n\t\tfor (var i = 0; i < tokens.length; i++) {\n\t\t\tvar token = tokens[i];\n\t\t\tvar notTagNorBrace = false;\n\n\t\t\tif (typeof token !== 'string') {\n\t\t\t\tif (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {\n\t\t\t\t\t// We found a tag, now find its kind\n\n\t\t\t\t\tif (token.content[0].content[0].content === '</') {\n\t\t\t\t\t\t// Closing tag\n\t\t\t\t\t\tif (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {\n\t\t\t\t\t\t\t// Pop matching opening tag\n\t\t\t\t\t\t\topenedTags.pop();\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tif (token.content[token.content.length - 1].content === '/>') {\n\t\t\t\t\t\t\t// Autoclosed tag, ignore\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t// Opening tag\n\t\t\t\t\t\t\topenedTags.push({\n\t\t\t\t\t\t\t\ttagName: stringifyToken(token.content[0].content[1]),\n\t\t\t\t\t\t\t\topenedBraces: 0\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else if (\n\t\t\t\t\topenedTags.length > 0 && token.type === 'punctuation' && token.content === '{' &&\n\t\t\t\t\t// Ignore `{{`\n\t\t\t\t\t(!tokens[i + 1] || tokens[i + 1].type !== 'punctuation' || tokens[i + 1].content !== '{') &&\n\t\t\t\t\t(!tokens[i - 1] || tokens[i - 1].type !== 'plain-text' || tokens[i - 1].content !== '{')\n\t\t\t\t) {\n\t\t\t\t\t// Here we might have entered an XQuery expression inside a tag\n\t\t\t\t\topenedTags[openedTags.length - 1].openedBraces++;\n\n\t\t\t\t} else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {\n\n\t\t\t\t\t// Here we might have left an XQuery expression inside a tag\n\t\t\t\t\topenedTags[openedTags.length - 1].openedBraces--;\n\n\t\t\t\t} else if (token.type !== 'comment') {\n\t\t\t\t\tnotTagNorBrace = true\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (notTagNorBrace || typeof token === 'string') {\n\t\t\t\tif (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {\n\t\t\t\t\t// Here we are inside a tag, and not inside an XQuery expression.\n\t\t\t\t\t// That's plain text: drop any tokens matched.\n\t\t\t\t\tvar plainText = stringifyToken(token);\n\n\t\t\t\t\t// And merge text with adjacent text\n\t\t\t\t\tif (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {\n\t\t\t\t\t\tplainText += stringifyToken(tokens[i + 1]);\n\t\t\t\t\t\ttokens.splice(i + 1, 1);\n\t\t\t\t\t}\n\t\t\t\t\tif (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {\n\t\t\t\t\t\tplainText = stringifyToken(tokens[i - 1]) + plainText;\n\t\t\t\t\t\ttokens.splice(i - 1, 1);\n\t\t\t\t\t\ti--;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (/^\\s+$/.test(plainText)) {\n\t\t\t\t\t\ttokens[i] = plainText;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttokens[i] = new Prism.Token('plain-text', plainText, null, plainText);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (token.content && typeof token.content !== 'string') {\n\t\t\t\twalkTokens(token.content);\n\t\t\t}\n\t\t}\n\t};\n\n\tPrism.hooks.add('after-tokenize', function (env) {\n\t\tif (env.language !== 'xquery') {\n\t\t\treturn;\n\t\t}\n\t\twalkTokens(env.tokens);\n\t});\n\n}(Prism));\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-xquery.js?");

/***/ })

};;