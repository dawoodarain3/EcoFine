"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Leaf, Droplets, Recycle } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Wet Mop Pads images
import WetMopPadsmain from "../../../../public/Microfiber Wet Mop Pads/Main.png"
import WetMopPads1 from "../../../../public/Microfiber Wet Mop Pads/01.png"
import WetMopPads2 from "../../../../public/Microfiber Wet Mop Pads/02.png"

export default function WetMopPadsPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Blue")
  const [selectedSize, setSelectedSize] = useState("36\"")
  const [selectedImage, setSelectedImage] = useState(WetMopPadsmain)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["Blue", "Green", "Red", "Yellow"]
  const sizes = ["18\"", "24\"", "36\"", "48\""]

  // Map colors to their main images and thumbnail arrays
  const colorImageData = {
    Blue: {
      main: WetMopPadsmain,
      thumbnails: [WetMopPads1, WetMopPads2]
    },
    Green: {
      main: "/placeholder.svg?height=600&width=600&text=Green+Mop+Main",
      thumbnails: [
        "/placeholder.svg?height=600&width=600&text=Green+Mop+1",
        "/placeholder.svg?height=600&width=600&text=Green+Mop+2"
      ]
    },
    Red: {
      main: "/placeholder.svg?height=600&width=600&text=Red+Mop+Main",
      thumbnails: [
        "/placeholder.svg?height=600&width=600&text=Red+Mop+1",
        "/placeholder.svg?height=600&width=600&text=Red+Mop+2"
      ]
    },
    Yellow: {
      main: "/placeholder.svg?height=600&width=600&text=Yellow+Mop+Main",
      thumbnails: [
        "/placeholder.svg?height=600&width=600&text=Yellow+Mop+1",
        "/placeholder.svg?height=600&width=600&text=Yellow+Mop+2"
      ]
    }
  }

  const handleColorChange = (color) => {
    setSelectedColor(color)
    setSelectedImage(colorImageData[color]?.main || WetMopPadsmain)
    setSelectedImageIndex(0) // Reset to main image when color changes
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size)
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
            <span>Premium Microfiber Wet Mop Pads</span>
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
                  alt={`Premium Microfiber Wet Mop Pads - ${selectedColor}`}
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
                <div className="flex items-center mb-2">
                  <h1 className="text-3xl font-bold mr-3">Premium Microfiber Wet Mop Pads</h1>
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
                  <span className="text-2xl font-bold">$29.99</span>
                  <span className="text-sm text-gray-500 ml-2">Pack of 6</span>
                </div>
                <p className="text-gray-600">
                  Professional-grade 470 GSM microfiber wet mop pad with innovative foam backing and 
                  hook and loop attachment system. Designed for superior cleaning performance and 
                  durability in commercial and residential applications.
                </p>
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
                    <span>Reduces water usage by up to 90% compared to traditional mops</span>
                  </li>
                  <li className="flex items-start">
                    <Recycle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Machine washable up to 500 times, reducing waste</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Reduces chemical usage by up to 70%</span>
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
                      disabled={color !== "Blue"}
                      className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                        selectedColor === color
                          ? "border-green-600 bg-green-50 text-green-600"
                          : color === "Blue"
                          ? "border-gray-200 hover:border-gray-300"
                          : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                      onClick={() => color === "Blue" && handleColorChange(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                        selectedSize === size
                          ? "border-green-600 bg-green-50 text-green-600"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
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
                    <span>Ultra-absorbent microfiber material (470 GSM)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Compatible with most standard mop frames</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>80% Polyester, 20% Polyamide blend</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Superior dirt and bacteria trapping</span>
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
                  <h3 className="text-xl font-bold">Premium Microfiber Wet Mop Pads</h3>
                  <p>
                    Our Premium Microfiber Wet Mop Pads are designed for professional cleaning environments where
                    performance and durability are essential. Made from high-quality microfiber material, these mop pads
                    offer superior absorption and cleaning power compared to traditional cotton mops.
                  </p>
                  <p>
                    The unique microfiber construction traps dirt, dust, and bacteria more effectively than conventional
                    mops, making them ideal for healthcare facilities, schools, and commercial buildings where hygiene is
                    paramount.
                  </p>
                  <p>
                    These mop pads are machine washable up to 500 times, providing exceptional value and reducing waste.
                    They're compatible with most standard mop frames and can be used with minimal water and chemicals,
                    making them an environmentally friendly choice for your cleaning needs.
                  </p>
                  <h4 className="font-bold mt-6">Applications:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Healthcare facilities</li>
                    <li>Educational institutions</li>
                    <li>Commercial buildings</li>
                    <li>Hospitality industry</li>
                    <li>Food service establishments</li>
                    <li>Residential cleaning</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Material Blend</span>
                        <span>80% Polyester, 20% Polyamide</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Weight</span>
                        <span>470 GSM</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Available Sizes</span>
                        <span>18", 24", 36", 48"</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Available Colors</span>
                        <span>Blue (others coming soon)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Compatibility</span>
                        <span>Most standard mop frames</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Pack Size</span>
                        <span>6 pieces</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Washable</span>
                        <span>Up to 500 times</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Absorbency</span>
                        <span>8-10 times its weight</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Shrinkage</span>
                        <span>Less than 5%</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Care Temperature</span>
                        <span>Up to 140°F/60°C</span>
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
                        Our microfiber wet mop pads reduce water usage by up to 90% compared to traditional cleaning methods.
                        They also minimize the need for chemical cleaners, reducing water pollution and promoting better
                        water quality.
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
                        Each EcoFine microfiber mop pad can be washed and reused up to 500 times, replacing hundreds of
                        disposable cleaning products. This significantly reduces waste and promotes sustainable
                        consumption patterns.
                      </p>
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
                    <span className="text-lg font-medium">5.0 out of 5</span>
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
                        <span className="ml-2 font-medium">David K.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        These mop pads are fantastic! We use them in our hospital and they clean so much better than our old cotton mops. 
                        The absorption is incredible and they hold up well after many washes.
                      </p>
                      <span className="text-xs text-gray-500">Posted 1 month ago</span>
                    </div>

                    <div className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Jennifer M.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Excellent quality mop pads. We've been using them in our school for 6 months and they still look and perform like new. 
                        Great value for money and much more environmentally friendly than disposable options.
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
                        <span className="ml-2 font-medium">Robert H.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Perfect for our cleaning company. The 36" size fits our equipment perfectly and the blue color helps with 
                        our color-coding system. Highly recommend for any professional cleaning operation.
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