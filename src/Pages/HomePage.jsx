import Hero from "../Components/Hero";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { db } from "/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import DidYouKnow from "../Components/DidYouKnow";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const postsCollectionRef = collection(db, "firstPage");
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    setCount(posts.length - 1);
  }, []);
  const [titleDYK, setTitleDYK] = useState("");
  const [textDYK, setTextDYK] = useState("");
  console.log(posts[count]);
  return (
    <>
      <Hero />
      <div className="my-6"></div>
      <DidYouKnow />
    </>
  );
}
