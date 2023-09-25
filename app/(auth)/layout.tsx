import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center px-3">
      <div className="flex justify-center bg-white mt-2 h-[83vh] w-full sm:w-1/2 rounded-xl shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
