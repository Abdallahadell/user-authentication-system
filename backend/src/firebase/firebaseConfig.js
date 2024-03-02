const firebaseApp = require('firebase/app');
const firebaseAuth = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyBQhWFIos1lec6c8V-L9LxNFKSs9bA5feU",
  authDomain: "gizasystemsinterview.firebaseapp.com",
  projectId: "gizasystemsinterview",
  storageBucket: "gizasystemsinterview.appspot.com",
  messagingSenderId: "988513943025",
  appId: "1:988513943025:web:9c62f6b03fcca6d5c29850",
  measurementId: "G-QJ9NDC4VR7"
};

firebaseApp.initializeApp(firebaseConfig);

module.exports = { firebaseAuth };


