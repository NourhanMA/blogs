
import Blog from "../../../components/Blog";

export default function FullBlog({ params }) {
  const { category, id } = params;
  return (
    <>
      <Blog {...{ category, id }} />
    </>
  );
}
