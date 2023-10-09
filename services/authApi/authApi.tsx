// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    //Register User EndPoint
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: 'auth/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    //Register User-account info EndPoint
    registerUserInfo: builder.mutation({
      query: ({ userId, credentials }) => ({
        url: `auth/update/${userId}`,
        method: 'POST',
        body: credentials,
      }),
    }),
    //Login User EndPoint
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useRegisterUserInfoMutation,
} = authApi
