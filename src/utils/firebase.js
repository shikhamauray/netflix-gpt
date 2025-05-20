import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQ29coiTqjtQ4jJvenSV3UAPoC53aG_1o",
  authDomain: "netflix-gpt-f8af1.firebaseapp.com",
  projectId: "netflix-gpt-f8af1",
  storageBucket: "netflix-gpt-f8af1.firebasestorage.app",
  messagingSenderId: "330814371578",
  appId: "1:330814371578:web:087b8d26548bb409d1bb43",
  measurementId: "G-0CZWEZWF70"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // ✅ REQUIRED
