"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Leaf, Droplets, Recycle } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Blue images
import bluemain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue/Main.png"
import blue1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue/01.png"
import blue2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue/02.png"
import blue3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue/03.png"
import blue4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue/04.png"

// Green images
import greenmain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Green/Main page.png"
import green1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Green/01.png"
import green2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Green/02.png"
import green3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Green/03.png"
import green4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Green/04.png"

// Red images
import redmain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Red/Main.png"
import red1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Red/01.png"
import red2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Red/02.png"
import red3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Red/03.png"
import red4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Red/04.png"

// Yellow images
import yellowmain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Yellow/Main.png"
import yellow1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Yellow/01.png"
import yellow2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Yellow/02.png"
import yellow3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Yellow/03.png"
import yellow4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Yellow/04.png"

// Gray images
import graymain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Gray/main.png"
import gray1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Gray/01.png"
import gray2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Gray/02.png"
import gray3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Gray/03.png"
import gray4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Gray/04.png"

// Pink images
import pinkmain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Pink/Main.png"
import pink1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Pink/01.png"
import pink2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Pink/02.png"
import pink3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Pink/03.png"
import pink4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Pink/04.png"

// White images
import whitemain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/White/main.png"
import white1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/White/01.png"
import white2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/White/02.png"
import white3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/White/03.png"
import white4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/White/04.png"

// Dark Royal Blue images
import drbmain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Dark Royal Blue/Main.png"
import drb1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Dark Royal Blue/01.png"
import drb2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Dark Royal Blue/02.png"
import drb3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Dark Royal Blue/03.png"
import drb4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Dark Royal Blue/04.png"

// Purple images
import purplemain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Purple/Main.png"
import purple1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Purple/01.png"
import purple2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Purple/02.png"
import purple3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Purple/03.png"
import purple4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Purple/04.png"

// Orange images
import orangemain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Orange/Main.png"
import orange1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Orange/01.png"
import orange2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Orange/02.png"
import orange3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Orange/03.png"
import orange4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Orange/04.png"

// Black images
import blackmain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black/Main.png"
import black1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black/01.png"
import black2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black/02.png"
import black3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black/03.png"
import black4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black/04.png"

// Brown images
import brownmain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Brown/Main.png"
import brown1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Brown/01.png"
import brown2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Brown/02.png"
import brown3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Brown/03.png"
import brown4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Brown/04.png"

// Blue Green Yellow Red Pack images
import bgyrmain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue Green Yellow Red/main.png"
import bgyr1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue Green Yellow Red/01.png"
import bgyr2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue Green Yellow Red/02.png"
import bgyr3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue Green Yellow Red/03.png"
import bgyr4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue Green Yellow Red/04.png"

// Black Gray Pack images 
import bgmain from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black Grey/Main.png"
import bg1 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black Grey/01.png"
import bg2 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black Grey/02.png"
import bg3 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black Grey/03.png"
import bg4 from "../../../../public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Black Grey/04.png"

