"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createSocialLink } from "./actions/createSocialLink";
import { useRouter } from "next/navigation";
export default function SocialLinkForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      title: formData.get("title"),
      icon: formData.get("icon"),
      url: formData.get("url"),
      order: formData.get("order"),
      status: formData.get("status"),
    };

    const result = await createSocialLink(payload);

    if (result.success) {
      toast.success(result.message);
      e.target.reset();
      router.refresh();
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  }

  return (
    <div className="rounded-xl border bg-white shadow">
      <div className="border-b px-6 py-5">
        <h2 className="text-xl font-semibold">
          Add Social Link (Name,Url, & React_Icons)
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Create a new social media link.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 p-6">
        <div>
          <label className="mb-2 block text-sm font-medium">Title</label>

          <input
            type="text"
            name="title"
            required
            placeholder="Facebook"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            React Icon Name
          </label>

          <input
            type="text"
            name="icon"
            required
            placeholder="FaFacebookF"
            className="input input-bordered w-full"
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
            required
            placeholder="https://facebook.com"
            className="input input-bordered w-full"
          />
        </div>

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
              className="select select-bordered w-full"
              defaultValue="true"
            >
              <option value="true">Active</option>

              <option value="false">Inactive</option>
            </select>
          </div>
        </div>

        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? "Adding..." : "Add Social Link"}
        </button>
      </form>
    </div>
  );
}
