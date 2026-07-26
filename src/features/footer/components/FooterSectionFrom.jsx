"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createFooterSection } from "../actions/createFooterSection";

export default function FooterSectionForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value.trim();
    const order = form.order.value;
    const status = form.status.checked;

    if (!title) {
      return toast.error("Section name is required.");
    }

    setLoading(true);

    const result = await createFooterSection({
      title,
      order,
      status,
    });

    if (result.success) {
      toast.success(result.message);
      form.reset();
      router.refresh();
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Add Footer Section</h2>

          <p className="text-gray-500 mt-1">Create a new footer section.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">Section Name</label>

          <input
            name="title"
            type="text"
            placeholder="About"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Display Order
          </label>

          <input
            name="order"
            type="number"
            defaultValue={1}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Status</label>

          <div className="mt-3">
            <input
              type="checkbox"
              name="status"
              defaultChecked
              className="toggle toggle-success"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <button
            disabled={loading}
            className="btn bg-[#FF3811] hover:bg-[#e2320d] text-white"
          >
            {loading ? "Saving..." : "Add Section"}
          </button>
        </div>
      </form>
    </div>
  );
}
