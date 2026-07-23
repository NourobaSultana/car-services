import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon1 from "../../public/assets/icon/Frame.png";
import icon2 from "../../public/assets/icon/Vector (4).png";

const Navbar = () => {
  const NavMenu = () => {
    return (
      <>
        <li>
          <Link
            href="/"
            className="hover:bg-transparent hover:text-[#FF3811] border-b-2 border-transparent hover:border-[#FF3811] rounded-none transition-all duration-200"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="hover:bg-transparent hover:text-[#FF3811] border-b-2 border-transparent hover:border-[#FF3811] rounded-none transition-all duration-200"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/service"
            className="hover:bg-transparent hover:text-[#FF3811] border-b-2 border-transparent hover:border-[#FF3811] rounded-none transition-all duration-200"
          >
            Service
          </Link>
        </li>

        <li>
          <Link
            href="/blog"
            className="hover:bg-transparent hover:text-[#FF3811] border-b-2 border-transparent hover:border-[#FF3811] rounded-none transition-all duration-200"
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="hover:bg-transparent hover:text-[#FF3811] border-b-2 border-transparent hover:border-[#FF3811] rounded-none transition-all duration-200"
          >
            Contact
          </Link>
        </li>
      </>
    );
  };

  return (
    <div className="w-full">
      <div className="navbar max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 py-3">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-56 rounded-xl bg-white shadow-lg z-50 p-3 font-semibold text-[16px]"
            >
              {NavMenu()}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={107}
              height={87}
              className="w-[80px] sm:w-[95px] lg:w-[107px] h-auto"
            />
          </Link>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-[16px]">
            {NavMenu()}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {/* Icons */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-[23px] pr-3 lg:pr-[30px]">
            <Image
              src={icon1}
              alt="Search"
              className="w-4 h-4 lg:w-[18px] lg:h-[18px]"
            />

            <Image
              src={icon2}
              alt="Cart"
              className="w-4 h-4 lg:w-[18px] lg:h-[18px]"
            />
          </div>

          {/* Appointment Button */}
          <Link
            href="/login"
            className="
              border-2
              border-[#FF3811]
              text-[#FF3811]
              rounded-xl
              font-semibold
              text-sm
              sm:text-base
              px-4
              py-2
              sm:px-5
              sm:py-3
              lg:px-7
              lg:py-[15px]
              transition-all
              duration-200
              hover:bg-[#FF3811]
              hover:text-white
            "
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
