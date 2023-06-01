/*
 * MagicLine4Web VirtualKeyboard

 * (C) 2020. Dreamsecurity,Inc. All rights reserved.
 * 
 * 
 */
/**************************************************
 * 
 */
var MLVKeyConfig = {
	  magicjsLicense    : ''
	, magickbLicense    : ''		
	, servlet 			: '/magicVKeypad/response.jsp'
	, sessionTimeout	: 60*5
	, isMultiCursor		: false
	, isKeyPress		: false
}

var MLVKeyErrCode = {AXERR_OK:	0
	, AXERR_LICENSEEXPIRED			: {code: 30000,	message: '라이센스 정보(만료일 또는 도메인)를 확인하시기 바랍니다.'}
	, AXERR_NOTSETPROPERTY 			: {code: 30001,	message: '초기화 설정에 실패하였습니다.'}		
	, AXERR_INVALIDINPUT 			: {code: 30002,	message: '입력받은 데이터가 올바르지 않습니다.'}
	, AXERR_FAILINITALIZE 			: {code: 30003,	message: '초기화에 실패했습니다.'}			
	// 암호화 관련
	, AXERR_NOTSERVERCERT			: {code: 30050,	message: '웹서버로부터 다운받은 서버인증서가 없습니다.'}	
	, AXERR_MAKESESSIONID_FAIL		: {code: 30052,	message: '세션정보 생성에 실패하였습니다.'}
	, AXERR_NOTEXISTSESSIONINFO		: {code: 30053,	message: '세션정보가 존재하지 않습니다.로그인후에 다시 이용하십시오.'}
	, AXERR_ENCRYPT_FAIL			: {code: 30055,	message: '메세지 암호화에 실패하였습니다.'}
	, AXERR_DECRYPT_FAIL			: {code: 30056,	message: '메세지 복호화에 실패하였습니다.'}
	, AXERR_HASH_FAIL				: {code: 30057,	message: '데이터의 해시 생성에 실패하였습니다.'}
	, AXERR_INVALIDHASH_FAIL		: {code: 30058,	message: '데이터 무결성 오류(해쉬값이 일치하지 않습니다)'}
	, AXERR_MAKEKDF_FAIL			: {code: 30059,	message: '서버와 암/복호화시 사용될 통신키 생성에 실패하였습니다.'}
	, AXERR_MAKEMSG_FAIL			: {code: 30060,	message: '서버로 전송할 암호화 메세지 생성에 실패하였습니다.'}
	, AXERR_PARSEMSG_FAIL			: {code: 30061,	message: '서버로부터 전송받은 메세지가 올바르지 않습니다.'}
	, AXERR_INVALID_DATA			: {code: 30062,	message: '입력받은 데이터가 올바르지 않습니다.'}
	// 기타오류
	, AXERR_API_SCRIPT				: {code: 40000,	message: '스크립트에 오류가 발생하였습니다.'}
}

// Object.assign, String.format, XMLHttpRequest
var _0x20fa=['This\x20browser\x20does\x20not\x20support\x20XMLHttpRequest\x20or\x20XMLHTTP.','call','prototype','format','Msxml2.XMLHTTP.6.0','replace','hasOwnProperty','length','Cannot\x20convert\x20undefined\x20or\x20null\x20to\x20object','Msxml2.XMLHTTP','Microsoft.XMLHTTP','assign'];(function(_0x1b958f,_0x20faf8){var _0x1e8461=function(_0x4650dd){while(--_0x4650dd){_0x1b958f['push'](_0x1b958f['shift']());}};_0x1e8461(++_0x20faf8);}(_0x20fa,0xd7));var _0x1e84=function(_0x1b958f,_0x20faf8){_0x1b958f=_0x1b958f-0x0;var _0x1e8461=_0x20fa[_0x1b958f];return _0x1e8461;};typeof Object['assign']!='function'&&(Object[_0x1e84('0x0')]=function(_0x4650dd,_0x57af73){'use strict';if(_0x4650dd==null)throw new TypeError(_0x1e84('0x9'));var _0x107630=Object(_0x4650dd);for(var _0x456f74=0x1;_0x456f74<arguments['length'];_0x456f74++){var _0x1367d7=arguments[_0x456f74];if(_0x1367d7!=null)for(var _0x5aff89 in _0x1367d7){Object[_0x1e84('0x3')][_0x1e84('0x7')][_0x1e84('0x2')](_0x1367d7,_0x5aff89)&&(_0x107630[_0x5aff89]=_0x1367d7[_0x5aff89]);}}return _0x107630;});typeof String[_0x1e84('0x4')]=='undefined'&&(String[_0x1e84('0x4')]=function(){var _0x10a550=arguments[0x0];for(var _0x29c8b1=0x1;_0x29c8b1<arguments[_0x1e84('0x8')];_0x29c8b1++){var _0x39856a='{'+(_0x29c8b1-0x1)+'}';_0x10a550=_0x10a550[_0x1e84('0x6')](_0x39856a,arguments[_0x29c8b1]);}return _0x10a550;});typeof XMLHttpRequest=='undefined'&&(XMLHttpRequest=function(){try{return new ActiveXObject(_0x1e84('0x5'));}catch(_0x89b381){};try{return new ActiveXObject('Msxml2.XMLHTTP.3.0');}catch(_0x547b69){};try{return new ActiveXObject(_0x1e84('0xa'));}catch(_0x322ca7){};try{return new ActiveXObject(_0x1e84('0xb'));}catch(_0x3c303c){};throw new Error(_0x1e84('0x1'));});

// MLVKeyUtils
var _0x1621=['ipad','android','nextSibling','windows\x20ce','iphone','getAttribute','opera\x20mini','nokia','(getAttributeByElementTag)','message','opera\x20mobi','userAgent','parentNode','indexOf','appendChild','code','samsung','push','forEach','blackberry','outerWidth','length','webos','toLowerCase','ipod','Trident/','getElementsByTagName','oppo','huawei','insertBefore','AXERR_API_SCRIPT','win16|win32|win64|windows|mac|macintel|linux|freebsd|openbsd|sunos'];(function(_0x38110c,_0x162123){var _0x2eb4ce=function(_0x385576){while(--_0x385576){_0x38110c['push'](_0x38110c['shift']());}};_0x2eb4ce(++_0x162123);}(_0x1621,0x14f));var _0x2eb4=function(_0x38110c,_0x162123){_0x38110c=_0x38110c-0x0;var _0x2eb4ce=_0x1621[_0x38110c];return _0x2eb4ce;};var MLVKeyUtils={'getAttributeByElementTag':function(_0x385576,_0x4dd569){var _0x3dea5d=document[_0x2eb4('0xb')](_0x385576),_0x4cdde8=new Array();try{for(var _0x187bf0=0x0;_0x187bf0<_0x3dea5d[_0x2eb4('0x6')];_0x187bf0++){var _0x372f6f=_0x3dea5d['item'](_0x187bf0);_0x372f6f[_0x2eb4('0x16')](_0x4dd569)!=null&&_0x4cdde8[_0x2eb4('0x2')](_0x372f6f);}}catch(_0x24fca0){throw{'code':MLVKeyErrCode[_0x2eb4('0xf')][_0x2eb4('0x0')],'message':MLVKeyErrCode['AXERR_API_SCRIPT'][_0x2eb4('0x1a')]+_0x2eb4('0x19')};}return _0x4cdde8;},'insertAfter':function(_0x200aec,_0x472c1d){!!_0x200aec[_0x2eb4('0x13')]?_0x200aec[_0x2eb4('0x1d')][_0x2eb4('0xe')](_0x472c1d,_0x200aec[_0x2eb4('0x13')]):_0x200aec['parentNode'][_0x2eb4('0x1f')](_0x472c1d);},'isIEDesktop':function(){var _0x211310=(/MSIE (\d+\.\d+);/['test'](navigator['userAgent'])||navigator[_0x2eb4('0x1c')]['indexOf'](_0x2eb4('0xa'))>-0x1)&&window[_0x2eb4('0x5')]>0x3ff;return _0x211310;},'isDesktopOS':function(){var _0x24611a=_0x2eb4('0x10')['indexOf'](navigator['platform'][_0x2eb4('0x8')]())>=0x0;return _0x24611a;},'isMobileDevice':function(){var _0x1ab488='',_0x3eb7b5=navigator[_0x2eb4('0x1c')][_0x2eb4('0x8')](),_0x34f21d=[_0x2eb4('0x15'),_0x2eb4('0x9'),'ipad',_0x2eb4('0x12'),_0x2eb4('0x4'),'windows\x20ce',_0x2eb4('0x18'),'webos',_0x2eb4('0x17'),'samsung','lg','mi','sonyericsson','opera\x20mobi','iemobile',_0x2eb4('0xd'),_0x2eb4('0xc'),'mot'];return _0x34f21d[_0x2eb4('0x3')](function(_0x55553d){_0x3eb7b5[_0x2eb4('0x1e')](_0x55553d)>=0x0&&(_0x1ab488=_0x55553d);}),_0x1ab488[_0x2eb4('0x6')]==0x0?![]:!![];},'getMobileDevice':function(){var _0x499cd4='',_0x456e25=navigator[_0x2eb4('0x1c')][_0x2eb4('0x8')](),_0x58202d=[_0x2eb4('0x15'),'ipod',_0x2eb4('0x11'),_0x2eb4('0x12'),'blackberry',_0x2eb4('0x14'),_0x2eb4('0x18'),_0x2eb4('0x7'),_0x2eb4('0x17'),_0x2eb4('0x1'),'lg','mi','sonyericsson',_0x2eb4('0x1b'),'iemobile','huawei',_0x2eb4('0xc'),'mot'];return _0x58202d['forEach'](function(_0x2c8ce7){_0x456e25[_0x2eb4('0x1e')](_0x2c8ce7)>=0x0&&(_0x499cd4=_0x2c8ce7);}),_0x499cd4;},'getPadDigits':function(_0x226abb,_0x4fa782,_0x5c4000){return _0x5c4000=_0x5c4000||'0',_0x226abb=_0x226abb+'',_0x226abb[_0x2eb4('0x6')]>=_0x4fa782?_0x226abb:new Array(_0x4fa782-_0x226abb[_0x2eb4('0x6')]+0x1)['join'](_0x5c4000)+_0x226abb;}};

