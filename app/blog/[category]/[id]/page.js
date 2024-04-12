import blogs from "@/app/blogs/blogs";

function formatTimestamp(timestamp) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };
  const formattedDate = new Date(timestamp).toLocaleString("en-US", options);
  return formattedDate;
}

export default function Blog({ params }) {
  
  const { category, id } = params;
  const {
    title,
    content,
    description,
    urlToImage,
    publishedAt,
    lastUpdatedAt,
  } = blogs.find((blog) => blog.id === parseInt(id));
  return (
    
    <div className="full-page mt-4 mb-4 max-w-6xl mx-auto px-8 py-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="mr-5 ml-5 mb-5 md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={urlToImage}
            alt={title}
            className="md:w-64 h-auto object-cover object-center rounded-lg"
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
          <p className="text-gray-600">
            Created: {formatTimestamp(publishedAt)}
          </p>
          <p className="text-gray-600">
            Last Updated: {formatTimestamp(lastUpdatedAt)}
          </p>
        </div>
      </div>
    </div>
  );
}
