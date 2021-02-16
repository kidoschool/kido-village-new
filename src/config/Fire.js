import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {
    apiKey: "AIzaSyAK6znZE9jLTW584X8ObvLprIyWNwsOQKQ",
    authDomain: "kido-village-userauth.firebaseapp.com",
    projectId: "kido-village-userauth",
    storageBucket: "kido-village-userauth.appspot.com",
    messagingSenderId: "6241578712",
    appId: "1:6241578712:web:474553d13df9f94acd71ad",
};

const fire = firebase.initializeApp(config);

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user.email)
  }).catch((error) => {
    console.log(error.message)
  })
}

const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const signInWithFacebook = () => {
  auth.signInWithPopup(facebookProvider).then((res) => {
    console.log(res.user.email)
  }).catch((error) => {
    console.log(error.message)
  })
}


export default fire;