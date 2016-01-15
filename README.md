# first-discovery-native-host

####Before We Begin:
It's a good idea to read up on Chrome's messaging (native and non-native).
https://developer.chrome.com/extensions/messaging
https://developer.chrome.com/extensions/nativeMessaging

####Installation:
1. Because of hardcoded paths required in the registry, make sure the repo is cloned to
**C:\Users\IBM_ADMIN\projects\first-discovery-native-host**. Hardcoded paths in
the registry seem unavoidable. If you want to install to a different directory, you can change
the path in the install-host.bat file. (Thankfully the "path" value  in
com.ibm.firstdiscovery.json can be relative to the file's location)

2. Run install-host.bat



####Usage:
Go to chrome-extension://fojfkfdnipccdhhjakieojkglomfaloe/index.html and http://extension-demo-jtworkme.mybluemix.net/

Once on the pages, you can try sending messages.

######**Heads Up:**
-Only the python host works as of now. To use it change the "path" value in
com.ibm.firstdiscovery.json to point to **python-host.bat** instead of
**host.bat**
