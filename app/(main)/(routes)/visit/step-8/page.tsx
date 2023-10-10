'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MdOutlinePhotoCamera } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { TiTick } from 'react-icons/ti'

import Backdrop from '@/components/backdrop/Backdrop'
import ImageModal from '@/components/imageModal/ImageModal'
import { Button } from '@/components/ui/button'

const Step8 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const modalToggle = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  return (
    <div>
      <div className="border rounded-lg p-5">
        <p className="text-sm font-semibold">Requirements for photos</p>
        <div className="grid lg:grid-cols-2 mt-3 space-y-2">
          <div className="flex items-center text-sm">
            <span className="mr-2 bg-green-700 rounded-full text-white p-[1px]">
              <TiTick className="text-xs" />
            </span>
            Close up
          </div>
          <div className="flex items-center text-sm">
            <span className="mr-2 bg-red-600 rounded-full text-white p-[1px]">
              <RxCross2 className="text-xs" />
            </span>
            Good lighting
          </div>
          <div className="flex items-center text-sm">
            <span className="mr-2 bg-green-700 rounded-full text-white p-[1px]">
              <TiTick className="text-xs" />
            </span>
            Don't use makeup
          </div>
          <div className="flex items-center text-sm">
            <span className="mr-2 bg-red-600 rounded-full text-white p-[1px]">
              <RxCross2 className="text-xs" />
            </span>
            Don't wear glasses
          </div>
        </div>
      </div>
      <div className=" my-5">
        <h4 className="font-semibold text-lg mb-2">
          Provide at least 3 photos of skin concern
        </h4>
        <div
          onClick={modalToggle}
          className="border-dotted cursor-pointer border-2 border-primary rounded-lg p-5 text-center text-sm flex justify-center items-center font-semibold text-primary bg-[#EFF5F6]"
        >
          <MdOutlinePhotoCamera className="text-2xl mr-2" />
          Upload photo
        </div>
      </div>
      <div className="image__preview flex gap-4">
        <div className="relative">
          <img
            className="h-24 w-24 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rKGiK2Ky5DS_9uu6MLA1sSiGrC94j-Ggy0JFHq7tZN6AKCqNpwdFbZ21y6rlr38Jqk8&usqp=CAU"
            alt="skin-image"
          />
          <RxCross2 className="absolute -top-1 -right-1 bg-gray-400 text-white rounded-full p-[3px] text-lg border-white border-[1px] cursor-pointer" />
        </div>
        <div className="relative">
          <img
            className="h-24 w-24 rounded-lg"
            src="https://singapore-dermatologist.com/wp-content/uploads/2020/01/Skin-Disorder.jpg"
            alt="skin-image"
          />
          <RxCross2 className="absolute -top-1 -right-1 bg-gray-400 text-white rounded-full p-[3px] text-lg border-white border-[1px] cursor-pointer" />
        </div>
      </div>
      <div className="px-6 py-2 rounded-lg border-red-300 border-2 text-xs mt-6 text-center bg-[#FdF3F4] text-red-500 mx-4 xl:mx-36">
        You need to upload at least 3 photos to proceed
      </div>
      <Link href={'/visit/step-9'} className="flex justify-center mt-7">
        <Button className="w-40">Next</Button>
      </Link>
      {isModalOpen ? (
        <div>
          <Backdrop modalToggle={modalToggle} />
          <ImageModal modalToggle={modalToggle} />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Step8
