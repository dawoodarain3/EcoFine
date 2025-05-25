import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Factory, Globe, Lightbulb, Recycle } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <CheckCircle className="h-10 w-10 text-green-600" />,
      title: "High Quality Microfiber",
      description: "Premium materials that ensure superior cleaning performance and durability",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-green-600" />,
      title: "Innovative Design",
      description: "Cutting-edge product designs that improve cleaning efficiency",
    },
    {
      icon: <Recycle className="h-10 w-10 text-green-600" />,
      title: "Eco-Conscious Materials",
      description: "Sustainable materials that reduce environmental impact",
    },
    {
      icon: <Factory className="h-10 w-10 text-green-600" />,
      title: "Private Label Support",
      description: "Comprehensive OEM/ODM services for your brand",
    },
    {
      icon: <Clock className="h-10 w-10 text-green-600" />,
      title: "Fast Manufacturing",
      description: "Efficient production processes to meet your deadlines",
    },
    {
      icon: <Globe className="h-10 w-10 text-green-600" />,
      title: "Global Delivery",
      description: "Reliable shipping to destinations worldwide",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose EcoGreenProducts</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Partner with us for superior quality and sustainable cleaning solutions
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <CardTitle className="text-center">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
