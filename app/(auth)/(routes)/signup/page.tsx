"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="w-full px-4 sm:pl-[276px]">
      <h2 className="font-semibold text-3xl mt-24">Join DermOnDemand</h2>
      <p className="font-semibold text-lg mt-2 mb-12 max-w-lg">
        A few minutes of your time to sign up then access to 24/7 dermatology
        care
      </p>
      <Input type="text" placeholder="Email" id="email" title="Email" />
      <Input
        type="password"
        placeholder="Password"
        id="password"
        title="Password"
      />
      <div className="text-primary">Forgot Password?</div>
      <Button className="w-[250px] h-[54px] mx-auto">Login</Button>
    </div>
  );
};

export default SignUpPage;
