// import { createContext, useContext } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);
// export default function AuthContextProvider({ children }) {
//   const [user, loading, error] = useAuthState(auth);

//   return (
//     <AuthContext.Provider value={(user, loading, error)}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
