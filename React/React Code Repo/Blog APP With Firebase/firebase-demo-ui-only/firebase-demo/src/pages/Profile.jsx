import { Mail, User } from "lucide-react";
import Post from "../components/Post";

const Profile = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex items-center gap-6">
        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
          <User size={40} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tivin</h1>
          <p className="text-slate-500 flex gap-2">
            <Mail />
            tivin@gmail.com
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 ml-1"> My Posts (0)</h2>

        <div className="text-center py-20 text-slate-500">Loading posts...</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Post
            title="Post-1"
            description="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
"
          />
        </div>

        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
          <p className="text-xl text-slate-600 mb-2">
            You haven't posted anything yet.
          </p>
          <p className="text-slate-400">
            Create your first post to see it here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
