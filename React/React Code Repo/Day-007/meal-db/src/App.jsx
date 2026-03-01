import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Home />
      </main>
    </div>
  );
};

export default App;
