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
    <div className="h-screen">
      <h1 className="font-semibold lato text-3xl mb-12 text-brown">
        Postare Noua
      </h1>
      <p className="text-md lato font-semibold text-brown">Title</p>
      <input
        required
        className="mr-12 rounded-md h-8 mb-4 w-8/12 before:border-0 indent-4"
        type="text"
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
      ></input>
      <p className="mt-8 text-md lato font-semibold text-brown">Domain</p>
      <input
        className="rounded-md h-8 w-8/12 indent-4"
        type="text"
        required
        onChange={(event) => {
          setNewDom(event.target.value);
        }}
      ></input>
      <button
        onClick={createPost}
        className="block mt-8 bg-brown px-6 py-2 text-md font-semibold lato text-gray-50 rounded-lg"
      >
        Submit
      </button>
    </div>
  );
}
