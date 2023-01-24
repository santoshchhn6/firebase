import { useState } from "react";
import { app, database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function AddData() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    addDoc(collectionRef, {
      name: data.name,
      age: data.age,
      email: data.email,
    })
      .then(() => alert("Data Added!"))
      .catch((e) => alert(e.message));
  };

  return (
    <div className="App">
      <h1>FireStore,Database (addDoc)</h1>
      <input
        onChange={handleInput}
        name="name"
        placeholder="Name"
        type="text"
      />
      <input
        onChange={handleInput}
        name="age"
        placeholder="Age"
        type="number"
      />
      <input
        onChange={handleInput}
        name="email"
        placeholder="Email"
        type="email"
      />

      <button onClick={handleSubmit} type="submit">
        Create New User
      </button>
    </div>
  );
}

export default AddData;
