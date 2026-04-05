import { Phone, Clock, MapPin, Instagram, CheckCircle2, Zap, Shield, Package, Search, Shirt, Wind, Sparkles, Menu, MessageCircle } from "lucide-react";
import a2zLogo from "@/assets/A2Z_logo.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/9109920602363?text=Hi%20A2Z%20Laundry%2C%20I%27d%20like%20to%20place%20an%20order.";

const qcSteps = [
  { title: "Inspection", desc: "Every garment checked for stains, damage, and special care labels on arrival.", icon: Search },
  { title: "Sorting", desc: "Separated by fabric type, colour, and wash temperature to prevent damage.", icon: Package },
  { title: "Wash / Clean", desc: "Processed with appropriate detergent, temperature, and cycle for each fabric.", icon: Wind },
  { title: "Post-wash Check", desc: "Stains re-treated if needed. No garment moves forward until clean.", icon: CheckCircle2 },
  { title: "Pressing", desc: "Ironed or steam-pressed to factory-finish standards.", icon: Shirt },
  { title: "Final QC", desc: "Button check, lint removal, fold/hang inspection before packaging.", icon: Shield },
  { title: "Packaging", desc: "Clean garments packed in fresh covers to prevent transit damage.", icon: Package },
  { title: "Dispatch", desc: "Delivered to your door. You're notified at every step via WhatsApp.", icon: Zap },
];

const faqs = [
  {
    q: "What if a garment is damaged or lost?",
    a: "Every garment is inspected and documented at pickup. If damage occurs during processing, we compensate up to 10x the service cost for that item. Lost items are replaced at fair market value. Claims must be raised within 24 hours of delivery.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and bank transfers. Payment is collected at the time of delivery. No advance payment required.",
  },
  {
    q: "Can I cancel or reschedule a pickup?",
    a: "Yes. Message us on WhatsApp at least 2 hours before the scheduled pickup slot to cancel or reschedule at no charge. Late cancellations may not be accommodated on the same day.",
  },
  {
    q: "Do you handle delicate fabrics like silk or wool?",
    a: "Yes — silk, wool, linen, and cashmere are processed via dry cleaning with fabric-specific solvents. We do not accept leather, suede, or heavily embellished bridal wear. If in doubt, send a photo on WhatsApp and we'll confirm.",
  },
  {
    q: "What areas do you deliver to?",
    a: "Free pickup and delivery within Ghatkopar East and West. Areas beyond Ghatkopar (Vikhroli, Chembur, Kurla) are serviced with a ₹30 delivery surcharge. Confirm your area via WhatsApp before booking.",
  },
];

const navSections = [
  { id: "pricing", label: "Pricing" },
  { id: "services", label: "Services" },
  { id: "turnaround", label: "Turnaround" },
  { id: "quality", label: "Quality" },
  { id: "faq", label: "FAQ" },
];

