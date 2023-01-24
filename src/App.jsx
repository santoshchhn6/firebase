import "./App.css";
import AddData from "./Database/CRUD/AddData";
import DeleteData from "./Database/CRUD/DeleteData";
import GetData from "./Database/CRUD/GetData";
import UpdateData from "./Database/CRUD/UpdateData";
import Query from "./Database/Realtime/Query";
import RealTimeUpdate from "./Database/Realtime/RealTimeUpdate";

import Storage from "./Storage/Storage";
import CreateAccount from "./UserAuthentication/CreateAccount";
import SignIn from "./UserAuthentication/SignIn";
import SignInGoogle from "./UserAuthenticationGoogle/SignInGoogle";

function App() {
  return (
    <div className="App">
      {/* <CreateAccount />
      <SignIn />
      <SignInGoogle /> */}
      {/* <AddData />
      <GetData />
      <UpdateData />
      <DeleteData /> */}
      <RealTimeUpdate />
      <Query />
      {/* <Storage /> */}
    </div>
  );
}

export default App;
