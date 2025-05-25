"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Leaf, Droplets, Recycle } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Blue images
import bluemain from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Blue/Main.png"
import blue1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Blue/01.png"
import blue2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Blue/02.png"
import blue3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Blue/03.png"
import blue4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Blue/04.png"

// Green images
import greenmain from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Green/Main.png"
import green1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Green/01.png"
import green2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Green/02.png"
import green3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Green/03.png"
import green4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Green/04.png"

// Yellow images
import yellowmain from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Yellow/Main.png"
import yellow1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Yellow/01.png"
import yellow2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Yellow/02.png"
import yellow3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Yellow/03.png"
import yellow4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Yellow/04.png"

// Red images
import redmain from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Red/Main.png"
import red1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Red/01.png"
import red2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Red/02.png"
import red3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Red/03.png"
import red4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Red/04.png"

// Gray images
import graymain from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Gray/Main.png"
import gray1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Gray/01.png"
import gray2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Gray/02.png"
import gray3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Gray/03.png"
import gray4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Gray/04.png"

// Black images
import blackmain from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Black/Main.png"
import black1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Black/01.png"
import black2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Black/02.png"
import black3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Black/03.png"
import black4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/Black/04.png"

// White images
import whitemain from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/White/Main.png"
import white1 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/White/01.png"
import white2 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/White/02.png"
import white3 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/White/03.png"
import white4 from "../../../../public/EcoFine Microfiber Cloth/Microfiber Cloth - 12x12 300gsm-50packs/White/04.png"

