// // Firebase App (the core Firebase SDK) is always required and must be listed first 
// importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
// // Add Firebase products that you want to use
// importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// //FireBase Messaging Implementation

// const firebaseConfig = {
//   apiKey: "AIzaSyB7cyKN_ue9390iqtlHWN2t1p9g_BfxMwQ",
//   authDomain: "quizapp-push-notification.firebaseapp.com",
//   // databaseURL: "https://fir-push-notification1.firebaseio.com",
//   projectId: "quizapp-push-notification",
//   // storageBucket: "fir-push-notification1.appspot.com",
//   messagingSenderId: "122159620785",
//   appId: "1:122159620785:web:85d357d087db8973b5b890"
// };

// firebase.initializeApp(firebaseConfig);
// firebase.messaging();

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>

// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// eslint-disable-next-line no-undef
importScripts('https://firebase.google.com/docs/web/setup#available-libraries');

// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDE0GkKWVZW6aoISuIZHZ2PsZQVNn-ypkw",
    authDomain: "quizapp-59e2f.firebaseapp.com",
    projectId: "quizapp-59e2f",
    storageBucket: "quizapp-59e2f.appspot.com",
    messagingSenderId: "859763690241",
    appId: "1:859763690241:web:6953601bea0f9f6c7a6900"
  };
  // Initialize Firebase
  // eslint-disable-next-line no-undef
  firebase.initializeApp(firebaseConfig);
  // eslint-disable-next-line no-undef
  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener('notificationclick', event => {
    console.log(event)
    return event;
  });