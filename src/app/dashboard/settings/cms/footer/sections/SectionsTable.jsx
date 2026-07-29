"use client";

import { useState } from "react";
import { toast } from "sonner";
import { deleteSection } from "./actions/deleteSection";
import EditSectionModal from "./EditSectionModal";

export default function SectionsTable({ sections }) {
  const [sectionList, setSectionList] = useState(sections || []);

  const [selectedSection, setSelectedSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function handleDelete(id) {
    toast.custom((t) => (
      <div className="rounded-lg border bg-white p-4 shadow">
        <p className="font-medium">
          Are you sure you want to delete this section?
        </p>

        <div className="mt-3 flex gap-2">
          <button
            className="btn btn-sm btn-error"
            onClick={async () => {
              toast.dismiss(t);

              const result = await deleteSection(id);

              if (result.success) {
                toast.success(result.message);

                setSectionList((prev) =>
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

  function handleEdit(section) {
    setSelectedSection(section);
    setIsModalOpen(true);
  }

  function handleClose() {
    setSelectedSection(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="rounded-xl border bg-white shadow">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold">
              Footer Sections Name Preview
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage footer sections.
            </p>
          </div>

          <span className="badge badge-neutral">
            Total : {sectionList.length}
          </span>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Section</th>
                <th>Links</th>
                <th>Order</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {sectionList.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-gray-500">
                    No Sections Found
                  </td>
                </tr>
              ) : (
                sectionList
                  .sort((a, b) => a.order - b.order)
                  .map((section, index) => (
                    <tr key={section._id}>
                      <td>{index + 1}</td>

                      <td className="font-medium">{section.title}</td>

                      <td>
                        <span className="badge badge-info">
                          {section.links?.length || 0}
                        </span>
                      </td>

                      <td>{section.order}</td>

                      <td>
                        {section.status ? (
                          <span className="badge badge-success">Active</span>
                        ) : (
                          <span className="badge badge-error">Inactive</span>
                        )}
                      </td>

                      <td>
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEdit(section)}
                            className="btn btn-sm btn-warning"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(section._id)}
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

      <EditSectionModal
        selectedSection={selectedSection}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </>
  );
}
