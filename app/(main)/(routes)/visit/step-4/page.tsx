'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Step4 = () => {
  return (
    <div className="p-8">
      <h4 className="font-semibold text-xl mb-2">
        Has this skin concern occurred before?
      </h4>
      <div className="space-y-3">
        <div className="font-semibold bg-[#E3EEEF] rounded-lg px-5 py-3 text-center border-[#18727D] border-2">
          Yes
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          No
        </div>
      </div>
      <h4 className="font-semibold text-xl mb-2 mt-10">
        Have you tried any past treatments?
      </h4>
      <div className="space-y-3">
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Yes
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center border-[#18727D] border-2">
          No
        </div>
      </div>
      <h4 className="font-semibold text-xl mb-2 mt-10">
        List past treatments and did they work?
      </h4>
      <textarea
        className="h-32 rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type here..."
      />
      <Link href={'/visit/step-5'} className="flex justify-center mt-7">
        <Button className="w-40">Next</Button>
      </Link>
    </div>
  )
}

export default Step4
