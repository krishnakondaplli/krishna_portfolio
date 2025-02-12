import Home from "../pages/Home";
import NavBar from "./NavBar";

function Nav() {
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <section>
        <Home />
      </section>
    </div>
  );
}

export default Nav;
