import { removeSlug } from "../../../utils/generateSlug";
import TextWithMarkup from "../../ui/code/TextWithMarkup";
import BlogAuthor from "./BlogAuthor";
import BlogTags from "./BlogTags";

export default function BlogDetails({ blog = {} }) {
  const { author, content, createdAt } = blog;

  return (
    <section className="px-10 mt-10 xl:mt-0">
      <div className="text-center py-8 px-4 w-full ">
        <h1 className="font-bold text-3xl md:text-5xl capitalize">
          {removeSlug(blog.name)}
        </h1>
        <BlogAuthor author={author} createdAt={createdAt} />

        {/* <!-- Tags --> */}
        {/* <BlogTags tags={tags} /> */}

        {/* <!-- Content --> */}
        <div className="prose min-w-full text-start">
          <TextWithMarkup text={content} />
        </div>
      </div>
    </section>
  );
}

// mx-auto w-full md:w-10/12 dark:text-slate-900 text-base md:text-lg leading-8 py-2 text-justify
