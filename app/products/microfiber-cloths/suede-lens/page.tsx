"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Leaf, Droplets, Recycle } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Black images
import blackmain from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/Main.png"
import black1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/01.png"
import black2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/02.png"

// Gray images
import graymain from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/Main.png"
import gray1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/01.png"
import gray2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/02.png"

// White images
import whitemain from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/Main.png"
import white1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/01.png"
import white2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/02.png"

export default function SuedeLensCleaningClothPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedImage, setSelectedImage] = useState(whitemain)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["White", "Grey", "Black"]
  const availableColors = ["White", "Grey", "Black"]

  // Map colors to their main images and thumbnail arrays
  const colorImageData = {
    White: {
      main: whitemain,
      thumbnails: [white1, white2]
    },
    Grey: {
      main: graymain,
      thumbnails: [gray1, gray2]
    },
    Black: {
      main: blackmain,
      thumbnails: [black1, black2]
    }
  }

  const handleColorChange = (color) => {
    if (availableColors.includes(color)) {
      setSelectedColor(color)
      setSelectedImage(colorImageData[color]?.main || whitemain)
      setSelectedImageIndex(0) // Reset to main image when color changes
    }
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
            <Link href="/products/microfiber-dusters" className="hover:text-green-600">
              Microfiber Dusters
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Microfiber Suede Lens Cleaning Cloth</span>
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
                  alt={`Microfiber Suede Lens Cleaning Cloth - ${selectedColor}`}
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
                  <h1 className="text-3xl font-bold mr-3">Microfiber Suede Lens Cleaning Cloth - 6" x 6"</h1>
                  <div className="flex space-x-1">
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
                  <span className="text-2xl font-bold">$18.99</span>
                  <span className="text-sm text-gray-500 ml-2">Pack of 10</span>
                </div>
                <p className="text-gray-600">
                  Premium suede microfiber lens cleaning cloths designed for delicate surfaces. Perfect for eyeglasses, 
                  camera lenses, smartphones, tablets, and other optical equipment. Ultra-soft and lint-free.
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
                    <Recycle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Washable and reusable - replaces hundreds of disposable wipes</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>No chemicals needed - clean with just the cloth</span>
                  </li>
                  <li className="flex items-start">
                    <Droplets className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Reduces waste from single-use cleaning products</span>
                  </li>
                </ul>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
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
                    <span>Ultra-soft suede microfiber material</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Safe for all lens coatings and delicate surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Lint-free and streak-free cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Machine washable and long-lasting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Compact 6" x 6" size for portability</span>
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
                  <h3 className="text-xl font-bold">Microfiber Suede Lens Cleaning Cloth</h3>
                  <p>
                    Our premium suede microfiber lens cleaning cloths are specifically designed for cleaning delicate 
                    optical surfaces without scratching or damaging protective coatings. The ultra-soft suede texture 
                    gently removes fingerprints, dust, and smudges while being completely lint-free.
                  </p>
                  <p>
                    Unlike paper towels or tissues that can scratch lens surfaces, these microfiber cloths use 
                    electrostatic properties to attract and trap dust particles. The compact 6" x 6" size makes 
                    them perfect for carrying in eyeglass cases, camera bags, or pockets.
                  </p>
                  <p>
                    Each cloth can be machine washed hundreds of times without losing effectiveness, making them 
                    an economical and environmentally friendly alternative to disposable lens wipes.
                  </p>
                  <h4 className="font-bold mt-6">Perfect for:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Eyeglasses and reading glasses</li>
                    <li>Camera lenses and filters</li>
                    <li>Smartphone and tablet screens</li>
                    <li>Computer monitors and laptop screens</li>
                    <li>Binoculars and telescopes</li>
                    <li>Watch faces and jewelry</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Size</span>
                        <span>6" x 6" (15cm x 15cm)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Material</span>
                        <span>Premium Suede Microfiber</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Weight</span>
                        <span>220 GSM</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Edge Finish</span>
                        <span>Ultrasonic cut edges</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Texture</span>
                        <span>Ultra-soft suede</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Pack Size</span>
                        <span>10 pieces</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Colors Available</span>
                        <span>White, Grey, Black</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Washable</span>
                        <span>Machine washable</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Lint-Free</span>
                        <span>Yes</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Safe for Coatings</span>
                        <span>Anti-reflective, UV, etc.</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Care Instructions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Machine wash in warm water</li>
                      <li>Do not use fabric softener or bleach</li>
                      <li>Air dry or tumble dry on low heat</li>
                      <li>Do not iron</li>
                      <li>Store in a clean, dry place</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="sustainability" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Sustainability Features</h3>

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="mr-3">
                          <SDGBadge id={12} title="Responsible Consumption and Production" />
                        </div>
                        <h4 className="font-bold">SDG 12: Responsible Consumption</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Each EcoFine suede lens cleaning cloth can be washed and reused hundreds of times, 
                        replacing thousands of disposable lens wipes and reducing plastic packaging waste 
                        significantly.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold mb-3">Environmental Impact</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Recycle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Waste Reduction:</span>
                          <p className="text-sm text-gray-600">
                            Each cloth replaces hundreds of disposable lens wipes, significantly reducing 
                            packaging waste and plastic consumption in optical care.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Leaf className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Chemical-Free Cleaning:</span>
                          <p className="text-sm text-gray-600">
                            No cleaning solutions or chemicals required - the microfiber structure effectively 
                            cleans with just the dry cloth, reducing chemical usage and environmental impact.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Droplets className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Long-lasting Durability:</span>
                          <p className="text-sm text-gray-600">
                            Machine washable design ensures each cloth maintains effectiveness through 
                            hundreds of uses, providing exceptional value and reducing replacement frequency.
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
                    <span className="text-lg font-medium">5.0 out of 5</span>
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
                        <span className="ml-2 font-medium">Patricia R.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        These are the best lens cleaning cloths I've ever used! So soft and they don't scratch my 
                        expensive progressive lenses. I keep one in my purse, one at work, and several at home. 
                        They wash beautifully and last forever.
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
                        <span className="ml-2 font-medium">Mike D.</span>
                        <span className="text-sm text-gray-500 ml-2">Professional Photographer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Perfect for camera equipment! I use these on all my lenses and filters. They're gentle enough 
                        for coated lenses but effective at removing fingerprints and dust. The 6x6 size is ideal 
                        for camera bags. Highly recommend for any photographer.
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
                        <span className="ml-2 font-medium">Jennifer L.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Great for phone screens too! I use these on my smartphone and tablet. No more smudges or 
                        streaks. The grey ones don't show dirt as much as the white ones. Will definitely order more.
                      </p>
                      <span className="text-xs text-gray-500">Posted 3 days ago</span>
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