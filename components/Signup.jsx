import Link from "next/link";

export default function Signup({ email, setEmail, isEmailValid, nextStep }) {
  return (
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
        <p className="text-xs text-slate-500 my-4 mr-2">OR SIGN UP WITH</p>
        <div className="flex-grow border-t border-slate-200"></div>
      </div>

      <div className="flex flex-col">
        <input
          placeholder="name@email.com"
          className="border border-slate-300 rounded-md py-2 px-4 lg:px-8 my-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col">
          <button
            disabled={!isEmailValid}
            className={`bg-black text-white rounded-3xl py-2 px-6 lg:px-10 my-2 ${
              !isEmailValid && "opacity-10 cursor-not-allowed"
            }`}
            onClick={nextStep}
          >
            Continue
          </button>
        </div>
      </div>
      <p className="text-sm text-slate-500 text-center pt-6">
        Already using Contra?{" "}
        <span className="text-blue-700 cursor-pointer">Sign in here.</span>
      </p>
    </div>
  );
}
