import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  limit,
  orderBy,
  where,
  setDoc,
  collectionGroup,
  Timestamp
} from 'firebase/firestore'
import { firestoreDb } from './setup'

export const queryByCollection = async (col) => {
  const q = query(
    collection(firestoreDb, col),
    orderBy("created_at")
  );

  const snapshot = await getDocs(q)

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })

  return docs
}

export const set = async (col, document) => {
  await setDoc(doc(collection(firestoreDb, col)), document, { merge: true })
}

export const add = async (col, document) => {
  const colRef = collection(firestoreDb, col)

  const docRef = await addDoc(colRef, document)

  return docRef
}

export const del = async (col, id) => {
  const docRef = doc(firestoreDb, col, id)
  return await deleteDoc(docRef)
}

/* CUSTOM FUNCTIONS */

export const isUserAuthorized = async (userEmail) => {
  const q = query(collection(firestoreDb, 'users'), where('email', '==', userEmail), limit(1))

  const snapshot = await getDocs(q)

  const doc = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })

  if (!doc.length) {
    throw new Error('User not authorized to log in')
  } else {
    return true
  }
}
