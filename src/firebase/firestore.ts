import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { isDevEnv } from "./environment";
import { app } from ".";

export const firestore = getFirestore(app);

if (isDevEnv) {
  connectFirestoreEmulator(firestore, "localhost", 8080);
}
