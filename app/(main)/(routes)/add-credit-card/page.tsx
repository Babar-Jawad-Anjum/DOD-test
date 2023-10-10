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
  cardNumber: z.string().min(1, { message: 'Card Number is required' }),
  expirationDate: z.string().min(1, { message: 'This is required.' }),
  cvvORcvc: z.string().min(1, { message: 'This is required.' }),
})

const AddCreditCard = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const isLoading = useSelector(getLoadingState)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: '',
      expirationDate: '',
      cvvORcvc: '',
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
    router.push('/visit/step-14')
  }

  return (
    <div className="p-4 md:my-[60px]">
      <h2 className="text-2xl font-bold text-center mb-8">Add Credit Card</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem className="my-3">
                <FormLabel
                  className={
                    form.formState.errors?.cardNumber ? 'text-black' : ''
                  }
                >
                  Card Number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="-mt-2"
                    type="text"
                    placeholder="Enter card number"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs ml-2" />
              </FormItem>
            )}
          />
          <div className="grid lg:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="expirationDate"
              render={({ field }) => (
                <FormItem className="my-3">
                  <FormLabel
                    className={
                      form.formState.errors?.expirationDate ? 'text-black' : ''
                    }
                  >
                    Expiration Date <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="-mt-2"
                      type="text"
                      placeholder="MM/YY"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvvORcvc"
              render={({ field }) => (
                <FormItem className="my-3">
                  <FormLabel
                    className={
                      form.formState.errors?.cvvORcvc ? 'text-black' : ''
                    }
                  >
                    CVV/CVC <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="-mt-2" type="text" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs ml-2" />
                </FormItem>
              )}
            />
          </div>
          <div className="my-10 flex justify-center">
            <Button
              type="submit"
              className="w-1/2 flex justify-center items-center hover:bg-[#3c8790]"
            >
              Add Credit Card
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AddCreditCard
