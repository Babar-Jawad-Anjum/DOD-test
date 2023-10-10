'use client'

import Link from 'next/link'
import { TiTick } from 'react-icons/ti'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Step13 = () => {
  return (
    <div>
      <h4 className="font-semibold text-xl mt-8 mb-2">Select a pharmacy</h4>
      <p className="text-sm text-gray-500 font-semibold">
        Enter your Zip or Postal code
      </p>
      <div>
        <Input type="text" placeholder="Search" />
        {/* <BsSearch className=" bg-primary text-white text-4xl p-2 rounded-lg" /> */}
      </div>
      <p className="text-primary text-sm font-semibold mt-2 cursor-pointer ml-1">
        <Link href={'/add-pharmacy'}>+ Enter Manually</Link>
      </p>
      <div className="pharmacies mt-6 space-y-3">
        <h4 className="font-semibold text-xl mt-8 mb-2">Pharmacies</h4>
        <div className="pharmacy flex justify-between items-center bg-[#E3EEEF] p-3 px-6 rounded-2xl">
          <div>
            <h6 className="font-semibold text-lg">Buckly's Drug Store</h6>
            <p className="text-sm mt-2">35 East Palisades</p>
            <p className="text-sm mt-1"> Englewood, Nj 07631</p>
          </div>
          <TiTick className="bg-primary text-2xl rounded-full p-1 text-white" />
        </div>
        <div className="border p-3 px-6 rounded-2xl">
          <h6 className="font-semibold text-lg">
            Genova Healthcare - Englewood...
          </h6>
          <p className="text-sm mt-2">93 W Palisade Ave</p>
          <p className="text-sm mt-1"> Englewood, Nj 077631</p>
        </div>
        <div className="border p-3 px-6 rounded-2xl">
          <h6 className="font-semibold text-lg">Liberty Pharmacy</h6>
          <p className="text-sm mt-2">1 - 13 Tenafly Road</p>
          <p className="text-sm mt-1"> Englewood, Nj 0631</p>
        </div>
      </div>

      <Link href={'/visit/step-14'} className="flex justify-center mt-10">
        <Button className="w-40">Next</Button>
      </Link>
    </div>
  )
}

export default Step13
