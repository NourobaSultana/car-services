import CompanyForm from "./company/companyForm";
import CompanyPreview from "./company/companyPreview";
import { getCompanyInfo } from "./company/actions/getCompanyInfo";
import SocialLinksTable from "./social-links/SocialLinkTable";
import { getSocialLinks } from "./social-links/actions/getSocialLinks";
import SocialLinkForm from "./social-links/SocialLinkForm";
import { getSections } from "./sections/actions/getSection";
import SectionForm from "./sections/SectionForm";
import SectionsTable from "./sections/SectionsTable";

export default async function FooterPage() {
  const footer = await getCompanyInfo();
  const socialLinks = await getSocialLinks();
  const sections = await getSections();

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
      {/* company information */}
      <CompanyForm />
      {/* Sections */}

      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <SectionForm />
        </div>

        <div className="lg:col-span-2">
          <SectionsTable sections={sections} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <SocialLinkForm />
        </div>

        <div className="lg:col-span-2">
          <SocialLinksTable socialLinks={socialLinks} />
        </div>
      </div>
      {/* Table */}

      <CompanyPreview footer={footer} />
    </div>
  );
}
