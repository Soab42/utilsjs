import { useContext } from "react";
import { ProfileContext } from "../context";

export const useProfile = () => {
  const { state, dispatch } = useContext(ProfileContext);
  return { user: state?.user, loading: state?.loading, state, dispatch };
};