// MLServlet
		var _0x19b7=['op=setSessionKey&sessionTimeout={0}&initParam={1}','appendChild','round','script','POST','not\x20defined\x20code','application/x-www-form-urlencoded','getElementsByTagName','removeChild','length','sendAsync','responseText','code','ajax','send','servlet','onerror','Content-type','callback=','op=getSecureKeyboard&challenge={0}&type={1}&func={2}&x={3}&y={4}&token={5}','jsonp','string','op=exchangeData&encryptedData={0}','onreadystatechange','indexOf','op=exchangeData&encryptedData={0}&token={1}','setRequestHeader','parse','format','type','base64','src','XMLHttpRequest\x20error','open','onload','encode','random','function','head','sendSync','text/javascript','json','mToken','match','{0}&etc={1}','message','no-cache','ajaxType','Cache-Control','undefined'];(function(_0x383efd,_0x19b719){var _0x45ab00=function(_0x30dafb){while(--_0x30dafb){_0x383efd['push'](_0x383efd['shift']());}};_0x45ab00(++_0x19b719);}(_0x19b7,0x150));var _0x45ab=function(_0x383efd,_0x19b719){_0x383efd=_0x383efd-0x0;var _0x45ab00=_0x19b7[_0x383efd];return _0x45ab00;};var MLServlet={'ajaxType':0x0,'isJsonp':function(_0x30dafb){var _0x55bf91=_0x30dafb[_0x45ab('0x7')](/([a-zA-Z]+):\/\/([\-\w\.]+)(?:\:(\d{0,5}))?/),_0x18d7fd=window['location']['href'][_0x45ab('0x7')](/([a-zA-Z]+):\/\/([\-\w\.]+)(?:\:(\d{0,5}))?/);if(_0x55bf91==null)return![];if(_0x18d7fd==null)return!![];if(_0x18d7fd[0x1]!=_0x55bf91[0x1])return!![];if(_0x18d7fd[0x2]!=_0x55bf91[0x2])return!![];if(_0x18d7fd[_0x45ab('0x17')]!=_0x55bf91['length'])return!![];if(_0x18d7fd[0x3]!=_0x55bf91[0x3])return!![];return![];},'jsonp':function(_0x1ef913,_0x452985,_0x4ed1c9){if(typeof $==_0x45ab('0xd')){var _0x1ac9b2=document['createElement'](_0x45ab('0x11')),_0x3f3f99='jsonpCallback'+Math[_0x45ab('0x10')](0x8ac7230489e80000*Math[_0x45ab('0x0')]())+'_'+Math['round'](0xe8d4a51000*Math[_0x45ab('0x0')]());window[_0x3f3f99]=function(_0x1f808e){delete window[_0x3f3f99],document[_0x45ab('0x15')]('head')[0x0][_0x45ab('0x16')](_0x1ac9b2),_0x4ed1c9(_0x1f808e);return;},_0x1ac9b2[_0x45ab('0x2b')]=_0x45ab('0x4'),_0x1ac9b2['async']=!![],_0x1ac9b2[_0x45ab('0x2d')]=_0x1ef913+(_0x1ef913[_0x45ab('0x26')]('?')>=0x0?'&':'?')+_0x45ab('0x20')+_0x3f3f99+'&'+_0x452985,document[_0x45ab('0x15')](_0x45ab('0x2'))[0x0][_0x45ab('0xf')](_0x1ac9b2);}else $[_0x45ab('0x1b')]({'url':_0x1ef913,'data':_0x452985,'type':'POST','cache':![],'dataType':'jsonp','success':function(_0x62a8a9){_0x4ed1c9(_0x62a8a9);},'error':function(_0x36f4f0,_0x2ddd05,_0x1f1d8d){_0x4ed1c9(_0x36f4f0);}});},'secureAjax':function(_0x21684e,_0x5e4412,_0x3b7cf7,_0x37e20f){var _0x578c52='',_0x304d7e=MLVKeyConfig[_0x45ab('0x1d')],_0x51b3fb=encodeURIComponent(magicjs[_0x45ab('0x2c')][_0x45ab('0x31')](_0x5e4412)),_0x3d0eaa='';return ML4WebVKeyPad==null||typeof ML4WebVKeyPad['mToken']==_0x45ab('0xd')||ML4WebVKeyPad[_0x45ab('0x6')]==''?_0x578c52=String[_0x45ab('0x2a')](_0x45ab('0x24'),_0x51b3fb):_0x578c52=String[_0x45ab('0x2a')](_0x45ab('0x27'),_0x51b3fb,encodeURIComponent(ML4WebVKeyPad[_0x45ab('0x6')])),typeof _0x37e20f!=_0x45ab('0xd')&&(_0x578c52=String[_0x45ab('0x2a')](_0x45ab('0x8'),_0x578c52,encodeURIComponent(_0x37e20f))),typeof _0x21684e!=_0x45ab('0xd')&&(_0x304d7e=_0x21684e),typeof _0x3b7cf7!=_0x45ab('0xd')&&typeof _0x3b7cf7==_0x45ab('0x1')?MLServlet[_0x45ab('0x18')](_0x304d7e,_0x578c52,_0x3b7cf7):_0x3d0eaa=MLServlet[_0x45ab('0x3')](_0x304d7e,_0x578c52),_0x3d0eaa;},'sendSync':function(_0x2d6928,_0x5ef967,_0x2fe1d4){var _0x18bdec=new XMLHttpRequest();_0x18bdec[_0x45ab('0x2f')](_0x45ab('0x12'),_0x2d6928,![]),_0x18bdec[_0x45ab('0x28')]('Cache-Control',_0x45ab('0xa')),_0x18bdec[_0x45ab('0x28')](_0x45ab('0x1f'),_0x45ab('0x14'));try{_0x18bdec[_0x45ab('0x1c')](_0x5ef967);if(_0x18bdec['readyState']==0x4&&_0x18bdec['status']==0xc8){if(typeof _0x2fe1d4!=_0x45ab('0xd')&&typeof _0x2fe1d4=='function')_0x2fe1d4(JSON[_0x45ab('0x29')](_0x18bdec[_0x45ab('0x19')]));else return JSON[_0x45ab('0x29')](_0x18bdec[_0x45ab('0x19')]);}else{if(typeof _0x2fe1d4!=_0x45ab('0xd')&&typeof _0x2fe1d4==_0x45ab('0x1'))_0x2fe1d4({'code':-0x1,'message':'XMLHttpRequest\x20error'});else return{'code':-0x1,'message':'XMLHttpRequest\x20error'};}}catch(_0x37b375){if(typeof _0x2fe1d4==_0x45ab('0x1'))_0x2fe1d4({'code':-0x2,'message':_0x45ab('0x2e')});else return{'code':-0x2,'message':_0x45ab('0x2e')};}},'sendAsync':function(_0x3345ff,_0x10b02b,_0x4e4c8a){if(MLServlet[_0x45ab('0xb')]==0x0){if(typeof $==_0x45ab('0xd')){var _0x26f77b=new XMLHttpRequest();_0x26f77b[_0x45ab('0x2f')](_0x45ab('0x12'),_0x3345ff,!![]),_0x26f77b[_0x45ab('0x28')](_0x45ab('0xc'),'no-cache'),_0x26f77b[_0x45ab('0x28')](_0x45ab('0x1f'),_0x45ab('0x14'));try{_0x26f77b[_0x45ab('0x1c')](_0x10b02b),_0x26f77b[_0x45ab('0x25')]=function(){},_0x26f77b[_0x45ab('0x30')]=function(){_0x4e4c8a(JSON['parse'](_0x26f77b[_0x45ab('0x19')]));},_0x26f77b[_0x45ab('0x1e')]=function(){MLServlet[_0x45ab('0xb')]=0x1,MLServlet[_0x45ab('0x22')](_0x3345ff,_0x10b02b,_0x4e4c8a);};}catch(_0x228cf8){MLServlet[_0x45ab('0xb')]=0x1,MLServlet[_0x45ab('0x22')](_0x3345ff,_0x10b02b,_0x4e4c8a);}}else $[_0x45ab('0x1b')]({'url':_0x3345ff,'data':_0x10b02b,'type':_0x45ab('0x12'),'cache':![],'dataType':_0x45ab('0x5'),'success':function(_0x2c12d6){_0x4e4c8a(_0x2c12d6);},'error':function(_0x566381,_0x2c9ba1,_0x1556d6){MLServlet[_0x45ab('0xb')]=0x1,MLServlet[_0x45ab('0x22')](_0x3345ff,_0x10b02b,_0x4e4c8a);}});}else MLServlet['jsonp'](_0x3345ff,_0x10b02b,_0x4e4c8a);},'setSessionKey':function(_0x32d61d,_0x2d81af,_0x6b7f53){var _0x19e8d1=String[_0x45ab('0x2a')](_0x45ab('0xe'),_0x32d61d,_0x2d81af),_0x486e12='';if(typeof _0x6b7f53!=_0x45ab('0xd')&&typeof _0x6b7f53==_0x45ab('0x1'))MLServlet[_0x45ab('0x18')](MLVKeyConfig[_0x45ab('0x1d')],_0x19e8d1,function(_0xc38777){typeof _0xc38777['code']==_0x45ab('0xd')&&_0x6b7f53({'code':0x3ec,'message':_0x45ab('0x13')}),typeof _0xc38777['message']==_0x45ab('0xd')&&_0x6b7f53({'code':0x3ec,'message':'not\x20defined\x20message'}),_0x6b7f53(_0xc38777);});else{_0x486e12=MLServlet['sendSync'](MLVKeyConfig[_0x45ab('0x1d')],_0x19e8d1);try{if(typeof _0x486e12[_0x45ab('0x1a')]==_0x45ab('0xd'))throw{'code':0x3ec,'message':_0x45ab('0x13')};if(typeof _0x486e12[_0x45ab('0x9')]==_0x45ab('0xd'))throw{'code':0x3ec,'message':'not\x20defined\x20message'};}catch(_0x2eaeb5){_0x486e12=_0x2eaeb5;}}return _0x486e12;},'secureRequest':function(_0x51cd74,_0xc8d6f,_0x2bce8d){var _0x495a3d='',_0x913582=encodeURIComponent(magicjs[_0x45ab('0x2c')][_0x45ab('0x31')](_0x51cd74)),_0x1c973f='';return typeof _0x2bce8d==_0x45ab('0xd')||typeof _0x2bce8d==_0x45ab('0x23')&&_0x2bce8d[_0x45ab('0x17')]==0x0?_0x495a3d=String[_0x45ab('0x2a')]('op=exchangeData&encryptedData={0}',_0x913582):_0x495a3d=String['format'](_0x45ab('0x27'),_0x913582,encodeURIComponent(_0x2bce8d)),typeof _0xc8d6f!=_0x45ab('0xd')&&typeof _0xc8d6f==_0x45ab('0x1')?MLServlet['sendAsync'](MLVKeyConfig[_0x45ab('0x1d')],_0x495a3d,_0xc8d6f):_0x1c973f=MLServlet[_0x45ab('0x3')](MLVKeyConfig[_0x45ab('0x1d')],_0x495a3d),_0x1c973f;},'getSecureKeyboard':function(_0x28e803,_0xeb37b4,_0x5529b2,_0xfa0e2d,_0x3ba84c,_0x29977a,_0x781b59){var _0x5146b1='',_0x1af0ac='';return typeof _0x781b59==_0x45ab('0xd')||typeof _0x781b59==_0x45ab('0x23')&&_0x781b59[_0x45ab('0x17')]==0x0?_0x5146b1=String[_0x45ab('0x2a')]('op=getSecureKeyboard&challenge={0}&type={1}&func={2}&x={3}&y={4}',_0x28e803,_0xeb37b4,_0x5529b2,_0xfa0e2d,_0x3ba84c):_0x5146b1=String[_0x45ab('0x2a')](_0x45ab('0x21'),_0x28e803,_0xeb37b4,_0x5529b2,_0xfa0e2d,_0x3ba84c,encodeURIComponent(_0x781b59)),typeof _0x29977a!=_0x45ab('0xd')&&typeof _0x29977a=='function'?MLServlet['sendAsync'](MLVKeyConfig[_0x45ab('0x1d')],_0x5146b1,_0x29977a):_0x1af0ac=MLServlet['sendSync'](MLVKeyConfig['servlet'],_0x5146b1),_0x1af0ac;}};
		
var ML4WebVKey    = [];
var ML4WebVKeyPad = null;
var MLJSCrypto    = null;

ML4WebVKey.getServlet = function() {
	return MLVKeyConfig.servlet; 
};

ML4WebVKey.init = function(initFlag) {
	try {
		magicjs.init(MLVKeyConfig.magicjsLicense);
		
		if (MLJSCrypto == null) {
			MLJSCrypto = new magicE2EObject();
		}
		
		MLJSCrypto.setLicense(MLVKeyConfig.magickbLicense);
		
		if(typeof(initFlag) != "undefined" && initFlag == 1){
			ML4WebVKeyPad = null;
		}
		
		if (ML4WebVKeyPad == null) {
			ML4WebVKey.now  = null;
			ML4WebVKey.objs = new Array();			
			ML4WebVKeyPad   = new magicVKeyPad();

			ML4WebVKeyPad.createSession(function(resultCallback) {			
				if (resultCallback.code != 0) {
					alert(resultCallback.message);
					return;
				}
				
				var inputs = MLVKeyUtils.getAttributeByElementTag("input", "ds-kb-type");
				
				for (var index=0; index<inputs.length; index++){
					var input = inputs[index];
					
					if( ML4WebVKey[input.id] != null){
						delete ML4WebVKey[input.id];
					}
					
					if (input.getAttribute("ds-kb-type") != null && ML4WebVKey[input.id] == null) {
						ML4WebVKeyPad.setVirtualKeyboard(input);
					}
				}	
			});
			
			if (document.addEventListener) {
				document.addEventListener("mousedown", ML4WebVKey.onmousedown, false);
			} else if (document.attachEvent) {
				document.attachEvent("onmousedown", ML4WebVKey.onmousedown);
			}
			
			if (document.addEventListener) {
				window.addEventListener("orientationchange", ML4WebVKey.orientation, false);
			} else if (document.attachEvent) {
				window.attachEvent("onorientationchange​", ML4WebVKey.orientation);
			}
		}
	} catch(ex) {
		debugger;
	}
};

ML4WebVKey.showKeyboard = function(elementId) {
	try {
		if (typeof(elementId) != "undefined" && typeof(ML4WebVKey[elementId]) != "undefined") {
			return ML4WebVKey[elementId].showKeyboard();
		}
	} catch (ex) {
		debugger;
	}
}

ML4WebVKey.getEncryptedPassword = function(elementId) {
	var result = "";
	
	try {
		if (typeof(elementId) == "undefined") {
			for (var i=0; i<ML4WebVKey.objs.length; i++) {
				result += ML4WebVKey[ML4WebVKey.objs[i]].encryptedPassword();
				result += "$";
			}
		} else if (typeof(elementId) != "undefined") {
			for (var i=0; i<arguments.length; i++) {
				if (typeof(ML4WebVKey[arguments[i]]) != "undefined") {
					result += ML4WebVKey[arguments[i]].encryptedPassword();					
				} else {
					result += "'" + arguments[i] + "' undefined";
				}
				result += "$";
			}
			
		} else {
		}
	} catch (ex) {
		debugger;
	}
	
	result = result.slice(0,-1);
	result += "&decryptedType=server";
	
	return result;
}

ML4WebVKey.getDecryptedPassword = function(elementId, callback) {
	try {		
		if (typeof(elementId) != "undefined" && typeof(ML4WebVKey[elementId]) != "undefined") {
			return ML4WebVKey[elementId].decryptPassword(callback);
		} else {
			return "";
		}
	} catch (ex) {
		debugger;
		return "";
	}
}

ML4WebVKey.orientation = function(jsEvent) {	
	if (MLVKeyUtils.isMobileDevice() == true) {
		setTimeout(function(){
			var scrollLocation = document.documentElement.scrollTop;// 현재 스크롤바 위치
			var windowHeight   = window.innerHeight;				// 스크린 창
			var fullHeight     = document.body.scrollHeight;		// margin 값은 포함 x
			var startPositionY = scrollLocation + (windowHeight-parseInt(ML4WebVKey.now.mainDiv.style.height));

			ML4WebVKey.now.layoutDiv.style.setProperty("top",  startPositionY-10 + "px");
		},100);
	}
}

ML4WebVKey.onmousedown = function(jsEvent) {
	var selectObject = null;
	
	function hideKeyboardLayout() {
		if (ML4WebVKey.now != null) {
    		if (typeof(ML4WebVKey.now.layoutDiv.style.display) != "undefined") {
    			ML4WebVKey.now.closeButton();
    		}
    	}
	}
	
	if (jsEvent.type == "text" || jsEvent.type == "password") {
		selectObject = jsEvent;
	} else {
		jsEvent = jsEvent ? jsEvent : window.event;
		selectObject = jsEvent.target ? jsEvent.target : jsEvent.srcElement;
	}
	
	if (selectObject.type == "text" || selectObject.type == "password") {
		if (ML4WebVKey.now != null && ML4WebVKey.now.inputField.id != selectObject.id) {
			hideKeyboardLayout();
		}
		
		if (selectObject.getAttribute("ds-kb-type") != null) {
			ML4WebVKey[selectObject.id].clearKey();
			
			if (selectObject.getAttribute("ds-kb-focus") == "true") {
				selectObject.readOnly = true;
				var checkObject = setInterval(function() {
					if (typeof(ML4WebVKey[selectObject.id]) != "undefined") {
						clearInterval(checkObject);
						ML4WebVKey[selectObject.id].showKeyboard();
					}
				}, 100);
			}
		}
    } else {
    	if (typeof(selectObject.id) != "undefined" && selectObject.id === "") {
    		return hideKeyboardLayout();
    	} else {
    		if (ML4WebVKey.now != null) {
    			var items = ML4WebVKey.now.layoutDiv.childNodes;
       		 	var count = ML4WebVKey.now.layoutDiv.childNodes.length;
       		 	
        		for (var i=0; i<count; i++) {
        			var elementId = ML4WebVKey.now.layoutDiv.childNodes[i].id;
        			
        			if (selectObject.id.indexOf(elementId) >=0) {
        	    		return true;
        	    	}    	        
        	    }
        		
        		return hideKeyboardLayout();
    		}
    	}
    }
}

ML4WebVKey.buttonclick = function(jsEvent) {
	var selectObject = null;
	
	jsEvent = jsEvent ? jsEvent : window.event;
	selectObject = jsEvent.target ? jsEvent.target : jsEvent.srcElement;
	
	if (typeof(selectObject.id) != "undefined" && selectObject.id.indexOf("_magicButton")) {
		var selectId = selectObject.id.slice(0, selectObject.id.indexOf("_magicButton"));
		
		var checkObject = setInterval(function() {	
			if (typeof(ML4WebVKey[selectId]) != "undefined") {
				clearInterval(checkObject);						
				ML4WebVKey[selectId].showKeyboard();
			}
		}, 100);
	}	
}

