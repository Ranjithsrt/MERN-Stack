import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";

const CartItem = ({ item, dispatch }) => {
  return (
    <div className="flex items-center gap-4 p-4 mb-4 bg-slate-50 rounded-xl border border-slate-100">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow-sm" />
      <div className="flex-1">
        <h4 className="font-semibold text-slate-800 text-sm leading-tight mb-1">{item.name}</h4>
        <p className="text-indigo-600 font-bold text-sm"> ₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <button className="text-slate-400 hover:text-red-500 transition-colors p-1" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>
          <Trash2 size={16} />
        </button>
        <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-sm">
          <button className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-600 transition-colors" onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item })}>
            <Minus size={14} />
          </button>
          {item.quantity}
          <button className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-600 transition-colors" onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item })}>
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
