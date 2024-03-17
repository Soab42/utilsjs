import BlogAuthor from "./BlogAuthor";
import BlogTags from "./BlogTags";

export default function BlogDetails({ blog = {} }) {
  const { author, content, createdAt } = blog;

  return (
    <section>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl capitalize">
          {blog.name}
        </h1>
        <BlogAuthor author={author} createdAt={createdAt} />

        {/* <!-- Tags --> */}
        {/* <BlogTags tags={tags} /> */}

        {/* <!-- Content --> */}
        <div
          className="mx-auto w-full md:w-10/12 dark:text-slate-900 text-base md:text-lg leading-8 py-2 text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </section>
  );
}