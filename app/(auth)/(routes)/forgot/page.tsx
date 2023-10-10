'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
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
    .min(1, { message: 'Email is required' })
    .email('Valid email is required.'),
})

const ForgotPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="p-4 md:my-[60px]">
      <h2 className="text-2xl font-bold">Forgot Password?</h2>
      <p className="mt-2 mb-8 text-md">
        Enter your email to reset your password!
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.email ? 'text-black' : ''}
                >
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="-mt-2"
                    placeholder="Enter email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2 font-semibold" />
              </FormItem>
            )}
          />

          <div className="mb-7 mt-4 text-sm font-normal">
            <Link href="/login">
              Remember your Password?
              <span className="text-primary font-bold ml-2">Back to login</span>
            </Link>
          </div>
          <div className="my-2 flex justify-center w-full">
            <Button type="submit" className="w-full hover:bg-[#3c8790]">
              Reset Password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ForgotPage
