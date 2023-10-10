'use client'
import Link from 'next/link'
import { RxCross2 } from 'react-icons/rx'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Step12 = () => {
  return (
    <div>
      <h4 className="font-semibold text-xl mb-4">
        Do you have any allergies to drugs or food?
      </h4>
      <div className="space-y-3">
        <div className="font-semibold bg-[#E3EEEF] rounded-lg px-5 py-3 text-center border-[#18727D] border-2">
          Yes
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          No
        </div>
      </div>
      <h4 className="font-semibold text-xl mt-8 mb-2">Allergies</h4>
      <p className="text-sm text-gray-500 font-semibold">Enter Allergy Name</p>
      <Input type="text" placeholder="e.g. Cigarette Smoke" className="-mt-3" />
      <div className="my-2">
        <p className="px-3 m-1 inline-block py-2 text-sm rounded-3xl bg-[#DCEAEB] text-primary">
          <span className="flex items-center">
            Cigarette Smoke
            <RxCross2 className="ml-2 bg-primary text-white rounded-full text-lg p-[2px]" />
          </span>
        </p>
        <p className="px-3 m-1 py-2 inline-block text-sm rounded-3xl bg-[#DCEAEB] text-primary">
          <span className="flex items-center">
            Bee Sting
            <RxCross2 className="ml-2 bg-primary text-white rounded-full text-lg p-[2px]" />
          </span>
        </p>
        <p className="px-3 m-1 py-2 inline-block text-sm rounded-3xl bg-[#DCEAEB] text-primary">
          <span className="flex items-center">
            Chronic total occlusion of artery of the extremities
            <RxCross2 className="ml-2 bg-primary text-white rounded-full text-lg p-[2px]" />
          </span>
        </p>
      </div>
      <h4 className="font-semibold text-xl mt-8 mb-2">Common Allergies</h4>
      <div className="my-2">
        <p className="px-3 py-2 inline-block text-sm rounded-3xl text-primary m-1 border-[1px] border-primary">
          Atorvastatin
        </p>
        <p className="px-3 py-2 inline-block text-sm rounded-3xl text-primary m-1 border-[1px] border-primary">
          Metformin
        </p>
        <p className="px-3 py-2 inline-block text-sm rounded-3xl text-primary m-1 border-[1px] border-primary">
          Bupropion
        </p>
        <p className="px-3 py-2 inline-block text-sm rounded-3xl text-primary m-1 border-[1px] border-primary">
          Humalog
        </p>
      </div>

      <Link href={'/visit/step-13'} className="flex justify-center mt-10">
        <Button className="w-40">Next</Button>
      </Link>
    </div>
  )
}

export default Step12
