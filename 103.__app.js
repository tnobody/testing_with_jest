exports.ids = [103];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-git.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-git.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Prism.languages.git = {\n\t/*\n\t * A simple one line comment like in a git status command\n\t * For instance:\n\t * $ git status\n\t * # On branch infinite-scroll\n\t * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,\n\t * # and have 1 and 2 different commits each, respectively.\n\t * nothing to commit (working directory clean)\n\t */\n\t'comment': /^#.*/m,\n\n\t/*\n\t * Regexp to match the changed lines in a git diff output. Check the example below.\n\t */\n\t'deleted': /^[-–].*/m,\n\t'inserted': /^\\+.*/m,\n\n\t/*\n\t * a string (double and simple quote)\n\t */\n\t'string': /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/m,\n\n\t/*\n\t * a git command. It starts with a random prompt finishing by a $, then \"git\" then some other parameters\n\t * For instance:\n\t * $ git add file.txt\n\t */\n\t'command': {\n\t\tpattern: /^.*\\$ git .*$/m,\n\t\tinside: {\n\t\t\t/*\n\t\t\t * A git command can contain a parameter starting by a single or a double dash followed by a string\n\t\t\t * For instance:\n\t\t\t * $ git diff --cached\n\t\t\t * $ git log -p\n\t\t\t */\n\t\t\t'parameter': /\\s--?\\w+/m\n\t\t}\n\t},\n\n\t/*\n\t * Coordinates displayed in a git diff command\n\t * For instance:\n\t * $ git diff\n\t * diff --git file.txt file.txt\n\t * index 6214953..1d54a52 100644\n\t * --- file.txt\n\t * +++ file.txt\n\t * @@ -1 +1,2 @@\n\t * -Here's my tetx file\n\t * +Here's my text file\n\t * +And this is the second line\n\t */\n\t'coord': /^@@.*@@$/m,\n\n\t/*\n\t * Match a \"commit [SHA1]\" line in a git log output.\n\t * For instance:\n\t * $ git log\n\t * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09\n\t * Author: lgiraudel\n\t * Date:   Mon Feb 17 11:18:34 2014 +0100\n\t *\n\t *     Add of a new line\n\t */\n\t'commit_sha1': /^commit \\w{40}$/m\n};\n\n\n//# sourceURL=webpack:///./node_modules/prismjs/components/prism-git.js?");

/***/ })

};;