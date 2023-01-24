import "./App.css";
import AddData from "./Database/AddData";
import GetData from "./Database/GetData";
import CreateAccount from "./UserAuthentication/CreateAccount";
import SignIn from "./UserAuthentication/SignIn";
import SignInGoogle from "./UserAuthenticationGoogle/SignInGoogle";

function App() {
  return (
    <div className="App">
      {/* <CreateAccount />
      <SignIn />
      <SignInGoogle /> */}
      {/* <AddData/> */}
      <GetData />
    </div>
  );
}

export default App;
