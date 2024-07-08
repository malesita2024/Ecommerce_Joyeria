import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAC3QsDt_KfR81Lwk1Wrm6wCXg8snsWLI",
  authDomain: "joyeriaecommerce-6731a.firebaseapp.com",
  projectId: "joyeriaecommerce-6731a",
  storageBucket: "joyeriaecommerce-6731a.appspot.com",
  messagingSenderId: "295915360118",
  appId: "1:295915360118:web:5d11fa3b9e292313bcf457"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);