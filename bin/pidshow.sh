#! /bin/bash
if [[ "$(uname)" == 'Darwin' ]]; then
	ps -aef | grep 'http-daemon.jar Main' | grep java | awk '{print $2}'
elif [[ "$(uname)" == 'Linux' ]]; then
	ps -elf | grep 'http-daemon.jar Main' | grep java | awk '{print $4}'
fi
