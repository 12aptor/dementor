let cerrarSesion = document.getElementById("cerrarSesion");
let header = document.getElementById("header");
let main = document.getElementById("main");
let footer = document.getElementById("footer");

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
        header.removeAttribute("hidden");
        main.removeAttribute("hidden");
        footer.removeAttribute("hidden");
    } else {
        // No user is signed in.
        document.location.href = "index.html"
    }
});

cerrarSesion.onclick = () => {
    firebase.auth().signOut();
}
