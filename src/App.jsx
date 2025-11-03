import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <div>
        <h1 className="text-pink ">hello from GTA VI</h1>
      </div>
    </main>
  );
}

export default App;
