exports.ids = [105];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-glsl.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-glsl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.glsl = Prism.languages.extend('clike', {\n\t'comment': [\n\t\t/\\/\\*[\\s\\S]*?\\*\\//,\n\t\t/\\/\\/(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n])*/\n\t],\n\t'number': /(?:\\b0x[\\da-f]+|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?)[ulf]*/i,\n\t'keyword': /\\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\\b/\n});\n\nPrism.languages.insertBefore('glsl', 'comment', {\n\t'preprocessor': {\n\t\tpattern: /(^[ \\t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\\b)?/m,\n\t\tlookbehind: true,\n\t\talias: 'builtin'\n\t}\n});\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-glsl.js?");

/***/ })

};;