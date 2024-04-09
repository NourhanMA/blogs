"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

function SinglePost({ post }) {
  const router = useRouter();
  return (
    <>
      <div className="w-full md:w-1/4 flex flex-col mx-3 my-10 min-h-96">
        <Image
          src={post.image}
          alt="post image"
          width={100}
          height={30}
          className="w-full h-52 rounded-md"
        />
        <div className="title">
          <p className="text-black font-semibold text-xl"> {post.title} </p>
        </div>
        <div>
          <p className="text-gray-400 font-normal text-sm">{post.pubDate}</p>
        </div>

        <div className="description">
          <p className="text-gray-500 text-sm">{post.description}</p>
        </div>
        <div className="w-full flex justify-end">
          <p
            className="text-red-500 mb-3 opacity-75 hover:opacity-100 cursor-pointer flex justify-end w-fit"
            onClick={() => router.push(`/blog/${post.category}/${post.id}`)}
          >
            Read More
          </p>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
