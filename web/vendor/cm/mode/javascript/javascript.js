!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function t(e,t,r){return/^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}e.defineMode("javascript",function(r,n){function a(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}function i(e,t,r){return ge=e,je=r,t}function o(e,r){var n=e.next();if('"'==n||"'"==n)return r.tokenize=c(n),r.tokenize(e,r);if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return i("number","number");if("."==n&&e.match(".."))return i("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return i(n);if("="==n&&e.eat(">"))return i("=>","operator");if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),i("number","number");if("0"==n&&e.eat(/o/i))return e.eatWhile(/[0-7]/i),i("number","number");if("0"==n&&e.eat(/b/i))return e.eatWhile(/[01]/i),i("number","number");if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),i("number","number");if("/"==n)return e.eat("*")?(r.tokenize=u,u(e,r)):e.eat("/")?(e.skipToEnd(),i("comment","comment")):t(e,r,1)?(a(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),i("regexp","string-2")):(e.eatWhile($e),i("operator","operator",e.current()));if("`"==n)return r.tokenize=l,l(e,r);if("#"==n)return e.skipToEnd(),i("error","error");if($e.test(n))return e.eatWhile($e),i("operator","operator",e.current());if(Ae.test(n)){e.eatWhile(Ae);var o=e.current(),s=Te.propertyIsEnumerable(o)&&Te[o];return s&&"."!=r.lastType?i(s.type,s.style,o):i("variable","variable",o)}}function c(e){return function(t,r){var n,a=!1;if(Ee&&"@"==t.peek()&&t.match(qe))return r.tokenize=o,i("jsonld-keyword","meta");for(;null!=(n=t.next())&&(n!=e||a);)a=!a&&"\\"==n;return a||(r.tokenize=o),i("string","string")}}function u(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=o;break}n="*"==r}return i("comment","comment")}function l(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=o;break}n=!n&&"\\"==r}return i("quasi","string-2",e.current())}function s(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){for(var n=0,a=!1,i=r-1;i>=0;--i){var o=e.string.charAt(i),c=Ce.indexOf(o);if(c>=0&&c<3){if(!n){++i;break}if(0==--n){"("==o&&(a=!0);break}}else if(c>=3&&c<6)++n;else if(Ae.test(o))a=!0;else{if(/["'\/]/.test(o))return;if(a&&!n){++i;break}}}a&&!n&&(t.fatArrowAt=i)}}function f(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function d(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(var r=n.vars;r;r=r.next)if(r.name==t)return!0}function p(e,t,r,n,a){var i=e.cc;for(Oe.state=e,Oe.stream=a,Oe.marked=null,Oe.cc=i,Oe.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var o=i.length?i.pop():Ie?j:g;if(o(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return Oe.marked?Oe.marked:"variable"==r&&d(e,n)?"variable-2":t}}}function m(){for(var e=arguments.length-1;e>=0;e--)Oe.cc.push(arguments[e])}function v(){return m.apply(null,arguments),!0}function y(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}var r=Oe.state;if(Oe.marked="def",r.context){if(t(r.localVars))return;r.localVars={name:e,next:r.localVars}}else{if(t(r.globalVars))return;n.globalVars&&(r.globalVars={name:e,next:r.globalVars})}}function k(){Oe.state.context={prev:Oe.state.context,vars:Oe.state.localVars},Oe.state.localVars=Pe}function b(){Oe.state.localVars=Oe.state.context.vars,Oe.state.context=Oe.state.context.prev}function x(e,t){var r=function(){var r=Oe.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new f(n,Oe.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function h(){var e=Oe.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function w(e){function t(r){return r==e?v():";"==e?m():v(t)}return t}function g(e,t){return"var"==e?v(x("vardef",t.length),Z,w(";"),h):"keyword a"==e?v(x("form"),j,g,h):"keyword b"==e?v(x("form"),g,h):"{"==e?v(x("}"),G,h):";"==e?v():"if"==e?("else"==Oe.state.lexical.info&&Oe.state.cc[Oe.state.cc.length-1]==h&&Oe.state.cc.pop()(),v(x("form"),j,g,h,ne)):"function"==e?v(le):"for"==e?v(x("form"),ae,g,h):"variable"==e?v(x("stat"),S):"switch"==e?v(x("form"),j,x("}","switch"),w("{"),G,h,h):"case"==e?v(j,w(":")):"default"==e?v(w(":")):"catch"==e?v(x("form"),k,w("("),se,w(")"),g,h,b):"class"==e?v(x("form"),fe,h):"export"==e?v(x("stat"),ve,h):"import"==e?v(x("stat"),ye,h):"module"==e?v(x("form"),_,x("}"),w("{"),G,h,h):"async"==e?v(g):m(x("stat"),j,w(";"),h)}function j(e){return V(e,!1)}function M(e){return V(e,!0)}function V(e,t){if(Oe.state.fatArrowAt==Oe.stream.start){var r=t?C:q;if("("==e)return v(k,x(")"),D(_,")"),h,w("=>"),r,b);if("variable"==e)return m(k,_,w("=>"),r,b)}var n=t?A:z;return We.hasOwnProperty(e)?v(n):"function"==e?v(le,n):"keyword c"==e||"async"==e?v(t?I:E):"("==e?v(x(")"),E,w(")"),h,n):"operator"==e||"spread"==e?v(t?M:j):"["==e?v(x("]"),he,h,n):"{"==e?F(B,"}",null,n):"quasi"==e?m(T,n):"new"==e?v(W(t)):v()}function E(e){return e.match(/[;\}\)\],]/)?m():m(j)}function I(e){return e.match(/[;\}\)\],]/)?m():m(M)}function z(e,t){return","==e?v(j):A(e,t,!1)}function A(e,t,r){var n=0==r?z:A,a=0==r?j:M;return"=>"==e?v(k,r?C:q,b):"operator"==e?/\+\+|--/.test(t)?v(n):"?"==t?v(j,w(":"),a):v(a):"quasi"==e?m(T,n):";"!=e?"("==e?F(M,")","call",n):"."==e?v(N,n):"["==e?v(x("]"),E,w("]"),h,n):void 0:void 0}function T(e,t){return"quasi"!=e?m():"${"!=t.slice(t.length-2)?v(T):v(j,$)}function $(e){if("}"==e)return Oe.marked="string-2",Oe.state.tokenize=l,v(T)}function q(e){return s(Oe.stream,Oe.state),m("{"==e?g:j)}function C(e){return s(Oe.stream,Oe.state),m("{"==e?g:M)}function W(e){return function(t){return"."==t?v(e?P:O):m(e?M:j)}}function O(e,t){if("target"==t)return Oe.marked="keyword",v(z)}function P(e,t){if("target"==t)return Oe.marked="keyword",v(A)}function S(e){return":"==e?v(h,g):m(z,w(";"),h)}function N(e){if("variable"==e)return Oe.marked="property",v()}function B(e,t){return"async"==e?(Oe.marked="property",v(B)):"variable"==e||"keyword"==Oe.style?(Oe.marked="property",v("get"==t||"set"==t?H:U)):"number"==e||"string"==e?(Oe.marked=Ee?"property":Oe.style+" property",v(U)):"jsonld-keyword"==e?v(U):"modifier"==e?v(B):"["==e?v(j,w("]"),U):"spread"==e?v(j):":"==e?m(U):void 0}function H(e){return"variable"!=e?m(U):(Oe.marked="property",v(le))}function U(e){return":"==e?v(M):"("==e?m(le):void 0}function D(e,t){function r(n,a){if(","==n){var i=Oe.state.lexical;return"call"==i.info&&(i.pos=(i.pos||0)+1),v(function(r,n){return r==t||n==t?m():m(e)},r)}return n==t||a==t?v():v(w(t))}return function(n,a){return n==t||a==t?v():m(e,r)}}function F(e,t,r){for(var n=3;n<arguments.length;n++)Oe.cc.push(arguments[n]);return v(x(t,r),D(e,t),h)}function G(e){return"}"==e?v():m(g,G)}function J(e){if(ze&&":"==e)return v(L)}function K(e,t){if("="==t)return v(M)}function L(e){return"variable"==e?(Oe.marked="variable-3",v(Y)):"{"==e?v(D(R,"}")):"("==e?v(D(X,")"),Q):void 0}function Q(e){if("=>"==e)return v(L)}function R(e){return"variable"==e||"keyword"==Oe.style?(Oe.marked="property",v(R)):":"==e?v(L):void 0}function X(e){return"variable"==e?v(X):":"==e?v(L):void 0}function Y(e,t){return"<"==t?v(D(L,">"),Y):"["==e?v(w("]"),Y):void 0}function Z(){return m(_,J,te,re)}function _(e,t){return"modifier"==e?v(_):"variable"==e?(y(t),v()):"spread"==e?v(_):"["==e?F(_,"]"):"{"==e?F(ee,"}"):void 0}function ee(e,t){return"variable"!=e||Oe.stream.match(/^\s*:/,!1)?("variable"==e&&(Oe.marked="property"),"spread"==e?v(_):"}"==e?m():v(w(":"),_,te)):(y(t),v(te))}function te(e,t){if("="==t)return v(M)}function re(e){if(","==e)return v(Z)}function ne(e,t){if("keyword b"==e&&"else"==t)return v(x("form","else"),g,h)}function ae(e){if("("==e)return v(x(")"),ie,w(")"),h)}function ie(e){return"var"==e?v(Z,w(";"),ce):";"==e?v(ce):"variable"==e?v(oe):m(j,w(";"),ce)}function oe(e,t){return"in"==t||"of"==t?(Oe.marked="keyword",v(j)):v(z,ce)}function ce(e,t){return";"==e?v(ue):"in"==t||"of"==t?(Oe.marked="keyword",v(j)):m(j,w(";"),ue)}function ue(e){")"!=e&&v(j)}function le(e,t){return"*"==t?(Oe.marked="keyword",v(le)):"variable"==e?(y(t),v(le)):"("==e?v(k,x(")"),D(se,")"),h,J,g,b):void 0}function se(e){return"spread"==e?v(se):m(_,J,K)}function fe(e,t){if("variable"==e)return y(t),v(de)}function de(e,t){return"extends"==t?v(ze?L:j,de):"{"==e?v(x("}"),pe,h):void 0}function pe(e,t){return"variable"==e||"keyword"==Oe.style?"static"==t?(Oe.marked="keyword",v(pe)):(Oe.marked="property","get"==t||"set"==t?v(me,le,pe):v(le,pe)):"*"==t?(Oe.marked="keyword",v(pe)):";"==e?v(pe):"}"==e?v():void 0}function me(e){return"variable"!=e?m():(Oe.marked="property",v())}function ve(e,t){return"*"==t?(Oe.marked="keyword",v(xe,w(";"))):"default"==t?(Oe.marked="keyword",v(j,w(";"))):m(g)}function ye(e){return"string"==e?v():m(ke,xe)}function ke(e,t){return"{"==e?F(ke,"}"):("variable"==e&&y(t),"*"==t&&(Oe.marked="keyword"),v(be))}function be(e,t){if("as"==t)return Oe.marked="keyword",v(ke)}function xe(e,t){if("from"==t)return Oe.marked="keyword",v(j)}function he(e){return"]"==e?v():m(D(M,"]"))}function we(e,t){return"operator"==e.lastType||","==e.lastType||$e.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}var ge,je,Me=r.indentUnit,Ve=n.statementIndent,Ee=n.jsonld,Ie=n.json||Ee,ze=n.typescript,Ae=n.wordCharacters||/[\w$\xa1-\uffff]/,Te=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},o={if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:n,break:n,continue:n,new:e("new"),delete:n,throw:n,debugger:n,var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:a,typeof:a,instanceof:a,true:i,false:i,null:i,undefined:i,NaN:i,Infinity:i,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n,async:e("async")};if(ze){var c={type:"variable",style:"variable-3"},u={interface:e("class"),implements:n,namespace:n,module:e("module"),enum:e("module"),public:e("modifier"),private:e("modifier"),protected:e("modifier"),abstract:e("modifier"),as:a,string:c,number:c,boolean:c,any:c};for(var l in u)o[l]=u[l]}return o}(),$e=/[+\-*&%=<>!?|~^]/,qe=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,Ce="([{}])",We={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0},Oe={state:null,column:null,marked:null,cc:null},Pe={name:"this",next:{name:"arguments"}};return h.lex=!0,{startState:function(e){var t={tokenize:o,lastType:"sof",cc:[],lexical:new f((e||0)-Me,0,"block",(!1)),localVars:n.localVars,context:n.localVars&&{vars:n.localVars},indented:e||0};return n.globalVars&&"object"==typeof n.globalVars&&(t.globalVars=n.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),s(e,t)),t.tokenize!=u&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==ge?r:(t.lastType="operator"!=ge||"++"!=je&&"--"!=je?ge:"incdec",p(t,r,ge,je,e))},indent:function(t,r){if(t.tokenize==u)return e.Pass;if(t.tokenize!=o)return 0;var a=r&&r.charAt(0),i=t.lexical;if(!/^\s*else\b/.test(r))for(var c=t.cc.length-1;c>=0;--c){var l=t.cc[c];if(l==h)i=i.prev;else if(l!=ne)break}"stat"==i.type&&"}"==a&&(i=i.prev),Ve&&")"==i.type&&"stat"==i.prev.type&&(i=i.prev);var s=i.type,f=a==s;return"vardef"==s?i.indented+("operator"==t.lastType||","==t.lastType?i.info+1:0):"form"==s&&"{"==a?i.indented:"form"==s?i.indented+Me:"stat"==s?i.indented+(we(t,r)?Ve||Me:0):"switch"!=i.info||f||0==n.doubleIndentSwitch?i.align?i.column+(f?0:1):i.indented+(f?0:Me):i.indented+(/^(?:case|default)\b/.test(r)?Me:2*Me)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:Ie?null:"/*",blockCommentEnd:Ie?null:"*/",lineComment:Ie?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:Ie?"json":"javascript",jsonldMode:Ee,jsonMode:Ie,expressionAllowed:t,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=j&&t!=M||e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})});