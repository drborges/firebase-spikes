import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { isDevEnv } from "./environment";
import { app } from ".";

export const functions = getFunctions(app);

if (isDevEnv) {
  connectFunctionsEmulator(functions, "http://localhost", 5001);
}
