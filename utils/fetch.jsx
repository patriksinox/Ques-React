import { useState, useEffect } from "react";

export const useFetch = () => {
  const urlTopStories =
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getAllPosts = async () => {
    try {
      //Fetch top stories
      const response = await fetch(urlTopStories);
      const topStoryIds = await response.json();

      //Cyklus pre spojenie TopStories ID s obsahom ID
      for (const postId of topStoryIds) {
        const postResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${postId}.json`
        );
        const postData = await postResponse.json();

        setData((prevData) => {
          if (prevData === null) {
            return [postData];
          } else {
            //Kontrola pre duplicitné príspevky
            if (!prevData.some((item) => item.id === postData.id)) {
              return [...prevData, postData];
            } else {
              return prevData;
            }
          }
        });
      }
    } catch (error) {
      setError("Chyba pri fetchnutí príspevkov", error);
      console.log("Chyba pri fetchnutí príspevkov", error);
    }
  };

  useEffect(() => {
    getAllPosts();
    //eslint-disable-next-line
  }, [urlTopStories]);

  return { data, error };
};
