"use client";
import { useSearchParams } from "next/navigation";
import classes from "./post.module.css";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Loader from "@/components/loading/loading";
import Comment from "@/components/comment/comment";
import Timer from "@/utils/timer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
      const response = await fetch(url);
      const post = await response.json();
      setPost(post);
    };
    fetchData();
  }, [id]);

  if (Object.keys(post).length === 0) return <Loader />;

  return (
    <>
      <section className={classes.sectionWrap}>
        <article className={classes.innerContent}>
          <h2 className={classes.heading}>{post.title}</h2>

          <Link href="/" className={classes.back}>
            <FaArrowLeft /> Naspäť na články
          </Link>

          <div className={classes.autorWrap}>
            <span className={classes.score}>
              <FaStar />
              {post.score}{" "}
            </span>
            <h3 className={classes.subHeading}>Autor: {post.by}</h3>
          </div>
          <p>Text v objekte:</p>
          <p
            dangerouslySetInnerHTML={{ __html: post.text }}
            className={classes.text}
          ></p>
          <div className={classes.bottomWrap}>
            <p>{post.descendants || 0} komentárov</p>
            <p>
              <Timer time={post.time} />
            </p>
          </div>
          <ul className={classes.commentsWrap}>
            {post.kids &&
              post.kids.map((comment, index) => {
                return <Comment key={index} commentId={comment} />;
              })}
          </ul>
        </article>
      </section>
    </>
  );
}
