const firebaseApp = require('firebase/app');
const firebaseAuth = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyBQhWFIos1lec6c8V-L9LxNFKSs9bA5feU",
  authDomain: "gizasystemsinterview.firebaseapp.com",
  projectId: "gizasystemsinterview",
  storageBucket: "gizasystemsinterview.appspot.com",
  messagingSenderId: "988513943025",
  appId: "1:988513943025:web:5b31370fd196fb12c29850",
  measurementId: "G-RSJ936YTCN"
};

firebaseApp.initializeApp(firebaseConfig);

module.exports = { firebaseAuth };


