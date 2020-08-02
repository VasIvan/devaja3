import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA0UDmuHuaNIu_wVd1Z_vhf1sar6-5AhzE',
  authDomain: 'devaja3-1153a.firebaseapp.com',
  databaseURL: 'https://devaja3-1153a.firebaseio.com',
  projectId: 'devaja3-1153a',
  storageBucket: 'devaja3-1153a.appspot.com',
  messagingSenderId: '288663982446',
  appId: '1:288663982446:web:9f3622514108daa192317f',
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
