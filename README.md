# Tutorial Nodejs Websocket Firehose

This is a starter code to connect to ARTIK Cloud [Websocket Firehose (/live)](https://developer.artik.cloud/documentation/data-management/rest-and-websockets.html#firehose-websocket) endpoint.   By running this sample you will learn to:

- Connect to the ARTIK Cloud firehose websocket url.
- Monitor realtime messages sent to ARTIK Cloud by the specified source device.

## Requirements

- [node](https://nodejs.org/en/download/)  (Version >= 6.5.0)
- [npm](https://www.npmjs.com/get-npm) (Version >= 3.10.0)

## Setup

### Setup at ARTIK Cloud

- Go to the Devices Dashboard (https://my.artik.cloud) and [add a new device](https://developer.artik.cloud/documentation/tools/web-tools.html#connecting-a-device):

  ```
  Device Type Name: Example Simple Smart Light
  Unique Name: cloud.artik.example.simple_smartlight
  ```

- Get the Device ID for your newly created device in the [Device Info](https://developer.artik.cloud/documentation/tools/web-tools.html#managing-a-device-token) screen.

- Retrieve a [user token](https://developer.artik.cloud/documentation/tools/api-console.html#find-your-user-token) via api-console.   

### Setup Project

Before running the sample, fill in the following into your the `config.json` file:

```json
{
  "userToken": "YOUR-USER-TOKEN",
  "deviceID": "YOUR-DEVICE-ID"
}
```

**Install dependencies**

 ```bash
$ npm install
 ```

##### Run Project

```bash
$ node tutorial-websocket-firehose.js
```

## Demo:

1. Your terminal screen will look similar to below after you run your project.   A websocket connection is open and will output any messages that were sent to the device.

```bash
$ node tutorial-websocket-firehose.js 
Connecting to:  wss://api.artik.cloud/v1.1/live?authorization=bearer+115e12&sdids=ce111c31d
Websocket connection is open ...
```

2. Send messages to your Example Simple Smart Light using the [Online Device Data Simulator](https://developer.artik.cloud/documentation/tools/web-tools.html#using-the-online-device-simulator).   This sample has the following settings:
   1. Simulate data on the boolean "state" field and keep the default interval to send every 5000 ms (5 secs).   
   2. Alternative between true/false value by setting the Data Pattern to Alternating Boolean.
3. Go back to your running sample application.   The terminal screen should output a message every 5 seconds:

```bash
$ node tutorial-websocket-firehose.js 
Connecting to:  wss://api.artik.cloud/v1.1/live?authorization=bearer+115e12&sdids=ce111c31d
Websocket connection is open ...

Received message with data: {"mid":"bd5b362df7534331bc6ca8ea8921bef1","data":{"state":false},"ts":1498778380000,"boid":"dfef0b21074349f79aaf6081c7865e7d","sdtid":"dtd1d3e0934d9348b783166938c0380128","cts":1498778381652,"uid":"1abcdef131210","mv":1,"sdid":"ce111c31d"}

Received message with data: {"mid":"e6b2d0263136449a8ddbd94b0d007dcc","data":{"state":true},"ts":1498778385000,"boid":"dfef0b21074349f79aaf6081c7865e7d","sdtid":"dtd1d3e0934d9348b783166938c0380128","cts":1498778386263,"uid":"1abcdef131210","mv":1,"sdid":"ce111c31d"}

Received message with data: {"mid":"9f0dab4eaced4233b2df29f4f49c0efa","data":{"state":false},"ts":1498778390000,"boid":"dfef0b21074349f79aaf6081c7865e7d","sdtid":"dtd1d3e0934d9348b783166938c0380128","cts":1498778391630,"uid":"1abcdef131210","mv":1,"sdid":"ce111c31d"}
```

4. Clean up by remembering to stop the simulation so it does not accrue any more data usage.


## More about ARTIK Cloud

If you are not familiar with ARTIK Cloud, we have extensive documentation at [https://developer.artik.cloud/documentation](https://developer.artik.cloud/documentation)

The full ARTIK Cloud API specification can be found at [https://developer.artik.cloud/documentation/api-spec.html](https://developer.artik.cloud/documentation/api-spec.html)

Peek into advanced sample applications at [https://developer.artik.cloud/documentation/samples/](https://developer.artik.cloud/documentation/samples/)

To create and manage your services and devices on ARTIK Cloud, visit the Developer Dashboard at [https://developer.artik.cloud](https://developer.artik.cloud/)

## License and Copyright

Licensed under the Apache License. See [LICENSE](./LICENSE).

Copyright (c) 2017 Samsung Electronics Co., Ltd.

