'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Login = () => {
  return (
    <div className="flex w-full justify-center px-4 ">
      <div className="py-1">
        <h2 className="mt-24 text-3xl font-semibold">Login</h2>
        <p className="mb-12 mt-2 text-xl font-semibold">Welcome Back!</p>

        <Input type="text" placeholder="Email" id="email" title="Email" />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          title="Password"
        />
        <div className="mb-12 mt-4 text-sm font-normal text-primary">
          <Link href="/forgot">Forgot Password?</Link>
        </div>
        <div className="my-3 flex w-full justify-center  sm:mb-[39%] sm:w-[500px]">
          <Button className="h-[54px] w-full sm:w-[250px]">Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
