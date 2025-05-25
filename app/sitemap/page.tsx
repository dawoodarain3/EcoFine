import Link from "next/link"

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "OEM/ODM Services", href: "/services" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "SDG Commitment", href: "/sdg-commitment" },
        { name: "Contact", href: "/contact" },
        { name: "Catalog", href: "/catalog" },
      ],
    },
    {
      title: "Product Categories",
      links: [
        { name: "Microfiber Cloths & Towels", href: "/products/microfiber-cloths" },
        { name: "Microfiber Mops", href: "/products/microfiber-mops" },
        { name: "Microfiber Dusters", href: "/products/microfiber-dusters" },
        { name: "Car Care Products", href: "/products/car-care" },
        { name: "Cleaning Kits", href: "/products/cleaning-kits" },
        { name: "Home & Kitchen", href: "/products/home-kitchen" },
      ],
    },
    {
      title: "Product Pages",
      links: [
        { name: '16" x 16" Microfiber Cloth', href: "/products/microfiber-cloths/16x16" },
        { name: '12" x 12" Microfiber Cloth', href: "/products/microfiber-cloths/12x12" },
        { name: "Glass Cleaning Microfiber Cloth", href: "/products/microfiber-cloths/glass-cleaning" },
        { name: "Waffle Weave Microfiber Towel", href: "/products/microfiber-cloths/waffle-weave" },
        { name: "Premium Microfiber Wet Mop Pads", href: "/products/microfiber-mops/wet-mop-pads" },
        { name: "Microfiber Scrubber Mop", href: "/products/microfiber-mops/scrubber-mop" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Industries Served", href: "/industries" },
        { name: "Terms and Conditions", href: "/policies/terms" },
        { name: "Privacy Policy", href: "/policies/privacy" },
        { name: "Cookie Policy", href: "/policies/cookies" },
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full bg-green-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tighter text-green-800 sm:text-4xl md:text-5xl">
              Site Map
            </h1>
            <p className="mb-12 text-gray-500 md:text-lg">
              Find your way around the EcoFine Products website with our comprehensive site map.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {siteStructure.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h2 className="text-xl font-bold text-green-700">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-gray-600 hover:text-green-600 hover:underline">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
