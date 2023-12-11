"use client";

import First from "@/components/First";
import Five from "@/components/Five";
import InfoCard from "@/components/InfoCard";
import Second from "@/components/Second";
import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState([]);
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step === 2) setStep(step + 3);
    else setStep(step + 1);
  };
  const prevStep = () => {
    if (step === 5) setStep(step - 3);
    else setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-white lg:bg-indigo-100 flex items-start lg:items-center justify-start lg:justify-center">
      <div className="bg-white w-full 2xl:w-4/6 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 xl:px-40 my-4 lg:my-20 gap-4 lg:gap-20 xl:gap-10 rounded-none lg:rounded-3xl py-8 lg:py-20 lg:mx-5 xl:mx-10">
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          {step !== 1 && (
            <button className="block lg:hidden rounded-full p-1 mb-10">
              <GrFormPrevious className="text-2xl" onClick={prevStep} />
            </button>
          )}
          <p className="text-xs text-slate-600">Step {step}/5</p>
          {step === 1 && (
            <First
              firstName={firstName}
              lastName={lastName}
              setFirstName={setFirstName}
              setLastName={setLastName}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <Second
              prevStep={prevStep}
              nextStep={nextStep}
              skills={skills}
              setSkills={setSkills}
            />
          )}
          {step === 5 && (
            <Five
              prevStep={prevStep}
              nextStep={nextStep}
              links={links}
              setLinks={setLinks}
            />
          )}
        </div>
        <div className="w-1/2">
          <InfoCard
            firstName={firstName}
            lastName={lastName}
            skills={skills}
            links={links}
          />
        </div>
      </div>
    </div>
  );
}
