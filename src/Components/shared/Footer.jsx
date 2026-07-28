import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import { getCompanyInfo } from "@/app/dashboard/settings/cms/footer/company/actions/getCompanyInfo";

export default async function Footer() {
  const footer = await getCompanyInfo();
  console.log(JSON.stringify(footer.sections, null, 2));

  const socialIcons = {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  };

  if (!footer) return null;

  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-r from-[#7B5CF6] via-[#7E63F8] to-[#6F59F2] text-white">
      {/* Background Circles */}
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-sm"></div>

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-white/10 blur-sm"></div>

      <div className="absolute top-10 left-8 h-10 w-10 rounded-full bg-white/10"></div>

      <div className="absolute top-10 right-8 h-10 w-10 rounded-full bg-white/10"></div>

      <div className="absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* Company Top */}
        <div className="flex flex-col gap-10 border-b border-white/20 pb-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo & Company */}
          <div className="flex items-center gap-4">
            <Image
              src={footer.companyInfo.logo}
              alt={footer.companyInfo.companyName}
              width={70}
              height={70}
            />

            <div>
              <h2 className="text-4xl font-bold">
                {footer.companyInfo.companyName}
              </h2>

              <p className="text-white/70">{footer.companyInfo.tagline}</p>
            </div>
          </div>

          {/* Contact */}
          <div className=" space-y-2 text-white/90">
            <p>{footer.companyInfo.phone}</p>
            <p>{footer.companyInfo.telephone}</p>

            <p>{footer.companyInfo.mobile}</p>

            <p>{footer.companyInfo.email}</p>
            <p>{footer.companyInfo.secondary_email}</p>

            <p>{footer.companyInfo.careerEmail}</p>
          </div>

          {/* Addresses */}
          <div className="space-y-3">
            <div className="max-w-md">
              <p className="whitespace-pre-line text-white/80">
                {footer.companyInfo.address}
              </p>
            </div>
            <div className="max-w-md">
              <p className="whitespace-pre-line text-white/80">
                {footer.companyInfo.secondary_address}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 items-start">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold  tracking-wide">About Us</h3>

            <div className="mt-3 mb-7 h-[3px] w-16 rounded-full bg-gradient-to-r from-white to-white/20"></div>

            <p className="w-full break-words text-[15px] leading-7 text-white/80">
              {footer.companyInfo.description}
            </p>

            <div className="mt-8 flex gap-4">
              {footer.socialLinks
                ?.filter((social) => social.status)
                .sort((a, b) => a.order - b.order)
                .map((social) => {
                  const Icon = socialIcons[social.icon];

                  return (
                    <Link
                      key={social._id}
                      href={social.url}
                      target="_blank"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#755CF5] transition hover:bg-[#101010] hover:text-white"
                    >
                      {Icon && <Icon />}
                    </Link>
                  );
                })}
            </div>
          </div>

          {/* Dynamic Sections */}
          {footer.sections
            ?.filter((section) => section.status)
            .sort((a, b) => a.order - b.order)
            .map((section) => {
              console.log("Section:", section);
              console.log("Links:", section.links);

              return (
                <div key={section._id}>
                  <h3 className="text-2xl font-bold">{section.title}</h3>

                  <div className="mt-3 mb-6 h-1 w-14 rounded-full bg-white"></div>
                  <ul className="space-y-4 text-white/80">
                    {section.links
                      ?.filter((link) => link && link.status)
                      .sort((a, b) => a.order - b.order)
                      .map((link) => (
                        <li key={link._id}>
                          <Link
                            href={link.path}
                            className="block text-[15px] text-white/75 transition duration-300 hover:translate-x-1 hover:text-white"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
