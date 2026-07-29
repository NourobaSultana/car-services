"use client";

import { useState } from "react";
import { toast } from "sonner";
import { deleteSocialLink } from "./actions/deleteSocialLink";
import EditSocialLinkModal from "./EditSocialLinkModal";

export default function SocialLinksTable({ socialLinks }) {
  const [links, setLinks] = useState(socialLinks || []);

  const [selectedLink, setSelectedLink] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function handleDelete(id) {
    toast.custom((t) => (
      <div className="rounded-lg border bg-white p-4 shadow">
        <p className="font-medium">
          Are you sure you want to delete this social link?
        </p>

        <div className="mt-3 flex gap-2">
          <button
            className="btn btn-sm btn-error"
            onClick={async () => {
              toast.dismiss(t);

              const result = await deleteSocialLink(id);

              if (result.success) {
                toast.success(result.message);

                setLinks((prev) =>
                  prev.filter((item) => String(item._id) !== String(id)),
                );
              } else {
                toast.error(result.message);
              }
            }}
          >
            Delete
          </button>

          <button className="btn btn-sm" onClick={() => toast.dismiss(t)}>
            Cancel
          </button>
        </div>
      </div>
    ));
  }

  function handleEdit(link) {
    setSelectedLink(link);
    setIsModalOpen(true);
  }

  function handleClose() {
    setSelectedLink(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="rounded-xl border bg-white shadow">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold">Social Links Preview</h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage all social media links.
            </p>
          </div>

          <span className="badge badge-neutral">Total : {links.length}</span>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Icon</th>
                <th>URL</th>
                <th>Order</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {links.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-gray-500">
                    No Social Links Found
                  </td>
                </tr>
              ) : (
                links
                  .sort((a, b) => a.order - b.order)
                  .map((link, index) => (
                    <tr key={link._id}>
                      <td>{index + 1}</td>

                      <td className="font-medium">{link.title}</td>

                      <td>
                        <code>{link.icon}</code>
                      </td>

                      <td className="max-w-xs truncate">{link.url}</td>

                      <td>{link.order}</td>

                      <td>
                        {link.status ? (
                          <span className="badge badge-success">Active</span>
                        ) : (
                          <span className="badge badge-error">Inactive</span>
                        )}
                      </td>

                      <td>
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEdit(link)}
                            className="btn btn-sm btn-warning"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(link._id)}
                            className="btn btn-sm btn-error"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <EditSocialLinkModal
        selectedLink={selectedLink}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </>
  );
}
