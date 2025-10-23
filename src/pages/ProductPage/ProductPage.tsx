import useProduct from "./useProduct";


export default function ProductPage() {
    const {product} = useProduct();
  return (
    <div>
      ProductPage
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  );
}
