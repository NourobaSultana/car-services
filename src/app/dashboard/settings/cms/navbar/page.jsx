import { getMenus } from "../../../../../features/navbar/actions/getMenu";
import MenuForm from "../../../../../features/navbar/components/MenuForm";
import MenuTable from "../../../../../features/navbar/components/MenuTable";

export default async function NavbarManagement() {
  const menus = await getMenus();
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Navbar Management</h1>

        <p className="mt-2 text-gray-500">
          Manage your website navigation menu from here.
        </p>
      </div>

      {/* Form */}
      <MenuForm />

      {/* Table */}
      <MenuTable menus={menus} />
    </div>
  );
}
