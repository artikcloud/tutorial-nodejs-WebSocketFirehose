/**
* Websocket starter code to connect to ARTIK Cloud Firehose (/live) endpoint.
* For more information, view the documentation at the following link:
*
* https://developer.artik.cloud/documentation/api-reference/websockets-api.html
*/

'use strict';

var ConfigWSParameters = require("./config.json");
var WebSocket = require("ws");

var ConfigWSConnection = {

    "scheme": "wss",
    "domain": "api.artik.cloud",
    "version": "v1.1",
    "path": "live"

};

/**
* query string parameters that will be appended
* to connection endpoint 
*/
function getConnectionParameters(config) {

    return "authorization=bearer+" + config.userToken + "&" +
                "sdids=" + config.deviceID;
}

/**
* build connection string (url) for websocket connection
* including any connection paramters
*/
function getConnectionString(config, parameters) {

    var connectionString =
            config.scheme + "://" +
            config.domain + "/" +
            config.version + "/" +
            config.path + "?" +
            getConnectionParameters(parameters);

    console.log("Connecting to: ", connectionString);

    return connectionString;

}

/**
* create connection
*/
var ws = new WebSocket(
    getConnectionString(ConfigWSConnection, ConfigWSParameters));

/**
* listen for messages
*/
ws.on("message", function (data) {
    console.log("Received message with data: %s\n", data);
});

ws.on("open", function () {
    console.log("Websocket connection is open ...");
});

ws.on("close", function () {
    console.log("Websocket connection is closed ...");
});

