import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { db } from "/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import MyLoader from "../Components/MyLoader";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const postsCollectionRef = collection(db, "blogPage");
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      getPosts();
      setLoaded(true);
    };
    getPosts();
  }, []);

  return (
    <>
      {!loaded && <MyLoader />}
      {loaded && (
        <h1 className="text-brown text-3xl lato font-semibold mb-14">
          Blogul TeenPsychology
        </h1>
      )}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {posts.map((post) => {
          return (
            <Card
              img={post.img}
              title={post.title}
              type={post.type}
              key={post.id}
              slang={post.slang}
            />
          );
        })}
      </div>
    </>
  );
}
