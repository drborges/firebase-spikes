import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfutPGUhRjyDpuITBPZDdm6vX9VWO4g0E",
  authDomain: "drborges-spikes.firebaseapp.com",
  databaseURL: "https://drborges-spikes-default-rtdb.firebaseio.com",
  projectId: "drborges-spikes",
  storageBucket: "drborges-spikes.appspot.com",
  messagingSenderId: "823790589213",
  appId: "1:823790589213:web:1377401859f303d8b5bdf4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
