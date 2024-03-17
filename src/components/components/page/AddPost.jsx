import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { actions } from "../../actions";
import useActive from "../../hooks/useActive";
import useAxios from "../../hooks/useAxios";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import { usePost } from "../../hooks/usePost";
import { generatePostURL } from "../../provider/utils.js/generateURL";
import { getBlogImage } from "../../provider/utils.js/getBlogImage";
import { getLocalImageURL } from "../../provider/utils.js/getLocalImageUrl";
import { pageVariants } from "../animated/variants";
import BlogForm from "../blog/BlogForm";
import DemoBlog from "../blog/DemoBlog";
import LoadingLoader from "../loader/LoadingBar";
import { toast } from "react-toastify";

function AddPost() {
  const [loading, setLoading] = useActive(false);
  const location = useLocation();
  const isEdit = location.pathname.slice(1) === "update";
  const navigate = useNavigate();
  const { post, dispatch } = usePost();
  const [formData, setFormData] = useState({
    thumbnail: isEdit ? getBlogImage(post.thumbnail) : null,
    title: isEdit ? post?.title : "",
    tags: isEdit ? post?.tags : "",
    content: isEdit ? post?.content : "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    getValues,
    watch,
  } = useForm({
    defaultValues: {
      thumbnail: "",
      title: isEdit ? post?.title : "",
      tags: isEdit ? post?.tags : "",
      content: isEdit ? post?.content : "",
    },
  });
  const { api } = useAxios();
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      flushSync(() => {
        if (name === "thumbnail") {
          getLocalImageURL(value[name], (thumbnail) => {
            setFormData((prevData) => ({
              ...prevData,
              thumbnail,
            }));
          });
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value[name],
          }));
        }
      });
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    // append image
    for (const file of data.thumbnail) {
      if (typeof file === "object") {
        formData.append("thumbnail", file);
      }
    }
    // append content
    formData.append("title", data.title);
    formData.append("tags", data.tags);
    formData.append("content", data.content);

    try {
      if (isEdit) {
        const res = await api.patch(`/blogs/${post.id}`, formData);
        if (res.status === 200) {
          dispatch({
            type: actions.post.DATA_EDITED,
            data: res.data,
          });
          const url = generatePostURL(res.data);
          navigate(url);
          setLoading(false);
        }
      } else {
        if (typeof data.thumbnail === "object") {
          const res = await api.post("/blogs", formData);

          if (res.status === 201) {
            dispatch({
              type: actions.post.DATA_CREATED,
              data: res.data,
            });
            const url = generatePostURL(res.data.blog);
            navigate(url);
            setLoading(false);
          }
        } else {
          setError("thumbnail", { message: "Thumbnail is required" });
          setLoading(false);
        }
      }
    } catch (error) {
      console.error(error.response.data.error);
      setLoading(false);
      toast.error(error.response.data.error);
      setError("root.random", {
        message: error.response.data.error,
      });
    }
  };
  useDynamicTitle(!isEdit ? "Create New Post" : "Update Blog Post");
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section
        className={`min-h-[80vh] ${
          loading ? "animate-pulse backdrop-blur-sm relative" : ""
        }`}
      >
        {loading && <LoadingLoader />}
        <div className=" text-center w-full text-3xl font-bold tracking-widest shadow-sm shadow-blue-400/20 pb-2 rounded-xl">
          {!isEdit ? "Create New" : "Update Blog"} Post
        </div>
        <div className="container flex justify-between">
          {/* <!-- Form Input field for creating Blog Post --> */}
          <div className="w-[50vw] ">
            <BlogForm
              register={register}
              handleSubmit={() => handleSubmit(onSubmit)}
              errors={errors}
              image={formData?.thumbnail}
              isEdit={isEdit}
              setValue={setValue}
              getValues={getValues}
            />
          </div>

          {/* <!-- Show Live Demo  Blog Post --> */}

          <div className="w-[50vw] h-[70vh] mt-2 overflow-y-scroll">
            <DemoBlog
              image={formData?.thumbnail}
              title={formData?.title}
              tags={formData?.tags}
              content={formData?.content}
            />
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default AddPost;
