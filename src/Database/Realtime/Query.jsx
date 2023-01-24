import { app, database } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

function Query() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const ageQuery = query(collectionRef, where("age", "<=", data.age));
    onSnapshot(ageQuery, (data) => {
      console.log(data.docs.map((item) => ({ ...item.data(), id: item.id })));
    });
  };

  return (
    <div className="App">
      <h2>FireStore,Database (Query)</h2>
      <h3>Get all users, whose age is less or equal to 'Input Age'</h3>

      <input
        onChange={handleInput}
        name="age"
        placeholder="Age"
        type="number"
      />

      <button onClick={handleSubmit} type="submit">
        Get User
      </button>
    </div>
  );
}

export default Query;
