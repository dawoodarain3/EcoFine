"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check, Star, Info, ShoppingCart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Blue")
  const [selectedImage, setSelectedImage] = useState("/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Blue")

  const product = {
    id: 1,
    name: 'EcoFine Microfiber Cloth - 16" x 16" - 300 GSM',
    description: "Premium 300 GSM microfiber cloth with 4-thread overlock stitching",
    longDescription:
      'Our premium 16" x 16" microfiber cloths are perfect for all cleaning tasks. With a 300 GSM weight and 80/20 polyester/polyamide blend, these cloths provide superior cleaning performance, capturing dust, dirt, and bacteria without chemicals. The 4-thread overlock stitching ensures durability through hundreds of washes.',
    price: "$24.99",
    packSize: "Pack of 12",
    colors: [
      { name: "Blue", hex: "#1E40AF", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Blue" },
      { name: "Green", hex: "#15803D", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Green" },
      { name: "Yellow", hex: "#EAB308", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Yellow" },
      { name: "Red", hex: "#DC2626", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Red" },
      { name: "Purple", hex: "#7E22CE", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Purple" },
      { name: "Pink", hex: "#DB2777", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Pink" },
      { name: "Orange", hex: "#EA580C", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Orange" },
      { name: "Black", hex: "#171717", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Black" },
      { name: "White", hex: "#F9FAFB", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+White" },
      { name: "Gray", hex: "#6B7280", image: "/placeholder.svg?height=600&width=600&text=Microfiber+Cloth+Gray" },
    ],
    specifications: [
      { name: "Size", value: '16" x 16" (40cm x 40cm)' },
      { name: "Weight", value: "300+ Grams per Square Meter (GSM)" },
      { name: "Blend", value: "80% Polyester / 20% Polyamide" },
      { name: "Denier", value: "0.1 - 0.2" },
      { name: "Edges", value: "4 Thread Overlock Stitching" },
      { name: "Washable", value: "Yes, up to 500 times" },
      { name: "Pack Quantity", value: "12 Pieces" },
    ],
    features: [
      "Ultra-soft and non-abrasive",
      "Highly absorbent - holds up to 7 times its weight in water",
      "Lint-free and streak-free cleaning",
      "Reduces chemical usage by up to 90%",
      "Removes 99.9% of bacteria with just water",
      "Durable through hundreds of washes",
      "Available in multiple colors for color-coding",
    ],
    applications: [
      {
        name: "General Cleaning",
        color: "Blue",
        description:
          "Use blue cloths for general cleaning in low-risk areas such as offices, hallways, and common areas.",
      },
      {
        name: "Food Service",
        color: "Green",
        description:
          "Use green cloths for food preparation areas, kitchens, and cafeterias to maintain food safety standards.",
      },
      {
        name: "Bathroom Cleaning",
        color: "Red",
        description:
          "Use red cloths for high-risk areas such as toilets, urinals, and bathroom surfaces to prevent cross-contamination.",
      },
      {
        name: "Surface Cleaning",
        color: "Yellow",
        description: "Use yellow cloths for cleaning sinks, basins, and other surfaces in non-food preparation areas.",
      },
    ],
    careInstructions: [
      "Machine wash up to 200°F (90°C)",
      "Do not use bleach or fabric softener",
      "Tumble dry on low heat or air dry",
      "Wash separately from cotton products to prevent lint transfer",
      "Pre-rinse heavily soiled cloths before washing",
    ],
    rating: 4.8,
    reviews: 124,
  }

  const handleColorChange = (color) => {
    setSelectedColor(color.name)
    setSelectedImage(color.image)
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
      <div className="w-full bg-gray-100 py-4">
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
            <span className="text-gray-900 font-medium">16\" x 16\" - 300 GSM</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.colors.slice(0, 5).map((color) => (
                  <div
                    key={color.name}
                    className={`overflow-hidden rounded-md border cursor-pointer ${selectedColor === color.name ? "border-green-600" : "border-gray-200"}`}
                    onClick={() => handleColorChange(color)}
                  >
                    <div className="h-12 w-full" style={{ backgroundColor: color.hex }}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                <div className="mt-1 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="text-gray-500">{product.longDescription}</div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                <span className="text-lg text-gray-500">{product.packSize}</span>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Available Colors</h3>
                <div className="mt-2 flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <div
                      key={color.name}
                      className={`h-8 w-8 rounded-full border cursor-pointer ${selectedColor === color.name ? "border-green-600 ring-2 ring-green-600" : "border-gray-300"}`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => handleColorChange(color)}
                      title={color.name}
                    ></div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="mt-2 flex items-center border rounded-md w-32">
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700" onClick={decreaseQuantity}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <span className="flex-1 text-center">{quantity}</span>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700" onClick={increaseQuantity}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Info className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-500">Available in individual colors or assorted packs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Info className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-500">Bulk discounts available for orders over 10 packs</span>
                </div>
              </div>

              <div className="flex flex-col w-full sm:flex-row gap-3 sm:space-y-0">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Quote
                </Button>
                <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50">
                  Request Samples
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="mt-6 rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold">Product Specifications</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {product.specifications.map((spec) => (
                  <div key={spec.name} className="flex justify-between border-b border-gray-100 py-2">
                    <span className="font-medium">{spec.name}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="features" className="mt-6 rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="applications" className="mt-6 rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold">Recommended Applications</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {product.applications.map((app) => (
                  <div key={app.name} className="rounded-lg border border-gray-200 p-4">
                    <h4 className="mb-2 font-medium">{app.name}</h4>
                    <div className="mb-2 flex items-center">
                      <div
                        className="mr-2 h-4 w-4 rounded-full"
                        style={{
                          backgroundColor:
                            app.color === "Blue"
                              ? "#1E40AF"
                              : app.color === "Green"
                                ? "#15803D"
                                : app.color === "Red"
                                  ? "#DC2626"
                                  : "#EAB308",
                        }}
                      ></div>
                      <span className="text-sm">{app.color} Cloth</span>
                    </div>
                    <p className="text-sm text-gray-600">{app.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="care" className="mt-6 rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold">Care Instructions</h3>
              <ul className="space-y-2">
                {product.careInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-medium text-blue-800">Pro Tip</h4>
                <p className="text-sm text-blue-800">
                  For maximum effectiveness, wash your microfiber cloths before first use. This activates the fibers and
                  removes any manufacturing residues, ensuring optimal cleaning performance from the start.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Color Coding Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Color Coding System</h2>
              <p className="mx-auto max-w-[700px] text-gray-500">
                Our color-coded microfiber cloths help prevent cross-contamination in professional cleaning
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <div className="mb-4 h-16 w-16 rounded-full bg-red-100 p-4">
                <div className="h-full w-full rounded-full bg-red-500"></div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-red-800">Red</h3>
              <p className="text-red-800">
                For high-risk areas such as toilets, urinals, and bathroom surfaces to prevent cross-contamination.
              </p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
              <div className="mb-4 h-16 w-16 rounded-full bg-blue-100 p-4">
                <div className="h-full w-full rounded-full bg-blue-500"></div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-blue-800">Blue</h3>
              <p className="text-blue-800">
                For general cleaning in low-risk areas such as offices, hallways, and common areas.
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-6">
              <div className="mb-4 h-16 w-16 rounded-full bg-green-100 p-4">
                <div className="h-full w-full rounded-full bg-green-500"></div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-green-800">Green</h3>
              <p className="text-green-800">
                For food preparation areas, kitchens, and cafeterias to maintain food safety standards.
              </p>
            </div>
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
              <div className="mb-4 h-16 w-16 rounded-full bg-yellow-100 p-4">
                <div className="h-full w-full rounded-full bg-yellow-500"></div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-yellow-800">Yellow</h3>
              <p className="text-yellow-800">
                For cleaning sinks, basins, and other surfaces in non-food preparation areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Related Products</h2>
              <p className="mx-auto max-w-[700px] text-gray-500">
                You might also be interested in these complementary products
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <Link href="/products/microfiber-cloths/12x12-320gsm-12pack">
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=400&width=400&text=12x12+Microfiber+Cloth"
                      alt="12x12 Microfiber Cloth"
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    EcoFine Microfiber Cloth - 12" x 12" - 320 GSM
                  </h3>
                  <p className="mb-2 text-sm text-gray-500">Compact size with higher GSM for specialized cleaning</p>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-bold text-green-600">$19.99</p>
                    <p className="text-sm text-gray-500">Pack of 12</p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                </div>
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <Link href="/products/microfiber-cloths/glass-cleaning">
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=400&width=400&text=Glass+Cleaning+Cloth"
                      alt="Glass Cleaning Cloth"
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">EcoFine Microfiber Glass Cleaning Cloth</h3>
                  <p className="mb-2 text-sm text-gray-500">Specialized cloth for streak-free glass cleaning</p>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-bold text-green-600">$12.99</p>
                    <p className="text-sm text-gray-500">Pack of 6</p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                </div>
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <Link href="/products/microfiber-mops/premium-wet-mop-pads-18-6pack">
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=400&width=400&text=Microfiber+Mop+Pads"
                      alt="Microfiber Mop Pads"
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Premium Microfiber Wet Mop Pads - 18"</h3>
                  <p className="mb-2 text-sm text-gray-500">475 GSM microfiber mop pads for superior cleaning</p>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-bold text-green-600">$64.98</p>
                    <p className="text-sm text-gray-500">Pack of 6</p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Order?</h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your microfiber cloth requirements
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/contact">Request Samples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
