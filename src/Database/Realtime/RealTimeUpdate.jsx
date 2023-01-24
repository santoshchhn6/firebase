import { app, database } from "../../firebaseConfig";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function RealTimeUpdate() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log({ data });
    addDoc(collectionRef, {
      name: data.name,
      age: data.age,
      email: data.email,
    })
      .then(() => alert("Data Added!"))
      .catch((e) => alert(e.message));
  };

  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      console.log(data.docs.map((item) => ({ ...item.data(), id: item.id })));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h2>FireStore,Database (RealTime Update)</h2>
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
        Add User
      </button>
    </div>
  );
}

export default RealTimeUpdate;