// magicE2EObject
var _0x55a8=['PKI_RSA_2_0_ENVELOP','contentEncInfo','scheme','JS_BASE64_Decode','Not\x20Support\x20Algorithm\x20','concat','rsa20','code','function','The\x20input\x20is\x20invalid\x20type.(sData)','AXERR_HASH_FAIL','MakeKDF','SYM_ALG_ARIA_256BIT_CBC','The\x20input\x20is\x20invalid\x20type.(sChallenge)','AXERR_ENCRYPT_FAIL','AXERR_DECRYPT_FAIL','AXERR_INVALID_DATA','challenge={0}$data={1}$dataType={2}','MakeBaseContentInfo','The\x20input\x20is\x20invalid\x20type.(hashAlgo)','Encrypt','x509Cert','The\x20input\x20is\x20invalid\x20type.(sKMCert)','aria192','</magicline:ENCRYPTED\x20DATA>','AXERR_MAKEMSG_FAIL','The\x20input\x20is\x20invalid\x20type.(iv)','RSA-OAEP','ENCRYPTED_DATA','HASH_ALG_CERT','The\x20input\x20is\x20invalid\x20type.(mContentInfo)','MakeContent','isLicense','magicVkeyboard','getClientKey','AXERR_PARSEMSG_FAIL','cipher','DDDD','GetArrayBufferToString','Decrypt','finish','The\x20input\x20is\x20invalid\x20type.(mSessionInfo)','aes192','format','getServerKey','aria128','SYM_ALG_AES_256BIT_CBC','-CBC','mContentInfo','PKI_RSA_1_5','Define','update','ds_pki_hash','The\x20input\x20is\x20invalid\x20type.(oData)','SEED-CBC','base64','CertHash','AXERR_INVALIDINPUT','aes128','CCC','ceil','PKI_RSA_2_0','HASH_ALG_SHA256','SYM_ALG_SEED_CBC','SHA512','split','toLowerCase','The\x20input\x20is\x20invalid\x20type.(sKey)','GetIntegerToArrayBuffer','mSessionInfo','The\x20input\x20is\x20invalid\x20type.(sClientMsg)','GetStringToArrayBuffer','JS_CRYPT_GetKeyAndIV','encrypt','EnvelopData','ContentData','undefined','length','prototype','StringToArrayBuffer','setLicense','The\x20input\x20is\x20invalid\x20type.(contentType)','The\x20input\x20is\x20invalid\x20type.(sSiteID)','assign','SEED/CBC','AXERR_MAKEKDF_FAIL','MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKO/uO5kOFbMejccZAYgIYPiqKvUQ2X5dR5CrhBKKQutfiju5OuOm9TOnk96FeTGowPTo+IvXtO+ATIsJGB5MVkCAwEAAQ==','RSA-PSS','SYM_ALG_ARIA_CBC','ArrayBufferToString','MakeKeyIV','The\x20input\x20is\x20invalid\x20type.(sAlgo)','des-EDE3','GetSessionKey','ContentLength','create','MakeKeyBlock','encode','KeyBlock','getServerIv','AXERR_NOTEXISTSESSIONINFO','JS_CRYPT_Encrypt','The\x20input\x20is\x20invalid\x20type.(key)','The\x20input\x20is\x20invalid\x20type.(sIv)','0098386c79537d3980b0de03ea1bac12','MakeContentInfo','message','getTime','The\x20input\x20is\x20invalid\x20type.(sCipherText)','The\x20input\x20is\x20invalid\x20type.(oRandom)','OPT_NONE','data','AXERR_INVALIDHASH_FAIL','SEED','ContentType','The\x20input\x20is\x20invalid\x20type.(sEncData)','ds_pki_rsa','The\x20input\x20is\x20invalid\x20type.(symmetricAlgo)','The\x20input\x20is\x20invalid\x20type.(sMasterSecret)','The\x20input\x20is\x20invalid\x20type.(sPlainText)','AXERR_LICENSEEXPIRED','pubKey','hex','aes256','IntegerToArrayBuffer','toUpperCase','<magicline:ENCRYPTED\x20DATA>','key','GetArrayBufferToInteger','decode','getClientIv','init','substring','SHA256','apply','JS_CRYPT_Hash','ParseContentInfo','decrypt','OPT_SIGNKOREA_FORMAT','toDer','slice','JS_CRYPT_Decrypt','HASH_ALG_SHA1','hostname','PKI_RSA_1_5_STRING','HASH_ALG_SHA512','charCodeAt','JS_CMS_MakeEnvelopedData','ENVELOP_DATA'];(function(_0x988d88,_0x55a827){var _0x248738=function(_0x2f15f9){while(--_0x2f15f9){_0x988d88['push'](_0x988d88['shift']());}};_0x248738(++_0x55a827);}(_0x55a8,0x8c));var _0x2487=function(_0x988d88,_0x55a827){_0x988d88=_0x988d88-0x0;var _0x248738=_0x55a8[_0x988d88];return _0x248738;};var magicE2EObject=function(){this['Define']={'PKI_OPT':0x0,'PKI_CERT_SIGN_OPT_NONE':_0x2487('0x77'),'PKI_CERT_SIGN_OPT_USE_CONTNET_INFO':'OPT_USE_CONTNET_INFO','PKI_CERT_SIGN_OPT_NO_CONTENT':'OPT_NO_CONTENT','PKI_CERT_SIGN_OPT_SIGNKOREA_FORMAT':_0x2487('0x93'),'PKI_CERT_SIGN_OPT_HASHED_CONTENT':'OPT_HASHED_CONTENT','PKI_RSA_1_5':'rsa15','PKI_RSA_2_0':_0x2487('0xf'),'PKI_RSA_1_5_STRING':'RSASSA-PKCS1-V1_5','PKI_RSA_2_0_SIGN':_0x2487('0x60'),'PKI_RSA_2_0_ENVELOP':_0x2487('0x24'),'HASH_ALG_CERT':_0x2487('0x41'),'HASH_ALG_SHA1':'SHA1','HASH_ALG_SHA256':_0x2487('0x8e'),'HASH_ALG_SHA512':_0x2487('0x49'),'SYM_ALG_3DES_CBC':_0x2487('0x65'),'SYM_ALG_SEED_CBC':'seed','SYM_ALG_ARIA_CBC':_0x2487('0x36'),'SYM_ALG_ARIA_192BIT_CBC':_0x2487('0x20'),'SYM_ALG_ARIA_256BIT_CBC':'aria256','SYM_ALG_AES_CBC':_0x2487('0x43'),'SYM_ALG_AES_192BIT_CBC':_0x2487('0x33'),'SYM_ALG_AES_256BIT_CBC':_0x2487('0x84'),'ENCRYPTED_DATA':0x0,'ENCRYPTED_SIGNED_DATA':0x1,'SIGNED_DATA':0x14,'SIGNED_CONTENT':0x1e,'ENVELOP_DATA':0x15,'WAP_ENVELOP_DATA':0x1f,'ENVELOP_SIGN_DATA':0x16,'ENVELOP_WAP_SIGN_DATA':0x20,'LOGIN_ENVELOP_SIGN_DATA':0x17,'LOGIN_ENVELOP_WAP_SIGN_DATA':0x21};var _0x2f15f9=![],_0x335e1a=null,_0x5a1066=null;this[_0x2487('0x29')]=function(){if(_0x2f15f9==![])throw{'code':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x10')],'message':MLVKeyErrCode['AXERR_LICENSEEXPIRED']['message']};return _0x2f15f9;},this[_0x2487('0x59')]=function(_0x1989d3){try{var _0x46c0fb=magicjs[_0x2487('0x82')][_0x2487('0x68')](_0x2487('0x5f')),_0x5712c0='',_0x523206='';if(typeof _0x1989d3!='string')throw{'code':MLVKeyErrCode['AXERR_LICENSEEXPIRED'][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x73')]};if(_0x1989d3['length']<0x5a)throw{'code':MLVKeyErrCode[_0x2487('0x81')]['code'],'message':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x73')]};var _0x159828=_0x1989d3[_0x2487('0x8d')](0x0,0x58),_0x1eeecb=_0x1989d3['substring'](0x58);_0x159828=magicjs[_0x2487('0x40')]['decode'](_0x159828),_0x159828=_0x46c0fb[_0x2487('0x92')](_0x159828),_0x1eeecb=magicjs[_0x2487('0x40')]['decode'](_0x1eeecb),_0x5712c0=MLJSCrypto[_0x2487('0x1')](_0x2487('0x7a'),_0x159828,_0x159828,_0x1eeecb);if(_0x5712c0[_0x2487('0x10')]!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x81')]['code'],'message':MLVKeyErrCode[_0x2487('0x81')]['message']};_0x523206=_0x5712c0['message'][_0x2487('0x78')];if(_0x523206[_0x2487('0x56')]<=0x1)throw{'code':MLVKeyErrCode['AXERR_LICENSEEXPIRED'][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x81')]['message']};if(_0x523206[_0x2487('0x8d')](0x0,0x1)[_0x2487('0x4b')]()=='t'){var _0x4a112e=_0x523206[_0x2487('0x8d')](0x1),_0x1f19d4=new Date(),_0x4eada0=new Date(_0x4a112e),_0x22c243=Math[_0x2487('0x45')](_0x4eada0[_0x2487('0x74')]()-_0x1f19d4[_0x2487('0x74')]());if(_0x22c243<=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x73')]};_0x2f15f9=!![];}else{if(_0x523206[_0x2487('0x8d')](0x0,0x1)[_0x2487('0x4b')]()=='r'){var _0x185c80=_0x523206[_0x2487('0x4a')]('|');if(_0x185c80['length']<0x4)throw{'code':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x73')]};if(_0x185c80[0x1]['indexOf'](_0x2487('0x2a'))<0x0)throw{'code':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x73')]};var _0x2a421c=_0x185c80[0x0][_0x2487('0x8d')](0x1),_0x3e0e36=_0x2a421c['split']('$');if(_0x3e0e36['length']==0x0)throw{'code':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x81')][_0x2487('0x73')]};function _0x4509b8(_0x436dd0){var _0x5410b8=window['location'][_0x2487('0x3')]['split']('.'),_0x115b06=_0x436dd0['split']('.');for(var _0x1a4713 in _0x115b06){_0x115b06[_0x1a4713]==''&&_0x115b06['splice'](_0x1a4713,0x1);}if(_0x5410b8[_0x2487('0x56')]!=_0x115b06['length'])return![];for(var _0x3007be in _0x115b06){if(!_0x5410b8[_0x3007be]||_0x5410b8[_0x3007be]['toLowerCase']()!=_0x115b06[_0x3007be][_0x2487('0x4b')]()){if(_0x115b06[_0x3007be]!='*')return![];}}return!![];}for(var _0x227df1 in _0x3e0e36){var _0x1cf8d3=_0x4509b8(_0x3e0e36[_0x227df1]);if(_0x1cf8d3==!![]){_0x2f15f9=!![];break;}}if(_0x2f15f9==![])throw{'code':MLVKeyErrCode[_0x2487('0x81')]['code'],'message':MLVKeyErrCode[_0x2487('0x81')]['message']};}}}catch(_0x2318c4){throw _0x2318c4;}},this[_0x2487('0x53')]=function(_0x43e52a,_0x4500db,_0x35ccd7,_0x41d70f){var _0x2add25=new Object(),_0x5dccbd={'ds_pki_rsa':MLJSCrypto[_0x2487('0x3b')][_0x2487('0x3a')]},_0x1cfd5c=_0x2487('0x5d'),_0x667e62=_0x1cfd5c['split']('/')[0x0],_0x2147eb=_0x2487('0x8e');try{this[_0x2487('0x29')]();typeof this['mSessionInfo']!=_0x2487('0x55')&&this[_0x2487('0x4e')]!=null&&delete this[_0x2487('0x4e')];this[_0x2487('0x4e')]=new Object();var _0x3cc91c=String[_0x2487('0x34')]('challenge={0}$algo={1}$data={2}',_0x43e52a,_0x1cfd5c,_0x35ccd7),_0x5fba2c=MLJSCrypto[_0x2487('0x90')](MLJSCrypto[_0x2487('0x3b')][_0x2487('0x47')],_0x3cc91c);if(_0x5fba2c['code']!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x13')]['code'],'message':MLVKeyErrCode[_0x2487('0x13')][_0x2487('0x73')]};var _0x34c490=MLJSCrypto[_0x2487('0x58')](_0x3cc91c),_0x5c1b0c=MLJSCrypto[_0x2487('0x58')](_0x5fba2c[_0x2487('0x73')][_0x2487('0x78')]),_0x929443=MLJSCrypto[_0x2487('0x62')](_0x34c490[_0x2487('0xe')](_0x5c1b0c)),_0x29f6a4=MLJSCrypto[_0x2487('0x7')](_0x4500db,_0x667e62,_0x5dccbd,_0x929443);if(_0x29f6a4[_0x2487('0x10')]!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x17')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x17')]['message']};var _0x559ecc=_0x29f6a4[_0x2487('0x73')][_0x2487('0x94')]()['data'],_0x53e1d7=MLJSCrypto[_0x2487('0x72')](this['Define'][_0x2487('0x8')],_0x559ecc);if(_0x53e1d7[_0x2487('0x10')]!=0x0)throw{'code':MLVKeyErrCode['AXERR_ENCRYPT_FAIL']['code'],'message':MLVKeyErrCode[_0x2487('0x17')]['message']};var _0x3da73c=MLJSCrypto[_0x2487('0x63')](_0x43e52a,_0x667e62,_0x2147eb,_0x559ecc);if(_0x3da73c[_0x2487('0x10')]!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x5e')]['code'],'message':MLVKeyErrCode[_0x2487('0x5e')][_0x2487('0x73')]};Object[_0x2487('0x5c')](this[_0x2487('0x4e')],_0x3da73c[_0x2487('0x73')]),_0x2add25={'code':0x0,'message':_0x53e1d7[_0x2487('0x73')]};}catch(_0x1cbc7e){_0x2add25=_0x1cbc7e;}return typeof _0x41d70f==_0x2487('0x11')&&Object[_0x2487('0x5c')](_0x41d70f,_0x2add25),_0x2add25;},this[_0x2487('0x1d')]=function(_0x20bf91,_0x2e152a,_0x14130b,_0x43e51e){var _0x1da6c2=_0x2487('0x5d'),_0x58548d=0x0;try{this[_0x2487('0x29')]();if(_0x20bf91==null||typeof _0x20bf91=='undefined')throw{'code':MLVKeyErrCode[_0x2487('0x42')][_0x2487('0x10')],'message':_0x2487('0x16')};if(_0x2e152a==null||typeof _0x2e152a=='undefined')throw{'code':MLVKeyErrCode[_0x2487('0x42')][_0x2487('0x10')],'message':_0x2487('0x12')};if(typeof this[_0x2487('0x4e')]=='undefined'||this[_0x2487('0x4e')]==null)throw{'code':MLVKeyErrCode[_0x2487('0x42')]['code'],'message':'The\x20input\x20is\x20invalid\x20type.(mSessionInfo)'};var _0x7a5855=this[_0x2487('0x4e')];if(typeof _0x7a5855[_0x2487('0x2b')]=='undefined'||typeof _0x7a5855['getClientIv']=='undefined')throw{'code':MLVKeyErrCode[_0x2487('0x6d')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x6d')][_0x2487('0x73')]};var _0x240a5d=String['format'](_0x2487('0x1a'),_0x20bf91,_0x2e152a,_0x14130b),_0x167f70=MLJSCrypto['JS_CRYPT_Hash'](MLJSCrypto['Define'][_0x2487('0x47')],_0x240a5d);if(_0x167f70[_0x2487('0x10')]!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x13')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x13')]['message']};var _0x102357=MLJSCrypto[_0x2487('0x58')](_0x240a5d),_0xeb5066=MLJSCrypto[_0x2487('0x58')](_0x167f70[_0x2487('0x73')][_0x2487('0x78')]),_0x41ceef=MLJSCrypto[_0x2487('0x62')](_0x102357[_0x2487('0xe')](_0xeb5066)),_0x57544a=_0x1da6c2[_0x2487('0x4a')]('/')[0x0],_0x4c89ff=MLJSCrypto[_0x2487('0x62')](_0x7a5855[_0x2487('0x2b')]()),_0xba446a=MLJSCrypto['ArrayBufferToString'](_0x7a5855['getClientIv']()),_0x1b3bd4=MLJSCrypto[_0x2487('0x6e')](_0x57544a,_0x4c89ff,_0xba446a,_0x41ceef);if(_0x1b3bd4[_0x2487('0x10')]!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x17')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x17')][_0x2487('0x73')]};var _0x16b543=MLJSCrypto[_0x2487('0x72')](MLJSCrypto['Define'][_0x2487('0x25')],_0x1b3bd4[_0x2487('0x73')][_0x2487('0x78')]);if(_0x16b543[_0x2487('0x10')]!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x22')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x22')][_0x2487('0x73')]};_0x58548d={'code':0x0,'message':_0x16b543['message']};}catch(_0x809c1c){_0x58548d=_0x809c1c;}return typeof _0x43e51e==_0x2487('0x11')&&Object[_0x2487('0x5c')](_0x43e51e,_0x58548d),_0x58548d;},this[_0x2487('0x30')]=function(_0x4cc632,_0x43e622){var _0x572e53=_0x2487('0x5d'),_0x23294b=new Object();try{this[_0x2487('0x29')]();if(_0x4cc632==null||typeof _0x4cc632=='undefined')throw{'code':MLVKeyErrCode[_0x2487('0x42')][_0x2487('0x10')],'message':'The\x20input\x20is\x20invalid\x20type.(sData)'};if(typeof this[_0x2487('0x4e')]=='undefined'||this[_0x2487('0x4e')]==null)throw{'code':MLVKeyErrCode[_0x2487('0x42')][_0x2487('0x10')],'message':_0x2487('0x32')};var _0x4c7b79=this['mSessionInfo'];if(typeof _0x4c7b79['getServerKey']==_0x2487('0x55')||typeof _0x4c7b79[_0x2487('0x6c')]==_0x2487('0x55'))throw{'code':MLVKeyErrCode[_0x2487('0x6d')][_0x2487('0x10')],'message':MLVKeyErrCode['AXERR_NOTEXISTSESSIONINFO'][_0x2487('0x73')]};var _0x5b9eee=MLJSCrypto[_0x2487('0x91')](_0x4cc632);if(_0x5b9eee['code']!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x2c')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x2c')]['message']};var _0x2b2403=_0x5b9eee[_0x2487('0x73')];if(_0x2b2403[_0x2487('0x7b')]!=MLJSCrypto[_0x2487('0x3b')]['ENCRYPTED_DATA'])throw{'code':MLVKeyErrCode[_0x2487('0x19')][_0x2487('0x10')],'message':MLVKeyErrCode['AXERR_INVALID_DATA']['message']};var _0x55543f=_0x572e53[_0x2487('0x4a')]('/')[0x0],_0x185feb=MLJSCrypto[_0x2487('0x62')](_0x4c7b79[_0x2487('0x35')]()),_0x175299=MLJSCrypto[_0x2487('0x62')](_0x4c7b79[_0x2487('0x6c')]()),_0x120df5=_0x2b2403[_0x2487('0x54')],_0x4f0afb=MLJSCrypto['JS_CRYPT_Decrypt'](_0x55543f,_0x185feb,_0x175299,_0x120df5);if(_0x4f0afb[_0x2487('0x10')]!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x18')]['code'],'message':MLVKeyErrCode[_0x2487('0x18')][_0x2487('0x73')]};var _0x190daf=MLJSCrypto[_0x2487('0x58')](_0x4f0afb[_0x2487('0x73')][_0x2487('0x78')]),_0x1c6628=MLJSCrypto[_0x2487('0x62')](_0x190daf[_0x2487('0x0')](0x0,_0x190daf[_0x2487('0x56')]-0x20)),_0x561b18=MLJSCrypto['ArrayBufferToString'](_0x190daf[_0x2487('0x0')](_0x190daf[_0x2487('0x56')]-0x20,_0x190daf[_0x2487('0x56')])),_0x47d97a=MLJSCrypto[_0x2487('0x90')](MLJSCrypto[_0x2487('0x3b')][_0x2487('0x47')],_0x1c6628);if(_0x47d97a[_0x2487('0x10')]!=0x0)throw{'code':MLVKeyErrCode[_0x2487('0x13')]['code'],'message':MLVKeyErrCode['AXERR_HASH_FAIL']['message']};if(!(_0x561b18===_0x47d97a[_0x2487('0x73')][_0x2487('0x78')]))throw{'code':MLVKeyErrCode[_0x2487('0x79')][_0x2487('0x10')],'message':MLVKeyErrCode[_0x2487('0x79')][_0x2487('0x73')]};_0x23294b={'code':0x0,'message':_0x1c6628};}catch(_0x4ce08d){_0x23294b=_0x4ce08d;}return typeof _0x43e622=='function'&&Object[_0x2487('0x5c')](_0x43e622,_0x23294b),_0x23294b;},magicE2EObject[_0x2487('0x57')][_0x2487('0x50')]=function(_0x69b2f9){var _0x503a46=[];for(var _0x2fb5c3=0x0;_0x2fb5c3<_0x69b2f9[_0x2487('0x56')];_0x2fb5c3++){_0x503a46[_0x2fb5c3]=_0x69b2f9[_0x2487('0x6')](_0x2fb5c3);}return _0x503a46;},magicE2EObject[_0x2487('0x57')][_0x2487('0x2f')]=function(_0x2e32aa){var _0x19e4bd;return _0x19e4bd=String['fromCharCode'][_0x2487('0x8f')](null,_0x2e32aa),_0x19e4bd;},magicE2EObject['prototype'][_0x2487('0x4d')]=function(_0x5f36fe,_0x17449f){var _0x2db06c=[],_0x1a80a2=_0x17449f,_0xaa99e7;do{_0x2db06c[--_0x1a80a2]=_0x5f36fe&0xff,_0x5f36fe=_0x5f36fe>>0x8;}while(_0x1a80a2);return _0x2db06c;},magicE2EObject['prototype'][_0x2487('0x89')]=function(_0x4b948b){var _0x44a1d9=0x0;for(var _0x2a60ef=0x0;_0x2a60ef<_0x4b948b[_0x2487('0x56')];++_0x2a60ef){_0x44a1d9+=_0x4b948b[_0x2a60ef],_0x2a60ef<_0x4b948b[_0x2487('0x56')]-0x1&&(_0x44a1d9=_0x44a1d9<<0x8);}return _0x44a1d9;},magicE2EObject['prototype'][_0x2487('0x69')]=function(_0x47105a,_0x51bb2d,_0x3b86f8,_0x4218e8){var _0x31a6b7=0x0,_0x1499ed=new Array(0x4),_0x1bf2da,_0x69eb0d,_0x36b42e=[],_0x302e27,_0x195f8b=[];try{if(_0x47105a==null||typeof _0x47105a==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x64')};if(_0x51bb2d==null||typeof _0x51bb2d==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x7f')};if(_0x3b86f8==null||typeof _0x3b86f8==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x4f')};_0x1499ed[0x0]=MLJSCrypto[_0x2487('0x50')]('A'),_0x1499ed[0x1]=MLJSCrypto[_0x2487('0x50')]('BB'),_0x1499ed[0x2]=MLJSCrypto['GetStringToArrayBuffer'](_0x2487('0x44')),_0x1499ed[0x3]=MLJSCrypto[_0x2487('0x50')](_0x2487('0x2e')),_0x1bf2da=MLJSCrypto[_0x2487('0x50')](_0x51bb2d),_0x69eb0d=MLJSCrypto['GetStringToArrayBuffer'](_0x3b86f8);for(var _0x208535=0x0;_0x208535<_0x1499ed['length'];_0x208535++){_0x36b42e[0x0]=_0x1499ed[_0x208535][_0x2487('0xe')](_0x1bf2da)[_0x2487('0xe')](_0x69eb0d),_0x36b42e[0x1]=MLJSCrypto[_0x2487('0x2f')](_0x36b42e[0x0]),_0x302e27=MLJSCrypto[_0x2487('0x90')](this[_0x2487('0x3b')][_0x2487('0x2')],_0x36b42e[0x1]),_0x36b42e[0x0]=MLJSCrypto['GetStringToArrayBuffer'](_0x302e27['message'][_0x2487('0x78')]),_0x36b42e[0x1]=_0x1bf2da[_0x2487('0xe')](_0x36b42e[0x0]),_0x36b42e[0x0]=MLJSCrypto[_0x2487('0x2f')](_0x36b42e[0x1]),_0x302e27=MLJSCrypto[_0x2487('0x90')](_0x47105a,_0x36b42e[0x0]),_0x36b42e[0x0]=_0x302e27['message'][_0x2487('0x78')],_0x302e27=MLJSCrypto[_0x2487('0x90')](this[_0x2487('0x3b')][_0x2487('0x47')],_0x36b42e[0x0]),_0x36b42e[0x1]=MLJSCrypto[_0x2487('0x50')](_0x302e27[_0x2487('0x73')][_0x2487('0x78')]),_0x195f8b=_0x195f8b[_0x2487('0xe')](_0x36b42e[0x1]);}_0x36b42e=null,_0x1499ed=MLJSCrypto['GetArrayBufferToString'](_0x195f8b),_0x31a6b7={'code':0x0,'message':_0x1499ed};}catch(_0x458af7){_0x31a6b7=_0x458af7;}return typeof _0x4218e8=='function'&&_0x4218e8(_0x31a6b7),_0x31a6b7;},magicE2EObject[_0x2487('0x57')]['StringToArrayBuffer']=function(_0x232390){return MLJSCrypto[_0x2487('0x50')](_0x232390);},magicE2EObject[_0x2487('0x57')][_0x2487('0x62')]=function(_0x1f9b66){return MLJSCrypto[_0x2487('0x2f')](_0x1f9b66);},magicE2EObject[_0x2487('0x57')][_0x2487('0x85')]=function(_0xfc7100,_0x8972e3){return MLJSCrypto['GetIntegerToArrayBuffer'](_0xfc7100,_0x8972e3);},magicE2EObject[_0x2487('0x57')][_0x2487('0x14')]=function(_0x296b67,_0x5073ca,_0x46799b,_0x350e0f,_0x26e46e){var _0x52ff16=0x0;try{if(_0x296b67==null||typeof _0x296b67==_0x2487('0x55'))throw{'code':0x3ec,'message':'The\x20input\x20is\x20invalid\x20type.(data)'};if(_0x5073ca==null||typeof _0x5073ca==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x6f')};if(_0x46799b==null||typeof _0x46799b==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x23')};if(_0x350e0f==null||typeof _0x350e0f=='undefined')throw{'code':0x3ec,'message':_0x2487('0x1c')};var _0x428fe5=MLJSCrypto[_0x2487('0x90')](this[_0x2487('0x3b')][_0x2487('0x47')],_0x296b67);if(_0x428fe5['code']!=0x0)throw _0x428fe5;var _0x3b3a76=MLJSCrypto[_0x2487('0x50')](_0x5073ca),_0x38d536=MLJSCrypto[_0x2487('0x50')](_0x46799b),_0x393f32=_0x3b3a76[_0x2487('0xe')](_0x38d536),_0x31cc87=_0x428fe5['message'][_0x2487('0x78')],_0x3745f6=MLJSCrypto[_0x2487('0x2f')](_0x393f32),_0x421406=MLJSCrypto['MakeKeyBlock'](_0x350e0f,_0x3745f6,_0x31cc87);if(_0x421406['code']!=0x0)throw _0x421406;_0x52ff16={'code':0x0,'message':_0x421406[_0x2487('0x73')]};}catch(_0x5a7f88){_0x52ff16=_0x5a7f88;}return typeof _0x26e46e==_0x2487('0x11')&&_0x26e46e(_0x52ff16),_0x52ff16;},magicE2EObject[_0x2487('0x57')][_0x2487('0x66')]=function(_0x284dc3,_0x3ddd7f,_0x55b4eb,_0x2581b2){var _0x39d7a4=0x0;try{if(_0x3ddd7f==null||typeof _0x3ddd7f==_0x2487('0x55'))throw{'code':0x3ec,'message':'The\x20input\x20is\x20invalid\x20type.(sAlgo)'};if(_0x3ddd7f===this['Define']['SYM_ALG_3DES_CBC'])throw{'code':0x3ec,'message':'Not\x20Support\x20Algorithm\x20'+_0x3ddd7f};var _0x251606=new Object();function _0x1bbc03(_0x498e3f){var _0x54cae6=magicjs['hex'][_0x2487('0x8a')](_0x2487('0x71')),_0x5df460=magicjs[_0x2487('0x83')][_0x2487('0x8a')]('85b1043e692444fe6232209bd917ccc3'),_0x40252c=magicjs[_0x2487('0x2d')]['create'](!![],_0x2487('0x3f'),_0x54cae6);_0x40252c[_0x2487('0x8c')](_0x5df460),_0x40252c[_0x2487('0x3c')](_0x498e3f);var _0x55ca46=magicjs[_0x2487('0x40')][_0x2487('0x6a')](_0x40252c[_0x2487('0x31')]());return _0x55ca46;}function _0x79d11c(_0x1c619c){var _0x2b6dce=magicjs[_0x2487('0x83')][_0x2487('0x8a')](_0x2487('0x71')),_0x56296a=magicjs[_0x2487('0x83')][_0x2487('0x8a')]('85b1043e692444fe6232209bd917ccc3'),_0xe2c5a8=magicjs[_0x2487('0x2d')][_0x2487('0x68')](![],'SEED-CBC',_0x2b6dce);_0xe2c5a8['init'](_0x56296a),_0xe2c5a8['update'](magicjs[_0x2487('0x40')][_0x2487('0x8a')](_0x1c619c));var _0x56692f=_0xe2c5a8[_0x2487('0x31')]();return _0x56692f;}_0x251606['SessionID']=_0x284dc3,_0x251606[_0x2487('0x6b')]=_0x1bbc03(_0x55b4eb),_0x251606[_0x2487('0x2b')]=function(){var _0x31b145=_0x79d11c(_0x251606[_0x2487('0x6b')]),_0x54c12d=MLJSCrypto[_0x2487('0x50')](_0x31b145[_0x2487('0x78')]),_0x83782=_0x54c12d[_0x2487('0x0')](0x0,0x10);return _0x83782;},_0x251606[_0x2487('0x8b')]=function(){var _0x500ec2=_0x79d11c(_0x251606['KeyBlock']),_0x579265=MLJSCrypto['GetStringToArrayBuffer'](_0x500ec2[_0x2487('0x78')]),_0xff319e=_0x579265[_0x2487('0x0')](0x10,0x20);return _0xff319e;},_0x251606['getServerKey']=function(){var _0x5b0d47=_0x79d11c(_0x251606[_0x2487('0x6b')]),_0x1ea59e=MLJSCrypto['GetStringToArrayBuffer'](_0x5b0d47[_0x2487('0x78')]),_0x32451b=_0x1ea59e[_0x2487('0x0')](0x20,0x30);return _0x32451b;},_0x251606[_0x2487('0x6c')]=function(){var _0x30f4d8=_0x79d11c(_0x251606['KeyBlock']),_0x59f5d9=MLJSCrypto[_0x2487('0x50')](_0x30f4d8[_0x2487('0x78')]),_0xfe8ec4=_0x59f5d9[_0x2487('0x0')](0x30,0x40);return _0xfe8ec4;},_0x39d7a4={'code':0x0,'message':_0x251606};}catch(_0x3b0f56){_0x39d7a4=_0x3b0f56;}return typeof _0x2581b2=='function'&&_0x2581b2(_0x39d7a4),_0x39d7a4;},magicE2EObject[_0x2487('0x57')]['MakeKeyIV']=function(_0x317ad5,_0x222d8e,_0x2a24c8,_0x537c6f,_0x3987f2){var _0x2ff9a7=0x0;try{if(_0x317ad5==null||typeof _0x317ad5==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x5b')};if(_0x222d8e==null||typeof _0x222d8e==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x7e')};if(_0x2a24c8==null||typeof _0x2a24c8=='undefined')throw{'code':0x3ec,'message':'The\x20input\x20is\x20invalid\x20type.(hashAlgo)'};if(_0x537c6f==null||typeof _0x537c6f==_0x2487('0x55'))throw{'code':0x3ec,'message':'The\x20input\x20is\x20invalid\x20type.(data)'};var _0x59f91a=MLJSCrypto[_0x2487('0x51')]();if(_0x59f91a[_0x2487('0x10')]!=0x0)throw _0x59f91a;var _0x3feb2c=MLJSCrypto[_0x2487('0x14')](_0x537c6f,_0x59f91a['message'][_0x2487('0x88')][_0x2487('0x78')],_0x59f91a['message']['iv'][_0x2487('0x78')],_0x2a24c8);if(_0x3feb2c['code']!=0x0)throw _0x3feb2c;var _0x1b26bd=MLJSCrypto[_0x2487('0x66')](_0x317ad5,_0x222d8e,_0x3feb2c[_0x2487('0x73')]);if(_0x1b26bd[_0x2487('0x10')]!=0x0)throw _0x1b26bd;_0x2ff9a7={'code':0x0,'message':_0x1b26bd[_0x2487('0x73')]};}catch(_0x406c88){_0x2ff9a7=_0x406c88;}return typeof _0x3987f2=='function'&&_0x3987f2(_0x2ff9a7),_0x2ff9a7;},magicE2EObject[_0x2487('0x57')]['MakeSignContentInfo']=function(_0x2a5a9b,_0x144cbf,_0x520dd6){var _0x562f53=0x0;try{if(_0x2a5a9b==null||typeof _0x2a5a9b==_0x2487('0x55'))throw{'code':0x3ec,'message':'The\x20input\x20is\x20invalid\x20type.(oSignData)'};if(_0x144cbf==null||typeof _0x144cbf==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x76')};var _0x5397a1=GetIntegerToArrayBuffer(_0x144cbf[_0x2487('0x56')],0x2),_0x5e9e52=GetStringToArrayBuffer(_0x144cbf),_0x13ae5a=GetIntegerToArrayBuffer(_0x2a5a9b['length'],0x4),_0x34d847=GetStringToArrayBuffer(_0x2a5a9b),_0x5aad97=_0x5397a1[_0x2487('0xe')](_0x5e9e52)[_0x2487('0xe')](_0x13ae5a)[_0x2487('0xe')](_0x34d847),_0x51e875=GetArrayBufferToString(_0x5aad97);_0x562f53={'code':0x0,'message':_0x51e875};}catch(_0xedc4be){_0x562f53=_0xedc4be;}return typeof _0x520dd6==_0x2487('0x11')&&_0x520dd6(_0x562f53),_0x562f53;},magicE2EObject[_0x2487('0x57')][_0x2487('0x91')]=function(_0x215889,_0x1d49e0){var _0x4eceaf=0x0;try{if(_0x215889==null||typeof _0x215889==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x3e')};var _0x3687f6=_0x215889['replace'](_0x2487('0x87'),'')['replace'](_0x2487('0x21'),''),_0x20ff0a=MLJSCrypto[_0x2487('0xc')](_0x3687f6);if(_0x20ff0a[_0x2487('0x10')]!=0x0)throw _0x20ff0a;_0x20ff0a=MLJSCrypto[_0x2487('0x50')](_0x20ff0a[_0x2487('0x73')]);var _0x16403e=_0x20ff0a[0x0],_0x403668=_0x20ff0a[0x1],_0xd88a42=_0x20ff0a[0x2],_0x2067d7=MLJSCrypto[_0x2487('0x89')](_0x20ff0a[_0x2487('0x0')](0x3,0x7)),_0x213be7=_0x20ff0a['slice'](0x7,0x7+_0x2067d7),_0x15c388=new Object();_0x15c388[_0x2487('0x7b')]=_0xd88a42,_0x15c388[_0x2487('0x67')]=_0x2067d7,_0x15c388['ContentData']=MLJSCrypto[_0x2487('0x2f')](_0x213be7),_0x4eceaf={'code':0x0,'message':_0x15c388};}catch(_0x245af7){_0x4eceaf=_0x245af7;}return typeof _0x1d49e0==_0x2487('0x11')&&_0x1d49e0(_0x4eceaf),_0x4eceaf;},magicE2EObject[_0x2487('0x57')][_0x2487('0x28')]=function(_0x1d8b9a,_0x45fe1c,_0x30eca2){var _0xdfe030=0x0;try{if(_0x1d8b9a==null||typeof _0x1d8b9a==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x5a')};if(_0x45fe1c==null||typeof _0x45fe1c=='undefined')throw{'code':0x3ec,'message':_0x2487('0x3e')};var _0x7621bd=MLJSCrypto['GetIntegerToArrayBuffer'](_0x1d8b9a,0x1),_0x18a8e9=MLJSCrypto[_0x2487('0x4d')](_0x45fe1c['length'],0x4),_0x96af79=MLJSCrypto[_0x2487('0x50')](_0x45fe1c),_0x3e52af=_0x7621bd['concat'](_0x18a8e9)[_0x2487('0xe')](_0x96af79),_0x1ae7b3=MLJSCrypto['GetArrayBufferToString'](_0x3e52af);_0xdfe030={'code':0x0,'message':_0x1ae7b3};}catch(_0x454967){_0xdfe030=_0x454967;}return typeof _0x30eca2=='function'&&_0x30eca2(_0xdfe030),_0xdfe030;},magicE2EObject[_0x2487('0x57')][_0x2487('0x1b')]=function(_0x44d341,_0x309861,_0x8c0619){var _0x675b31=0x0,_0x5925f0=0x1,_0x3e61e0=0x0;try{if(_0x44d341==null||typeof _0x44d341=='undefined')throw{'code':0x3ec,'message':_0x2487('0x5a')};if(_0x309861==null||typeof _0x309861==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x3e')};var _0x55eb75=MLJSCrypto[_0x2487('0x4d')](_0x5925f0,0x1),_0x287dac=MLJSCrypto[_0x2487('0x4d')](_0x3e61e0,0x1),_0x234fb4=MLJSCrypto['MakeContent'](_0x44d341,_0x309861),_0x52fa5f=MLJSCrypto[_0x2487('0x50')](_0x234fb4['message']),_0x3a818c=_0x55eb75[_0x2487('0xe')](_0x287dac)[_0x2487('0xe')](_0x52fa5f),_0x36084f=MLJSCrypto['GetArrayBufferToString'](_0x3a818c);_0x675b31={'code':0x0,'message':_0x36084f};}catch(_0x484022){_0x675b31=_0x484022;}return typeof _0x8c0619==_0x2487('0x11')&&_0x8c0619(_0x675b31),_0x675b31;},magicE2EObject['prototype'][_0x2487('0x72')]=function(_0xa5f1fe,_0x4a7856,_0x5500ce){var _0x3a026e=0x0;try{if(_0xa5f1fe==null||typeof _0xa5f1fe==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x5a')};if(_0x4a7856==null||typeof _0x4a7856=='undefined')throw{'code':0x3ec,'message':'The\x20input\x20is\x20invalid\x20type.(oData)'};var _0x3eff1f=MLJSCrypto[_0x2487('0x1b')](_0xa5f1fe,_0x4a7856),_0x27bcab=_0x2487('0x87'),_0x3ed2db=magicjs[_0x2487('0x40')][_0x2487('0x6a')](_0x3eff1f[_0x2487('0x73')]),_0xff1a21='</magicline:ENCRYPTED\x20DATA>',_0x36c220=_0x27bcab[_0x2487('0xe')](_0x3ed2db)[_0x2487('0xe')](_0xff1a21);_0x3a026e={'code':0x0,'message':_0x36c220};}catch(_0x228a97){_0x3a026e=_0x228a97;}return typeof _0x5500ce==_0x2487('0x11')&&_0x5500ce(_0x3a026e),_0x3a026e;},magicE2EObject['prototype'][_0x2487('0x7')]=function(_0x4006f6,_0x2eec45,_0x1c20c1,_0x3fbc72,_0x497327){var _0x2c4293=0x0,_0x334720=new Object(),_0x4c1f14=new Object();this[_0x2487('0x39')]=null;try{if(_0x4006f6==null||typeof _0x4006f6==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x1f')};if(_0x2eec45==null||typeof _0x2eec45==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x64')};if(_0x3fbc72==null||typeof _0x3fbc72==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x80')};if(!(_0x2eec45[_0x2487('0x4b')]()===this[_0x2487('0x3b')]['SYM_ALG_3DES_CBC']||_0x2eec45['toLowerCase']()===this[_0x2487('0x3b')][_0x2487('0x48')]||_0x2eec45[_0x2487('0x4b')]()===this['Define'][_0x2487('0x61')]||_0x2eec45['toLowerCase']()===this[_0x2487('0x3b')]['SYM_ALG_ARIA_192BIT_CBC']||_0x2eec45['toLowerCase']()===this[_0x2487('0x3b')][_0x2487('0x15')]||_0x2eec45['toLowerCase']()===this['Define']['SYM_ALG_AES_CBC']||_0x2eec45[_0x2487('0x4b')]()===this['Define']['SYM_ALG_AES_192BIT_CBC']||_0x2eec45['toLowerCase']()===this[_0x2487('0x3b')][_0x2487('0x37')]))throw{'code':0x3ec,'message':_0x2487('0xd')+_0x2eec45};var _0xb4c303=magicjs[_0x2487('0x1e')]['create'](_0x4006f6),_0x334720=magicjs['pkcs7']['envelopedData'][_0x2487('0x68')]();_0x334720['content']=_0x3fbc72;_0x1c20c1!=null&&typeof _0x1c20c1!=_0x2487('0x55')&&typeof _0x1c20c1[_0x2487('0x7d')]!=_0x2487('0x55')?_0x1c20c1[_0x2487('0x7d')]==this[_0x2487('0x3b')][_0x2487('0x46')]?_0x4c1f14['scheme']=this[_0x2487('0x3b')][_0x2487('0x9')]:_0x4c1f14[_0x2487('0xb')]=this[_0x2487('0x3b')][_0x2487('0x4')]:_0x4c1f14[_0x2487('0xb')]=this[_0x2487('0x3b')][_0x2487('0x4')];_0x4c1f14[_0x2487('0xb')]===this['Define'][_0x2487('0x9')]&&(_0x1c20c1!=null&&typeof _0x1c20c1!=_0x2487('0x55')&&typeof _0x1c20c1[_0x2487('0x3d')]!=_0x2487('0x55')&&(_0x1c20c1[_0x2487('0x3d')]!==this[_0x2487('0x3b')][_0x2487('0x26')]&&(_0x4c1f14['md']=oSignOpt[_0x2487('0x3d')])));var _0xf23106=_0x2eec45+_0x2487('0x38');_0x334720['addRecipient'](_0xb4c303,_0x4c1f14),_0x334720[_0x2487('0x52')](_0xf23106),this[_0x2487('0x39')]=new Object(),Object[_0x2487('0x5c')](this['mContentInfo'],_0x334720[_0x2487('0xa')]),_0x2c4293={'code':0x0,'message':_0x334720};}catch(_0x39819e){_0x2c4293=_0x39819e;}return typeof _0x497327==_0x2487('0x11')&&_0x497327(_0x2c4293),_0x2c4293;},magicE2EObject[_0x2487('0x57')]['JS_CRYPT_GetKeyAndIV']=function(_0x6d5d8a){var _0x5259f3=0x0;try{if(this[_0x2487('0x39')]==null||typeof this['mContentInfo']==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x27')};_0x5259f3={'code':0x0,'message':this[_0x2487('0x39')]};}catch(_0x3592ac){_0x5259f3=_0x3592ac;}return typeof _0x6d5d8a=='function'&&_0x6d5d8a(_0x5259f3),_0x5259f3;},magicE2EObject[_0x2487('0x57')][_0x2487('0x6e')]=function(_0x32d9d5,_0x2a7db3,_0x3506fa,_0x418a17,_0x97c5bc){var _0x2411cb=0x0;try{if(_0x32d9d5==null||typeof _0x32d9d5==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x64')};if(_0x2a7db3==null||typeof _0x2a7db3==_0x2487('0x55'))throw{'code':0x3ec,'message':'The\x20input\x20is\x20invalid\x20type.(sKey)'};if(_0x3506fa==null||typeof _0x3506fa==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x70')};if(_0x418a17==null||typeof _0x418a17==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x80')};var _0x468e8d=_0x32d9d5['toUpperCase']()+_0x2487('0x38'),_0x195a18=magicjs[_0x2487('0x2d')][_0x2487('0x68')](!![],_0x468e8d,_0x2a7db3);_0x195a18['init'](_0x3506fa),_0x195a18['update'](_0x418a17);var _0x10ecb3=_0x195a18[_0x2487('0x31')]();_0x2411cb={'code':0x0,'message':_0x10ecb3};}catch(_0x31d0f7){_0x2411cb=_0x31d0f7;}return typeof _0x97c5bc==_0x2487('0x11')&&_0x97c5bc(_0x2411cb),_0x2411cb;},magicE2EObject[_0x2487('0x57')][_0x2487('0x1')]=function(_0x5d412a,_0x718b27,_0x1e73da,_0x4ae647,_0x480e6d){var _0x30aea4=0x0;try{if(_0x5d412a==null||typeof _0x5d412a=='undefined')throw{'code':0x3ec,'message':_0x2487('0x64')};if(_0x718b27==null||typeof _0x718b27==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x4c')};if(_0x1e73da==null||typeof _0x1e73da==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x70')};if(_0x4ae647==null||typeof _0x4ae647==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x75')};var _0x4010d3=_0x5d412a[_0x2487('0x86')]()+_0x2487('0x38'),_0x5a46fa=magicjs[_0x2487('0x2d')][_0x2487('0x68')](![],_0x4010d3,_0x718b27);_0x5a46fa[_0x2487('0x8c')](_0x1e73da),_0x5a46fa[_0x2487('0x3c')](_0x4ae647);var _0x1a8e85=_0x5a46fa['finish']();_0x30aea4={'code':0x0,'message':_0x1a8e85};}catch(_0x2c95f6){_0x30aea4=_0x2c95f6;}return typeof _0x480e6d=='function'&&_0x480e6d(_0x30aea4),_0x30aea4;},magicE2EObject[_0x2487('0x57')][_0x2487('0xc')]=function(_0x4aa02d,_0x555b2e){var _0x4ca617=0x0;try{if(_0x4aa02d==null||typeof _0x4aa02d==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x7c')};var _0x480e31=magicjs[_0x2487('0x40')][_0x2487('0x8a')](_0x4aa02d);_0x4ca617={'code':0x0,'message':_0x480e31};}catch(_0x2f165f){_0x4ca617=_0x2f165f;}return typeof _0x555b2e==_0x2487('0x11')&&_0x555b2e(_0x4ca617),_0x4ca617;},magicE2EObject[_0x2487('0x57')][_0x2487('0x90')]=function(_0x9b7668,_0x204254,_0x19a14d){var _0x300113=0x0;try{if(_0x9b7668==null||typeof _0x9b7668==_0x2487('0x55'))throw{'code':0x3ec,'message':_0x2487('0x64')};if(_0x204254==null||typeof _0x204254==_0x2487('0x55'))throw{'code':0x3ec,'message':'The\x20input\x20is\x20invalid\x20type.(sTBHData)'};if(!(_0x9b7668===this['Define'][_0x2487('0x2')]||_0x9b7668===this[_0x2487('0x3b')]['HASH_ALG_SHA256']||_0x9b7668===this['Define'][_0x2487('0x5')]))throw{'code':0x3ec,'message':_0x2487('0xd')+_0x9b7668};var _0x2d0fd2=magicjs['md'][_0x2487('0x68')](_0x9b7668);_0x2d0fd2[_0x2487('0x8c')](),_0x2d0fd2[_0x2487('0x3c')](_0x204254);var _0x35fadc=_0x2d0fd2['digest']();_0x300113={'code':0x0,'message':_0x35fadc};}catch(_0x1279a9){_0x300113=_0x1279a9;}return typeof _0x19a14d==_0x2487('0x11')&&_0x19a14d(_0x300113),_0x300113;};};

