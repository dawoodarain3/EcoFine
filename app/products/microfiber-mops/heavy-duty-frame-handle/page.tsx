"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Wrench, Settings, Shield } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Heavy Duty Frame Handle images
import HeavyDutyFrameMain from "../../../../public/Mops/Heavy Duty Frame Handle/01.png"
import HeavyDutyFrame1 from "../../../../public/Mops/Heavy Duty Frame Handle/02.png"
import HeavyDutyFrame2 from "../../../../public/Mops/Heavy Duty Frame Handle/03.png"

export default function HeavyDutyFrameHandlePage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(HeavyDutyFrameMain)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const images = [HeavyDutyFrameMain, HeavyDutyFrame1, HeavyDutyFrame2]

  const handleThumbnailClick = (index) => {
    setSelectedImage(images[index])
    setSelectedImageIndex(index)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
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
            <span>18" Heavy Duty Frame & Handle</span>
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
                  alt="18 Heavy Duty Frame & Handle"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((image, i) => (
                  <div
                    key={i}
                    className={`border rounded-lg overflow-hidden cursor-pointer hover:border-green-600 ${
                      selectedImageIndex === i ? 'border-green-600 ring-2 ring-green-200' : ''
                    }`}
                    onClick={() => handleThumbnailClick(i)}
                  >
                    <Image
                      src={image}
                      alt={`Heavy Duty Frame view ${i + 1}`}
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
                  <h1 className="text-3xl font-bold mr-3">18" Heavy Duty Frame & Handle</h1>
                  <div className="flex space-x-1">
                    <SDGBadge id={9} title="Industry, Innovation and Infrastructure" />
                    <SDGBadge id={12} title="Responsible Consumption and Production" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(47 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$19.98</span>
                  <span className="text-sm text-gray-500 ml-2">Each</span>
                </div>
                <p className="text-gray-600">
                  Professional aluminum frame with high-impact plastic construction and telescoping handle. 
                  Features 360° swivel with locking mechanism and extends from 42" to 70" for optimal ergonomics.
                </p>
              </div>

              {/* Product Benefits */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Wrench className="h-5 w-5 text-blue-600 mr-2" />
                  Professional Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Settings className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Lockable 360° swivel prevents unwanted side-to-side motion</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Heavy-duty aluminum construction for commercial use</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Telescoping handle adjusts for users 5-7ft tall</span>
                  </li>
                </ul>
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
                    <span>Aluminum frame with high-impact plastic components</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Telescoping handle extends 42" to 70"</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Hook and loop attachment system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>360° swivel with locking mechanism</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Adjustable foam grip and hanging hook</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Compatible with 18" microfiber mop pads</span>
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
                <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">18" Heavy Duty Frame & Handle</h3>
                  <p>
                    Our Heavy Duty Frame & Handle system is engineered for professional cleaning environments that demand 
                    reliability and performance. The aluminum construction provides exceptional durability while remaining 
                    lightweight for extended use comfort.
                  </p>
                  <p>
                    The telescoping handle design accommodates users of different heights, extending from 42" to 70" with 
                    a simple twist mechanism. The high-impact plastic components are built to withstand daily commercial use 
                    while maintaining smooth operation.
                  </p>
                  <p>
                    Unlike standard mop frames, our Heavy Duty Frame features a lockable 360° swivel mechanism. This unique 
                    feature allows you to lock the frame in place, preventing unwanted side-to-side motion during cleaning 
                    for more controlled and efficient mopping.
                  </p>
                  <h4 className="font-bold mt-6">Ergonomic Design Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Comfortable high-impact plastic top grip</li>
                    <li>Adjustable foam grip for secondary hand placement</li>
                    <li>Convenient hanging hook integrated into handle top</li>
                    <li>1-inch diameter handle for secure grip</li>
                    <li>Balanced weight distribution for reduced fatigue</li>
                  </ul>
                  <h4 className="font-bold mt-6">Professional Applications:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Commercial cleaning services</li>
                    <li>Healthcare facilities</li>
                    <li>Educational institutions</li>
                    <li>Hospitality industry</li>
                    <li>Industrial facilities</li>
                    <li>Janitorial services</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-bold text-green-600 mb-3">Frame Specifications</h4>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Frame Size</span>
                        <span>4" x 16" (10cm x 41cm)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Frame Material</span>
                        <span>Aluminum with High Impact Plastic</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Attachment System</span>
                        <span>Hook and Loop</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Swivel Feature</span>
                        <span>360° with Lock</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Compatible Pad Size</span>
                        <span>18" Microfiber Mop Pads</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-green-600 mb-3">Handle Specifications</h4>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Handle Length</span>
                        <span>42" to 70" (107cm to 178cm)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Handle Diameter</span>
                        <span>1" (2.5cm)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Handle Material</span>
                        <span>Aluminum with High Impact Plastic</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Extension Mechanism</span>
                        <span>Twist Lock</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">User Height Range</span>
                        <span>5' to 7' (Optimal)</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Additional Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>High-impact plastic top grip with hanging hook</li>
                      <li>Adjustable foam grip for comfort</li>
                      <li>Lockable swivel prevents side-to-side motion</li>
                      <li>Compatible with all Heavy Duty Microfiber Mop Frames</li>
                      <li>Professional-grade construction for commercial use</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="compatibility" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Compatibility Information</h3>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-3 text-green-800">Compatible Mop Pads</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      This frame is specifically designed for 18" microfiber mop pads. The actual frame length is 16", 
                      which provides optimal fit for 18" pads with proper overlap for secure attachment.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>18" Premium Microfiber Wet Mop Pads</li>
                      <li>18" Microfiber Dry Mop Pads</li>
                      <li>18" Heavy Duty Scrubbing Pads</li>
                      <li>18" Specialty Cleaning Pads</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-3 text-blue-800">Frame System Compatibility</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      The Heavy Duty Telescoping Handle is designed to work seamlessly with our complete range of 
                      Heavy Duty Microfiber Mop Frames.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>18" Heavy Duty Frame (this product)</li>
                      <li>24" Heavy Duty Frame</li>
                      <li>36" Heavy Duty Frame</li>
                      <li>48" Heavy Duty Frame</li>
                    </ul>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-3">Installation & Setup</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li>Attach the telescoping handle to the frame using the threaded connection</li>
                      <li>Adjust handle length by twisting the extension mechanism</li>
                      <li>Position the adjustable foam grip to your preferred location</li>
                      <li>Attach your 18" microfiber mop pad using the hook and loop system</li>
                      <li>Test the swivel lock mechanism before first use</li>
                    </ol>
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
                    <span className="text-sm text-gray-500 ml-2">(47 reviews)</span>
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
                        <span className="ml-2 font-medium">Mike S.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        This mop frame is built like a tank! We've been using it daily in our cleaning business for over a year and it still works perfectly. 
                        The locking swivel is a game-changer - no more fighting with the mop head spinning around.
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
                        <span className="ml-2 font-medium">Linda T.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Perfect for our facility maintenance team. The adjustable handle means everyone can use it comfortably, 
                        and the aluminum construction is holding up great in our industrial environment.
                      </p>
                      <span className="text-xs text-gray-500">Posted 1 month ago</span>
                    </div>

                    <div className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="ml-2 font-medium">Carlos R.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Good quality frame, very sturdy. Only minor complaint is that the foam grip could be a bit thicker, 
                        but overall very satisfied with the purchase. Much better than our old equipment.
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
                        <span className="ml-2 font-medium">Sarah K.</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Excellent professional-grade equipment. The telescoping feature works smoothly and the hook at the top 
                        is surprisingly useful for storage. Definitely recommend for anyone doing serious cleaning work.
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