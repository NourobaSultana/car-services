"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createLink } from "./actions/createLink";

export default function LinkForm({ sections }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      sectionId: formData.get("sectionId"),
      title: formData.get("title"),
      path: formData.get("path"),
      order: formData.get("order"),
      status: formData.get("status"),
    };

    const result = await createLink(payload);

    if (result.success) {
      toast.success(result.message);
      e.target.reset();
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  }

  return (
    <div className="rounded-xl border bg-white shadow">
      {/* Header */}
      <div className="border-b px-6 py-5">
        <h2 className="text-xl font-semibold">Add Footer Link</h2>

        <p className="mt-1 text-sm text-gray-500">
          Create a new link inside a footer section.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 p-6">
        {/* Section */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Footer Section
          </label>

          <select
            name="sectionId"
            required
            className="select select-bordered w-full"
            defaultValue=""
          >
            <option value="" disabled>
              Select Section
            </option>

            {sections
              ?.sort((a, b) => a.order - b.order)
              .map((section) => (
                <option key={section._id} value={section._id}>
                  {section.title}
                </option>
              ))}
          </select>
        </div>

        {/* Link Title */}
        <div>
          <label className="mb-2 block text-sm font-medium">Link Title</label>

          <input
            type="text"
            name="title"
            required
            placeholder="Web Development"
            className="input input-bordered w-full"
          />
        </div>

        {/* Path */}
        <div>
          <label className="mb-2 block text-sm font-medium">Link Path</label>

          <input
            type="text"
            name="path"
            required
            placeholder="/services/web-development"
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
              defaultValue={1}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Status</label>

            <select
              name="status"
              defaultValue="true"
              className="select select-bordered w-full"
            >
              <option value="true">Active</option>

              <option value="false">Inactive</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? "Creating..." : "Create Link"}
        </button>
      </form>
    </div>
  );
}
