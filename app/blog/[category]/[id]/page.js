import axios from "axios";

async function fetchData(category) {
  try {
    let apiUrl;

    switch (category) {
      case "wall street journal":
        apiUrl =
          "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b6ed45b332c846a5b7a2ce290208c729";
        break;
      case "techcrunch":
        apiUrl =
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b6ed45b332c846a5b7a2ce290208c729";
        break;
      case "top business":
        apiUrl =
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b6ed45b332c846a5b7a2ce290208c729";
        break;
      case "tesla":
        apiUrl =
          "https://newsapi.org/v2/everything?q=tesla&from=2024-03-05&sortBy=publishedAt&apiKey=b6ed45b332c846a5b7a2ce290208c729";
        break;
      case "apple":
        apiUrl =
          "https://newsapi.org/v2/everything?q=apple&from=2024-04-04&to=2024-04-04&sortBy=popularity&apiKey=b6ed45b332c846a5b7a2ce290208c729";
        break;
      default:
        console.log("Invalid category");
        return { error: "Invalid category" };
    }

    const response = await axios.get(apiUrl);
    const data = response.data;
    return data.articles;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Error fetching data" };
  }
}

export default async function Home({ params }) {
  const { category, id } = params;
  const blogs = await fetchData(category.toLowerCase());
  const { title, content, description, urlToImage, publishedAt } = blogs[1];
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
          <h1 className="text-gray-500 text-3xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-500 text-xl font-bold mb-4">{category}</p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <p className="text-gray-500 leading-relaxed mb-4">{content}</p>
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Created: {publishedAt}</p>
          <p className="text-gray-600">Last Updated: </p>
        </div>
      </div>
    </div>
  );
}
