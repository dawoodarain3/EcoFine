"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Leaf, Droplets, Recycle } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Glass Cleaning Cloth images
import GlassCleaningClothmain from "../../../../public/Glass Cleaning Microfiber/Main.png"
import GlassCleaningCloth1 from "../../../../public/Glass Cleaning Microfiber/01.png"
import GlassCleaningCloth2 from "../../../../public/Glass Cleaning Microfiber/02.png"
import GlassCleaningCloth3 from "../../../../public/Glass Cleaning Microfiber/03.png"
import GlassCleaningCloth4 from "../../../../public/Glass Cleaning Microfiber/04.png"


export default function GlassCleaningClothPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Blue")
  const [selectedImage, setSelectedImage] = useState(GlassCleaningClothmain)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["Blue"]

  // Map colors to their main images and thumbnail arrays
  const colorImageData = {
    Blue: {
      main: GlassCleaningClothmain,
      thumbnails: [GlassCleaningCloth1, GlassCleaningCloth2, GlassCleaningCloth3, GlassCleaningCloth4]
    }
  }

  const handleColorChange = (color) => {
    setSelectedColor(color)
    setSelectedImage(colorImageData[color]?.main || GlassCleaningClothmain)
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
            <span>EcoFine Microfiber Glass Cleaning Cloth - 16" x 16</span>
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
                  alt={`EcoFine Microfiber Glass Cleaning Cloth - 16" x 16 - ${selectedColor}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
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
                  <h1 className="text-3xl font-bold mr-3">EcoFine Microfiber Glass Cleaning Cloth - 16" x 16</h1>
                  <div className="flex space-x-1">
                    <SDGBadge id={12} title="Responsible Consumption and Production" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-current text-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(76 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$22.99</span>
                  <span className="text-sm text-gray-500 ml-2">Pack of 12</span>
                </div>
                <p className="text-gray-600">
                  Specialized 280 GSM microfiber cloth designed specifically for glass and mirror cleaning. Leaves no
                  streaks or lint. Perfect for professional window cleaners and household use.
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
                    <span>Reduces water usage by up to 90% compared to traditional cleaning methods</span>
                  </li>
                  <li className="flex items-start">
                    <Recycle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Washable up to 500 times, replacing hundreds of disposable alternatives</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Minimizes chemical usage for healthier indoor environments</span>
                  </li>
                </ul>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
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
                    <span>Specialized 280 GSM weight for streak-free glass cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Ultra-fine microfiber strands for lint-free results</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Reinforced edges for extended durability</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Works with just water - no chemicals needed</span>
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
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-4 sm:p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">EcoFine Microfiber Glass Cleaning Cloth - 16" x 16</h3>
                  <p>
                    Our specialized glass cleaning microfiber cloths are designed specifically for streak-free cleaning
                    of glass, mirrors, and other reflective surfaces. The unique microfiber blend and construction
                    ensures a lint-free, streak-free finish every time.
                  </p>
                  <p>
                    Unlike traditional cleaning cloths, our glass cleaning microfiber cloths can be used with just water
                    - no chemicals required. The ultra-fine microfiber strands effectively trap dust, dirt, and grime
                    without scratching delicate surfaces.
                  </p>
                  <p>
                    Each cloth features reinforced edges to prevent fraying and extend the product lifespan. These
                    cloths can be machine washed up to 500 times, making them an economical and eco-friendly choice for
                    professional cleaning.
                  </p>
                  <h4 className="font-bold mt-6">Applications:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Professional window cleaning</li>
                    <li>Automotive glass and mirrors</li>
                    <li>Household mirrors and glass surfaces</li>
                    <li>Electronic screens and displays</li>
                    <li>Eyeglasses and optical lenses</li>
                    <li>Stainless steel appliances</li>
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
                        <span>16" x 16" (40cm x 40cm)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Material Blend</span>
                        <span>70% Polyester, 30% Polyamide</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Weight</span>
                        <span>280 GSM</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Denier</span>
                        <span>0.1-0.2</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Edge Finish</span>
                        <span>Reinforced ultrasonic cut</span>
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
                        <span>5-6 times its weight</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Shrinkage</span>
                        <span>Less than 3%</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Available Colors</span>
                        <span>Blue</span>
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
              <TabsContent value="sustainability" className="p-4 sm:p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Sustainability Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="mr-3">
                          <SDGBadge id={12} title="Responsible Consumption and Production" />
                        </div>
                        <h4 className="font-bold">SDG 12: Responsible Consumption</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Each EcoFine glass cleaning microfiber cloth can be washed and reused up to 500 times, replacing
                        hundreds of disposable cleaning products. This significantly reduces waste and promotes
                        sustainable consumption patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="p-4 sm:p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <div className="flex items-center mb-6">
                    <div className="flex mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${i < 4 ? "fill-current text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium">4.8 out of 5</span>
                    <span className="text-sm text-gray-500 ml-2">(76 reviews)</span>
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
                        <span className="ml-2 font-medium">James W.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        These are the best glass cleaning cloths I've ever used. No streaks, no lint, just perfect
                        results every time. We use them in our window cleaning business and our customers always comment
                        on how clean their windows look.
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
                        <span className="ml-2 font-medium">Maria L.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        I was skeptical at first, but these cloths really do clean glass with just water. No more
                        chemical sprays in my house! They're also great for cleaning my computer and TV screens.
                      </p>
                      <span className="text-xs text-gray-500">Posted 2 weeks ago</span>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="ml-2 font-medium">Thomas R.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Good quality cloths that work well for our hotel housekeeping staff. They clean mirrors and
                        glass surfaces quickly and effectively. Would be perfect if they were slightly larger.
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
        </div>
      </section>
    </main>
  )
}