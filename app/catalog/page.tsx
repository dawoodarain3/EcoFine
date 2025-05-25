import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Mail, Phone } from "lucide-react"

export default function CatalogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-green-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-green-800 sm:text-5xl xl:text-6xl/none">
                  EcoFine Products Catalog
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Browse our complete range of premium microfiber and cleaning solutions
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href="#download-section">Download Catalog</a>
                </Button>
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/contact">Request Physical Catalog</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=400&text=EcoFine+Catalog+Cover"
                  alt="EcoFine Products Catalog Cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-bold">2023-2024</h2>
                    <p className="text-lg">Product Catalog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section className="w-full bg-white py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Catalog Preview</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a look inside our comprehensive product catalog
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="overflow-hidden rounded-lg border shadow-sm">
                <Image
                  src={`/placeholder.svg?height=400&width=300&text=Catalog+Page+${index}`}
                  alt={`Catalog page ${index}`}
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href="#download-section">View Full Catalog</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download-section" className="w-full bg-green-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Download Our Catalog</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get instant access to our complete product range, specifications, and pricing information. Our catalog
                is available in multiple formats for your convenience.
              </p>

              <div className="space-y-4 pt-4">
                <Card className="overflow-hidden border-0 shadow-sm">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="rounded-full bg-green-100 p-3">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Complete Product Catalog</h3>
                      <p className="text-sm text-gray-500">PDF format, 15MB</p>
                    </div>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <a href="/dummy-catalog.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-sm">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="rounded-full bg-green-100 p-3">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Microfiber Cloths & Towels Catalog</h3>
                      <p className="text-sm text-gray-500">PDF format, 5MB</p>
                    </div>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <a href="/dummy-microfiber-catalog.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-sm">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="rounded-full bg-green-100 p-3">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Mops & Cleaning Tools Catalog</h3>
                      <p className="text-sm text-gray-500">PDF format, 7MB</p>
                    </div>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <a href="/dummy-mops-catalog.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Request Physical Catalog</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Prefer a physical copy? Fill out the form below and we'll mail you our latest catalog free of charge.
              </p>

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
                  <label htmlFor="address" className="text-sm font-medium">
                    Mailing Address
                  </label>
                  <textarea
                    id="address"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm"
                    placeholder="Your complete mailing address"
                    rows={3}
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Request Catalog
                </Button>
              </form>

              <div className="mt-6 rounded-lg bg-green-100 p-4">
                <h3 className="mb-2 text-lg font-semibold">Need Immediate Assistance?</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Our product specialists are available to help you find the right solutions for your needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-green-600" />
                    <span className="text-sm">1-800-ECO-FINE (1-800-326-3463)</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-green-600" />
                    <span className="text-sm">catalog@ecofineproducts.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-green-600 py-12 text-white md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Order?</h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your cleaning product needs
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
