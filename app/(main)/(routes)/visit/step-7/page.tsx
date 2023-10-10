import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Step7 = () => {
  return (
    <div>
      <h4 className="font-semibold text-xl mb-4">
        Any additional details to share?
      </h4>
      <p className="text-sm text-gray-500 font-semibold mb-7">
        Make sure to include the dose, how often you were using it, how
        effective it was, and any side effects you might have experienced.
      </p>
      <h4 className="font-semibold text-xl mb-2 mt-10">Please specify</h4>
      <textarea
        className="h-40 rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type here..."
      />
      <Link href={'/visit/step-8'} className="flex justify-center mt-7">
        <Button className="w-40">Next</Button>
      </Link>
    </div>
  )
}

export default Step7
