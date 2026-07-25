export default function Topbar() {
  return (
    <header className="bg-white h-16 shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
          T
        </div>
      </div>
    </header>
  );
}
