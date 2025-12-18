
import AppCard from "@/components/landing/AppCard";
import Footer from "@/components/landing/Footer";
import HeroHeader from "@/components/landing/HeroHeader";
import QuoteForm from "@/components/landing/QuoteForm";
import SectionCard from "@/components/landing/SectionCard";

const services = [
  {
    name: "Mobile Welding",
    subtitle: "On-Site Service",
    description: "On-site welding services for farm, industrial, and equipment repair. We bring the tools and experience directly to your location to handle breakdowns, repairs, and field work efficiently. Available for standard and emergency service, using steel, aluminum, and stainless.*",
    pricing: [
      "Mobile Welding: 2-hour minimum @ $110/hr",
      "Billing begins when we depart the shop and ends upon return",
      "Emergency Mobile Welding: 2-hour minimum @ $140/hr",
      "Emergency service available after hours and weekends",
      "*Material type may affect pricing"
    ]
  },
  {
    name: "Shop & Mobile Fabrication",
    subtitle: "Custom Builds",
    description: "Custom and structural fabrication completed in our shop or on-site for projects that require precision, planning, or extended fabrication time. Ideal for new builds, modifications, and structural work that go beyond standard repair jobs. Fabrication services are available using steel, aluminum, and stainless.",
    note: "Project-based or hourly pricing available. Request a quote below."
  },
  {
    name: "Equipment Repair",
    subtitle: "Farm & Industrial",
    description: "Reliable repair services for farm equipment, industrial machinery, and structural components. Whether it's worn, cracked, or broken, we focus on strong, long-lasting repairs that keep your equipment working and minimize downtime.",
    note: "Steel, aluminum, and stainless welding available."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroHeader
        phone="(434) 683-1283"
        services="Mobile Welding • Shop Fabrication • Equipment Repair"
      />

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <section className="mb-10" data-testid="section-our-services">
          <h2 
            className="text-primary text-[1.1rem] tracking-[0.18em] uppercase font-semibold mb-6 text-center"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <AppCard key={index} name={service.name} subtitle={service.subtitle} description={service.description} pricing={service.pricing} note={service.note} />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
          <SectionCard title="About Us">
            <div className="space-y-4 text-muted-foreground text-[0.97rem] leading-relaxed font-medium">
              <p className="indent-6">
                CarbonEdge, LLC is a locally owned mobile welding business based near Keysville, Virginia. We specialize in mobile welding, shop fabrication, and equipment repair for farm, industrial, and commercial clients throughout the Piedmont region.
              </p>
              <p className="indent-6">
                Our work is focused on dependable repairs, strong fabrication, and practical solutions that keep equipment working and downtime to a minimum. We believe in showing up prepared, communicating clearly, and delivering quality work without surprises.
              </p>
              <p className="indent-6">
                From on-site repairs to custom fabrication projects, every job is approached with the same attention to detail and commitment to doing it right the first time.
              </p>
              <p className="text-center text-[1.05rem] font-semibold mt-6 bg-gradient-to-r from-primary via-[#60a5fa] to-white bg-clip-text text-transparent">
                Clear pricing. Honest work. Reliable service.
              </p>

              {/* Divider */}
              <div className="border-t border-muted-foreground/30 my-6"></div>

              {/* Contact Us Section */}
              <h3 
                className="text-primary text-[1.1rem] tracking-[0.18em] uppercase font-semibold mb-4 text-center"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Contact Us
              </h3>
              <p className="indent-6 mb-4">
                Have a question or need a quote? Reach out — we're happy to help.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-foreground">Phone:</span>{" "}
                <a 
                  href="tel:+14346831283" 
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
                >
                  (434) 683-1283
                </a>
              </p>
              <p className="mb-4">
                <span className="font-semibold text-foreground">Email:</span>{" "}
                <a 
                  href="mailto:carbonedgewelding@gmail.com" 
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
                >
                  carbonedgewelding@gmail.com
                </a>
              </p>
              <p className="indent-6 mb-4 italic">
                Photos welcome for faster estimates.
              </p>
              <p className="indent-6">
                <span className="font-semibold text-foreground">Service Area:</span> Based near Keysville, VA. Serving surrounding areas with extended travel available.
              </p>
            </div>
          </SectionCard>

          <SectionCard title="Request a Quote">
            <QuoteForm />
          </SectionCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}
