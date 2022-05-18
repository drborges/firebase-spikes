import { FirebaseError } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from ".";

const auth = getAuth(app);
auth.useDeviceLanguage();

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
  const [data, setData] = useState<User | null>();

  useEffect(() => {
    if (!data) {
      signIn().then(setData);
    }
  }, []);

  return data;
}
