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
  pharmacyName: z.string().min(1, { message: 'Pharmacy Name is required' }),
  address: z.string().min(1, { message: 'Address is required.' }),
  state: z.string().min(1, { message: 'State is required.' }),
  zipCode: z.string().min(1, { message: 'ZipCode is required.' }),
  phoneNumber: z.string().min(1, { message: 'Phone Number is required.' }),
})

const AddPharmacy = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const isLoading = useSelector(getLoadingState)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pharmacyName: '',
      address: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
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
    router.push('/visit/step-13')
  }

  return (
    <div className="p-4 md:my-[60px]">
      <h2 className="text-2xl font-bold text-center mb-8">
        Add Pharmacy Manually
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="pharmacyName"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={
                    form.formState.errors?.pharmacyName ? 'text-black' : ''
                  }
                >
                  Pharmacy Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter pharmacy name"
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
                    placeholder="Enter address"
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
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={
                    form.formState.errors?.phoneNumber ? 'text-black' : ''
                  }
                >
                  Phone Number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter phone number"
                    {...field}
                  />
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
              Add Pharmacy
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AddPharmacy
