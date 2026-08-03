import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import marinaAsset from "@/assets/marina.jpg.asset.json";
import avatar1Src from "@/assets/facepile/avatar-1.webp";
import avatar2Src from "@/assets/facepile/avatar-2.webp";
import avatar3Src from "@/assets/facepile/avatar-3.webp";
import avatar4Asset from "@/assets/avatar-4.webp.asset.json";
const clientAvatars = [{ url: avatar1Src }, { url: avatar2Src }, { url: avatar3Src }, { url: avatar4Asset.url }];
import {
  Camera,
  Check,
  X,
  MessageCircle,
  Phone,
  Instagram,
  ArrowRight,
  Menu,
  Sparkles,
  Clock,
  MapPin,
  Languages,
  ShieldCheck,
  Star,
} from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog";
import pamelaScreenshot from "@/assets/testimonials/pamela.webp.asset.json";
import saraScreenshot from "@/assets/testimonials/sara.webp.asset.json";
import anastasiaScreenshot from "@/assets/testimonials/anastasia.webp.asset.json";
import nicoleScreenshot from "@/assets/testimonials/nicole.webp.asset.json";
import anikaScreenshot from "@/assets/testimonials/anika.webp.asset.json";
import gracieScreenshot from "@/assets/testimonials/gracie.webp.asset.json";
import shaynaScreenshot from "@/assets/testimonials/shayna.webp.asset.json";
import annaScreenshot from "@/assets/testimonials/anna.webp.asset.json";
import familyMeadowAsset from "@/assets/portfolio/family-meadow.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATSAPP = "14039290173";
const PHONE_DISPLAY = "+1 (403) 929-0173";

const nav = [
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <TrustBar />
        <Pains />
        <Solutions />
        <Experience />
        <Gallery />
        <Pricing />
        <FitCheck />
        <About />
        <SafeToBook />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}

