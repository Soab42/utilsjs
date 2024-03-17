import { getBlogImage } from "../../provider/utils.js/getBlogImage";

export default function BlogImage({ thumbnail }) {
  return (
    <img
      className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
      src={getBlogImage(thumbnail)}
      alt=""
    />
  );
}
