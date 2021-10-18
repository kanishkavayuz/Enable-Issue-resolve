1-to-1 RTC: Sample App Angular8, EnableX Web Toolkit

The Sample Web App demonstrates the use of APIs for EnableX platform to carry out 1-to-1 RTC (Real Time Communication). The main motivation behind this application is to demonstrate usage of APIs and allow developers to ramp up on app by hosting on their own devices instead of directly using servers.

RTC Applications hosted on EnableX platform run natively on supported set of web browsers without any additional plugin downloads.

This basic 1-to-1 Video Chat Application is developed using Angular8, Angular CLI  9.1.7 (https://github.com/angular/angular-cli), HTML, CSS, Bootstrap v4.0.0-alpha.6, JAVA Script, jQuery, EnxRtc (The EnableX Web Toolkit).

> The details of the supported set of web browsers can be found here:
> https://developer.enablex.io/video/browser-compatibility-of-enablex-video/

## 1. Important!

When developing a Client End Point Application, make sure to include the updated EnxRtc.js.

## 2. Trial

Try a quick Video Call: https://try.enablex.io/ 
Sign up for a free trial https://portal.enablex.io/cpaas/trial-sign-up/


## 3 Installation

* Run node sample app server which needs to be configured separately, it is part of noode sample app. Follow the README in node sample app package. 
* Use the node server URL, Port and configure the value in ./proxy.config.json. Currently it is set to https://localhost:4443 
* Run `npm install` 
* Run `npm start`. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.


## 4 Server API

EnableX Server API is a Rest API service meant to be called from Partners' Application Server to provision video enabled
meeting rooms. API Access is given to each Application through the assigned App ID and App Key. So, the App ID and App Key
are to be used as Username and Password respectively to pass as HTTP Basic Authentication header to access Server API.

For this application, the following Server API calls are used:

- https://developer.vcloudx.com/video-api/server-api/rooms-route/#get-rooms - To get list of Rooms
- https://developer.vcloudx.com/video-api/server-api/rooms-route/#get-room-info - To get information of the given Room
- https://developer.vcloudx.com/video-api/server-api/rooms-route/#create-token - To create Token for the given Room

To know more about Server API, go to:
https://developer.vcloudx.com/video-api/server-api/


## 5 Client API

Client End Point Application uses Web Toolkit EnxRtc.js to communicate with EnableX Servers to initiate and manage RTC Communications.

To know more about Client API, go to:
https://developer.enablex.io/video-api/client-api/
