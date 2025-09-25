import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About Vanguard Energy</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are committed to delivering sustainable, reliable, and efficient energy solutions across the globe.
              With decades of experience in the oil and gas industry, we provide comprehensive services that power the
              world's energy needs while maintaining the highest standards of safety and environmental responsibility.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Global Projects</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/offshore-oil-platform-operations-industrial-worker.jpg"
              alt="Offshore operations"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
