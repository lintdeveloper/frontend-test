import classes from "./Navbar.module.css";

const navLinks = [
  { title: "Product", path: "/" },
  { title: "Company", path: "/" },
  { title: "Features", path: "/" },
  { title: "Blog", path: "/" },
];

function Navbar() {
  return (
    <header>
      <nav className={classes.navbar}>
        <div className={classes["navbar--brand"]}>Open/API/</div>
        <ul className={classes["navbar--nav"]}>
          {navLinks.map((navLink) => (
            <li key={navLink.title}
              className={classes["nav--item"]}
            >
            <a
              href={navLink.path}
              className={classes["nav--link"]}
              >
              {navLink.title}
            </a>
            </li>
          ))}
        </ul>
        <div className={classes["navbar--actions"]}>
          <li className={classes["nav--item"]}>
            <a href="#" className={classes["nav--link"]}>
              Sign in
            </a>
          </li>
          <button className={classes["navbar--action-btn"]}>
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
