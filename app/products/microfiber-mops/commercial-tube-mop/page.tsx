"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Building, Users, Droplets } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Blue Commercial Tube Mop images
import bluemain from "@/public/Mops/Commercial Tube Mop/Blue/Main.png"
import blue1 from "@/public/Mops/Commercial Tube Mop/Blue/01.png"
import blue2 from "@/public/Mops/Commercial Tube Mop/Blue/02.png"

// Green Commercial Tube Mop images
import greenmain from "@/public/Mops/Commercial Tube Mop/Green/Main.png"
import green1 from "@/public/Mops/Commercial Tube Mop/Green/01.png"
import green2 from "@/public/Mops/Commercial Tube Mop/Green/02.png"

// Red Commercial Tube Mop images
import redmain from "@/public/Mops/Commercial Tube Mop/Red/Main.png"
import red1 from "@/public/Mops/Commercial Tube Mop/Red/01.png"
import red2 from "@/public/Mops/Commercial Tube Mop/Red/02.png"

// Yellow Commercial Tube Mop images
import yellowmain from "@/public/Mops/Commercial Tube Mop/Yellow/Main.png"
import yellow1 from "@/public/Mops/Commercial Tube Mop/Yellow/01.png"
import yellow2 from "@/public/Mops/Commercial Tube Mop/Yellow/02.png"

