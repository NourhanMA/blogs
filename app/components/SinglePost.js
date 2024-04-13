import Image from "next/image";
import { useRouter } from "next/navigation";
import formatDate from "./FormatDate";

function SinglePost({ post }) {
  const router = useRouter();
  return (
    <>
      <div className="w-full md:w-1/3 flex flex-col flex-grow-0 my-10 min-h-96 select-none">
        <div className="mx-4 ">
          <Image
            src={post.image}
            alt="post image"
            width={100}
            height={30}
            className="w-full h-60 rounded-md mb-3"
          />
          <div className="title">
            <p className="text-black font-semibold text-xl"> {post.title} </p>
          </div>
          <div>
            <p className="text-gray-400 font-normal text-sm mb-3 mt-2">
              {formatDate(post.pubDate)}
            </p>
          </div>

          <div className="description">
            <p className="text-gray-500 text-sm">{post.description}</p>
          </div>
          <div className="w-full flex justify-start my-2 mb-3 items-center">
            <p
              className="text-red-500 w-fit  opacity-65 hover:opacity-100 cursor-pointer flex items-center"
              onClick={() => router.push(`/blog/${post.category}/${post.id}`)}
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 flex items-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>

            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
