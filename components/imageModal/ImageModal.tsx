import { RxCross2 } from 'react-icons/rx'
import { Button } from '../ui/button'

const ImageModal = ({ modalToggle }) => {
  return (
    <div className="p-4 modal rounded-xl">
      <div className="flex justify-between items-center font-bold">
        <p>Upload Image </p>
        <span onClick={modalToggle}>
          <RxCross2 className="bg-gray-400 text-white rounded-full p-[3px] text-lg cursor-pointer" />
        </span>
      </div>
      <div className="my-4">
        <img
          src="https://singapore-dermatologist.com/wp-content/uploads/2020/01/Skin-Disorder.jpg"
          alt=""
          className="rounded-lg"
        />
      </div>
      <textarea
        className="h-20 rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type here..."
      />
      <Button className="w-full mt-4 text-sm font-normal">Upload</Button>
    </div>
  )
}

export default ImageModal
