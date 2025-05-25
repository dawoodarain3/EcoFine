import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ColorCodingGuide } from "@/components/color-coding-guide"

export default function CleaningKitsPage() {
  const products = [
    {
      id: 1,
      name: "Professional Cleaning Kit - Standard",
      description: "Complete cleaning solution with microfiber cloths, mop, and accessories",
      price: "$89.99",
      packSize: "Kit",
      image: "/placeholder.svg?height=300&width=300&text=Cleaning+Kit",
      href: "/products/cleaning-kits/professional-standard",
      badges: ["Complete Kit", "Professional"],
      features: [
        '4 Microfiber Cloths (16" x 16")',
        "1 Microfiber Mop with Frame",
        "2 Mop Pads",
        "1 Spray Bottle",
        "1 Carrying Bag",
      ],
    },
    {
      id: 2,
      name: "Deluxe Cleaning Kit - Premium",
      description: "Premium cleaning kit with color-coded cloths and advanced tools",
      price: "$149.99",
      packSize: "Kit",
      image: "/placeholder.svg?height=300&width=300&text=Deluxe+Kit",
      href: "/products/cleaning-kits/deluxe-premium",
      badges: ["Premium", "Color-Coded"],
      features: [
        "8 Color-Coded Microfiber Cloths",
        "1 Professional Mop System",
        "4 Specialized Mop Pads",
        "2 Spray Bottles",
        "1 Duster with Extension Pole",
        "1 Professional Carrying Case",
      ],
    },
    {
      id: 3,
      name: "Starter Cleaning Kit",
      description: "Essential cleaning tools for home or small business use",
      price: "$49.99",
      packSize: "Kit",
      image: "/placeholder.svg?height=300&width=300&text=Starter+Kit",
      href: "/products/cleaning-kits/starter-kit",
      badges: ["Starter", "Value"],
      features: ['2 Microfiber Cloths (16" x 16")', "1 Basic Mop with Frame", "1 Mop Pad", "1 Spray Bottle"],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/cleaning-kits">Cleaning Kits</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                Professional Cleaning Kits
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl mx-auto">
                Complete cleaning solutions for professional and home use. Our kits include everything you need for
                effective and efficient cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <Link href={product.href}>
                  <div className="relative h-60 w-full overflow-hidden bg-gray-200">
                    <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
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
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Kit Includes:</h4>
                      <ul className="text-xs text-gray-500 list-disc pl-4 space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
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

      {/* Color Coding Guide */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Color Coding in Professional Cleaning
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl mx-auto">
                Our premium cleaning kits include color-coded microfiber cloths to prevent cross-contamination and
                ensure proper hygiene standards.
              </p>
            </div>
          </div>
          <ColorCodingGuide />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Benefits of Our Cleaning Kits
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl mx-auto">
                Why choose our professional cleaning kits for your business or home
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
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
                  className="text-green-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Solution</h3>
              <p className="text-gray-500">
                Everything you need in one package, saving you time and money on sourcing individual products.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
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
                  className="text-green-600"
                >
                  <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path>
                  <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path>
                  <line x1="12" y1="22" x2="12" y2="13"></line>
                  <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Quality</h3>
              <p className="text-gray-500">
                Commercial-grade tools and materials designed for durability and superior cleaning performance.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
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
                  className="text-green-600"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-500">
                Sustainable materials and reusable products that reduce waste and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Order?</h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your cleaning kit needs or customize your own kit
              </p>
            </div>
            <div className="flex flex-col w-full sm:flex-row gap-3 mt-6">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/catalog">Download Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
