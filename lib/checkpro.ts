import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"

export async function checkPro(userId: string) {
  const snap = await getDoc(doc(db, "users", userId))

  if (!snap.exists()) return false

  const data = snap.data()
  const expiry = new Date(data.expiryDate)

  return data.premium && expiry > new Date()
}