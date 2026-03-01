import Bank from "./components/Bank";

function App() {
  return (
    <div>
      <h1>🏦 Simple Bank App</h1>
      <Bank />
    </div>
  );
}

export default App;

/*
 
 
 User clicks button
↓
dispatch({ type, amount })
↓
bankReducer runs
↓
new balance created
↓
Context shares state
↓
Bank.jsx UI updates

 
 src/
│
├── context/
│   ├── BankContext.jsx
│   └── useBank.js
│
├── components/
│   └── Bank.jsx
│
├── App.jsx
├── main.jsx
└── index.css

 
 
 
 
 
 
 
 
 
 */
