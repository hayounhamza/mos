# Mosafir.ma

This project is a React Native application.

## Android build instructions

1. Install Android Studio and ensure the Android SDK is available.
2. Create `android/local.properties` with the path to your SDK:
3. Ensure the keystore passwords in `android/gradle.properties` are correct.

```
sdk.dir=/path/to/Android/sdk
```

4. Run the build:

```bash
npm install
cd android
./gradlew assembleRelease
```

The release APK will be created in `android/app/build/outputs/apk/release/app-release.apk`.
