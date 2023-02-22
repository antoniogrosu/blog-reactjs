import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Post from "../Components/Post";
import MyLoader from "../Components/MyLoader";

export default function PostPage() {
  const { slang } = useParams();
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const postsCollectionRef = collection(db, "blogPage");
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoaded(true);
    };
    getPosts();
  }, []);
  const index = posts.findIndex((item) => item.slang === slang);
  let content;
  if (loaded) {
    content = (
      <div>
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
      </div>
    );
  } else if (!loaded) {
    <MyLoader />;
  }
  return <>{content}</>;
}
