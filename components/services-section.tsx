import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Ship, Anchor, Wrench, Package, Users, Truck, UserCheck } from "lucide-react"

const services = [
  {
    title: "Offshore Support Services",
    description: "Comprehensive support for offshore operations including platform maintenance and emergency response.",
    icon: Anchor,
  },
  {
    title: "Vessel Chartering",
    description: "Professional vessel chartering services for offshore transportation and logistics operations.",
    icon: Ship,
  },
  {
    title: "Integrated Subsea Solutions",
    description: "Advanced subsea engineering and installation services for deep-water projects.",
    icon: Wrench,
  },
  {
    title: "General Procurement Services",
    description: "Strategic procurement solutions for equipment, materials, and specialized industrial supplies.",
    icon: Package,
  },
  {
    title: "Consultancy Services & Project Management",
    description: "Expert consulting and comprehensive project management for energy sector initiatives.",
    icon: Users,
  },
  {
    title: "Logistics",
    description: "Efficient logistics and supply chain management for complex energy operations.",
    icon: Truck,
  },
  {
    title: "Staff Contracting Services",
    description: "Specialized personnel recruitment and contracting for technical and operational roles.",
    icon: UserCheck,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive energy solutions tailored to meet the complex demands of modern offshore operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
