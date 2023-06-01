(function(){function k(d){var l=d.jsustoolkitErrCode=d.jsustoolkitErrCode||{},f=d.rc2=d.rc2||{};d.cipher=d.cipher||{};d.cipher.algorithms=d.cipher.algorithms||{};d.cipher.rc2=d.cipher.algorithms.rc2=f;var m=[217,120,249,196,25,221,181,237,40,233,253,121,74,160,216,157,198,126,55,131,43,118,83,142,98,76,100,136,68,139,251,162,23,154,89,245,135,179,79,19,97,69,109,141,9,129,125,50,189,143,64,235,134,183,123,11,240,149,33,34,92,107,78,130,84,214,101,147,206,96,178,28,115,86,192,20,167,140,241,220,18,117,202,31,59,190,228,209,66,61,212,48,163,60,182,38,111,191,14,218,70,105,7,87,39,242,29,155,188,148,67,3,248,17,199,246,144,239,62,231,6,195,213,47,200,102,30,215,8,232,234,222,128,82,238,247,132,170,114,172,53,77,106,42,150,26,210,113,90,21,73,116,75,159,208,94,4,24,164,236,194,224,65,110,15,81,203,204,36,145,175,80,161,244,112,57,153,124,58,133,35,184,180,122,252,2,54,91,37,85,151,49,45,93,250,152,227,138,146,174,5,223,41,16,103,108,186,201,211,0,230,207,225,158,168,44,99,22,1,63,88,226,137,169,13,56,52,27,171,51,255,176,187,72,12,95,185,177,205,46,197,243,219,71,229,165,156,119,10,166,32,104,254,127,193,173],v=[1,2,3,5],q=function(c,e){c.constructor==String&&(c=d.util.createBuffer(c));e=e||128;var g=c;c=c.length();var f=e;e=f+7>>3;f=255>>(7&-f);for(var h=c;128>h;h++)g.putByte(m[g.at(h-1)+g.at(h-c)&255]);g.setAt(128-e,m[g.at(128-e)&f]);for(h=127-e;0<=h;h--)g.setAt(h,m[g.at(h+1)^g.at(h+e)]);return g},k=function(c,e,g){if(null==c||"undefined"==typeof c)throw{code:"100031",message:l["100031"]};if(1>c.length||128<c.length)throw{code:"100032",message:l["100032"]};var f=!1,h=null,n=null,p=null,a,m,k=[];c=q(c,e);for(a=0;64>a;a++)k.push(c.getInt16Le());if(g){var r=function(b){for(a=0;4>a;a++){b[a]+=k[m]+(b[(a+3)%4]&b[(a+2)%4])+(~b[(a+3)%4]&b[(a+1)%4]);var c=b[a],d=v[a];b[a]=c<<d&65535|(c&65535)>>16-d;m++}};var t=function(b){for(a=0;4>a;a++)b[a]+=k[b[(a+3)%4]&63]}}else r=function(b){for(a=3;0<=a;a--){var c=b[a],d=v[a];b[a]=(c&65535)>>d|c<<16-d&65535;b[a]-=k[m]+(b[(a+3)%4]&b[(a+2)%4])+(~b[(a+3)%4]&b[(a+1)%4]);m--}},t=function(b){for(a=3;0<=a;a--)b[a]-=k[b[(a+3)%4]&63]};var u=null;return u={start:function(b,a){if(null!=b){if("string"==typeof b&&8!=b.length||"object"==typeof b&&8!=b.length())throw{code:"100036",message:l["100036"]};b.constructor==String&&8==b.length&&(b=d.util.createBuffer(b))}f=!1;h=d.util.createBuffer();n=a||new d.util.createBuffer;p=b;u.output=n},update:function(b){if(null==h&&null==n)throw{code:"100034",message:l["100034"]};null!=b&&b.constructor==String&&(b=d.util.createBuffer(b));if(!f){if(null==b||"undefined"==typeof b)throw{code:"100033",message:l["100033"]};h.putBuffer(b)}for(;8<=h.length();){b=[[5,r],[1,t],[6,r],[1,t],[5,r]];var c=[];for(a=0;4>a;a++){var e=h.getInt16Le();null!==p&&(g?e^=p.getInt16Le():p.putInt16Le(e));c.push(e&65535)}m=g?0:63;for(e=0;e<b.length;e++)for(var k=0;k<b[e][0];k++)b[e][1](c);for(a=0;4>a;a++)null!==p&&(g?p.putInt16Le(c[a]):c[a]^=p.getInt16Le()),n.putInt16Le(c[a])}},finish:function(b){var a=!0;if(g)if(b)a=b(8,h,!g);else{var c=8==h.length()?8:8-h.length();h.fillWithByte(c,c)}a&&(f=!0,u.update());if(!g)if(a=0===h.length())if(b)a=b(8,n,!g);else if(b=n.length(),c=n.at(b-1),8<c||0>c)a=!1;else{for(var d=b-c;d<b;d++)n.at(d)!=c&&(a=!1);a&&n.truncate(c)}else throw{code:"100037",message:l["100037"]};return a}}};d.rc2.startEncrypting=function(c,e,g){c=d.rc2.createEncryptionCipher(c,128);c.start(e,g);return c};d.rc2.createEncryptionCipher=function(c,d){return k(c,d,!0)};d.rc2.startDecrypting=function(c,e,g){c=d.rc2.createDecryptionCipher(c,128);c.start(e,g);return c};d.rc2.createDecryptionCipher=function(c,d){return k(c,d,!1)}}var w=["./util","./jsustoolkitErrCode"],q=null;"function"!==typeof define&&("object"===typeof module&&module.exports?q=function(d,k){k(require,module)}:(crosscert=window.crosscert=window.crosscert||{},k(crosscert)));(q||"function"===typeof define)&&(q||define)(["require","module"].concat(w),function(d,l){l.exports=function(f){var m=w.map(function(f){return d(f)}).concat(k);f=f||{};f.defined=f.defined||{};if(f.defined.rc2)return f.rc2;f.defined.rc2=!0;for(var l=0;l<m.length;++l)m[l](f);return f.rc2}})})();