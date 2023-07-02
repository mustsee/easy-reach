import { initializeApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const apiKey =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PROD_API_KEY
    : import.meta.env.VITE_DEV_API_KEY

const firebaseConfig = {
  apiKey,
  authDomain: 'easy-reach-1f358.firebaseapp.com',
  projectId: 'easy-reach-1f358',
  storageBucket: 'easy-reach-1f358.appspot.com',
  messagingSenderId: '344931134629',
  appId: '1:344931134629:web:c0e7bd69de1f0c383f714c'
}

const firebaseApp = initializeApp(firebaseConfig)
const firestoreDb = getFirestore(firebaseApp)

if (import.meta.env.MODE !== 'production') {
  connectFirestoreEmulator(firestoreDb, 'localhost', 8080)
  connectAuthEmulator(getAuth(), 'http://localhost:9099')
}

export { firebaseApp, firestoreDb }
