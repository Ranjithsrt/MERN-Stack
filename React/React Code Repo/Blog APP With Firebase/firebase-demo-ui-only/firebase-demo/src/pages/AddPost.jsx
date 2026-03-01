import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePost = () => {};
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6">
        <Heading
          headingText="Create New Post"
          text="Share your thoughts with the world"
        />

        <div className="space-y-2">
          <label
            htmlFor="title"
            className="text-sm font-medium text-slate-700 ml-1"
          >
            Title
          </label>
          <Input
            type="text"
            placeholder="Enter post title"
            value={title}
            setValue={setTitle}
            id="title"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-slate-700 ml-1"
          >
            Content
          </label>
          <Textarea
            placeholder="Write your story..."
            id="description"
            value={description}
            setValue={setDescription}
          />
        </div>
        <div>
          <Button text="Publish Post" onClick={handleCreatePost} />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
