"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Leaf, Droplets, Recycle } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Import images
import bluemain from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Blue/Main.png"
import blue1 from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Blue/01.png"
import blue2 from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Blue/02.png"

import redmain from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Red/Main.png"
import red1 from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Red/01.png"
import red2 from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Red/02.png"

import yellowmain from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Yellow/Main.png"
import yellow1 from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Yellow/01.png"
import yellow2 from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Yellow/02.png"

import greenmain from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Green/Main.png"
import green1 from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Green/01.png"
import green2 from "../../../../public/Mops/Microfiber Flat Mop Pads - 18/Green/02.png"

export default function MicrofiberMopPads18Page() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Blue")
  const [selectedPackSize, setSelectedPackSize] = useState("3-pack")
  const [selectedImage, setSelectedImage] = useState(bluemain)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["Blue", "Red", "Green", "Yellow", "White"]
  const availableColors = ["Blue", "Red", "Green", "Yellow"]

  const packSizes = [
    {
      id: "3-pack",
      name: "Pack of 3",
      price: "$29.98",
      description: "Perfect starter pack for small to medium cleaning areas",
      pricePerPad: "$9.99 per pad"
    },
    {
      id: "6-pack",
      name: "Pack of 6", 
      price: "$54.98",
      description: "Value pack for larger facilities and frequent use",
      pricePerPad: "$9.16 per pad",
      savings: "Save $4.96"
    }
  ]

  // Map colors to their main images and thumbnail arrays
  const colorImageData = {
    Blue: {
      main: bluemain,
      thumbnails: [blue1, blue2]
    },
    Red: {
      main: redmain,
      thumbnails: [red1, red2]
    },
    Green: {
      main: greenmain,
      thumbnails: [green1, green2]
    },
    Yellow: {
      main: yellowmain,
      thumbnails: [yellow1, yellow2]
    },
    White: {
      main: "/placeholder.svg?height=600&width=600&text=White+Mop+Pad",
      thumbnails: [
        "/placeholder.svg?height=600&width=600&text=White+View+1",
        "/placeholder.svg?height=600&width=600&text=White+View+2"
      ]
    }
  }

  const handleColorChange = (color) => {
    if (availableColors.includes(color)) {
      setSelectedColor(color)
      setSelectedImage(colorImageData[color]?.main || bluemain)
      setSelectedImageIndex(0)
    }
  }

  const handlePackSizeChange = (packSizeId) => {
    setSelectedPackSize(packSizeId)
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

  const getCurrentPackSize = () => {
    return packSizes.find(pack => pack.id === selectedPackSize)
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
            <span>18" Microfiber Flat Mop Pads</span>
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
                  alt={`18" Microfiber Flat Mop Pads - ${selectedColor}`}
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
                      alt={`${selectedColor} mop pad view ${i + 1}`}
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
                  <h1 className="text-3xl font-bold mr-3">
                    EcoFine Microfiber Flat Mop Pads - 18"
                  </h1>
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
                  <span className="ml-2 text-sm text-gray-500">(89 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">{getCurrentPackSize()?.price}</span>
                  <span className="text-sm text-gray-500 ml-2">{getCurrentPackSize()?.name}</span>
                  {getCurrentPackSize()?.savings && (
                    <span className="text-sm text-green-600 font-medium ml-2">
                      ({getCurrentPackSize()?.savings})
                    </span>
                  )}
                </div>
                <p className="text-gray-600">
                  Professional-grade 18" microfiber wet mop pads with 475 GSM construction and longer loops 
                  for superior cleaning performance. Color-coded system prevents cross-contamination and 
                  maintains hygiene standards in commercial and residential settings.
                </p>
              </div>

              {/* Pack Size Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Pack Size</h3>
                <div className="grid grid-cols-1 gap-3 mb-4">
                  {packSizes.map((pack) => (
                    <div
                      key={pack.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedPackSize === pack.id
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handlePackSizeChange(pack.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <span className={`text-lg font-semibold ${
                            selectedPackSize === pack.id ? "text-green-600" : "text-gray-900"
                          }`}>
                            {pack.name}
                          </span>
                          <span className={`ml-2 text-sm ${
                            selectedPackSize === pack.id ? "text-green-600" : "text-gray-500"
                          }`}>
                            ({pack.pricePerPad})
                          </span>
                        </div>
                        <div className="text-right">
                          <span className={`text-lg font-bold ${
                            selectedPackSize === pack.id ? "text-green-600" : "text-gray-900"
                          }`}>
                            {pack.price}
                          </span>
                          {pack.savings && (
                            <div className="text-sm text-green-600 font-medium">
                              {pack.savings}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{pack.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sustainability Benefits */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  Sustainability Benefits
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Droplets className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Reduces water usage by up to 90% compared to traditional mopping</span>
                  </li>
                  <li className="flex items-start">
                    <Recycle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Machine washable up to 500 times - replaces thousands of disposable mops</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Reduces chemical usage with superior cleaning effectiveness</span>
                  </li>
                </ul>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
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
                        {!isAvailable && <span className="block text-xs">Coming Soon</span>}
                      </button>
                    )
                  })}
                </div>
                <p className="text-xs text-gray-500">
                  Color-coding helps prevent cross-contamination in professional cleaning
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
                    <span>475 GSM construction with longer loops for superior absorption</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>18" size fits standard commercial mop frames</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Color-coded system prevents cross-contamination</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Machine washable up to 500 times</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Velcro backing for secure attachment to mop frames</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Color Coding Guide */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Color Coding System</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional color-coding prevents cross-contamination and maintains hygiene standards 
                across different cleaning areas.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-medium">Red</h4>
                <p className="text-sm text-gray-600">High-risk areas, restrooms</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-medium">Blue</h4>
                <p className="text-sm text-gray-600">General cleaning, offices</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-medium">Green</h4>
                <p className="text-sm text-gray-600">Food prep areas, kitchens</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-medium">Yellow</h4>
                <p className="text-sm text-gray-600">Healthcare, medical facilities</p>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">EcoFine Microfiber Flat Mop Pads - 18"</h3>
                  <p>
                    Our professional-grade 18" microfiber flat mop pads are designed for superior cleaning 
                    performance in commercial and residential applications. With 475 GSM construction and 
                    longer loops, these mop pads provide exceptional absorption and cleaning effectiveness 
                    while being gentle on all floor surfaces.
                  </p>
                  <p>
                    The color-coded system allows facilities to implement proper hygiene protocols by 
                    designating specific colors for different areas, preventing cross-contamination and 
                    maintaining sanitation standards.
                  </p>
                  <p>
                    Each mop pad features a Velcro backing system that securely attaches to standard 18" 
                    mop frames, ensuring reliable performance during use. The microfiber construction 
                    attracts and traps dirt, dust, and bacteria more effectively than traditional mops.
                  </p>
                  <h4 className="font-bold mt-6">Perfect for:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Commercial office buildings</li>
                      <li>Healthcare facilities</li>
                      <li>Educational institutions</li>
                      <li>Food service establishments</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Retail stores and shopping centers</li>
                      <li>Hotels and hospitality</li>
                      <li>Residential cleaning services</li>
                      <li>Industrial facilities</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Size</span>
                        <span>18" x 5" (45cm x 12.5cm)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Material</span>
                        <span>Premium Microfiber</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Weight</span>
                        <span>475 GSM</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Loop Type</span>
                        <span>Longer loops for enhanced cleaning</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Backing System</span>
                        <span>Velcro attachment</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Pack Options</span>
                        <span>3-pack, 6-pack</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Colors Available</span>
                        <span>Red, Blue, Green, Yellow</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Washable</span>
                        <span>Up to 500 times</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Absorbency</span>
                        <span>6-7 times its weight</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Compatibility</span>
                        <span>Standard 18" mop frames</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Care Instructions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Machine wash in warm water (up to 160°F/70°C)</li>
                      <li>Use mild detergent, no fabric softener or bleach</li>
                      <li>Tumble dry on low heat or air dry</li>
                      <li>Do not iron or dry clean</li>
                      <li>Wash separately from lint-producing fabrics</li>
                      <li>Replace when loops become worn or frayed</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="sustainability" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Sustainability Features</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="mr-3">
                          <SDGBadge id={6} title="Clean Water and Sanitation" />
                        </div>
                        <h4 className="font-bold">SDG 6: Clean Water and Sanitation</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Our microfiber mop pads reduce water usage by up to 90% compared to traditional 
                        mopping methods while providing superior cleaning results and maintaining hygiene standards.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="mr-3">
                          <SDGBadge id={12} title="Responsible Consumption and Production" />
                        </div>
                        <h4 className="font-bold">SDG 12: Responsible Consumption</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Each mop pad can be washed and reused up to 500 times, replacing thousands of 
                        disposable alternatives and significantly reducing waste in commercial cleaning operations.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold mb-3">Environmental Impact</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Droplets className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Water Conservation:</span>
                          <p className="text-sm text-gray-600">
                            Advanced microfiber technology requires minimal water while achieving superior 
                            cleaning results, supporting water conservation efforts in facilities.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Recycle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Waste Reduction:</span>
                          <p className="text-sm text-gray-600">
                            Long-lasting durability means each mop pad replaces hundreds of disposable 
                            cleaning products, dramatically reducing landfill waste.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Leaf className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Chemical Reduction:</span>
                          <p className="text-sm text-gray-600">
                            Effective cleaning with minimal or no chemicals required, reducing environmental 
                            impact and improving indoor air quality.
                          </p>
                        </div>
                      </li>
                    </ul>
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
                    <span className="text-sm text-gray-500 ml-2">(89 reviews)</span>
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
                        <span className="ml-2 font-medium">Mark S.</span>
                        <span className="text-sm text-gray-500 ml-2">Facility Manager</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        These mop pads are excellent! We use the color-coding system in our office building - 
                        red for restrooms, blue for general areas. The 475 GSM construction really makes a 
                        difference in cleaning effectiveness. They hold up well through multiple washes too.
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
                        <span className="ml-2 font-medium">Lisa P.</span>
                        <span className="text-sm text-gray-500 ml-2">Cleaning Service Owner</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        The 6-pack is a great value! Perfect for our commercial cleaning business. The longer 
                        loops really do pick up more dirt and the Velcro backing stays secure. We've been 
                        using these for 6 months and they still look almost new.
                      </p>
                      <span className="text-xs text-gray-500">Posted 1 month ago</span>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Jennifer K.</span>
                        <span className="text-sm text-gray-500 ml-2">Hospital Administrator</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Essential for our healthcare facility! The color coding helps our staff maintain 
                        proper infection control protocols. Yellow for medical areas, red for isolation rooms. 
                        These mop pads clean effectively and withstand frequent washing with hospital-grade detergents.
                      </p>
                      <span className="text-xs text-gray-500">Posted 3 weeks ago</span>
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
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Complete Your Mop System</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="border rounded-lg overflow-hidden">
                <Link href="/products/microfiber-mops/heavy-duty-frame-handle">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="18 Heavy Duty Frame & Handle"
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="font-medium">18" Heavy Duty Frame & Handle</h3>
                    <p className="text-sm text-gray-500 mb-2">Aluminum frame with telescoping handle</p>
                    <span className="font-bold">$19.98</span>
                  </div>
                </Link>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <Link href="/products/microfiber-mops/premium-wet-mop-pads-18-6pack">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Premium Wet Mop Pads"
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="font-medium">Premium Wet Mop Pads - 18"</h3>
                    <p className="text-sm text-gray-500 mb-2">475 GSM, Pack of 6</p>
                    <span className="font-bold">$64.98</span>
                  </div>
                </Link>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <Link href="/products/microfiber-mops/scrubber-mop">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Microfiber Scrubber Mop"
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="font-medium">18" Microfiber Scrubber Mop</h3>
                    <p className="text-sm text-gray-500 mb-2">Dual-action with scrubbing strips</p>
                    <span className="font-bold">$14.98</span>
                  </div>
                </Link>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <Link href="/products/microfiber-mops/mop-system">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Complete Mop System"
                    width={300}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="font-medium">18" Complete Mop System</h3>
                    <p className="text-sm text-gray-500 mb-2">Handle, frame, and pads included</p>
                    <span className="font-bold">$49.98</span>
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