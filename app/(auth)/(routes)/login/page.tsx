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
import { useLoginUserMutation } from '@/services/authApi/authApi'

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Valid email is required.'),
  password: z.string().min(1, { message: 'Password is required' }),
})

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [loginUser] = useLoginUserMutation()
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await loginUser(values)

    console.log('result from api')
    console.log(result)
  }

  return (
    <div className="p-4 md:my-[60px]">
      <h2 className="text-2xl font-bold">Login</h2>
      <p className="mt-2 mb-8 text-md">Welcome Back!</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
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
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={
                    form.formState.errors?.password ? 'text-black' : ''
                  }
                >
                  Password <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="-mt-2"
                    placeholder="Enter password"
                    id="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />

          <div className="mb-7 mt-4 text-sm font-semibold text-primary">
            <Link href="/forgot">Forgot Password?</Link>
          </div>
          <div className="my-2 flex justify-center w-full">
            <Button type="submit" className="w-full hover:bg-[#3c8790]">
              Login
            </Button>
          </div>
          <hr className="my-8 font-bold" />
          <div className="text-sm text-center">
            Don't have an account?{' '}
            <Link className="ml-1 text-primary font-bold" href={'/signup'}>
              <span>SignUp for free</span>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Login
