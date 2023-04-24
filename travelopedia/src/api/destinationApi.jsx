import { createApi, fetchBaseQuery } from "@redux/toolkit/query/react";

export const destinationApi = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    getAllDestination: builder.query({
      query: () => "destination",
    }),
  }),
});

export const { useGetAllDestinationQuery } = destinationApi;
