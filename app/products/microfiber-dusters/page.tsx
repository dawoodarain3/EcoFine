import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { Check } from "lucide-react"
import black10x10main from "@/public/Microfiber Suede Lens Cleaning Cloth/White/Main.png"
import black14x14main from "@/public/Microfiber Suede Lens Cleaning Cloth/Gray/Main.png"

export default function MicrofiberDustersPage() {
  const products = [
    {
      id: 1,
      name: "EcoFine Microfiber Suede Lens Cleaning Cloth",
      description: '10"x10" ultra-soft suede microfiber for delicate surfaces',
      price: "$15.98",
      packSize: "Pack of 10",
      image: black10x10main,
      href: "/products/microfiber-dusters/suede-lens-cloth",
      badges: ["Suede", "Lens Cleaning"],
    },
    // {
    //   id: 2,
    //   name: "EcoFine Microfiber Silk Lens Cloth",
    //   description: '10"x10" premium silk microfiber for optical surfaces',
    //   price: "$13.98",
    //   packSize: "Pack of 10",
    //   image: "/placeholder.svg?height=400&width=400",
    //   href: "/products/microfiber-dusters/silk-lens-cloth",
    //   badges: ["Silk", "Premium"],
    // },
    {
      id: 3,
      name: "EcoFine Microfiber Suede Screen Cleaning Cloth",
      description: '14"x14" large format cloth for screens and monitors',
      price: "$7.98",
      packSize: "Pack of 3",
      image: black14x14main,
      href: "/products/microfiber-dusters/screen-cloth",
      badges: ["Screen Cleaning", "Large Format"],
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
                Microfiber Dusters
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Specialized microfiber cloths for delicate surfaces
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
              <span>Microfiber Dusters</span>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose EcoFine Microfiber Dusters?
              </h2>
              <p className="text-gray-500">
                Our specialized microfiber dusters and cleaning cloths are designed for delicate surfaces that require
                gentle yet effective cleaning. From optical lenses to electronic screens, our products provide
                streak-free, lint-free results every time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Ultra-soft materials that won't scratch delicate surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Specialized weaves for different applications</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Lint-free and streak-free results</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Washable and reusable for eco-friendly cleaning</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Delicate+Surface+Cleaning"
                  alt="Delicate Surface Cleaning"
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
                Need Custom Microfiber Solutions?
              </h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your specialized cleaning requirements
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