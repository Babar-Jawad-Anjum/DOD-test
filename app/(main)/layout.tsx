const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center p-3">
      <div className="m-5 relative rounded-lg bg-white shadow-md w-[100%] md:w-[60%] px-[10px] sm:px-[130px]">
        {children}
      </div>
    </div>
  )
}

export default MainLayout
