# CanChamMX
Movile application build in Ionic v1 framework

## Getting Started: 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Install Ionic in your machine
```
npm install -g cordova ionic
```
For more information check [Ionic](http://ionicframework.com/docs/guide/installation.html) documentation

## Running App:
Once you have Ionic and all necessary dependencies installed, you can run the application.

### Desktop browser
Test the app in a browser running the serve command in the project’s root folder.
```
$ cd CanChamApp
$ ionic serve
```

### Native app
Testing on Android. 
To test on the device, simply plug it in, and run in the project’s root folder.
```
$ionic run android
```
If this doesn’t work, make sure you have USB debugging enabled on your device, as [described](https://developer.android.com/studio/run/device.html) on the Android developer site.

Testing on iOS. 
To test on the device, simply plug it in, and run in the project’s root folder.
```
$ionic build ios
```
Then, open the xcodeproject on the platforms folder following the next path:

```
CanChamApp/platforms/ios/CanChamApp.xcodeproj
```
and run it on xcode.

You must have an account on xcode (your apple id credentials). On your iphone, you have to go to:

```
Settings->General->Profiles & Device Management
```

Then, look for your account, and trust it.

### Plugins and the platforms
The plugins and the platforms are already in the project’s root folder. If you have problems with the plugins, reinstall them following these next steps.

### Facebook plugin
```
https://github.com/Telerik-Verified-Plugins/Facebook
```

### Google plugin
```
$ cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid
```


