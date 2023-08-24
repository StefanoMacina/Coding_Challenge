import { emptyApiSlice } from "./emptyApiSlice";

const productSlice = emptyApiSlice
  .enhanceEndpoints({
    addTagTypes: ["Products"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAllProducts: build.query({
        query: (orderBy = "desc") => "/products",
        transformResponse: (value, meta, orderBy) => {
          if (orderBy == "desc") {
            value.products = value.products.sort((a, b) =>
              a.title.localeCompare(b.title)
            );
          } else {
            value.products = value.products.sort((a, b) =>
              b.title.localeCompare(a.title)
            );
          }
          return value;
        },
        providesTags: ["Products"],
      }),
      addProduct: build.mutation({
        query: (title) => ({
          url: "/products/add",
          method: "POST",
          body: {
            title,
          },
        }),
        invalidatesTags: ["Products"],
      }),
    }),
  });

export const { useGetAllProductsQuery, useAddProductMutation } = productSlice;
