import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-oval grainy">
      <div className="max-w-container mx-auto px-6">
        <Navbar />
        <Hero />
        {/* Projects will go next */}
      </div>
    </div>
  );
}
