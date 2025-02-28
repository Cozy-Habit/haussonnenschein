import Link from "next/link";
import Sonne from "@/svg/Sonne";

const Footer = () => {
  return (
    <footer className="footer">
      <Sonne />

      <nav>
        <ul className="menuItems">
          <li>
            <Link className="menuItem" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="menuItem" href="/Tagesmutter">
              Tagesmutter
            </Link>
          </li>
          <li>
            <Link className="menuItem" href="/Raeumlichkeiten">
              Räumlichkeiten
            </Link>
          </li>
          <li>
            <Link className="menuItem" href="/Betreuung">
              Betreuung
            </Link>
          </li>
          <li>
            <Link className="menuItem" href="/Kontakt">
              Kontakt
            </Link>
          </li>
          <li>
            <Link className="menuItem" href="/Impressum">
              Impressum
            </Link>
          </li>
        </ul>
      </nav>
      <div className="divider"></div>
      <span>Design by Sophia Precker</span>
    </footer>
  );
};

export default Footer;
