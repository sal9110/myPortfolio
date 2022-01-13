import { createContext, useEffect, useState } from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { firebaseConfig } from "../firebase"
export const FirebaseContext = createContext(null)

export const FirebaseProvider = ({ children }) => {
  firebase.initializeApp(firebaseConfig)
  const firestore = firebase.firestore()
  const ProjectsRef = firestore.collection("projects")
  const MessagesRef = firestore.collection("messages")
  const [PersonalInfo, setPersonalInfo] = useState(null)

  useEffect(() => {
    const personalInfoRef = firestore
      .collection("personal-info")
      .doc("/salvatore")
      .get()

    const getInfo = async () => {
      setPersonalInfo((await personalInfoRef).data())
    }

    getInfo()
  }, [])

  return (
    <FirebaseContext.Provider
      value={{
        firestore,
        ProjectsRef,
        MessagesRef,
        PersonalInfo,
      }}>
      {children}
    </FirebaseContext.Provider>
  )
}
