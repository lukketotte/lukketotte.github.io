import React from "react";

const getScholarProfile = () => {
  return fetch(
    "https://scholar.google.com/citations?view_op=search_authors&mauthors=lukas arnroth&hl=sv&oi=ao",
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

const ScholarCitations = () => {
  getScholarProfile();
  return <div></div>;
};

export default ScholarCitations;
