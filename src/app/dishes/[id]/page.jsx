"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaHeart, FaStar, FaEye, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

// =========================================================
const DB_DATA = {
  "menus": [
    {
      "id": 1, "name": "Coffee", "items": [
        { "id": 101, "title": "Espresso Coffee", "description": "Rich and bold espresso shot...", "price": 40.14, "oldPrice": 45.0, "rating": 4.5, "reviews": 120, "image": "https://themes.coderthemes.com/yum_r/assets/coffee-1-22yhRgGq.png" },
        { "id": 102, "title": "Iced Cold Coffee", "description": "Refreshing chilled coffee...", "price": 49.75, "oldPrice": 55.5, "rating": 4.8, "reviews": 340, "image": "https://themes.coderthemes.com/yum_r/assets/coffee-2-QzMv3ePL.png" }
      ]
    },
    {
      "id": 2, "name": "Burger", "items": [
        { "id": 201, "title": "Classic Beef Burger", "description": "Juicy grilled beef patty...", "price": 29.99, "oldPrice": 35.0, "rating": 4.7, "reviews": 512, "image": "https://themes.coderthemes.com/yum_r/assets/burger-1-l98IpFtt.png" }
      ]
    }
    // ... অন্যান্য মেনু আইটেম থাকলে এখানে থাকবে ...
  ],
  "products": [
    { "id": 1, "title": "Italian Pizza", "image": "https://themes.coderthemes.com/yum_r/assets/pizza-04FDaPt1.png", "restaurant": "Gourmet Flavor Nook", "description": "Lorem ipsum dolor sit amet...", "price": 39.5, "oldPrice": 79, "rating": 4.5, "ratingCount": 252, "tag": ["Pizza", "Italian Food"] },
    { "id": 2, "title": "Veg Burger", "image": "https://themes.coderthemes.com/yum_r/assets/burger-fLOaQ2L6.png", "restaurant": "Healthy Feast Corner", "description": "Lorem ipsum dolor sit amet...", "price": 4.83, "oldPrice": 4.08, "rating": 4.2, "ratingCount": 162, "tag": ["Burger"] },
    { "id": 3, "title": "Spaghetti", "image": "https://themes.coderthemes.com/yum_r/assets/noodles-XrREaCsh.png", "restaurant": "Country Cooking Cove", "description": "Lorem ipsum dolor sit amet...", "price": 23, "oldPrice": 30, "rating": 4.4, "ratingCount": 687, "tag": ["Italian Food", "Noodles"] },
    { "id": 4, "title": "Red Velvet Cake", "image": "https://themes.coderthemes.com/yum_r/assets/red-velvet-pastry-ctHIanss.png", "restaurant": "Kitchen Creation", "description": "Lorem ipsum dolor sit amet...", "price": 33.8, "oldPrice": 35.9, "rating": 4.7, "ratingCount": 431, "tag": ["Cake", "Desserts"] },
    { "id": 5, "title": "Mix Salad", "image": "https://themes.coderthemes.com/yum_r/assets/spaghetti-EiEHNri1.png", "restaurant": "Healthy Feast Corner", "description": "Lorem ipsum dolor sit amet...", "price": 6.45, "oldPrice": 10, "rating": 4.8, "ratingCount": 625, "tag": ["Healthy", "Salad"] },
    { "id": 6, "title": "Espresso Coffee", "image": "https://themes.coderthemes.com/yum_r/assets/hot-chocolate-z77eODkd.png", "restaurant": "Savory Bites Cafe", "description": "Lorem ipsum dolor sit amet...", "price": 2.85, "oldPrice": 4.08, "rating": 4.4, "ratingCount": 245, "tag": ["Coffee & Tea"] },
    { "id": 7, "title": "Momos", "image": "https://themes.coderthemes.com/yum_r/assets/steamed-dumpling-NAMQbuSN.png", "restaurant": "Savory Bites Cafe", "description": "Lorem ipsum dolor sit amet...", "price": 2.85, "oldPrice": 4.08, "rating": 4.4, "ratingCount": 245, "tag": ["Coffee & Tea"] },
    { "id": 8, "title": "Italian Food", "image": "https://themes.coderthemes.com/yum_r/assets/veg-rice--54Pbrw8.png", "restaurant": "Savory Bites Cafe", "description": "Lorem ipsum dolor sit amet...", "price": 2.85, "oldPrice": 4.08, "rating": 4.4, "ratingCount": 245, "tag": ["Coffee & Tea"] },
    { "id": 9, "title": "Espresso Coffee", "image": "https://themes.coderthemes.com/yum_r/assets/chickpea-hummus-EhVy1T_R.png", "restaurant": "Savory Bites Cafe", "description": "Lorem ipsum dolor sit amet...", "price": 2.85, "oldPrice": 4.08, "rating": 4.4, "ratingCount": 245, "tag": ["Coffee & Tea"] },
    { "id": 10, "title": "Espresso Coffee", "image": "https://themes.coderthemes.com/yum_r/assets/hot-chocolate-z77eODkd.png", "restaurant": "Savory Bites Cafe", "description": "Lorem ipsum dolor sit amet...", "price": 2.85, "oldPrice": 4.08, "rating": 4.4, "ratingCount": 245, "tag": ["Coffee & Tea"] }
  ]
};

