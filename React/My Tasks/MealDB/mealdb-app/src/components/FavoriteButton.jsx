 const FavoriteButton = ({ meal, onToggle, isFav }) => {
   return (
     <button
       onClick={(e) => {
        // e.stopPropagation(); // 🔥 prevent card click
         onToggle(meal);
       }}
       className={`absolute top-2 right-2 text-2xl px-2 py-1 rounded-full cursor-pointer transition ${
         isFav ? "bg-white/80" : "bg-white/80 hover:scale-110"
       }`}
       aria-label="favorite"
     >
       {isFav ? "❤️" : "♡"}
     </button>
   );
 };

 export default FavoriteButton;
