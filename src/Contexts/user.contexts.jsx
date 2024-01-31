import { createContext, useEffect, useState } from "react";
// import {
//   onAuthStateChangedListener,
//   creteUserDocumentFromAuth,
// } from "../Utilities/Firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     creteUserDocumentFromAuth(user);
    //   }
    //   setCurrentUser(user);
    // });
    console.log("ss");
    // return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