export default function MicrofiberCloth12x12_50PackPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Blue")
  const [selectedImage, setSelectedImage] = useState(bluemain)
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
  ]

  const availableColors = ["Blue", "Green", "Yellow", "Red", "Gray", "Black", "White"]

  // Map colors to their main images and thumbnail arrays
  const colorImageData = {
    Blue: {
      main: bluemain,
      thumbnails: [blue1, blue2, blue3, blue4]
    },
    Green: {
      main: greenmain,
      thumbnails: [green1, green2, green3, green4]
    },
    Yellow: {
      main: yellowmain,
      thumbnails: [yellow1, yellow2, yellow3, yellow4]
    },
    Red: {
      main: redmain,
      thumbnails: [red1, red2, red3, red4]
    },
    Gray: {
      main: graymain,
      thumbnails: [gray1, gray2, gray3, gray4]
    },
    Black: {
      main: blackmain,
      thumbnails: [black1, black2, black3, black4]
    },
    White: {
      main: whitemain,
      thumbnails: [white1, white2, white3, white4]
    },
    Purple: {
      main: "/placeholder.svg?height=600&width=600&text=Purple+12x12+50Pack",
      thumbnails: [
        "/placeholder.svg?height=600&width=600&text=Purple+View+1",
        "/placeholder.svg?height=600&width=600&text=Purple+View+2",
        "/placeholder.svg?height=600&width=600&text=Purple+View+3",
        "/placeholder.svg?height=600&width=600&text=Purple+View+4"
      ]
    },
    Pink: {
      main: "/placeholder.svg?height=600&width=600&text=Pink+12x12+50Pack",
      thumbnails: [
        "/placeholder.svg?height=600&width=600&text=Pink+View+1",
        "/placeholder.svg?height=600&width=600&text=Pink+View+2",
        "/placeholder.svg?height=600&width=600&text=Pink+View+3",
        "/placeholder.svg?height=600&width=600&text=Pink+View+4"
      ]
    },
    Orange: {
      main: "/placeholder.svg?height=600&width=600&text=Orange+12x12+50Pack",
      thumbnails: [
        "/placeholder.svg?height=600&width=600&text=Orange+View+1",
        "/placeholder.svg?height=600&width=600&text=Orange+View+2",
        "/placeholder.svg?height=600&width=600&text=Orange+View+3",
        "/placeholder.svg?height=600&width=600&text=Orange+View+4"
      ]
    }
  }

  const handleColorChange = (color) => {
    if (availableColors.includes(color)) {
      setSelectedColor(color)
      setSelectedImage(colorImageData[color]?.main || bluemain)
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
            <Link href="/products/microfiber-cloths" className="hover:text-green-600">
              Microfiber Cloths
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>12" x 12" Microfiber Cloth - 50 Pack</span>
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
                  alt={`12x12 Microfiber Cloth 50-Pack - ${selectedColor}`}
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
                <div className="flex items-center mb-2">
                  <h1 className="text-3xl font-bold mr-3">EcoFine Microfiber Cloth - 12" x 12" - 300 GSM</h1>
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
                  <span className="ml-2 text-sm text-gray-500">(189 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$74.99</span>
                  <span className="text-sm text-gray-500 ml-2">Pack of 50</span>
                  <div className="text-sm text-green-600 font-medium">Save 25% vs individual packs</div>
                </div>
                <p className="text-gray-600">
                  Bulk pack of premium quality 12" x 12" (30cm x 30cm) microfiber cloths with 300+ GSM weight. 
                  Ideal for commercial cleaning services and facilities requiring compact, efficient cleaning cloths. 
                  Each bulk pack contains 50 pieces.
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
                    <span>Washable up to 500 times, replacing thousands of disposable alternatives</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Compact size reduces storage space and transportation costs</span>
                  </li>
                </ul>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="grid grid-cols-5 gap-2 mb-4">
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
                    <span>Compact 12" x 12" size for efficient cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Premium 300+ GSM weight for superior absorption</span>
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
                    <span>Bulk pack provides 25% cost savings</span>
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
                  <h3 className="text-xl font-bold">EcoFine Microfiber Cloth - 12" x 12" - Bulk 50 Pack</h3>
                  <p>
                    Our bulk 50-pack of compact 12" x 12" microfiber cloths is designed for commercial cleaning operations, 
                    healthcare facilities, and businesses that need efficient, manageable cleaning tools. The smaller size 
                    provides excellent control and maneuverability while maintaining superior cleaning performance.
                  </p>
                  <p>
                    The unique blend of 80% polyester and 20% polyamide creates a cloth that effectively captures dust,
                    dirt, and bacteria without the need for harsh chemicals. The ultra-fine denier (0.1-0.2) ensures
                    that even the smallest particles are trapped within the fibers.
                  </p>
                  <p>
                    Each cloth features four thread overlock stitching around the edges to prevent fraying and extend
                    the product lifespan. These cloths can be machine washed up to 500 times, making them an economical
                    and eco-friendly choice for high-volume cleaning operations.
                  </p>
                  <h4 className="font-bold mt-6">Ideal for:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Detail cleaning and precision tasks</li>
                    <li>Healthcare and medical facilities</li>
                    <li>Food service and kitchen cleaning</li>
                    <li>Automotive interior detailing</li>
                    <li>Electronics and equipment cleaning</li>
                    <li>Hospitality housekeeping operations</li>
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
                        <span>12" x 12" (30cm x 30cm)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Material Blend</span>
                        <span>80% Polyester, 20% Polyamide</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Weight</span>
                        <span>300+ GSM</span>
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
                        <span>50 pieces</span>
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
                        <span>7 solid colors</span>
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
                        Our 12x12 microfiber cloths reduce water usage by up to 90% compared to traditional cleaning methods.
                        The compact size enables precision cleaning with minimal water waste while maintaining hygiene standards.
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
                        Each 12x12 microfiber cloth can be washed and reused up to 500 times, replacing thousands of
                        disposable cleaning products. Bulk packaging reduces waste and costs significantly.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold mb-3">Environmental Impact - Compact Efficiency</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Recycle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Reduced Storage Footprint:</span>
                          <p className="text-sm text-gray-600">
                            Compact 12x12 size reduces storage requirements by 30% compared to larger cloths, 
                            optimizing warehouse space and reducing shipping costs.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Droplets className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Precision Water Conservation:</span>
                          <p className="text-sm text-gray-600">
                            Smaller size enables targeted cleaning with minimal water usage, perfect for detail work 
                            and areas requiring careful moisture control.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Leaf className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Enhanced Efficiency:</span>
                          <p className="text-sm text-gray-600">
                            Bulk packaging of 50 pieces reduces packaging waste per cloth by 60% while providing 
                            excellent value for high-volume cleaning operations.
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
                    <span className="text-lg font-medium">4.9 out of 5</span>
                    <span className="text-sm text-gray-500 ml-2">(189 reviews)</span>
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
                       <span className="ml-2 font-medium">Carol M.</span>
                       <span className="text-sm text-gray-500 ml-2">Healthcare Facility Manager</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-2">
                       Perfect size for our medical facility! The 12x12 cloths are ideal for detailed cleaning around equipment 
                       and in patient rooms. The bulk pack gives us great value and the quality is consistently excellent. 
                       Our infection control team loves the color-coding system.
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
                       <span className="ml-2 font-medium">James R.</span>
                       <span className="text-sm text-gray-500 ml-2">Restaurant Owner</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-2">
                       These are perfect for our kitchen operations. The compact size makes them easy to handle for detail 
                       cleaning around prep areas and equipment. They absorb spills quickly and clean surfaces without leaving 
                       streaks. The bulk pricing saves us a lot compared to buying smaller packs.
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
                       <span className="ml-2 font-medium">Michelle T.</span>
                       <span className="text-sm text-gray-500 ml-2">Automotive Detailer</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-2">
                       Excellent for automotive interior work! The 12x12 size is perfect for dashboard cleaning, console work, 
                       and getting into tight spaces. They don't scratch delicate surfaces and the bulk pack keeps our costs down. 
                       Will definitely reorder when we run low.
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