import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Post from "../Components/Post";

export default function PostPage() {
  const { slang } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postsCollectionRef = collection(db, "blog posts");
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  const index = posts.findIndex((item) => item.slang === slang);
  return (
    <>
      {index != -1 ? (
        <Post
          title={posts[index].title}
          img={posts[index].img}
          content={posts[index].content}
          key={posts[index].id}
        />
      ) : (
        <h1>Post not found</h1>
      )}
    </>
  );
}
