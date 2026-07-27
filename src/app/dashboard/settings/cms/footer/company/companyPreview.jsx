export default function CompanyPreview({ companyInfo }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Preview</h2>

      <img src={companyInfo?.logo} alt="logo" className="mb-4 h-16" />

      <h3 className="text-lg font-bold">{companyInfo?.companyName}</h3>

      <p className="mt-2 text-gray-600">{companyInfo?.description}</p>

      <div className="mt-6 space-y-2 text-sm">
        <p>
          <strong>Email:</strong> {companyInfo?.email}
        </p>

        <p>
          <strong>Phone:</strong> {companyInfo?.phone}
        </p>
        <p>
          <strong>Telephone:</strong> {companyInfo?.telephone}
        </p>

        <p>
          <strong>Address:</strong> {companyInfo?.address}
        </p>
      </div>
    </div>
  );
}
