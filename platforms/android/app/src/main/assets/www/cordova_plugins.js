cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-admob.AdMob",
    "file": "plugins/cordova-plugin-admob/www/AdMob.js",
    "pluginId": "cordova-plugin-admob",
    "clobbers": [
      "window.plugins.AdMob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-whitelist": "1.3.2",
  "cordova-admobsdk": "1.0.4",
  "cordova-plugin-admob": "3.2.4"
};
// BOTTOM OF METADATA
});