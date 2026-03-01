import { useContext, useEffect, useState } from "react";
import Heading from "../components/Heading";
import Post from "../components/Post";
import PostDetailModal from "../components/PostDetailModal";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const [selectedPost, setSelectedPost] = useState("");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDelete = async (postID) => {
    try {
      await deleteDoc(doc(db, "posts", postID));
      setPosts(posts.filter((post) => post.id !== postID));
      setSelectedPost(null);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postRef = collection(db, "posts");
        const postDocs = await getDocs(postRef);
        const allPosts = postDocs.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPosts(allPosts);
        console.log(allPosts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);
  return (
    <div className="space-y-8">
      <Heading headingText="Latest Posts" text="Discover interesting stories from our community" center={false} />

      {loading ? (
        <div className="text-center py-20 text-slate-500">Loading posts...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Post key={post.id} title={post.title} description={post.description} onClick={() => setSelectedPost(post)} />
          ))}
        </div>
      )}
      {selectedPost && <PostDetailModal post={selectedPost} onClose={() => setSelectedPost(null)} onDelete={handleDelete} isOwner={user?.id === selectedPost.userId} />}
    </div>
  );
};

export default Home;
