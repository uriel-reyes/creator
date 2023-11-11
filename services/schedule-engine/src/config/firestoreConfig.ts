import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './serviceAccountKey.json'; // Your Firebase service account JSON file

initializeApp({
  credential: cert(serviceAccount)
});

export const db = getFirestore();
