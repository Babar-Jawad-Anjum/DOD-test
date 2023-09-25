"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full px-4 flex justify-center ">
      <div className="py-1">
        <h2 className="font-semibold text-3xl mt-24">Login</h2>
        <p className="font-semibold text-xl mt-2 mb-12">Welcome Back!</p>

        <Input type="text" placeholder="Email" id="email" title="Email" />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          title="Password"
        />
        <div className="text-primary text-sm font-normal mt-4 mb-12">
          <Link href="/forgot">Forgot Password?</Link>
        </div>
        <div className="w-full sm:w-[500px] flex justify-center  my-3 sm:mb-[39%]">
          <Button className="w-full sm:w-[250px] h-[54px]">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
