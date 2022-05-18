import { getStorage, connectStorageEmulator } from "firebase/storage";
import { app } from ".";
import { isDevEnv } from "./environment";

export const storage = getStorage(app);

if (isDevEnv) {
  connectStorageEmulator(storage, "http://localhost", 9199);
}
