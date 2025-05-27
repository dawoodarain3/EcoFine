"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Zap, Shield, Droplets } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// 18" Microfiber Scrubber Mop Pad images
import image18main from "@/public/Mops/Microfiber Scrubber Mop Pad/18/Main.png"
import image18_1 from "@/public/Mops/Microfiber Scrubber Mop Pad/18/01.png"
import image18_2 from "@/public/Mops/Microfiber Scrubber Mop Pad/18/02.png"
import image18_3 from "@/public/Mops/Microfiber Scrubber Mop Pad/18/03.png"

// 20" Microfiber Scrubber Mop Pad images
import image20main from "@/public/Mops/Microfiber Scrubber Mop Pad/20/Main.png"
import image20_1 from "@/public/Mops/Microfiber Scrubber Mop Pad/20/01.png"
import image20_2 from "@/public/Mops/Microfiber Scrubber Mop Pad/20/02.png"
import image20_3 from "@/public/Mops/Microfiber Scrubber Mop Pad/20/03.png"

// 24" Microfiber Scrubber Mop Pad images
import image24main from "@/public/Mops/Microfiber Scrubber Mop Pad/24/Main.png"
import image24_1 from "@/public/Mops/Microfiber Scrubber Mop Pad/24/01.png"
import image24_2 from "@/public/Mops/Microfiber Scrubber Mop Pad/24/02.png"
import image24_3 from "@/public/Mops/Microfiber Scrubber Mop Pad/24/03.png"

