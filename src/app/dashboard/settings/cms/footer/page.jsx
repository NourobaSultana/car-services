import { getFooterSection } from "@/features/footer/actions/getFooterSection";
import FooterSectionForm from "@/features/footer/components/FooterSectionFrom";
import FooterSectionTable from "@/features/footer/components/FooterSectionTable";

export default async function FooterPage() {
  const footer = await getFooterSection();

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Footer CMS</h1>

          <p className="text-gray-500 mt-2">
            Manage footer sections, company information and social links.
          </p>
        </div>
      </div>

      {/* Add Section */}

      <FooterSectionForm />

      {/* Table */}

      <FooterSectionTable footer={footer} />
    </div>
  );
}
