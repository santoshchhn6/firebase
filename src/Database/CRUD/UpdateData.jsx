import { useState } from "react";
import { app, database } from "../../firebaseConfig";
import { collection, doc, updateDoc } from "firebase/firestore";

function UpdateData() {
  const [input, setInput] = useState({});
  const collectionRef = collection(database, "users");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const updateData = () => {
    //select doc to update using id
    const docToUpdate = doc(database, "users", input.id);
    //update
    updateDoc(docToUpdate, {
      name: input.name,
      age: input.age,
      email: input.email,
    })
      .then(() => alert("Data Updated!"))
      .catch((e) => alert(e.message));
  };

  return (
    <div className="App">
      <h1>FireStore,Database (updateDoc)</h1>
      <input
        onChange={handleInput}
        name="id"
        value={input.id}
        placeholder="ID"
        type="text"
      />
      <input
        onChange={handleInput}
        name="name"
        value={input.name}
        placeholder="Name"
        type="text"
      />
      <input
        onChange={handleInput}
        name="age"
        value={input.age}
        placeholder="Age"
        type="number"
      />
      <input
        onChange={handleInput}
        name="email"
        value={input.email}
        placeholder="Email"
        type="email"
      />

      <button onClick={updateData} type="submit">
        Update
      </button>
    </div>
  );
}

export default UpdateData;
