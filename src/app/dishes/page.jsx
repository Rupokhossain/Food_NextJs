import DishesClient from "@/components/Dishes/DishesClient";

const page = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // fetch filters
  const res = await fetch(`${BASE_URL}/filters`, { cache: "no-store" });
  const filtersData = await res.json();

  // fetch products
  const res2 = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const products = await res2.json();

  return (
    <div>
      <DishesClient filtersData={filtersData} products={products}></DishesClient>
    </div>
  )
}

export default page;
