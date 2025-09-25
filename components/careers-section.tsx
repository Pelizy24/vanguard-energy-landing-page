import { Button } from "@/components/ui/button"

export function CareersSection() {
  return (
    <section id="careers" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/energy-workers-engineers-industrial-team-offshore.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
            Join our team and help us shape the future of energy. We're looking for passionate professionals who want to
            make a difference in the global energy sector.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
            View Opportunities
          </Button>
        </div>
      </div>
    </section>
  )
}
