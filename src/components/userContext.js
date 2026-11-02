import React from "react";

const UserContext = React.createContext("hello world");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };
