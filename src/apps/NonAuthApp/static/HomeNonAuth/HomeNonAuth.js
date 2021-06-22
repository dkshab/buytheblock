import React, { useEffect } from "react";
import { firestore } from "../../../../utilities/firebase";

import { collectIdsAndDocs } from "../../../../utilities/helper-functions";

const HomeNonAuth = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await firestore.collection("posts").get();

      const allposts = snapshot.docs.map(collectIdsAndDocs);
      console.log("We are  rusty!", allposts);
    };
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div className="Home">I am home baby</div>;
};

export default HomeNonAuth;
