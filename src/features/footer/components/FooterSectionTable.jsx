"use client";
import { useEffect, useState } from "react";
import EditFooterSectionModal from "./EditfooterSectionModal";
import { toast } from "sonner";
import { deleteSection } from "../actions/deletefooterSection";

export default function FooterSectionTable({ footer }) {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (footer?.sections) {
      setSections([...footer.sections].sort((a, b) => a.order - b.order));
    }
  }, [footer]);
  const [selectedSection, setSelectedSection] = useState(null);
  if (!footer?.sections?.length) {
    return (
      <div className="rounded-xl border bg-white p-12 text-center shadow">
        <h2 className="text-xl font-semibold">No Footer Sections Found</h2>

        <p className="mt-2 text-gray-500">Create your first footer section.</p>
      </div>
    );
  }

  const handleDelete = async (id) => {
    const response = await deleteSection(id);

    if (response.success) {
      toast.success(response.message);

      setSections((prev) => prev.filter((section) => section._id !== id));
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="rounded-xl border bg-white shadow">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-6 py-5">
        <div>
          <h2 className="text-xl font-semibold">Footer Sections</h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage all footer sections.
          </p>
        </div>

        <span className="badge badge-neutral">Total : {sections.length}</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-b-xl">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Section Name</th>
              <th>Total Links</th>
              <th>Order</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {sections.map((section, index) => (
              <tr key={section._id} className="hover">
                <td>{index + 1}</td>

                <td className="font-medium">{section.title}</td>

                <td>
                  <span className="badge badge-info badge-outline">
                    {section.links.length}
                  </span>
                </td>

                <td>{section.order}</td>

                <td>
                  {section.status ? (
                    <span className="badge badge-success badge-outline">
                      Active
                    </span>
                  ) : (
                    <span className="badge badge-error badge-outline">
                      Hidden
                    </span>
                  )}
                </td>

                <td>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setSelectedSection(section)}
                      className="btn btn-warning btn-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(section._id)}
                      className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedSection && (
        <EditFooterSectionModal
          section={selectedSection}
          onClose={() => setSelectedSection(null)}
        />
      )}
    </div>
  );
}
