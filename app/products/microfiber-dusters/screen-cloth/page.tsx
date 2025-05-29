"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Leaf, Droplets, Recycle, Monitor, Smartphone, Tv } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// 14x14 Images - using placeholders since actual images aren't provided
import black14x14main from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/Main.png"
import black14x14_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/01.png"
import black14x14_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/02.png"

import gray14x14main from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/Main.png"
import gray14x14_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/01.png"
import gray14x14_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/02.png"

import white14x14main from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/Main.png"
import white14x14_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/01.png"
import white14x14_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/02.png"

export default function ScreenCleaningCloth14x14Page() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Black")
  const [selectedImage, setSelectedImage] = useState(black14x14main)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["Black", "Grey", "White"]
  const availableColors = ["Black", "Grey", "White"]
  
  const productInfo = {
    name: "EcoFine Microfiber Suede Screen Cleaning Cloth",
    size: '14" x 14"',
    price: "$7.98",
    packSize: "Pack of 3",
    description: "Large format cloth for screens and monitors",
    weight: "300 GSM",
    dimensions: "14\" x 14\" (35cm x 35cm)",
    useCase: "Large monitors, TVs, tablets, all-in-one computers, digital displays"
  }

  // Map colors to their main images and thumbnail arrays
  const imageData = {
    Black: {
      main: black14x14main,
      thumbnails: [black14x14_1, black14x14_2]
    },
    Grey: {
      main: gray14x14main,
      thumbnails: [gray14x14_1, gray14x14_2]
    },
    White: {
      main: white14x14main,
      thumbnails: [white14x14_1, white14x14_2]
    }
  }

  const handleColorChange = (color) => {
    if (availableColors.includes(color)) {
      setSelectedColor(color)
      const newImage = imageData[color]?.main || black14x14main
      setSelectedImage(newImage)
      setSelectedImageIndex(0)
    }
  }

  const handleThumbnailClick = (index) => {
    const currentImageData = imageData[selectedColor]
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
    const currentImageData = imageData[selectedColor]
    if (currentImageData) {
      return [currentImageData.main, ...currentImageData.thumbnails]
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
            <span>Screen Cleaning Cloth</span>
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
                  alt={`${productInfo.name} ${productInfo.size} - ${selectedColor}`}
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
                      alt={`${selectedColor} ${productInfo.size} view ${i + 1}`}
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
                    {productInfo.name}
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
                  <span className="ml-2 text-sm text-gray-500">(289 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">{productInfo.price}</span>
                  <span className="text-sm text-gray-500 ml-2">{productInfo.packSize}</span>
                </div>
                <p className="text-gray-600">
                  Extra-large 14" x 14" suede microfiber screen cleaning cloths designed specifically for large monitors, 
                  TVs, and digital displays. The generous size covers more surface area with each wipe, making it perfect 
                  for efficiently cleaning large screens without streaking or scratching.
                </p>
              </div>

              {/* Large Format Benefits */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Monitor className="h-5 w-5 text-blue-600 mr-2" />
                  Large Format Advantages
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Covers entire laptop screens (up to 17") in a single pass</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Efficient cleaning of 24"-27" monitors with minimal effort</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Perfect for tablet screens, all-in-one computers, and TVs</span>
                  </li>
                </ul>
              </div>

              {/* Screen Compatibility */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Compatible Screen Types</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Monitor className="h-8 w-8 text-gray-600 mb-2" />
                    <span className="text-sm font-medium">Computer Monitors</span>
                    <span className="text-xs text-gray-500">LCD, LED, OLED</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Tv className="h-8 w-8 text-gray-600 mb-2" />
                    <span className="text-sm font-medium">TVs & Displays</span>
                    <span className="text-xs text-gray-500">All screen types</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Smartphone className="h-8 w-8 text-gray-600 mb-2" />
                    <span className="text-sm font-medium">Mobile Devices</span>
                    <span className="text-xs text-gray-500">Tablets, phones</span>
                  </div>
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
                    <span>Replaces hundreds of screen wipes per cloth over its lifetime</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>No cleaning sprays needed - works with just the dry cloth</span>
                  </li>
                  <li className="flex items-start">
                    <Droplets className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Machine washable up to 400+ times without losing effectiveness</span>
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
                        {color === "Black" && <span className="block text-xs">Most Popular</span>}
                        {!isAvailable && <span className="block text-xs">Coming Soon</span>}
                      </button>
                    )
                  })}
                </div>
                <p className="text-xs text-gray-500">
                  💡 Tip: Black cloths are preferred for screens as they don't show lint and provide better contrast for spotting missed areas.
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
                <p className="text-xs text-gray-500 mt-1">Each pack contains 3 cloths</p>
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
                    <span>Extra-large 14" x 14" size for maximum coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Premium 300 GSM suede microfiber construction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Safe for all screen types including anti-glare coatings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Anti-static treatment prevents dust attraction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Lint-free and streak-free cleaning guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Screen Size Guide */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Screen Cleaning Guide</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our 14" x 14" cloths are optimized for efficiently cleaning various screen sizes with minimal passes.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              <div className="p-6 border rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Laptops & Tablets</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Perfect for laptops up to 17" and all tablet sizes. Single pass cleaning with complete coverage.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Recommended for:</p>
                  <p className="text-gray-500">11"-17" laptops, iPads, Android tablets</p>
                </div>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Desktop Monitors</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Efficient cleaning of desktop monitors from 19" to 27" with minimal effort and maximum coverage.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Recommended for:</p>
                  <p className="text-gray-500">19"-27" monitors, all-in-one PCs</p>
                </div>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tv className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">TVs & Large Displays</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Great for smaller TVs and digital displays. For larger TVs, covers significant area per pass.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Recommended for:</p>
                  <p className="text-gray-500">32"-43" TVs, digital signage</p>
                </div>
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
                  <h3 className="text-xl font-bold">EcoFine Microfiber Suede Screen Cleaning Cloth - Large Format 14" x 14"</h3>
                  <p>
                    Our premium 14" x 14" suede microfiber screen cleaning cloths are specifically engineered for modern 
                    digital displays. The extra-large format provides maximum cleaning efficiency, allowing you to clean 
                    entire laptop screens, tablets, and smaller monitors in a single pass while maintaining the gentle 
                    touch required for today's sensitive screen coatings.
                  </p>
                  <p>
                    The 300 GSM suede microfiber construction offers the perfect balance of softness and cleaning power. 
                    Unlike traditional microfiber that can sometimes feel rough on delicate screens, our suede finish 
                    provides an ultra-smooth cleaning experience that's safe for all screen types, including anti-glare 
                    coatings, oleophobic treatments, and privacy filters.
                  </p>
                  <p>
                    Each cloth features anti-static treatment that not only cleans existing dust and fingerprints but 
                    also helps prevent future dust accumulation. The generous size means fewer passes are needed to 
                    clean large surfaces, reducing the risk of scratching from repeated contact while increasing 
                    cleaning efficiency.
                  </p>
                  <h4 className="font-bold mt-6">Perfect Screen Applications:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-600">Optimal Coverage:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Laptop screens (11" to 17") - complete coverage</li>
                        <li>Tablet screens (all sizes) - single pass cleaning</li>
                        <li>Desktop monitors (19" to 24") - efficient cleaning</li>
                        <li>All-in-one computer screens</li>
                        <li>Digital photo frames and e-readers</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-600">Screen Technologies:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>LCD, LED, and OLED displays</li>
                        <li>Touchscreens and interactive displays</li>
                        <li>Anti-glare and matte screen coatings</li>
                        <li>Glossy and high-gloss finishes</li>
                        <li>Privacy screen filters and protectors</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                    <h5 className="font-medium text-yellow-800 mb-2">Pro Cleaning Tips:</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Clean screens when they're cool and powered off</li>
                      <li>• Use gentle circular motions, starting from the center</li>
                      <li>• For stubborn spots, breathe lightly on the area for minimal moisture</li>
                      <li>• Store folded in clean, dry place between uses</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-600 mb-3">Physical Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Size</span>
                          <span>14" x 14" (35cm x 35cm)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Weight</span>
                          <span>300 GSM</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Material</span>
                          <span>Premium Suede Microfiber</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Edge Finish</span>
                          <span>Ultrasonic sealed edges</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Thickness</span>
                          <span>0.8mm (optimal for screens)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-600 mb-3">Product Details</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Pack Size</span>
                          <span>3 pieces</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Colors Available</span>
                          <span>Black, Grey, White</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Price</span>
                          <span>$7.98 per pack</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Price per Cloth</span>
                          <span>$2.66 per cloth</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Washable Cycles</span>
                          <span>400+ wash cycles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-3">Screen Compatibility</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">LCD Screens</span>
                          <span>✓ Safe</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">LED Displays</span>
                          <span>✓ Safe</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">OLED Screens</span>
                          <span>✓ Safe</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Touchscreens</span>
                          <span>✓ Safe</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Anti-Glare Coatings</span>
                          <span>✓ Safe</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Oleophobic Treatment</span>
                          <span>✓ Safe</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Privacy Filters</span>
                          <span>✓ Safe</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Screen Protectors</span>
                          <span>✓ Safe</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Care Instructions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Machine wash in cold water (30°C/86°F) for best results</li>
                      <li>Use mild detergent - avoid fabric softeners and bleach</li>
                      <li>Air dry recommended, or tumble dry on low heat</li>
                      <li>Do not iron or use heat treatment</li>
                      <li>Wash separately from lint-producing fabrics</li>
                      <li>For best screen cleaning, use when completely dry</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="sustainability" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Environmental Impact & Sustainability</h3>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="mr-3">
                          <SDGBadge id={12} title="Responsible Consumption and Production" />
                        </div>
                        <h4 className="font-bold">SDG 12: Responsible Consumption</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Each 10" x 10" EcoFine suede lens cleaning cloth replaces thousands of disposable wipes over its 
                        lifetime. The larger size enables more efficient cleaning, reducing the number of cloths needed 
                        for professional applications while maximizing sustainability impact.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold mb-3">Environmental Benefits</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Recycle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Massive Waste Reduction:</span>
                          <p className="text-sm text-gray-600">
                            Each cloth eliminates the need for approximately 2,500+ disposable lens wipes over its 
                            lifetime, significantly reducing packaging waste and single-use plastic consumption.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Leaf className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Zero Chemical Cleaning:</span>
                          <p className="text-sm text-gray-600">
                            Advanced microfiber technology eliminates the need for cleaning chemicals, reducing 
                            environmental contamination and packaging waste from cleaning solution bottles.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Droplets className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Exceptional Durability:</span>
                          <p className="text-sm text-gray-600">
                            Withstands 500+ machine wash cycles while maintaining cleaning effectiveness, providing 
                            years of reliable service and exceptional return on environmental investment.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Professional Efficiency Impact</h4>
                    <p className="text-sm text-gray-600">
                      The 10" x 10" size enables professional cleaning services and facilities to reduce their 
                      environmental footprint while improving efficiency. Larger coverage area means fewer cloths 
                      needed, less frequent washing, and reduced overall resource consumption.
                    </p>
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