export default function MicrofiberCloth16x16Page() {
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
    "Dark Royal Blue",
    "Brown",
  ]

  const colorPacks = ["Blue/Green/Yellow/Red Pack", "Black/Grey Pack"]

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
    Purple: {
      main: purplemain,
      thumbnails: [purple1, purple2, purple3, purple4]
    },
    Pink: {
      main: pinkmain,
      thumbnails: [pink1, pink2, pink3, pink4]
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
      main: whitemain,
      thumbnails: [white1, white2, white3, white4]
    },
    Gray: {
      main: graymain,
      thumbnails: [gray1, gray2, gray3, gray4]
    },
    "Dark Royal Blue": {
      main: drbmain,
      thumbnails: [drb1, drb2, drb3, drb4]
    },
    Brown: {
      main: brownmain,
      thumbnails: [brown1, brown2, brown3, brown4]
    },
    "Blue/Green/Yellow/Red Pack": {
      main: bgyrmain,
      thumbnails: [bgyr1, bgyr2, bgyr3, bgyr4]
    },
    "Black/Grey Pack": {
      main: bgmain,
      thumbnails: [bg1, bg2, bg3, bg4]
    }
  }

  const handleColorChange = (color) => {
    setSelectedColor(color)
    setSelectedImage(colorImageData[color]?.main || "/placeholder.svg?height=600&width=600")
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
    return ["/placeholder.svg?height=150&width=150&text=View+1", "/placeholder.svg?height=150&width=150&text=View+2", "/placeholder.svg?height=150&width=150&text=View+3", "/placeholder.svg?height=150&width=150&text=View+4"]
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
            <span>16" x 16" Microfiber Cloth</span>
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
                  alt={`16x16 Microfiber Cloth - ${selectedColor}`}
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
                  <h1 className="text-3xl font-bold mr-3">EcoFine Microfiber Cloth - 16" x 16"</h1>
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
                  <span className="ml-2 text-sm text-gray-500">(124 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$24.99</span>
                  <span className="text-sm text-gray-500 ml-2">Pack of 12</span>
                </div>
                <p className="text-gray-600">
                  Premium quality 16" x 16" (40cm x 40cm) microfiber cloth with 300 GSM weight. Perfect for all-purpose
                  cleaning in commercial and residential settings. Each pack contains 12 pieces.
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
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mb-4">
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
                <h3 className="text-sm font-medium mb-3">Color Packs</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {colorPacks.map((pack) => (
                    <button
                      key={pack}
                      className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                        selectedColor === pack
                          ? "border-green-600 bg-green-50 text-green-600"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleColorChange(pack)}
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
                    <span>Premium 300 GSM weight for superior cleaning</span>
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
                  <h3 className="text-xl font-bold">EcoFine Microfiber Cloth - 16" x 16"</h3>
                  <p>
                    Our premium 16" x 16" microfiber cloths are designed for professional cleaning applications across
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
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
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
                        <span>80% Polyester, 20% Polyamide</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Weight</span>
                        <span>300 GSM</span>
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
                       <span>12 solid colors, 2 color packs</span>
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
                       Our microfiber cloths reduce water usage by up to 90% compared to traditional cleaning methods.
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
                       Each EcoFine microfiber cloth can be washed and reused up to 500 times, replacing hundreds of
                       disposable cleaning products. This significantly reduces waste and promotes sustainable
                       consumption patterns.
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
                           Using our microfiber cloths can save up to 90% of water compared to traditional cleaning
                           methods, contributing significantly to water conservation efforts.
                         </p>
                       </div>
                     </li>
                     <li className="flex items-start">
                       <Recycle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                       <div>
                         <span className="font-medium">Waste Reduction:</span>
                         <p className="text-sm text-gray-600">
                           Each cloth replaces hundreds of disposable paper towels or wipes, significantly reducing
                           landfill waste and the environmental impact of manufacturing disposable products.
                         </p>
                       </div>
                     </li>
                     <li className="flex items-start">
                       <Leaf className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                       <div>
                         <span className="font-medium">Chemical Reduction:</span>
                         <p className="text-sm text-gray-600">
                           The unique microfiber structure allows for effective cleaning with minimal or no chemicals,
                           reducing harmful chemical runoff into waterways and promoting healthier indoor air quality.
                         </p>
                       </div>
                     </li>
                   </ul>
                 </div>

                 <div className="mt-6 bg-green-50 p-4 rounded-lg">
                   <h4 className="font-bold mb-2">Our Commitment</h4>
                   <p className="text-sm text-gray-600">
                     At EcoFine Products, we're committed to creating cleaning solutions that not only perform
                     exceptionally well but also contribute positively to environmental sustainability. Our microfiber
                     cloths are part of our broader mission to support the UN Sustainable Development Goals and create
                     a cleaner, healthier planet.
                   </p>
                   <div className="mt-4">
                     <Link
                       href="/sdg-commitment"
                       className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center"
                     >
                       Learn more about our SDG commitment
                       <ChevronRight className="h-4 w-4 ml-1" />
                     </Link>
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
                   <span className="text-lg font-medium">4.9 out of 5</span>
                   <span className="text-sm text-gray-500 ml-2">(124 reviews)</span>
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
                       <span className="ml-2 font-medium">John D.</span>
                       <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-2">
                       These microfiber cloths are excellent quality. We use them in our commercial cleaning business
                       and they hold up well after multiple washes. The blue color is vibrant and doesn't fade.
                     </p>
                     <span className="text-xs text-gray-500">Posted 2 months ago</span>
                   </div>

                   <div className="border-b pb-6">
                     <div className="flex items-center mb-2">
                       <div className="flex">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                         ))}
                       </div>
                       <span className="ml-2 font-medium">Sarah M.</span>
                       <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-2">
                       I've tried many microfiber cloths and these are by far the best. The 300 GSM weight is perfect -
                       not too thick, not too thin. They clean glass surfaces without leaving streaks.
                     </p>
                     <span className="text-xs text-gray-500">Posted 1 month ago</span>
                   </div>

                   <div>
                     <div className="flex items-center mb-2">
                       <div className="flex">
                         {[...Array(4)].map((_, i) => (
                           <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                         ))}
                         <Star className="h-4 w-4 text-gray-300" />
                       </div>
                       <span className="ml-2 font-medium">Michael T.</span>
                       <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-2">
                       Good quality cloths that work well for our hotel housekeeping staff. Would prefer if they came
                       in more color options for our color-coding system, but overall very satisfied.
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
           <h2 className="text-2xl font-bold mb-8">Related Products</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
               <Link href="/products/microfiber-cloths/12x12">
                 <div className="relative">
                   <Image
                     src="/placeholder.svg?height=300&width=300"
                     alt="12x12 Microfiber Cloth"
                     width={300}
                     height={300}
                     className="object-cover w-full h-48"
                   />
                   <div className="absolute top-2 right-2 flex space-x-1">
                     <Image
                       src="/placeholder.svg?height=24&width=24&text=SDG+6"
                       alt="SDG 6"
                       width={24}
                       height={24}
                       className="rounded-full"
                     />
                   </div>
                 </div>
                 <div className="p-4">
                   <h3 className="font-medium">EcoFine Microfiber Cloth - 12" x 12"</h3>
                   <p className="text-sm text-gray-500 mb-2">320 GSM, Pack of 12</p>
                   <span className="font-bold">$19.99</span>
                 </div>
               </Link>
             </div>

             <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
               <Link href="#">
                 <div className="relative">
                   <Image
                     src="/placeholder.svg?height=300&width=300"
                     alt="Waffle Weave Microfiber Cloth"
                     width={300}
                     height={300}
                     className="object-cover w-full h-48"
                   />
                   <div className="absolute top-2 right-2 flex space-x-1">
                     <Image
                       src="/placeholder.svg?height=24&width=24&text=SDG+12"
                       alt="SDG 12"
                       width={24}
                       height={24}
                       className="rounded-full"
                     />
                   </div>
                 </div>
                 <div className="p-4">
                   <h3 className="font-medium">Waffle Weave Microfiber Cloth</h3>
                   <p className="text-sm text-gray-500 mb-2">400 GSM, Pack of 12</p>
                   <span className="font-bold">$29.99</span>
                 </div>
               </Link>
             </div>

             <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
               <Link href="#">
                 <div className="relative">
                   <Image
                     src="/placeholder.svg?height=300&width=300"
                     alt="Glass Cleaning Microfiber Cloth"
                     width={300}
                     height={300}
                     className="object-cover w-full h-48"
                   />
                   <div className="absolute top-2 right-2 flex space-x-1">
                     <Image
                       src="/placeholder.svg?height=24&width=24&text=SDG+6"
                       alt="SDG 6"
                       width={24}
                       height={24}
                       className="rounded-full"
                     />
                   </div>
                 </div>
                 <div className="p-4">
                   <h3 className="font-medium">Glass Cleaning Microfiber Cloth</h3>
                   <p className="text-sm text-gray-500 mb-2">280 GSM, Pack of 12</p>
                   <span className="font-bold">$22.99</span>
                 </div>
               </Link>
             </div>

             <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
               <Link href="#">
                 <div className="relative">
                   <Image
                     src="/placeholder.svg?height=300&width=300"
                     alt="Microfiber Cleaning Kit"
                     width={300}
                     height={300}
                     className="object-cover w-full h-48"
                   />
                   <div className="absolute top-2 right-2 flex space-x-1">
                     <Image
                       src="/placeholder.svg?height=24&width=24&text=SDG+3"
                       alt="SDG 3"
                       width={24}
                       height={24}
                       className="rounded-full"
                     />
                   </div>
                 </div>
                 <div className="p-4">
                   <h3 className="font-medium">Microfiber Cleaning Kit</h3>
                   <p className="text-sm text-gray-500 mb-2">Assorted, Pack of 24</p>
                   <span className="font-bold">$39.99</span>
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