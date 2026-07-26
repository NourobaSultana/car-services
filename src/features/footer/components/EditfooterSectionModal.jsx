"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { updateFooterSection } from "../actions/updateFooterSection";

export default function EditFooterSectionModal({ section, onClose }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const result = await updateFooterSection({
      _id: section._id,
      title: form.title.value,
      order: form.order.value,
      status: form.status.checked,
    });

    if (result.success) {
      toast.success(result.message);
      router.refresh();
      onClose();
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-xl mb-6">Edit Footer Section</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="label">Section Name</label>

            <input
              name="title"
              defaultValue={section.title}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">Order</label>

            <input
              name="order"
              type="number"
              defaultValue={section.order}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label cursor-pointer">
              <span>Status</span>

              <input
                name="status"
                type="checkbox"
                defaultChecked={section.status}
                className="toggle toggle-success"
              />
            </label>
          </div>

          <div className="modal-action">
            <button type="button" onClick={onClose} className="btn">
              Cancel
            </button>

            <button disabled={loading} className="btn btn-primary">
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
