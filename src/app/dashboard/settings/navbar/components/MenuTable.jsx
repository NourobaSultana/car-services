import React from "react";

const MenuTable = () => {
  return (
    <div>
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Current Menus</h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Name</th>

              <th className="text-left py-3">Link</th>

              <th className="text-left py-3">Order</th>

              <th className="text-left py-3">Status</th>

              <th className="text-right py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-4">Home</td>

              <td>/</td>

              <td>1</td>

              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </td>

              <td className="text-right">
                <button className="text-blue-600 mr-4">Edit</button>

                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuTable;
