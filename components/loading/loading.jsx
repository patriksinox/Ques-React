import classes from "./loading.module.css";

const Loader = () => {
  return (
    <div className={classes.spinnerWrap}>
      <div className={classes.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
