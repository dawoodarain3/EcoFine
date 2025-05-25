import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Clock, Download, Calendar, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                  Contact Us
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Get in touch with our team to discuss your cleaning product needs
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Contact us"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="inquiry" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="inquiry">General Inquiry</TabsTrigger>
              <TabsTrigger value="quote">Request a Quote</TabsTrigger>
              <TabsTrigger value="distributor">Become a Distributor</TabsTrigger>
              <TabsTrigger value="visit">Book a Call</TabsTrigger>
            </TabsList>
            <TabsContent value="inquiry" className="mt-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm min-h-[100px]"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Contact Information</h2>
                    <p className="text-gray-500">Feel free to reach out to us through any of the following channels:</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <Mail className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <span className="text-sm text-gray-500">info@ecofineproducts.com</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Factory Location</h3>
                        <p className="text-sm text-gray-500">
                          123 Manufacturing Way
                          <br />
                          Industrial Zone, Asia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <Clock className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-sm text-gray-500">
                          Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)
                          <br />
                          Saturday: 9:00 AM - 1:00 PM (GMT+8)
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-4">
                    <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      <Link href="#">
                        <Download className="h-4 w-4 mr-2" />
                        Download Company Profile
                      </Link>
                    </Button>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="#">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        WhatsApp Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="quote" className="mt-8">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="quote-name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="quote-name"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="quote-company" className="text-sm font-medium">
                          Company
                        </label>
                        <input
                          id="quote-company"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="quote-email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="quote-email"
                          type="email"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="quote-phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <input
                          id="quote-phone"
                          type="tel"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="quote-product" className="text-sm font-medium">
                        Product Interest
                      </label>
                      <select id="quote-product" className="w-full rounded-md border border-gray-300 p-2 text-sm">
                        <option value="">Select product category</option>
                        <option value="microfiber-mops">Microfiber Mops</option>
                        <option value="mop-buckets">Mop Buckets & Frames</option>
                        <option value="microfiber-cloths">Microfiber Cloths</option>
                        <option value="smart-tools">Smart Cleaning Tools</option>
                        <option value="custom">Custom Product</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="quote-quantity" className="text-sm font-medium">
                        Estimated Quantity
                      </label>
                      <input
                        id="quote-quantity"
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        placeholder="Quantity"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="quote-details" className="text-sm font-medium">
                        Additional Details
                      </label>
                      <textarea
                        id="quote-details"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm min-h-[100px]"
                        placeholder="Please provide any specific requirements or questions"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Request Quote</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="distributor" className="mt-8">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Become a Distributor</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="distributor-name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="distributor-name"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="distributor-company" className="text-sm font-medium">
                          Company
                        </label>
                        <input
                          id="distributor-company"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="distributor-email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="distributor-email"
                          type="email"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="distributor-phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <input
                          id="distributor-phone"
                          type="tel"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="distributor-country" className="text-sm font-medium">
                        Country
                      </label>
                      <input
                        id="distributor-country"
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        placeholder="Country"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="distributor-website" className="text-sm font-medium">
                        Website (if available)
                      </label>
                      <input
                        id="distributor-website"
                        type="url"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        placeholder="https://www.example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="distributor-experience" className="text-sm font-medium">
                        Experience in the Industry
                      </label>
                      <select
                        id="distributor-experience"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="distributor-message" className="text-sm font-medium">
                        Additional Information
                      </label>
                      <textarea
                        id="distributor-message"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm min-h-[100px]"
                        placeholder="Tell us about your distribution network, target market, and why you're interested in our products"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Submit Application</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="visit" className="mt-8">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Book a Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="call-name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="call-name"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="call-company" className="text-sm font-medium">
                          Company
                        </label>
                        <input
                          id="call-company"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="call-email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="call-email"
                          type="email"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="call-phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <input
                          id="call-phone"
                          type="tel"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="call-date" className="text-sm font-medium">
                        Preferred Date
                      </label>
                      <input
                        id="call-date"
                        type="date"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="call-time" className="text-sm font-medium">
                        Preferred Time (GMT+8)
                      </label>
                      <select id="call-time" className="w-full rounded-md border border-gray-300 p-2 text-sm">
                        <option value="">Select time</option>
                        <option value="9-10">9:00 AM - 10:00 AM</option>
                        <option value="10-11">10:00 AM - 11:00 AM</option>
                        <option value="11-12">11:00 AM - 12:00 PM</option>
                        <option value="14-15">2:00 PM - 3:00 PM</option>
                        <option value="15-16">3:00 PM - 4:00 PM</option>
                        <option value="16-17">4:00 PM - 5:00 PM</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="call-topic" className="text-sm font-medium">
                        Discussion Topic
                      </label>
                      <textarea
                        id="call-topic"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm min-h-[100px]"
                        placeholder="What would you like to discuss during the call?"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Location</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find us at our manufacturing facility
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=1000"
                alt="Map location"
                width={1000}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Global Presence</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Supplying Premium Cleaning Solutions Worldwide
              </p>
            </div>
            <div className="w-full max-w-4xl mt-8">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Global Map"
                width={800}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Canada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">France</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Italy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">UAE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Saudi Arabia</span>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your cleaning product needs
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button asChild className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/contact">Download Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
