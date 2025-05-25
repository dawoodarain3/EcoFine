import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SDGCommitmentPage() {
  const sdgs = [
    {
      id: 3,
      title: "Good Health and Well-being",
      description: "Our microfiber products reduce chemical usage, promoting healthier indoor environments.",
      color: "#4C9F38",
      image: "/placeholder.svg?height=200&width=200&text=SDG+3",
      products: ["Microfiber Cloths & Towels", "Mop Pads & Mops", "Cleaning Kits"],
    },
    {
      id: 6,
      title: "Clean Water and Sanitation",
      description: "Reusable cloths and mop pads help reduce wastewater and reliance on disposable cleaning products.",
      color: "#26BDE2",
      image: "/placeholder.svg?height=200&width=200&text=SDG+6",
      products: ["Microfiber Cloths & Towels", "Mop Pads & Mops", "Cleaning Kits"],
    },
    {
      id: 12,
      title: "Responsible Consumption and Production",
      description: "Long-lasting and washable microfiber products reduce waste and single-use alternatives.",
      color: "#BF8B2E",
      image: "/placeholder.svg?height=200&width=200&text=SDG+12",
      products: ["Microfiber Cloths & Towels", "Dusters & Car Care", "Home & Kitchen"],
    },
    {
      id: 13,
      title: "Climate Action",
      description: "Sustainable product sourcing and lower environmental impact support climate-conscious living.",
      color: "#3F7E44",
      image: "/placeholder.svg?height=200&width=200&text=SDG+13",
      products: ["Mop Pads & Mops", "Dusters & Car Care"],
    },
    {
      id: 14,
      title: "Life Below Water",
      description: "Reduced use of synthetic cleaning agents helps prevent chemical runoff into waterways.",
      color: "#0A97D9",
      image: "/placeholder.svg?height=200&width=200&text=SDG+14",
      products: ["Microfiber Cloths & Towels", "Cleaning Kits"],
    },
    {
      id: 15,
      title: "Life on Land",
      description: "Our reduced waste initiative contributes to a lower landfill footprint and better land ecosystems.",
      color: "#56C02B",
      image: "/placeholder.svg?height=200&width=200&text=SDG+15",
      products: ["Home & Kitchen", "Microfiber Cloths & Towels"],
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
                Our Commitment to the Sustainable Development Goals (SDGs)
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                At EcoFine Products, we're committed to creating a cleaner, greener future through our sustainable
                cleaning solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Introduction */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Aligned with Global Goals</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The United Nations Sustainable Development Goals (SDGs) provide a shared blueprint for peace and
                prosperity for people and the planet, now and into the future. At EcoFine Products, we've aligned our
                mission with these global goals.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our eco-friendly microfiber products contribute to multiple SDGs by reducing chemical usage, minimizing
                waste, conserving water, and promoting sustainable consumption patterns.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/products">Explore Our Sustainable Products</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=SDGs"
                alt="UN Sustainable Development Goals"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SDG Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How We Contribute to the SDGs
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our products and practices support these key Sustainable Development Goals
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sdgs.map((sdg) => (
              <Card key={sdg.id} className="overflow-hidden border-0 shadow-sm">
                <div className="relative">
                  <div className="h-3" style={{ backgroundColor: sdg.color }}></div>
                  <div className="p-6 flex items-center">
                    <div className="w-20 h-20 min-w-20 mr-4">
                      <Image
                        src={sdg.image || "/placeholder.svg"}
                        alt={`SDG ${sdg.id}: ${sdg.title}`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Goal {sdg.id}</h3>
                      <p className="text-md font-medium">{sdg.title}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-500 mb-4">{sdg.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Related Product Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sdg.products.map((product, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Sustainable Impact</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Making a measurable difference for our planet
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <h3 className="text-lg font-medium mb-2">Washes Per Cloth</h3>
              <p className="text-sm text-gray-500">
                Each EcoFine microfiber cloth can be washed hundreds of times, replacing thousands of disposable
                alternatives.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <h3 className="text-lg font-medium mb-2">Less Water Usage</h3>
              <p className="text-sm text-gray-500">
                Our microfiber technology requires up to 90% less water than traditional cleaning methods.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
              <h3 className="text-lg font-medium mb-2">Fewer Chemicals</h3>
              <p className="text-sm text-gray-500">
                EcoFine products reduce the need for harsh cleaning chemicals by up to 75%.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Us in Making a Difference
              </h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose sustainable cleaning solutions that are better for your home and our planet
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/products">Shop Sustainable Products</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
