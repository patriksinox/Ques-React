"use client";
import { useState, useEffect, useCallback } from "react";
import classes from "./postsSection.module.css";
import { useFetch } from "@/utils/fetch";
import Post from "../post/post";
import Loader from "../loading/loading";
import Pagination from "../pagination/pagination";

const PostsSection = () => {
  const { data, error } = useFetch();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [filteredAndPaginatedData, setFilteredAndPaginatedData] = useState([]);

  //Počet strán pre pagináciu
  const pagination = 10;

  const paginationFunction = useCallback(
    (arr) => {
      const tempArr = [];
      for (let i = 0; i < arr.length; i += pagination) {
        tempArr.push(arr.slice(i, i + pagination));
      }
      return tempArr;
    },
    [pagination]
  );

  useEffect(() => {
    if (data) {
      // Filtrovanie postov
      const arrayFilter = (query) =>
        data.filter(
          (post) =>
            post.by.toLowerCase().includes(query) ||
            post.title.toLowerCase().includes(query)
        );
      let updatedPosts = data;

      if (query && query.length >= 3) {
        updatedPosts = arrayFilter(query);
      }

      // Paginácia
      const paginatedData = paginationFunction(updatedPosts);
      setFilteredAndPaginatedData(paginatedData);
    }
  }, [data, query, paginationFunction]);

  if (data.length < 1) return <Loader />;

  if (error)
    return (
      <h1
        style={{
          fontSize: "5rem",
          textAlign: "center",
          color: "red",
          marginTop: "8rem",
        }}
      >
        Problém s fetchnutím dát.
      </h1>
    );

  return (
    <>
      <div className={classes.searchWrap}>
        <input
          type="text"
          placeholder="Hľadaj článok"
          className={classes.input}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      {filteredAndPaginatedData.length < 1 ? (
        <div className={classes.noResults}>Žiadne výsledky</div>
      ) : (
        <section className={classes.sectionWrap}>
          <ul className={classes.innerContent}>
            {filteredAndPaginatedData.length > 0 &&
              filteredAndPaginatedData[index].map((post) => {
                return <Post key={post.id} {...post} />;
              })}
          </ul>
          {data.length > pagination && (
            <Pagination
              index={index}
              setIndex={setIndex}
              totalPages={filteredAndPaginatedData.length}
            />
          )}
        </section>
      )}
    </>
  );
};

export default PostsSection;
