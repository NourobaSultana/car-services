"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateMenu } from "../actions/updateMenu";
import { toast } from "sonner";
export default function EditMenuModal({ isOpen, onClose, menu }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    path: "",
    order: "",
    status: true,
  });
  useEffect(() => {
    if (menu) {
      setFormData({
        title: menu.title,
        path: menu.path,
        order: menu.order,
        status: menu.status,
      });
    }
  }, [menu]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await updateMenu(menu._id, formData);

    if (result.modifiedCount > 0) {
      toast.success("Menu updated successfully!");

      onClose();

      router.refresh();
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Edit Menu</h2>

          <button onClick={onClose} className="text-xl">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2">Menu Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              defaultValue={menu?.title}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2">Menu Link</label>

            <input
              type="text"
              name="path"
              value={formData.path}
              onChange={handleChange}
              defaultValue={menu?.path}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2">Order</label>

            <input
              type="number"
              name="order"
              value={formData.order}
              onChange={handleChange}
              defaultValue={menu?.order}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
            />

            <label>Active</label>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
