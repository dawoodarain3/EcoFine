"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Leaf, Droplets, Recycle } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// 10x10 Images - using placeholders since actual images aren't provided
import black10x10main from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/Main.png"
import black10x10_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/01.png"
import black10x10_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Black/02.png"

import gray10x10main from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/Main.png"
import gray10x10_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/01.png"
import gray10x10_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/02.png"

import white10x10main from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/Main.png"
import white10x10_1 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/01.png"
import white10x10_2 from "../../../../public/Microfiber Suede Lens Cleaning Cloth/White/02.png"

export default function SuedeLensCleaningCloth10x10Page() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedImage, setSelectedImage] = useState(white10x10main)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["White", "Grey", "Black"]
  const availableColors = ["White", "Grey", "Black"]
  
  const productInfo = {
    name: "EcoFine Microfiber Suede Lens Cleaning Cloth",
    size: '10" x 10"',
    price: "$15.98",
    packSize: "Pack of 10",
    description: "Ultra-soft suede microfiber for delicate surfaces",
    weight: "280 GSM",
    dimensions: "10\" x 10\" (25cm x 25cm)",
    useCase: "Large screens, professional equipment, commercial cleaning"
  }

  // Map colors to their main images and thumbnail arrays
  const imageData = {
    White: {
      main: white10x10main,
      thumbnails: [white10x10_1, white10x10_2]
    },
    Grey: {
      main: gray10x10main,
      thumbnails: [gray10x10_1, gray10x10_2]
    },
    Black: {
      main: black10x10main,
      thumbnails: [black10x10_1, black10x10_2]
    }
  }

  const handleColorChange = (color) => {
    if (availableColors.includes(color)) {
      setSelectedColor(color)
      const newImage = imageData[color]?.main || white10x10main
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
            <span>Suede Lens Cleaning Cloth</span>
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
                  <span className="ml-2 text-sm text-gray-500">(142 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">{productInfo.price}</span>
                  <span className="text-sm text-gray-500 ml-2">{productInfo.packSize}</span>
                </div>
                <p className="text-gray-600">
                  Premium 10" x 10" suede microfiber lens cleaning cloths designed for large delicate surfaces. 
                  Perfect for professional monitors, large camera equipment, tablets, and commercial cleaning applications. 
                  Ultra-soft suede texture provides superior cleaning without scratching.
                </p>
              </div>

              {/* Size Information */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Professional Size Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Dimensions:</span>
                    <p className="text-gray-600">{productInfo.dimensions}</p>
                  </div>
                  <div>
                    <span className="font-medium">Weight:</span>
                    <p className="text-gray-600">{productInfo.weight}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium">Best for:</span>
                    <p className="text-gray-600">{productInfo.useCase}</p>
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
                    <span>Each cloth replaces thousands of disposable wipes over its lifetime</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Chemical-free cleaning - no solutions needed</span>
                  </li>
                  <li className="flex items-start">
                    <Droplets className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Machine washable up to 500+ times without losing effectiveness</span>
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
                    <span>Ultra-soft suede microfiber material (280 GSM)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Large 10" x 10" size for professional applications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Safe for all lens coatings and delicate surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Lint-free and streak-free cleaning performance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Machine washable and extremely durable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Applications Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Professional Applications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The 10" x 10" size is specifically designed for professional and commercial use where larger cleaning surfaces are needed.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              <div className="p-6 border rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Large Monitors & Displays</h3>
                <p className="text-gray-600 text-sm">Perfect for cleaning computer monitors, TVs, digital signage, and professional displays without streaking.</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Professional Photography</h3>
                <p className="text-gray-600 text-sm">Ideal for large camera lenses, studio equipment, and professional optical instruments requiring gentle care.</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Commercial Cleaning</h3>
                <p className="text-gray-600 text-sm">Excellent for office buildings, retail stores, and facilities requiring efficient cleaning of glass and electronic surfaces.</p>
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
                  <h3 className="text-xl font-bold">EcoFine Microfiber Suede Lens Cleaning Cloth - Professional 10" x 10"</h3>
                  <p>
                    Our premium 10" x 10" suede microfiber lens cleaning cloths represent the professional standard for 
                    cleaning large delicate optical surfaces. The generous size makes them ideal for commercial applications, 
                    professional photography, and any situation where efficient cleaning of larger surfaces is required.
                  </p>
                  <p>
                    The ultra-soft suede texture is engineered to be gentler than traditional microfiber while maintaining 
                    superior cleaning performance. Each cloth features 280 GSM weight for optimal durability and cleaning 
                    effectiveness, with ultrasonic-cut edges that prevent fraying and ensure long-lasting use.
                  </p>
                  <p>
                    Unlike disposable wipes that can leave residue or damage coated surfaces, these reusable cloths use 
                    electrostatic properties to attract and trap dust, oils, and particles without scratching. The larger 
                    size allows for more efficient cleaning with fewer passes, reducing the risk of introducing scratches 
                    from repeated contact.
                  </p>
                  <h4 className="font-bold mt-6">Ideal Applications:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-600">Professional Use:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Professional camera lenses and equipment</li>
                        <li>Studio lighting and optical equipment</li>
                        <li>Broadcast and film equipment</li>
                        <li>Laboratory optical instruments</li>
                        <li>Medical equipment with optical components</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-600">Commercial Applications:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Large computer monitors and displays</li>
                        <li>Digital signage and kiosks</li>
                        <li>Retail display cases and windows</li>
                        <li>Office cleaning and maintenance</li>
                        <li>Educational institution equipment</li>
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
                      <h4 className="font-bold text-green-600 mb-3">Physical Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Size</span>
                          <span>10" x 10" (25cm x 25cm)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Weight</span>
                          <span>280 GSM</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Material</span>
                          <span>Premium Suede Microfiber</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Edge Finish</span>
                          <span>Ultrasonic cut edges</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-600 mb-3">Product Details</h4>
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
                          <span className="font-medium">Price</span>
                          <span>$15.98</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Washable</span>
                          <span>500+ wash cycles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-3">Performance Characteristics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Lint Performance</span>
                          <span>100% Lint-free</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Streak Performance</span>
                          <span>Streak-free cleaning</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Chemical Compatibility</span>
                          <span>No chemicals required</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Coating Safety</span>
                          <span>Safe for all coatings</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Static Properties</span>
                          <span>Anti-static treatment</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Absorption</span>
                          <span>High oil absorption</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Care Instructions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Machine wash in warm water (104°F/40°C)</li>
                      <li>Use mild detergent - no fabric softener or bleach</li>
                      <li>Air dry or tumble dry on low heat</li>
                      <li>Do not iron or dry clean</li>
                      <li>Store in clean, dry environment</li>
                      <li>Separate from lint-producing fabrics when washing</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="sustainability" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Sustainability Impact</h3>

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