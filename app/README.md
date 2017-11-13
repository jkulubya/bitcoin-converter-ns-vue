# NativeScript Vue.js Template

This app is a port of the app made in [http://www.codemag.com/article/1711051](http://www.codemag.com/article/1711051) to NativeScript + Vue.js.

It's based on the NS-Vue + Webpack template at [https://github.com/tralves/nativescript-vue-webpack-template] (https://github.com/tralves/nativescript-vue-webpack-template) and NS-Vue at [nativescript-vue](https://github.com/rigor789/nativescript-vue).

## Usage

1. Ensure that the NativeScript tools and Webpack are installed.

2. Watch for changes while developing

In two separate terminals run:
```
# terminal 1
webpack --watch --env.tns --env.android
# or
webpack --watch --env.tns --env.ios

# terminal 2
cd tns && tns debug android
# or
cd tns && tns debug ios
```

3. Bundle Android or iOS for deploy (see: [{NS} documentation on webpack bundling](https://docs.nativescript.org/tooling/bundling-with-webpack#bundling))
```
npm run start-android-bundle -- --clean
npm run start-ios-bundle -- --clean
```
