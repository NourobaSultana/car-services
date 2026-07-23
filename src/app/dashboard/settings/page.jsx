import Link from "next/link";
import React from "react";
import { FiArrowRight, FiMenu } from "react-icons/fi";

const page = () => {
  return (
    <>
      {" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-2">
          Select an option from the Settings menu on the left.
        </p>
      </div>
    </>
  );
};

export default page;
