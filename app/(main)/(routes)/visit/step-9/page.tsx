'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Step9 = () => {
  return (
    <div>
      <h4 className="font-semibold text-xl mb-2">Are you pregnant?</h4>
      <div className="space-y-3">
        <div className="font-semibold bg-[#E3EEEF] rounded-lg px-5 py-3 text-center border-[#18727D] border-2">
          Yes
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          No
        </div>
      </div>

      <Link href={'/visit/step-10'} className="flex justify-center mt-7">
        <Button className="w-40">Next</Button>
      </Link>
    </div>
  )
}

export default Step9
