import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [username, setUsername] = useLocalStorage("username");
  const [firstName, setFirstName] = useLocalStorage("firstName");

  return (
    <>
      <br />
      <label htmlFor="username">Username:</label>
      <input
        value={username}
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="firstName">First Name:</label>
      <input
        value={firstName}
        id="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <div>Username: {username}</div>
      <div>First Name: {firstName}</div>
    </>
  );
}
