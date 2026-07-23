import React from "react";

const page = () => {
  const cards = [
    {
      title: "Total Users",
      value: "120",
      color: "bg-blue-500",
    },
    {
      title: "Total Projects",
      value: "35",
      color: "bg-green-500",
    },
    {
      title: "Completed",
      value: "28",
      color: "bg-purple-500",
    },
    {
      title: "Pending",
      value: "7",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-gray-500 mt-1">Welcome to your CMS Dashboard.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="bg-white rounded-xl shadow-md p-6">
            <div className={`w-12 h-12 rounded-lg ${card.color} mb-4`}></div>

            <h3 className="text-gray-500 text-sm">{card.title}</h3>

            <p className="text-3xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-5">Recent Activity</h3>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <p className="font-medium">User Registration</p>
            <p className="text-sm text-gray-500">
              A new user has created an account.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="font-medium">Project Updated</p>
            <p className="text-sm text-gray-500">
              Website homepage has been updated.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="font-medium">Settings Changed</p>
            <p className="text-sm text-gray-500">
              Navigation menu has been modified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
