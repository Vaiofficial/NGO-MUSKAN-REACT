import React from "react";
import AdminEvents from "../components/AdminEvents";
import PageLayout from "../components/PageLayout";

const Admin = () => {
  return (
    <PageLayout>
      <div className="admin-page p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
        <AdminEvents />
      </div>
    </PageLayout>
  );
};

export default Admin;
