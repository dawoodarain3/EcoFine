import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Lightbulb, Package, Palette, Shield, Truck } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                  OEM & ODM Services
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Create your own line of eco-friendly cleaning products
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Custom product development"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OEM vs ODM */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                OEM vs ODM: What's the Difference?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Understanding the options for your brand
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Package className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center text-xl">Original Equipment Manufacturing (OEM)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-500">
                  With OEM services, you provide the design specifications and we manufacture the products according to
                  your requirements. This option is ideal for brands that already have established product designs and
                  need a reliable manufacturing partner.
                </p>
                <ul className="text-left mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-500">You provide the design specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-500">We manufacture according to your requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-500">Your brand, our manufacturing expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-500">Quality control to your standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center text-xl">Original Design Manufacturing (ODM)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-500">
                  With ODM services, we handle both the design and manufacturing processes. This option is perfect for
                  brands looking to launch cleaning products without investing in product development. We'll create
                  custom designs based on your requirements.
                </p>
                <ul className="text-left mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-500">We design and manufacture the products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-500">You provide the concept and requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-500">Faster time-to-market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-500">Reduced development costs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From concept to delivery, we're with you every step of the way
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                </div>
                <CardTitle className="text-center">Consultation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  We discuss your requirements, target market, and brand vision to understand your needs
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                </div>
                <CardTitle className="text-center">Design & Prototyping</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Our team creates designs and prototypes based on your specifications
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                </div>
                <CardTitle className="text-center">Material Selection</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  We help you select the best materials for your products, focusing on sustainability
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-2xl font-bold text-green-600">4</span>
                  </div>
                </div>
                <CardTitle className="text-center">Manufacturing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Production begins with strict quality control measures throughout the process
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-2xl font-bold text-green-600">5</span>
                  </div>
                </div>
                <CardTitle className="text-center">Packaging</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Custom packaging with your branding, designed for sustainability and visual appeal
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <span className="text-2xl font-bold text-green-600">6</span>
                  </div>
                </div>
                <CardTitle className="text-center">Delivery</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Efficient logistics to deliver your products to your specified destination
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services Offered</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive support for your brand's cleaning product line
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <Palette className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Custom Design Support</h3>
                    <p className="text-sm text-gray-500">
                      Our design team works with you to create products that align with your brand identity
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <Package className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Private Labeling</h3>
                    <p className="text-sm text-gray-500">
                      Add your brand to our existing product line with custom colors and packaging
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Packaging Support</h3>
                    <p className="text-sm text-gray-500">
                      Eco-friendly packaging solutions designed to showcase your brand
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">NDA Compliance</h3>
                    <p className="text-sm text-gray-500">
                      We respect your intellectual property with strict confidentiality agreements
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <Truck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Global Logistics</h3>
                    <p className="text-sm text-gray-500">Efficient shipping solutions to destinations worldwide</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="OEM/ODM Services"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Submit Your Custom Design</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's bring your vision to life
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="product-type" className="text-sm font-medium">
                      Product Type
                    </label>
                    <select id="product-type" className="w-full rounded-md border border-gray-300 p-2 text-sm">
                      <option value="">Select product type</option>
                      <option value="microfiber-mops">Microfiber Mops</option>
                      <option value="mop-buckets">Mop Buckets & Frames</option>
                      <option value="microfiber-cloths">Microfiber Cloths</option>
                      <option value="smart-tools">Smart Cleaning Tools</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service-type" className="text-sm font-medium">
                      Service Type
                    </label>
                    <select id="service-type" className="w-full rounded-md border border-gray-300 p-2 text-sm">
                      <option value="">Select service type</option>
                      <option value="oem">OEM (You provide the design)</option>
                      <option value="odm">ODM (We design for you)</option>
                      <option value="private-label">Private Label</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm min-h-[100px]"
                      placeholder="Describe your project, requirements, and any specific details"
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="file" className="text-sm font-medium">
                      Upload Design (if available)
                    </label>
                    <input id="file" type="file" className="w-full rounded-md border border-gray-300 p-2 text-sm" />
                    <p className="text-xs text-gray-500">Max file size: 10MB. Accepted formats: PDF, JPG, PNG</p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Submit Request</Button>
                </form>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your custom cleaning product needs
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
