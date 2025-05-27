"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Building, Users, Droplets } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// String Mop images
import stringmopmain from "@/public/Mops/String Mop/Main.png"
import stringmop1 from "@/public/Mops/String Mop/01.png"
import stringmop2 from "@/public/Mops/String Mop/02.png"

export default function XLargeStringMopPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Blue")
  const [selectedImage, setSelectedImage] = useState(stringmopmain)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const colors = ["Blue", "White"]

  // Map colors to their specifications
  const colorSpecs = {
    Blue: {
      tailbands: "Two tailbands",
      headband: "Polyester headband"
    },
    White: {
      tailbands: "One tailband", 
      headband: "Mesh headband"
    }
  }

  const handleColorChange = (color) => {
    setSelectedColor(color)
    setSelectedImageIndex(0) // Reset to main image when color changes
  }

  const handleThumbnailClick = (index) => {
    const thumbnails = [stringmopmain, stringmop1, stringmop2]
    setSelectedImage(thumbnails[index])
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

  const getThumbnails = () => {
    return [stringmopmain, stringmop1, stringmop2]
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
            <span>X-Large Microfiber String Mop</span>
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
                  alt={`X-Large Microfiber String Mop - ${selectedColor}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {getThumbnails().map((thumbnail, i) => (
                  <div
                    key={i}
                    className={`border rounded-lg overflow-hidden cursor-pointer hover:border-green-600 ${
                      selectedImageIndex === i ? 'border-green-600 ring-2 ring-green-200' : ''
                    }`}
                    onClick={() => handleThumbnailClick(i)}
                  >
                    <Image
                      src={thumbnail}
                      alt={`String mop view ${i + 1}`}
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
                  <h1 className="text-3xl font-bold mr-3">X-Large Microfiber String Mop</h1>
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
                  <span className="text-2xl font-bold">$24.99</span>
                  <span className="text-sm text-gray-500 ml-2">Each</span>
                </div>
                <p className="text-gray-600">
                  X-Large 20 oz microfiber string mop equivalent to 32 oz cotton mop with superior absorption capacity. 
                  18.5-inch size provides excellent coverage for large area cleaning applications.
                </p>
              </div>

              {/* X-Large Benefits */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  X-Large Performance Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Users className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>20 oz weight equivalent to 32 oz cotton mop performance</span>
                  </li>
                  <li className="flex items-start">
                    <Droplets className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Superior absorption with microfiber technology</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>18.5-inch size for maximum coverage area</span>
                  </li>
                </ul>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Color & Configuration</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`p-3 text-sm border rounded-md transition-colors ${
                        selectedColor === color
                          ? "border-green-600 bg-green-50 text-green-600"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleColorChange(color)}
                    >
                      <div className="font-medium">{color}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {colorSpecs[color].tailbands} • {colorSpecs[color].headband}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                  <strong>Selected:</strong> {selectedColor} - {colorSpecs[selectedColor].tailbands}, {colorSpecs[selectedColor].headband}
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
                <p className="text-xs text-gray-500 mt-1">
                  Individual mops sold separately
                </p>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-green-600 hover:bg-green-700 flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
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
                    <span>X-Large 18.5-inch size for maximum coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>20 oz weight equivalent to 32 oz cotton performance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>80% Polyester, 20% Polyamide microfiber blend</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Comparable shrinkage to cotton mops</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Blue: Two tailbands with polyester headband</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>White: One tailband with mesh headband</span>
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
                  <h3 className="text-xl font-bold">X-Large Microfiber String Mop</h3>
                  <p>
                    Our X-Large Microfiber String Mop combines the familiar feel of traditional string mops with 
                    the superior performance of advanced microfiber technology. At 20 ounces, this mop delivers 
                    the same coverage and absorption as a 32-ounce cotton mop while being significantly more 
                    efficient and long-lasting.
                  </p>
                  <p>
                    The generous 18.5-inch size makes this mop ideal for large area cleaning, reducing the number 
                    of passes required and increasing productivity. The microfiber construction provides exceptional 
                    dirt and bacteria removal while maintaining the durability needed for commercial applications.
                  </p>
                  <p>
                    Available in two distinct configurations to meet different cleaning requirements. The blue version 
                    features two tailbands with a polyester headband for maximum durability, while the white version 
                    offers one tailband with a mesh headband for optimal wringing performance.
                  </p>
                  <h4 className="font-bold mt-6">Microfiber Advantages Over Cotton:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Superior absorption capacity - holds more liquid per ounce</li>
                    <li>Enhanced dirt and bacteria removal - up to 99.9% effective</li>
                    <li>Faster drying time reduces bacterial growth</li>
                    <li>Longer lifespan - 5x more durable than cotton</li>
                    <li>Maintains effectiveness through hundreds of wash cycles</li>
                    <li>Reduced chemical usage required for effective cleaning</li>
                  </ul>
                  <h4 className="font-bold mt-6">Color Specifications:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Blue:</strong> Two tailbands with polyester headband - ideal for heavy-duty applications</li>
                    <li><strong>White:</strong> One tailband with mesh headband - perfect for general cleaning tasks</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-600 mb-3">Mop Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Size</span>
                          <span>X-Large - 18.5 inches</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Weight</span>
                          <span>20 ounces</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Cotton Equivalent</span>
                          <span>32 ounce cotton mop</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Material Blend</span>
                          <span>80% Polyester / 20% Polyamide</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Shrinkage</span>
                          <span>Comparable to cotton mops</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-600 mb-3">Configuration Options</h4>
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-medium text-blue-800 mb-2">Blue Configuration</h5>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Tailbands:</span>
                              <span>Two</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Headband:</span>
                              <span>Polyester</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                          <h5 className="font-medium text-gray-800 mb-2">White Configuration</h5>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Tailbands:</span>
                              <span>One</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Headband:</span>
                              <span>Mesh</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Performance Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Absorption capacity: 5-7 times its weight in liquid</li>
                      <li>Coverage area: Up to 800 sq ft per mop</li>
                      <li>Durability: 300+ wash cycles</li>
                      <li>Bacteria removal: 99.9% effective</li>
                      <li>Chemical compatibility: Safe with most cleaning solutions</li>
                      <li>Temperature resistance: Up to 160°F/71°C wash cycles</li>
                      <li>Lint-free operation</li>
                      <li>Non-abrasive on all floor surfaces</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="applications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Applications & Use Cases</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-blue-800">Commercial Facilities</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Office buildings and corporate spaces</li>
                        <li>Retail stores and shopping centers</li>
                        <li>Hotels and hospitality venues</li>
                        <li>Restaurants and food service areas</li>
                        <li>Warehouses and distribution centers</li>
                        <li>Manufacturing facilities</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-green-800">Institutional Settings</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Schools and educational facilities</li>
                        <li>Healthcare facilities and clinics</li>
                        <li>Government buildings</li>
                        <li>Libraries and community centers</li>
                        <li>Religious institutions</li>
                        <li>Senior living facilities</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-purple-800">Large Area Applications</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Airport terminals and transportation hubs</li>
                        <li>Convention centers and event venues</li>
                        <li>Sports facilities and gymnasiums</li>
                        <li>Parking garages and service areas</li>
                        <li>Industrial production floors</li>
                        <li>Emergency response cleanup</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-orange-800">Specialized Cleaning</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Post-construction cleanup</li>
                        <li>Flood and water damage restoration</li>
                        <li>Heavy-duty spill management</li>
                        <li>Industrial maintenance cleaning</li>
                        <li>Equipment and machinery cleaning</li>
                        <li>Exterior surface cleaning</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-3">Configuration Guide</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-blue-50 p-3 rounded">
                        <h5 className="font-medium mb-2 text-blue-800">Choose Blue When:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Heavy-duty cleaning is required</li>
                          <li>Maximum durability is needed</li>
                          <li>Frequent use in harsh conditions</li>
                          <li>Professional commercial applications</li>
                          <li>Two tailbands provide extra strength</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h5 className="font-medium mb-2 text-gray-800">Choose White When:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>General purpose cleaning tasks</li>
                          <li>Mesh headband for better wringing</li>
                          <li>Lighter weight application preferred</li>
                          <li>Healthcare or food service (visual cleanliness)</li>
                          <li>Standard commercial maintenance</li>
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
                    <span className="text-lg font-medium">4.7 out of 5</span>
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
                        <span className="ml-2 font-medium">Mike T. - Janitorial Supervisor</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Finally found a string mop that outperforms our old cotton ones! The X-Large size covers so much 
                        area and the absorption is incredible. We've been using the blue version for 6 months and it still 
                        looks almost new. The two tailbands really make a difference in durability.
                      </p>
                      <span className="text-xs text-gray-500">Posted 1 week ago</span>
                    </div>

                    <div className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Sarah L. - Hospital Housekeeping</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        We use the white version in our medical facility and love the mesh headband feature. Wrings out 
                        perfectly every time and the microfiber really does remove more bacteria than our old mops. 
                        The 18.5" size is perfect for our large corridor areas.
                      </p>
                      <span className="text-xs text-gray-500">Posted 3 weeks ago</span>
                    </div>

                    <div className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="ml-2 font-medium">Dave R. - School Custodian</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Great mop overall. The size is impressive and it definitely cleans better than cotton. Only minor 
                        complaint is it takes a bit longer to dry compared to our old mops, but the performance makes up 
                        for it. Would recommend for anyone cleaning large areas regularly.
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
                        <span className="ml-2 font-medium">Jennifer K. - Office Manager</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Switched from cotton to these microfiber string mops and couldn't be happier. The cleaning crew 
                        says they can cover twice the area in the same time, and our floors look cleaner than ever. 
                        Definitely worth the investment - these will pay for themselves in efficiency gains.
                      </p>
                      <span className="text-xs text-gray-500">Posted 4 days ago</span>
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