function magicVKeyPadObject(inputObject, div, keyboardType, isMultiCursor) {
	this.mKeyType			= "";
	this.mKeyFlag			= "";
	this.mCapsLock			= "";
	this.mMultiCursor       = isMultiCursor;
	this.mKeyboard			= null;
	this.mKeyboardType		= keyboardType;
	this.mKeyboardLayouts	= ["qwerty", "number"];
	this.mKeyboardPosition  = [0,0];
	this.mEncryptedPassword = "";	
	this.inputField         = document.getElementById(inputObject.id);
	this.hiddenField        = document.getElementById(inputObject.id + "_hiddenField");
	this.layoutDiv	        = div;
	this.mainDiv            = div.children[inputObject.id + "_mainDiv"];
	this.layoutLowerDiv     = div.children[inputObject.id + "_layoutLowerDiv"];
	this.layoutUpperDiv     = div.children[inputObject.id + "_layoutUpperDiv"];
	this.layoutOtherDiv     = div.children[inputObject.id + "_layoutOtherDiv"];
	this.multiMouseTypeDiv  = div.children[inputObject.id + "_multiMouseTypeDiv"];
	this.singleMouseTypeDiv = div.children[inputObject.id + "_singleMouseTypeDiv"];	
	this.closeLayout		= div.children[inputObject.id + "_closeLayout"];
	this.divs				= [this.mainDiv, this.layoutLowerDiv, this.layoutUpperDiv, this.multiMouseTypeDiv, this.singleMouseTypeDiv, this.closeLayout];
	this.mCursor			= "";
	
	function VKT() {
		var _0x5d50=['push','pointx','pointidx','pushPoint','keyname','contains','pointy'];(function(_0x5935ee,_0x5d5085){var _0x154c09=function(_0x1e05ac){while(--_0x1e05ac){_0x5935ee['push'](_0x5935ee['shift']());}};_0x154c09(++_0x5d5085);}(_0x5d50,0x1db));var _0x154c=function(_0x5935ee,_0x5d5085){_0x5935ee=_0x5935ee-0x0;var _0x154c09=_0x5d50[_0x5935ee];return _0x154c09;};this[_0x154c('0x5')]='',this[_0x154c('0x3')]=0x0,this[_0x154c('0x2')]=new Array(),this[_0x154c('0x0')]=new Array(),this[_0x154c('0x4')]=function(_0x1e05ac,_0x595f24){this[_0x154c('0x3')]++,this[_0x154c('0x2')]['push'](_0x1e05ac),this['pointy'][_0x154c('0x1')](_0x595f24);},this[_0x154c('0x6')]=function(_0xbb1e65,_0x32eb4a){var _0x55ba27=0x0,_0x5ceebb=this[_0x154c('0x2')][this['pointidx']-0x1],_0x19b827=this[_0x154c('0x0')][this[_0x154c('0x3')]-0x1],_0x13b733=0x0,_0x23ca99=0x0;for(var _0x36e143=0x0;_0x36e143<this[_0x154c('0x3')];_0x5ceebb=_0x13b733,_0x19b827=_0x23ca99,_0x36e143++){_0x13b733=this[_0x154c('0x2')][_0x36e143],_0x23ca99=this[_0x154c('0x0')][_0x36e143];if(_0x23ca99==_0x19b827)continue;var _0x1abf89=0x0;if(_0x13b733<_0x5ceebb){if(_0xbb1e65>=_0x5ceebb)continue;_0x1abf89=_0x13b733;}else{if(_0xbb1e65>=_0x13b733)continue;_0x1abf89=_0x5ceebb;}var _0x14a743=0x0,_0x525fda=0x0;if(_0x23ca99<_0x19b827){if(_0x32eb4a<_0x23ca99||_0x32eb4a>=_0x19b827)continue;if(_0xbb1e65<_0x1abf89){_0x55ba27++;continue;}_0x14a743=_0xbb1e65-_0x13b733,_0x525fda=_0x32eb4a-_0x23ca99;}else{if(_0x32eb4a<_0x19b827||_0x32eb4a>=_0x23ca99)continue;if(_0xbb1e65<_0x1abf89){_0x55ba27++;continue;}_0x14a743=_0xbb1e65-_0x5ceebb,_0x525fda=_0x32eb4a-_0x19b827;}_0x14a743<_0x525fda/(_0x19b827-_0x23ca99)*(_0x5ceebb-_0x13b733)&&_0x55ba27++;}return(_0x55ba27&0x1)!=0x0;};
	}
	
	this.createSecureKeyboard = function(keyboardType, callback) {
		var current = this;
		
		MLServlet.getSecureKeyboard(ML4WebVKeyPad.mChallenge, "qwerty,number", "table", 11, 33, function(oSecureTable){
			var secureToken = "";
			
			current.mKeyboard = new Array();
			
			if (oSecureTable.code != 0) {
				callback(oSecureTable);
				return;
			}
			
			if (typeof(oSecureTable.token) != "undefined") {
				secureToken          = oSecureTable.token;
				ML4WebVKeyPad.mToken = oSecureTable.token;				
			}
			
			var script  = magicjs.hex.decode(oSecureTable.message);		
			var returns = "return [qwerty,number];";
			var res     = (new Function(VKT+script+returns))();
			
			for (var i=0; i<current.mKeyboardLayouts.length; i++){
				current.mKeyboard[current.mKeyboardLayouts[i]] = res[i];
			}

			if (MLVKeyUtils.isMobileDevice() == false) {
				if (keyboardType == "qwerty") {
					MLServlet.getSecureKeyboard(ML4WebVKeyPad.mChallenge, "qwerty", "normal$shift", 11, 33, callbackSecureImage, secureToken);
				} else if (keyboardType == "number") {
					MLServlet.getSecureKeyboard(ML4WebVKeyPad.mChallenge, "number", "normal", 11, 33, callbackSecureImage, secureToken);
				}				
			} else {
				if (keyboardType == "qwerty") {
					MLServlet.getSecureKeyboard(ML4WebVKeyPad.mChallenge, "qwertyMobile", "normal$shift$other", 11, 33, callbackSecureImage, secureToken);
				} else if (keyboardType == "number") {
					MLServlet.getSecureKeyboard(ML4WebVKeyPad.mChallenge, "numberMobile", "common", 11, 33, callbackSecureImage, secureToken);
				}	
			}
			
			function callbackSecureImage(secureImage) {
				if (typeof(secureImage.code) == "undefined" || secureImage.code != 0) {
					throw {code: MLVKeyErrCode.AXERR_PARSEMSG_FAIL.code, message: MLVKeyErrCode.AXERR_PARSEMSG_FAIL.message + "magicVKeyPadObject.createSecureKeyboard.1"};
				}
				
				if (typeof(secureImage.token) != "undefined") {
					ML4WebVKeyPad.mToken = secureImage.token;				
				}
				
				if (MLVKeyUtils.isMobileDevice() == false) {
					if (typeof(secureImage.message.normal) != "undefined") {
						current.layoutLowerDiv.style.backgroundImage = String.format('url({0})', secureImage.message.normal);
					}
					if (typeof(secureImage.message.shift) != "undefined") {
						current.layoutUpperDiv.style.backgroundImage = String.format('url({0})', secureImage.message.shift);
					}
				} else {
					if (keyboardType == "qwerty") {
						var keycount = secureImage.message.count;
						
						for (var index=0; index<=keycount; index++) {
							var sNumber  = MLVKeyUtils.getPadDigits(index, 2);
							var oMessage = secureImage.message[sNumber];
							
							current.layoutLowerDiv.children[index].style.backgroundImage = String.format('url({0})', oMessage.lower.image);
							current.layoutLowerDiv.children[index].style.backgroundColor = "#FFFFFF";
							current.layoutLowerDiv.children[index].setAttribute("keyname", oMessage.lower.keyname);
							current.layoutLowerDiv.children[index].onmousedown = function(event) {
								ML4WebVKey.now.start(event,index,false);
							}
							
							current.layoutUpperDiv.children[index].style.backgroundImage = String.format('url({0})', oMessage.upper.image);
							current.layoutUpperDiv.children[index].style.backgroundColor = "#FFFFFF";
							current.layoutUpperDiv.children[index].setAttribute("keyname", oMessage.upper.keyname);
							current.layoutUpperDiv.children[index].onmousedown = function(event) {					
								ML4WebVKey.now.start(event,index,false);
							}
							
							current.layoutOtherDiv.children[index].style.backgroundImage = String.format('url({0})', oMessage.other.image);
							current.layoutOtherDiv.children[index].style.backgroundColor = "#FFFFFF";
							current.layoutOtherDiv.children[index].setAttribute("keyname", oMessage.other.keyname);
							current.layoutOtherDiv.children[index].onmousedown = function(event) {					
								ML4WebVKey.now.start(event,index,false);
							}
						}
						
						current.layoutLowerDiv.children[keycount+1].style.backgroundImage = String.format('url({0})', secureImage.message.close.image);
						current.layoutLowerDiv.children[keycount+1].style.backgroundColor = "#FFFFFF";
						current.layoutLowerDiv.children[keycount+1].onmousedown = function(event) {
							ML4WebVKey.now.closeButton();
						}
						current.layoutUpperDiv.children[keycount+1].style.backgroundImage = String.format('url({0})', secureImage.message.close.image);
						current.layoutUpperDiv.children[keycount+1].style.backgroundColor = "#FFFFFF";
						current.layoutUpperDiv.children[keycount+1].onmousedown = function(event) {
							ML4WebVKey.now.closeButton();
						}
						current.layoutOtherDiv.children[keycount+1].style.backgroundImage = String.format('url({0})', secureImage.message.close.image);
						current.layoutOtherDiv.children[keycount+1].style.backgroundColor = "#FFFFFF";
						current.layoutOtherDiv.children[keycount+1].onmousedown = function(event) {
							ML4WebVKey.now.closeButton();
						}
					} else if (keyboardType == "number") {						
						var keycount = secureImage.message.count;
						
						for (var index=0; index<=keycount; index++) {					
							var sNumber  = MLVKeyUtils.getPadDigits(index, 2);
							var oMessage = secureImage.message[sNumber];
							
							current.layoutLowerDiv.children[index].style.backgroundImage = String.format('url({0})', oMessage.lower.image);
							current.layoutLowerDiv.children[index].style.backgroundColor = "#FFFFFF";
							current.layoutLowerDiv.children[index].setAttribute("keyname", oMessage.lower.keyname);
							current.layoutLowerDiv.children[index].onmousedown = function(event) {
								ML4WebVKey.now.start(event,index,false);
							}
						}
						
						current.layoutLowerDiv.children[keycount+1].style.backgroundImage = String.format('url({0})', secureImage.message.close.image);
						current.layoutLowerDiv.children[keycount+1].style.backgroundColor = "#FFFFFF";
						current.layoutLowerDiv.children[keycount+1].onmousedown = function(event) {
							ML4WebVKey.now.closeButton();
						}
					}
				}
				
				if (keyboardType == "qwerty") {
					current.setKeyType("lower");
				} else {
					current.setKeyType("number");
				}	
				
				current.showKeyboardLayout();
				current.setMultiCursor(false);
				
				if (typeof(callback) == "function") {
					callback(0);
				}
			}
		}, ML4WebVKeyPad.mToken);
	}
	
	this.setButton = function(inputObject, useButton) {
		if (useButton == false || useButton == "false") {
			return;
		}
		
		try {
			var button       = document.createElement("button");
			var button_size  = 25;
			var button_xy	 = [0,0];
			var button_index = -1;

			if (inputObject.getAttribute("ds-kb-button") != null) {
				button_size = inputObject.getAttribute("ds-kb-button");
				
				if (inputObject.getAttribute("ds-kb-button-xy") != null) {
					button_xy = JSON.parse(inputObject.getAttribute("ds-kb-button-xy"));
					button_xy.length != 2 ? button_xy = JSON.parse("[0,0]") : 0;
				}
				
				if (inputObject.getAttribute("ds-kb-button-index") != null) {
					button_index = inputObject.getAttribute("ds-kb-button-index");
				}
			}
			
			button.setAttribute("id", inputObject.id + "_magicButton");
			button.setAttribute("tabindex", button_index);
			button.setAttribute("style", String.format('display:none; position: absolute; top: 0px; left: 0px; width: {0}px; height: {1}px; background: url({2}) no-repeat; border: none; z-index:5000009;', ML4WebVKeyPad.mCommonImage.input_size[0], ML4WebVKeyPad.mCommonImage.input_size[1], ML4WebVKeyPad.mCommonImage.input));

			try {
				var clientRect  = document.getElementById(inputObject.id).getBoundingClientRect();
				var clientStyle = button.style;
				
				clientStyle.setProperty("display", "block");
				clientStyle.setProperty("left", clientRect.right + button_xy[0] + "px");
				clientStyle.setProperty("top",  clientRect.top   + button_xy[1] + "px");
			} catch (ex) { 
				clientStyle.setAttribute("display", "block");
				clientStyle.setAttribute("left", clientRect.right + button_xy[0] + "px");
				clientStyle.setAttribute("top",  clientRect.top   + button_xy[1] + "px");
			}
			
			if (button.addEventListener ) {
				button.addEventListener("click", ML4WebVKey.buttonclick, false);
			} else{
				button.attachEvent("onclick", ML4WebVKey.buttonclick);
			}
			
			MLVKeyUtils.insertAfter(inputObject, button);
		} catch (ex) {
			
		}
	}
	
	this.setKeyType = function(keyType) {
		this.mKeyType = keyType;
		this.mKeyFlag = keyType.charAt(0);
		
		if (keyType == "lower") {
			this.mCapsLock = false;
		} else if (keyType == "upper") {
			this.mCapsLock = true;
		}
	}
	
	this.setKeyboardLayout = function(obj) {
		if (obj == null || typeof(obj) == "undefined") {
			return;
		}
		
		ML4WebVKey.now = this;
		
		if ((obj.getAttribute("ds-kb-type") != null)) {
			this.mKeyboardPosition = [0,0];
			
			if (obj.getAttribute("ds-kb-xy") != null) {
				this.mKeyboardPosition = JSON.parse(obj.getAttribute("ds-kb-xy"));
				this.mKeyboardPosition.length != 2 ? this.mKeyboardPosition = JSON.parse("[0,0]") : 0; 
			}
			
			if (obj.getAttribute("ds-kb-type") == "qwerty") {
				this.mKeyboardPosition.push(550);
				this.mKeyboardPosition.push(8);
			} else if (obj.getAttribute("ds-kb-type") == "number") {
				this.mKeyboardPosition.push(190);
				this.mKeyboardPosition.push(8);
			}
			
			try {
				var elementId    = obj.id + "_layout";
				var clientRect   = document.getElementById(obj.id).getBoundingClientRect();
				var clientStyle  = document.getElementById(elementId).style;
				
				this.mKeyboardPosition.push(clientRect.left);
				this.mKeyboardPosition.push(clientRect.bottom);
				
				if (MLVKeyUtils.isMobileDevice() == false) {
					this.divs[0].style.setProperty("left", clientRect.left + this.mKeyboardPosition[0] + "px");
					this.divs[0].style.setProperty("top",  clientRect.top  + clientRect.height + this.mKeyboardPosition[1] + "px");
					
					this.divs[1].style.setProperty("left", clientRect.left + this.mKeyboardPosition[0] + "px");
					this.divs[1].style.setProperty("top",  clientRect.top  + clientRect.height + this.mKeyboardPosition[1] + "px");
					
					this.divs[2].style.setProperty("left", clientRect.left + this.mKeyboardPosition[0] + "px");
					this.divs[2].style.setProperty("top",  clientRect.top  + clientRect.height + this.mKeyboardPosition[1] + "px");
					
					if (this.mMultiCursor) {
						this.divs[3].style.setProperty("left", clientRect.left + this.mKeyboardPosition[0] + 251 + "px");
						this.divs[3].style.setProperty("top",  clientRect.top  + clientRect.height + this.mKeyboardPosition[1] + 7 + "px");
						
						this.divs[4].style.setProperty("left", clientRect.left + this.mKeyboardPosition[0] + 251 + "px");
						this.divs[4].style.setProperty("top",  clientRect.top  + clientRect.height + this.mKeyboardPosition[1] + 7 + "px");
					}
					
					this.divs[5].style.setProperty("left", clientRect.left + this.mKeyboardPosition[0] + this.mKeyboardPosition[2] + "px");
					this.divs[5].style.setProperty("top",  clientRect.top  + clientRect.height + this.mKeyboardPosition[1] + this.mKeyboardPosition[3] + "px");
				} else {
					var scrollLocation = document.documentElement.scrollTop;// 현재 스크롤바 위치
					var windowHeight   = window.innerHeight;				// 스크린 창
					var fullHeight     = document.body.scrollHeight;		// margin 값은 포함 x
					var startPositionY = scrollLocation + (windowHeight-parseInt(this.mainDiv.style.height));

					this.layoutDiv.style.setProperty("top",  startPositionY-10 + "px");
				}
				clientStyle.setProperty("display", "block");				
			} catch (ex) { }
		}				
	}
	
	this.showKeyboard = function() {
		try {
			var current = this;
			
			current.inputField.readOnly = true;
			
			current.clearKey();
			current.createSecureKeyboard(current.mKeyboardType, function(code){
				current.setKeyboardLayout(current.inputField);
			});			
		} catch (ex) {
			current.inputField.readOnly = false;
			throw ex;
		}
	}
	
	this.showKeyboardLayout = function() {
		if (typeof(this.layoutLowerDiv) != "undefined") {
			this.layoutLowerDiv.style.display = "none";
		}
		if (typeof(this.layoutUpperDiv) != "undefined") {
			this.layoutUpperDiv.style.display = "none";
		}
		if (typeof(this.layoutOtherDiv) != "undefined") {
			this.layoutOtherDiv.style.display = "none";
		}
		
		if (typeof(this.mKeyType) != "undefined" && (this.mKeyType == "lower" || this.mKeyType == "number")) {
			if (typeof(this.layoutLowerDiv) != "undefined") {
				this.layoutLowerDiv.style.display = "block";
			}			
		} else if (typeof(this.mKeyType) != "undefined" && this.mKeyType == "upper"){
			if (typeof(this.layoutUpperDiv) != "undefined") {
				this.layoutUpperDiv.style.display = "block";
			}
		}
	}
	
	this.hideKeyboardLayout = function() {
		if (typeof(this.layoutDiv.style.display) != "undefined") {
			this.layoutDiv.style.display = "none";
		}
		
		this.inputField.readOnly = false;
	}
	
	this.start = function(event, index, realDiv) {		
		var checkDiv = false;
		
		if (realDiv != null && typeof(realDiv) != "undefined") {
			checkDiv = realDiv;
		}
		
		var delimiter = '#';
		var keyType   = "";
		var secureX   = 0;
		var secureY   = 0;
		var secureKey = null;
		
		if (event.offsetX != null || event.offsetY != null) {
			secureX = event.offsetX;
			secureY = event.offsetY;
		} else if (event.layerX != null || event.layerY != null) {
			secureX = event.layerX;
			secureY = event.layerY;
		}
		
		secureX = parseInt(secureX);
		secureY = parseInt(secureY);
		
		if (MLVKeyUtils.isMobileDevice() == false) {
			keyType   = this.mKeyFlag;
			secureKey = this.getSecureKey(secureX, secureY, this.mKeyboardType);
		} else {	
			keyType   = "m";
			secureKey = new Object();
			secureKey.keyname = event.target.getAttribute("keyname");
		}
		
		if (secureKey != null) {			
			if (secureKey.keyname == "backspace") {
				var div = document.getElementById(this.inputField.id + "_press_key");
				
				this.keyPress(div, secureKey);			
				this.deleteKey();
			} else if (secureKey.keyname == "clear") {
				var div = document.getElementById(this.inputField.id + "_press_key");
				
				this.keyPress(div, secureKey);			
				this.clearKey();
			} else if (secureKey.keyname == "shift") {
				this.shiftKey();
			} else if (secureKey.keyname == "special") {
				this.otherKey();
			}  else if (secureKey.keyname == "refresh") {
				var div = document.getElementById(this.inputField.id + "_press_key");
				
				this.keyPress(div, secureKey);
				this.refreshKey();
			} else if (secureKey.keyname == "enter") {
				this.enterKey();
			} else if (secureKey.keyname != "") {
				if (MLVKeyUtils.isMobileDevice() == false && MLVKeyConfig.isKeyPress) {
					var div;
					
					if (secureKey.pointx[0]==251 && secureKey.pointy[0]==193) {
						div = document.getElementById(this.inputField.id + "_press_space");					
					} else {
						div = document.getElementById(this.inputField.id + "_press_key");
					}
					
					this.keyPress(div, secureKey);
				}
				
				this.inputField.value  = this.inputField.value + "*";
				this.hiddenField.value += delimiter + keyType + secureKey.keyname;
			}
		}
	}
	
	this.getSecureKey = function(x, y, type) {		
		var secureKey = this.mKeyboard[type];
		
		for ( var i = 0; i < secureKey.length; i++) {
			if (secureKey[i].contains(x, y)) {
				return secureKey[i];
			}
		}
		
		return null;
	}
	
	this.keyPress = function(div, key) {
		if (this.mMultiCursor) {
			return;
		}
		
		if (MLVKeyUtils.isMobileDevice() == false && MLVKeyConfig.isKeyPress) {
			var dsPressedkey = div;
			
			div.style.left    = key.pointx[0]+ this.mKeyboardPosition[0] +  this.mKeyboardPosition[4] + "px";
			div.style.top     = key.pointy[0]+ this.mKeyboardPosition[1] +  this.mKeyboardPosition[5] + "px";
			div.style.display = "block";
			
			setTimeout(function(){
				try{
					dsPressedkey.style.display = "none";
				}catch(e){
					dsPressedkey.style.display = "none";
				}
			},100);
		}			
	}
	
	this.deleteKey = function() {
		var delimiter = '#';
		
		this.inputField.value  = this.inputField.value.substring(0, this.inputField.value.length - 1);
		var pos                = this.hiddenField.value.lastIndexOf(delimiter);
		this.hiddenField.value = this.hiddenField.value.substring(0, pos);
	}
	
	this.clearKey = function() {
		this.inputField.value   = "";		
		this.hiddenField.value  = "";
		this.mEncryptedPassword = "";
	}
	
	this.shiftKey = function() {
		if (this.mCapsLock == false) {
			this.setKeyType("upper");
		} else {
			this.setKeyType("lower");
		}
		
		this.showKeyboardLayout();
	}
	
	this.otherKey = function() {
		if (typeof(this.layoutLowerDiv) != "undefined") {
			this.layoutLowerDiv.style.display = "none";
		}
		if (typeof(this.layoutUpperDiv) != "undefined") {
			this.layoutUpperDiv.style.display = "none";
		}
		if (typeof(this.layoutOtherDiv) != "undefined") {
			if (this.layoutOtherDiv.style.display == "none") {
				this.layoutOtherDiv.style.display = "block";
			} else {
				this.layoutOtherDiv.style.display = "none";
				this.setKeyType("lower");
				this.showKeyboardLayout();
			}
		}
	}
	
	this.refreshKey = function() {
		try {
			var current = this;
			
			current.clearKey();
			current.createSecureKeyboard(current.mKeyboardType, function(code){
				current.setKeyboardLayout(current.inputField);
			});
			
			
		} catch (ex) {
			throw ex;
		}
	}
	
	this.enterKey = function() {
		if (this.hiddenField.value.length == 0) {
			this.hideKeyboardLayout();
			return;
		}
		
		try {
			var reqEncrypt = MLJSCrypto.Encrypt(ML4WebVKeyPad.mChallenge, this.hiddenField.value, "server");
			this.mEncryptedPassword = reqEncrypt.message;
			
			this.hideKeyboardLayout();
			
			if ((arguments.length == 0) && (this.inputField.getAttribute("ds-kb-callback") != null)) {
				var callbackFunc  = this.inputField.getAttribute("ds-kb-callback");
				var callbackName  = callbackFunc.split('(');
				var callbackParam = String.format('{0}("{1}")', callbackName[0], this.inputField.id); 
				var callback      = (new Function(callbackParam))();
			}
		} catch (ex) {
			throw ex;
		}
	}
	
	this.encryptedPassword = function() {
		if (this.mEncryptedPassword == 0 || this.mEncryptedPassword.length == 0) {
			if (this.inputField.value == "" || this.inputField.value.length == 0) {
				return "null";
			} else {				
				var reqEncrypt = MLJSCrypto.Encrypt(ML4WebVKeyPad.mChallenge, this.inputField.value, "client");
				
				if (reqEncrypt.code != 0) {
					return "null";
				} else {
					return reqEncrypt.message;
				}
			}
			
			return "null";
		}
		
		return this.mEncryptedPassword;
	}
	
	this.decryptPassword = function(callback) {
		var result = "";
		
		if (this.mEncryptedPassword == null || typeof(this.mEncryptedPassword) == "undefined" || this.mEncryptedPassword.length == 0) {
			var returl = this.inputField.value;
			this.inputField.value = "";
			
			if (typeof(callback) == "function") {
				callback(returl);					
				return;
			}
			return result;
		}
		
		try {
			var current = this;
			
			if (typeof(callback) == "function") {
				MLServlet.secureRequest(this.mEncryptedPassword, function(resEncrypt){
					if (resEncrypt.code != 0) {
						throw {code:resEncrypt.code, message:resEncrypt.message};
					}
					
					if (typeof(resEncrypt.token) != "undefined") {
						ML4WebVKeyPad.mToken = resEncrypt.token;
					}	
					
					var resDecrypt = MLJSCrypto.Decrypt(resEncrypt.message);
					
					if (resDecrypt.code == 0) {				
						result     = resDecrypt.message;
						resDecrypt = null;
						current.clearKey();				
					}

					callback(result);
				}, ML4WebVKeyPad.mToken);
			} else {
				var resEncrypt = MLServlet.secureRequest(this.mEncryptedPassword, null, ML4WebVKeyPad.mToken);
				
				if (resEncrypt.code != 0) {
					throw {code:resEncrypt.code, message:resEncrypt.message};
				}
				
				if (typeof(resEncrypt.token) != "undefined") {
					ML4WebVKeyPad.mToken = resEncrypt.token;
				}
				
				var resDecrypt = MLJSCrypto.Decrypt(resEncrypt.message);
				
				if (resDecrypt.code == 0) {				
					result     = resDecrypt.message;
					resDecrypt = null;
					this.clearKey();				
				}
			}
		} catch (ex) {
			throw ex;
		}
		
		return result;
	}
	
	this.setMultiCursor = function(isVisible) {
		if (isVisible){
			if (typeof(ML4WebVKeyPad.mCommonImage.fake) != "undefined") {
				this.mainDiv.style.setProperty("cursor", String.format('url({0}), auto', ML4WebVKeyPad.mCommonImage.fake));
			}			
		} else {
			this.mainDiv.style.cursor = 'default';
		}				
	}

	this.showCursor = function(event, isCursor){
		var x = 0;
		var y = 0;
		
		if (event.offsetX != null || event.offsetY != null) {
			x = event.offsetX;
			y = event.offsetY;
		} else if (event.layerX != null || event.layerY != null) {
			x = event.layerX;
			y = event.layerY;
		}
		
		var displayXY = String.format('x = {0}, y = {1}', x, y);
		
		var vm1top  = -40;
        var vm1left = -40;
		
		var script = document.getElementById("vm1");
		
		if (script != null) {
			script.setAttribute("style", String.format('position: fixed; top: {0}px; left: {1}px; z-index:5000019;', y + vm1top, x + vm1left));					
		}
	}

	this.hideCursor = function(event) {
		if (this.mMultiCursor == true || this.mMultiCursor == "true") {
			var script = document.getElementById("vm1");
			
			if (script != null) {
				script.style.display = "none";
			}
		}
	}
	
	this.visibleCursor = function() {
		if (this.mMultiCursor == true || this.mMultiCursor == "true") {
		}
	}
	
	this.closeButton = function() {
		try {
			this.enterKey("none");
		} catch(ex) {
		}
	}
}

