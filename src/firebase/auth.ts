import { FirebaseError } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  connectAuthEmulator,
} from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { app } from ".";
import { isDevEnv } from "./environment";

const auth = getAuth(app);
auth.useDeviceLanguage();

if (isDevEnv) {
  connectAuthEmulator(auth, "http://localhost:9099");
}

export interface AuthError extends FirebaseError {
  email: string;
}

export async function signIn(): Promise<User | null> {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error("Credentials are not present!");
    }

    return result.user;
  } catch {
    return null;
  }
}

export function useAuthenticator() {
  const busyRef = useRef(false);
  const [data, setData] = useState<User | null>();

  useEffect(() => {
    if (!data && !busyRef.current) {
      busyRef.current = true;
      signIn()
        .then(setData)
        .catch(console.error)
        .then(() => {
          busyRef.current = false;
        });
    }
  }, []);

  return data;
}
