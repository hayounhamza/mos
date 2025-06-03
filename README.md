# Mosafir.ma

This project is a React Native application.

## Android build instructions

1. Install Android Studio and ensure the Android SDK is available.
2. Create `android/local.properties` with the path to your SDK and your release keystore settings or export them as environment variables. Example:

```
sdk.dir=/path/to/Android/sdk
MYAPP_UPLOAD_STORE_FILE=/path/to/keystore.jks
MYAPP_UPLOAD_KEY_ALIAS=your_alias
MYAPP_UPLOAD_STORE_PASSWORD=your_store_password
MYAPP_UPLOAD_KEY_PASSWORD=your_key_password
```

`android/local.properties` is ignored by git, so it can safely contain these values.

3. Run the build:

```bash
npm install
cd android
./gradlew assembleRelease
```

The release APK will be created in `android/app/build/outputs/apk/release/app-release.apk`.
