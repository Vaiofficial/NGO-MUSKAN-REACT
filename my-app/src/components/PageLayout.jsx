import React from "react";

const PageLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 xl:px-24 2xl:px-4 py-4 overflow-hidden">
      {children}
    </div>
  );
};

export default PageLayout;
