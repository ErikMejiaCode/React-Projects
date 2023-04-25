import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    //QUERY -> GET
    getAllDestination: builder.query({
      query: () => "destination",
      //Tag to re-envoke the query
      providesTags: ["Destinations"],
    }),
    // getAllDestination: builder.query({
    //   query: (id) => `destination/${id}`,
    //   providesTags: (id) => {
    //     return [{ type: "Destinations", id: id }];
    //   },
    // }),

    //MUTATION -> POST/PUT/DELETE
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destinations"],
    }),
  }),
});

export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationApi;
