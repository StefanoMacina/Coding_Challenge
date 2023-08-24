import React, { useState } from "react";
import {
  useGetAllProductsQuery,
  useAddProductMutation,
} from "./store/features/productSlice";

const App = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetAllProductsQuery("asc", {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
    });

  const [addProduct] = useAddProductMutation();

  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddProduct = () => {
    if (title != "") {
      addProduct(title);
    }
  };

  if (isLoading || isFetching) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <button onClick={refetch}>REFRESH</button>
      <button onClick={handleAddProduct}>ADD</button>
      <input type="text" value={title} onChange={handleTitle} />
      <ul>
        {data?.products &&
          isSuccess &&
          !isLoading &&
          !isFetching &&
          data.products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
      </ul>
    </>
  );
};

export default App;
