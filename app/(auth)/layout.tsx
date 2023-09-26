const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full items-center justify-center px-3">
      <div className="my-2 flex w-full justify-center  rounded-xl bg-white shadow-xl sm:w-1/2">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
