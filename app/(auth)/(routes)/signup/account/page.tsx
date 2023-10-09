'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRef, useState } from 'react'

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  dob: z.string().min(1, { message: 'DOB is required.' }),
  address: z.string().min(1, { message: 'Address is required.' }),
  state: z.string().min(1, { message: 'State is required.' }),
  zipCode: z.string().min(1, { message: 'ZipCode is required.' }),
  country: z.string().min(1, { message: 'Country is required.' }),
  cellNumber: z.string().min(1, { message: 'Cell Number is required.' }),
  gender: z.string().min(1, { message: 'Gender is required.' }),
  language: z.string().min(1, { message: 'Language is required.' }),
  about: z.string().min(1, { message: 'This is required.' }),
  code: z.string().min(1, { message: 'This is required.' }),
})

const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dob: '',
      address: '',
      state: '',
      zipCode: '',
      country: '',
      cellNumber: '',
      gender: '',
      language: '',
      about: '',
      code: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // eslint-disable-next-line no-console
    console.log('values are')
    console.log(values)
  }

  // const [haveCode, setHaveCode] = useState(false)

  const imageRef = useRef(null)
  const [image, setImage] = useState('')

  const handleImageClick = () => {
    imageRef.current?.click()
  }

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0])
  }

  return (
    <div className="p-4 md:my-[60px]">
      <h2 className="text-2xl mb-7 font-bold">Let's set up your account</h2>
      <div className="image flex gap-6 my-6 items-center justify-center">
        {image ? (
          <img
            className="h-20 w-20 rounded-md"
            src={URL.createObjectURL(image)}
            onClick={handleImageClick}
            alt=""
          />
        ) : (
          <img
            src="/assets/upload-img-avatar.png"
            alt=""
            className="h-20 w-20 rounded-md"
            onClick={handleImageClick}
          />
        )}

        <input type="file" hidden onChange={handleImageChange} ref={imageRef} />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={
                    form.formState.errors?.firstName ? 'text-black' : ''
                  }
                >
                  First Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter first name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={
                    form.formState.errors?.lastName ? 'text-black' : ''
                  }
                >
                  Last Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter last name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.dob ? 'text-black' : ''}
                >
                  Date of birth <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="date"
                    placeholder="Choose DOB"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.address ? 'text-black' : ''}
                >
                  Address <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.state ? 'text-black' : ''}
                >
                  State <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter state"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.zipCode ? 'text-black' : ''}
                >
                  Zip Code <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter zip code"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.country ? 'text-black' : ''}
                >
                  Country <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <select
                    id="country"
                    {...field}
                    className="block rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option selected disabled value="">
                      Select country
                    </option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cellNumber"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={
                    form.formState.errors?.cellNumber ? 'text-black' : ''
                  }
                >
                  Cell Number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter cell number"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.gender ? 'text-black' : ''}
                >
                  Gender <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <select
                    id="gender"
                    {...field}
                    className="block rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option disabled selected value="">
                      Select gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={
                    form.formState.errors?.language ? 'text-black' : ''
                  }
                >
                  Preferred Language <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="block rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option selected disabled value="">
                      Select Language
                    </option>
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Urdu">Urdu</option>
                  </select>
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.about ? 'text-black' : ''}
                >
                  How did you hear about us?
                  <span className="text-red-500"> *</span>
                </FormLabel>
                <FormControl>
                  <select
                    {...field}
                    id="about"
                    className="block rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option selected disabled value="">
                      Select option
                    </option>
                    <option value="From LinkedIn">From LinkedIn</option>
                    <option value="From Facebook">From Facebook</option>
                    <option value="From Website">From Website</option>
                    <option value="From Friends">From Friends</option>
                    <option value="Others">Others</option>
                  </select>
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />

          {/* <div className="flex items-center my-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              checked={haveCode}
              onChange={() => setHaveCode(!haveCode)}
              className="w-4 h-4 border-gray-300 rounded focus:ring-2 bg-primary"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I have code from DermOnDemand
            </label>
          </div>

          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.code ? 'text-black' : ''}
                >
                  DermOnDemand Health Code
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter code"
                    {...field}
                    disabled={!haveCode}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          /> */}

          <p className="my-5 text-sm">
            By continuing, you agree to DermOnDemand's
            <span className="text-primary font-bold mx-1">
              "Terms of Services"
            </span>
            and you have read our
            <span className="text-primary font-bold mx-1">
              "Consent Policy"
            </span>
          </p>

          <div className="my-10 w-full">
            <Button
              type="submit"
              className="w-full flex justify-center items-center hover:bg-[#3c8790]"
            >
              Complete Registration
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SignUpPage
