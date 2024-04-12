import classes from "./post.module.css";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Timer from "@/utils/timer";

const Post = ({ by, descendants, id, score, time, title, url }) => {
  const idSafe = id === undefined ? "/" : id;
  const urlSafe = url === undefined ? "/" : url;
  return (
    <li key={id} className={classes.postWrap}>
      <span className={classes.heading}>{title}</span>
      <div className={classes.autorWrap}>
        <div className={classes.score}>
          <FaStar /> <span> {score}</span>
        </div>
        <p className={classes.autor}>Autor: {by}</p>
      </div>
      <div className={classes.timeComments}>
        <p>
          <Timer time={time} />
        </p>
        <p>{descendants} komentárov</p>
      </div>
      <div className={classes.links}>
        <Link href={urlSafe} alt={`Prejsť na url ${title}`}>
          Url Objektu
        </Link>
        <Link
          href={`/post?id=${idSafe}`}
          alt={`Prejsť na detaily článku ${title}`}
        >
          Zobraziť detaily článku
        </Link>
      </div>
    </li>
  );
};

export default Post;
