"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { FaAmazon, FaPaypal, FaCreditCard } from "react-icons/fa6";
import { BiMoney } from "react-icons/bi";
import Image from "next/image";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    expireDate: "",
    cvv: ""
  });

  const [errors, setErrors] = useState({});

  const subTotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  const tax = subTotal * 0.1;
  const discount = subTotal > 50 ? 56.5 : 0;
  const delivery = 0;
  const total = subTotal + tax + delivery - discount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.country || formData.country === "Select...") newErrors.country = "Country is required";
    if (!formData.state || formData.state === "Select...") newErrors.state = "State is required";
    if (!formData.city || formData.city === "Select...") newErrors.city = "City is required";
    if (!formData.zip || formData.zip === "Select...") newErrors.zip = "ZIP Code is required";
    
    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (paymentMethod === "card") {
        if (!formData.cardName.trim()) newErrors.cardName = "Card holder name required";
        if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number required";
        if (!formData.expireDate.trim()) newErrors.expireDate = "Expiry date required";
        if (!formData.cvv.trim()) newErrors.cvv = "CVV required";
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        isValid = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return isValid;
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Your Cart is Empty</h2>
        <Link href="/dishes" className="bg-[#f58220] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e0751a] transition text-sm md:text-base">
          Go back to Shop
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    if (validateForm()) {
        console.log("Order Data:", formData);
        clearCart();
        router.push("/orderSuccess");
    } else {
        alert("Please fill in all required fields.");
    }
  };

  const getInputClass = (fieldName) => {
    return `w-full border rounded px-4 py-2.5 text-sm focus:outline-none ${errors[fieldName] ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#f58220]"}`;
  };

  return (
    <div className="py-8 md:py-16 bg-[#f8f9fa] min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Billing Info */}
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">Billing Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">First name <span className="text-red-500">*</span></label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className={getInputClass("firstName")} />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Last Name <span className="text-red-500">*</span></label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className={getInputClass("lastName")} />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-600 mb-1">Address <span className="text-red-500">*</span></label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter Your Address" className={getInputClass("address")} />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                 <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Country <span className="text-red-500">*</span></label>
                    <select name="country" value={formData.country} onChange={handleInputChange} className={`${getInputClass("country")} bg-white text-gray-500 cursor-pointer`}>
                        <option value="">Select...</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="USA">USA</option>
                    </select>
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                 </div>
                 {/* ... other dropdowns ... */}
                 <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">State/Province <span className="text-red-500">*</span></label>
                    <select name="state" value={formData.state} onChange={handleInputChange} className={`${getInputClass("state")} bg-white text-gray-500 cursor-pointer`}>
                        <option value="">Select...</option>
                        <option value="Dhaka">Dhaka</option>               
                    </select>
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                 </div>
              </div>
              
              {/* City & Zip (Mobile Responsive Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                 <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">City <span className="text-red-500">*</span></label>
                    <select name="city" value={formData.city} onChange={handleInputChange} className={`${getInputClass("city")} bg-white text-gray-500 cursor-pointer`}>
                        <option value="">Select...</option>
                        <option value="Badda">Badda</option>
                    </select>
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">ZIP/Postal Code <span className="text-red-500">*</span></label>
                    <select name="zip" value={formData.zip} onChange={handleInputChange} className={`${getInputClass("zip")} bg-white text-gray-500 cursor-pointer`}>
                        <option value="">Select...</option>
                        <option value="1212">1212</option>
                    </select>
                    {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Email <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="example@example.com" className={getInputClass("email")} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Phone Number <span className="text-red-500">*</span></label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 123-XXX-7890" className={getInputClass("phone")} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* 2. Payment Option */}
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">Payment Option</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                 {/* Payment Methods (Responsive Grid) */}
                 {[
                    { id: "cod", label: "Cash on Delivery", icon: BiMoney, color: "text-orange-600" },
                    { id: "paypal", label: "Paypal", icon: FaPaypal, color: "text-blue-600" },
                    { id: "amazon", label: "Amazon Pay", icon: FaAmazon, color: "text-gray-800" },
                    { id: "card", label: "Card", icon: FaCreditCard, color: "text-[#f58220]" }
                 ].map((method) => (
                    <div 
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`cursor-pointer border rounded-lg p-3 md:p-4 flex flex-col items-center gap-3 transition-all ${paymentMethod === method.id ? "border-[#f58220] bg-orange-50" : "border-gray-200 hover:border-[#f58220]"}`}
                    >
                        <method.icon className={`w-6 h-6 ${method.color}`}/>
                        <span className="text-[10px] md:text-xs font-semibold text-center text-gray-700">{method.label}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === method.id ? "border-[#f58220]" : "border-gray-300"}`}>
                            {paymentMethod === method.id && <div className="w-2 h-2 rounded-full bg-[#f58220]"></div>}
                        </div>
                    </div>
                 ))}
              </div>

              {/* Card Details Form */}
              {paymentMethod === "card" && (
                <div className="pt-4 border-t border-gray-100 animate-fadeIn">
                    <div className="mb-4">
                        <label className="block text-xs font-bold text-gray-600 mb-1">Name on Card <span className="text-red-500">*</span></label>
                        <input type="text" name="cardName" value={formData.cardName} onChange={handleInputChange} placeholder="Enter card holder name" className={getInputClass("cardName")} />
                         {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-xs font-bold text-gray-600 mb-1">Card Number <span className="text-red-500">*</span></label>
                        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="Enter card number" className={getInputClass("cardNumber")} />
                         {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-gray-600 mb-1">Expire Date <span className="text-red-500">*</span></label>
                            <input type="text" name="expireDate" value={formData.expireDate} onChange={handleInputChange} placeholder="MM/YY" className={getInputClass("expireDate")} />
                            {errors.expireDate && <p className="text-red-500 text-xs mt-1">{errors.expireDate}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-600 mb-1">CVV <span className="text-red-500">*</span></label>
                            <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="CVV" className={getInputClass("cvv")} />
                            {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                        </div>
                    </div>
                </div>
              )}
            </div>

            {/* 3. Additional Info */}
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
               <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Additional Information</h3>
               <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Message (optional)</label>
                  <textarea rows="4" placeholder="Notes about your order..." className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#f58220]"></textarea>
               </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: SUMMARY ================= */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-200 sticky top-24">
               <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">Order Summary</h3>
               
               <div className="space-y-4 mb-6 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                          <div className="h-12 w-12 shrink-0 bg-gray-100 rounded overflow-hidden relative border border-gray-200">
                              <Image src={item.image} alt={item.title} fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{item.title}</h4>
                              <p className="text-xs text-gray-500 cursor-pointer">{item.quantity} x <span className="font-semibold text-[#f58220]">${item.price}</span></p>
                          </div>
                      </div>
                  ))}
               </div>

               <div className="space-y-3 text-sm text-gray-600 border-t border-gray-100 pt-4">
                    <div className="flex justify-between"><span>Sub-total</span><span className="font-semibold text-gray-800">${subTotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Shipping</span><span className="font-semibold text-gray-800">Free</span></div>
                    <div className="flex justify-between"><span>Discount</span><span className="font-semibold text-gray-800">-${discount.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Tax</span><span className="font-semibold text-gray-800">+${tax.toFixed(2)}</span></div>
               </div>

               <div className="flex justify-between items-center border-t border-gray-100 mt-4 pt-4 mb-6">
                    <span className="text-base font-bold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-gray-800">${total.toFixed(2)}</span>
               </div>

               <button onClick={handlePlaceOrder} className="w-full bg-[#f58220] text-white py-3 rounded-lg font-semibold hover:bg-[#e0751a] transition shadow-md cursor-pointer text-sm md:text-base">
                   Place Order
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;