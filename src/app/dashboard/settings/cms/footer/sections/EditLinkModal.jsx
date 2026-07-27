"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { updateLink } from "./actions/updateLink";

export default function EditLinkModal({
  sections,
  selectedLink,
  isOpen,
  onClose,
  onUpdated,
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    id: "",
    oldSectionId: "",
    sectionId: "",
    title: "",
    path: "",
    order: 1,
    status: true,
  });

  useEffect(() => {
    if (selectedLink) {
      setForm({
        id: selectedLink.id,
        oldSectionId: selectedLink.oldSectionId,
        sectionId: selectedLink.sectionId,
        title: selectedLink.title,
        path: selectedLink.path,
        order: selectedLink.order,
        status: selectedLink.status,
      });
    }
  }, [selectedLink]);

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

    const result = await updateLink({
      ...form,
      status: String(form.status),
    });

    if (result.success) {
      toast.success(result.message);

      onUpdated({
        ...form,
        status: form.status,
      });

      onClose();
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  }

  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-xl">
        <h3 className="mb-6 text-xl font-semibold">Edit Footer Link</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Section */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Footer Section
            </label>

            <select
              name="sectionId"
              value={form.sectionId}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              {sections
                ?.sort((a, b) => a.order - b.order)
                .map((section) => (
                  <option key={section._id} value={section._id}>
                    {section.title}
                  </option>
                ))}
            </select>
          </div>

          {/* Title */}

          <div>
            <label className="mb-2 block text-sm font-medium">Link Title</label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Path */}

          <div>
            <label className="mb-2 block text-sm font-medium">Link Path</label>

            <input
              type="text"
              name="path"
              value={form.path}
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
                value={String(form.status)}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    status: e.target.value === "true",
                  }))
                }
                className="select select-bordered w-full"
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
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
