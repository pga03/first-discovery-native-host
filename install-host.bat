@echo off

SET NATIVEHOSTNAME=com.ibm.firstdiscovery
SET APPLICATIONNAME=First-Discovery-Chrome-Extension
SET INSTALLPATH=%ProgramFiles(X86)%\%APPLICATIONNAME%
SET REGISTRYPATH=HKCU\Software\Google\Chrome\NativeMessagingHosts\%NATIVEHOSTNAME%

REM GET PATH CONTAINING INSTALL-HOST.BAT
SET SOURCEPATH=%~dp0

REM AND NOW REMOVE THE TRAILING "\" CHARACTER FROM THE PATH
SET SOURCEPATH=%SOURCEPATH:~0,-1%


echo This program will install a native messaging host and set a registry value for chrome.
echo.
echo installation path: %INSTALLPATH%
echo registrypath: %REGISTRYPATH%
echo native host name: %NATIVEHOSTNAME%
echo source path: %SOURCEPATH%


IF EXIST "%INSTALLPATH%" (
	echo Deleting installation path and existing registry key if they exist
	rmdir /S /Q "%INSTALLPATH%"
	REG DELETE "%REGISTRYPATH%" /f
	)

mkdir "%INSTALLPATH%"
xcopy "%SOURCEPATH%" "%INSTALLPATH%"
REG ADD "%REGISTRYPATH%" /ve /t REG_SZ /d "%INSTALLPATH%\%NATIVEHOSTNAME%.json" /f

pause
