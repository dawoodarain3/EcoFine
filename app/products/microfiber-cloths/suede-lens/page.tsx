"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Leaf, Droplets, Recycle } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// 6x6 Images
import black6x6main from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/Main.png"
import black6x6_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/01.png"
import black6x6_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/02.png"

import gray6x6main from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/Main.png"
import gray6x6_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/01.png"
import gray6x6_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/02.png"

import white6x6main from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/Main.png"
import white6x6_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/01.png"
import white6x6_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/02.png"

// 8x8 Images
import black8x8main from "../../../../public/Microfiber Suede Lens Cleaning Cloth 8x8/Black/Main.png"
import black8x8_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth 8x8/Black/01.png"
import black8x8_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth 8x8/Black/02.png"

import gray8x8main from "../../../../public/Microfiber Suede Lens Cleaning Cloth 8x8/Gray/Main.png"
import gray8x8_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth 8x8/Gray/01.png"
import gray8x8_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth 8x8/Gray/02.png"

import white8x8main from "../../../../public/Microfiber Suede Lens Cleaning Cloth 8x8/White/Main.png"
import white8x8_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth 8x8/White/01.png"
import white8x8_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth 8x8/White/02.png"

export default function SuedeLensCleaningClothPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedSize, setSelectedSize] = useState("6x6")
  const [selectedImage, setSelectedImage] = useState(white6x6main)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["White", "Grey", "Black"]
  const availableColors = ["White", "Grey", "Black"]
  
  const sizes = [
    {
      id: "6x6",
      name: '6" x 6"',
      price: "$18.99",
      description: "Compact size perfect for personal use",
      weight: "220 GSM",
      dimensions: "6\" x 6\" (15cm x 15cm)",
      useCase: "Personal eyeglasses, smartphones, camera equipment"
    },
    {
      id: "8x8",
      name: '8" x 8"',
      price: "$22.99",
      description: "Professional size for commercial use",
      weight: "250 GSM",
      dimensions: "8\" x 8\" (20cm x 20cm)",
      useCase: "Professional photography, large screens, commercial cleaning"
    }
  ]

  // Map sizes and colors to their main images and thumbnail arrays
  const imageData = {
    "6x6": {
      White: {
        main: white6x6main,
        thumbnails: [white6x6_1, white6x6_2]
      },
      Grey: {
        main: gray6x6main,
        thumbnails: [gray6x6_1, gray6x6_2]
      },
      Black: {
        main: black6x6main,
        thumbnails: [black6x6_1, black6x6_2]
      }
    },
    "8x8": {
      White: {
        main: white8x8main,
        thumbnails: [white8x8_1, white8x8_2]
      },
      Grey: {
        main: gray8x8main,
        thumbnails: [gray8x8_1, gray8x8_2]
      },
      Black: {
        main: black8x8main,
        thumbnails: [black8x8_1, black8x8_2]
      }
    }
  }

  const handleColorChange = (color) => {
    if (availableColors.includes(color)) {
      setSelectedColor(color)
      const newImage = imageData[selectedSize][color]?.main || white6x6main
      setSelectedImage(newImage)
      setSelectedImageIndex(0)
    }
  }

  const handleSizeChange = (sizeId) => {
    setSelectedSize(sizeId)
    const newImage = imageData[sizeId][selectedColor]?.main || white6x6main
    setSelectedImage(newImage)
    setSelectedImageIndex(0)
  }

  const handleThumbnailClick = (index) => {
    const currentImageData = imageData[selectedSize][selectedColor]
    if (currentImageData) {
      if (index === 0) {
        setSelectedImage(currentImageData.main)
      } else {
        setSelectedImage(currentImageData.thumbnails[index - 1])
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
    const currentImageData = imageData[selectedSize][selectedColor]
    if (currentImageData) {
      return [currentImageData.main, ...currentImageData.thumbnails]
    }
    return []
  }

  const getCurrentSize = () => {
    return sizes.find(size => size.id === selectedSize)
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
            <Link href="/products/lens-cleaning-cloths" className="hover:text-green-600">
              Lens Cleaning Cloths
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
                  alt={`Microfiber Suede Lens Cleaning Cloth ${getCurrentSize()?.name} - ${selectedColor}`}
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
                      alt={`${selectedColor} ${getCurrentSize()?.name} view ${i + 1}`}
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
                    EcoFine Microfiber Suede Lens Cleaning Cloth
                  </h1>
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
                  <span className="text-2xl font-bold">{getCurrentSize()?.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Pack of 10</span>
                </div>
                <p className="text-gray-600">
                  Premium suede microfiber lens cleaning cloths designed for delicate surfaces. Perfect for eyeglasses, 
                  camera lenses, smartphones, tablets, and other optical equipment. Ultra-soft and lint-free.
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="grid grid-cols-1 gap-3 mb-4">
                  {sizes.map((size) => (
                    <div
                      key={size.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedSize === size.id
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleSizeChange(size.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <span className={`text-lg font-semibold ${
                            selectedSize === size.id ? "text-green-600" : "text-gray-900"
                          }`}>
                            {size.name}
                          </span>
                          <span className={`ml-2 text-sm ${
                            selectedSize === size.id ? "text-green-600" : "text-gray-500"
                          }`}>
                            ({size.weight})
                          </span>
                        </div>
                        <span className={`text-lg font-bold ${
                          selectedSize === size.id ? "text-green-600" : "text-gray-900"
                        }`}>
                          {size.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{size.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{size.useCase}</p>
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
                    <span>Available in two convenient sizes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Size Comparison Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Size Comparison</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect size for your cleaning needs. Both sizes feature the same premium suede microfiber quality.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {sizes.map((size) => (
                <div 
                  key={size.id}
                  className={`p-6 border rounded-lg transition-colors ${
                    selectedSize === size.id ? 'border-green-600 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{size.name}</h3>
                    <p className="text-gray-600 mb-2">{size.description}</p>
                    <div className="text-2xl font-bold text-green-600 mb-4">{size.price}</div>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Dimensions:</span> {size.dimensions}</p>
                      <p><span className="font-medium">Weight:</span> {size.weight}</p>
                      <p><span className="font-medium">Best for:</span> {size.useCase}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                  <h3 className="text-xl font-bold">EcoFine Microfiber Suede Lens Cleaning Cloth</h3>
                  <p>
                    Our premium suede microfiber lens cleaning cloths are specifically designed for cleaning delicate 
                    optical surfaces without scratching or damaging protective coatings. The ultra-soft suede texture 
                    gently removes fingerprints, dust, and smudges while being completely lint-free.
                  </p>
                  <p>
                    Available in two convenient sizes to meet different needs: the compact 6" x 6" size perfect for 
                    personal use and portability, and the larger 8" x 8" professional size ideal for commercial 
                    applications and larger surfaces.
                  </p>
                  <p>
                    Unlike paper towels or tissues that can scratch lens surfaces, these microfiber cloths use 
                    electrostatic properties to attract and trap dust particles. Each cloth can be machine washed 
                    hundreds of times without losing effectiveness.
                  </p>
                  <h4 className="font-bold mt-6">Perfect for:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-600">6" x 6" Compact Size:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Eyeglasses and reading glasses</li>
                        <li>Smartphone and tablet screens</li>
                        <li>Personal camera equipment</li>
                        <li>Watch faces and jewelry</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-600">8" x 8" Professional Size:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Professional camera lenses</li>
                        <li>Large monitor screens</li>
                        <li>Optical equipment in labs</li>
                        <li>Commercial cleaning applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-600 mb-3">6" x 6" Compact Size</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Size</span>
                          <span>6" x 6" (15cm x 15cm)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Weight</span>
                          <span>220 GSM</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Price</span>
                          <span>$18.99</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-600 mb-3">8" x 8" Professional Size</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Size</span>
                          <span>8" x 8" (20cm x 20cm)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Weight</span>
                          <span>250 GSM</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Price</span>
                          <span>$22.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-3">Common Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Material</span>
                          <span>Premium Suede Microfiber</span>
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
                        significantly. Available in two sizes to minimize waste while meeting specific needs.
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
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer - 6" x 6"</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        These are the best lens cleaning cloths I've ever used! I bought the 6x6 size and they're 
                        perfect for my eyeglasses. So soft and they don't scratch my expensive progressive lenses. 
                        I keep one in my purse, one at work, and several at home. They wash beautifully and last forever.
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
                        <span className="text-sm text-gray-500 ml-2">Professional Photographer - 8" x 8"</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        I use the 8x8 size for my professional camera equipment and they're absolutely perfect! 
                        The larger size allows me to clean multiple lenses efficiently. They're gentle enough 
                        for coated lenses but effective at removing fingerprints and dust. Highly recommend for 
                        any professional photographer.
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
                        <span className="ml-2 font-medium">Jennifer L.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer - 6" x 6"</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Great for phone screens too! I use the 6x6 size on my smartphone and tablet. No more smudges or 
                        streaks. The grey ones don't show dirt as much as the white ones. Perfect size for carrying around.
                      </p>
                      <span className="text-xs text-gray-500">Posted 3 days ago</span>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Dr. Sarah M.</span>
                        <span className="text-sm text-gray-500 ml-2">Optometrist - 8" x 8"</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Perfect for our optical practice! We use the 8x8 size and can clean multiple pairs of 
                        glasses efficiently. Patients love how clean their lenses are after cleaning. We've 
                        completely switched from disposable wipes to these reusable cloths. Great investment!
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

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="border rounded-lg overflow-hidden">
                <Link href="/products/microfiber-cloths/16x16-300gsm-12pack">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
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
                    <p className="text-sm text-gray-500 mb-2">280 GSM, Pack of 6</p>
                    <span className="font-bold">$12.99</span>
                  </div>
                </Link>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <Link href="/products/microfiber-cloths/12x12-320gsm-12pack">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="12x12 Microfiber Cloth"
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="font-medium">EcoFine Microfiber Cloth - 12" x 12"</h3>
                    <p className="text-sm text-gray-500 mb-2">320 GSM, Pack of 12</p>
                    <span className="font-bold">$19.99</span>
                  </div>
                </Link>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <Link href="/products/car-care/detail-400-gsm">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Car Detailing Cloth"
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="font-medium">EcoFine Detail 400 GSM Towel</h3>
                    <p className="text-sm text-gray-500 mb-2">16" x 16", Pack of 6</p>
                    <span className="font-bold">$14.98</span>
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