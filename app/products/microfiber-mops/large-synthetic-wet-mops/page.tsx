"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Building, Users, Droplets } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Professional EcoFine Wet Mops images
import main from "@/public/Mops/Large Synthetic Wet Mops/Main.png"
import blue from "@/public/Mops/Large Synthetic Wet Mops/01.png"
import white from "@/public/Mops/Large Synthetic Wet Mops/02.png"
import green from "@/public/Mops/Large Synthetic Wet Mops/03.png"
import red from "@/public/Mops/Large Synthetic Wet Mops/04.png"

export default function EcoFineWetMopsPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedImage, setSelectedImage] = useState(main)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["White", "Blue", "Green", "Red"]

  // Map colors to their main images and thumbnail arrays
  const colorImageData = {
    White: {
      main: main,
      thumbnails: [white]
    },
    Blue: {
      main: main,
      thumbnails: [blue]
    },
    Green: {
      main: main,
      thumbnails: [green]
    },
    Red: {
      main: main,
      thumbnails: [red]
    }
  }

  const handleColorChange = (color) => {
    setSelectedColor(color)
    setSelectedImage(colorImageData[color]?.main || main)
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
            <Link href="/products/wet-mops" className="hover:text-green-600">
              Wet Mops
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Professional EcoFine Wet Mops</span>
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
                  alt={`Professional EcoFine Wet Mops - ${selectedColor}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
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
                      alt={`${selectedColor} wet mop view ${i + 1}`}
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
                  <h1 className="text-3xl font-bold mr-3">Professional EcoFine Wet Mops</h1>
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
                  <span className="ml-2 text-sm text-gray-500">(94 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$34.99</span>
                  <span className="text-sm text-gray-500 ml-2">24 oz. Large Size</span>
                </div>
                <p className="text-gray-600">
                  Large synthetic wet mop with 24 oz. performance equivalent. Features 100% synthetic yarn 
                  with vinyl coated mesh headband for superior durability and cleaning performance in 
                  professional environments.
                </p>
              </div>

              {/* Professional Benefits */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  Professional Grade Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Users className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>24 oz. large size for maximum coverage and efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <Droplets className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>100% synthetic yarn for superior absorption and durability</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>5" vinyl coated mesh headband for secure attachment</span>
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
                    <span>24 oz. large size for maximum coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>20" total length including headband</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>100% synthetic yarn construction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>5" vinyl coated mesh headband</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Superior dirt and liquid absorption</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Professional-grade durability</span>
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
                  <h3 className="text-xl font-bold">Professional EcoFine Wet Mops</h3>
                  <p>
                    Our Professional EcoFine Wet Mops represent the pinnacle of synthetic mop technology for 
                    commercial and institutional cleaning applications. Engineered with 100% synthetic yarn 
                    construction, these large 24 oz. mops deliver exceptional absorption and cleaning power 
                    while maintaining the durability required for daily professional use.
                  </p>
                  <p>
                    The advanced synthetic yarn construction provides superior resistance to chemicals and bacteria 
                    while maintaining excellent absorption capabilities. Unlike traditional cotton mops, our 
                    synthetic construction resists degradation from cleaning chemicals and frequent washing, 
                    ensuring consistent performance throughout the mop's extended lifespan.
                  </p>
                  <p>
                    The 5" vinyl coated mesh headband is specifically engineered for compatibility with commercial 
                    mop systems, providing secure attachment and optimal durability. The reinforced headband 
                    construction withstands repeated use without stretching or tearing, making it ideal for 
                    high-frequency cleaning applications.
                  </p>
                  <h4 className="font-bold mt-6">Synthetic Yarn Technology:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>100% synthetic construction for maximum durability</li>
                    <li>Superior chemical resistance vs. natural fiber mops</li>
                    <li>24 oz. weight provides excellent absorption capacity</li>
                    <li>20" total length for comprehensive floor coverage</li>
                  </ul>
                  <h4 className="font-bold mt-6">Color Coding System:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>White: General purpose cleaning and administrative areas</li>
                    <li>Blue: General purpose cleaning and restrooms</li>
                    <li>Green: Food service and kitchen areas</li>
                    <li>Red: High-risk areas and biohazard zones</li>
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
                          <span>Large - 24 oz. equivalent</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Total Length</span>
                          <span>20" (including headband)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Yarn Material</span>
                          <span>100% Synthetic</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Performance Level</span>
                          <span>Professional Grade</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Absorption</span>
                          <span>High Capacity</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-600 mb-3">Headband & Features</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Headband Type</span>
                          <span>Vinyl Coated Mesh</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Headband Width</span>
                          <span>5"</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Available Colors</span>
                          <span>White, Blue, Green, Red</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Durability</span>
                          <span>Heavy-Duty</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Chemical Resistance</span>
                          <span>Excellent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Performance Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Superior absorption capacity vs. cotton mops</li>
                      <li>Extended lifespan with proper care</li>
                      <li>Chemical resistance for all standard cleaning solutions</li>
                      <li>Bacteria resistance for improved hygiene</li>
                      <li>Machine washable for easy maintenance</li>
                      <li>Minimal shrinkage and deformation</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Care Instructions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Machine wash in warm water</li>
                      <li>Use mild detergent only</li>
                      <li>Do not use bleach or fabric softener</li>
                      <li>Air dry or tumble dry on low heat</li>
                      <li>Replace when fibers begin to fray significantly</li>
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
                        <li>Medical office buildings</li>
                        <li>Clinic examination rooms</li>
                        <li>Laboratory preparation areas</li>
                        <li>Nursing stations and break rooms</li>
                        <li>Long-term care facilities</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-green-800">Educational Institutions</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Classroom and lecture hall cleaning</li>
                        <li>Administrative office areas</li>
                        <li>Library and study spaces</li>
                        <li>Gymnasium and common areas</li>
                        <li>Dormitory and residence halls</li>
                        <li>Faculty lounges and meeting rooms</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-purple-800">Commercial Buildings</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Corporate office buildings</li>
                        <li>Retail store maintenance</li>
                        <li>Shopping center common areas</li>
                        <li>Bank and financial institutions</li>
                        <li>Government facilities</li>
                        <li>Professional service offices</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-orange-800">Industrial & Manufacturing</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Manufacturing facility floors</li>
                        <li>Warehouse and distribution centers</li>
                        <li>Processing plant common areas</li>
                        <li>Quality control laboratories</li>
                        <li>Administrative areas in plants</li>
                        <li>Break rooms and cafeterias</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-3">Cost-Effective Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium mb-2">Operational Savings:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Extended lifespan reduces replacement frequency</li>
                          <li>Superior absorption for faster cleaning</li>
                          <li>Chemical resistance prevents premature breakdown</li>
                          <li>Color coding reduces cross-contamination</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Environmental Benefits:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Durable construction reduces waste</li>
                          <li>Synthetic material resists bacteria growth</li>
                          <li>Machine washable for easy sanitization</li>
                          <li>Reduced chemical usage with effective cleaning</li>
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
                    <span className="text-sm text-gray-500 ml-2">(94 reviews)</span>
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
                        <span className="ml-2 font-medium">Michael R. - Facilities Manager</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        These synthetic mops are outstanding! We use them in our facility maintenance company and they 
                        outperform cotton mops by far. The 24 oz. size covers a lot of ground and the synthetic material 
                        holds up incredibly well against our cleaning chemicals.
                      </p>
                      <span className="text-xs text-gray-500">Posted 3 weeks ago</span>
                    </div>

                    <div className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Sarah T. - Hospital Administrator</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Perfect for our healthcare facility. The vinyl headband is extremely durable and the synthetic 
                        construction resists bacteria buildup. Our housekeeping staff loves how much liquid these can 
                        absorb compared to our old cotton mops. Great investment!
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
                        <span className="ml-2 font-medium">Carlos M. - Cleaning Service</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Great value for professional cleaning. We service multiple office buildings and these mops handle 
                        everything from light dust to major spills. The white and blue colors help us organize our cleaning 
                        protocols. Only minor issue is the initial cost, but they last so much longer.
                      </p>
                      <span className="text-xs text-gray-500">Posted 2 weeks ago</span>
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
                        These synthetic mops have significantly improved our cleaning efficiency across all our schools. The 
                        custodial staff reports faster cleaning times and better results. The color coding system helps us 
                        maintain proper sanitation protocols. Excellent product for educational facilities.
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