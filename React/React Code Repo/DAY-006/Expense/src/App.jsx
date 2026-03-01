import React, { useEffect, useState } from "react";

const loadInitialTransactions = () => {
  const stored = localStorage.getItem("transactions");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Could not parse transactions from localStorage:", e);
      return [];
    }
  }
  return [];
};

const App = () => {
  const [transactions, setTransactions] = useState(loadInitialTransactions);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [editId, setEditId] = useState(null);

  const getBalanceColorClass = (balance) => {
    if (balance > 0) return "text-green-600";
    if (balance < 0) return "text-red-600";
    return "text-gray-600";
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const incomeTotal = transactions.filter((t) => t.type === "Income").reduce((sum, t) => sum + t.amount, 0);

  const expenseTotal = transactions.filter((t) => t.type === "Expense").reduce((sum, t) => sum + t.amount, 0);

  const netBalance = incomeTotal - expenseTotal;

  const handleDelete = (id) => {
    if (confirm("Are you sure to delete ?")) {
      setTransactions(transactions.filter((t) => t.id !== id));
    }
  };

  const handleEdit = (t) => {
    setName(t.name);
    setAmount(t.amount);
    setType(t.type);
    setEditId(t.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !amount || parseFloat(amount) <= 0) return;

    const newTransaction = {
      id: editId || Date.now(),
      name: name.trim(),
      amount: parseFloat(amount),
      type,
    };

    if (editId) {
      setTransactions(transactions.map((t) => (t.id === editId ? newTransaction : t)));
      setEditId(null);
    } else {
      setTransactions([...transactions, newTransaction]);
    }

    setName("");
    setAmount("");
    setType("Expense");
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4 pb-2 border-b border-gray-100">Personal Finance Tracker</h1>

      <div className="flex justify-between items-center mb-6 text-center">
        <div className="flex-1 p-3 border-r border-gray-200">
          <h3 className="text-base text-gray-500">Income</h3>
          <p className="text-xl font-bold text-green-600">{incomeTotal.toFixed(2)}</p>
        </div>
        <div className="flex-1 p-3">
          <h3 className="text-base text-gray-500">Expenses</h3>
          <p className="text-xl font-bold text-red-600">{expenseTotal.toFixed(2)}</p>
        </div>
      </div>

      <h2 className={`text-lg text-center mb-3 py-2 border-y border-gray-200 ${getBalanceColorClass(netBalance)}`}>Net Balance : {netBalance.toFixed(2)}</h2>

      <form className="flex flex-col gap-3 mb-6" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border border-gray-300 rounded bg-white focus:ring-blue-500 focus:border-blue-500 text-sm">
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>

          <input type="text" placeholder="Description (e.g., Salary, Rent)" className="p-2 border border-gray-300 rounded flex-grow text-sm focus:ring-blue-500 focus:border-blue-500" required value={name} onChange={(e) => setName(e.target.value)} />

          <input type="number" placeholder="Amount" className="p-2 border border-gray-300 rounded w-24 text-sm focus:ring-blue-5-500 focus:border-blue-500" required value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit" className={`p-2 rounded-md text-white font-medium transition duration-200  ease-in-out ${editId ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-600 hover:bg-blue-700"}`}>
          {editId ? "Update Transaction" : "Add Transaction"}
        </button>
      </form>

      <h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-1 border-gray-200">History</h3>

      {transactions.length === 0 && <p className="text-center text-gray-500 mt-4 p-3 border rounded">No transactions Yet!</p>}

      <ul className="space-y-4">
        {transactions.map((t) => (
          <li key={t.id} className={`flex justify-between items-center p-3 border-l-4 ${t.type === "Income" ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm ">
              <strong className="text-gray-800 mr-2">{t.name}</strong>
              <span className={`font-medium  text-green-700`}>{t.type}</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className={`text-green-600 font-bold `}>{t.amount.toFixed(2)}</span>
              <button onClick={() => handleEdit(t)} className="text-gray-500 hover:text-blue-600 text-sm">
                Edit
              </button>
              <button onClick={() => handleDelete(t.id)} className="text-gray-500 hover:text-red-600 text-sm">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

/*

  <li className={`flex justify-between items-center p-3 border-l-4 border-green-500 bg-green-50`}>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm ">
            <strong className="text-gray-800 mr-2">Salary</strong>
            <span className={`font-medium  text-green-700`}>Income</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className={`text-green-600 font-bold `}>15000.00</span>
            <button className="text-gray-500 hover:text-blue-600 text-sm">Edit</button>
            <button className="text-gray-500 hover:text-red-600 text-sm">Delete</button>
          </div>
        </li>

        <li className={`flex justify-between items-center p-3 border-l-4 border-red-500 bg-red-50`}>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm ">
            <strong className="text-gray-800 mr-2">Rent</strong>
            <span className={`font-medium  text-red-700`}>Expense</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className={`text-red-600 font-bold `}>5000.00</span>
            <button className="text-gray-500 hover:text-blue-600 text-sm">Edit</button>
            <button className="text-gray-500 hover:text-red-600 text-sm">Delete</button>
          </div>
        </li>
*/
