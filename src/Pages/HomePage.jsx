import Hero from "../Components/Hero";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { db } from "/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const postsCollectionRef = collection(db, "blog posts");
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    setCount(posts.length - 1);
  }, []);
  return (
    <>
      <Hero />
      <div className="my-20"></div>
      <h1 className="text-3xl lato font-semibold text-brown mb-8">
        Ultima Postare
      </h1>
      <Card title={posts[1].title} dom={posts[1].domeniu} />
    </>
  );
}
