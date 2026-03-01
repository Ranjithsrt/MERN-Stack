import { useState } from "react";
import Heading from "../components/Heading";
import Post from "../components/Post";
import PostDetailModal from "../components/PostDetailModal";
const Home = () => {
  const [selectedPost, setSelectedPost] = useState("");
  return (
    <div className="space-y-8">
      <Heading
        headingText="Latest Posts"
        text="Discover interesting stories from our community"
        center={false}
      />

      {/* <div className="text-center py-20 text-slate-500">Loading posts...</div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Post
          title="Post-1"
          description="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
"
        />
        <Post
          title="Post-2"
          description="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
"
        />
        <Post
          title="Post-3"
          description="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
"
        />
      </div>

      {selectedPost && <PostDetailModal />}
    </div>
  );
};

export default Home;
