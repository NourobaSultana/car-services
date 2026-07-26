"use client";
import { signIn, getSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import { loginUser } from "../actions/auth/loginUser";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        alert("Invalid email or password");
        setLoading(false);
        return;
      }

      const session = await getSession();

      if (session?.user?.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      alert("Authentication Failed");
    }

    setLoading(false);
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

              <button
                type="submit"
                disabled={loading}
                className="h-14 w-full rounded-[10px] bg-[#FF3811] text-lg font-semibold text-white"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
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
              <Link href="/register" className="font-semibold text-[#FF3811]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
