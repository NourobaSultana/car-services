"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateCompanyInfo } from "./actions/updateCompanyInfo";

export default function CompanyForm({ companyInfo }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      logo: formData.get("logo"),
      companyName: formData.get("companyName"),
      description: formData.get("description"),
      email: formData.get("email"),
      secondary_email: formData.get("secondary_email"),
      telephone: formData.get("telephone"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      secondary_address: formData.get("secondary_address"),
    };

    const result = await updateCompanyInfo(payload);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border bg-white p-6 shadow"
    >
      <h2 className="text-xl font-semibold">Company Information</h2>

      <input
        name="logo"
        defaultValue={companyInfo?.logo}
        placeholder="Logo URL"
        className="input input-bordered w-full"
      />

      <input
        name="companyName"
        defaultValue={companyInfo?.companyName}
        placeholder="Company Name"
        className="input input-bordered w-full"
      />

      <textarea
        name="description"
        defaultValue={companyInfo?.description}
        placeholder="Description"
        className="textarea textarea-bordered w-full"
      />

      <input
        name="email"
        defaultValue={companyInfo?.email}
        placeholder="Email"
        className="input input-bordered w-full"
      />
      <input
        name="secondary_email"
        defaultValue={companyInfo?.secondary_email}
        placeholder="Secondary Email"
        className="input input-bordered w-full"
      />

      <input
        name="phone"
        defaultValue={companyInfo?.phone}
        placeholder="Phone"
        className="input input-bordered w-full"
      />
      <input
        name="telephone"
        defaultValue={companyInfo?.telephone}
        placeholder="Telephone"
        className="input input-bordered w-full"
      />

      <textarea
        name="address"
        defaultValue={companyInfo?.address}
        placeholder="Address"
        className="textarea textarea-bordered w-full"
      />

      <textarea
        name="secondary_address"
        defaultValue={companyInfo?.secondary_address}
        placeholder="Secondary Address"
        className="textarea textarea-bordered w-full"
      />

      <button disabled={loading} className="btn btn-primary">
        {loading ? "Updating..." : "Update Company"}
      </button>
    </form>
  );
}
