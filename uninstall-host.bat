@echo off

SET NATIVEHOSTNAME=com.ibm.firstdiscovery
SET APPLICATIONNAME=First-Discovery-Chrome-Extension
SET INSTALLPATH=%ProgramFiles(X86)%\%APPLICATIONNAME%
SET REGISTRYPATH=HKCU\Software\Google\Chrome\NativeMessagingHosts\%NATIVEHOSTNAME%


echo This program will uninstall a native messaging host and remove a registry value for chrome.
echo.
echo installation path: %INSTALLPATH%
echo registrypath: %REGISTRYPATH%
echo native host name: %NATIVEHOSTNAME%

echo Deleting installation path and existing registry key if they exist
rmdir /S /Q "%INSTALLPATH%"
REG DELETE "%REGISTRYPATH%" /f

pause
