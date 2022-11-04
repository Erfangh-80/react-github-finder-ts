// components
import { useState } from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = (): JSX.Element => {
  

  return (
    <>
      <UserSearch />
      <UserResults  />
    </>
  );
};

export default Home;
