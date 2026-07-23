"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { deleteMenu } from "../actions/deleteMenu";
import { useState } from "react";
import EditMenuModal from "./EditMenuModal";
import { toast } from "sonner";

const MenuTable = ({ menus }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleEdit = (menu) => {
    setSelectedMenu(menu);

    setIsOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this menu?");

    if (!confirmDelete) return;

    const result = await deleteMenu(id);

    if (result.deletedCount > 0) {
      toast.success("Menu deleted successfully!");

      router.refresh();
    }
  };
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
            {menus.map((menu) => (
              <tr key={menu._id} className="border-b">
                <td className="py-4">{menu.title}</td>

                <td>{menu.path}</td>

                <td>{menu.order}</td>

                <td>
                  {menu.status ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                      Inactive
                    </span>
                  )}
                </td>

                <td className="text-right">
                  <button
                    onClick={() => handleEdit(menu)}
                    className="text-blue-600 mr-4"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(menu._id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <EditMenuModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          menu={selectedMenu}
        />
      </div>
    </div>
  );
};

export default MenuTable;
