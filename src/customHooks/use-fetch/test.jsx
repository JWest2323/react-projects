import useFetch from "./useFetch";

const UseFetchHookTest = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {error ? <h3>{error}</h3> : null}

      {pending ? <h3>Data Pending! Please wait</h3> : null}

      {data &&
        data.products.length &&
        data.products.map((productItem) => {
          return <p key={productItem.key}>{productItem.title}</p>;
        })}
    </div>
  );
};

export default UseFetchHookTest;
