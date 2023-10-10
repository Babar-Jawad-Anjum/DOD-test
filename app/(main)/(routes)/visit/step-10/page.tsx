import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Step10 = () => {
  return (
    <div>
      <h4 className="font-semibold text-xl mb-2">
        Any history of medical conditions?
      </h4>
      <p className="text-sm text-gray-500 font-semibold mb-7">
        e.g., Diabetes, Asthma, Hypertension, Caner
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="font-semibold bg-[#E3EEEF] rounded-lg px-5 py-3 text-center border-[#18727D] border-2">
          Yes
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          No
        </div>
      </div>
      <h4 className="font-semibold text-xl mb-1 mt-7">
        Please select which medical conditions?
      </h4>
      <p className="text-sm text-gray-500 font-semibold mb-7">
        You can select more than 1 options
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="font-semibold bg-[#E3EEEF] rounded-lg px-5 py-3 text-center border-[#18727D] border-2">
          Diabetes
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Hypertension
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Cancer
        </div>
        <div className="font-semibold bg-[#E3EEEF] rounded-lg px-5 py-3 text-center border-[#18727D] border-2">
          Asthma
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Autoimmune
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Other
        </div>
      </div>
      <h4 className="font-semibold text-xl mb-2 mt-10">Please specify</h4>
      <textarea
        className="h-24 rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type here..."
      />
      <Link href={'/visit/step-11'} className="flex justify-center mt-7">
        <Button className="w-40">Next</Button>
      </Link>
    </div>
  )
}

export default Step10
