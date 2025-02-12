import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const handleScroll = (event, targetId, path) => {
    event.preventDefault();
    window.history.pushState({}, "", path);
    setActivePath(path); // Update active path when clicking
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full text-slate-100 font-bold z-10 backdrop-blur-2xl border border-white/10 pt-6 pr-14 pb-9 flex justify-between scroll-smooth shadow-2xl bg-slate-800/10">
      <div
        className="pl-3 hover:cursor-pointer"
        onClick={(e) => handleScroll(e, "home", "/")}
      >
        <p>Krishna&apos;s Portfolio</p>
      </div>
      <div>
        <ul className="list-none flex space-x-4 justify-end">
          {[
            { name: "Home", to: "/", targetId: "home" },
            { name: "About", to: "/about", targetId: "about" },
            { name: "Projects", to: "/works", targetId: "works" },
            { name: "Blog", to: "/blog", targetId: "blog" },
            { name: "Contact", to: "/contact", targetId: "contact" },
          ].map((link) => (
            <li key={link.to} className="nav">
              <a
                href={link.to}
                onClick={(e) => handleScroll(e, link.targetId, link.to)}
                className={`relative hover:text-slate-900 ${
                  activePath === link.to
                    ? "text-slate-200 hover:text-white after:w-full after:border-b-2 after:border-orange-500"
                    : "after:w-0 hover:after:w-full hover:after:border-b-2 hover:after:border-orange-500"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