const ProductDetailsPage = () => {
  const params = useParams();
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("L");

  // --- ডাটা খোঁজার লজিক ---
  useEffect(() => {
    // ১. URL এর ID টি সংখ্যায় রূপান্তর করা
    const targetId = Number(params.id);
    
    console.log("Searching for ID:", targetId); // কনসোলে দেখুন

    // ২. প্রথমে products অ্যারেতে খোঁজা (ID: 1-10)
    let foundProduct = DB_DATA.products.find((p) => p.id === targetId);

    // ৩. যদি products এ না পাওয়া যায়, তবে menus এর ভেতর items এ খোঁজা (ID: 101+)
    if (!foundProduct) {
      DB_DATA.menus.forEach((category) => {
        const item = category.items?.find((i) => i.id === targetId);
        if (item) {
          foundProduct = item;
        }
      });
    }

    // ৪. প্রোডাক্ট সেট করা
    setProduct(foundProduct);
    setLoading(false); // লোডিং বন্ধ
  }, [params.id]);

  // --- Loading View ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f58220]"></div>
      </div>
    );
  }

  // --- Not Found View ---
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500 gap-2">
        <h2 className="text-3xl font-bold text-[#f58220]">Oops!</h2>
        <p className="text-xl font-semibold">Product Not Found</p>
        <p className="text-sm">Could not find any item with ID: {params.id}</p>
      </div>
    );
  }

  // --- Cart & Wishlist Logic ---
  const cartItem = cart.find((item) => item.id === product.id);
  const isWishlisted = isInWishlist(product.id);

  // ডিফল্ট ডেসক্রিপশন এবং রেস্টুরেন্ট
  const description = product.description || "A delicious meal prepared with fresh ingredients.";
  const restaurantName = product.restaurant || "Yum Restaurant";
  const reviewCount = product.reviews || product.ratingCount || 0;

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ============ LEFT SIDE: IMAGE ============ */}
          <div className="flex flex-col items-center animate-fadeIn">
             <div className="relative w-full max-w-[500px] h-[400px] lg:h-[500px] bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-gray-100 shadow-sm">
                <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    priority
                />
             </div>
          </div>

          {/* ============ RIGHT SIDE: DETAILS ============ */}
          <div className="animate-slideUp">
            {/* Title & Restaurant */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#1e293b] mb-2">
                {product.title}
            </h1>
            <p className="text-gray-500 mb-4 font-medium">
                by <span className="text-[#f58220] cursor-pointer hover:underline">{restaurantName}</span>
            </p>

            {/* Ratings */}
            <div className="flex items-center gap-2 mb-6">
                 <div className="flex text-yellow-400 text-sm">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300"/>
                 </div>
                 <span className="text-gray-500 text-sm font-medium">| {reviewCount} Reviews</span>
            </div>

            {/* Description */}
            <p className="text-[#475569] mb-6 leading-relaxed text-base">
                {description}
            </p>

            {/* Tags (Optional Rendering) */}
            <div className="flex flex-wrap gap-3 mb-8">
                 <span className="inline-flex items-center gap-1 px-3 py-1 border border-red-200 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span> {product.tag ? "Special" : "Hot & Spicy"}
                 </span>
                 {product.tag ? product.tag.map((tag, i) => (
                     <span key={i} className="px-3 py-1 border border-gray-200 text-gray-600 text-xs font-medium rounded-full bg-white">
                        {tag}
                     </span>
                 )) : (
                    <span className="px-3 py-1 border border-gray-200 text-gray-600 text-xs font-medium rounded-full bg-white">
                        Fast Food
                    </span>
                 )}
            </div>

            {/* Size Selector */}
            <div className="mb-8">
                <span className="text-[#1e293b] font-bold mr-4">Size :</span>
                <div className="inline-flex gap-3">
                    {['S', 'M', 'L'].map((size) => (
                        <button 
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all cursor-pointer shadow-sm
                            ${selectedSize === size ? "bg-[#f58220] text-white ring-2 ring-[#f58220] ring-offset-2" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price & Action Buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-gray-100 pb-8">
                 {/* Price */}
                 <div className="flex items-end gap-3">
                    <span className="text-4xl font-bold text-[#f58220]">${product.price}</span>
                    {product.oldPrice && <span className="text-xl text-gray-400 line-through mb-1 font-medium">${product.oldPrice}</span>}
                 </div>

                 <div className="flex items-center gap-4">
                    {/* Cart Logic */}
                    {!cartItem ? (
                         <button 
                            onClick={() => addToCart(product)}
                            className="bg-[#f58220] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#e0751a] transition shadow-lg hover:shadow-orange-200 flex items-center gap-2 cursor-pointer transform active:scale-95 duration-200"
                         >
                            <PiShoppingCartLight className="text-2xl"/> Add to Cart
                         </button>
                    ) : (
                        <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm">
                            <button onClick={() => decreaseQty(product.id)} className="h-10 w-10 flex items-center justify-center rounded-md bg-red-50 text-red-500 hover:bg-red-100 transition cursor-pointer">
                                {cartItem.quantity === 1 ? <FaTrash /> : <FaMinus />}
                            </button>
                            <span className="w-12 text-center font-bold text-gray-800 text-lg">{cartItem.quantity}</span>
                            <button onClick={() => addToCart(product)} className="h-10 w-10 flex items-center justify-center rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition cursor-pointer">
                                <FaPlus />
                            </button>
                        </div>
                    )}

                    {/* Wishlist Button */}
                    <button 
                        onClick={() => toggleWishlist(product)}
                        className={`p-3.5 border rounded-lg transition group cursor-pointer shadow-sm active:scale-90 duration-200 ${isWishlisted ? 'border-red-200 bg-red-50' : 'border-gray-200 hover:border-[#f58220] bg-white'}`}
                        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                        {isWishlisted ? (
                             <FaHeart className="text-xl text-red-500" />
                        ) : (
                             <GoHeart className="text-xl text-gray-400 group-hover:text-red-500" />
                        )}
                    </button>
                 </div>
            </div>

            {/* Nutrition & Views Info */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-[#1e293b] mb-4">Nutrition Facts <span className="text-sm font-normal text-gray-500">(per serving)</span></h3>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                    <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
                        <div className="p-4"><span className="block font-extrabold text-[#1e293b]">564</span><span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Calories</span></div>
                        <div className="p-4"><span className="block font-extrabold text-[#1e293b]">306mg</span><span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Fat</span></div>
                        <div className="p-4"><span className="block font-extrabold text-[#1e293b]">2gm</span><span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Carbs</span></div>
                        <div className="p-4"><span className="block font-extrabold text-[#1e293b]">6.5gm</span><span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Protein</span></div>
                    </div>
                </div>
            </div>

            {/* Views Counter */}
            <div className="flex items-center gap-2 text-[#f58220] text-sm font-medium bg-orange-50 w-fit px-4 py-2 rounded-full">
                <FaEye />
                <span>152 People are viewing this right now</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;