# 관리 유의사항

## 한국전자인증

한국전자인증은 모듈의 직접 수정이 필요 없이 모두 SD 에서의 제어만으로 동작 가능하도록 구현되어 있습니다.

업데이트할 모듈이 파일 구조가 변경되지 않았다면 그대로 덮어 씌우면 정상 동작합니다.

---

## 드림시큐리티

드림시큐리티는 js 파일을 요청할 때 파일들의 해시값을 확인하므로 이들이 조금이라도 변경되면 정상 동작하지 않습니다.

업데이트 시 아래에서 안내하는 파일 외에는 항상 원본을 그대로 덮어씌우세요. 개행처리 방식(LF/CRLF) 조차도 전환되어서는 안됩니다.

드림시큐리티는 본래 UI 를 JSP 를 통해 표시되도록 개발되어 있어 업데이트 시 몇가지 수정 작업이 필요합니다.

`MagicLine$Web/UI/ML4Web_Main.jsp` 파일과 `MagicLine$Web/UI/ML4Web_SaveCertMain.jsp` 파일에서 아래의 행을 찾아 제거하세요.

```diff
- <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
```

그리고 아래의 변수를 찾아 수정하세요.
```diff
- var contextPath = '<%=request.getContextPath()%>';
+ var contextPath = '../../';
```

만약 업데이트할 모듈 내용에 `MagicLine4Web/ML4Web/js/ML4Web_Config.js` 파일이 없다면, `MagicLine4Web/ML4Web/js/ML4Web_Config_new.js` 파일을 해당 이름으로 복사하세요.
