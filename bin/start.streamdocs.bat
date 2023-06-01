chcp 65001
@echo off
SETLOCAL EnableDelayedExpansion
title StreamDocs5

SET _SCRIPT_DIR=%~dp0
SET SCRIPT_DIR=%_SCRIPT_DIR:~0,-1%
for %%i in (%_SCRIPT_DIR%..) do set SD_HOME=%%~fi

java -jar -Dfile.encoding=UTF-8 -DbatchMode=true sd-cli.jar %SD_HOME%\etc %SD_HOME%

SET OPTION=-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=%SCRIPT_DIR%\heap_dump.hprof -Dfile.encoding=utf-8^
 -Dlogback.configurationFile=%SD_HOME%\etc\logback.xml

SET HTTP_DAEMON_JAR=%SCRIPT_DIR%\http-daemon.jar

set RUNCMD=java %OPTION% -cp %HTTP_DAEMON_JAR% Main %SD_HOME%\etc\daemonSystemProperties.json
echo %RUNCMD%
%RUNCMD%
