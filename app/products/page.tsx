import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import imageid2 from "../../public/EcoFine Microfiber Cloth/Microfiber 16x16-300gsm-50packs/Blue/Main.png"
import glasscleaningclothmain from "../../public/Glass Cleaning Microfiber/Main.png"

export default function ProductsPage() {
  const categories = [
    {
      id: "microfiber-cloths",
      name: "Microfiber Cloths & Towels",
      icon: "🧵",
      products: [
        {
          id: 1,
          name: 'Microfiber Suede Lens Cleaning Clot',
          description: "Premium 300 GSM microfiber cloth with 4-thread overlock stitching",
          price: "$24.99",
          packSize: "Pack of 12",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/microfiber-cloths/16x16-300gsm-12pack",
          badges: ["Premium", "Multi-Color"],
        },
        {
          id: 2,
          name: 'EcoFine Microfiber Cloth - 16" x 16" - 300 GSM',
          description: "Premium 300 GSM microfiber cloth with 4-thread overlock stitching",
          price: "$89.99",
          packSize: "Pack of 50",
          image: imageid2,
          href: "/products/microfiber-cloths/16x16-300gsm-50pack",
          badges: ["Bulk", "Value Pack"],
        },
        {
          id: 3,
          name: 'EcoFine Microfiber Cloth - 12" x 12" - 320 GSM',
          description: "Professional 320 GSM microfiber cloth with 4-thread overlock stitching",
          price: "$19.99",
          packSize: "Pack of 12",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/microfiber-cloths/12x12-320gsm-12pack",
          badges: ["Professional", "High GSM"],
        },
        {
          id: 4,
          name: 'EcoFine Microfiber Glass Cleaning Cloth - 16" x 16"',
          description: "Specialized cloth for streak-free glass cleaning",
          price: "$12.99",
          packSize: "Pack of 6",
          image: glasscleaningclothmain,
          href: "/products/microfiber-cloths/glass-cleaning",
          badges: ["Streak-Free", "Glass Specific"],
        },
        {
          id: 5,
          name: 'EcoFine Microfiber Waffle Weave Towel - 16" x 16"',
          description: "360 GSM waffle pattern for enhanced absorption",
          price: "$14.98",
          packSize: "Pack of 6",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/microfiber-cloths/waffle-weave",
          badges: ["Waffle Pattern", "Super Absorbent"],
        },
      ],
    },
    {
      id: "microfiber-mops",
      name: "Microfiber Mops",
      icon: "🧹",
      products: [
        {
          id: 6,
          name: 'Microfiber Flat Mop Pads - 18" - Pack of 3',
          description: "Professional-grade microfiber mop pads for efficient cleaning",
          price: "$29.98",
          packSize: "Pack of 3",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/microfiber-mops/flat-mop-pads-18-3pack",
          badges: ["Professional", "Color-Coded"],
        },
        {
          id: 7,
          name: 'Premium Microfiber Wet Mop Pads - 18" - Pack of 6',
          description: "475 GSM microfiber mop pads with longer loops for superior cleaning",
          price: "$64.98",
          packSize: "Pack of 6",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/microfiber-mops/premium-wet-mop-pads-18-6pack",
          badges: ["Premium", "High GSM"],
        },
        {
          id: 8,
          name: '18" Heavy Duty Frame & Handle',
          description: "Aluminum frame with high-impact plastic and telescoping handle",
          price: "$19.98",
          packSize: "Each",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/microfiber-mops/heavy-duty-frame-handle",
          badges: ["Hardware", "Durable"],
        },
        {
          id: 9,
          name: '18" Microfiber Scrubber Mop',
          description: "Dual-action mop with scrubbing strips for tough cleaning jobs",
          price: "$14.98",
          packSize: "Each",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/microfiber-mops/scrubber-mop",
          badges: ["Scrubbing", "Dual-Action"],
        },
        {
          id: 10,
          name: '18" Microfiber Mop System',
          description: "Complete mop system with telescoping handle, frame, and pads",
          price: "$49.98",
          packSize: "Set",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/microfiber-mops/mop-system",
          badges: ["Complete System", "Professional"],
        },
      ],
    },
    {
      id: "car-care",
      name: "Car Care Products",
      icon: "🚗",
      products: [
        {
          id: 11,
          name: "EcoFine™ Detail 400 GSM Microfiber Towel",
          description: '16"x16" 400 GSM durable, all-purpose detailing towel',
          price: "$14.98",
          packSize: "6 Pack",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/car-care/detail-400-gsm",
          badges: ["400 GSM", "All-Purpose"],
        },
        {
          id: 12,
          name: "EcoFine™ Detail 550 GSM Microfiber Towel",
          description: '16"x16" 550 GSM premium quality detailing towel',
          price: "$16.98",
          packSize: "6 Pack",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/car-care/detail-550-gsm",
          badges: ["550 GSM", "Premium"],
        },
        {
          id: 13,
          name: "EcoFine Drying Towel",
          description: '16"x24" waffle weave towel that absorbs 7x its weight',
          price: "$18.98",
          packSize: "6 Pack",
          image: "/placeholder.svg?height=300&width=300",
          href: "/products/car-care/drying-towel",
          badges: ["Super Absorbent", "Large Size"],
        },
      ],
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
                Our Products
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Eco-friendly cleaning solutions for professional use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="microfiber-cloths" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span className="hidden md:inline">{category.name}</span>
                  <span className="md:hidden">{category.name.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">{category.name}</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500">
                      High-quality {category.name.toLowerCase()} for professional cleaning
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.products.map((product) => (
                    <div
                      key={product.id}
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
                <div className="mt-8 text-center">
                  <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    <Link href={`/products/${category.id}`}>View All {category.name}</Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* OEM/ODM Options */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">OEM/ODM Options</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                All our products are available for customization through our OEM/ODM services. Create your own branded
                cleaning solutions with EcoFine Products.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">Custom Branding</span>
                  <span className="text-gray-500">Add your logo and brand colors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                    Custom Packaging
                  </span>
                  <span className="text-gray-500">Tailored packaging solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                    Custom Materials
                  </span>
                  <span className="text-gray-500">Select materials to meet your specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">Custom Design</span>
                  <span className="text-gray-500">Create unique products for your brand</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/services">Learn More About OEM/ODM</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="OEM/ODM Services"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Order?</h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your cleaning product needs
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
