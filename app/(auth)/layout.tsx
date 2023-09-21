import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center bg-white mt-3 h-[500px] w-1/2 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
