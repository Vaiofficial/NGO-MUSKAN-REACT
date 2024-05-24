import React from "react";

const PageLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-4 overflow-hidden">
      {children}
    </div>
  );
};

export default PageLayout;
