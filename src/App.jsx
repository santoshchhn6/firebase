import "./App.css";
import AddData from "./Database/AddData";
import DeleteData from "./Database/DeleteData";
import GetData from "./Database/GetData";
import UpdateData from "./Database/UpdateData";
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
      {/* <GetData /> */}
      {/* <UpdateData /> */}
      <DeleteData />
    </div>
  );
}

export default App;
