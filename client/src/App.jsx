import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Blog from "./pages/Blog";
import Contact from "./pages/Connect";
import NavBar from "./components/NavBar";
import "./App.css";
import ReactFeatures from "./components/ReactFeatures";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className=" overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <BrowserRouter>
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="works" element={<Works />} />
            <Route path="blog" element={<Blog />} />
            <Route path="connect" element={<Contact />} />
            <Route path="contact" element={<Footer />} />
            <Route path="reactFeatures" element={<ReactFeatures />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
