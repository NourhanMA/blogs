"use client";
import axios from "axios";
import SinglePost from "./SinglePost";
import { useEffect, useState } from "react";

import useGetPosts from "../hooks/useGetPosts";
function HomePage() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    axios.get("data.json").then(({ data }) => {
      setAllPosts(data);
    });
  }, []);

  // const allPosts = useGetPosts()

  if (!allPosts) {
    return <p className="font-black text-black">Loadin...</p>;
  }
  return (
    <>
      <div className="flex flex-wrap w-3/4 justify-center items-start ">
        {allPosts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
