"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import { EmailSubscriptionPopup } from "@/components/email-subscription-popup"
import logogreen from "@/public/logogreen.jpeg"
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    // Handle scroll effect for header
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const productCategories = [
    {
      name: "Microfiber Cloths & Towels",
      href: "/products/microfiber-cloths",
      icon: "/placeholder.svg?height=24&width=24&text=🧽",
      color: "#3498db",
    },
    {
      name: "Microfiber Mops",
      href: "/products/microfiber-mops",
      icon: "/placeholder.svg?height=24&width=24&text=🧹",
      color: "#2ecc71",
    },
    {
      name: "Microfiber Dusters",
      href: "/products/microfiber-dusters",
      icon: "/placeholder.svg?height=24&width=24&text=🪶",
      color: "#e74c3c",
    },
    {
      name: "Car Care Products",
      href: "/products/car-care",
      icon: "/placeholder.svg?height=24&width=24&text=🚗",
      color: "#f39c12",
    },
    {
      name: "Cleaning Kits",
      href: "/products/cleaning-kits",
      icon: "/placeholder.svg?height=24&width=24&text=🧰",
      color: "#9b59b6",
    },
    {
      name: "View All Products",
      href: "/products",
      icon: "/placeholder.svg?height=24&width=24&text=📋",
      color: "#34495e",
    },
  ]

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Products",
      href: "/products",
      dropdown: true,
      items: productCategories,
    },
    { name: "OEM/ODM Services", href: "/services" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "SDG Commitment", href: "/sdg-commitment" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <div className="w-full bg-green-600 text-white py-2">
        <div className="container flex justify-center md:justify-between items-center px-4 md:px-6 text-xs md:text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <span className="flex items-center">Free Shipping</span>
            <span className="flex items-center">No Minimums</span>
            <span className="flex items-center">Free Returns</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/industries" className="hover:underline">
              Industries Served
            </Link>
            <Link href="/contact" className="hover:underline">
              Need Samples?
            </Link>
            <Link href="/catalog" className="hover:underline">
              Download Catalog
            </Link>
          </div>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logogreen}
              alt="EcoFine Products Logo"
              width={50}
              height={50}
              className="rounded"
            />
            <div>
              <span className="text-lg font-bold text-green-600">EcoFine Products</span>
              <p className="text-xs text-gray-500">100% USA Brand</p>
            </div>
          </Link>
          <nav className="ml-auto hidden gap-6 md:flex">
            {navigation.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-green-600">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href} className="flex items-center">
                          <div
                            className="w-6 h-6 mr-2 flex items-center justify-center rounded-full"
                            style={{ backgroundColor: subItem.color }}
                          >
                            <Image
                              src={subItem.icon || "/placeholder.svg"}
                              alt={subItem.name}
                              width={16}
                              height={16}
                              className="object-contain"
                            />
                          </div>
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-green-600"
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>
          <div className="ml-auto md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[400px] overflow-y-auto">
                <div className="flex flex-col gap-6 pt-6">
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <div key={item.name} className="space-y-3">
                        <div className="font-medium">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center text-sm transition-colors hover:text-green-600"
                              onClick={() => setIsOpen(false)}
                            >
                              <div
                                className="w-5 h-5 mr-2 flex items-center justify-center rounded-full"
                                style={{ backgroundColor: subItem.color }}
                              >
                                <Image
                                  src={subItem.icon || "/placeholder.svg"}
                                  alt={subItem.name}
                                  width={12}
                                  height={12}
                                  className="object-contain"
                                />
                              </div>
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-green-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ),
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="ml-auto hidden md:flex">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </header>
      {showPopup && <EmailSubscriptionPopup onClose={() => setShowPopup(false)} />}
    </>
  )
}
