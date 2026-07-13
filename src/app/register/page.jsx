"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function page() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, email, password });
  };
  return (
    <div>
      <section className="container mx-auto px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden justify-center lg:flex">
            <Image
              src="/assets/images/login/login.svg"
              alt="signup"
              width={520}
              height={520}
              className="w-full max-w-lg"
            />
          </div>

          {/* Right Side */}
          <div className="mx-auto w-full max-w-md rounded-xl border border-gray-200 bg-white p-10 shadow-sm">
            <h2 className="mb-10 text-center text-4xl font-bold text-gray-800">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="h-14 w-full rounded-lg border border-gray-200 px-5 outline-none transition focus:border-[#FF3811]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="h-14 w-full rounded-lg border border-gray-200 px-5 outline-none transition focus:border-[#FF3811]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="h-14 w-full rounded-lg border border-gray-200 px-5 outline-none transition focus:border-[#FF3811]"
                />
              </div>

              <button
                type="submit"
                className="h-14 w-full rounded-lg bg-[#FF3811] text-lg font-semibold text-white transition hover:bg-[#e62f0a]"
              >
                Sign Up
              </button>
            </form>

            <p className="my-8 text-center text-gray-500">Or Sign Up with</p>

            <div className="flex justify-center gap-4">
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
                <FaFacebookF />
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
                <FaLinkedinIn />
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
                <FcGoogle />
              </button>
            </div>

            <p className="mt-8 text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#FF3811]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
