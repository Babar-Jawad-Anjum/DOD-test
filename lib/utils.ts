/* eslint-disable simple-import-sort/imports */
import { clsx, type ClassValue } from 'clsx'
import { toast } from 'react-toastify'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ErrorToast(errorMsg: string) {
  toast.error(errorMsg, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  })
}
export function SuccessToast(successMsg: string) {
  toast.success(successMsg, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  })
}
