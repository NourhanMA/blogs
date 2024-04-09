import blogs from "../../public/data.json";
import formatDate from "../components/FormatDate";
import Image from "next/image";

export default function Blog({ category, id }) {
  const { title, content, description, image, pubDate, updatedDate } =
    blogs.find((blog) => blog.id === id);
  return (
    <div className="full-page mt-4 mb-4 max-w-6xl mx-auto px-8 py-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="mr-5 ml-5 mb-5 md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={100}
            height={60}
            className="w-full h-auto object-cover object-center rounded-lg max-h-64 md:h-full md:w-auto"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 md:flex md:flex-col md:justify-center md:gap-6">
          <h1 className="text-gray-800 text-3xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-500 text-xl font-bold mb-4">
            {category.replace(/%20/g, " ")}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <p className="text-gray-600 leading-relaxed mb-4">{content}</p>
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Created: {formatDate(pubDate)}</p>
          <p className="text-gray-600">
            Last Updated: {formatDate(updatedDate)}
          </p>
        </div>
      </div>
    </div>
  );
}
