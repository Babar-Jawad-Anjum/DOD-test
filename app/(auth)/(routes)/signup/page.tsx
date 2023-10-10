'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineMinusSm } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { TiTick } from 'react-icons/ti'

import Loader from '@/components/loader/Loader'
import { Button } from '@/components/ui/button'
import { disableLoading, enableLoading } from '@/lib/redux/actions'
import { getLoadingState } from '@/lib/redux/slices/loaderSlice'
import { ErrorToast, SuccessToast } from '@/lib/utils'
import { useRegisterUserMutation } from '@/services/authApi/authApi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const router = useRouter()
  const dispatch = useDispatch()
  const isLoading = useSelector(getLoadingState)

  //Flags to check if user clicks login button without entering credentials
  const [emailEmptyClick, setEmailEmptyClick] = useState(true)
  const [passEmptyClick, setPassEmptyClick] = useState(true)
  const [confirmPassEmptyClick, setConfirmPassEmptyClick] = useState(false)
  // ----------------------------------------------------------------------

  //States to check all the required validation rules met or not
  const [hasUpperCase, setHasUpperCase] = useState(false)
  const [hasLowerCase, setHasLowerCase] = useState(false)
  const [hasSpecialChar, setHasSpecialChar] = useState(false)
  const [hasNumber, setHasNumber] = useState(false)
  const [passwordLength, setPasswordLength] = useState(false)
  // -------------------------------------------------------------

  //State to Shows errors when email and password fields are empty
  const [emailError, setEmailEror] = useState(false)
  const [initialErrorState, setInitialErrorState] = useState({
    hasUpperCase: true,
    hasLowerCase: true,
    hasSpecialChar: true,
    hasNumber: true,
    passwordLength: true,
  })
  // ---------------------------------------------------------------

  //Last check if users entered proper email and password according to validation rules
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  // ------------------------------------------------------------------------------------

  const [registerUser] = useRegisterUserMutation()

  const handleSingUp = async (data: any, e: any) => {
    e.preventDefault()
    //Check if email field is empty and user clicks login button
    if (emailEmptyClick) {
      setEmailEror(true)
    } else {
      setEmailEror(false)
    }

    //check if password field is empty and user clicks login button
    if (passEmptyClick) {
      setInitialErrorState((prevState) => ({
        ...prevState,
        hasUpperCase: false,
        hasLowerCase: false,
        hasSpecialChar: false,
        hasNumber: false,
        passwordLength: false,
      }))
    }

    //Login Clicks handler when validation passed
    if (isValidEmail && isValidPassword) {
      //Check if password and confirm password are same
      if (data.password === confirmPassword) {
        //Calling register user api
        try {
          dispatch(enableLoading())
          const result = await registerUser(data)
          // if (result.error) {
          //   ErrorToast(result.error.data.message)
          // } else {
          SuccessToast(result.data.message)
          router.push('/signup/account')
          // }
        } catch (error) {
          console.error('An error occurred:', error)
        } finally {
          dispatch(disableLoading())
        }
      } else {
        if (confirmPassword.length === 0) {
          setConfirmPassEmptyClick(true)
        } else {
          setConfirmPassEmptyClick(false)
          ErrorToast('Password Mismatched')
        }
      }
    }
  }

  const handleEmailChange = (e: any) => {
    const email = e.target.value

    if (email.length === 0) {
      setEmailEmptyClick(true)
    } else {
      setEmailEmptyClick(false)
      setEmailEror(false)
    }

    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)

    if (isValidEmail) {
      setIsValidEmail(true)
    } else {
      setIsValidEmail(false)
    }
  }

  const handlePasswordChange = (e: any) => {
    const password = e.target.value

    if (e.target.value !== 0) {
      setPassEmptyClick(false)
    }

    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const hasNumber = /\d/.test(password)

    // Check Upper Case character
    if (hasUpperCase) {
      setInitialErrorState((prevState) => ({
        ...prevState,
        hasUpperCase: false,
      }))

      setHasUpperCase(true)
    } else {
      setHasUpperCase(false)
    }

    // Check lower Case character
    if (hasLowerCase) {
      setInitialErrorState((prevState) => ({
        ...prevState,
        hasLowerCase: false,
      }))
      setHasLowerCase(true)
    } else {
      setHasLowerCase(false)
    }

    // Check special character
    if (hasSpecialChar) {
      setInitialErrorState((prevState) => ({
        ...prevState,
        hasSpecialChar: false,
      }))
      setHasSpecialChar(true)
    } else {
      setHasSpecialChar(false)
    }
    // Check digit character
    if (hasNumber) {
      setInitialErrorState((prevState) => ({
        ...prevState,
        hasNumber: false,
      }))
      setHasNumber(true)
    } else {
      setHasNumber(false)
    }

    // Check digit character
    if (password.length >= 8) {
      setInitialErrorState((prevState) => ({
        ...prevState,
        passwordLength: false,
      }))
      setPasswordLength(true)
    } else {
      setPasswordLength(false)
    }

    if (
      hasUpperCase &&
      hasLowerCase &&
      hasSpecialChar &&
      hasNumber &&
      password.length >= 8
    ) {
      setIsValidPassword(true)
    } else {
      setIsValidPassword(false)
    }
  }

  const handleConfirmPasswordChange = (e: any) => {
    if (e.target.value.length === 0) {
      setConfirmPassEmptyClick(true)
    } else {
      setConfirmPassword(e.target.value)
      setConfirmPassEmptyClick(false)
    }
  }

  return (
    <>
      <div className="p-4 md:my-[60px]">
        {isLoading ? <Loader /> : null}
        <h2 className="text-2xl font-bold">Join DermOnDemand</h2>
        <p className="mt-2 mb-10 text-sm">
          A few minutes of your time to sign up, then access 24/7 dermatology
          care.
        </p>

        <form onSubmit={handleSubmit(handleSingUp)}>
          {/* Email Field  */}
          <label className="block mb-1 text-sm font-semibold" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className=" rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter Your Email"
            {...register('email')}
            onChange={handleEmailChange}
          />
          {emailError ? (
            <p className="text-red-500 text-xs mt-1 ml-2 font-semibold">
              <span>Email is required</span>
            </p>
          ) : null}
          {!isValidEmail && !emailEmptyClick ? (
            <p className="text-red-500 text-xs mt-1 ml-2 font-semibold">
              <span>Valid email is required</span>
            </p>
          ) : null}

          {/* Password Field  */}
          <label
            className="block mb-1 mt-5 text-sm font-semibold"
            htmlFor="password"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter Your Password"
            {...register('password')}
            onChange={handlePasswordChange}
          />

          <div className="password__error my-3 ml-2 font-semibold">
            <p
              className={`flex items-center text-xs
            ${
              initialErrorState.passwordLength
                ? 'text-gray-400'
                : passwordLength
                ? 'text-green-500'
                : 'text-red-500'
            }`}
            >
              <span
                className={`border ${
                  initialErrorState.passwordLength
                    ? 'border-gray-400'
                    : passwordLength
                    ? 'border-green-500'
                    : 'border-red-500'
                }  rounded-full mr-1 text-[10px]`}
              >
                {initialErrorState.passwordLength ? (
                  <HiOutlineMinusSm />
                ) : passwordLength ? (
                  <TiTick />
                ) : (
                  <RxCross2 />
                )}
              </span>
              <span>At least eight characters</span>
            </p>
            <p
              className={`flex items-center text-xs
          ${
            initialErrorState.hasSpecialChar
              ? 'text-gray-400'
              : hasSpecialChar
              ? 'text-green-500'
              : 'text-red-500'
          }`}
            >
              <span
                className={`border ${
                  initialErrorState.hasSpecialChar
                    ? 'border-gray-400'
                    : hasSpecialChar
                    ? 'border-green-500'
                    : 'border-red-500'
                }  rounded-full mr-1 text-[10px]`}
              >
                {initialErrorState.hasSpecialChar ? (
                  <HiOutlineMinusSm />
                ) : hasSpecialChar ? (
                  <TiTick />
                ) : (
                  <RxCross2 />
                )}
              </span>
              <span>At least one special character</span>
            </p>
            <p
              className={`flex items-center text-xs
          ${
            initialErrorState.hasUpperCase
              ? 'text-gray-400'
              : hasUpperCase
              ? 'text-green-500'
              : 'text-red-500'
          }`}
            >
              <span
                className={`border ${
                  initialErrorState.hasUpperCase
                    ? 'border-gray-400'
                    : hasUpperCase
                    ? 'border-green-500'
                    : 'border-red-500'
                }  rounded-full mr-1 text-[10px]`}
              >
                {initialErrorState.hasUpperCase ? (
                  <HiOutlineMinusSm />
                ) : hasUpperCase ? (
                  <TiTick />
                ) : (
                  <RxCross2 />
                )}
              </span>
              <span> At least one uppercase character</span>
            </p>
            <p
              className={`flex items-center text-xs
          ${
            initialErrorState.hasLowerCase
              ? 'text-gray-400'
              : hasLowerCase
              ? 'text-green-500'
              : 'text-red-500'
          }`}
            >
              <span
                className={`border ${
                  initialErrorState.hasLowerCase
                    ? 'border-gray-400'
                    : hasLowerCase
                    ? 'border-green-500'
                    : 'border-red-500'
                }  rounded-full mr-1 text-[10px]`}
              >
                {initialErrorState.hasLowerCase ? (
                  <HiOutlineMinusSm />
                ) : hasLowerCase ? (
                  <TiTick />
                ) : (
                  <RxCross2 />
                )}
              </span>
              <span> At least one lowercase character</span>
            </p>
            <p
              className={`flex items-center text-xs
          ${
            initialErrorState.hasNumber
              ? 'text-gray-400'
              : hasNumber
              ? 'text-green-500'
              : 'text-red-500'
          }`}
            >
              <span
                className={`border ${
                  initialErrorState.hasNumber
                    ? 'border-gray-400'
                    : hasNumber
                    ? 'border-green-500'
                    : 'border-red-500'
                }  rounded-full mr-1 text-[10px]`}
              >
                {initialErrorState.hasNumber ? (
                  <HiOutlineMinusSm />
                ) : hasNumber ? (
                  <TiTick />
                ) : (
                  <RxCross2 />
                )}
              </span>
              <span>At least one number required</span>
            </p>
          </div>

          {/* Confirm Password Field  */}
          <label
            className="block mb-1 mt-5 text-sm font-semibold"
            htmlFor="password"
          >
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Re-Enter Your Password"
            onChange={handleConfirmPasswordChange}
            disabled={!isValidPassword}
          />
          {confirmPassEmptyClick ? (
            <p className="text-red-500 text-xs mt-1 ml-2 font-semibold">
              <span>Confirm password is required</span>
            </p>
          ) : null}
          <div className="my-10 w-full">
            <Button
              type="submit"
              className="w-full flex justify-center items-center hover:bg-[#3c8790]"
            >
              Next <BsArrowRight className="ml-3 mt-[3px]" />
            </Button>
          </div>
        </form>
        <hr className="my-6 font-bold" />
        <div className="text-md text-center">
          Have an account?
          <Link className="ml-2 text-primary font-bold" href={'/login'}>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SignUpPage
