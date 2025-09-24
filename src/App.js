import "./App.css";
import LoneForm from "./LoneForm";
import { UserContext } from "./context/userContext";
function App() {
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          UserName: "Mohamed90",
          Name: "Mohamed",
          Email: "mohamed@gmail.com",
        }}
      >
        <LoneForm />
      </UserContext.Provider>
    </div>
  );
}

export default App;
