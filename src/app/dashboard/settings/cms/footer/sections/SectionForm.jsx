"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createSection } from "./actions/createSection";

export default function SectionForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      title: formData.get("title"),
      order: formData.get("order"),
      status: formData.get("status"),
    };

    const result = await createSection(payload);

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
        <h2 className="text-xl font-semibold">Add Footer Section Name</h2>

        <p className="mt-1 text-sm text-gray-500">
          Create a new footer section.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 p-6">
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Section Title
          </label>

          <input
            type="text"
            name="title"
            required
            placeholder="Our Services"
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

        {/* Button */}
        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? "Creating..." : "Create Section"}
        </button>
      </form>
    </div>
  );
}
