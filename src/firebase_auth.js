import firebase from "firebase";

import config from "./firebase_config";

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;