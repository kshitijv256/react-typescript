import { useEffect, useState } from "react";

function UserDetails() {
  const [user, setUser] = useState({ id: "", name: "", email: "" });
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  return (
    <div className="border-2 border-gray-400 rounded-md p-2">
      <h1 className="font-bold text-xl">User Details</h1>
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
