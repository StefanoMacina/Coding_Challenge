import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptyApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: () => ({}),
  tagTypes: [],
});
