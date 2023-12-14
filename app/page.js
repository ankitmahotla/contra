"use client";
import Otp from "@/components/Otp";
import Signup from "@/components/Signup";
import { useState } from "react";

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
    <div className="min-h-screen bg-white lg:bg-main-screen flex items-start lg:items-center justify-center">
      <div className="bg-white w-full xl:w-10/12 2xl:w-7/12 rounded-none lg:rounded-3xl mt-20 lg:mt-0 lg:mx-4 xl:mx-8 px-4 lg:pt-5 lg:p-8 lg:pb-20 xl:pb-20">
        <div className="flex items-center justify-between">
          <div className="hidden lg:flex">
            <img src="/logo.svg" />
          </div>
          <div className="flex lg:hidden">
            <img src="/logo-sm.svg" />
          </div>
          <img src="/close.svg" />
        </div>
        <div className="flex flex-col w-full lg:flex-row justify-between lg:items-center mt-14 lg:m-16">
          {step === 1 && (
            <Signup
              email={email}
              setEmail={setEmail}
              isEmailValid={isEmailValid}
              nextStep={nextStep}
            />
          )}
          {step === 2 && <Otp email={email} prevStep={prevStep} />}

          <div className="hidden lg:flex flex-col items-center mr-0 lg:mr-8">
            <div className="shadow-lg rounded-2xl">
              <img src="https://builds.contra.com/76ef0de6/assets/static/sign-up.SmajRmIv.webp" />
            </div>
            <h4 className="text-center text-xs mt-8 mb-4">TRUSTED BY</h4>
            <div className="w-4/6">
              <img src="https://builds.contra.com/47275bf5/assets/static/logo-cloud.BwIGpzGL.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
