import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0D6EkukqGgt8JaDEBCGvVk_jMxxrLkgw",
    authDomain: "docs-nextjs-a8680.firebaseapp.com",
    projectId: "docs-nextjs-a8680",
    storageBucket: "docs-nextjs-a8680.appspot.com",
    messagingSenderId: "692348645092",
    appId: "1:692348645092:web:b7fb07d5f54d3986ae46f1"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

export { db }