import classes from "./pagination.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ index, setIndex, totalPages }) => {
  const nextPage = () => {
    if (index < totalPages - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevPage = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (totalPages <= 1) return;

  return (
    <div className={classes.paginationWrap}>
      <div className={classes.pages}>
        {index + 1} z {Math.floor(totalPages)} strán
      </div>
      <div className={classes.buttonsWrap}>
        <button
          className={classes.button}
          onClick={prevPage}
          aria-label="Prejsť na predošlú stránku"
        >
          <FaArrowLeft />
          Naspať
        </button>
        <button
          className={classes.button}
          onClick={nextPage}
          aria-label="Prejsť na nasledujúcu stránku"
        >
          Dopredu <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
