"use client";
import Otp from "@/components/Otp";
import Signup from "@/components/Signup";

import { useState } from "react";
import { MdCheck } from "react-icons/md";

export default function Home() {
  const [email, setEmail] = useState("");
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-white lg:bg-indigo-200 flex items-start lg:items-center justify-center mt-14 lg:mt-0">
      <div className="bg-white w-full xl:w-5/6 2xl:w-4/6 rounded-none lg:rounded-3xl pt-5 pb-32 px-4 lg:px-6 xl:px-14 my-0 lg:my-16 mx-0 lg:mx-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">contra</h1>
          <span className="text-2xl font-light">X</span>
        </div>
        <div className="flex flex-col w-full lg:flex-row justify-between lg:items-center gap-20 pt-20 px-2 lg:px-20 xl:px-16 2xl:px-16">
          {step === 1 && (
            <Signup
              email={email}
              setEmail={setEmail}
              isEmailValid={isEmailValid}
              nextStep={nextStep}
            />
          )}
          {step === 2 && <Otp email={email} prevStep={prevStep} />}

          <div className="hidden lg:flex flex-col items-center w-1/2">
            <div className="shadow-md rounded-3xl p-8">
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
