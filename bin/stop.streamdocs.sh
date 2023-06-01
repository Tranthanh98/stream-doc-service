#!/bin/bash
RESOURCE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
SCRIPT_DIR="$(dirname $RESOURCE)"
echo "KILLING streamdocs.sh"
$SCRIPT_DIR/pidshow.sh
$SCRIPT_DIR/pidshow.sh | xargs kill -9 &> /dev/null 
