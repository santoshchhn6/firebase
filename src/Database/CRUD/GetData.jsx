import { useState } from "react";
import { app, database } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function GetData() {
  const collectionRef = collection(database, "users");

  const getData = () => {
    getDocs(collectionRef)
      .then((response) =>
        console.log(
          response.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      )
      .catch((e) => alert(e.message));
  };

  return (
    <div className="App">
      <h1>FireStore,Database (getDocs)</h1>

      <button onClick={getData} type="submit">
        Get Users
      </button>
    </div>
  );
}

export default GetData;
