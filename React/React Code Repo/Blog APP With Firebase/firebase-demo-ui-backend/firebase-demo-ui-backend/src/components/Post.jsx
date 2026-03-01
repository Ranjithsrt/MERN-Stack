import { ArrowRight } from "lucide-react";

const Post = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 p-6 flex flex-col h-full group cursor-pointer hover:-translate-y-1"
    >
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed grow line-clamp-4">{description}</p>
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-400">
        <span>Read More</span>
        <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
          <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
};

export default Post;
