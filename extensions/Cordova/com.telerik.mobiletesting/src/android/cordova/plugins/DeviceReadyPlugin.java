package cordova;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaActivity;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * This class broadcasts ACTION_CORDOVA_DEVICE_READY Intent when all Cordova stuff is loaded.
 */
public class DeviceReadyPlugin extends CordovaPlugin {
	
	private static final String ACTION_CORDOVA_DEVICE_READY = "com.telerik.mobiletesting.android.cordova.deviceready";
    
	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		cordova.getActivity().sendBroadcast(new Intent(ACTION_CORDOVA_DEVICE_READY));
		Log.i("DeviceReadyPlugin", "ACTION_CORDOVA_DEVICE_READY sent.");
        return true;
    }    
}
