import { getFunctions } from "firebase/functions";
import { app } from ".";

export const functions = getFunctions(app);
