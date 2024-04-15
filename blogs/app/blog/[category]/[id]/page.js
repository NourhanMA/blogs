
import Blog from "../../../components/Blog";
import NavbarOtherpages from "@/app/components/NavbarOtherpages";
export default function FullBlog({ params }) {
  const { category, id } = params;
  return (
    <>
              <NavbarOtherpages/>

      <Blog {...{ category, id }} />
    </>
  );
}
