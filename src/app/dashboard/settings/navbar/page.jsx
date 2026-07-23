import MenuForm from "./components/MenuForm";
import MenuTable from "./components/MenuTable";

export default function NavbarManagement() {
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
      <MenuTable />
    </div>
  );
}
