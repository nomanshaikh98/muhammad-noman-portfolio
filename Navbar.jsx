import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <div className="p-8 text-white">
        <h2 className="text-2xl font-bold">Navbar loaded!</h2>
      </div>
    </div>
  );
}

export default App;