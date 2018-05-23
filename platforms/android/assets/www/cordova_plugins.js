cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "id": "com.danielsogl.cordova.clipboard.Clipboard",
        "file": "plugins/com.danielsogl.cordova.clipboard/www/clipboard.js",
        "pluginId": "com.danielsogl.cordova.clipboard",
        "clobbers": [
            "cordova.plugins.clipboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-compat": "1.2.0",
    "phonegap-plugin-barcodescanner": "6.0.8",
    "com.danielsogl.cordova.clipboard": "1.0.2"
};
// BOTTOM OF METADATA
});