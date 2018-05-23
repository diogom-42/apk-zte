var resultMac;
var resultSerial;


document.addEventListener("deviceready", init, false);

function init() {
	document.querySelector("#mac").addEventListener("touchend", startScan, false);
    resultMac = document.querySelector("#mac");

}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var s = result.text
            resultMac.innerHTML = s;
            $('#mac').val(s);

		}, 
		function (error) {
			alert("Scanning failed: " + error);
		},
		{
			showTorchButton : true, // iOS and Android
			torchOn: true, // Android, launch with the torch switched on (if available)
			prompt : "Place a barcode inside the scan area", // Android
			resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
			disableSuccessBeep: false // iOS and Android
		}
    );


}

document.addEventListener("deviceready", init2, false);

function init2() {

    document.querySelector("#serial").addEventListener("touchend", startScan2, false);
	resultSerial = document.querySelector("#serial");
}

function startScan2() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var s2 = result.text
            resultSerial.innerHTML = s2;
            $('#serial').val(s2);

		}, 
		function (error) {
			alert("Scanning failed: " + error);
		},
		{
			showTorchButton : true, // iOS and Android
			torchOn: true, // Android, launch with the torch switched on (if available)
			prompt : "Place a barcode inside the scan area", // Android
			resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
			disableSuccessBeep: false // iOS and Android
		}
    );


}

app.initialize();
