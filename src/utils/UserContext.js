import { createContext } from "react";

export const UserContext = createContext({ loggedInUser: "normal users" });
console.log("user", UserContext);
