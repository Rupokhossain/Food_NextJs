import React from 'react';
import Hero from './home/Hero';
import About from './home/About';
import FilterMenu from './home/FilterMenu';
import Testimonial from './home/Testimonial';
import OfferBanner from './home/OfferBanner';
import Download from './home/Download';

const page = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // fetch menus
  const res = await fetch(`${BASE_URL}/menus`, { cache: "no-store" });
  const menus = await res.json();

  // fetch top categories
  const res2 = await fetch(`${BASE_URL}/sideCategories`, { cache: "no-store" });
  const categorys = await res2.json();

  return (
    <div>
      <Hero></Hero>
      <About></About>
      <FilterMenu menus={menus} categorys={categorys}></FilterMenu>
      <Testimonial></Testimonial>
      <OfferBanner></OfferBanner>
      <Download></Download>
    </div>
  )
}

export default page;
