"use client";
import Link from "next/link";
import { useState } from "react";
import { MdCheck } from "react-icons/md";

export default function Home() {
  const [email, setEmail] = useState("");
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return (
    <div className="min-h-screen bg-white lg:bg-indigo-200 flex items-start lg:items-center justify-center mt-14 lg:mt-0">
      <div className="bg-white w-full xl:w-4/6 rounded-none lg:rounded-3xl pt-5 pb-32 px-4 lg:px-10 xl:px-14 my-0 lg:my-16 mx-0 lg:mx-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">contra</h1>
          <span className="text-2xl font-light">X</span>
        </div>
        <div className="flex flex-col w-full  lg:flex-row justify-between gap-20 mt-10">
          <div className="flex flex-col lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl">Create your Contra profile</h1>
            <p className="text-base lg:text-lg text-slate-500 my-2">
              Sign up with your email address
            </p>
            <Link href="/signup" className="flex flex-col">
              <button className="border border-slate-300 rounded-3xl py-2 px-6 lg:px-10 my-4 lg:my-6 text-slate-800">
                Continue with Google
              </button>
            </Link>
            <div className="flex items-center justify-center">
              <p className="text-xs text-slate-500 my-4 mr-2">
                OR SIGN UP WITH
              </p>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <div className="flex flex-col">
              <input
                placeholder="name@email.com"
                className="border border-slate-300 rounded-md py-2 px-4 lg:px-8 my-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Link href="/signup" className="flex flex-col">
                <button
                  disabled={!isEmailValid}
                  className={`bg-black text-white rounded-3xl py-2 px-6 lg:px-10 my-2 ${
                    !isEmailValid && "opacity-10 cursor-not-allowed"
                  }`}
                >
                  Continue
                </button>
              </Link>
            </div>
            <p className="text-sm text-slate-500 text-center pt-6">
              Already using Contra?{" "}
              <span className="text-blue-700 cursor-pointer">
                Sign in here.
              </span>
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-center w-1/2">
            <div className="w-5/6 shadow-md rounded-3xl p-8">
              <h1 className="text-3xl lg:text-2xl font-semibold my-4">
                Your entire freelance workflow in one place
              </h1>
              <ul className="text-base">
                <li className="flex items-center gap-3 my-6">
                  <MdCheck size={25} color="green" /> Launch an AI portfolio in
                  minutes
                </li>
                <li className="flex items-center gap-3 my-6">
                  <MdCheck size={25} color="green" /> Get discovered, find your
                  next job
                </li>
                <li className="flex items-center gap-3 my-6">
                  <MdCheck size={25} color="green" /> Manage contracts,
                  invoices, payments, and projects
                </li>
                <li className="flex items-center gap-3 my-6">
                  <MdCheck size={25} color="green" /> Get paid 100% commission
                  free
                </li>
              </ul>
            </div>
            <h4 className="text-center text-xs my-4">TRUSTED BY</h4>
            <div className="w-4/6">
              <img src="https://builds.contra.com/47275bf5/assets/static/logo-cloud.BwIGpzGL.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