export default function ScrubberMopPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("18\"")
  const [selectedImage, setSelectedImage] = useState(image18main)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const sizes = ["18\"", "20\"", "24\""]

  // Map sizes to their images and specifications
  const sizeImageData = {
    "18\"": {
      main: image18main,
      thumbnails: [image18_1, image18_2, image18_3],
      dimensions: "5.5\" x 18\" (14.5cm x 46cm)",
      price: "$14.98"
    },
    "20\"": {
      main: image20main,
      thumbnails: [image20_1, image20_2, image20_3],
      dimensions: "5.5\" x 20\" (14.5cm x 51cm)",
      price: "$16.98"
    },
    "24\"": {
      main: image24main,
      thumbnails: [image24_1, image24_2, image24_3],
      dimensions: "5.5\" x 24\" (14.5cm x 61cm)",
      price: "$18.98"
    }
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size)
    setSelectedImage(sizeImageData[size]?.main || image18main)
    setSelectedImageIndex(0) // Reset to main image when size changes
  }

  const handleThumbnailClick = (index) => {
    const currentSizeData = sizeImageData[selectedSize]
    if (currentSizeData) {
      if (index === 0) {
        setSelectedImage(currentSizeData.main)
      } else {
        setSelectedImage(currentSizeData.thumbnails[index - 1])
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
    const currentSizeData = sizeImageData[selectedSize]
    if (currentSizeData) {
      return [currentSizeData.main, ...currentSizeData.thumbnails]
    }
    return []
  }

  const getCurrentPrice = () => {
    return sizeImageData[selectedSize]?.price || "$14.98"
  }

  const getCurrentDimensions = () => {
    return sizeImageData[selectedSize]?.dimensions || "5.5\" x 18\" (14.5cm x 46cm)"
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
            <span>EcoFine Microfiber Scrubber Mop Pad</span>
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
                  alt={`EcoFine ${selectedSize} Microfiber Scrubber Mop Pad`}
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
                      alt={`${selectedSize} scrubber view ${i + 1}`}
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
                  <h1 className="text-3xl font-bold mr-3">EcoFine Microfiber Scrubber Mop Pad</h1>
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
                  <span className="ml-2 text-sm text-gray-500">(73 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">{getCurrentPrice()}</span>
                  <span className="text-sm text-gray-500 ml-2">Each</span>
                </div>
                <p className="text-gray-600">
                  Dual-action microfiber scrubber mop pad with integrated black scrubbing strips for tough cleaning jobs. 
                  Professional-grade 990 GSM construction combines gentle microfiber cleaning with aggressive scrubbing power.
                </p>
              </div>

              {/* Dual-Action Benefits */}
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Zap className="h-5 w-5 text-orange-600 mr-2" />
                  Dual-Action Cleaning Power
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                    <span>White microfiber for gentle cleaning and absorption</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                    <span>Black scrubbing strips tackle stubborn dirt and grime</span>
                  </li>
                  <li className="flex items-start">
                    <Droplets className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                    <span>990 GSM weight provides superior absorption capacity</span>
                  </li>
                </ul>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
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
                <p className="text-xs text-gray-500">
                  Current size: {getCurrentDimensions()}
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
                    <span>Dual-action design: microfiber + scrubbing strips</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>White yarn: 80% Polyester, 20% Polyamide blend</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Black scrubbing strips: 100% Polyester</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Ultra-fine 0.1-0.2 denier microfiber</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>990 GSM weight for maximum absorption</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Hook and loop backing attachment</span>
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
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">EcoFine Microfiber Scrubber Mop Pad</h3>
                  <p>
                    Our EcoFine Microfiber Scrubber Mop Pad represents the perfect fusion of gentle microfiber cleaning 
                    and aggressive scrubbing power. This innovative dual-action design tackles the most challenging 
                    cleaning scenarios while maintaining the superior cleaning capabilities of premium microfiber.
                  </p>
                  <p>
                    The white microfiber yarn, crafted from an 80% Polyester and 20% Polyamide blend, provides exceptional 
                    dirt trapping and absorption capabilities. The integrated black scrubbing strips, made from 100% Polyester, 
                    add the mechanical action needed to break down stubborn stains, dried spills, and embedded dirt.
                  </p>
                  <p>
                    With an impressive 990 GSM weight, this scrubber mop pad offers superior absorption capacity compared 
                    to standard microfiber mops. The ultra-fine 0.1-0.2 denier fibers create millions of cleaning edges 
                    that effectively capture and hold dirt, dust, and bacteria at the microscopic level.
                  </p>
                  <h4 className="font-bold mt-6">Dual-Action Technology:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>White microfiber for gentle surface cleaning and maximum absorption</li>
                    <li>Black scrubbing strips for mechanical removal of tough soils</li>
                    <li>Combined action reduces need for harsh chemicals</li>
                    <li>Effective on both smooth and textured surfaces</li>
                  </ul>
                  <h4 className="font-bold mt-6">Professional Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Reduces cleaning time by up to 40%</li>
                    <li>Eliminates need for separate scrubbing tools</li>
                    <li>Machine washable for extended use life</li>
                    <li>Compatible with standard mop frame systems</li>
                    <li>Available in three professional sizes</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-600 mb-3">Material Composition</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">White Microfiber</span>
                          <span>80% Polyester, 20% Polyamide</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Black Scrubbing Strips</span>
                          <span>100% Polyester</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Fiber Denier</span>
                          <span>0.1 - 0.2</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Weight</span>
                          <span>990 GSM</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Backing</span>
                          <span>Hook and Loop</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-600 mb-3">Available Sizes</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">18" Model</span>
                          <span>5.5" x 18" (14.5cm x 46cm)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">20" Model</span>
                          <span>5.5" x 20" (14.5cm x 51cm)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">24" Model</span>
                          <span>5.5" x 24" (14.5cm x 61cm)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Color Scheme</span>
                          <span>White / Black</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Pack Quantity</span>
                          <span>1 piece</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Performance Specifications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Absorption capacity: 8-10 times its weight in liquid</li>
                      <li>Scrubbing power: Removes 99% of surface bacteria</li>
                      <li>Durability: Machine washable up to 300 times</li>
                      <li>Temperature resistance: Up to 140°F/60°C</li>
                      <li>Chemical compatibility: Safe with most cleaning solutions</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="applications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Professional Applications</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-blue-800">Healthcare Facilities</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Hospital corridors and patient rooms</li>
                        <li>Operating room anterooms</li>
                        <li>Laboratory surfaces</li>
                        <li>Emergency department floors</li>
                        <li>Nursing stations and break rooms</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-purple-800">Educational Institutions</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Classroom floors and walkways</li>
                        <li>Cafeteria and food service areas</li>
                        <li>Gymnasium and athletic facilities</li>
                        <li>Restroom and locker room cleaning</li>
                        <li>Administrative offices</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-green-800">Commercial Buildings</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Office lobbies and reception areas</li>
                        <li>Elevator vestibules</li>
                        <li>Conference rooms</li>
                        <li>Break rooms and kitchenettes</li>
                        <li>Retail store floors</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-orange-800">Industrial & Manufacturing</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Production floor cleaning</li>
                        <li>Warehouse and storage areas</li>
                        <li>Loading dock surfaces</li>
                        <li>Equipment staging areas</li>
                        <li>Quality control laboratories</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-3">Optimal Surface Types</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium mb-2">Smooth Surfaces:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Sealed concrete floors</li>
                          <li>Vinyl composition tile (VCT)</li>
                          <li>Epoxy-coated floors</li>
                          <li>Polished stone surfaces</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Textured Surfaces:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Non-slip safety flooring</li>
                          <li>Brushed concrete</li>
                          <li>Textured vinyl flooring</li>
                          <li>Anti-fatigue matting</li>
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
                    <span className="text-lg font-medium">4.9 out of 5</span>
                    <span className="text-sm text-gray-500 ml-2">(73 reviews)</span>
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
                        <span className="ml-2 font-medium">Marcus T.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        These scrubber pads are game-changers! We use them in our manufacturing facility and they handle everything 
                        from light dust to heavy oil stains. The scrubbing strips really make a difference on tough spots.
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
                        <span className="ml-2 font-medium">Dr. Angela R.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Perfect for our clinic floors. The dual-action design means we can clean and scrub in one pass, 
                        which saves time during our daily cleaning routine. Excellent absorption too.
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
                        <span className="ml-2 font-medium">Kevin P.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Been using these for 6 months in our school. They hold up well to daily washing and the 24" size 
                        covers a lot of ground quickly. Students track in all kinds of dirt and these handle it all.
                      </p>
                      <span className="text-xs text-gray-500">Posted 3 weeks ago</span>
                    </div>

                    <div>
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
                        Outstanding quality! The microfiber picks up everything while the scrubbing strips tackle the tough spots. 
                        Our cleaning team loves how much easier these make their job. Highly recommend!
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