/* ---------- HEADER ---------- */

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark className="h-9 w-9 shrink-0 md:h-10 md:w-10" />
          <span className="font-sans text-[15px] font-medium uppercase tracking-[0.18em] text-foreground md:text-base">
            Marina Photo
          </span>
        </a>


        <nav className="hidden items-center gap-7 text-sm md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-foreground/75 transition-colors hover:text-accent-ink">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangPill />
          <Button asChild size="sm" className="rounded-full bg-prairie text-cream hover:bg-prairie/90">
            <a href="#book">Book</a>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border/60 bg-cream md:hidden">
          <div className="container-x flex flex-col gap-3 py-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="py-1 text-base">
                {n.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between">
              <LangPill />
              <Button asChild size="sm" className="rounded-full bg-prairie text-cream">
                <a href="#book" onClick={() => setMenuOpen(false)}>
                  Book
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LangPill() {
  const langs = ["EN", "UA", "PL", "RU"];
  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[11px]"
      title="Languages Marina speaks fluently"
      aria-label="Languages Marina speaks: English, Ukrainian, Polish, Russian"
    >
      <Languages className="h-3 w-3 text-accent-ink" />
      <span className="text-accent-ink">Speaks</span>
      <span className="ml-0.5 flex items-center gap-1 font-medium text-accent-ink">
        {langs.map((l, i) => (
          <span key={l} className="flex items-center gap-1">
            {l}
            {i < langs.length - 1 && <span className="text-foreground/30">·</span>}
          </span>
        ))}
      </span>
    </div>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="container-x grid gap-10 py-10 md:grid-cols-[1.05fr_1fr] md:gap-14 md:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-sm text-foreground/70">
            Hate having your picture taken? <span className="italic-display text-accent-ink">So do most of my couples.</span>
          </p>

          <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Look natural, <span className="italic-display text-accent-ink">feel loved</span>
            <br className="hidden sm:block" /> — no experience needed.
          </h1>

          <p className="mt-6 max-w-xl text-base text-foreground/75 md:text-lg">
            Without a single awkward pose — even if you're "not photogenic." I guide Calgary couples and moms-to-be move
            by move, so you relax and walk away with photos worth printing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group rounded-full bg-prairie px-6 text-cream hover:bg-prairie/90">
              <a href="#book">
                Book now — good dates fill fast
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-prairie/30 bg-transparent text-prairie hover:bg-prairie/5"
            >
              <a
                href={waLink("Hi Marina! I have a quick question about your sessions.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-1 h-4 w-4" />
                Ask a quick question
              </a>
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/70">
            {["Clear pricing upfront", "Guided every step", "200+ sessions since 2022"].map((c) => (
              <li key={c} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-accent-ink" /> {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6">
            <div className="flex items-center">
              {[
                { type: "photo", src: clientAvatars[0].url, pos: "50% 50%" },
                { type: "photo", src: clientAvatars[1].url, pos: "50% 50%" },
                { type: "letter", letter: "A", bg: "#1a73e8" },
                { type: "photo", src: clientAvatars[2].url, pos: "55% 40%" },
                { type: "letter", letter: "S", bg: "#e8710a" },
                { type: "letter", letter: "K", bg: "#7b1fa2" },
              ].map((a, i, arr) => {
                const isLast = i === arr.length - 1;
                const base =
                  "h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-full ring-2 ring-white shadow-sm";
                const style = {
                  marginLeft: i === 0 ? 0 : -8,
                  zIndex: arr.length - i,
                } as const;
                if (a.type === "photo") {
                  return (
                    <img
                      key={i}
                      src={a.src}
                      alt=""
                      width={32}
                      height={32}
                      loading="lazy"
                      decoding="async"
                      className={`${base} object-cover ${isLast ? "hidden sm:block" : ""}`}
                      style={{ ...style, objectPosition: a.pos }}
                    />
                  );
                }
                return (
                  <div
                    key={i}
                    aria-hidden
                    className={`${base} flex items-center justify-center text-white text-xs sm:text-sm font-medium ${isLast ? "hidden sm:flex" : ""}`}
                    style={{ ...style, backgroundColor: a.bg }}
                  >
                    {a.letter}
                  </div>
                );
              })}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-accent-ink">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 font-medium text-foreground">4.9</span>
              </div>
              <p className="text-xs text-foreground/60">from couples & mamas across Calgary</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl bg-sand shadow-[0_30px_80px_-40px_rgba(47,64,48,0.45)]">
            <img
              src="/images/hero.webp"
              alt="Couple photographed by Marina in Calgary"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-prairie/25 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-5 left-4 max-w-[160px] rounded-lg bg-secondary px-2.5 py-1.5 shadow-[0_12px_30px_-8px_rgba(47,64,48,0.35)] md:left-6 md:max-w-[180px] md:px-3 md:py-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent-ink" />
              <span className="text-xs font-medium text-primary">Guided-movement</span>
            </div>
            <p className="mt-1 text-[10px] text-accent-ink">Small prompts, real motion — never a frozen pose.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */

function TrustBar() {
  const items = [
    { big: "200+", small: "Sessions since 2022" },
    { big: "EN·UA·PL·RU", small: "No language barrier" },
    { big: "Calgary +", small: "Travel available" },
    { big: "48 h", small: "Sneak peek preview" },
  ];
  return (
    <section className="bg-prairie text-cream">
      <div className="container-x grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4 md:gap-x-6 md:py-10">
        {items.map((it) => (
          <div key={it.big} className="text-center">
            <div className="font-display text-2xl md:text-3xl">{it.big}</div>
            <div className="mt-1 text-xs text-cream/70 md:text-sm">{it.small}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- PAINS ---------- */

function Pains() {
  const pains = [
    {
      q: "I felt awkward the whole time — and it shows.",
      a: "Every stiff second in front of the camera ends up frozen in the photos.",
    },
    {
      q: "It's the same pose over and over.",
      a: "Generic, interchangeable shots that could be anyone — not a story of you two.",
    },
    {
      q: "Out of a hundred shots, I liked twelve.",
      a: "You pay for a full session and keep only a handful you'd actually want.",
    },
    {
      q: "What if I hate them — and the moment's gone?",
      a: "This chapter doesn't come back. Getting it wrong feels worse than not doing it.",
    },
    { q: "I don't love how I look right now.", a: "Especially with a bump — you want to feel beautiful, not exposed." },
    {
      q: "Nobody lists prices — I'm scared of overpaying.",
      a: '"Contact for pricing" everywhere, and an awkward budget talk waiting.',
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionEyebrow>Sound familiar?</SectionEyebrow>
        <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
          You want photos you love — <span className="italic-display text-accent-ink">not the ones you settle for.</span>
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-cream-warm p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-2 text-xs font-medium tracking-wider text-accent-ink">#{String(i + 1).padStart(2, "0")}</div>
              <p className="font-display text-lg leading-snug text-foreground">"{p.q}"</p>
              <p className="mt-3 text-sm text-foreground/70">{p.a}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-base text-foreground/75">
          If even two of these landed — <span className="text-accent-ink">you don't need "just a photographer."</span> You
          need someone who guides you.
        </p>
      </div>
    </section>
  );
}

/* ---------- SOLUTIONS ---------- */

function Solutions() {
  const items = [
    {
      label: "Guided-movement method",
      pain: "I felt awkward the whole time.",
      sol: "I direct you every second — small prompts, real motion, never a frozen pose.",
      result: "Natural photos with nothing stiff about them",
    },
    {
      label: "Gallery-variety promise",
      pain: "The same pose over and over.",
      sol: "A session built from different setups, moods and framing — not one pose ×30.",
      result: "A living gallery with range and story",
    },
    {
      label: "Keepers only",
      pain: "I only liked twelve of them.",
      sol: "A generous set of hand-edited, genuinely strong images — no filler.",
      result: "Photos you love — all of them",
    },
    {
      label: "See-as-we-go previews",
      pain: "What if I freeze up and hate them?",
      sol: "I show you a few shots on my camera during the session — you see it's working before we're done.",
      result: "Relief on the day, not anxiety afterward",
    },
    {
      label: "Flattering-first maternity",
      pain: "I don't love how I look right now.",
      sol: "Light, angles and draping chosen for you — with previews as we go.",
      result: "Confidence, and a bump you'll adore on camera",
    },
    {
      label: "Transparent pricing",
      pain: "I'm scared of overpaying.",
      sol: 'Every package and price is on this page — no "contact for pricing."',
      result: "Clear cost before you book, zero awkward talks",
    },
  ];

  return (
    <section className="bg-cream-warm py-20 md:py-28">
      <div className="container-x">
        <SectionEyebrow>How I solve it</SectionEyebrow>
        <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
          Every worry above has a <span className="italic-display text-accent-ink">specific answer.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Not vague promises of "relaxed and authentic" — a real method, and prices you can see.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <div key={i} className="relative rounded-2xl border border-border bg-background p-6 md:p-7">
              <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-[11px] font-medium tracking-wide text-foreground">
                {it.label}
              </span>
              <p className="mt-4 text-sm text-foreground/60">"{it.pain}"</p>
              <p className="mt-2 font-display text-lg leading-snug">{it.sol}</p>
              <div className="mt-5 flex items-start gap-2 border-t border-border pt-4 text-sm">
                <Check className="mt-0.5 h-4 w-4 flex-none text-accent-ink" />
                <span>{it.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */

function Experience() {
  const steps = [
    {
      t: "Book & connect",
      d: "Pick a package and time. We chat about your vision and what matters to you.",
      when: "Today",
    },
    {
      t: "Style & location",
      d: "I guide what to wear and where to shoot — the light and mood that flatter you both.",
      when: "Within 3 days",
    },
    {
      t: "The session",
      d: "I lead every second so you can just be together. No posing homework — often actual fun.",
      when: "Session day",
    },
    {
      t: "Your gallery",
      d: "A sneak peek in 48h, then a curated gallery of keepers within two weeks.",
      when: "48h → 2 weeks",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionEyebrow>The experience</SectionEyebrow>
        <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
          Four calm steps — <span className="italic-display text-accent-ink">you don't need any experience.</span>
        </h2>

        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-2xl border border-border bg-cream-warm p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium tracking-wider text-accent-ink">
                  {s.when}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */

function Gallery() {
  const items = [
    { caption: "Downtown rooftop", src: "/images/gallery-1.webp" },
    { caption: "Family session", src: familyMeadowAsset.url },
    { caption: "Golden hour", src: "/images/gallery-3.webp" },
    { caption: "In motion", src: "/images/gallery-4.webp" },
    { caption: "City streets", src: "/images/gallery-5.webp" },
    { caption: "Garden light", src: "/images/gallery-6.webp" },
    { caption: "The two of you", src: "/images/gallery-7.webp" },
    { caption: "Family", src: "/images/gallery-8.webp" },
    { caption: "Prairie", src: "/images/gallery-9.webp" },
  ];
  return (
    <section id="gallery" className="bg-cream-warm py-20 md:py-28">
      <div className="container-x">
        <SectionEyebrow>Gallery</SectionEyebrow>
        <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
          Real moments — <span className="italic-display text-accent-ink">the two of you, beautifully captured.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Couples, engagements and family sessions across Calgary and the prairies.
        </p>

        <div className="mt-10 columns-2 gap-4 md:columns-3">
          {items.map((item, i) => (
            <figure key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-sand">
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <figcaption className="px-3 py-2 text-xs text-foreground/60">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */

type Pkg = {
  name: "Mini" | "Full";
  price: string;
  duration: string;
  images: string;
  extras: string[];
  featured?: boolean;
};

type Category = {
  key: string;
  label: string;
  mini: Pkg;
  full: Pkg;
};

const COMMON_INCLUDES = [
  "Online gallery",
  "Pre-session consultation",
  "Location guidance",
  "Delivery within 2 weeks",
  "Guided every step of the way",
];

const CATS: Category[] = [
  {
    key: "couple",
    label: "Couple & Engagement",
    mini: { name: "Mini", price: "$150", duration: "30 min", images: "20+ edited images", extras: [] },
    full: {
      name: "Full",
      price: "$200",
      duration: "1 hour",
      images: "40+ edited images",
      featured: true,
      extras: ["2 locations or outfit changes", "Sneak peek in 48h", "Priority weekend slots"],
    },
  },
  {
    key: "maternity",
    label: "Maternity",
    mini: { name: "Mini", price: "$170", duration: "30 min", images: "20+ edited images", extras: [] },
    full: {
      name: "Full",
      price: "$220",
      duration: "1 hour",
      images: "40+ edited images",
      featured: true,
      extras: ["2 outfit changes with draping", "Sneak peek in 48h", "Studio or outdoor"],
    },
  },
  {
    key: "family",
    label: "Family",
    mini: { name: "Mini", price: "$170", duration: "30 min", images: "20+ edited images", extras: [] },
    full: {
      name: "Full",
      price: "$250",
      duration: "1 hour",
      images: "40+ edited images",
      featured: true,
      extras: ["Up to 5 family members", "Sneak peek in 48h", "Kid-friendly pacing"],
    },
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-x">
        <SectionEyebrow>Pricing</SectionEyebrow>
        <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
          Clear prices — <span className="italic-display text-accent-ink">right here, no hidden fees.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Studio rental not included · Travel fee applies outside Calgary · Delivery within 2 weeks.
        </p>

        <Tabs defaultValue="couple" className="mt-10">
          <TabsList className="mx-auto flex h-auto w-fit flex-wrap justify-center gap-1 rounded-full bg-cream-warm p-1">
            {CATS.map((c) => (
              <TabsTrigger
                key={c.key}
                value={c.key}
                className="rounded-full px-5 py-2 text-sm data-[state=active]:bg-prairie data-[state=active]:text-cream"
              >
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATS.map((c) => (
            <TabsContent key={c.key} value={c.key} className="mt-10">
              <div className="grid gap-6 md:grid-cols-2">
                <PriceCard cat={c} pkg={c.mini} />
                <PriceCard cat={c} pkg={c.full} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function PriceCard({ cat, pkg }: { cat: Category; pkg: Pkg }) {
  const featured = !!pkg.featured;
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-7 md:p-8 ${
        featured
          ? "border-prairie bg-prairie text-cream shadow-[0_20px_60px_-30px_rgba(47,64,48,0.6)]"
          : "border-border bg-background"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 right-6 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold tracking-wider text-primary">
          MOST BOOKED
        </span>
      )}
      <div className={`text-xs tracking-wider ${featured ? "text-cream/70" : "text-foreground/60"}`}>
        {cat.label.toUpperCase()} · {pkg.name.toUpperCase()}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-5xl">{pkg.price}</span>
        <span className={`text-sm ${featured ? "text-cream/70" : "text-foreground/60"}`}>/ {pkg.duration}</span>
      </div>
      <div className={`mt-1 text-sm ${featured ? "text-cream/80" : "text-foreground/70"}`}>{pkg.images}</div>

      <ul className="mt-6 space-y-2.5 text-sm">
        {[...pkg.extras, ...COMMON_INCLUDES].map((it, i) => {
          const isExtra = i < pkg.extras.length;
          return (
            <li key={it} className="flex items-start gap-2">
              <Check
                className={`mt-0.5 h-4 w-4 flex-none ${
                  featured ? (isExtra ? "text-primary-foreground" : "text-cream/70") : "text-accent-ink"
                }`}
              />
              <span
                className={
                  isExtra
                    ? featured
                      ? "text-cream font-medium"
                      : "font-medium"
                    : featured
                      ? "text-cream/85"
                      : "text-foreground/75"
                }
              >
                {it}
              </span>
            </li>
          );
        })}
      </ul>

      <div
        className={`mt-6 rounded-xl border px-4 py-3 text-xs leading-relaxed ${
          featured ? "border-cream/20 bg-prairie/40 text-cream/80" : "border-border bg-muted/60 text-foreground/70"
        }`}
      >
        Studio rental not included — paid by you directly to the studio, not to me.
      </div>

      <div className="mt-6">
        <Button
          asChild
          size="lg"
          className={`w-full rounded-full ${
            featured ? "bg-primary-foreground text-primary hover:bg-cream/90" : "bg-prairie text-cream hover:bg-primary-hover"
          }`}
        >
          <a
            href={`#book?type=${cat.key}&pkg=${pkg.name.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              const form = document.getElementById("book");
              form?.scrollIntoView({ behavior: "smooth" });
              window.dispatchEvent(new CustomEvent("prefill-book", { detail: { type: cat.key, pkg: pkg.name } }));
            }}
          >
            Book {pkg.name}
          </a>
        </Button>
      </div>
    </div>
  );
}

/* ---------- FIT CHECK ---------- */

function FitCheck() {
  const yes = [
    "You want natural, alive photos — not staged catalog shots.",
    "You feel shy on camera and want to be guided.",
    "You value clear pricing with no surprises.",
  ];
  const no = [
    "You prefer to pick every pose yourself.",
    'You want heavily retouched, "not really you" edits.',
    "Cheapest price is the only thing that matters.",
  ];
  return (
    <section className="bg-cream-warm py-20 md:py-28">
      <div className="container-x">
        <SectionEyebrow>Is this you?</SectionEyebrow>
        <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
          Let's make sure we're a <span className="italic-display text-accent-ink">great fit.</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border-2 border-prairie/30 bg-prairie p-8 text-cream shadow-[0_20px_60px_-30px_rgba(47,64,48,0.5)]">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative mb-5 flex items-center gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <div className="font-display text-xl">This is for you if…</div>
            </div>
            <ul className="relative space-y-4">
              {yes.map((y) => (
                <li key={y} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-secondary" strokeWidth={2.5} />
                  <span className="text-cream/95">{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-border bg-background/60 p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-cream-warm text-foreground/50">
                <X className="h-4 w-4" strokeWidth={3} />
              </div>
              <div className="font-display text-xl text-foreground/70">Probably not a fit if…</div>
            </div>
            <ul className="space-y-4">
              {no.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/60">
                  <X className="mt-0.5 h-4 w-4 flex-none text-foreground/40" strokeWidth={2.5} />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */

function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16">
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="overflow-hidden rounded-3xl bg-sand">
            <img
              src={marinaAsset.url}
              alt="Marina — photographer in Calgary"
              className="block h-auto w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 right-4 rounded-2xl bg-secondary px-4 py-3 text-primary shadow-lg md:-right-4">
            <div className="font-display text-lg leading-none">Marina</div>
            <div className="text-[11px] tracking-wider">CALGARY · EST. 2022</div>
          </div>
        </div>

        <div>
          <SectionEyebrow>About</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            Hi, I'm <span className="italic-display text-accent-ink">Marina.</span>
          </h2>
          <div className="mt-6 space-y-4 text-foreground/80">
            <p>
              I'm a photographer for couples and expecting parents in Calgary. I've been shooting since 2022, and I work
              in English, Ukrainian, Polish and Russian — so you can feel free, be yourselves, and forget the camera's
              even there.
            </p>
            <p>
              I believe the best photos don't come from perfect poses — they come from the real moments between you. My
              job is to guide you through the session so that, years from now, you look back on these frames with
              warmth.
            </p>
            <p className="italic-display text-lg text-accent-ink">
              Let's capture the two of you — exactly as you really are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SAFE TO BOOK ---------- */

function SafeToBook() {
  return (
    <section className="bg-prairie py-20 text-cream md:py-24">
      <div className="container-x">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-cream/25 px-4 py-1.5 text-[11px] tracking-wider text-cream/80">
            <ShieldCheck className="h-3.5 w-3.5" /> IN GOOD HANDS FROM MINUTE ONE
          </div>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            If you feel awkward in the first 15 minutes,{" "}
            <span className="italic-display text-accent-soft">we pause and reset.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-cream/75">
            No rushing, no forced smiles. My promise: you'll never leave a session feeling like you just wasted an hour
            trying to look like someone else.
          </p>

          <ul className="mt-10 grid w-full gap-4 text-left text-sm sm:grid-cols-2">
            {[
              "I guide you the whole time — you don't need to know any poses.",
              "You'll see a few shots on my camera during the session.",
              "All prices are on this page — no hidden costs.",
              "Message me first with no pressure to book.",
            ].map((it) => (
              <li key={it} className="flex items-start gap-2 rounded-xl bg-cream/5 p-4">
                <Check className="mt-0.5 h-4 w-4 flex-none text-secondary" />
                <span className="text-cream/90">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */


type Review = {
  name: string;
  quoteText: string;
  caption: string;
  screenshotSrc?: string;
};

const reviews: Review[] = [
  {
    name: "Pamela",
    quoteText:
      "You're amazing! Amazing shots! Thank you soooo much! I hope your available to take photos to our wedding this September",
    caption: "Couple session · Calgary",
    screenshotSrc: pamelaScreenshot.url,
  },
  {
    name: "Sara",
    quoteText:
      "Oh my god, no I adore them. I'm struggling to pick which ones I want to print but I have a feeling I'm going to get them all printed. I'm so sorry I made you feel that way. I absolutely adore them and we loved working with you.",
    caption: "Family session · Calgary",
    screenshotSrc: saraScreenshot.url,
  },
  {
    name: "Anastasia",
    quoteText:
      "I LOVE THIS!!! Thank you so much. When I seen your photos I knew choosing you was the right decision.",
    caption: "Family session · Calgary",
    screenshotSrc: anastasiaScreenshot.url,
  },
  {
    name: "Nicole",
    quoteText: "Thank you so much!! These are so good!!!",
    caption: "Maternity session · Downtown",
    screenshotSrc: nicoleScreenshot.url,
  },
  {
    name: "Anika",
    quoteText: "Thanks, Marina!! You rock! We love it",
    caption: "Family session · Fish Creek",
    screenshotSrc: anikaScreenshot.url,
  },
  {
    name: "Gracie",
    quoteText:
      "Thank you so much! It was a pleasure meeting you and we are so happy with the photos and the experience was amazing, definitely recommending you to my people! Have a wonderful summer",
    caption: "Family session · Reader Rock Garden",
    screenshotSrc: gracieScreenshot.url,
  },
  {
    name: "Shayna",
    quoteText:
      "My gosh this is so good!!! I love all of these photos and your editing on them is amazing! Thank you for also putting them in a beautiful online album for us to share with our friends and family. And what I also love is that you've put everything in the order for the event. We love and really appreciate your work and we look forward to working with you again for our shoots in the future. Thank you again for capturing these moments of happiness and love for us!! Chat soon",
    caption: "Wedding · Calgary",
    screenshotSrc: shaynaScreenshot.url,
  },
  {
    name: "Anna",
    quoteText:
      "I loved your work so much!!! We'll do another one in August when the baby comes and also my parents will be here! Thank you!!! ",
    caption: "Couple session · Weaselhead Flats",
    screenshotSrc: annaScreenshot.url,
  },
];

function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container-x">
        <SectionEyebrow>Reviews</SectionEyebrow>
        <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
          What couples & mamas <span className="italic-display text-accent-ink">say after.</span>
        </h2>

        <div className="mt-10 columns-1 gap-5 space-y-5 md:columns-2 lg:columns-3">
          {reviews.map((r, i) => (
            <figure key={i} className="break-inside-avoid rounded-2xl border border-border bg-cream-warm p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div className="flex items-center gap-1 text-accent-ink">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-display text-base text-accent-ink">{r.name}</span>
              </div>

              <blockquote className="mt-4 font-display text-lg leading-snug">"{r.quoteText}"</blockquote>
              <figcaption className="mt-6 text-xs tracking-wider text-foreground/60">{r.caption}</figcaption>
              {r.screenshotSrc && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-fit items-center rounded-full border border-border px-3 py-1 text-xs tracking-wider text-primary transition-colors hover:bg-muted"
                    >
                      View original
                    </button>
                  </DialogTrigger>
                  <DialogContent
                    hideCloseButton
                    className="w-full max-w-full border-none bg-cream p-3 gap-0 sm:w-fit sm:max-w-[420px] sm:p-0"
                  >
                    <DialogTitle className="sr-only">Original message from {r.name}</DialogTitle>
                    <div className="relative w-full overflow-y-auto max-h-[90dvh] sm:max-h-[90vh] sm:overflow-visible">
                      <img
                        src={r.screenshotSrc}
                        alt={`Original message from ${r.name}`}
                        className="w-full h-auto object-contain sm:w-auto sm:max-w-full sm:max-h-[90vh] rounded-lg"
                        loading="lazy"
                      />
                      <DialogClose asChild>
                        <button
                          type="button"
                          className="absolute right-0 top-0 p-2 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition-opacity hover:opacity-80 focus:outline-none"
                          aria-label="Close"
                        >
                          <X className="h-6 w-6" strokeWidth={2.5} />
                        </button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  const items = [
    {
      q: "We're nervous we'll freeze up. What if we hate the photos?",
      a: "That's exactly what my guided-movement method is built for. I direct you second by second with small prompts and motion, and show you a few shots on my camera during the session — so you know it's working before we're done.",
    },
    {
      q: "We're awkward on camera. Is that a problem?",
      a: 'Not at all — most of my couples say the same thing. Being led (instead of "just be natural") is the difference. By 15 minutes in, most people forget the camera is there.',
    },
    {
      q: "When should we book a maternity session?",
      a: "Between 28 and 34 weeks is the sweet spot — the bump is beautifully visible and you're still comfortable moving. Book 4–6 weeks ahead to lock in your dates.",
    },
    {
      q: "What should we wear and where do we shoot?",
      a: "I send a style and location guide once you book — with palette suggestions, dos and don'ts, and locations chosen for the light and mood that flatter you both.",
    },
    {
      q: "What languages do you work in?",
      a: "English, Ukrainian, Polish and Russian. You can speak whichever feels most natural — it helps you relax and be yourselves.",
    },
    {
      q: "What if the weather turns on the day?",
      a: "We move the session — no fees, no drama. Calgary weather is what it is; I'd rather reschedule than deliver photos you won't love.",
    },
    {
      q: "How soon do we get our photos?",
      a: "A sneak peek within 48 hours, then your full curated gallery within two weeks.",
    },
  ];
  return (
    <section id="faq" className="bg-cream-warm py-20 md:py-28">
      <div className="container-x">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
          Questions, <span className="italic-display text-accent-ink">answered.</span>
        </h2>

        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{it.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/75">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA + FORM ---------- */

function FinalCta() {
  const [sessionType, setSessionType] = useState<string>("Couple/Engagement");
  const [pkg, setPkg] = useState<string>("Not sure yet");
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent<{ type: string; pkg: string }>).detail;
      if (!detail) return;
      const map: Record<string, string> = {
        couple: "Couple/Engagement",
        maternity: "Maternity",
        family: "Family",
      };
      setSessionType(map[detail.type] ?? sessionType);
      setPkg(detail.pkg);
    }
    window.addEventListener("prefill-book", handler);
    return () => window.removeEventListener("prefill-book", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      toast.error("Please tick the consent box so I can reply to you.");
      return;
    }
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return; // honeypot
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const email = String(fd.get("email") || "");
    const note = String(fd.get("note") || "");
    setSubmitting(true);

    const msg = `Hi Marina! I'd like to book a session.
Name: ${name}
Phone: ${phone}
Email: ${email}
Type: ${sessionType}
Package: ${pkg}
Preferred date: ${preferredDate || "Flexible"}
${note ? `Note: ${note}` : ""}`.trim();

    try {
      await new Promise((r) => setTimeout(r, 400));
      toast.success("Thank you! Opening WhatsApp to finish in one click.");
      window.open(waLink(msg), "_blank");
      (e.target as HTMLFormElement).reset();
      setConsent(false);
    } finally {
      setSubmitting(false);
    }
  }

  const types = ["Couple/Engagement", "Maternity", "Family", "Individual/Other"];
  const pkgs = ["Not sure yet", "Mini", "Full"];

  return (
    <section id="book" className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 rounded-3xl border border-border bg-cream-warm p-6 md:grid-cols-[1fr_1.1fr] md:gap-14 md:p-12">
          <div>
            <SectionEyebrow>Book</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
              Ready for photos you'll <span className="italic-display text-accent-ink">actually love?</span>
            </h2>

            <ul className="mt-8 space-y-2 text-sm">
              {[
                "Clear pricing — no surprises",
                "Guided every step, no experience needed",
                "Sneak peek within 48 hours",
                "Reply usually within a day",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent-ink" /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3 rounded-2xl border border-border bg-background p-5 text-sm">
              <p className="text-foreground/70">Prefer to chat right away?</p>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <a href={waLink("Hi Marina!")} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <a href={`tel:+${WHATSAPP}`}>
                    <Phone className="mr-1 h-4 w-4" /> {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-background p-6 md:p-8">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Your name *</Label>
                <Input id="name" name="name" required className="mt-1.5" placeholder="First & last name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  required
                  className="mt-1.5"
                  placeholder="e.g. (403) 555-0123"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                required
                type="email"
                autoComplete="email"
                className="mt-1.5"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <Label>Session type</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {types.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSessionType(t)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      sessionType === t
                        ? "border-prairie bg-prairie text-cream"
                        : "border-border text-foreground/70 hover:border-prairie/50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label>Package</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {pkgs.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPkg(p)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      pkg === p
                        ? "border-prairie bg-prairie text-cream"
                        : "border-border text-foreground/70 hover:border-prairie/50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="preferred-date">
                Preferred date <span className="text-foreground/50">(optional)</span>
              </Label>
              <Input
                id="preferred-date"
                name="preferredDate"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="note">Anything to add (optional)</Label>
              <Textarea id="note" name="note" rows={3} className="mt-1.5" placeholder="Location ideas, questions…" />
            </div>

            <label className="flex items-start gap-3 text-xs text-foreground/70">
              <Checkbox checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" />
              <span>I agree to receive session-related messages from Marina Photo. You can unsubscribe anytime.</span>
            </label>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full rounded-full bg-prairie text-cream hover:bg-prairie/90"
            >
              {submitting ? "Sending…" : "Book my session"}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <p className="text-center text-[11px] text-foreground/50">
              We'll finish the details in WhatsApp — usually within a day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-cream-warm">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-9 w-9 shrink-0 md:h-10 md:w-10" />
            <span className="font-sans text-[15px] font-medium uppercase tracking-[0.18em] text-foreground md:text-base">
              Marina Photo
            </span>
          </div>

          <p className="mt-4 max-w-sm text-sm text-foreground/70">
            Couple, engagement & maternity photography in Calgary and area. EN · UA · PL · RU.
          </p>
        </div>

        <div>
          <div className="text-xs tracking-wider text-foreground/50">EXPLORE</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#pricing" className="hover:text-accent-ink">
                Pricing
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-accent-ink">
                Gallery
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-accent-ink">
                Book a session
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-accent-ink">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-wider text-foreground/50">CONTACT</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent-ink" />
              <a href={`tel:+${WHATSAPP}`}>{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-accent-ink" />
              <a href={waLink("Hi Marina!")} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-accent-ink" />
              <a href="https://instagram.com/marina.v.ph" target="_blank" rel="noreferrer">
                @marina.v.ph
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-ink" /> Calgary, AB
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-foreground/60 md:flex-row">
          <span>© 2026 Marina Photo · Calgary, AB</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> Usually replies within a day
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- STICKY MOBILE CTA ---------- */

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <Button asChild className="flex-1 rounded-full bg-prairie text-cream hover:bg-prairie/90">
          <a href="#book">Book your session</a>
        </Button>
        <Button asChild variant="outline" className="rounded-full border-prairie/40 text-accent-ink">
          <a href={waLink("Hi Marina!")} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}

/* ---------- SHARED ---------- */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[11px] font-medium tracking-wider text-accent-ink">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {String(children).toUpperCase()}
    </div>
  );
}
