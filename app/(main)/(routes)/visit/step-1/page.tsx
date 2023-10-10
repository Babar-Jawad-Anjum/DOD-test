import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'
import { TiTick } from 'react-icons/ti'

const Step1 = () => {
  return (
    <div>
      <h4 className="font-semibold text-xl mb-8">Who needs help today?</h4>
      <p className="text-sm text-primary font-semibold text-end mb-3">
        <Link href={'/add-dependent'}>+ Add Dependent</Link>
      </p>
      <div className="card bg-[#E3EEEF] rounded-lg my-2 px-5 py-3 flex items-center justify-between">
        <div className="wrapper flex items-center">
          <div className="icon rounded-full p-4 bg-[#D3E4E6] mr-3">
            <BiUser className="text-3xl font-normal text-primary" />
          </div>
          <div className="info">
            <h3 className="font-semibold text-md -mt-2 mb-1">Ross Kopelman</h3>
            <p className="text-xs">You . 34 yo</p>
          </div>
        </div>
        <TiTick className="bg-primary text-white p-1 rounded-full text-2xl" />
      </div>
      <Link href={'/visit/step-2'} className="flex justify-center">
        <Button className="w-40 mt-5">Next</Button>
      </Link>
    </div>
  )
}

export default Step1
