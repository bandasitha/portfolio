import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: "AIzaSyCusxh06uSE6GLpav156KTejDQ9y6w3uGE",
  authDomain: "portfolio-contact-form-87424.firebaseapp.com",
  projectId: "portfolio-contact-form-87424",
  storageBucket: "portfolio-contact-form-87424.appspot.com",
  messagingSenderId: "337587494874",
  appId: "1:337587494874:web:145e2dbe7b19b4f024aae3",
  experimentalForceLongPolling: true, 
  useFetchStreams: false, 
});

const db = getFirestore(app);

export default db;