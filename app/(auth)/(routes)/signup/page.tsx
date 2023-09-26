'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  // .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
  password: z.string().min(8),
})

const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // eslint-disable-next-line no-console
    console.log(values)
  }

  return (
    <div className="flex w-full justify-center px-4">
      <div>
        <h2 className="mt-24 text-3xl font-semibold">Join DermOnDemand</h2>
        <p className="mb-12 mt-2 max-w-lg text-lg font-semibold">
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
            <ul className="my-1 space-y-1 text-sm">
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
            <div className="mx-auto my-10 w-full sm:w-[500px]">
              <Button className="h-[54px] w-full sm:w-[250px]" type="submit">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SignUpPage
