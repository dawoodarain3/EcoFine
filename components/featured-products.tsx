import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Diamond Microfibre Cloth",
      description: "Premium microfiber cloth with diamond pattern for superior cleaning",
      image: "/placeholder.svg?height=300&width=300",
      badges: ["Eco-Friendly", "Reusable"],
    },
    {
      id: 2,
      name: "Recycled Mop Buckets",
      description: "Durable mop buckets made from 100% recycled plastic",
      image: "/placeholder.svg?height=300&width=300",
      badges: ["Recycled Plastic", "Durable"],
    },
    {
      id: 3,
      name: "Magnetic Flat Mop System",
      description: "Innovative magnetic mop system for efficient floor cleaning",
      image: "/placeholder.svg?height=300&width=300",
      badges: ["Innovative", "Efficient Cleaning"],
    },
    {
      id: 4,
      name: "Original Microfibre Cloth",
      description: "High-quality microfiber cloth for streak-free cleaning",
      image: "/placeholder.svg?height=300&width=300",
      badges: ["Water Saving", "Eco-Friendly"],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Eco Smart Range</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our best-selling sustainable products for efficient and eco-friendly cleaning
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-0 shadow-sm">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  {product.badges.map((badge, index) => (
                    <Badge key={index} className="bg-green-600">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500">{product.description}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/products">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