export default function CommercialTubeMopPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Blue")
  const [selectedImage, setSelectedImage] = useState(bluemain)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["Blue", "Green", "Red", "Yellow"]

  // Map colors to their images
  const colorImageData = {
    Blue: {
      main: bluemain,
      thumbnails: [blue1, blue2]
    },
    Green: {
      main: greenmain,
      thumbnails: [green1, green2]
    },
    Red: {
      main: redmain,
      thumbnails: [red1, red2]
    },
    Yellow: {
      main: yellowmain,
      thumbnails: [yellow1, yellow2]
    }
  }

  const handleColorChange = (color) => {
    setSelectedColor(color)
    setSelectedImage(colorImageData[color]?.main || bluemain)
    setSelectedImageIndex(0) // Reset to main image when color changes
  }

  const handleThumbnailClick = (index) => {
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

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const getCurrentThumbnails = () => {
    const currentColorData = colorImageData[selectedColor]
    if (currentColorData) {
      return [currentColorData.main, ...currentColorData.thumbnails]
    }
    return []
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Breadcrumb */}
      <section className="w-full py-4 bg-gray-50 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-green-600">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/microfiber-mops" className="hover:text-green-600">
              Microfiber Mops
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Commercial Microfiber Tube Mop</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden bg-white">
                <Image
                  src={selectedImage}
                  alt={`Commercial Microfiber Tube Mop - ${selectedColor}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
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
                      alt={`${selectedColor} tube mop view ${i + 1}`}
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
                <div className="flex items-center mb-2">
                  <h1 className="text-3xl font-bold mr-3">Commercial Microfiber Tube Mop</h1>
                  <div className="flex space-x-1">
                    <SDGBadge id={6} title="Clean Water and Sanitation" />
                    <SDGBadge id={12} title="Responsible Consumption and Production" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(156 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$89.99</span>
                  <span className="text-sm text-gray-500 ml-2">Case of 12</span>
                </div>
                <p className="text-gray-600">
                  Professional-grade microfiber tube mop with mesh headband for commercial wet cleaning applications. 
                  300 GSM construction with 16" loop length provides superior absorption and coverage.
                </p>
              </div>

              {/* Commercial Benefits */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  Commercial Grade Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Users className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Case of 12 for high-volume commercial operations</span>
                  </li>
                  <li className="flex items-start">
                    <Droplets className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>300 GSM weight for maximum liquid absorption</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>6" mesh headband for secure bucket wringer compatibility</span>
                  </li>
                </ul>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                        selectedColor === color
                          ? "border-green-600 bg-green-50 text-green-600"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleColorChange(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  Color coding system for facility organization and cross-contamination prevention
                </p>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium mb-3">Quantity (Cases)</h3>
                <div className="flex items-center border rounded-md w-32">
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700" onClick={decreaseQuantity}>
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex-1 text-center">{quantity}</span>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700" onClick={increaseQuantity}>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {quantity} case{quantity > 1 ? 's' : ''} = {quantity * 12} mop{quantity * 12 > 1 ? 's' : ''}
                </p>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-green-600 hover:bg-green-700 flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 flex-1">
                  Download Specs
                </Button>
              </div>

              {/* Features */}
              <div className="border-t pt-6">
                <h3 className="font-medium mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Large size with 16" loop length coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>18" total length including mesh headband</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>80% Polyester, 20% Polyamide microfiber blend</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Ultra-fine 0.1-0.2 denier fibers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>300 GSM weight for superior absorption</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>6" mesh headband for wringer compatibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="commercial">Commercial Use</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Commercial Microfiber Tube Mop</h3>
                  <p>
                    Our Commercial Microfiber Tube Mop represents the pinnacle of professional wet mopping technology. 
                    Engineered specifically for high-volume commercial applications, this tube mop delivers exceptional 
                    cleaning performance while maintaining the durability required for daily institutional use.
                  </p>
                  <p>
                    The innovative tube design maximizes surface contact and liquid absorption, while the premium microfiber 
                    construction ensures superior dirt and bacteria removal. With a substantial 300 GSM weight and 16" loop 
                    length, each mop covers more area per pass, increasing cleaning efficiency and reducing labor costs.
                  </p>
                  <p>
                    The 6" mesh headband is specifically designed for compatibility with commercial bucket wringer systems, 
                    providing secure attachment and optimal wringing performance. The reinforced headband construction 
                    withstands repeated wringing cycles without stretching or tearing.
                  </p>
                  <h4 className="font-bold mt-6">Microfiber Technology:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>80% Polyester / 20% Polyamide blend for optimal performance</li>
                    <li>Ultra-fine 0.1-0.2 denier fibers create millions of cleaning edges</li>
                    <li>300 GSM weight provides 6-8 times absorption capacity vs. cotton</li>
                    <li>Tube construction maximizes fiber contact with surfaces</li>
                  </ul>
                  <h4 className="font-bold mt-6">Color Coding System:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Blue: General purpose cleaning and restrooms</li>
                    <li>Green: Food service and kitchen areas</li>
                    <li>Red: High-risk areas and biohazard zones</li>
                    <li>Yellow: Isolation areas and infectious control</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-600 mb-3">Mop Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Size</span>
                          <span>Large - 16" loop length</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Total Length</span>
                          <span>18" (including headband)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Material Blend</span>
                          <span>80% Polyester / 20% Polyamide</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Fiber Denier</span>
                          <span>0.1 - 0.2</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Weight</span>
                          <span>300 GSM</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-600 mb-3">Headband & Packaging</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Headband Type</span>
                          <span>Mesh Construction</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Headband Width</span>
                          <span>6"</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Available Colors</span>
                          <span>Blue, Green, Red, Yellow</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Pack Quantity</span>
                          <span>12 pieces per case</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Wringer Compatibility</span>
                          <span>Standard commercial buckets</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Performance Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Absorption capacity: 6-8 times its weight in liquid</li>
                      <li>Coverage area: Up to 500 sq ft per mop</li>
                      <li>Durability: 200+ wash cycles</li>
                      <li>Bacteria removal: 99.9% effective</li>
                      <li>Chemical compatibility: Safe with most cleaning solutions</li>
                      <li>Temperature resistance: Up to 140°F/60°C wash cycles</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="commercial" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Commercial Applications</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-blue-800">Healthcare Facilities</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Hospital patient rooms and corridors</li>
                        <li>Operating room preparation areas</li>
                        <li>Emergency departments</li>
                        <li>Laboratory and diagnostic areas</li>
                        <li>Pharmacy and clean rooms</li>
                        <li>Long-term care facilities</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-green-800">Educational Institutions</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Classroom and lecture hall cleaning</li>
                        <li>Cafeteria and food service areas</li>
                        <li>Gymnasium and athletic facilities</li>
                        <li>Dormitory and residence halls</li>
                        <li>Administrative buildings</li>
                        <li>Library and study areas</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-purple-800">Hospitality & Retail</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Hotel guest rooms and lobbies</li>
                        <li>Restaurant dining areas</li>
                        <li>Retail store floors</li>
                        <li>Shopping mall common areas</li>
                        <li>Convention centers</li>
                        <li>Entertainment venues</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-orange-800">Industrial & Office</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Manufacturing facility floors</li>
                        <li>Warehouse and distribution centers</li>
                        <li>Corporate office buildings</li>
                        <li>Government facilities</li>
                        <li>Transportation terminals</li>
                        <li>Food processing plants</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-3">Cost-Effective Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium mb-2">Labor Savings:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>25% faster cleaning due to larger coverage area</li>
                          <li>Reduced wringing frequency with high absorption</li>
                          <li>Single-pass cleaning eliminates re-mopping</li>
                          <li>Color coding reduces cross-contamination</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Material Savings:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>200+ wash cycles vs. 20-30 for cotton mops</li>
                          <li>Reduced chemical usage by up to 70%</li>
                          <li>Lower water consumption per cleaning cycle</li>
                          <li>Case packaging reduces procurement costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <div className="flex items-center mb-6">
                    <div className="flex mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-lg font-medium">4.8 out of 5</span>
                    <span className="text-sm text-gray-500 ml-2">(156 reviews)</span>
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
                        <span className="ml-2 font-medium">James R. - Facilities Manager</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        These tube mops have revolutionized our cleaning operation. We've been using them for 8 months in our 
                        200,000 sq ft facility and they still perform like new. The absorption is incredible and the color coding 
                        system helps prevent cross-contamination. Best investment we've made!
                      </p>
                      <span className="text-xs text-gray-500">Posted 2 weeks ago</span>
                    </div>

                    <div className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Dr. Patricia L. - Hospital Administrator</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Outstanding quality for healthcare use. The mesh headband holds up perfectly in our commercial wringers, 
                        and the microfiber effectively removes bacteria. Our housekeeping staff loves how much area they can cover 
                        with each mop. Highly recommend for medical facilities.
                      </p>
                      <span className="text-xs text-gray-500">Posted 1 month ago</span>
                    </div>

                    <div className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="ml-2 font-medium">Carlos M. - Cleaning Contractor</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Great value for the case of 12. We service multiple office buildings and these mops handle everything from 
                        light dust to coffee spills. Only minor issue is they take a bit longer to dry, but the performance more 
                        than makes up for it. Will definitely reorder.
                      </p>
                      <span className="text-xs text-gray-500">Posted 3 weeks ago</span>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Linda S. - School District</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        These mops have significantly improved our cleaning efficiency across all our schools. The custodial staff 
                        reports 30% faster cleaning times, and the different colors help us maintain our sanitation protocols. 
                        Excellent product for educational facilities.
                      </p>
                      <span className="text-xs text-gray-500">Posted 1 week ago</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  )
}