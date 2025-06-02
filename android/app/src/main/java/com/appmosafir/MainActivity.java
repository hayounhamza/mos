package com.appmosafir;

import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Mosafir.ma"; // must match the "name" in app.json
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // Required for react-native-gesture-handler and react-native-screens
    super.onCreate(null);
  }
}