function magicVKeyPad() {	
	this.mChallenge       = "";
	this.mPublicKey       = "";
	this.mCommonImage     = "";
	this.mToken           = "";
	
	this.setVirtualKeyboard = function(inputObject) {
		try {
			var tmp = document.getElementById(inputObject.id + "_layout");
			
			if (tmp != null) {
				tmp.parentNode.removeChild(tmp);
			}
			
			var div = document.createElement('div');
			
			div.setAttribute("id", inputObject.id + "_layout");
			div.setAttribute("style", "display:none; position: absolute; top: 0px; left: 0px; z-index:5000009;");
			
			if (inputObject.getAttribute("ds-kb-type") == null) {
				alert("ds-kb-type을 설정해 주세요.(qwerty, number)");
				return;
			}
			
			var useButton = false;
			
			if (inputObject.getAttribute("ds-kb-button") != null) {
				useButton = inputObject.getAttribute("ds-kb-button");
			}
			
			var keyboardType  = inputObject.getAttribute("ds-kb-type");
			var isMultiCursor = MLVKeyConfig.isMultiCursor;
			
			if (keyboardType == "qwerty") {
				this.setQwertyLayout(inputObject.id, div, isMultiCursor);
			} else if (keyboardType == "number") {
				isMultiCursor = false;
				this.setNumberLayout(inputObject.id, div);
			} else {
				alert("올바른 ds-kb-type을 설정해 주세요.(qwerty, number)");
				return;
			}
			
			this.setHiddenField(inputObject);
			
			ML4WebVKey[inputObject.id] = new magicVKeyPadObject(inputObject, div, keyboardType, isMultiCursor);
			
			ML4WebVKey[inputObject.id].setButton(inputObject, useButton);

			if (keyboardType == "qwerty") {
				ML4WebVKey[inputObject.id].setKeyType("lower");
			} else if (keyboardType == "number") {
				ML4WebVKey[inputObject.id].setKeyType("number");
			}
			
			ML4WebVKey.objs.push(inputObject.id);
			
			document.body.appendChild(div);
		} catch (ex) {
			throw ex;
		}
	}
}

