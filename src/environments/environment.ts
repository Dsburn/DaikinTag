// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBFdV1P59L6myDaljyjMPslV7dEmdM_Lzo',
    authDomain: 'crud-firebase-dd2f3.firebaseapp.com',
    databaseURL: 'https://crud-firebase-dd2f3.firebaseio.com',
    projectId: 'crud-firebase-dd2f3',
    storageBucket: 'crud-firebase-dd2f3.appspot.com',
    messagingSenderId: '876944077435'
  }
};
