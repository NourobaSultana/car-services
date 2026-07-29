"use client";

import React, { useMemo, useState } from "react";
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
        if (!link) return;

        allLinks.push({
          ...link,
          sectionId: section._id,
          oldSectionId: section._id,
          sectionTitle: section.title,
        });
      });
    });

    return allLinks.sort((a, b) => Number(a.order) - Number(b.order));
  }, [sectionList]);

  async function handleDelete(sectionId, linkId) {
    toast.custom((t) => (
      <div className="rounded-lg border bg-white p-4 shadow">
        <p className="font-medium">
          Are you sure you want to delete this link?
        </p>

        <div className="mt-3 flex gap-2">
          <button
            className="btn btn-sm btn-error"
            onClick={async () => {
              toast.dismiss(t);

              try {
                const result = await deleteLink(sectionId, linkId);

                console.log("Delete Result:", result);

                if (!result.success) {
                  toast.error(result.message);
                  return;
                }

                toast.success(result.message);

                setSectionList((prev) =>
                  prev.map((section) => {
                    if (String(section._id) !== String(sectionId)) {
                      return section;
                    }

                    return {
                      ...section,
                      links: (section.links || []).filter(
                        (link) => link && String(link._id) !== String(linkId),
                      ),
                    };
                  }),
                );
              } catch (error) {
                console.error("Delete Error:", error);
                toast.error("Delete failed.");
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
            <h2 className="text-xl font-semibold">Footer Sections Links</h2>

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
                  <React.Fragment key={link._id}>
                    <tr>
                      <td>{index + 1}</td>

                      <td>{link.sectionTitle}</td>

                      <td>{link.title}</td>

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

                      <td>{/* Edit / Delete */}</td>
                    </tr>

                    {(index + 1) % sectionList.length === 0 && (
                      <tr>
                        <td colSpan={7}>
                          <div className="my-3 h-[2px] w-full bg-red-500"></div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
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
