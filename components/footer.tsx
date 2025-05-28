import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import logo from "@/public/logogreen.jpeg"
export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="EcoFine Products Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <div>
                <span className="text-lg font-bold text-green-600">EcoFine Products</span>
                <p className="text-xs text-gray-500">100% USA Brand</p>
              </div>
            </Link>
            <p className="text-sm text-gray-500">
              Premium janitorial product supplier in the USA, offering sustainable microfiber and cleaning solutions.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products/microfiber-cloths" className="text-sm text-gray-500 hover:text-green-600">
                  Microfiber Cloths & Towels
                </Link>
              </li>
              <li>
                <Link href="/products/microfiber-mops" className="text-sm text-gray-500 hover:text-green-600">
                  Microfiber Mops
                </Link>
              </li>
              <li>
                <Link href="/products/microfiber-dusters" className="text-sm text-gray-500 hover:text-green-600">
                  Microfiber Dusters
                </Link>
              </li>
              <li>
                <Link href="/products/car-care" className="text-sm text-gray-500 hover:text-green-600">
                  Car Care Products
                </Link>
              </li>
              <li>
                <Link href="/products/cleaning-kits" className="text-sm text-gray-500 hover:text-green-600">
                  Cleaning Kits
                </Link>
              </li>
              <li>
                <Link href="/products/home-kitchen" className="text-sm text-gray-500 hover:text-green-600">
                  Home & Kitchen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-green-600">
                  OEM/ODM Services
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm text-gray-500 hover:text-green-600">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/sdg-commitment" className="text-sm text-gray-500 hover:text-green-600">
                  SDG Commitment
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-sm text-gray-500 hover:text-green-600">
                  Product Catalog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-green-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="text-sm text-gray-500 hover:text-green-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy" className="text-sm text-gray-500 hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/cookies" className="text-sm text-gray-500 hover:text-green-600">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-sm text-gray-500 hover:text-green-600">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500 mb-2">
              EcoFine is proudly aligned with the UN Sustainable Development Goals (SDGs) for a cleaner, greener future.
            </p>
            <div className="flex justify-center space-x-2 mb-4">
              <Image
                src="/placeholder.svg?height=30&width=30&text=SDG+3"
                alt="SDG 3"
                width={30}
                height={30}
                className="rounded-full"
              />
              <Image
                src="/placeholder.svg?height=30&width=30&text=SDG+6"
                alt="SDG 6"
                width={30}
                height={30}
                className="rounded-full"
              />
              <Image
                src="/placeholder.svg?height=30&width=30&text=SDG+12"
                alt="SDG 12"
                width={30}
                height={30}
                className="rounded-full"
              />
              <Image
                src="/placeholder.svg?height=30&width=30&text=SDG+13"
                alt="SDG 13"
                width={30}
                height={30}
                className="rounded-full"
              />
              <Image
                src="/placeholder.svg?height=30&width=30&text=SDG+14"
                alt="SDG 14"
                width={30}
                height={30}
                className="rounded-full"
              />
              <Image
                src="/placeholder.svg?height=30&width=30&text=SDG+15"
                alt="SDG 15"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <Link href="/sdg-commitment" className="text-sm text-green-600 hover:text-green-700 font-medium">
              Learn More About Our Sustainability Impact
            </Link>
          </div>
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} EcoFine Products. All rights reserved. 100% USA Brand.
          </p>
        </div>
      </div>
    </footer>
  )
}
