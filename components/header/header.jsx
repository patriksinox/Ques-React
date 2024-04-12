import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.heading}>Hacker News</h1>
    </header>
  );
};

export default Header;
