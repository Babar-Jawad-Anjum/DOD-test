import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Step7 = () => {
  return (
    <div className="p-8">
      <div className="">
        <p>Requirements for photos</p>
      </div>
      <Link href={'#'} className="flex justify-center mt-7">
        <Button className="w-40">Next</Button>
      </Link>
    </div>
  )
}

export default Step7
