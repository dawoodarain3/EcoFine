"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Blue images
import bluemain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue/Main.png"

// Pink images
import pinkmain from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Pink/01.png"
import pink1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Pink/02.png"

// Purple images
import purplemain from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Purple/Main.png"
import purple1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Purple/01.png"
import purple2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Purple/02.png"
import purple3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Purple/03.png"
import purple4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Purple/04.png"

// White images
import Whitemain from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/White/Main.png"
import white1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/White/01.png"
import white2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/White/02.png"
import white3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/White/03.png"
import white4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/White/04.png"

// Orange images
import orangemain from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Orange/Main.png"
import orange1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Orange/01.png"
import orange2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Orange/02.png"
import orange3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Orange/03.png"
import orange4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Orange/04.png"

// Black images
import blackmain from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black/Main.png" 
import black1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black/01.png"
import black2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black/02.png"
import black3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black/03.png"
import black4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black/04.png"

// Brown images
import brownmain from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Brown/main.png"
import brown1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Brown/01.png"
import brown2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Brown/02.png"
import brown3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Brown/03.png"
import brown4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Brown/04.png"

// Blue Green Yellow Red pack images
import bgyrmain from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Green Yellow Red/Main.png"
import bgyr1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Green Yellow Red/01.png"
import bgyr2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Green Yellow Red/02.png"
import bgyr3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Green Yellow Red/03.png"
import bgyr4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Green Yellow Red/04.png"

// Black Gray pack images
import blackgraymain from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black Gray/Main.png"
import blackgray1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black Gray/01.png"
import blackgray2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black Gray/02.png"
import blackgray3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black Gray/03.png"
import blackgray4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Black Gray/04.png"

// Blue Black Gray pack images
import bbgmain from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Black Gray/Main.png"
import bbg1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Black Gray/01.png"
import bbg2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Black Gray/02.png"
import bbg3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Black Gray/03.png"
import bbg4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber 12X12 320GSM- 12packs/Blue Black Gray/04.png"

