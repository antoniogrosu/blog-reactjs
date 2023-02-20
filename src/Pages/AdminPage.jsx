import { useEffect, useState } from "react";
import { db } from "/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "/firebaseConfig";
import { UserAuth } from "../../authContext";
import AdminComponent from "../Components/AdminComponent";
import { GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";

export default function AdminPage() {
  //import the db to write posts
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDom, setNewDom] = useState("");
  const collectionRef = collection(db, "blog posts");
  const createPost = async () => {
    await addDoc(collectionRef, { title: newTitle, domeniu: newDom });
  };

  // import the user from context api
  const { user, googleSignIn, logOut } = UserAuth();
  async function handleGoogleSignIn() {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleSignOut() {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  let content;
  if (user != null) {
    content = (
      <div>
        <button
          onClick={handleSignOut}
          className="text-brown bg-gray-50 font-bold border-2 border-brown rounded-lg mt-4 px-4 py-1 text-sm"
        >
          {" "}
          Log out
        </button>
        <AdminComponent user={user} />
      </div>
    );
  } else {
    content = (
      <div className="mt-8">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    );
  }
  return (
    <div className="h-screen">
      <h1 className="lato font-semibold text-3xl text-brown">Admin Page</h1>
      {content}{" "}
    </div>
  );
}
