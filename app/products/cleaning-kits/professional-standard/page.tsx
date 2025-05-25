import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProfessionalStandardKitPage() {
  const product = {
    id: 1,
    name: "Professional Cleaning Kit - Standard",
    description: "Complete cleaning solution with microfiber cloths, mop, and accessories",
    longDescription:
      "Our Professional Standard Cleaning Kit is designed for commercial cleaning professionals and businesses that demand high-quality cleaning tools. This comprehensive kit includes everything needed for effective and efficient cleaning of various surfaces and environments.",
    price: "$89.99",
    packSize: "Kit",
    sku: "CK-PRO-STD-001",
    availability: "In Stock",
    images: [
      "/placeholder.svg?height=600&width=600&text=Cleaning+Kit",
      "/placeholder.svg?height=600&width=600&text=Kit+Contents",
      "/placeholder.svg?height=600&width=600&text=In+Use",
      "/placeholder.svg?height=600&width=600&text=Carrying+Bag",
    ],
    features: [
      '4 Microfiber Cloths (16" x 16") - 300 GSM',
      "1 Microfiber Mop with Aluminum Frame",
      "2 Mop Pads (1 Wet, 1 Dust)",
      "1 Professional Spray Bottle",
      "1 Durable Carrying Bag",
    ],
    benefits: [
      "Professional-grade tools for superior cleaning results",
      "Color-coded microfiber cloths to prevent cross-contamination",
      "Ergonomic design for comfortable use",
      "Durable materials for long-lasting performance",
      "Compact storage with included carrying bag",
    ],
    specifications: [
      { name: "Kit Weight", value: "3.2 lbs (1.45 kg)" },
      { name: "Mop Frame Size", value: "18 inches" },
      { name: "Cloth Material", value: "80% Polyester, 20% Polyamide" },
      { name: "Cloth GSM", value: "300 GSM" },
      { name: "Mop Handle Length", value: "Adjustable 35-60 inches" },
      { name: "Carrying Bag Dimensions", value: '24" x 12" x 8"' },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Deluxe Cleaning Kit - Premium",
        price: "$149.99",
        image: "/placeholder.svg?height=300&width=300&text=Deluxe+Kit",
        href: "/products/cleaning-kits/deluxe-premium",
      },
      {
        id: 3,
        name: "Starter Cleaning Kit",
        price: "$49.99",
        image: "/placeholder.svg?height=300&width=300&text=Starter+Kit",
        href: "/products/cleaning-kits/starter-kit",
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products/cleaning-kits">Cleaning Kits</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{product.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-md border border-gray-200 bg-white">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Image ${index + 1}`}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-xl font-semibold text-green-600">{product.price}</p>
              <div className="mt-4 flex items-center space-x-2">
                <Badge className="bg-green-600">Professional</Badge>
                <Badge className="bg-green-600">Complete Kit</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">{product.longDescription}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">Kit Includes:</h3>
              <ul className="list-disc space-y-1 pl-5 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="font-medium text-gray-500">SKU:</span>
                <span>{product.sku}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="font-medium text-gray-500">Availability:</span>
                <span className="text-green-600">{product.availability}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <div className="flex items-center">
                  <select
                    id="quantity"
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                    defaultValue="1"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">Add to Cart</Button>
                <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-500">{spec.name}</span>
                        <span className="text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="benefits" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc space-y-2 pl-5 text-gray-600">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Shipping</h3>
                      <p className="mt-1 text-gray-600">
                        Free shipping on all orders over $100. Standard shipping takes 3-5 business days. Express
                        shipping options available at checkout.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Returns</h3>
                      <p className="mt-1 text-gray-600">
                        We accept returns within 30 days of delivery. Items must be unused and in original packaging.
                        Contact customer service to initiate a return.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
            {product.relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={relatedProduct.href}>
                <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-md">
                  <div className="aspect-square overflow-hidden rounded-md bg-gray-200">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{relatedProduct.name}</h3>
                    <p className="mt-1 font-semibold text-green-600">{relatedProduct.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
