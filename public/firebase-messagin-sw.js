
importScripts('/__/firebase/8.2.2/firebase-app.js');
importScripts('/__/firebase/8.2.2/firebase-messaging.js');
importScripts('/__/firebase/init.js');


var firebaseConfig = {
    apiKey: "AIzaSyDE0GkKWVZW6aoISuIZHZ2PsZQVNn-ypkw",
    authDomain: "quizapp-59e2f.firebaseapp.com",
    projectId: "quizapp-59e2f",
    storageBucket: "quizapp-59e2f.appspot.com",
    messagingSenderId: "859763690241",
    appId: "1:859763690241:web:6953601bea0f9f6c7a6900"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  
  var messaging = firebase.messaging();

 