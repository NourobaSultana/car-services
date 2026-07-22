"use client";

import { useState } from "react";
import { updateNavbar } from "../actions/updateNavbar";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const allMenus = ["Home", "About", "Service", "Blog", "Contact"];

export default function SettingsPage() {
  const [selectedMenus, setSelectedMenus] = useState([
    "Home",
    "About",
    "Service",
    "Blog",
    "Contact",
  ]);

  const handleChange = (menu) => {
    if (selectedMenus.includes(menu)) {
      setSelectedMenus(selectedMenus.filter((item) => item !== menu));
    } else {
      setSelectedMenus([...selectedMenus, menu]);
    }
  };
  const router = useRouter();
  const handleSave = async () => {
    console.log(selectedMenus);
    const result = await updateNavbar(
      "toma@gmail.com", // এখন testing এর জন্য
      selectedMenus,
    );

    await updateNavbar("toma@gmail.com", selectedMenus);

    router.push("/");

    console.log(result);
    // পরে এখানে API call দিবে
  };

  return (
    <div className="max-w-[700px] mx-auto mt-10 p-8 border rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-6">Navbar Settings</h2>

      <p className="mb-5 text-gray-500">
        Choose which menu you want to show in your navbar.
      </p>

      <div className="space-y-4">
        {allMenus.map((menu) => (
          <label key={menu} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedMenus.includes(menu)}
              onChange={() => handleChange(menu)}
            />

            <span>{menu}</span>
          </label>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="mt-8 bg-[#FF3811] text-white px-6 py-3 rounded-lg"
      >
        Save Changes
      </button>
    </div>
  );
}
