let btnLogin = document.getElementById("btnLogin");
let inputNombre = document.getElementById("inputNombre");
let inputPassword = document.getElementById("inputPassword");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRp7Xw-hY7ayJVKj41lJNWzQEmgtn_NCM",
    authDomain: "dementor-5c060.firebaseapp.com",
    databaseURL: "https://dementor-5c060.firebaseio.com",
    projectId: "dementor-5c060",
    storageBucket: "dementor-5c060.appspot.com",
    messagingSenderId: "384743901386",
    appId: "1:384743901386:web:3eff1bee81ac92c69a0c33"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        document.location.href = "usuarios.html";

        // let user = firebase.auth().currentUser;

        // if (user != null) {
        //     let email = user.email;
        //     console.log(email);

        //     datoUsuario.innerHTML = `${email}`

        // }

    } else {
        // No user is signed in.
    }
});

btnLogin.onclick = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(inputNombre.value, inputPassword.value).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("Datos Incorrectos");

    });
}
// cerrarSesion.onclick = () => {
//     firebase.auth().signOut();
// }


