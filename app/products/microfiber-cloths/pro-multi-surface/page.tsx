import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Check } from "lucide-react"

export default function ProMultiSurfacePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Breadcrumb */}
      <div className="w-full bg-gray-100 py-4">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
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
            <span>Pro Multi-Surface Microfiber Cloth</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="EcoFine Pro Multi-Surface Microfiber Cloth"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={`/placeholder.svg?height=150&width=150&text=Image+${i}`}
                      alt={`Product image ${i}`}
                      width={150}
                      height={150}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  EcoFine Pro Multi-Surface Microfiber Cloth
                </h1>
                <p className="mt-4 text-gray-500">12"x12" professional-grade cleaning cloth for all surfaces</p>
              </div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-green-600">$19.99</div>
                <div className="ml-4 rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-semibold text-green-800">
                  12 Pack
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Key Features:</h3>
                <ul className="space-y-1">
                  {[
                    "Professional-grade microfiber cloth",
                    "Ideal for all surfaces",
                    "Highly absorbent and durable",
                    "Reduces the need for chemicals",
                    "Machine washable up to 500 times",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Available Colors:</h3>
                <div className="flex space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer border-2 border-white shadow-sm"></div>
                  <div className="h-8 w-8 rounded-full bg-green-500 cursor-pointer border-2 border-white shadow-sm"></div>
                  <div className="h-8 w-8 rounded-full bg-red-500 cursor-pointer border-2 border-white shadow-sm"></div>
                  <div className="h-8 w-8 rounded-full bg-yellow-500 cursor-pointer border-2 border-white shadow-sm"></div>
                </div>
              </div>
              <div className="flex flex-col w-full sm:flex-row gap-3 pt-4 sm:space-y-0">
                <Button className="bg-green-600 hover:bg-green-700">Request a Quote</Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Download Specifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6 rounded-lg border bg-white p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Product Description</h3>
                <p>
                  The EcoFine Pro Multi-Surface Microfiber Cloth is a professional-grade cleaning cloth designed for
                  superior performance across all surfaces. Made with high-quality microfiber material, these cloths
                  provide exceptional cleaning power while being gentle on surfaces.
                </p>
                <p>
                  Our unique blend of polyester and polyamide creates a cloth that effectively captures dust, dirt, and
                  bacteria without the need for harsh chemicals. The ultra-fine fibers ensure that even the smallest
                  particles are trapped within the cloth.
                </p>
                <p>
                  Each cloth features reinforced stitching around the edges to prevent fraying and extend the product
                  lifespan. These cloths can be machine washed up to 500 times, making them an economical and
                  eco-friendly choice for professional cleaning.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6 rounded-lg border bg-white p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Product Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 font-medium">Size</td>
                        <td className="py-2">12" x 12" (30cm x 30cm)</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Material</td>
                        <td className="py-2">80% Polyester, 20% Polyamide</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Weight</td>
                        <td className="py-2">300 GSM</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Colors Available</td>
                        <td className="py-2">Blue, Green, Red, Yellow</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Pack Size</td>
                        <td className="py-2">12 Pack</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Washable</td>
                        <td className="py-2">Up to 500 times</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Edge Finish</td>
                        <td className="py-2">Reinforced stitching</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="applications" className="mt-6 rounded-lg border bg-white p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Applications</h3>
                <p>
                  The EcoFine Pro Multi-Surface Microfiber Cloth is versatile and can be used in a wide range of
                  cleaning applications:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Commercial cleaning services</li>
                  <li>Healthcare facilities</li>
                  <li>Hospitality industry</li>
                  <li>Food service industry</li>
                  <li>Educational institutions</li>
                  <li>Office buildings</li>
                  <li>Retail environments</li>
                  <li>Residential cleaning</li>
                </ul>
                <p className="mt-4">
                  These cloths are ideal for cleaning glass, stainless steel, wood, granite, marble, and other surfaces
                  without leaving streaks or lint behind.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold tracking-tighter sm:text-3xl text-center">Related Products</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "EcoFine Economy All Purpose Microfiber Towels",
                description: '12"x12" 250 GSM microfiber towels',
                price: "$24.99",
                packSize: "50 Pack",
                image: "/placeholder.svg?height=300&width=300",
                href: "/products/microfiber-cloths/economy-all-purpose",
              },
              {
                name: "EcoFine™ Detail 400 GSM Microfiber Towel",
                description: '16"x16" 400 GSM premium microfiber towel',
                price: "$14.98",
                packSize: "6 Pack",
                image: "/placeholder.svg?height=300&width=300",
                href: "/products/microfiber-cloths/detail-400-gsm",
              },
              {
                name: "EcoFine Glass Cleaning Microfiber Cloth",
                description: '16"x16" specialized cloth for glass cleaning',
                price: "$12.99",
                packSize: "6 Pack",
                image: "/placeholder.svg?height=300&width=300",
                href: "/products/microfiber-cloths/glass-cleaning",
              },
              {
                name: "EcoFine Waffle Weave Microfiber Towel",
                description: '16"x16" waffle pattern for enhanced absorption',
                price: "$12.98",
                packSize: "6 Pack",
                image: "/placeholder.svg?height=300&width=300",
                href: "/products/microfiber-cloths/waffle-weave",
              },
            ].map((product, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <Link href={product.href}>
                  <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                    <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-sm font-semibold text-gray-900">{product.name}</h3>
                    <p className="mb-2 text-xs text-gray-500">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-green-600">{product.price}</p>
                      <p className="text-xs text-gray-500">{product.packSize}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