magicVKeyPad.prototype.createSession = function(callback) {
	try {
		var current   = this;
		var initParam = MLVKeyConfig.isMultiCursor == false ? "p_key$p_space$close$input" : "p_key$p_space$fake$multi_n$multi_p$close$input";
		
		MLServlet.setSessionKey(MLVKeyConfig.sessionTimeout, initParam, function(oSession){
			if (oSession.code != 0) {
				var exmessage = MLVKeyErrCode.AXERR_MAKESESSIONID_FAIL.message + " => " + oSession.message + "( " + oSession.code + ")";				
				callback({code:MLVKeyErrCode.AXERR_MAKESESSIONID_FAIL.code, message: exmessage});				
				return;
			}
			
			current.mChallenge   = oSession.message.challenge;
			current.mPublicKey   = oSession.message.servercert;
			current.mCommonImage = oSession.message.initParam;
			
			if (typeof(oSession.token) != "undefined") {
				current.mToken = oSession.token;
			}
			
			var oEnvelop = MLJSCrypto.EnvelopData(current.mChallenge, current.mPublicKey, "dreamsecurity");
			
			if (oEnvelop.code != 0) {
				callback({code: oEnvelop.code, message: oEnvelop.message});
				return;
			}
			
			MLServlet.secureRequest(oEnvelop.message, function(oSecureReq){
				if (oSecureReq.code != 0) {
					callback({code: oSecureReq.code, message: oSecureReq.message});
				} else {
					if (typeof(oSecureReq.token) != "undefined") {
						current.mToken = oSecureReq.token;
					}					
					callback(oSecureReq);
				}				
			}, current.mToken);
		});
	} catch (ex) {
		callback(ex);
	}
};

