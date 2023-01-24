import { useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function CreateAccount() {
  let auth = getAuth();
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    console.log("email:" + data.email);
    console.log("passwd:" + data.password);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="App">
      <h1>Create Account</h1>
      <input
        onChange={handleInput}
        name="email"
        placeholder="Email"
        type="email"
        id=""
      />
      <input
        onChange={handleInput}
        name="password"
        placeholder="Password"
        type="password"
        id=""
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
}

export default CreateAccount;
