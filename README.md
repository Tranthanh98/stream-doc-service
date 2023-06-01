# stream-doc-service
- install guide link: https://technet.epapyrus.com/view/docs/streamdocs/5.11.4.0/docs/standalone/pages/streamdocs-standalone
- 1. Overview
StreamDocs provides " StreamDocs standalone package " which does not require separate WAS and DataBase installation .

" StreamDocs standalone package " has built-in WAS and H2 DataBase, so it can be operated quickly and easily.
The " StreamDocs standalone package " is completely identical to the StreamDocs product distributed in the form of a WAR with no difference in functionality.

In this document, " StreamDocs standalone package " is used to explain "streamDocs installation, operation, and simple use procedures" without any prior knowledge.

caution
" StreamDocs standalone package " can only be used in a single server environment.
In the case of configuring clustering with two or more servers or configuring StreamDocs with separate WAS and DataBase,Install StreamDocssee


2. Install StreamDocs standalone
2.1. Check the installation environment and download the product
Before installing StreamDocs standalonesystem requirementsRefer to the page to check the operating environment of StreamDocs.
To run StreamDocs standalone, JDK 1.6 or higher and 1.8 or lower must be installed in the operating environment.

The latest StreamDocs standalone packaged products in compressed file format are available on the TechNet system.reference RoomDownload from.

information
A login procedure is required to download materials from the TechNet system.
If you need help related to login, please contact the customer center (02-2051-5207).

2.1.1. Go to the "Library > Downloads" page in the TechNet system.

reference Room

2.1.2. Go to the latest StreamDocs post and download the StreamDocs standalone package from the attachment at the bottom.

standalone


2.2. Unpack the StreamDocs standalone package
The StreamDocs standalone package is provided in the form of a compressed file and can be installed by unzipping it without a separate installation process.

2.2.1. Unpack the downloaded package archive in the location where StreamDocs will be executed.

standalone zip

2.2.2. When the package is normally unzipped, it has the following folder structure.

standalone unzip

◾In a Linux environment, unzipthe command unpacks the StreamDocs standalone package.

ep@server:~/$ unzip streamdocs-standalone.zip

2.3. Copy the pdfio file for your operating system
After unzipping the StreamDocs standalone package, you need to copy pdfiothe file suitable for your operating system to a specific folder location.bin

2.3.1. If you move to the folder of the unzipped folder, binyou can see the structure as shown below.

standalone bin

2.3.2. After creating a folderpdfio in the designated location as shown in the table below, copy the file suitable for the current operating system .

OS type	original location	moving position
Windows	압축해제폴더\bin\pdfio.exe	C:\ePapyrus\sd\bin\pdfio.exe
Linux	압축해제디렉토리/bin/pdfio	/ePapyrus/sd/bin/pdfio
standalone setup

◾pdfioIn the Linux environment , copy the files in the steps below .

# LINUX 환경 복사 예제
# streamdocs@epapyrus:~/streamdocs-standalone$ // 압축해제디렉토리 
mkdir -p /ePapyrus/sd/bin
cp bin/linux/pdfio /ePapyrus/sd/bin
/ePapyrus/sd/bin/pdfio --version
2.3.3. Copy fontthe folder from the unzipped folder to the location.\ePapyrus\sd

fontNanumMyuongjoThe folder contains font files, which are the basic fonts used in StreamDocs .

2.3.4. \ePapyrus\sdCopy the rest of the StreamDocs standalone package files to a location.

installed

In the StreamDocs standalone package, if only pdfiothe files and 기본폰트files are installed in the designated location, StreamDocs can be executed even if the rest of the files are installed anywhere.
For convenience in this document, all package files are C:\ePapyrus\sdinstalled in a location before proceeding.

3. Running StreamDocs standalone
Run StreamDocs standalone after successful installation start.streamdocs.bator using a script.start.streamdocs.sh

caution
StreamDocs manages resources required for execution in folders or directories depending Windowson the operating system. Or if the user running the script doesn't have all privileges on the above path, it will throw an error. Therefore, before executing the script, you must ensure that the user who will run the script has all privileges on the path. C:\ePapyrus\sdLinux/ePapyrus/sd
start.streamdocs.batstart.streamdocs.sh


3.1. Running StreamDocs standalone on Windows
After typing Windows Key + R cmdor cmdby typing in Run, run a DOS window and then enter the run command as shown below.

C:\Users\Administrator>cd C:\ePapyrus\sd
C:\ePapyrus\sd>start.streamdocs.bat
SD Start

When StreamDocs standalone runs normally, the running logs are continuously displayed on the screen at high speed.
Depending on the operating environment, execution may take several minutes or more.

When the execution of StreamDocs standalone is successfully completed, the operation log is no longer added, and if you increase the log history a little, Started SelectChannelConnector@0.0.0.0:8088a message will be displayed in the middle of the log.

SD Log


3.2. Running StreamDocs standalone on Linux
/ePapyrus/sdAfter moving to the path, enter the execution command as shown below.

ep@server:~/sd$ ./start.streamdocs.sh
When StreamDocs standalone runs normally, the running logs are continuously displayed on the screen at high speed.
Depending on the operating environment, execution may take several minutes or more.

When the execution of StreamDocs standalone is successfully completed, Started SelectChannelConnector@0.0.0.0:8088a message will be displayed saying that no more running logs will be added.

driving example

information
If the following error message occurs during execution, enter the command below and try again.
-bash: ./start.streamdocs.sh:/bin/bash^M: bad interpreter: No such file or directory
sed -i -e 's/\r$//' ./*.sh


3.3. Execute by changing the port
StreamDocs standalone uses port 8088 as default .
If port 8088 is in use or should not be used, you can run it by specifying an available port (eg 8089) in the format " start.streamdocs.bat [PORT_NO] ".

C:\ePapyrus\sd>start.streamdocs.bat 8089
or

ep@server:~/sd$ ./start.streamdocs.sh 8089
caution
start.streamdocs.batWhen running StreamDocs as a script, CONTEXT_PATH cannot be changed.


4. Check out StreamDocs standalone
4.1. Check out the Welcome page
You can check whether StreamDocs standalone has been executed normally by accessing the Welcome page.
The Welcome page http://{host}:{port}/streamdocs/view/welcomecan be accessed with a path that matches the URL format of the server.

4.1.1. After running a web browser on the server where StreamDocs standalone is running, enter the address below in the address bar.

http://127.0.0.1:8088/streamdocs/view/welcome
4.1.2. If StreamDocs standalone has been executed normally, you can see the Welcome page screen as shown below.

welcome page

You can register/delete/view PDF documents freely on the Welcome page.
How to use the Welcome pageUsing the Welcome pagePlease refer to the page.

4.2. Check the admin page
If StreamDocs standalone is running normally, you can easily set up and manage StreamDocs server through the admin page.

4.2.1. After running a web browser on the server where StreamDocs standalone is running, enter the address below in the address bar.

http://127.0.0.1:8088/streamdocs/view/admin
4.2.2. If StreamDocs standalone is executed normally, you can see the admin page screen as below.

admin page

For details on how to use the admin page,Admin page manualRefer to the.

5. Register license
StreamDocs standalone 데모 라이선스is automatically issued/registered after installation.

데모 라이선스When viewing/printing/downloading a document, a “ Demo Version ” text watermark is displayed indicating that it is a demo license, and there are no functional restrictions.

운영 라이선스To register formallylicense managementSee page.

information
If you need help with license issuance, please contact the customer center (02-2051-5207).
