(function(){function n(h){(h.prng=h.prng||{}).create=function(g){function f(){if(32>a.pools[0].messageLength){var c=32-a.pools[0].messageLength<<5,b="",d;for(d=Math.floor(65535*Math.random());b.length<c;){var e=16807*(d&65535);d=16807*(d>>16);e+=(d&32767)<<16;e+=d>>15;e=(e&2147483647)+(e>>31);d=e&4294967295;for(e=0;3>e;++e){var f=d>>>(e<<3);f^=Math.floor(255*Math.random());b+=String.fromCharCode(f&255)}}a.collect(b)}else{c=h.md.sha1.create();c.update(a.pools[0].digest().getBytes());a.pools[0].start();for(e=b=1;32>e;++e)b=31==b?2147483648:b<<2,0===b%a.reseeds&&(c.update(a.pools[e].digest().getBytes()),a.pools[e].start());b=c.digest().getBytes();c.start();c.update(b);c=c.digest().getBytes();a.key=a.plugin.formatKey(b);a.seed=a.plugin.formatSeed(c);++a.reseeds;a.generated=0;a.time=+new Date}}var a={plugin:g,key:null,seed:null,time:null,reseeds:0,generated:0};g=g.md;for(var k=Array(32),l=0;32>l;++l)k[l]=g.create();a.pools=k;a.pool=0;a.generate=function(c){null===a.key&&f();for(var b=a.plugin.cipher,d=a.plugin.increment,e=a.plugin.formatKey,g=a.plugin.formatSeed,k=h.util.createBuffer();k.length()<c;){var l=b(a.key,a.seed);a.generated+=l.length;k.putBytes(l);a.key=e(b(a.key,d(a.seed)));a.seed=g(b(a.key,a.seed));1048576<=a.generated&&100>+new Date-a.time&&f()}return k.getBytes(c)};a.collect=function(c){for(var b=c.length,d=0;d<b;++d)a.pools[a.pool].update(c.substr(d,1)),a.pool=31===a.pool?0:a.pool+1;32<=a.pools[0].messageLength&&(c=+new Date,(null===a.time||100>c-a.time)&&f())};a.collectInt=function(c,b){var d="";do b-=8,d+=String.fromCharCode(c>>b&255);while(0<b);a.collect(d)};return a}}var p=["./md","./util"],m=null;"function"!==typeof define&&("object"===typeof module&&module.exports?m=function(h,g){g(require,module)}:(crosscert=window.crosscert=window.crosscert||{},n(crosscert)));(m||"function"===typeof define)&&(m||define)(["require","module"].concat(p),function(h,g){g.exports=function(f){var a=p.map(function(a){return h(a)}).concat(n);f=f||{};f.defined=f.defined||{};if(f.defined.prng)return f.prng;f.defined.prng=!0;for(var g=0;g<a.length;++g)a[g](f);return f.prng}})})();