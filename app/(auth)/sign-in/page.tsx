import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex justify-center lg:justify-between items-center">
      <div className="z-50 -top-[50px] lg:top-0 relative flex flex-col justify-center items-center lg:items-start h-full gap-6 w-lg lg:w-full wrapper">
        <div className="flex flex-col items-center lg:items-start justify-center">
          <h2>Welcome,</h2>
          <h1 className="text-4xl font-bold">
            <span className="text-primary">Intern</span> Log In
          </h1>
        </div>
        <LoginForm />
      </div>
      <div className="">
        <div
          className="bg-cover lg:w-[60vw] bg-center bg-no-repeat h-screen lg:relative absolute top-0 left-0 w-full z-10 opacity-20 lg:opacity-100"
          style={{ backgroundImage: `url("/assets/background.jpg")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
