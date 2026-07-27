"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { updateSocialLink } from "./actions/updateSocialLink";

export default function EditSocialLinkModal({ selectedLink, isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    id: "",
    title: "",
    icon: "",
    url: "",
    order: 1,
    status: true,
  });

  useEffect(() => {
    if (selectedLink) {
      setForm({
        id: selectedLink._id,
        title: selectedLink.title,
        icon: selectedLink.icon,
        url: selectedLink.url,
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

    const result = await updateSocialLink({
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
      <div className="modal-box max-w-xl">
        <h3 className="mb-6 text-xl font-semibold">Edit Social Link</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">Title</label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              React Icon Name
            </label>

            <input
              type="text"
              name="icon"
              value={form.icon}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            <p className="mt-2 text-xs text-gray-500">
              Example: FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">URL</label>

            <input
              type="url"
              name="url"
              value={form.url}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Order</label>

              <input
                type="number"
                name="order"
                value={form.order}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Status</label>

              <select
                name="status"
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
