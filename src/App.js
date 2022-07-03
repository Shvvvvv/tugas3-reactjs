import Welcome from "./components/Welcome";

const App = () => {
  const user = "Ari Sandi Shefa Maldini";
  return <>{user === "" ? <button>Login</button> : <Welcome name={user} />}</>;
};

export default App;
