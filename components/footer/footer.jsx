import classes from "./footer.module.css";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.innerFooter}>
        <p>Copyright © {year} </p>
        <div className={classes.link}>
          <span>Vytvoril</span>
          <Link
            href="https://patriksubjak.sk/"
            alt="Prejsť na web stránku tvorcu webu Patrika Šubjaka."
            target="_blank"
            rel="external"
          >
            Patrik Šubjak
          </Link>
          <FaHeart />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
