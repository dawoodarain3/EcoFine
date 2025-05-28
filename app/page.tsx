import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Recycle, Droplets, Globe } from "lucide-react"
import { IndustriesServed } from "@/components/industries-served"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HeroSection } from "@/components/hero-section"
import { SDGSection } from "@/components/sdg-section"
import ecofriendlymain from "@/public/EcoFine Microfiber Cloth/EcoFine Microfiber Cloth - 16 x 16/Blue/Main.png"
import microfiber12x12_8x8main from "@/public/Microfiber Suede Lens Cleaning Cloth 8x8/Gray/Main.png"
import globalimage from "@/public/Mops/Heavy Duty Frame Handle/01.png"
import xlargeimage from "@/public/Mops/String Mop/Main.png"
import scrubbermops from "@/public/Mops/Microfiber Scrubber Mop Pad/18/Main.png"
import glasscleaningclothmain from "@/public/Glass Cleaning Microfiber/Main.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      {/* Introduction */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Global Leader in Eco-Friendly Cleaning Solutions
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                EcoFine Products is a 100% USA brand producing high-performance microfiber mops, cloths, and buckets
                focused on efficiency, innovation, and sustainability. We provide OEM and ODM services for global
                brands, wholesalers, and commercial cleaning solution providers.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/catalog">Download Catalog</Link>
                </Button>
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/contact">Become a Distributor</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={ecofriendlymain}
                alt="EcoFine Products Factory"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <SDGSection />

      {/* Sustainability Highlights */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Commitment to Sustainability
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how our products are designed with the environment in mind
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-green-100 p-3">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-center">Eco-Friendly Materials</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Our products use sustainable materials that reduce environmental impact
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-green-100 p-3">
                    <Recycle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-center">Recycled Plastics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">We incorporate recycled materials in our manufacturing process</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-green-100 p-3">
                    <Droplets className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-center">Water Efficiency</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Our products are designed to clean effectively while using less water
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Microfiber Products
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our best selling cleaning products
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
  <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
    <CardHeader className="pb-2 relative">
      <Image
        src={microfiber12x12_8x8main}
        alt="Product"
        width={300}
        height={200}
        className="rounded-md object-cover aspect-video"
      />
      <div className="absolute top-2 right-2 flex flex-wrap gap-1">
        <div className="px-2 py-1 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold whitespace-nowrap">
          Lens Cleaning
        </div>
        <div className="px-2 py-1 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold whitespace-nowrap">
          Value Pack
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-1.5">
      <CardTitle className="text-lg">EcoFine Microfiber Suede Lens Cleaning Cloth</CardTitle>
      <p className="text-sm text-gray-500">Ultra-soft suede microfiber for delicate surfaces</p>
      <p className="text-sm font-medium">$15.98 - Pack of 10</p>
    </CardContent>
    <div className="p-4 flex justify-between items-center">
      <Button asChild variant="link" className="text-sm font-medium">
        <Link href="/products/microfiber-cloths/suede-lens">Learn More</Link>
      </Button>
    </div>
  </Card>

  <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
    <CardHeader className="pb-2 relative">
      <Image
        src={xlargeimage}
        alt="Product"
        width={300}
        height={200}
        className="rounded-md object-cover aspect-video"
      />
      <div className="absolute top-2 right-2 flex flex-wrap gap-1">
        <div className="px-2 py-1 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold whitespace-nowrap">
          X-Large
        </div>
        <div className="px-2 py-1 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold whitespace-nowrap">
          String Mop
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-1.5">
      <CardTitle className="text-lg">X-Large Microfiber String Mop</CardTitle>
      <p className="text-sm text-gray-500">20 oz X-Large string mop equivalent to 32 oz cotton with superior absorption</p>
      <p className="text-sm font-medium">$24.99 - Each</p>
    </CardContent>
    <div className="p-4 flex justify-between items-center">
      <Button asChild variant="link" className="text-sm font-medium">
        <Link href="/products/microfiber-mops/x-large-string-mop">Learn More</Link>
      </Button>
    </div>
  </Card>

  <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
    <CardHeader className="pb-2 relative">
      <Image
        src={scrubbermops}
        alt="Product"
        width={300}
        height={200}
        className="rounded-md object-cover aspect-video"
      />
      <div className="absolute top-2 right-2 flex flex-wrap gap-1">
        <div className="px-2 py-1 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold whitespace-nowrap">
          Hardware
        </div>
        <div className="px-2 py-1 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold whitespace-nowrap">
          Durable
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-1.5">
      <CardTitle className="text-lg">Ecofiber Microfiber Scrubber Mop</CardTitle>
      <p className="text-sm text-gray-500">Dual-action mop with scrubbing strips for tough cleaning jobs</p>
      <p className="text-sm font-medium">$14.98 - Each</p>
    </CardContent>
    <div className="p-4 flex justify-between items-center">
      <Button asChild variant="link" className="text-sm font-medium">
        <Link href="/products/microfiber-mops/scrubber-mop">Learn More</Link>
      </Button>
    </div>
  </Card>

  <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
    <CardHeader className="pb-2 relative">
      <Image
        src={glasscleaningclothmain}
        alt="Product"
        width={300}
        height={200}
        className="rounded-md object-cover aspect-video"
      />
      <div className="absolute top-2 right-2 flex flex-wrap gap-1">
        <div className="px-2 py-1 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold whitespace-nowrap">
          Professional
        </div>
        <div className="px-2 py-1 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold whitespace-nowrap">
          475 GSM
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-1.5">
      <CardTitle className="text-lg">EcoFine Microfiber Glass Cleaning Cloth - 16" x 16</CardTitle>
      <p className="text-sm text-gray-500">Specialized cloth for streak-free glass cleaning</p>
      <p className="text-sm font-medium">$12.99 - Pack of 6</p>
    </CardContent>
    <div className="p-4 flex justify-between items-center">
      <Button asChild variant="link" className="text-sm font-medium">
        <Link href="/products/microfiber-cloths/glass-cleaning">Learn More</Link>
      </Button>
    </div>
  </Card>
</div>
          <div className="text-center mt-8">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Industries We Serve */}
      <IndustriesServed />

      {/* Global Presence */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Global Presence</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Supplying Premium Cleaning Solutions Worldwide
              </p>
            </div>
            <div className="w-full max-w-4xl mt-8 flex flex-col items-center">
              <div className="w-full flex justify-center">
                <Image
                  src={globalimage}
                  alt="Global Map"
                  width={800}
                  height={400}
                  className="rounded-lg object-contain max-w-full h-auto"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Canada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">France</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Italy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">UK</span>
                </div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Partner With Us?</h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our global network of distributors and partners
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/catalog">Download Catalog</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-green-600 hover:bg-green-700">
                <Link href="/contact">Become a Distributor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
