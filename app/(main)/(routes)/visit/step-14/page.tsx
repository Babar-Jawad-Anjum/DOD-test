'use client'

import Link from 'next/link'
import { RiVisaLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'

import { Button } from '@/components/ui/button'

const Step14 = () => {
  return (
    <div>
      <h4 className="font-bold text-xl mb-2">Review & Payment</h4>
      <div className="border rounded-lg p-5 mt-4">
        <h6 className="font-semibold mb-3">
          Dermatology Diagnosis and Treatment
        </h6>
        <div className="flex mb-2">
          <TiTick className="mr-2 mt-[3px] bg-primary text-white text-sm p-[1px] rounded-full" />
          <p className="text-sm">
            24 hours to receive your diagnosis and treatment plan.
          </p>
        </div>
        <div className="flex">
          <TiTick className="mr-2 mt-[3px] bg-primary text-white text-sm p-[1px] rounded-full" />
          <p className="text-sm">
            Message with your provider in the app if you have follow-up
            questions.
          </p>
        </div>
      </div>
      <div className="border rounded-lg p-5 my-4">
        <h6 className="font-semibold mb-3 flex justify-between items-center">
          Order Total <span className="text-primary font-bold">$65.00</span>
        </h6>
        <p className="text-sm">
          Medications are not included in the cost of your visit
        </p>
      </div>

      <div className="credit__cards mt-5">
        <h4 className="font-bold text-lg mb-2 flex justify-between items-center">
          Credit Card(s)
          <span className="text-primary text-sm font-semibold mt-2 cursor-pointer ml-1">
            <Link href={'/add-credit-card'}>+ Add Credit Card</Link>
          </span>
        </h4>
        <div className="border rounded-lg p-4 pt-0 mb-4 bg-[#E3EEEF]">
          <h6 className="font-semibold mb-3 flex justify-between items-center">
            <RiVisaLine className="text-5xl text-blue-500" />
            <TiTick className="mr-2 mt-[3px] bg-primary text-white text-sm p-[1px] rounded-full" />
          </h6>
          <div className="flex justify-between items-center text-sm font-semibold">
            <p>**** **** **** 9876</p>
            <p>Primary</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 pt-0 mb-4]">
          <img src="/assets/master-card.png" className="w-10 mb-5" alt="" />
          <p className="text-sm font-semibold">**** **** **** 0915</p>
        </div>
      </div>

      {/* <div>
        <h4 className="font-bold text-lg mb-3">Enter Credit Card</h4>
        <p className="text-sm font-semibold">
          Card Number <span className="text-red-500">*</span>
        </p>
        <Input type="text" className="-mt-3" />
        <div className="grid lg:grid-cols-2 mt-5 gap-5">
          <div>
            <p className="text-sm font-semibold">
              Expiration Date <span className="text-red-500">*</span>
            </p>
            <Input type="text" placeholder="MM/YY" className="-mt-3" />
          </div>
          <div>
            <p className="text-sm font-semibold">
              CVV/CVC <span className="text-red-500">*</span>
            </p>
            <Input type="text" className="-mt-3" />
          </div>
        </div>
      </div> */}

      <Link href={'/#'} className="flex justify-center mt-7">
        <Button className="w-40">Pay Now</Button>
      </Link>
    </div>
  )
}

export default Step14
