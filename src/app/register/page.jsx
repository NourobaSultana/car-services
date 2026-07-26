"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { registerUser } from "../actions/auth/registerUser";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await registerUser({ name, email, password });

      if (result?._id) {
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    } finally {
      setLoading(false);
    }
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
              {/* <Link href="/login"> */}
              <button
                type="submit"
                disabled={loading}
                className={`h-14 w-full rounded-lg text-lg font-semibold text-white transition ${
                  loading
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-[#FF3811] hover:bg-[#e62f0a]"
                }`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
              {/* </Link> */}
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
