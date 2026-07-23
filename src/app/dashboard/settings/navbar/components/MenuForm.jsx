import React from "react";

const MenuForm = () => {
  return (
    <div>
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Add New Menu</h2>

        <form className="grid grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">Menu Name</label>

            <input
              type="text"
              placeholder="Home"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Menu Link</label>

            <input
              type="text"
              placeholder="/"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Order</label>

            <input
              type="number"
              placeholder="1"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="flex items-end">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              Active
            </label>
          </div>

          <div className="col-span-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Save Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuForm;
