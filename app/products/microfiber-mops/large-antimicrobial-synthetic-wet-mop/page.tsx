"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Minus, Plus, Star, Check, ShoppingCart, Building, Users, Droplets, Shield, Clock, Recycle, X } from "lucide-react"
import { SDGBadge } from "@/components/sdg-badge"

// Large Antimicrobial Synthetic Wet Mop images
import imagemain from "@/public/Mops/Large Antimicrobial Synthetic Wet Mop/Main.png"
import image1 from "@/public/Mops/Large Antimicrobial Synthetic Wet Mop/01.png"
import image2 from "@/public/Mops/Large Antimicrobial Synthetic Wet Mop/02.png"

export default function AntimicrobialWetMopPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(imagemain)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const productImages = [imagemain, image1, image2]

  const handleThumbnailClick = (index) => {
    setSelectedImage(productImages[index])
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
            <Link href="/products/wet-mops" className="hover:text-green-600">
              Wet Mops
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Large Antimicrobial Synthetic Wet Mop</span>
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
                  alt="Large Antimicrobial Synthetic Wet Mop - Green"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {productImages.map((image, i) => (
                  <div
                    key={i}
                    className={`border rounded-lg overflow-hidden cursor-pointer hover:border-green-600 ${
                      selectedImageIndex === i ? 'border-green-600 ring-2 ring-green-200' : ''
                    }`}
                    onClick={() => handleThumbnailClick(i)}
                  >
                    <Image
                      src={image}
                      alt={`Antimicrobial wet mop view ${i + 1}`}
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
                  <h1 className="text-3xl font-bold mr-3">Large Antimicrobial Synthetic Wet Mop</h1>
                  <div className="flex space-x-1">
                    <SDGBadge id={3} title="Good Health and Well-being" />
                    <SDGBadge id={12} title="Responsible Consumption and Production" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(127 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$42.99</span>
                  <span className="text-sm text-gray-500 ml-2">24 oz. Large Size - Green</span>
                </div>
                <p className="text-gray-600">
                  Professional-grade antimicrobial synthetic wet mop with looped end design. Features 9" polyester 
                  tailbands and 100% synthetic yarn construction for superior cleaning performance and hygiene protection 
                  in commercial environments.
                </p>
              </div>

              {/* Antimicrobial Benefits */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  Antimicrobial Protection Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Built-in antimicrobial protection prevents bacteria and odor buildup</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Ready to use immediately - no break-in period required</span>
                  </li>
                  <li className="flex items-start">
                    <Recycle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Machine washable design for commercial laundry systems</span>
                  </li>
                </ul>
              </div>

              {/* Synthetic vs Cotton Comparison */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  Superior Synthetic Design
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Looped end design vs. cotton cut end for superior performance</span>
                  </li>
                  <li className="flex items-start">
                    <Droplets className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>High liquid capacity reduces wringing frequency</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Fan bands ensure even yarn distribution for effective cleaning</span>
                  </li>
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-sm font-medium mb-3">Product Specifications</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Headband:</span>
                    <span>9" Polyester Tailbands (Double)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Yarn:</span>
                    <span>100% Synthetic</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Size:</span>
                    <span>Large - 24 oz. performance equivalent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Color:</span>
                    <span>Green</span>
                  </div>
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
                  Request Quote
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 flex-1">
                  Download Specs
                </Button>
              </div>

              {/* Features */}
              <div className="border-t pt-6">
                <h3 className="font-medium mb-3">Key Advantages Over Cotton Mops</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Machine washable - cotton cut end mops are not</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>No break-in period - absorbent right out of the box</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Designed for commercial laundry systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Superior liquid capacity reduces wringing time</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Faster drying time than traditional mops</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>More environmentally friendly and durable</span>
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
                <TabsTrigger value="comparison">Synthetic vs Cotton</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Large Antimicrobial Synthetic Wet Mop</h3>
                  <p>
                    Our Large Antimicrobial Synthetic Wet Mop represents a breakthrough in professional cleaning technology. 
                    Unlike traditional cotton cut end mops, our synthetic looped end design delivers superior performance 
                    from the moment you take it out of the box, with no break-in period required.
                  </p>
                  <p>
                    The antimicrobial protection is built into the synthetic fibers, providing continuous protection against 
                    bacteria and odor buildup throughout the mop's extended lifespan. This makes it ideal for healthcare 
                    facilities, food service establishments, and any environment where hygiene is paramount.
                  </p>
                  <p>
                    The innovative looped end construction maximizes surface contact and liquid absorption while the 9" 
                    polyester tailbands with double construction provide exceptional durability and secure attachment. 
                    The fan band design ensures even yarn distribution across the floor surface for consistent, 
                    effective cleaning.
                  </p>
                  <h4 className="font-bold mt-6">Revolutionary Synthetic Technology:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>100% synthetic yarn construction resists bacteria and chemicals</li>
                    <li>Looped end design prevents fraying and extends mop life</li>
                    <li>Built-in antimicrobial protection for continuous hygiene</li>
                    <li>24 oz. weight provides maximum absorption capacity</li>
                    <li>Commercial laundry compatible for easy maintenance</li>
                  </ul>
                  <h4 className="font-bold mt-6">Environmental Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Machine washable design reduces waste</li>
                    <li>Faster drying times save energy</li>
                    <li>Extended lifespan reduces replacement frequency</li>
                    <li>Superior cleaning reduces chemical usage</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-600 mb-3">Mop Construction</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Size</span>
                          <span>Large - 24 oz. equivalent</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Yarn Material</span>
                          <span>100% Synthetic</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">End Type</span>
                          <span>Looped End Design</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Antimicrobial</span>
                          <span>Built-in Protection</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Color</span>
                          <span>Green</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-600 mb-3">Headband & Features</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Headband Material</span>
                          <span>Polyester</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Headband Width</span>
                          <span>9"</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Tailband Type</span>
                          <span>Double Construction</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Fan Bands</span>
                          <span>Included</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Machine Washable</span>
                          <span>Yes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Performance Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Superior liquid absorption capacity</li>
                      <li>Immediate absorbency - no break-in period</li>
                      <li>Compatible with commercial laundry systems</li>
                      <li>Faster drying time vs. cotton mops</li>
                      <li>Antimicrobial protection prevents odors</li>
                      <li>Extended durability for professional use</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Care Instructions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Machine wash in commercial or standard washers</li>
                      <li>Use standard detergent - no special requirements</li>
                      <li>Can be laundered with other synthetic textiles</li>
                      <li>Air dry or machine dry on medium heat</li>
                      <li>No fabric softeners needed or recommended</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="comparison" className="p-6 border rounded-b-lg mt-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Synthetic Looped End vs. Cotton Cut End</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-green-800 flex items-center">
                        <Check className="h-5 w-5 mr-2" />
                        Our Synthetic Looped End Mops
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Machine washable and designed for commercial laundry</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No break-in period - absorbent right out of the box</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Last longer after washing due to superior construction</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>High liquid capacity reduces wringing frequency</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Fan bands keep yarn evenly distributed</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Faster drying time saves energy</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>More environmentally friendly</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3 text-red-800 flex items-center">
                        <X className="h-5 w-5 mr-2" />
                        Traditional Cotton Cut End Mops
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <X className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Not machine washable - must be replaced frequently</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Require break-in period - almost useless immediately</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Deteriorate quickly with washing</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Lower absorption capacity</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Yarn clumps and doesn't spread evenly</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Slower drying increases bacteria growth</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Higher replacement cost and waste</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-3">Professional Performance Advantages</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium mb-2 text-blue-600">Time Savings:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Reduced wringing frequency</li>
                          <li>Faster floor drying</li>
                          <li>No break-in time required</li>
                          <li>Even cleaning coverage</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-green-600">Cost Savings:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Machine washable design</li>
                          <li>Extended product lifespan</li>
                          <li>Reduced replacement costs</li>
                          <li>Commercial laundry compatible</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-purple-600">Quality Benefits:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Superior cleaning performance</li>
                          <li>Antimicrobial protection</li>
                          <li>Professional durability</li>
                          <li>Consistent results</li>
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
                    <span className="text-sm text-gray-500 ml-2">(127 reviews)</span>
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
                        <span className="ml-2 font-medium">Dr. Jennifer K. - Hospital Administrator</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Game changer for our healthcare facility! The antimicrobial properties give us peace of mind, and 
                        the fact that these work immediately without any break-in period is incredible. Our housekeeping 
                        staff loves how much liquid they can hold. We'll never go back to cotton mops.
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
                        <span className="ml-2 font-medium">Mark T. - Facilities Manager</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Finally, a mop that actually works right out of the box! We were tired of cotton mops that needed 
                        days of use before they became effective. These synthetic mops are absorbent immediately and the 
                        machine washable feature has saved us so much money. Best cleaning investment we've made.
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
                        <span className="ml-2 font-medium">Rosa M. - Restaurant Owner</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        The green color is perfect for our kitchen cleaning protocol. These mops hold so much more liquid 
                        than our old cotton ones, and they dry much faster. The antimicrobial feature is essential for 
                        food service. Our cleaning efficiency has improved dramatically.
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
                        <span className="ml-2 font-medium">David L. - Cleaning Contractor</span>
                        <span className="text-sm text-gray-500 ml-2">Verified Buyer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        I've been in the cleaning business for 15 years and these are hands down the best mops I've ever used. 
                        The difference between these synthetic looped end mops and cotton cut end is night and day. They work 
                        immediately, last forever in our commercial washers, and clean better than anything else on the market.
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