export default function MicrofiberCloth12x12Page() {
 const [quantity, setQuantity] = useState(1)
 const [selectedColor, setSelectedColor] = useState("Purple")
 const [selectedImage, setSelectedImage] = useState(purplemain)
 const [selectedImageIndex, setSelectedImageIndex] = useState(0)

 const colors = [
   "Blue",
   "Green", 
   "Yellow",
   "Red",
   "Purple",
   "Pink",
   "Orange",
   "Black",
   "White",
   "Gray",
   "Brown"
 ]

 const availableColors = ["Purple", "Pink", "Orange", "Black", "White", "Brown"]

 const colorPacks = [
   "Blue/Green/Yellow/Red Pack",
   "Black/Grey Pack", 
   "Blue/Black/Gray Pack"
 ]

 // Map colors to their main images and thumbnail arrays
 const colorImageData = {
   Purple: {
     main: purplemain,
     thumbnails: [purple1, purple2, purple3, purple4]
   },
   Pink: {
     main: pinkmain,
     thumbnails: [pink1]
   },
   Orange: {
     main: orangemain,
     thumbnails: [orange1, orange2, orange3, orange4]
   },
   Black: {
     main: blackmain,
     thumbnails: [black1, black2, black3, black4]
   },
   White: {
     main: Whitemain,
     thumbnails: [white1, white2, white3, white4]
   },
   Brown: {
     main: brownmain,
     thumbnails: [brown1, brown2, brown3, brown4]
   },
   Blue: {
     main: "/placeholder.svg?height=600&width=600&text=Blue+12x12",
     thumbnails: [
       "/placeholder.svg?height=600&width=600&text=Blue+View+1",
       "/placeholder.svg?height=600&width=600&text=Blue+View+2"
     ]
   },
   Green: {
     main: "/placeholder.svg?height=600&width=600&text=Green+12x12",
     thumbnails: [
       "/placeholder.svg?height=600&width=600&text=Green+View+1",
       "/placeholder.svg?height=600&width=600&text=Green+View+2"
     ]
   },
   Yellow: {
     main: "/placeholder.svg?height=600&width=600&text=Yellow+12x12",
     thumbnails: [
       "/placeholder.svg?height=600&width=600&text=Yellow+View+1",
       "/placeholder.svg?height=600&width=600&text=Yellow+View+2"
     ]
   },
   Red: {
     main: "/placeholder.svg?height=600&width=600&text=Red+12x12",
     thumbnails: [
       "/placeholder.svg?height=600&width=600&text=Red+View+1",
       "/placeholder.svg?height=600&width=600&text=Red+View+2"
     ]
   },
   Gray: {
     main: "/placeholder.svg?height=600&width=600&text=Gray+12x12",
     thumbnails: [
       "/placeholder.svg?height=600&width=600&text=Gray+View+1",
       "/placeholder.svg?height=600&width=600&text=Gray+View+2"
     ]
   }
 }

 const colorPackImageData = {
   "Blue/Green/Yellow/Red Pack": {
     main: bgyrmain,
     thumbnails: [bgyr1, bgyr2, bgyr3, bgyr4]
   },
   "Black/Grey Pack": {
     main: blackgraymain,
     thumbnails: [blackgray1, blackgray2, blackgray3, blackgray4]
   },
   "Blue/Black/Gray Pack": {
     main: bbgmain,
     thumbnails: [bbg1, bbg2, bbg3, bbg4]
   }
 }

 const handleColorChange = (color) => {
   if (availableColors.includes(color)) {
     setSelectedColor(color)
     setSelectedImage(colorImageData[color]?.main || purplemain)
     setSelectedImageIndex(0) // Reset to main image when color changes
   }
 }

 const handleColorPackChange = (pack) => {
   setSelectedColor(pack)
   setSelectedImage(colorPackImageData[pack]?.main || bgyrmain)
   setSelectedImageIndex(0) // Reset to main image when pack changes
 }

 const handleThumbnailClick = (index) => {
   if (colorPacks.includes(selectedColor)) {
     // Handle color pack thumbnails
     const currentPackData = colorPackImageData[selectedColor]
     if (currentPackData) {
       if (index === 0) {
         setSelectedImage(currentPackData.main)
       } else {
         setSelectedImage(currentPackData.thumbnails[index - 1])
       }
       setSelectedImageIndex(index)
     }
   } else {
     // Handle individual color thumbnails
     const currentColorData = colorImageData[selectedColor]
     if (currentColorData) {
       if (index === 0) {
         setSelectedImage(currentColorData.main)
       } else {
         setSelectedImage(currentColorData.thumbnails[index - 1])
       }
       setSelectedImageIndex(index)
     }
   }
 }

 const decreaseQuantity = () => {
   if (quantity > 1) {
     setQuantity(quantity - 1)
   }
 }

 const increaseQuantity = () => {
   setQuantity(quantity + 1)
 }

 const getCurrentThumbnails = () => {
   if (colorPacks.includes(selectedColor)) {
     const currentPackData = colorPackImageData[selectedColor]
     if (currentPackData) {
       return [currentPackData.main, ...currentPackData.thumbnails]
     }
   } else {
     const currentColorData = colorImageData[selectedColor]
     if (currentColorData) {
       return [currentColorData.main, ...currentColorData.thumbnails]
     }
   }
   return []
 }

 return (
   <main className="flex min-h-screen flex-col items-center">
     {/* Breadcrumb */}
     <section className="w-full py-4 bg-gray-50 border-b">
       <div className="container px-4 md:px-6">
         <div className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
           <Link href="/" className="hover:text-green-600">
             Home
           </Link>
           <ChevronRight className="h-4 w-4" />
           <Link href="/products" className="hover:text-green-600">
             Products
           </Link>
           <ChevronRight className="h-4 w-4" />
           <Link href="/products/microfiber-cloths" className="hover:text-green-600">
             Microfiber Cloths
           </Link>
           <ChevronRight className="h-4 w-4" />
           <span>12" x 12" Microfiber Cloth</span>
         </div>
       </div>
     </section>

     {/* Product Details */}
     <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
       <div className="container px-4 md:px-6">
         <div className="grid gap-8 md:grid-cols-2">
           {/* Product Images */}
           <div className="space-y-4">
             <div className="border rounded-lg overflow-hidden bg-white">
               <Image
                 src={selectedImage}
                 alt={`12x12 Microfiber Cloth - ${selectedColor}`}
                 width={600}
                 height={600}
                 className="object-cover w-full h-auto"
               />
             </div>
             <div className="grid grid-cols-5 gap-2">
               {getCurrentThumbnails().map((thumbnail, i) => (
                 <div
                   key={i}
                   className={`border rounded-lg overflow-hidden cursor-pointer hover:border-green-600 ${
                     selectedImageIndex === i ? 'border-green-600 ring-2 ring-green-200' : ''
                   }`}
                   onClick={() => handleThumbnailClick(i)}
                 >
                   <Image
                     src={thumbnail}
                     alt={`${selectedColor} view ${i + 1}`}
                     width={150}
                     height={150}
                     className="object-cover w-full h-auto"
                   />
                 </div>
               ))}
             </div>
           </div>

           {/* Product Info */}
           <div className="space-y-6">
             <div>
               <h1 className="text-2xl sm:text-3xl font-bold mb-2">EcoFine Microfiber Cloth - 12" x 12" - 320 GSM</h1>
               <div className="flex items-center mb-4">
                 <div className="flex">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                   ))}
                 </div>
                 <span className="ml-2 text-sm text-gray-500">(98 reviews)</span>
               </div>
               <div className="mb-4">
                 <span className="text-2xl font-bold">$19.99</span>
                 <span className="text-sm text-gray-500 ml-2">Pack of 12</span>
               </div>
               <p className="text-gray-600">
                 Premium quality 12" x 12" (30cm x 30cm) microfiber cloth with 320 GSM weight. Perfect for all-purpose
                 cleaning in commercial and residential settings. Each pack contains 12 pieces.
               </p>
             </div>

             {/* Color Selection */}
             <div>
               <h3 className="text-sm font-medium mb-3">Color</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
                 {colors.map((color) => {
                   const isAvailable = availableColors.includes(color)
                   return (
                     <button
                       key={color}
                       disabled={!isAvailable}
                       className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                         selectedColor === color
                           ? "border-green-600 bg-green-50 text-green-600"
                           : isAvailable
                           ? "border-gray-200 hover:border-gray-300"
                           : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                       }`}
                       onClick={() => isAvailable && handleColorChange(color)}
                     >
                       {color}
                       {!isAvailable && <span className="block text-xs">Not Available</span>}
                     </button>
                   )
                 })}
               </div>
               <h3 className="text-sm font-medium mb-3">Color Packs</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                 {colorPacks.map((pack) => (
                   <button
                     key={pack}
                     className={`px-3 py-2 text-sm border rounded-md ${
                       selectedColor === pack
                         ? "border-green-600 bg-green-50 text-green-600"
                         : "border-gray-200 hover:border-gray-300"
                     }`}
                     onClick={() => handleColorPackChange(pack)}
                   >
                     {pack}
                   </button>
                 ))}
               </div>
             </div>

             {/* Quantity */}
             <div>
               <h3 className="text-sm font-medium mb-3">Quantity</h3>
               <div className="flex items-center border rounded-md w-32">
                 <button className="px-3 py-2 text-gray-500 hover:text-gray-700" onClick={decreaseQuantity}>
                   <Minus className="h-4 w-4" />
                 </button>
                 <span className="flex-1 text-center">{quantity}</span>
                 <button className="px-3 py-2 text-gray-500 hover:text-gray-700" onClick={increaseQuantity}>
                   <Plus className="h-4 w-4" />
                 </button>
               </div>
             </div>

             {/* Add to Cart */}
             <div className="flex flex-col sm:flex-row gap-3">
               <Button className="bg-green-600 hover:bg-green-700 flex-1">
                 <ShoppingCart className="h-5 w-5 mr-2" />
                 Add to Cart
               </Button>
               <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 flex-1">
                 Request Sample
               </Button>
             </div>

             {/* Features */}
             <div className="border-t pt-6">
               <h3 className="font-medium mb-3">Key Features</h3>
               <ul className="space-y-2">
                 <li className="flex items-start">
                   <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                   <span>Premium 320 GSM weight for superior cleaning</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                   <span>80% Polyester, 20% Polyamide blend</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                   <span>Four thread overlock stitching for durability</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                   <span>Ultra-fine denier (0.1-0.2) for effective cleaning</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                   <span>Machine washable up to 500 times</span>
                 </li>
               </ul>
             </div>
           </div>
         </div>

         {/* Product Tabs */}
         <div className="mt-12">
           <Tabs defaultValue="description">
             <TabsList className="grid w-full grid-cols-3 gap-2">
               <TabsTrigger value="description">Description</TabsTrigger>
               <TabsTrigger value="specifications">Specifications</TabsTrigger>
               <TabsTrigger value="reviews">Reviews</TabsTrigger>
             </TabsList>
             <TabsContent value="description" className="p-4 sm:p-6 border rounded-b-lg mt-2">
               <div className="space-y-4">
                 <h3 className="text-xl font-bold">EcoFine Microfiber Cloth - 12" x 12"</h3>
                 <p>
                   Our premium 12" x 12" microfiber cloths are designed for professional cleaning applications across
                   various industries. Made with high-quality microfiber material, these cloths provide superior
                   cleaning performance while being gentle on surfaces.
                 </p>
                 <p>
                   The unique blend of 80% polyester and 20% polyamide creates a cloth that effectively captures dust,
                   dirt, and bacteria without the need for harsh chemicals. The ultra-fine denier (0.1-0.2) ensures
                   that even the smallest particles are trapped within the fibers.
                 </p>
                 <p>
                   Each cloth features four thread overlock stitching around the edges to prevent fraying and extend
                   the product lifespan. These cloths can be machine washed up to 500 times, making them an economical
                   and eco-friendly choice for professional cleaning.
                 </p>
                 <h4 className="font-bold mt-6">Applications:</h4>
                 <ul className="list-disc pl-5 space-y-1">
                   <li>Commercial cleaning services</li>
                   <li>Hospitality industry</li>
                   <li>Healthcare facilities</li>
                   <li>Automotive detailing</li>
                   <li>Food service industry</li>
                   <li>Residential cleaning</li>
                 </ul>
               </div>
             </TabsContent>
             <TabsContent value="specifications" className="p-4 sm:p-6 border rounded-b-lg mt-2">
               <div className="space-y-4">
                 <h3 className="text-xl font-bold">Product Specifications</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Size</span>
                       <span>12" x 12" (30cm x 30cm)</span>
                     </div>
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Material Blend</span>
                       <span>80% Polyester, 20% Polyamide</span>
                     </div>
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Weight</span>
                       <span>320 GSM</span>
                     </div>
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Denier</span>
                       <span>0.1-0.2</span>
                     </div>
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Edge Finish</span>
                       <span>Four thread overlock stitching</span>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Pack Size</span>
                       <span>12 pieces</span>
                     </div>
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Washable</span>
                       <span>Up to 500 times</span>
                     </div>
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Absorbency</span>
                       <span>7-8 times its weight</span>
                     </div>
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Shrinkage</span>
                       <span>Less than 5%</span>
                     </div>
                     <div className="flex justify-between py-2 border-b">
                       <span className="font-medium">Available Colors</span>
                       <span>6 solid colors, 3 color packs</span>
                     </div>
                   </div>
                 </div>
                 <div className="mt-6">
                   <h4 className="font-bold mb-2">Care Instructions:</h4>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>Machine wash in warm water (up to 140°F/60°C)</li>
                     <li>Do not use bleach or fabric softener</li>
                     <li>Tumble dry on low heat</li>
                     <li>Do not iron</li>
                     <li>Wash separately from lint-producing fabrics</li>
                   </ul>
                 </div>
               </div>
             </TabsContent>
             <TabsContent value="reviews" className="p-4 sm:p-6 border rounded-b-lg mt-2">
               <div className="space-y-6">
                 <h3 className="text-xl font-bold">Customer Reviews</h3>
                 <div className="flex items-center mb-6">
                   <div className="flex mr-4">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} className="h-6 w-6 fill-current text-yellow-400" />
                     ))}
                   </div>
                   <span className="text-lg font-medium">4.8 out of 5</span>
                   <span className="text-sm text-gray-500 ml-2">(98 reviews)</span>
                 </div>

                 {/* Sample Reviews */}
                 <div className="space-y-6">
                   <div className="border-b pb-6">
                     <div className="flex items-center mb-2">
                       <div className="flex">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                         ))}
                       </div>
                       <span className="ml-2 font-medium">Robert K.</span>
                       <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-2">
                       Perfect size for our hotel housekeeping staff. The 12x12 size is ideal for bathroom cleaning and
                       the quality is excellent. We've ordered these multiple times.
                     </p>
                     <span className="text-xs text-gray-500">Posted 3 months ago</span>
                   </div>

                   <div className="border-b pb-6">
                     <div className="flex items-center mb-2">
                       <div className="flex">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                         ))}
                       </div>
                       <span className="ml-2 font-medium">Lisa T.</span>
                       <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-2">
                       These cloths are the perfect size for our cleaning service. The 320 GSM weight is substantial
                       and they hold up well to daily use and frequent washing.
                     </p>
                     <span className="text-xs text-gray-500">Posted 2 months ago</span>
                   </div>

                   <div>
                     <div className="flex items-center mb-2">
                       <div className="flex">
                       {[...Array(4)].map((_, i) => (
                           <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                         ))}
                         <Star className="h-4 w-4 text-gray-300" />
                       </div>
                       <span className="ml-2 font-medium">David W.</span>
                       <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-2">
                       Good quality cloths that work well for our automotive detailing business. The only reason for 4
                       stars instead of 5 is that I wish they came in more specialized colors for our color-coding
                       system.
                     </p>
                     <span className="text-xs text-gray-500">Posted 1 month ago</span>
                   </div>
                 </div>

                 <Button variant="outline" className="w-full">
                   Load More Reviews
                 </Button>
               </div>
             </TabsContent>
           </Tabs>
         </div>

         {/* Related Products */}
         <div className="mt-12">
           <h2 className="text-2xl font-bold mb-6">Related Products</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
             <div className="border rounded-lg overflow-hidden">
               <Link href="/products/microfiber-cloths/16x16-300gsm-12pack">
                 <Image
                   src={bluemain}
                   alt="16x16 Microfiber Cloth"
                   width={300}
                   height={300}
                   className="object-cover w-full h-48"
                 />
                 <div className="p-4">
                   <h3 className="font-medium">EcoFine Microfiber Cloth - 16" x 16"</h3>
                   <p className="text-sm text-gray-500 mb-2">300 GSM, Pack of 12</p>
                   <span className="font-bold">$24.99</span>
                 </div>
               </Link>
             </div>

             <div className="border rounded-lg overflow-hidden">
               <Link href="/products/microfiber-cloths/waffle-weave">
                 <Image
                   src="/placeholder.svg?height=300&width=300"
                   alt="Waffle Weave Microfiber Cloth"
                   width={300}
                   height={300}
                   className="object-cover w-full h-48"
                 />
                 <div className="p-4">
                   <h3 className="font-medium">Waffle Weave Microfiber Cloth</h3>
                   <p className="text-sm text-gray-500 mb-2">400 GSM, Pack of 12</p>
                   <span className="font-bold">$29.99</span>
                 </div>
               </Link>
             </div>

             <div className="border rounded-lg overflow-hidden">
               <Link href="/products/microfiber-cloths/glass-cleaning">
                 <Image
                   src="/placeholder.svg?height=300&width=300"
                   alt="Glass Cleaning Microfiber Cloth"
                   width={300}
                   height={300}
                   className="object-cover w-full h-48"
                 />
                 <div className="p-4">
                   <h3 className="font-medium">Glass Cleaning Microfiber Cloth</h3>
                   <p className="text-sm text-gray-500 mb-2">280 GSM, Pack of 12</p>
                   <span className="font-bold">$22.99</span>
                 </div>
               </Link>
             </div>

             <div className="border rounded-lg overflow-hidden">
               <Link href="/products/microfiber-cloths/12x12-320gsm-50pack">
                 <Image
                   src="/placeholder.svg?height=300&width=300"
                   alt="Microfiber Cleaning Kit"
                   width={300}
                   height={300}
                   className="object-cover w-full h-48"
                 />
                 <div className="p-4">
                   <h3 className="font-medium">12" x 12" Bulk Pack</h3>
                   <p className="text-sm text-gray-500 mb-2">320 GSM, Pack of 50</p>
                   <span className="font-bold">$74.99</span>
                 </div>
               </Link>
             </div>
           </div>
         </div>
       </div>
     </section>
   </main>
 )
}