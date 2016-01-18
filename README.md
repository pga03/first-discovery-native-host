# first-discovery-native-host

####Before We Begin:
It's a good idea to read up on Chrome's messaging (native and non-native).
https://developer.chrome.com/extensions/messaging
https://developer.chrome.com/extensions/nativeMessaging

####Installation:
0. Install the Chrome extension (https://github.com/pga03/extension-chrome-windows)

1. Because of hardcoded paths required in the registry, make sure the repo is cloned to
**C:\Users\IBM_ADMIN\projects\first-discovery-native-host**. Hardcoded paths in
the registry seem unavoidable. If you want to install to a different directory, you can change
the path in the install-host.bat file. (Thankfully the "path" value  in
com.ibm.firstdiscovery.json can be relative to the file's location)

2. Run install-host.bat

####Usage:
As of now, the host displays a GUI window that contains logging information.
This can be easily changed, but for now, it is helpful to have.

Click on the First Discovery Extension icon to go to http://extension-demo-jtworkme.mybluemix.net/.

Once on the pages, you can try sending messages. A example message is already
populated in the textbox

####**Heads Up:**
-Only the python host works as of now. Because of this, Python 2.7 is a
dependency.

-python-host has logging turned off by default. Use isLogging = True to enable
(keep in mind the log path)

-The host assumes a drive is attached to E:. which is where is token and
preferences files are written to

