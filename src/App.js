import React from "react";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import PostList from "./components/PostList";
import use from "./components/PostList";
import Usecallback from "./components/Usecallback";
import UseMemo from "./components/UseMemo";
import CustomHook from "./components/CusTomHook";

const App = () => {
  return (
    // <div>
    //   <UserProvider value="shashi">
    //     <ComponentC />
    //   </UserProvider>
    // </div>
    <>
      {/* <PostList /> */}
      <Usecallback />
      <UseMemo />
      <CustomHook />
    </>
  );
};

export default App;
