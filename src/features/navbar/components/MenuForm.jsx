"use client";
import React from "react";
import { useState } from "react";
import { createMenu } from "../actions/createMenu";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const MenuForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    path: "",
    order: "",
    status: true,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await createMenu(formData);

    console.log(result);

    if (result?.insertedId) {
      setFormData({
        title: "",
        path: "",
        order: "",
        status: true,
      });
      toast.success("Menu added successfully!");
      router.refresh();
    }
  };
  return (
    <div>
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Add New Menu</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">Menu Name</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Home"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Menu Link</label>

            <input
              type="text"
              name="path"
              value={formData.path}
              onChange={handleChange}
              placeholder="/"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Order</label>

            <input
              type="number"
              name="order"
              value={formData.order}
              onChange={handleChange}
              placeholder="1"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="flex items-end">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="status"
                checked={formData.status}
                onChange={handleChange}
              />
              Active
            </label>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Save Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuForm;
