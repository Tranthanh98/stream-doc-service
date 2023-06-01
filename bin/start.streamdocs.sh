#!/bin/bash
set -o errexit
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SD_HOME="$(cd .. && pwd)"

java -jar -Dfile.encoding=UTF-8 -DbatchMode=true sd-cli.jar $SD_HOME/etc $SD_HOME

OPTION="-XX:+HeapDumpOnOutOfMemoryError
 -XX:HeapDumpPath=$SCRIPT_DIR/heap_dump.hprof
 -Dfile.encoding=utf-8
 -Dlogback.configurationFile=$SD_HOME/etc/logback.xml"

HTTP_DAEMON_JAR="$SCRIPT_DIR/http-daemon.jar"

RUNCMD="java $OPTION $DEMON_OPTION -cp $HTTP_DAEMON_JAR Main $SD_HOME/etc/daemonSystemProperties.json"
echo $RUNCMD
$RUNCMD