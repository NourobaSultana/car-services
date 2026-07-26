import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { getFooterSection } from "@/features/footer/actions/getFooterSection";

export default async function Footer() {
  const footer = await getFooterSection();
  const socialIcons = {
    FaGoogle,
    FaTwitter,
    FaInstagram,
    FaLinkedin: FaLinkedinIn,
  };

  if (!footer) return null;
  return (
    <footer className="bg-[#151515] text-white mt-20 md:mt-24 lg:mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Company Info */}

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={footer.companyInfo.logo}
                alt={footer.companyInfo.companyName}
                width={50}
                height={50}
              />

              <h2 className="text-2xl font-bold">
                {footer.companyInfo.companyName}
              </h2>
            </div>

            <p className="text-[#A2A2A2] leading-8 text-[15px] max-w-xs">
              {footer.companyInfo.description}
            </p>

            <div className="flex gap-4 mt-8">
              {footer.socialLinks
                .filter((social) => social.status)
                .sort((a, b) => a.order - b.order)
                .map((social) => {
                  const Icon = socialIcons[social.icon];

                  return (
                    <Link
                      key={social._id}
                      href={social.url}
                      target="_blank"
                      className="w-11 h-11 rounded-full bg-[#2B2B2B] hover:bg-[#FF3811] duration-300 flex items-center justify-center"
                    >
                      {Icon && <Icon />}
                    </Link>
                  );
                })}
            </div>
          </div>

          {/* Dynamic Sections */}

          {footer.sections
            .filter((section) => section.status)
            .sort((a, b) => a.order - b.order)
            .map((section) => (
              <div key={section._id}>
                <h3 className="text-xl font-semibold mb-8">{section.title}</h3>

                <ul className="space-y-5 text-[#A2A2A2]">
                  {section.links
                    .filter((link) => link.status)
                    .sort((a, b) => a.order - b.order)
                    .map((link) => (
                      <li key={link._id}>
                        <Link href={link.path} className="hover:text-[#FF3811]">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </footer>
  );
}
