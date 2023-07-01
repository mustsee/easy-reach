import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB9qi8KWgD9LtIERZHMKyf09oDGN4kPKKQ',
  authDomain: 'easy-reach-1f358.firebaseapp.com',
  projectId: 'easy-reach-1f358',
  storageBucket: 'easy-reach-1f358.appspot.com',
  messagingSenderId: '344931134629',
  appId: '1:344931134629:web:c0e7bd69de1f0c383f714c'
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firestoreDb = getFirestore(firebaseApp)
