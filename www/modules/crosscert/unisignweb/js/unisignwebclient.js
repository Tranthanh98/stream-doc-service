function UnisignWeb(a){a||alert("Failed to initialize module.");return new UnisignWebPlugIn({Mode:a.Mode,EncAlgo:a.EncAlgo,HashAlgo:a.HashAlgo,UniCRS:a.UniCRS,SecureKeyboardType:a.SecureKeyboardType,PKI:a.PKI,SRCPath:a.SRCPath,Language:a.Language,TargetObj:a.TargetObj,TabIndex:a.TabIndex,Embedded:a.Embedded,LimitNumOfTimesToTryToInputPW:a.LimitNumOfTimesToTryToInputPW,CMPIP:a.CMPIP,CMPPort:a.CMPPort,CMPURL:a.CMPURL,SHARESTORAGE:a.SHARESTORAGE,NimCheckURL:a.NimCheckURL,Media:a.Media,Organization:a.Organization,
Policy:a.Policy,ShowExpiredCerts:a.ShowExpiredCerts,LimitMinNewPWLen:a.LimitMinNewPWLen,LimitMaxNewPWLen:a.LimitMaxNewPWLen,LimitNewPWPattern:a.LimitNewPWPattern,ChangePWByNPKINewPattern:a.ChangePWByNPKINewPattern,CertRequestPageEnable:a.CertRequestPageEnable,CertFindBtnEnable:a.CertFindBtnEnable,SDInstallURL:a.SDInstallURL,IssueCertInBIOToken:a.IssueCertInBIOToken,License:a.License,chkEXESetup:!0,chkEXESetupCancel:!1,ShowGuide:a.ShowGuide,zIndex:a.zIndex,TransServerIP:a.TransServerIP,TransServerPort:a.TransServerPort,
TransCfmWindowFlag:a.TransCfmWindowFlag,useQRCode:a.useQRCode,g2b:a.g2b,afterSetupDefaultDevice:a.afterSetupDefaultDevice,iraq:a.iraq,installPageOpenOption:a.installPageOpenOption,memberURL:a.memberURL,smsURL:a.smsURL,siteName:a.siteName,joinCode:a.joinCode,toss:a.toss,useWhale:a.useWhale})}
var UnisignWebPlugIn=function(a){a||alert("Failed to initialize Unisign Web Plugin.");var b=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0");b.open("GET",a.SRCPath+"unisignweb/js/unisignweb.js?version=1.0.4.5",!1);b.send(null);eval(b.responseText);this.WebPlugIn=new (eval("UnisignWebEngine"))({Mode:a.Mode,EncAlgo:a.EncAlgo,HashAlgo:a.HashAlgo,UniCRS:a.UniCRS,SecureKeyboardType:a.SecureKeyboardType,PKI:a.PKI,SRCPath:a.SRCPath,Language:a.Language,TargetObj:a.TargetObj,
TabIndex:a.TabIndex,Embedded:a.Embedded,LimitNumOfTimesToTryToInputPW:a.LimitNumOfTimesToTryToInputPW,CMPIP:a.CMPIP,CMPPort:a.CMPPort,CMPURL:a.CMPURL,SHARESTORAGE:a.SHARESTORAGE,NimCheckURL:a.NimCheckURL,Media:a.Media,Organization:a.Organization,Policy:a.Policy,ShowExpiredCerts:a.ShowExpiredCerts,LimitMinNewPWLen:a.LimitMinNewPWLen,LimitMaxNewPWLen:a.LimitMaxNewPWLen,LimitNewPWPattern:a.LimitNewPWPattern,ChangePWByNPKINewPattern:a.ChangePWByNPKINewPattern,CertRequestPageEnable:a.CertRequestPageEnable,
CertFindBtnEnable:a.CertFindBtnEnable,SDInstallURL:a.SDInstallURL,IssueCertInBIOToken:a.IssueCertInBIOToken,License:a.License,chkEXESetup:a.chkEXESetup,ShowGuide:a.ShowGuide,zIndex:a.zIndex,TransServerIP:a.TransServerIP,TransServerPort:a.TransServerPort,TransCfmWindowFlag:a.TransCfmWindowFlag,useQRCode:a.useQRCode,g2b:a.g2b,afterSetupDefaultDevice:a.afterSetupDefaultDevice,iraq:a.iraq,installPageOpenOption:a.installPageOpenOption,memberURL:a.memberURL,smsURL:a.smsURL,siteName:a.siteName,joinCode:a.joinCode,
toss:a.toss,useWhale:a.useWhale},{NAME:"unisignweb.js",DATA:b.responseText})};
UnisignWebPlugIn.prototype={IsValidity:function(){return this.WebPlugIn.IsValidity()},GetLastError:function(a){this.WebPlugIn.GetLastError(a)},GetLocale:function(a){this.WebPlugIn.GetLocale(a)},SetEmbeddedUI:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SetEmbeddedUI(a)},DigitalSignature:function(a,b,c){this.WebPlugIn.SignDataP1(a,b,c)},VerifyDigitalSignature:function(a,b,c,d){return this.WebPlugIn.VerifySignedDataP1(a,b,c,d)},SignData:function(a,b,c){var d=c;1==c.length&&(d=function(a){c(a.signedData)});
this.WebPlugIn.SignDataP7(a,b,!0,null,d)},SignDataEx:function(a,b,c){this.WebPlugIn.SignDataP7(a,b,!0,null,c)},VerifySignData:function(a,b){return this.WebPlugIn.VerifySignedDataP7(a,b)},SignDataForCertTransferring:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignDataP7Ext("DIGITAL_SIGNATURE_P7_EXT_DISABLE_SECTOKEN",null,a,null,b,c)},SelectMediaForCertTransferring:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SelectMediaForCertImporting(a,b)},ExportCertForCertTransferring:function(a,
b,c,d,e,f){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.ExportCert(a,b,c,d,e,f)},ImportCertForCertTransferring:function(a,b,c,d,e,f,g){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.ImportCert(a,b,c,d,e,f,g)},IssueCert:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.IssueCert(a,b,c)},IssueKMCert:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.IssueKMCert(a)},RenewCert:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.RenewCertNSignedSubjectDn(-1,
-1,null,!1,1,!0,a)},RevocateCert:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.RevocateCert(a,b)},SOECert:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SOECert(a,b)},VerifyVID:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;var c=b;1==b.length&&(c=function(a){a.resultCode=0==a.resultCode?!0:!1;b(a.resultCode)});this.WebPlugIn.VerifyVID(a,c)},VerifyVIDEx:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.VerifyVID(a,b)},ManageCert:function(){if(this.WebPlugIn.isMilPKI())return!1;
this.WebPlugIn.ManageCert()},ManageCertByType:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.ManageCertByType(a,b)},ImportCertFromMobileApp:function(a,b,c){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.ImportCertFromMobileApp(a,b,c)},SetSelectedDevice:function(a){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.SetSelectedDevice(a)},NimServiceLoaded:function(){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.NimServiceLoaded()},SecureMail_Corporation:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;
this.WebPlugIn.SecureMail(0,a,b,c,d)},SecureMail_Private:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SecureMail(1,a,b,c,d)},DecryptData:function(a,b){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.DecryptData(a,b)},getFileDownload:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.getFileDownload(a,b)},SetUBIKeyEnvInfo:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SetUBIKeyEnvInfo(a,b,c,d)},SignDataNGetIdentifierByEnvlp:function(a,
b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignDataP7(a,b,!0,c,d)},SignData_noConWithHash:function(a,b,c,d,e){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignData_noConWithHash(a,b,c,null,d,e)},SignDataNGetIdentifierByEnvlp_noConWithHash:function(a,b,c,d,e,f){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignData_noConWithHash(a,b,c,d,e,f)},SignDataP7NVID_noConWithHash:function(a,b,c,d,e,f){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignDataP7NVID_noConWithHash(a,
b,c,null,d,e,f)},VerifySignData_noConWithHash:function(a,b,c){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.VerifySignData_noConWithHash(a,b,!1,c)},SignMultiData:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;var d=c;1==c.length&&(d=function(a){c(a.jsonSignedData)});this.WebPlugIn.SignMultiDataP7(a,null,b,!0,null,d)},SignMultiDataEx:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignMultiDataP7(a,null,b,!0,null,c)},SignMultiDataExcludeContent:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;
var d=c;1==c.length&&(d=function(a){c(a.jsonSignedData)});this.WebPlugIn.SignMultiDataP7(a,null,b,!1,null,d)},SignMultiDataExcludeContentEx:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignMultiDataP7(a,null,b,!1,null,c)},VerifyExcludedContentSignData:function(a,b,c){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.VerifySignedDataP7ExcludedContent(a,b,c)},Base64Encoding:function(a,b){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.Base64Encoding(a,b)},Base64Decoding:function(a,
b){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.Base64Decoding(a,b)},SignUCPIDReqInfo:function(a,b,c,d,e){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignUCPIDReqInfo(a,b,c,d,!0,e)},MultiDigitalSignature:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignMultiDataP1(a,b,c)},SignDataExcludeContent:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;var d=c;1==c.length&&(d=function(a){c(a.signedData)});this.WebPlugIn.SignDataP7(a,b,!1,null,d)},SignDataExcludeContentEx:function(a,
b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignDataP7(a,b,!1,null,c)},SignDataNVerifyVID:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignDataP7AndVerifyVID(a,b,c,d)},SignMultiDataNVerifyVID:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignMultiDataP7NVerifyVID(a,null,b,!0,c,d)},MakeHash:function(a,b,c){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.MakeHash(a,b,"PlainText",c)},MakeFileHash:function(a,b,c){return this.WebPlugIn.isMilPKI()?
!1:this.WebPlugIn.MakeHash(a,b,"FilePath",c)},EncryptData:function(a,b,c,d,e){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.EncryptData(a,b,c,d,e)},EncryptDatabySymm:function(a,b){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.EncryptDatabySymm(a,b)},EncryptDataWithSymmKey:function(a,b,c,d,e){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.EncryptDataWithSymmKey(a,b,c,d,e)},DecryptDataWithSymmKey:function(a,b,c,d,e,f){return this.WebPlugIn.isMilPKI()?!1:this.WebPlugIn.DecryptDataWithSymmKey(a,
b,c,d,e,f)},SetConfigInfo:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SetConfigInfo(a)},SignFile:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;c?this.WebPlugIn.SignFileP7(a,b,0,null,!0,c):this.WebPlugIn.SignP7File(a)},SignFileExcludeContent:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignFileP7(a,b,0,null,!1,c)},SignMultiFile:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignMultiFileP7(a,b,0,null,!0,c)},SignMultiFileExcludeContent:function(a,
b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignMultiFileP7(a,b,0,null,!1,c)},VerifyKeyPair:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.VerifyKeyPair(a)},SignMultiDataNGetIdentifierByEnvlp:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignMultiDataP7(a,null,b,!0,c,d)},SetMobileTokenEnvInfo:function(a,b,c,d,e,f){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SetMobileTokenEnvInfo(a,b,c,d,e,f)},SignFileEx:function(a,b,c,d,e){if(this.WebPlugIn.isMilPKI())return!1;
this.WebPlugIn.SignFileP7(a,b,c,d,!0,e)},SignFileExcludeContentEx:function(a,b,c,d,e){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignFileP7(a,b,c,d,!1,e)},VerifyP7SignedFileWithFile:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.VerifyP7SignedFileWithFile(null,2,a,b,c,d)},VerifyP7SignedFileWithFileEx:function(a,b,c,d,e){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.VerifyP7SignedFileWithFile(null,a,b,c,d,e)},VerifyP7SignedDataWithFile:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;
this.WebPlugIn.VerifyP7SignedDataWithFile(null,a,b,c,d)},VerifyExcludeContentP7SignedDataWithFile:function(a,b,c,d,e){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.VerifyP7SignedDataWithFile(a,b,c,d,e)},RenewCertNSignedSubjectDn:function(a,b,c,d,e,f,g){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.RenewCertNSignedSubjectDn(a,b,c,!0,d,e,f,g)},SetOptions:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SetOptions(a,b)},MakeTaxXMLDSIG:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;
this.WebPlugIn.MakeTaxXMLDSIG(a,b,c,d)},MakeTaxXMLDSIGNonEnveloped:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.MakeTaxXMLDSIGNonEnveloped(a,b,c,d)},MakeTaxXMLDSIGNVID:function(a,b,c,d,e,f){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.MakeTaxXMLDSIGNVID(a,b,c,d,e,f)},DecryptWithUserSymmKey:function(a,b,c,d,e){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.DecryptWithUserSymmKey(a,b,c,d,e)},EncryptDataWithCert:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;
this.WebPlugIn.EncryptDataWithCert(a,b,c)},SignData_noConWithHashEx:function(a,b,c,d,e,f){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignData_noConWithHashEx(a,b,c,d,e,f)},GetMacAddress:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.GetMacAddress(a,b)},SetMultiUsingOpt:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SetMultiUsingOpt(a)},CheckConnectToCAServer:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.CheckConnectToCAServer(a,
b,c)},SetSystemTimeFromTimeServer:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SetSystemTimeFromTimeServer(a,b,c)},GetUserDN:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.GetUserDN(a)},GetRValueFromKey:function(a,b,c){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.GetRValueFromKey(a,b,c)},VerifyCertVID:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.VerifyCertVID(a,b,c,d)},SignDataNonEnveloped:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;
this.WebPlugIn.SignDataP7NonEnveloped(a,b,c,!0,d)},DigitalSignatureWithPwd:function(a,b,c,d){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.SignDataP1WithPwd(a,b,c,d)},getCertPEMType:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.getCertPEMType(a,b)},reload:function(){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.reload()},GetCertPath:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.GetCertPath(a)},EnvelopedData:function(a,b){this.WebPlugIn.EnvelopedData(a,
b)},DeEnvelopedData:function(a,b){this.WebPlugIn.DeEnvelopedData(a,b)},MakeSymmetricKey:function(a){return this.WebPlugIn.MakeSymmetricKey(a)},SymmetricKeyEncrypt:function(a,b,c,d){return this.WebPlugIn.SymmetricKeyEncrypt(a,b,c,d)},SymmetricKeyDecrypt:function(a,b,c,d){return this.WebPlugIn.SymmetricKeyDecrypt(a,b,c,d)},GetHashData:function(a,b,c){return this.WebPlugIn.GetHashData(a,b,c)},GetRandomData:function(a){return this.WebPlugIn.GetRandomData(a)},VerifyCertificate:function(a){this.WebPlugIn.VerifyCertificate(a)},
GetCertInfo:function(a){this.WebPlugIn.GetCertInfo(a)},VerifySignFile:function(a,b){this.WebPlugIn.VerifyFileSignedDataP7(a,b)},DigitalSignatureFile:function(a){this.WebPlugIn.SignP1File(a)},VerifyDigitalSignatureFile:function(a,b,c,d){this.WebPlugIn.VerifyFileSignedDataP1(a,b,c,d)},SymmetricKeyEncryptFile:function(a,b,c,d){this.WebPlugIn.SymmetricKeyEncryptFile(a,b,c,d)},SymmetricKeyDecryptFile:function(a,b,c,d,e){return this.WebPlugIn.SymmetricKeyDecryptFile(a,b,c,d,e)},SignFileWithHash:function(a,
b){this.WebPlugIn.SignFileWithHash(a,b)},VerifySignFileWithHash:function(a,b,c){this.WebPlugIn.VerifySignFileWithHash(a,b,c)},EncryptDataP1:function(a,b,c){this.WebPlugIn.EncryptDataP1(a,b,c)},DecryptDataP1:function(a,b,c,d){this.WebPlugIn.DecryptDataP1(a,b,c,d)},Export:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.CertTransferV2("export",a)},Import:function(a){if(this.WebPlugIn.isMilPKI())return!1;this.WebPlugIn.CertTransferV2("import",a)},Transfer:function(a,b){if(this.WebPlugIn.isMilPKI())return!1;
this.WebPlugIn.CertTransferV1(a,b)}};
