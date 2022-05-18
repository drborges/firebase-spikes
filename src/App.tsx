import { useAuthenticator } from "./firebase/auth";

function App() {
  const user = useAuthenticator();

  return <div>Hello {user ? user.uid : "guest"}</div>;
}

export default App;
