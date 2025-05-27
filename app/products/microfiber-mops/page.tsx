import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Check } from "lucide-react"
import { ColorCodingGuide } from "@/components/color-coding-guide"
import flatmopmain from "../../../public/Mops/Microfiber Flat Mop Pads - 18/Blue/Main.png"
import wetmoppods from "../../../public/Microfiber Wet Mop Pads/Main.png"
import HeavyDutyFrameMain from "../../../public/Mops/Heavy Duty Frame Handle/01.png"
import scrubbermopmain from "@/public/Mops/Microfiber Scrubber Mop Pad/18/Main.png"
import commercialtubemop from "@/public/Mops/Commercial Tube Mop/Blue/Main.png"
import stringmop from "@/public/Mops/String Mop/Main.png"
export default function MicrofiberMopsPage() {
  const products = [
    {
      id: 1,
      name: 'EcoFine Microfiber Flat Mop Pads - 18"',
      description: "Professional-grade 475 GSM microfiber mop pads with longer loops for superior cleaning",
      price: "$29.98",
      packSize: "Pack of 3 & 6 available",
      colors: "Red, Blue, Green, White, Yellow",
      image: flatmopmain,
      href: "/products/microfiber-mops/flat-mop-pads-18",
      badges: ["Professional", "Color-Coded", "Multiple Packs"],
    },
    {
      id: 2,
      name: 'X-Large Microfiber String Mop',
      description: "20 oz X-Large string mop equivalent to 32 oz cotton with superior absorption",
      price: "$24.99",
      packSize: "Each",
      colors: ['Blue', 'White'],
      image: stringmop,
      href: "/products/microfiber-mops/x-large-string-mop",
      badges: ["X-Large", "20 Ounce", "String Mop"],
    },
    {
      id: 3,
      name: "Premium Microfiber Wet Mop Pad",
      description: "470 GSM microfiber mop pad with foam backing and hook and loop attachment",
      price: "$13.98",
      packSize: "Each",
      colors: "Light Blue/Medium Blue",
      image: wetmoppods,
      href: "/products/microfiber-mops/premium-wet-mop-pad",
      badges: ["Premium", "Foam Backing"],
    },
    {
      id: 4,
      name: '18" Heavy Duty Frame & Handle',
      description: "Aluminum frame with high-impact plastic and telescoping handle",
      price: "$19.98",
      packSize: "Each",
      image: HeavyDutyFrameMain,
      href: "/products/microfiber-mops/heavy-duty-frame-handle",
      badges: ["Hardware", "Durable"],
    },
    {
      id: 5,
      name: 'Ecofine Microfiber Scrubber Mop',
      description: "Dual-action mop with scrubbing strips for tough cleaning jobs",
      price: "$14.98",
      packSize: "Each",
      sizes: ['18"', '20"', '24"'],
      image: scrubbermopmain,
      href: "/products/microfiber-mops/scrubber-mop",
      badges: ["Scrubbing", "Dual-Action"],
    },
    {
      id: 6,
      name: 'Commercial Microfiber Tube Mop',
      description: "Professional tube mop with mesh headband for commercial wet cleaning",
      price: "$89.99",
      packSize: "Case of 12",
      colors: ['Blue', 'Green', 'Yellow', 'Red'],
      image: commercialtubemop,
      href: "/products/microfiber-mops/commercial-tube-mop",
      badges: ["Commercial", "Mesh Headband"],
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                Microfiber Mops
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Professional-grade microfiber mops for efficient cleaning
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
              <span>Microfiber Mops</span>
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
                Our color-coded microfiber mops help prevent cross-contamination and maintain hygiene standards
              </p>
            </div>
          </div>
          <ColorCodingGuide />

          <div className="mt-12 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-blue-800">Color Coding in Action: Microfiber Mops</h3>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-3 h-3 w-16 rounded-full bg-red-500"></div>
                <h4 className="mb-2 font-semibold text-gray-900">Red Mops</h4>
                <p className="text-sm text-gray-600">
                  Used for high-risk areas such as toilets, urinals, and bathroom floors to prevent cross-contamination
                  with other areas.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-3 h-3 w-16 rounded-full bg-blue-500"></div>
                <h4 className="mb-2 font-semibold text-gray-900">Blue Mops</h4>
                <p className="text-sm text-gray-600">
                  Used for general-purpose cleaning in low-risk areas such as offices, hallways, and common areas.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-3 h-3 w-16 rounded-full bg-green-500"></div>
                <h4 className="mb-2 font-semibold text-gray-900">Green Mops</h4>
                <p className="text-sm text-gray-600">
                  Used for food preparation areas, kitchens, and cafeterias to maintain food safety standards.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-3 h-3 w-16 rounded-full bg-yellow-500"></div>
                <h4 className="mb-2 font-semibold text-gray-900">Yellow Mops</h4>
                <p className="text-sm text-gray-600">
                  Used for cleaning sinks, basins, and other surfaces in non-food preparation areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Microfiber Mop Collection</h2>
              <p className="mx-auto max-w-[700px] text-gray-500">
                Professional-grade microfiber mops available in multiple sizes and configurations
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
                    {product.components && (
                      <p className="mb-2 text-xs text-gray-500">
                        <span className="font-medium">Includes:</span> {product.components}
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

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits of Microfiber Mops</h2>
              <p className="text-gray-500">
                Our microfiber mops offer significant advantages over traditional cotton mops, providing superior
                cleaning performance while reducing water and chemical usage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Reduces water usage by up to 90% compared to traditional mops</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Minimizes chemical usage while improving cleaning effectiveness</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Removes up to 99% of bacteria with just water</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Lightweight design reduces worker fatigue</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Washable and reusable for up to 500 launderings</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Color-coded to prevent cross-contamination</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Microfiber+Mop+Benefits"
                  alt="Microfiber Mop Benefits"
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
                Need Custom Microfiber Mop Solutions?
              </h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your custom microfiber mop requirements
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
