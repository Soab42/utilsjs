import FormInput from "../common/FormInput";

export default function BlogForm({
  handleSubmit,
  errors = {},
  register,
  image,
  isEdit,
  setValue,
  getValues,
}) {
  // Function to handle adding a new line
  const addNewLine = () => {
    const content = getValues("content");
    setValue("content", content + "\n<br>", { shouldValidate: true });
  };

  // Function to handle adding a subtitle
  const addSubtitle = () => {
    const content = getValues("content");
    setValue(
      "content",
      content +
        "\n<br><br>\n<h1 class='text-2xl font-bold capitalize'>\n  //Write your title here\n</h1>\n",
      { shouldValidate: true }
    );
  };

  return (
    <form onSubmit={handleSubmit()} className="createBlog">
      <p className="opacity-10 text-black/10 dark:text-white">
        For better performance select thumbnail at the end
      </p>

      <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center gap-4 transition-all cursor-pointer w-full"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          {image && (
            <img
              className="object-cover w-full h-full absolute top-0 left-0 opacity-20 rounded-lg"
              src={image}
              alt="image"
              style={{ objectFit: "cover" }}
            />
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <p>Upload Your Image</p>
        </label>

        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          {...register("thumbnail")}
        />
        {errors.thumbnail && (
          <div className="px-2 text-rose-400 text-sm">
            * {errors.thumbnail.message}
          </div>
        )}
      </div>

      <div className="mb-6">
        <FormInput error={errors.title}>
          <input
            {...register("title", { required: "title is required" })}
            type="text"
            id="title"
            name="title"
            placeholder="Enter your blog title"
          />
        </FormInput>
      </div>

      <div className="mb-6">
        <FormInput error={errors.tags}>
          <input
            {...register("tags", { required: "tags is required" })}
            type="text"
            id="tags"
            name="tags"
            placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
          />
        </FormInput>
      </div>

      <div className="mb-6">
        <FormInput error={errors.content}>
          <textarea
            {...register("content", { required: "content is required" })}
            id="content"
            name="content"
            placeholder="Write your blog content"
            rows="10"
          ></textarea>
        </FormInput>
      </div>

      <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
        {isEdit ? "Update" : "Create"} Blog
      </button>

      {/* Buttons */}
      <button
        type="button"
        onClick={addNewLine}
        className="dark:text-white px-6 py-2 md:py-3 rounded-md mr-4 float-right"
      >
        <code>Add Next Line</code>
      </button>
      <button
        type="button"
        onClick={addSubtitle}
        className="dark:text-white px-6 py-2 md:py-3 rounded-md float-right"
      >
        <code>Add Subtitle</code>
      </button>
    </form>
  );
}