magicVKeyPad.prototype.setQwertyLayout = function(inputObject, element, isMultiCursor) {
	var divMainEvent = '';
	var divMain = '';
	var layout = ''
		
	if (MLVKeyUtils.isMobileDevice() == false) {
		divMainEvent = String.format('onmousedown="ML4WebVKey[\'{0}\'].start(event);" onmousemove="ML4WebVKey[\'{1}\'].showCursor(event,false);" onmouseout="ML4WebVKey[\'{2}\'].hideCursor(event);" onmouseover="ML4WebVKey[\'{3}\'].visibleCursor();" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;"', inputObject, inputObject, inputObject, inputObject);
		
		divMain = String.format('<div id="{0}_mainDiv" class="qwerty_mainDiv" {1}></div>', inputObject, divMainEvent);
		
		layout += String.format('<div id="{0}_layoutLowerDiv" class="qwerty_layoutClass">', inputObject);
		layout += String.format('<iframe id="{0}_block" frameborder="10" style="z-index:-1; position:absolute; visibility: hidden; left: 0px; top: 0px; width: 100%; height: 100%;"></iframe>', inputObject);
		layout += String.format('</div>');
		
		layout += String.format('<div id="{0}_layoutUpperDiv" class="qwerty_layoutClass">', inputObject);
		layout += String.format('<iframe id="{0}_block" frameborder="10" style="z-index:-1; position:absolute; visibility: hidden; left: 0px; top: 0px; width: 100%; height: 100%;"></iframe>', inputObject);
		layout += String.format('</div>');

		if (typeof(this.mCommonImage.p_key) != "undefined") {
			layout += String.format('<div id="{0}_press_key" class="press_key">', inputObject);
			layout += String.format('<img src="{0}" alt="" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;">', this.mCommonImage.p_key);
			layout += String.format('</div>');
		}
		
		if (typeof(this.mCommonImage.p_space) != "undefined") {
			layout += String.format('<div id="{0}_press_space" class="press_space">', inputObject);
			layout += String.format('<img src="{0}" alt="" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;">', this.mCommonImage.p_space);
			layout += String.format('</div>');
		}
		
		if (typeof(this.mCommonImage.multi_n) != "undefined") {
			layout += String.format('<div id="{0}_multiMouseTypeDiv" class="qwerty_multiMouseType" onmousedown="ML4WebVKey[\'{1}\'].setMultiCursor(true);">', inputObject, inputObject);
			layout += String.format('<img src="{0}" alt="" id="multiMouseTypeImg" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;">', this.mCommonImage.multi_n);
			layout += String.format('</div>');
		}
		
		if (typeof(this.mCommonImage.multi_p) != "undefined") {
			layout += String.format('<div id="{0}_singleMouseTypeDiv" class="qwerty_multiMouseType" onmousedown="ML4WebVKey[\'{1}\'].setMultiCursor(false);">', inputObject, inputObject);
			layout += String.format('<img src="{0}" alt="" id="slngleMouseTypeImg" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;">', this.mCommonImage.multi_p);
			layout += String.format('</div>');
		}
		
		if (typeof(this.mCommonImage.close) != "undefined") {
			layout += String.format('<div id="{0}_closeLayout" class="closeLayout" onmousedown="ML4WebVKey[\'{1}\'].closeButton();">', inputObject, inputObject);
			layout += String.format('<img src="{0}" alt="" id="closeLayoutImg" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;">', this.mCommonImage.close);
			layout += String.format('</div>');
		}
	} else {
		var mobileRow    = 4;
		var mobileCol    = 11;
		var mobileIndex  = 1;
		var mobileWidth  = 9;
		var mobileHeight = 43;
		var mobileClose  = 30;
		var styleHeight  = (mobileHeight*5+mobileClose);
		
		element.style.setProperty("width", "100%");
		element.style.setProperty("height", styleHeight + "px");
		
		divMainEvent = String.format('oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;"');
		divMain = String.format('<div id="{0}_mainDiv" class="mobile_mainDiv" style="height:{1}px;" {2}></div>', inputObject, styleHeight, divMainEvent);

		layout += String.format('<div id="{0}_layoutLowerDiv" class="mobile_qwerty_layoutClass" style="height:{1}px;">', inputObject, styleHeight);
		
		for (var rindex=mobileRow; rindex>=1; rindex--) {
			for (var index=0; index<mobileCol; index++) {
				var nOffsetX = index * mobileWidth;
				var nOffsetY = mobileHeight * rindex;
				layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex, nOffsetX, nOffsetY, mobileWidth, mobileHeight);
				++mobileIndex;
			}
		}
		
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left: 0%; bottom:   0%; width: 9%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left: 9%; bottom:   0%; width:18%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:27%; bottom:   0%; width:18%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:45%; bottom:   0%; width:27%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:72%; bottom:   0%; width:27%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);			
		//layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left: 0%; bottom:{2}px; width:81%; height:{3}px;"></div>', inputObject, mobileIndex++, mobileHeight*(mobileRow+1), mobileClose);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:81%; bottom:{2}px; width:18%; height:{3}px;"></div>', inputObject, mobileIndex++, mobileHeight*(mobileRow+1), mobileClose);
		layout += String.format('</div>');

		mobileIndex = 1;
		layout += String.format('<div id="{0}_layoutUpperDiv" class="mobile_qwerty_layoutClass" style="height:{1}px;">', inputObject, styleHeight);
		
		for (var rindex=mobileRow; rindex>=1; rindex--) {
			for (var index=0; index<mobileCol; index++) {
				var nOffsetX = index * mobileWidth;
				var nOffsetY = mobileHeight * rindex;
				
				layout += String.format('<div id="{0}_layoutUpperDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:{2}%;  bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex, nOffsetX, nOffsetY, mobileWidth, mobileHeight);
				++mobileIndex;
			}
		}
		
		layout += String.format('<div id="{0}_layoutUpperDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left: 0%; bottom:   0%; width: 9%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutUpperDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left: 9%; bottom:   0%; width:18%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutUpperDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:27%; bottom:   0%; width:18%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutUpperDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:45%; bottom:   0%; width:27%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutUpperDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:72%; bottom:   0%; width:27%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		//layout += String.format('<div id="{0}_layoutUpperDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left: 0%; bottom:{2}px; width:81%; height:{3}px;"></div>', inputObject, mobileIndex++, mobileHeight*(mobileRow+1), mobileClose);
		layout += String.format('<div id="{0}_layoutUpperDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:81%; bottom:{2}px; width:18%; height:{3}px;"></div>', inputObject, mobileIndex++, mobileHeight*(mobileRow+1), mobileClose);
		layout += String.format('</div>');
		
		mobileIndex = 1;
		layout += String.format('<div id="{0}_layoutOtherDiv" class="mobile_qwerty_layoutClass" style="height:{1}px;">', inputObject, styleHeight);
		
		for (var rindex=mobileRow; rindex>=1; rindex--) {
			for (var index=0; index<mobileCol; index++) {
				var sIndex   = MLVKeyUtils.getPadDigits(mobileIndex, 2);
				var nOffsetX = index * mobileWidth;
				var nOffsetY = mobileHeight * rindex;
				
				layout += String.format('<div id="{0}_layoutOtherDiv{1}" class="mobile_qwerty_layoutClassDiv"; style="left:{2}%;  bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex, nOffsetX, nOffsetY, mobileWidth, mobileHeight);
				++mobileIndex;
			}
		}
		
		layout += String.format('<div id="{0}_layoutOtherDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left: 0%; bottom:   0%; width: 9%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutOtherDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left: 9%; bottom:   0%; width:18%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutOtherDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:27%; bottom:   0%; width:18%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutOtherDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:45%; bottom:   0%; width:27%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		layout += String.format('<div id="{0}_layoutOtherDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:72%; bottom:   0%; width:27%; height:{2}px;"></div>', inputObject, mobileIndex++, mobileHeight);
		//layout += String.format('<div id="{0}_layoutOtherDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left: 0%; bottom:{2}px; width:81%; height:{3}px;"></div>', inputObject, mobileIndex++, mobileHeight*(mobileRow+1), mobileClose);
		layout += String.format('<div id="{0}_layoutOtherDiv{1}" class="mobile_qwerty_layoutClassDiv" style="left:81%; bottom:{2}px; width:18%; height:{3}px;"></div>', inputObject, mobileIndex++, mobileHeight*(mobileRow+1), mobileClose);
		layout += String.format('</div>');
	}
	element.innerHTML = divMain + layout;
}

magicVKeyPad.prototype.setNumberLayout = function(inputObject, element) {
	var divMainEvent = '';
	var divMain  = '';
	var layout   = ''		

	if (MLVKeyUtils.isMobileDevice() == false) {
		divMainEvent = String.format('onmousedown="ML4WebVKey[\'{0}\'].start(event);" onmousemove="ML4WebVKey[\'{1}\'].showCursor(event,false);" onmouseout="ML4WebVKey[\'{2}\'].hideCursor(event);" onmouseover="ML4WebVKey[\'{3}\'].visibleCursor();" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;"', inputObject, inputObject, inputObject, inputObject);
		
		divMain = String.format('<div class="number_mainDiv" id="{0}_mainDiv" {1}></div>', inputObject, divMainEvent);	
			
		layout += String.format('<div id="{0}_layoutLowerDiv" class="number_layoutClass">', inputObject);
		layout += String.format('<iframe id="{0}_block" frameborder="10" style="z-index:-1; position:absolute; visibility: hidden; left: 0px; top: 0px; width: 100%; height: 100%;"></iframe>', inputObject);
		layout += String.format('</div>');

		layout += String.format('<div id="{0}_layoutUpperDiv" class="number_layoutClass">', inputObject);
		layout += String.format('<iframe id="{0}_block" frameborder="10" style="z-index:-1; position:absolute; visibility: hidden; left: 0px; top: 0px; width: 100%; height: 100%;"></iframe>', inputObject);
		layout += String.format('</div>');
		
		if (typeof(this.mCommonImage.p_key) != "undefined") {
			layout += String.format('<div id="{0}_press_key" class="press_key">', inputObject);
			layout += String.format('<img src="{0}" alt="" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;">', this.mCommonImage.p_key);
			layout += String.format('</div>');
		}
		
		if (typeof(this.mCommonImage.close) != "undefined") {
			layout += String.format('<div id="{0}_closeLayout" class="number_closeLayout" onmousedown="ML4WebVKey[\'{1}\'].closeButton();">', inputObject, inputObject);
			layout += String.format('<img src="{0}" alt="" id="closeLayoutImg" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;">', this.mCommonImage.close);
			layout += String.format('</div>');
		}
	} else {
		var mobileIndex  = 1;
		var mobileWidth  = 25;
		var mobileHeight = 50;
		var mobileClose  = 8;
		var mobileMargin = (100-mobileWidth*4)/2 <= 0 ? 0.5 : (100-mobileWidth*4)/2;
		
		element.style.setProperty("width", "100%");
		element.style.setProperty("height", mobileHeight*5 + "px");
		
		divMainEvent = String.format('oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;"');
		
		divMain = String.format('<div id="{0}_mainDiv" class="mobile_mainDiv" style="height:{1}px"; {2}></div>', inputObject, mobileHeight*5, divMainEvent);
		
		layout += String.format('<div id="{0}_layoutLowerDiv" class="mobile_number_layoutClass" style="margin-left:{1}%; height:{2}px;">', inputObject, mobileMargin, mobileHeight*5);
		
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*0, mobileHeight*3, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*1, mobileHeight*3, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*2, mobileHeight*3, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*3, mobileHeight*3, mobileWidth, mobileHeight);
		
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*0, mobileHeight*2, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*1, mobileHeight*2, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*2, mobileHeight*2, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*3, mobileHeight*2, mobileWidth, mobileHeight);
		                                                                                                                                                                                                           
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*0, mobileHeight*1, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*1, mobileHeight*1, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*2, mobileHeight*1, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*3, mobileHeight*1, mobileWidth, mobileHeight);
		                                                                                                                                                                                                           
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*0, mobileHeight*0, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*1, mobileHeight*0, mobileWidth, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*2, mobileHeight*0, mobileWidth*2, mobileHeight);
		//layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*0, mobileHeight*4, mobileWidth*3, mobileHeight);
		layout += String.format('<div id="{0}_layoutLowerDiv{1}" class="mobile_number_layoutClassDiv" style="left:{2}%; bottom:{3}px; width:{4}%; height:{5}px;"></div>', inputObject, mobileIndex++, mobileWidth*3, mobileHeight*4, mobileWidth, mobileHeight);
		
		layout += String.format('</div>');
	}
	
	element.innerHTML = divMain + layout;
}

magicVKeyPad.prototype.setHiddenField = function(inputObject) {
	var obj = inputObject.form;
	
	if (obj == null) {
		obj = inputObject.parentNode;
	}
	if (obj == null) {
		obj = document.body;
	}
	try {
		var hidden = document.createElement("input");			
		
		hidden.setAttribute("type",  "hidden");
		hidden.setAttribute("id",    inputObject.id + "_hiddenField");
		hidden.setAttribute("name",  inputObject.id + "_hiddenField");
		hidden.setAttribute("value", "");
		
		obj.appendChild(hidden);
	} catch(e) {
		throw {code: MLVKeyErrCode.AXERR_API_SCRIPT.code, message: MLVKeyErrCode.AXERR_API_SCRIPT.message + "(setHiddenField)"};
	}
	
	return hidden;
}