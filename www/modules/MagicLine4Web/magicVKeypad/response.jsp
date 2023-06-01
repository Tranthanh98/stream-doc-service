<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.dreamsecurity.securekeyboard.*" %>
<%@ page import="com.dreamsecurity.securekeyboard.servlet.MagicVKeyboardAPI" %>

<%	
	try {
		MagicVKeyboardAPI magicVKeypad = new MagicVKeyboardAPI();
		
		magicVKeypad.init("D:/ML4W/WS_svn/ML4W/MagicLine4Web/WebContent/WEB-INF/magicVKeypad/config.ini");

		// 요청페이지 화이트 리스트
		//jsp.addValidReferer("10.10.30.156:8080");
		magicVKeypad.doGetJSP(request);
 		
 		if (magicVKeypad.getDataType() == 1) { // 서버에서 비밀번호 사용
 			// 응답메시지 처리
 			out.clear(); 			
 			out.print(magicVKeypad.getMessage(0, "success"));
 		} else { // 그외 응답메시지
 			out.clear();		
 			out.print(magicVKeypad.getMessage());
 		}
	} catch (Exception ex) {		
		System.out.println(ex.getMessage());	
		out.clear();
		out.print(ex.getMessage());
	}
%>