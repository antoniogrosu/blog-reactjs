import { useEffect, useState } from "react";
import { db } from "/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function AdminPage() {
  const [posts, setPosts] = useState([]);

  const [newTitle, setNewTitle] = useState("");
  const [newDom, setNewDom] = useState("");
  const collectionRef = collection(db, "blog posts");
  const createPost = async () => {
    await addDoc(collectionRef, { title: newTitle, domeniu: newDom });
  };
  return (
    <div>
      <input
        className="mr-12"
        required
        type="text"
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
      ></input>
      <input
        required
        type="text"
        onChange={(event) => {
          setNewDom(event.target.value);
        }}
      ></input>
      <button onClick={createPost} className="block">
        Submit
      </button>
    </div>
  );
}
