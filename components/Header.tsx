import Link from 'next/link'
import { AiFillMessage } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { MdMedicalServices } from 'react-icons/md'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="h-[70px] bg-white flex justify-between items-center px-7 sm:px-10 sticky z-10 border-b-2 top-0">
      <Link href="/" className="text-primary text-lg font-bold">
        DermOnDemand
      </Link>

      <div className="hidden md:block">
        <div className="menu__items flex space-x-9 cursor-pointer">
          <Link
            href={'#'}
            className="flex justify-center items-center font-semibold text-gray-600 hover:text-primary"
          >
            <MdMedicalServices className="mr-2 w-5 h-5" />
            Care
          </Link>
          <Link
            href={'#'}
            className="flex justify-center items-center font-semibold text-gray-600 hover:text-primary"
          >
            <AiFillMessage className="mr-2 w-5 h-5" />
            Messages
          </Link>
          <Link
            href={'#'}
            className="flex justify-center items-center font-semibold text-gray-600 hover:text-primary"
          >
            <FaUser className="mr-2 w-5 h-5" />
            Account
          </Link>
        </div>
      </div>

      <Button className="hover:bg-[#3c8790]">Start a Visit</Button>
    </header>
  )
}

export default Header
