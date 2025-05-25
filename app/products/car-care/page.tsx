import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Check } from "lucide-react"

export default function CarCarePage() {
  const products = [
    {
      id: 1,
      name: "EcoFine™ Detail 400 GSM Microfiber Towel",
      description: '16"x16" 400 GSM durable, all-purpose detailing towel',
      price: "$14.98",
      packSize: "6 Pack",
      image: "/placeholder.svg?height=400&width=400",
      href: "/products/car-care/detail-400-gsm",
      badges: ["400 GSM", "All-Purpose"],
    },
    {
      id: 2,
      name: "EcoFine™ Detail 550 GSM Microfiber Towel",
      description: '16"x16" 550 GSM premium quality detailing towel',
      price: "$16.98",
      packSize: "6 Pack",
      image: "/placeholder.svg?height=400&width=400",
      href: "/products/car-care/detail-550-gsm",
      badges: ["550 GSM", "Premium"],
    },
    {
      id: 3,
      name: "EcoFine Drying Towel",
      description: '16"x24" waffle weave towel that absorbs 7x its weight',
      price: "$18.98",
      packSize: "6 Pack",
      image: "/placeholder.svg?height=400&width=400",
      href: "/products/car-care/drying-towel",
      badges: ["Super Absorbent", "Large Size"],
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
                Car Care Products
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Professional-grade microfiber towels for automotive detailing
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
              <Link href="/" className="hover:text-green-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/products" className="hover:text-green-600">
                Products
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Car Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose EcoFine Car Care Products?</h2>
              <p className="text-gray-500">
                Our professional-grade microfiber towels are specifically designed for automotive detailing, providing
                superior results without scratching or damaging delicate surfaces.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>High GSM weights for maximum absorbency and durability</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Soft edges that won't scratch paint or clear coat</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Specialized weaves for different detailing tasks</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Washable and reusable for eco-friendly detailing</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Car+Detailing"
                  alt="Car Detailing"
                  width={600}
                  height={400}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
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
                Need Custom Detailing Solutions?
              </h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your automotive detailing requirements
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
