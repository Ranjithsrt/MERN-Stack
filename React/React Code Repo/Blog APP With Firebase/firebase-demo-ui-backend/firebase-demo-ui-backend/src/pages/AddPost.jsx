import { useContext, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreatePost = async () => {
    try {
      if (!title || !description) {
        return;
      }

      const postRef = collection(db, "posts");
      await addDoc(postRef, {
        title,
        description,
        userId: user?.id,
        created_at: serverTimestamp(),
      });
      setTitle("");
      setDescription("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6">
        <Heading headingText="Create New Post" text="Share your thoughts with the world" />

        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-slate-700 ml-1">
            Title
          </label>
          <Input type="text" placeholder="Enter post title" value={title} setValue={setTitle} id="title" />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium text-slate-700 ml-1">
            Content
          </label>
          <Textarea placeholder="Write your story..." id="description" value={description} setValue={setDescription} />
        </div>
        <div>
          <Button text="Publish Post" onClick={handleCreatePost} />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
