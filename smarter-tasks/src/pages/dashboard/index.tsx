import React from "react";
import UserDetails from "./UserDetails";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <UserDetails />
    </div>
  );
};

export default Dashboard;
