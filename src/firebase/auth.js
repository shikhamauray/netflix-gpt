// src/firebase/auth.js
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
