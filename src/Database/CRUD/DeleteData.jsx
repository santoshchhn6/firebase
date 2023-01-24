import { useState } from "react";
import { app, database } from "../../firebaseConfig";
import { collection, doc, deleteDoc } from "firebase/firestore";

function DeleteData() {
  const [input, setInput] = useState({});
  const collectionRef = collection(database, "users");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const deleteData = () => {
    //select doc to update using id
    const docToDelete = doc(database, "users", input.id);
    //update
    deleteDoc(docToDelete)
      .then(() => alert("Data Deleted!"))
      .catch((e) => alert(e.message));
  };

  return (
    <div className="App">
      <h1>FireStore,Database (deleteDoc)</h1>
      <input
        onChange={handleInput}
        name="id"
        value={input.id}
        placeholder="ID"
        type="text"
      />

      <button onClick={deleteData} type="submit">
        Delete
      </button>
    </div>
  );
}

export default DeleteData;
