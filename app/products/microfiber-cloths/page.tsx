import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { ColorCodingGuide } from "@/components/color-coding-guide"
import microfiberclothmain  from "../../../public/EcoFine Microfiber Cloth/Microfiber 16x16-300gsm-50packs/Blue/Main.png"
import glasscleaningmain from "../../../public/Glass Cleaning Microfiber/Main.png"
import suedelensmain from "../../../public/Microfiber Suede Lens Cleaning Cloth/Gray/Main.png"

export default function MicrofiberClothsPage() {
  const products = [
    {
      id: 1,
      name: 'EcoFine Microfiber Cloth - 16" x 16" - 300 GSM',
      description: "Premium 300 GSM microfiber cloth with 4-thread overlock stitching",
      price: "$24.99",
      packSize: "Pack of 12",
      colors: "Blue, Green, Yellow, Red, Purple, Pink, Orange, Black, White, and Gray",
      image: "/placeholder.svg?height=400&width=400",
      href: "/products/microfiber-cloths/16x16-300gsm-12pack",
      badges: ["Premium", "Multi-Color"],
    },
    {
      id: 2,
      name: 'EcoFine Microfiber Cloth - 16" x 16" - 300 GSM',
      description: "Premium 300 GSM microfiber cloth with 4-thread overlock stitching",
      price: "$89.99",
      packSize: "Pack of 50",
      colors: "Blue, Green, Yellow, Red, Black, White, Gray",
      image: microfiberclothmain,
      href: "/products/microfiber-cloths/16x16-300gsm-50pack",
      badges: ["Bulk", "Value Pack"],
    },
    {
      id: 3,
      name: 'EcoFine Microfiber Cloth - 12" x 12" - 320 GSM',
      description: "Professional 320 GSM microfiber cloth with 4-thread overlock stitching",
      price: "$19.99",
      packSize: "Pack of 12",
      colors: "Blue, Green, Yellow, Red, Purple, Pink, Orange, Black, White, and Gray",
      image: "/placeholder.svg?height=400&width=400",
      href: "/products/microfiber-cloths/12x12-320gsm-12pack",
      badges: ["Professional", "High GSM"],
    },
    {
      id: 4,
      name: 'EcoFine Microfiber Cloth - 12" x 12" - 320 GSM',
      description: "Professional 320 GSM microfiber cloth with 4-thread overlock stitching",
      price: "$74.99",
      packSize: "Pack of 50",
      colors: "Blue, Green, Yellow, Red, Black, White, Gray",
      image: "/placeholder.svg?height=400&width=400",
      href: "/products/microfiber-cloths/12x12-320gsm-50pack",
      badges: ["Bulk", "Value Pack"],
    },
    {
      id: 5,
      name: 'EcoFine Microfiber Glass Cleaning Cloth - 16" x 16"',
      description: "Specialized cloth for streak-free glass cleaning",
      price: "$12.99",
      packSize: "Pack of 6",
      colors: "Blue",
      image: glasscleaningmain,
      href: "/products/microfiber-cloths/glass-cleaning",
      badges: ["Streak-Free", "Glass Specific"],
    },
    {
      id: 6,
      name: 'EcoFine Microfiber Waffle Weave Towel - 16" x 16"',
      description: "360 GSM waffle pattern for enhanced absorption",
      price: "$14.98",
      packSize: "Pack of 6",
      colors: "Dark Blue, White, Gray",
      image: "/placeholder.svg?height=400&width=400",
      href: "/products/microfiber-cloths/waffle-weave",
      badges: ["Waffle Pattern", "Super Absorbent"],
    },
    {
      id: 7,
      name: "EcoFine Microfiber Suede Lens Cleaning Cloth",
      description: "Ultra-soft suede microfiber for delicate surfaces",
      price: "$15.98",
      packSize: "Pack of 10",
      sizes: ['6" x 6"', '8" x 8"'],
      colors: "White, Grey, Black",
      image: suedelensmain,
      href: "/products/microfiber-cloths/suede-lens",
      badges: ["Suede", "Lens Cleaning"],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                Microfiber Cloths & Towels
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Premium quality microfiber cloths for professional cleaning
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-green-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/products" className="hover:text-green-600">
                Products
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Microfiber Cloths</span>
            </div>
          </div>
        </div>
      </section>

      {/* Color Coding Guide */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Color Coding in Cleaning</h2>
              <p className="mx-auto max-w-[700px] text-gray-500">
                Our color-coded microfiber cloths help prevent cross-contamination and maintain hygiene standards
              </p>
            </div>
          </div>
          <ColorCodingGuide />
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Microfiber Cloth Collection</h2>
              <p className="mx-auto max-w-[700px] text-gray-500">
                Premium quality microfiber cloths available in multiple sizes, colors, and GSM weights
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <Link href={product.href}>
                  <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                    <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                      {product.badges &&
                        product.badges.map((badge, index) => (
                          <Badge key={index} className="bg-green-600">
                            {badge}
                          </Badge>
                        ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="mb-2 text-sm text-gray-500">{product.description}</p>
                    {product.colors && (
                      <p className="mb-2 text-xs text-gray-500">
                        <span className="font-medium">Available Colors:</span> {product.colors}
                      </p>
                    )}
                    {product.sizes && (
                      <p className="mb-2 text-xs text-gray-500">
                        <span className="font-medium">Available Sizes:</span> {product.sizes.join(", ")}
                      </p>
                    )}
                    <div className="mb-4 flex items-center justify-between">
                      <p className="font-bold text-green-600">{product.price}</p>
                      <p className="text-sm text-gray-500">{product.packSize}</p>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose EcoFine Microfiber?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500">
                Our microfiber cloths and towels are designed for superior performance and durability
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
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
                  className="h-6 w-6 text-green-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold">Premium Quality</h3>
              <p className="text-gray-500">Made with high-quality microfiber for superior cleaning performance</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
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
                  className="h-6 w-6 text-green-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold">Durable</h3>
              <p className="text-gray-500">Designed to withstand hundreds of washes without losing effectiveness</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
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
                  className="h-6 w-6 text-green-600"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold">Eco-Friendly</h3>
              <p className="text-gray-500">Reduces the need for chemicals and paper products</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
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
                  className="h-6 w-6 text-green-600"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold">Versatile</h3>
              <p className="text-gray-500">Perfect for a wide range of cleaning applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Need Custom Microfiber Products?
              </h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your custom microfiber cloth requirements
              </p>
            </div>
            <div className="flex flex-col w-full sm:flex-row gap-3 mt-6">
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
