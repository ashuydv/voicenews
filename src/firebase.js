import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_y-4-lmlRExV1GIBPwVXTTwhw4uiV-bg",
  authDomain: "news-application-4947b.firebaseapp.com",
  projectId: "news-application-4947b",
  storageBucket: "news-application-4947b.appspot.com",
  messagingSenderId: "186459297867",
  appId: "1:186459297867:web:e4a75c48537fa7919fd5ce",
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth();
