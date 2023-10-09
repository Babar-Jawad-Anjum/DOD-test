import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Step5 = () => {
  return (
    <div className="p-8">
      <h4 className="font-semibold text-xl mb-4">
        Do you have any of these symptoms?
      </h4>
      <p className="text-sm text-gray-500 font-semibold mb-7">
        You can select more than 1 options
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Burning
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Itching
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Pain
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Tingling
        </div>
        <div className="font-semibold bg-[#E3EEEF] rounded-lg px-5 py-3 text-center border-[#18727D] border-2">
          Bleeding
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Fever
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Vomiting
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Diarrhea
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Nail/Feet
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Anti-aging
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Not Sure
        </div>
        <div className="font-semibold bg-[#EFF5F6] rounded-lg px-5 py-3 text-center">
          Other
        </div>
      </div>
      <h4 className="font-semibold text-xl mb-2 mt-10">Please specify</h4>
      <textarea
        className="h-32 rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type here..."
      />
      <Link href={'/visit/step-6'} className="flex justify-center mt-7">
        <Button className="w-40">Next</Button>
      </Link>
    </div>
  )
}

export default Step5
