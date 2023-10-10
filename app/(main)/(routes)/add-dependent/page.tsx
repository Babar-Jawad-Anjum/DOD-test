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
import { getLoadingState } from '@/lib/redux/slices/loaderSlice'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

const formSchema = z.object({
  relation: z.string().min(1, { message: 'Relation is required' }),
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  dob: z.string().min(1, { message: 'DOB is required.' }),
  gender: z.string().min(1, { message: 'Gender is required.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Valid email is required.'),
  cellNumber: z.string().min(1, { message: 'Cell Number is required.' }),
  language: z.string().min(1, { message: 'Language is required.' }),
})

const AddDependent = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const isLoading = useSelector(getLoadingState)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      relation: '',
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      email: '',
      cellNumber: '',
      language: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // try {
    //   dispatch(enableLoading())
    //   const result = await registerUser(data)
    //   if (result.error) {
    //     ErrorToast(result.error.data.message)
    //   } else {
    //     SuccessToast(result.data.message)
    //     router.push('/signup/account')
    //   }
    // } catch (error) {
    //   console.error('An error occurred:', error)
    // } finally {
    //   dispatch(disableLoading())
    // }
    console.log(values)
    router.push('/visit/step-1')
  }

  return (
    <div className="p-4 md:my-[60px]">
      <h2 className="text-2xl font-bold text-center">Add Dependent</h2>
      <p className="text-sm text-center my-5 mb-7">
        A family member 18 years old or younger will be listed under your
        account, if over 18 years old they will be invited to DermOnDemand .
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="relation"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={
                    form.formState.errors?.relation ? 'text-black' : ''
                  }
                >
                  Relationship <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="block rounded-lg w-full border border-input bg-background px-4 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option selected disabled value="">
                      Select relation
                    </option>
                    <option value="Spouse">Spouse</option>
                    <option value="Children">Children</option>
                  </select>
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
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
            name="email"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={form.formState.errors?.email ? 'text-black' : ''}
                >
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="-mt-2"
                    placeholder="Enter email"
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

          <div className="my-10 flex justify-center">
            <Button
              type="submit"
              className="w-1/2 flex justify-center items-center hover:bg-[#3c8790]"
            >
              Add Depedent
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AddDependent
