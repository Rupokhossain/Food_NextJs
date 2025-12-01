import DishesClient from '@/components/Dishes/DishesClient';


const page = async() => {
        // fetch filters
  const res = await fetch("http://localhost:5000/filters",  { cache: "no-store" });
  const filtersData  = await res.json();
  console.log(filtersData );

  // fetch products
  const res2 = await fetch("http://localhost:5000/products",  { cache: "no-store" });
  const products = await res2.json();


  return (
    <div>
        <DishesClient filtersData ={filtersData} products={products}></DishesClient>
    </div>
  )
}

export default page