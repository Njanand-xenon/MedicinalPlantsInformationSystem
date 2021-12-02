
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC11wdWy8TYsTJDVlK3BWnOIbjbCf49SWk",
  authDomain: "mpis-mini.firebaseapp.com",
  databaseURL: "https://mpis-mini-default-rtdb.firebaseio.com",
  projectId: "mpis-mini",
  storageBucket: "mpis-mini.appspot.com",
  messagingSenderId: "751873622896",
  appId: "1:751873622896:web:10d6379dcb3e7a1274c5b5"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;