import classes from "./comment.module.css";
import React, { useState, useEffect } from "react";
import Loader from "../loading/loading";
import Timer from "@/utils/timer";

function Comment({ commentId }) {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    //Fetchnutie commentu podľa ID ktoré ide z [post] stránky
    const fetchComment = async () => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
      );
      const data = await response.json();
      setComment(data);
    };
    fetchComment();
  }, [commentId]);

  if (!comment) {
    return <Loader />;
  }

  return (
    <div className={classes.commentWrap}>
      <div className={classes.topWrap}>
        <h2>Napísal - {comment.by}</h2>
        <p>
          <Timer time={comment.time} />
        </p>
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: comment.text }}
        className={classes.commentBottom}
      ></p>
      {comment.kids &&
        comment.kids.map((kidId) => <Comment key={kidId} commentId={kidId} />)}
    </div>
  );
}

export default Comment;
