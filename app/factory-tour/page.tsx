import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award } from "lucide-react"

export default function FactoryTourPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                  Factory Tour
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Take a virtual tour of our state-of-the-art manufacturing facility
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Factory exterior"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Factory Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Manufacturing Facility
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Located in Asia, our 50,000 square meter factory is equipped with the latest technology and staffed by
                over 200 skilled workers. We have invested heavily in creating a modern, efficient, and environmentally
                responsible manufacturing facility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-500">State-of-the-art production lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-500">Advanced quality control systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-500">Research and development laboratory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-500">Energy-efficient operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-500">Sustainable waste management</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Factory interior"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Factory Gallery */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Factory Gallery</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our manufacturing facility through images
              </p>
            </div>
          </div>
          <Tabs defaultValue="production" className="w-full mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="production">Production Lines</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
              <TabsTrigger value="warehouse">Warehouse</TabsTrigger>
              <TabsTrigger value="qa">Quality Assurance</TabsTrigger>
              <TabsTrigger value="packaging">Packaging</TabsTrigger>
            </TabsList>
            <TabsContent value="production" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Production line 1"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Production line 2"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Production line 3"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Production line 4"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Production line 5"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Production line 6"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
            </TabsContent>
            <TabsContent value="team" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Team 1"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Team 2"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Team 3"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Team 4"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Team 5"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Team 6"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
            </TabsContent>
            <TabsContent value="warehouse" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Warehouse 1"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Warehouse 2"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Warehouse 3"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Warehouse 4"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Warehouse 5"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Warehouse 6"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
            </TabsContent>
            <TabsContent value="qa" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Quality Assurance 1"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Quality Assurance 2"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Quality Assurance 3"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Quality Assurance 4"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Quality Assurance 5"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Quality Assurance 6"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
            </TabsContent>
            <TabsContent value="packaging" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Packaging 1"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Packaging 2"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Packaging 3"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Packaging 4"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Packaging 5"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Packaging 6"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Factory Video */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Factory Video Tour</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a virtual tour of our manufacturing facility
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-12">
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Factory video thumbnail"
                width={1000}
                height={600}
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="rounded-full w-16 h-16 bg-green-600 hover:bg-green-700">
                  <span className="sr-only">Play video</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Certifications</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Quality and sustainability certifications
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">ISO 9001:2015</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Quality Management System certification ensuring consistent product quality
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">ISO 14001:2015</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">
                  Environmental Management System certification for sustainable manufacturing
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
                  Business Social Compliance Initiative certification for ethical business practices
                </p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visit Our Factory</h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in seeing our facility in person? Contact us to arrange a visit.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/contact">Book a Factory Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
