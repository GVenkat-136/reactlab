import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newApi = createApi({
   reducerPath:'newApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
   endpoints: (builder) =>({
      getTodos : builder.query({
         query:()=>`todos`
      }),
      getById:builder.query({
         query:(id)=>`todos/${id}`
      })
   })
});

export const { useGetTodosQuery,useGetByIdQuery } = newApi
