import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDtJpskbcMf-wkGgiQxFy1KIZZ9KCj8LPA",
  authDomain: "81344023537-9j2a705pr2kv90redncvgn3e1d4p3vht.apps.googleusercontent.com",
  projectId: "mizoprep-8f52c",
  storageBucket: "mizoprep-8f52c.firebasestorage.app",
  messagingSenderId: "81344023537",
  appId: "1:81344023537:android:2e9d2550edfc06aeca9250"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)