import React from "react";

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto px-10 py-4">{children}</div>
    </>
  );
};

export default PageLayout;
