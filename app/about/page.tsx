import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle, Recycle, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                  About EcoFine Products
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Leading the way in sustainable cleaning solutions
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="EcoFine Products Factory"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At EcoFine Products, our mission is to revolutionize the cleaning industry by providing premium,
                high-performance microfiber products that reduce environmental impact while delivering superior cleaning
                results.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are committed to reducing plastic waste, promoting efficient ecological cleaning systems, and
                supporting our clients in achieving their sustainability goals through innovative product design and
                responsible manufacturing practices.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Eco-friendly manufacturing"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Factory Background */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Factory Background</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                State-of-the-art manufacturing facility in Asia
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-gray-500">
                  Established in 2005, EcoGreenSolutions has grown to become a leading manufacturer of eco-friendly
                  cleaning solutions. Our 50,000 square meter facility employs over 200 skilled workers and features
                  advanced production lines dedicated to microfiber technology and sustainable product development.
                </p>
                <p className="text-gray-500">
                  We have invested heavily in research and development to create innovative cleaning products that
                  minimize environmental impact while maximizing cleaning efficiency. Our factory is equipped with the
                  latest technology to ensure consistent quality and efficient production.
                </p>
                <p className="text-gray-500">
                  With a production capacity of over 1 million units per month, we are able to meet the demands of
                  clients worldwide, from small distributors to large international brands.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Factory exterior"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Production line"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Quality control"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Warehouse"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quality Standards</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Committed to excellence in every product
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">ISO 9001:2015</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Certified quality management system ensuring consistent product quality
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Recycle className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">ISO 14001:2015</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Environmental management system certification for sustainable manufacturing
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">BSCI Compliant</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Adherence to ethical business practices and fair labor standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="R&D Laboratory"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">R&D Capabilities</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Innovation is at the heart of everything we do at EcoFine Products. Our dedicated research and
                development team works tirelessly to create new products and improve existing ones.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-500">Advanced material testing laboratory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-500">Prototype development and testing facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-500">Collaboration with environmental research institutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-500">Continuous improvement of sustainable materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-500">Custom product development for client-specific needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Work With Us</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your trusted partner in sustainable cleaning solutions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-center">Flexible MOQs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">Accommodating order quantities to suit businesses of all sizes</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-center">Custom Branding</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">Comprehensive OEM/ODM services to build your brand identity</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-center">Fast Lead Times</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">Efficient production and logistics for timely delivery</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-center">Export Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">Extensive knowledge of international shipping and compliance</p>
              </CardContent>
            </Card>
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
                Discover how EcoFine Products can help your business grow with sustainable cleaning solutions
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/contact">Request a Catalog</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/contact">Become a Distributor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
