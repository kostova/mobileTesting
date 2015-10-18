document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	cordova.exec(function() {}, 
		function() {},
		"DeviceReadyPlugin",
		"",
		[]);
}