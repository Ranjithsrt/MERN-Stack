import { Mail, User } from "lucide-react";
import Post from "../components/Post";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import PostDetailModal from "../components/PostDetailModal";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

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
        const q = query(postRef, where("userId", "==", user?.id));
        const postDocs = await getDocs(q);
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
  }, [user]);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex items-center gap-6">
        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
          <User size={40} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{user?.username || "User"}</h1>
          <p className="text-slate-500 flex gap-2">
            <Mail />
            {user?.email}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 ml-1"> My Posts ({posts.length})</h2>

        {loading ? (
          <div className="text-center py-20 text-slate-500">Loading posts...</div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Post key={post.id} title={post.title} description={post.description} onClick={() => setSelectedPost(post)} onDelete={handleDelete} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <p className="text-xl text-slate-600 mb-2">You haven't posted anything yet.</p>
            <p className="text-slate-400">Create your first post to see it here.</p>
          </div>
        )}
      </div>

      {selectedPost && <PostDetailModal post={selectedPost} onClose={() => setSelectedPost(null)} onDelete={handleDelete} isOwner={user?.id === selectedPost.userId} />}
    </div>
  );
};

export default Profile;
