import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SDGSection() {
  const featuredSDGs = [
    {
      id: 12,
      title: "Responsible Consumption and Production",
      description: "Our reusable microfiber products reduce waste and promote sustainable consumption.",
      color: "#BF8B2E",
      image: "/placeholder.svg?height=100&width=100&text=SDG+12",
    },
    {
      id: 6,
      title: "Clean Water and Sanitation",
      description: "Our products reduce water usage and minimize chemical runoff into water systems.",
      color: "#26BDE2",
      image: "/placeholder.svg?height=100&width=100&text=SDG+6",
    },
    {
      id: 3,
      title: "Good Health and Well-being",
      description: "Microfiber cleaning reduces chemical usage for healthier indoor environments.",
      color: "#4C9F38",
      image: "/placeholder.svg?height=100&width=100&text=SDG+3",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Commitment to the Sustainable Development Goals
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              EcoFine Products is proudly aligned with the UN Sustainable Development Goals
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredSDGs.map((sdg) => (
            <Card key={sdg.id} className="overflow-hidden border-0 shadow-sm">
              <div className="h-2" style={{ backgroundColor: sdg.color }}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={sdg.image || "/placeholder.svg"}
                    alt={`SDG ${sdg.id}: ${sdg.title}`}
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h3 className="text-lg font-bold">
                    Goal {sdg.id}: {sdg.title}
                  </h3>
                </div>
                <p className="text-gray-500 mb-4">{sdg.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/sdg-commitment">Learn More About Our SDG Commitment</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
