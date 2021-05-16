import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwW7aqc7BUmyoVNs0dwUwkHieT1XvhgIo",
  authDomain: "disneyplus-clone-a9a03.firebaseapp.com",
  projectId: "disneyplus-clone-a9a03",
  storageBucket: "disneyplus-clone-a9a03.appspot.com",
  messagingSenderId: "660409768503",
  appId: "1:660409768503:ios:89885a387335c49f79bdb2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
