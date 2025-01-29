'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/ui/dashboard/search/search";

const UsersPage = () => {
  // Sample users data
  const [users] = useState([
    { id: 1, name: "Ani", email: "ani@mail.ru", createdAt: "30 Nov 2024", role: "Admin", status: "Passive", image: "/user.png" },
    { id: 2, name: "Nara", email: "nara@gmail.com", createdAt: "01 Nov 2024", role: "Admin", status: "Active", image: "/user.png" },
    // Add more users here if needed
  ]);

  // State to hold filtered users based on search input
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Handle search functionality
  const handleSearch = (searchTerm) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="bg-bgSoft p-5 rounded-lg mt-10">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." onSearch={handleSearch} />
        <Link href="/dashboard/users/add">
          <button className="p-2.5 bg-[#d0bdf4] text-text border-none rounded-md cursor-pointer">Add New</button>
        </Link>
      </div>

      <table className="w-full m-5">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Email</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Role</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="p-2.5">
                <div className="flex gap-2.5 items-center">
                  <Image src={user.image} alt={user.name} width={40} height={40} className="object-cover" />
                  {user.name}
                </div>
              </td>
              <td className="p-2.5">{user.email}</td>
              <td className="p-2.5">{user.createdAt}</td>
              <td className="p-2.5">{user.role}</td>
              <td className="p-2.5">{user.status}</td>
              <td className="p-2.5">
                <div className="flex gap-5">
                  <Link href={`/dashboard/users/singleUser?id=${user.id}`}>
                    <button className="p-2.5 rounded-md text-text bg-teal-500 cursor-pointer">View</button>
                  </Link>
                  <button className="p-2.5 rounded-md text-text bg-red-500 cursor-pointer">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
