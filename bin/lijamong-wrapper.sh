#!/bin/bash

export FONTCONFIG_PATH=$(pwd)/engine/etc/fonts
if grep -Eq "(CentOS|Linux)" /etc/os-release; then
  export LD_LIBRARY_PATH=$(pwd)/engine/lib/nss:$(pwd)/engine/lib/common:$(pwd)/engine/lib/centos
elif grep -q "Ubuntu" /etc/os-release; then
  export LD_LIBRARY_PATH=$(pwd)/engine/lib/nss:$(pwd)/engine/lib/common:$(pwd)/engine/lib/ubuntu
else
  echo "This script is running on an unknown operating system"
fi

if [[ "$#" -eq 3 ]]; then
$(pwd)/engine/hwp2pdf/jayoo_hwp2pdf/hwp2pdf.sh $1 $2 $3
elif [[ "$#" -eq 7 ]]; then
$(pwd)/engine/libreoffice7.3/program/soffice $1 $2 $3 $4 $5 $6 $7
else
  echo "This Moudle is not supported"
fi