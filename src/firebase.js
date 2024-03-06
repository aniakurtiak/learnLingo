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


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: "learnlingocom.firebaseapp.com",
//   projectId: "learnlingocom",
//   storageBucket: "learnlingocom.appspot.com",
//   messagingSenderId: "143061014194",
//   appId: "1:143061014194:web:8170b1ba93701eb8631bab",
//   measurementId: "G-YDY41SJS74"
// };

const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const database = getDatabase(app);

const dbRef = ref(getDatabase());

const currentUser = auth.currentUser;


export { app, googleAuthProvider, currentUser,database, auth, dbRef };
