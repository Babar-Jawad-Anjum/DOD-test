"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  // .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
  password: z.string().min(8),
});

const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full px-4 flex justify-center">
      <div>
        <h2 className="font-semibold text-3xl mt-24">Join DermOnDemand</h2>
        <p className="font-semibold text-lg mt-2 mb-12 max-w-lg">
          A few minutes of your time to sign up then access to 24/7 dermatology
          care
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Password *</FormLabel> */}
                  <FormControl>
                    <Input
                      placeholder="Password"
                      title="Password *"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ul className="text-sm space-y-1 my-1">
              <li>One lowercase letter</li>
              <li>One uppercase letter</li>
              <li>One number</li>
              <li>One special character</li>
              <li>8 characters minimum</li>
            </ul>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password *</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirm Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full sm:w-[500px] mx-auto my-10">
              <Button className="w-full sm:w-[250px] h-[54px]" type="submit">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
