import { useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignInGoogle() {
  let auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    console.log("email:" + data.email);
    console.log("passwd:" + data.password);
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="App">
      <h1>SignIn Google</h1>
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
        SignIn
      </button>
    </div>
  );
}

export default SignInGoogle;
