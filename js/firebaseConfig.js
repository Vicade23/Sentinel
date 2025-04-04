import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js'
import {getAuth} from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js'




const firebaseConfig = {
    apiKey: "AIzaSyCzDDJ5lBJHMPaxi6hhRQ590od4uJ61OgQ",
    authDomain: "campus-safety-project-9f3cf.firebaseapp.com",
    projectId: "campus-safety-project-9f3cf",
    storageBucket: "campus-safety-project-9f3cf.firebasestorage.app",
    messagingSenderId: "1009160047729",
    appId: "1:1009160047729:web:4fe9cd63137494f2851fd0",
    measurementId: "G-MCZ3W7CH4M"
  };



  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);