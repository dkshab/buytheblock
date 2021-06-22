import React from "react";

import NavBarNonAuth from "./static/NavBarNonAuth/NavBarNonAuth";
import HomeNonAuth from "./static/HomeNonAuth/HomeNonAuth";

const NonAuthApp = () => {
  return (
    <div className="NonAuthApp">
      <NavBarNonAuth />
      <HomeNonAuth />
    </div>
  );
};

export default NonAuthApp;
