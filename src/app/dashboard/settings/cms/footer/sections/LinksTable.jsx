"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { deleteLink } from "./actions/deleteLink";
import EditLinkModal from "./EditLinkModal";

export default function LinksTable({ sections }) {
  const [sectionList, setSectionList] = useState(sections || []);

  const [selectedLink, setSelectedLink] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = useMemo(() => {
    const allLinks = [];

    sectionList.forEach((section) => {
      (section.links || []).forEach((link) => {
        allLinks.push({
          ...link,
          sectionId: section._id,
          oldSectionId: section._id,
          sectionTitle: section.title,
        });
      });
    });

    return allLinks.sort((a, b) => a.order - b.order);
  }, [sectionList]);

  async function handleDelete(sectionId, linkId) {
    const ok = window.confirm("Are you sure you want to delete this link?");

    if (!ok) return;

    const result = await deleteLink(sectionId, linkId);

    if (result.success) {
      toast.success(result.message);

      setSectionList((prev) =>
        prev.map((section) => {
          if (section._id !== sectionId) return section;

          return {
            ...section,
            links: section.links.filter((link) => link._id !== linkId),
          };
        }),
      );
    } else {
      toast.error(result.message);
    }
  }

  function handleEdit(link) {
    setSelectedLink(link);
    setIsModalOpen(true);
  }

  function handleClose() {
    setSelectedLink(null);
    setIsModalOpen(false);
  }
  function handleUpdated(updatedLink) {
    setSectionList((prevSections) => {
      let movedLink = null;

      // Remove from old section
      const removed = prevSections.map((section) => {
        if (section._id !== updatedLink.oldSectionId) return section;

        return {
          ...section,
          links: section.links.filter((link) => {
            if (link._id === updatedLink.id) {
              movedLink = {
                ...link,
                title: updatedLink.title,
                path: updatedLink.path,
                order: Number(updatedLink.order),
                status: updatedLink.status,
              };
              return false;
            }

            return true;
          }),
        };
      });

      // Add to new section
      return removed.map((section) => {
        if (section._id !== updatedLink.sectionId) return section;

        return {
          ...section,
          links: [...section.links, movedLink].sort(
            (a, b) => a.order - b.order,
          ),
        };
      });
    });
  }

  return (
    <>
      <div className="rounded-xl border bg-white shadow">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold">Footer Links</h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage all footer links.
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
                <th>Section</th>
                <th>Title</th>
                <th>Path</th>
                <th>Order</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {links.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-gray-500">
                    No Links Found
                  </td>
                </tr>
              ) : (
                links.map((link, index) => (
                  <tr key={link._id}>
                    <td>{index + 1}</td>

                    <td>
                      <span className="badge badge-info">
                        {link.sectionTitle}
                      </span>
                    </td>

                    <td className="font-medium">{link.title}</td>

                    <td>
                      <code>{link.path}</code>
                    </td>

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
                          onClick={() => handleDelete(link.sectionId, link._id)}
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

      <EditLinkModal
        sections={sectionList}
        selectedLink={selectedLink}
        isOpen={isModalOpen}
        onClose={handleClose}
        onUpdated={handleUpdated}
      />
    </>
  );
}
