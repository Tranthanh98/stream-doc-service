chcp 65001
@echo off

for /F "tokens=2" %%A in ('tasklist /v ^| findStr "StreamDocs5"') do SET SD_PID=%%A

IF DEFINED SD_PID (
    echo Shutdown to Streamdocs Service
    taskkill /PID %SD_PID%
) ELSE (
    echo Already Stopped Streamdocs Service
)

