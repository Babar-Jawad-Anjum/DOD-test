"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Login = () => {
  return (
    <div className="w-1/2">
      <h2>Login</h2>
      <p>Welcome Back!</p>
      <Input type="text" placeholder="Email" id="email" title="Email" />
      <Input
        type="password"
        placeholder="Password"
        id="password"
        title="Password"
      />
      <div>Forgot Password?</div>
      <Button className="w-[250px] h-[54px]">Login</Button>
    </div>
  );
};

export default Login;
