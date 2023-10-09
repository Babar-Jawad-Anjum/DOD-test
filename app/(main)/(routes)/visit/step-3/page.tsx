import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Step3 = () => {
  return (
    <div className="p-8">
      <h4 className="font-semibold text-xl mb-7">
        When did this skin concern start?
      </h4>
      <div className="space-y-3">
        <div className="font-semibold bg-[#E3EEEF] rounded-lg px-5 py-3 text-center border-[#18727D] border-2">
          Less than a week
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          1 Month
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          6+ Months
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          1 Year +
        </div>
      </div>
      <Link href={'/visit/step-4'} className="flex justify-center mt-7">
        <Button className="w-40">Next</Button>
      </Link>
    </div>
  )
}

export default Step3
