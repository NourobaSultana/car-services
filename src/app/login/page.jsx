"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../actions/auth/loginUser";

export default function page() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser({ email, password });
    console.log(email, password);
  };
  return (
    <div>
      <section className="container mx-auto px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Illustration */}
          <div className="hidden justify-center lg:flex">
            <Image
              src="/assets/images/login/login.svg"
              alt="Login"
              width={500}
              height={500}
              className="w-full max-w-[480px]"
            />
          </div>

          {/* Login Card */}
          <div className="mx-auto w-full max-w-[460px] rounded-[10px] border border-[#E8E8E8] bg-white px-10 py-12">
            <h1 className="mb-10 text-center text-[40px] font-bold text-[#151515]">
              Login
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="mb-2 block text-base font-semibold text-[#444]">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="h-14 w-full rounded-[10px] border border-[#E8E8E8] px-5 outline-none focus:border-[#FF3811]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-base font-semibold text-[#444]">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="h-14 w-full rounded-[10px] border border-[#E8E8E8] px-5 outline-none focus:border-[#FF3811]"
                />
              </div>
              <Link href="/dashboard" prefetch>
                <button className="h-14 w-full rounded-[10px] bg-[#FF3811] text-lg font-semibold text-white transition hover:bg-[#e2320d]">
                  Sign In
                </button>
              </Link>
            </form>

            <p className="my-8 text-center text-[#737373]">Or Sign In with</p>

            <div className="flex justify-center gap-4">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F8]">
                <FaFacebookF />
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F8]">
                <FaLinkedin />
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F8]">
                <FcGoogle />
              </button>
            </div>

            <p className="mt-8 text-center text-[#737373]">
              Have an account?{" "}
              <Link href="/signup" className="font-semibold text-[#FF3811]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
