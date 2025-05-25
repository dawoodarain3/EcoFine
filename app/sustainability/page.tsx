import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Recycle, Droplets, Package, Factory, Award } from "lucide-react"

export default function SustainabilityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                  Our Commitment to Sustainability
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Creating a cleaner world through eco-friendly cleaning solutions
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sustainable manufacturing"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Approach to Sustainability
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At EcoFine Products, sustainability isn't just a buzzword—it's at the core of everything we do. We
                believe that cleaning products should not only be effective but also environmentally responsible.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our commitment to sustainability extends throughout our entire operation, from the materials we source
                to our manufacturing processes and the final products we deliver to our customers.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sustainable materials"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Sustainability Initiatives
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How we're making a difference for the environment
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Recycle className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">Plastic Reduction</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  We're committed to reducing plastic waste by using recycled materials in our products and minimizing
                  plastic packaging. Our recycled mop buckets are made from 100% post-consumer plastic waste.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">Microfiber Reusability</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Our microfiber products are designed for durability and reusability, reducing the need for disposable
                  cleaning materials. A single EcoFine Products microfiber cloth can replace hundreds of paper towels.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Droplets className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">Water Efficiency</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Our products are designed to clean effectively with minimal water usage. Our microfiber technology
                  requires up to 90% less water than traditional cleaning methods.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Package className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">Sustainable Packaging</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  We use recycled and biodegradable materials for our packaging, and we're constantly working to reduce
                  packaging waste throughout our supply chain.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Factory className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">Green Manufacturing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Our factory implements energy-efficient processes, waste reduction measures, and responsible water
                  management to minimize our environmental footprint.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  We maintain ISO 14001 environmental management certification and are committed to meeting and
                  exceeding international environmental standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Environmental Impact</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Making a measurable difference
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">By the Numbers</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-xl font-bold text-green-600">50%</span>
                  </div>
                  <div>
                    <p className="text-gray-500">Reduction in plastic waste through our recycled materials program</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-xl font-bold text-green-600">90%</span>
                  </div>
                  <div>
                    <p className="text-gray-500">
                      Less water used with our microfiber technology compared to traditional cleaning
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-xl font-bold text-green-600">30%</span>
                  </div>
                  <div>
                    <p className="text-gray-500">Energy reduction in our manufacturing facility since 2018</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-xl font-bold text-green-600">75%</span>
                  </div>
                  <div>
                    <p className="text-gray-500">Of our packaging materials are recycled or biodegradable</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Environmental impact"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Sustainable Products</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cleaning solutions that care for the planet
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="overflow-hidden border-0 shadow-sm">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Recycled Mop Buckets"
                  width={300}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">100% Recycled</span>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Recycled Mop Buckets</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500">
                  Made from 100% post-consumer plastic waste, our mop buckets give new life to plastic that would
                  otherwise end up in landfills.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-sm">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Diamond Microfiber Cloth"
                  width={300}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Water Saving</span>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Diamond Microfiber Cloth</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500">
                  Our premium microfiber cloths require minimal water and no chemicals for effective cleaning, reducing
                  environmental impact.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-sm">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Magnetic Flat Mop System"
                  width={300}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Innovative</span>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Magnetic Flat Mop System</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500">
                  Our innovative magnetic mop system is designed for durability and efficiency, reducing waste and
                  improving cleaning performance.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/products">View All Sustainable Products</Link>
            </Button>
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
                Partner with EcoFine Products for sustainable cleaning solutions
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
