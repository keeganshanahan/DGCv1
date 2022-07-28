// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'intake-data',
    appId: '1:1005044738792:web:584b764c0d15e1d689b75d',
    storageBucket: 'intake-data.appspot.com',
    apiKey: 'AIzaSyClH6Jk6TNYlUCxm-Y6dp4VSWzVeIy0zkA',
    authDomain: 'intake-data.firebaseapp.com',
    messagingSenderId: '1005044738792',
  },
  production: true
  
};
export const environmentAuth = {
  production: false,
  firebaseConfigAuth: {
  apiKey: "AIzaSyDZU_3izCnSNFdkdbNopZJPuWvIXv_xbGU",
  authDomain: "login1-0-38c30.firebaseapp.com",
  projectId: "login1-0-38c30",
  storageBucket: "login1-0-38c30.appspot.com",
  messagingSenderId: "622812349221",
  appId: "1:622812349221:web:486f94206f291e21f990cc",
  measurementId: "G-M9SQ4ZRWRE"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


