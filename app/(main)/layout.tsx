const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center p-3 md:p-5">
      <div className="relative rounded-lg bg-white shadow-md m-5 mb-40 sm:mb-32 md:mb-16 p-5 md:py-10  md:px-[100px] lg:px-[130px] w-[100%] md:w-[80%] lg-w-[70%] xl:w-[60%]">
        {children}
      </div>
    </div>
  )
}

export default MainLayout
