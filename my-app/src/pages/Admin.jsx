import React from "react";
import AdminEvents from "../components/AdminEvents";
import PageLayout from "../components/PageLayout";

const Admin = () => {
  return (
    <PageLayout>
      <div className="admin-page py-20">
        <div className="flex justify-center"> {/* Added flex justify-center class here */}
          <h1 className="text-4xl font-extrabold mb-6 text-center font-montserrat text-subHeadingBlue nav-link uppercase">Admin Dashboard</h1>
        </div>
        <AdminEvents />
      </div>
    </PageLayout>
  );
};

export default Admin;