const Index = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src={a2zLogo} alt="A2Z Laundry logo" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-lg font-bold tracking-tight text-foreground">A2Z Laundry</span>
          </div>
          <div className="hidden gap-6 md:flex">
            {navSections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {/* Mobile hamburger */}
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex items-center gap-2 mb-6">
                  <img src={a2zLogo} alt="A2Z Laundry logo" className="h-8 w-8 rounded-full object-cover" />
                  <span className="text-lg font-bold text-foreground">A2Z Laundry</span>
                </div>
                <nav className="flex flex-col gap-4">
                  {navSections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={() => setMobileNavOpen(false)}
                      className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gap-2">
                      <Phone className="h-4 w-4" /> Book via WhatsApp
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2">
                <Phone className="h-4 w-4" /> Book Now
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center md:py-28">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          A2Z Laundry – Flawless Quality. Transparent Pricing.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          where outfits receive the care they deserve
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
          <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-xl shadow-lg">
            <Phone className="h-5 w-5" /> Book via WhatsApp
          </Button>
        </a>
        <p className="mt-3 text-sm text-muted-foreground">Instant two-way communication. Real-time order tracking.</p>
      </section>

      <Separator />

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-foreground text-center">Transparent Pricing</h2>
        <p className="mt-2 text-center text-muted-foreground">What you see is what you pay.</p>
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary">
                <TableHead className="font-semibold text-foreground">Service</TableHead>
                <TableHead className="font-semibold text-foreground">Rate</TableHead>
                <TableHead className="font-semibold text-foreground">Minimum Order</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { service: "Wash & Fold", rate: "₹59 / kg", min: "₹199 (min 3 kg)" },
                { service: "Standard Ironing", rate: "₹10 / piece", min: "₹149 (min 15 pcs)" },
                { service: "Dry Cleaning", rate: "₹199 / piece", min: "₹199 (1 piece)" },
                { service: "Wash & Iron", rate: "₹89 / kg", min: "₹249 (min 3 kg)" },
              ].map((row) => (
                <TableRow key={row.service}>
                  <TableCell className="font-medium">{row.service}</TableCell>
                  <TableCell>{row.rate}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="font-semibold">{row.min}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* Service Area Callout */}
        <div className="mx-auto mt-6 max-w-3xl rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
          <p className="text-sm text-foreground text-center">
            <MapPin className="inline h-4 w-4 mr-1 text-primary" />
            Free pickup & delivery within <strong>Ghatkopar East & West</strong>. Areas beyond Ghatkopar serviced with ₹30 delivery surcharge — <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80">confirm via WhatsApp</a>.
          </p>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Prices inclusive of pickup & delivery within Ghatkopar. No surge pricing. No hidden charges.
        </p>
      </section>

      <Separator />

      {/* Services */}
      <section id="services" className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-foreground text-center">Core Services</h2>
        <p className="mt-2 text-center text-muted-foreground">Things we do the best</p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Wash & Fold",
              icon: Wind,
              desc: "Clothes washed with fabric-appropriate detergent, tumble-dried, and neatly folded. Sorted by colour and fabric.",
            },
            {
              title: "Standard Ironing",
              icon: Shirt,
              desc: "Crisp, wrinkle-free press for everyday wear. Each piece inspected for stains before ironing.",
            },
            {
              title: "Dry Cleaning",
              icon: Sparkles,
              desc: "Solvent-based cleaning for suits, blazers, silk, and delicate fabrics. Returned on hangers in garment covers.",
            },
          ].map((s) => (
            <Card key={s.title} className="border bg-card">
              <CardContent className="pt-6">
                <s.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Turnaround */}
      <section id="turnaround" className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-foreground text-center">Realistic Turnaround Times</h2>
        <p className="mt-2 text-center text-muted-foreground">
          Based on peak operational load 
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
          <Card className="border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground">Standard Delivery</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Wash & Fold: <strong className="text-foreground">48–72 hours</strong></li>
                <li>Standard Ironing: <strong className="text-foreground">24–48 hours</strong></li>
                <li>Dry Cleaning: <strong className="text-foreground">72–96 hours</strong></li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">Pickup scheduled within 4 hours of booking.</p>
            </CardContent>
          </Card>
          <Card className="border border-primary/30 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Express Processing</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Wash & Fold: <strong className="text-foreground">24 hours</strong></li>
                <li>Standard Ironing: <strong className="text-foreground">12 hours</strong></li>
                <li>Dry Cleaning: <strong className="text-foreground">48 hours</strong></li>
              </ul>
              <Badge className="mt-4">+50% Express Premium</Badge>
              <p className="mt-2 text-xs text-muted-foreground">Subject to slot availability. Confirmed via WhatsApp.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Quality Control */}
      <section id="quality" className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-foreground text-center">8-Stage Quality Control</h2>
        <p className="mt-2 text-center text-muted-foreground">
          Every garment passes through 8 checkpoints.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {qcSteps.map((step, i) => (
            <Card key={step.title} className="border bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <step.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-foreground text-center">Frequently Asked Questions</h2>
        <p className="mt-2 text-center text-muted-foreground">Straight answers to common concerns.</p>
        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-foreground">A2Z Laundry</h3>
            <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>SHOP NO - 04, BUILDING NO-1, SHIMBRADEVI SRA CHS, MP Vaidya Marg, Maheshwar Nagar, Sindhu Wadi, Ghatkopar East, Mumbai, Maharashtra 400077</span>
            </div>
            {/* Google Maps Embed */}
            <div className="mt-4 overflow-hidden rounded-lg border" style={{ height: 160 }}>
              <iframe
                title="A2Z Laundry Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Shimbradevi+SRA+CHS,+Sindhu+Wadi,+Ghatkopar+East,+Mumbai,+Maharashtra+400077&zoom=16&maptype=roadmap"
                width="100%"
                height="200"
                style={{ border: 0, marginBottom: -40 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Hours</h3>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Open Daily: 8:00 AM – 10:30 PM</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:09920602363" className="hover:text-foreground transition-colors">099206 02363</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Connect</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="w-full gap-2">
                  <Phone className="h-4 w-4" /> Book via WhatsApp
                </Button>
              </a>
              <a
                href="https://www.instagram.com/atozlaundry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" /> @atozlaundry on Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 px-4">
          <Separator className="mb-4" />
          <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} A2Z Laundry. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg transition-transform hover:scale-110 md:hidden"
        aria-label="Book via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
