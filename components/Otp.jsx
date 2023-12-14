"use client";
import { GoPencil } from "react-icons/go";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Otp({ prevStep, email }) {
  const router = useRouter();
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      // Clear the value of the current input
      setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);

      if (index > 0) {
        // Move focus to the previous input if not the first input
        const previousIndex = index - 1;
        const previousInput = document.getElementsByName("otp")[previousIndex];

        // Move focus to the end of the previous input
        setTimeout(() => {
          previousInput.focus();
          previousInput.setSelectionRange(
            previousInput.value.length,
            previousInput.value.length
          );
        }, 0);
      }
      // No need to move focus for the first input
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      router.push("/signup");
    }
  };

  useEffect(() => {
    if (otp[5] !== "") {
      verifyOtp();
    }
  }, [otp]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl lg:text-3xl text-center">
        We emailed you a code
      </h1>
      <p className="mt-3">Enter the verification code sent to:</p>
      <button className="flex items-center mb-4 gap-2 " onClick={prevStep}>
        <span className="bg-yellow-50 p-1 font-semibold text-slate-600">
          {email}
        </span>
        <GoPencil size={18} />
      </button>
      <div className="flex border border-slate-300 focus-within:border-black rounded-2xl px-6">
        {otp.map((data, index) => {
          return (
            <input
              type="text"
              name="otp"
              className="w-10 h-16 text-center focus:outline-none placeholder:text-slate-200"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              onKeyDown={(e) => handleKeyDown(e, index)}
              placeholder="●"
            />
          );
        })}
      </div>
      <p className="text-sm text-slate-500 mt-2">
        Didn't get your code?{" "}
        <span className="text-indigo-600">Send a new code</span>
      </p>
    </div>
  );
}
