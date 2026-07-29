"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { updateCompanyInfo } from "./actions/updateCompanyInfo";
import { useRouter } from "next/navigation";

export default function CompanyForm({ companyInfo }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      logo: formData.get("logo"),
      companyName: formData.get("companyName"),
      title: formData.get("title"),
      tagline: formData.get("tagline"),
      description: formData.get("description"),
      email: formData.get("email"),
      secondary_email: formData.get("secondary_email"),
      telephone: formData.get("telephone"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      secondary_address: formData.get("secondary_address"),
    };

    startTransition(async () => {
      const result = await updateCompanyInfo(payload);

      if (result.success) {
        toast.success(result.message);
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
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
      <input
        name="tagline"
        defaultValue={companyInfo?.tagline}
        placeholder="Tagline"
        className="input input-bordered w-full"
      />

      <div>
        <label className="mb-2 block text-sm font-medium">Section Title</label>

        <input
          type="text"
          name="title"
          defaultValue={companyInfo?.title}
          placeholder="About Us"
          className="input input-bordered w-full"
        />
      </div>

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

      <button disabled={isPending} className="btn btn-primary">
        {isPending ? "Updating..." : "Update Company"}
      </button>
    </form>
  );
}
