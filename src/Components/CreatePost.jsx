import { useState } from "react";
import { db } from "/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import Post from "./Post";

export default function CreatePost() {
  const [newTitle, setNewTitle] = useState("");
  const [newDom, setNewDom] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newSlang, setNewSlang] = useState("");
  const [newParagraph, setNewParagraph] = useState("");
  const [newShort, setNewShort] = useState("");
  const [newParArr, setNewParArr] = useState([]);
  const [post, setPost] = useState({});
  //write in db

  const collectionRef = collection(db, "blogPage");
  const createPost = async () => {
    await addDoc(collectionRef, post);
  };

  function addPar() {
    setNewParArr((arr) => arr.concat(newParagraph));
  }
  function saveChangesPost() {
    setPost((post) => ({
      slang: newSlang,
      title: newTitle,
      author: newAuthor,
      content: newParArr,
      img: newImg,
      type: newDom,
      short: newShort,
    }));
  }
  return (
    <div>
      <div className="mt-8 bg-brown rounded-2xl px-4 py-8 mb-12">
        <h1 className="lato font-semibold text-3xl text-gray-50 mb-8 underline">
          Postare Blog
        </h1>
        <form>
          <label className="ml-2 text-gray-50 font-bold lato text-lg capitalize">
            Titlu{" "}
          </label>
          <input
            type="text"
            placeholder="Titlul Postarii De Blog"
            className="mt-1 mb-6 indent-4 w-full h-12 rounded-2xl"
            onChange={() => {
              setNewTitle(event.target.value);
            }}
          />
          <label className="ml-2 text-gray-50 font-bold lato text-lg capitalize">
            Short Descriere cateva cuvinte{" "}
          </label>
          <input
            type="text"
            placeholder="Descriere"
            className="mt-1 mb-6 indent-4 w-full h-12 rounded-2xl"
            onChange={() => {
              setNewShort(event.target.value);
            }}
          />
          <label className="ml-2 text-gray-50 font-bold lato text-lg capitalize">
            Autor{" "}
          </label>
          <input
            type="text"
            placeholder="Introdu Numele Autorului"
            className="mt-1 mb-6 indent-4 w-full h-12 rounded-2xl"
            onChange={() => {
              setNewAuthor(event.target.value);
            }}
          />
          <label className="ml-2 text-gray-50 font-bold lato text-lg capitalize">
            slang{" "}
          </label>
          <input
            type="text"
            placeholder="https://teen-psychology.com/blog/  SLANG  "
            className="mt-1 mb-6 indent-4 w-full h-12 rounded-2xl"
            onChange={() => {
              setNewSlang(event.target.value);
            }}
          />
          <label className="ml-2 text-gray-50 font-bold lato text-lg capitalize">
            Subiect{" "}
          </label>
          <input
            type="text"
            placeholder="Ex. Psihologie"
            className="mt-1 mb-6 indent-4 w-full h-12 rounded-2xl"
            onChange={() => {
              setNewDom(event.target.value);
            }}
          />
          <label className="ml-2 text-gray-50 font-bold lato text-lg capitalize">
            URL Imagine{" "}
          </label>
          <input
            type="text"
            placeholder="Introdu Adresa URL a imaginii dorite"
            className="mt-1 mb-6 indent-4 w-full h-12 rounded-2xl"
            onChange={() => {
              setNewImg(event.target.value);
            }}
          />
          <label className="ml-2 text-gray-50 font-bold lato text-lg capitalize">
            Paragrafe{" "}
          </label>
          <textarea
            placeholder="Scrie un Paragraf , apoi apasa butonul pentru a-l adauga in postare"
            className="mt-1 mb-2 p-3 w-full h-40 rounded-2xl"
            onChange={() => {
              setNewParagraph(event.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-orange-200 w-6/12 text-brown rounded-lg lato text-lg font-bold"
            onClick={() => {
              event.preventDefault();
              addPar();
            }}
          >
            Adauga Paragraf
          </button>
        </form>
      </div>

      <h1 className="lato font-semibold text-3xl bg-brown py-2 px-4 text-gray-50 rounded-2xl mb-8">
        Post Preview
      </h1>
      <Post
        author={newAuthor}
        title={newTitle}
        content={newParArr}
        img={newImg}
      />
      <button
        className="mt-6 px-8 py-2 text-md bg-green-200 font-bold text-gray-900 rounded-2xl mr-4"
        onClick={saveChangesPost}
      >
        Save Changes
      </button>
      <button
        className="mt-6 px-8 py-2 text-md bg-gray-50 font-bold text-brown rounded-2xl"
        onClick={createPost}
      >
        Post Now
      </button>
    </div>
  );
}
