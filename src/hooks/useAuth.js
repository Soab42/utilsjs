import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  return {
    user: {
      name: user.displayName,
      userId: user.uid,
      email: user.email,
      avatar: user.photoURL,
    },
  };
};
