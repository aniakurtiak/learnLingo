import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAXOHSnwXDXyo08kuoU4yEaQGLMAoHlhNo",
  authDomain: 'learnlingo-7d407.firebaseapp.com',
  projectId: 'learnlingo-7d407',
  storageBucket: 'learnlingo-7d407.appspot.com',
  messagingSenderId: '179165568182',
  appId: '1:179165568182:web:1909949e86bc66d4f99a17',
  databaseURL:
    'https://learnlingo-7d407-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const database = getDatabase(app);

const dbRef = ref(getDatabase());


export { app, googleAuthProvider, database, auth, dbRef };
