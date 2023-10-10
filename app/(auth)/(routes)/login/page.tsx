'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import Loader from '@/components/loader/Loader'
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
import {
  disableLoading,
  enableLoading,
  getLoadingState,
} from '@/lib/redux/slices/loaderSlice'
import { ErrorToast, SuccessToast } from '@/lib/utils'
import { useLoginUserMutation } from '@/services/authApi/authApi'
import { useDispatch, useSelector } from 'react-redux'

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Valid email is required.'),
  password: z.string().min(1, { message: 'Password is required' }),
})

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const isLoading = useSelector(getLoadingState)

  const [loginUser] = useLoginUserMutation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //handle login response
    try {
      dispatch(enableLoading())
      const result = await loginUser(values)
      // if (result.error) {
      //   ErrorToast(result.error.data.message)
      // } else {
      SuccessToast(result.data.message)
      router.push('/visit/step-1')
      // }
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      dispatch(disableLoading())
    }
  }

  return (
    <div className="p-4 md:my-[60px]">
      <h2 className="text-2xl font-bold">Login</h2>
      <p className="mt-2 mb-8 text-md">Welcome Back!</p>
      {isLoading ? <Loader /> : null}
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
