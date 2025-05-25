import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Building, Briefcase, HeartPulse, ShoppingBag } from "lucide-react"

export function IndustriesServed() {
  const industries = [
    {
      icon: <Building2 className="h-10 w-10 text-green-600" />,
      title: "Hotels & Hospitality",
      description: "Premium cleaning solutions for the hospitality industry",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-green-600" />,
      title: "Commercial Cleaning Services",
      description: "Professional-grade products for cleaning companies",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-green-600" />,
      title: "Retail Chains",
      description: "Branded cleaning solutions for retail businesses",
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-green-600" />,
      title: "Hospitals & Clinics",
      description: "Hygienic cleaning products for healthcare facilities",
    },
    {
      icon: <Building className="h-10 w-10 text-green-600" />,
      title: "Government Institutions",
      description: "Reliable cleaning supplies for public facilities",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-green-600" />,
      title: "Cleaning Brands",
      description: "OEM/ODM services for established cleaning brands",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Industries We Serve</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Providing specialized cleaning solutions across various sectors
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">{industry.icon}</div>
                <CardTitle className="text-center">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-500">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
