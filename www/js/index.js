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
            alert(s);
            $('#mac').val(s);

		}, 
		function (error) {
			alert("Scanning failed: " + error);
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
            alert(s2);
            $('#serial').val(s2);

		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
    );


}

app.initialize();
