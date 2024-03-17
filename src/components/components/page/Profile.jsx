import { useParams } from "react-router-dom";
import MainCard from "../blog/MainCard";
import ProfileInfo from "../profile/ProfileInfo";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { motion } from "framer-motion";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import { getName } from "../../provider/utils.js/getName";
import { isUser } from "../../provider/utils.js/isUser";
import { pageVariants } from "../animated/variants";
import Error from "../common/Error";
import ProfileLoader from "../loader/ProfileLoader";

const retrieveProfile = async ({ queryKey }) => {
  const response = await axios.get(
    `${import.meta.env.VITE_SERVER_BASE_URL}/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};
export default function Profile() {
  const params = useParams();
  const id = params?.name?.split("-").pop();
  const {
    data: profile,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["profile", id],
    queryFn: retrieveProfile,
  });
  const isME = isUser(profile, id);
  useDynamicTitle(isLoading ? "loading" : getName(profile));

  let content;

  if (isLoading) {
    content = <ProfileLoader />;
  } else if (error) {
    content = <Error error={error.message} />;
  } else {
    content = (
      <div className="container">
        <ProfileInfo info={profile} />

        <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">
          {isME ? "Your" : getName(profile)} Blogs
        </h4>
        <div className="my-6 space-y-4">
          {profile?.blogs.map((data) => (
            <MainCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <motion.main
      className="mx-auto max-w-[1020px] py-8"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container">{content}</div>
    </motion.main>
  );
}
