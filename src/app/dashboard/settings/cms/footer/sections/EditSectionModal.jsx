"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { updateSection } from "./actions/updateSection";

export default function EditSectionModal({ selectedSection, isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    id: "",
    title: "",
    order: 1,
    status: true,
  });

  useEffect(() => {
    if (selectedSection) {
      setForm({
        id: selectedSection._id,
        title: selectedSection.title,
        order: selectedSection.order,
        status: selectedSection.status,
      });
    }
  }, [selectedSection]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const result = await updateSection({
      ...form,
      status: String(form.status),
    });

    if (result.success) {
      toast.success(result.message);
      onClose();
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  }

  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-lg">
        <h3 className="mb-6 text-xl font-semibold">Edit Footer Section</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Section Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Order + Status */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Order</label>

              <input
                type="number"
                name="order"
                value={form.order}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Status</label>

              <select
                className="select select-bordered w-full"
                value={String(form.status)}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    status: e.target.value === "true",
                  }))
                }
              >
                <option value="true">Active</option>

                <option value="false">Inactive</option>
              </select>
            </div>
          </div>

          {/* Buttons */}

          <div className="modal-action">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
