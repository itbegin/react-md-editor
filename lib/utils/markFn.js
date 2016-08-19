'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
require('github-markdown-css');

var Marked = require('marked');
var renderer = new Marked.Renderer();
Marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: true
});

exports.default = Marked;
//# sourceMappingURL=markFn.js.map