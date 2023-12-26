import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
      }}
      className=" bg-primary"
    >
      <Navbar />
      <Hero />
      <div className="h-[1000vh]"></div>
    </div>
  );
}

export default App;
