// Comenzar Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZFytkjLNm4yT7UrOQLmizi6J-uq8utU",
  authDomain: "login-firebase-ignacio.firebaseapp.com",
  projectId: "login-firebase-ignacio",
  storageBucket: "login-firebase-ignacio.appspot.com",
  messagingSenderId: "321284691457",
  appId: "1:321284691457:web:7f52eed26549b590b81200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
let db = firebase.firestore();

// Add login form submit event listener
document.getElementById('loginForm').addEventListener('submit', (event) => {
    
    event.preventDefault();

    let name = document.getElementById('nameField').value;
    let lastName = document.getElementById('lastNameField').value;
    let email = document.getElementById('emailField').value;
    let gender = document.getElementById('genderField').value;

// Save the user data to Firebase
db.collection("users").add({
    name: name,
    lastName: lastName,
    email: email,
    gender: gender
    })
    .then(function(docRef) {
        alert("¡Bienvenido! Correo: " + email);
    })
    .catch(function(error) {
        alert("Error en el registro");
    });
});