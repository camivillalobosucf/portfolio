import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-oval grainy">
      <div className="max-w-7xl mx-auto px-6">
        <Navbar />
        <Hero />
        <Cards />
      </div>
    </div>
  );
}