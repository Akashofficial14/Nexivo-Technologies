import React from "react";
import { useLocation, Link } from "react-router";
import {
  ShoppingBag,
  TrendingUp,
  Palette,
  Film,
  Globe,
  Settings,
  Megaphone,
  Briefcase,
  PenTool,
  Sparkles,
  Layers,
  Video as VideoIcon,
  Play,
  TrendingDown,
  BarChart,
  Truck,
  CheckCircle,
} from "lucide-react";
import Button from "./Button";
import GlassCard from "./GlassCard";
import Badge from "./Badge";

const serviceData = {
  ecommerce: {
    badge: "SERVICE VERTICAL 02: E-COMMERCE",
    title: "End-to-end marketplace management and scaling operations.",
    desc: "We configure stores, orchestrate product listings, run multi-channel advertisements, and streamline supply chains to maximize your digital sales.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIbXsIdPEhrrTnRekkn39Ot_AWPpC7-aEw_uy7tefQvKI3u_mZ58fXs-b904CI8TyuPRQrOured9QlS9qDrQL2pc7R48uAVsVGBlFcJE-FXN5S2coPVM-Dg8jhqm6x1IIb-CgMvt2pyDoofiLURKE6Q1JXuZoHZfwS1Hz97aIdI38UOas7w7gOZlwFg44Bepw2YbPM12g5DoqlwI_fvucQtjFv4H50gTaEdGlTswJ8ZuEO_8VyRPQ",
    themeColor: "blue",
    competencies: [
      {
        icon: <Globe className="w-8 h-8 text-electric-blue" />,
        title: "Account Management",
        desc: "Full operational oversight for Amazon Vendor & Seller central, Walmart Marketplace, and premium retail vendor networks.",
      },
      {
        icon: <ShoppingBag className="w-8 h-8 text-electric-blue" />,
        title: "Shopify Development",
        desc: "Custom headless storefronts, subscription logic setups, custom application extensions, and speed optimization audits.",
      },
      {
        icon: <Settings className="w-8 h-8 text-electric-blue" />,
        title: "Operations Automation",
        desc: "Automated warehouse links, ERP integrations, inventory sync triggers, and custom product information database (PIM) setups.",
      },
      {
        icon: <Megaphone className="w-8 h-8 text-electric-blue" />,
        title: "Retail Ad Campaigns",
        desc: "PPC search ads, sponsored brands setup, catalog display ads, and custom demand side platform (DSP) targeting strategies.",
      },
    ],
    features: ["Amazon Central", "Walmart Seller", "Headless Shopify", "Inventory Sync"],
  },
  marketing: {
    badge: "SERVICE VERTICAL 03: MARKETING",
    title: "Performance-driven growth campaigns that scale customer acquisition.",
    desc: "We deploy conversion-optimized search campaigns, target social pipelines, and audit user landing journeys to drive maximum return on spend.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzRxWICJnoLB8DfIRzQ7taAZrOlRQ8jj6qr7YkI_3cVbVuhivFEjLFWCkdYBmrdCoGWZww0OtHxDrPaoAe6ggnUdR_AYTcDqi31fjY-04Qdo6-n7-3rftlzizLECsz9n3zHGQEbXvX4PX3OhzRpcDRWLOi8mA-PvLGsPc2yO5-Ob5PF3TkPjAyn1v7Pg20Pj602vsNbp6AtGwlBZuV_cuTw84Cg4VmVu_ZuP1jEnf_g6yUKY5rfPM",
    themeColor: "teal",
    competencies: [
      {
        icon: <TrendingUp className="w-8 h-8 text-cyber-teal" />,
        title: "Search Optimization",
        desc: "Highly-targeted Google Ads search groups, shopping setups, negative keyword filters, and performance max campaign tuning.",
      },
      {
        icon: <BarChart className="w-8 h-8 text-cyber-teal" />,
        title: "Social Advertising",
        desc: "Scaling paid social setups on Meta (Facebook/Instagram), TikTok, and LinkedIn with dynamic custom-targeted assets.",
      },
      {
        icon: <Layers className="w-8 h-8 text-cyber-teal" />,
        title: "CRO & Funnels",
        desc: "Designing conversion-optimized landing pages, conducting user click-heatmap analysis, and creating programmatic email sequences.",
      },
      {
        icon: <Globe className="w-8 h-8 text-cyber-teal" />,
        title: "Analytics Setup",
        desc: "Deploying server-side tracking, GTM container configurations, custom GA4 events, and real-time visualization dashboards.",
      },
    ],
    features: ["Google Ads (PPC)", "Meta & TikTok Ads", "Server-side Tracking", "CRO Audits"],
  },
  creative: {
    badge: "SERVICE VERTICAL 04: CREATIVE",
    title: "Visual brand identities and premium assets built for digital dominance.",
    desc: "We deliver polished logos, structured brand books, custom illustration assets, and organic user experiences that resonate with target markets.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrsi00ogJyZBV5CIA5pngFDDXhUuN1N35WBwDurW5NOWwjO7LpmtKZq_ynsQwBuPY_RR2mdDLuNq68yUjyeKu0vBJKu-4OOxYk3bZjW6_NxM74tf7_IE_HpfX1k21BHyKr5prOIIPig3JpezIVX-xfgDREkwAgIke4QywcmMhBteqDJdtwabkQvXl6rvvn3efvUzt6HOwzfabcaC5NiYY-1Veg1LOJwOFoI9m63g61LdKWeYDuizs",
    themeColor: "teal",
    competencies: [
      {
        icon: <PenTool className="w-8 h-8 text-cyber-teal" />,
        title: "Brand Identity Systems",
        desc: "Bespoke logos, strict color guidelines, typography rules, brand statements, and vector asset packages.",
      },
      {
        icon: <Palette className="w-8 h-8 text-cyber-teal" />,
        title: "Premium UI/UX Design",
        desc: "High-fidelity Figma wireframes, active interaction prototypes, modular component layouts, and detailed developer handoff files.",
      },
      {
        icon: <Layers className="w-8 h-8 text-cyber-teal" />,
        title: "Production Art",
        desc: "Stunning product packages, print layouts, trade show assets, and high-resolution merchandise layouts.",
      },
      {
        icon: <Sparkles className="w-8 h-8 text-cyber-teal" />,
        title: "3D Asset Renderings",
        desc: "High-end 3D product modeling, abstract environment visualization, spatial structures, and dynamic visual layouts.",
      },
    ],
    features: ["Brand Guideline Books", "Figma Design Systems", "3D Product Renderings", "Packaging Assets"],
  },
  video: {
    badge: "SERVICE VERTICAL 05: VIDEO",
    title: "Cinematic digital video productions that capture user attention.",
    desc: "We plan, produce, film, and edit premium short-form, corporate, and explainers with top-tier grading and sound design.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-r6CksG9JX4tjINvaS5I9llxUU_dgA6XQjeZB3C7p8bsvQvwu0SmGw3MsQtuGQb42VXgFxW-DS1JyQ0fZtPxmQd_fGe0Fs1opGsFJNM7K8VJfcp8XOW2G_poGExV6FuLn2zUhGMRQIB2fHOqgBMNFFDcHm22EuJuBbdZzwsxjbysECZuGIRPR6gL6yj-I-z9cD5AS71eqfYgpGFHfpPktqfXITccrwwqzBFmAa0faE7WpeBMgaXE",
    themeColor: "blue",
    competencies: [
      {
        icon: <Film className="w-8 h-8 text-electric-blue" />,
        title: "Corporate Brand Films",
        desc: "Cinematic company narratives, user profile documentations, software explainers, and founding stories.",
      },
      {
        icon: <Play className="w-8 h-8 text-electric-blue" />,
        title: "Paid Social Creatives",
        desc: "High-retention social hooks, vertical reels, product demo templates, and performance-minded ad creatives.",
      },
      {
        icon: <Layers className="w-8 h-8 text-electric-blue" />,
        title: "Motion Graphics",
        desc: "Custom title cards, 3D animated components, diagram flow sequences, and kinetic type layouts.",
      },
      {
        icon: <VideoIcon className="w-8 h-8 text-electric-blue" />,
        title: "Premium Post Production",
        desc: "Advanced visual grading setups, dynamic audio mixes, noise filters, and seamless cinematic transitions.",
      },
    ],
    features: ["4K Cine Filming", "Social Hook Creatives", "Motion Graphic Designs", "Foley & Audio Grading"],
  },
};

const ServicePage = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const data = serviceData[path] || serviceData.ecommerce;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-mesh py-20 lg:py-32">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-3xl space-y-6">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${
                data.themeColor === "teal"
                  ? "bg-cyber-teal/10 text-cyber-teal border-cyber-teal/20"
                  : "bg-electric-blue/10 text-electric-blue border-electric-blue/20"
              }`}
            >
              {data.badge}
            </span>
            <h1 className="font-headline text-headline-xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {data.title}
            </h1>
            <p className="font-body text-body-lg text-text-muted leading-relaxed max-w-2xl">
              {data.desc}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <Button variant="primary" className="px-8 py-4">
                  Start Your Project
                </Button>
              </Link>
              <a href="#competencies" className="inline-flex">
                <Button variant="secondary" className="px-8 py-4">
                  View Competencies
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section id="competencies" className="py-24 px-gutter max-w-container-max mx-auto border-t border-white/5">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <h2 className="font-headline text-headline-lg font-bold text-white">Vertical Expertise</h2>
            <p className="font-body text-body-md text-text-muted">
              Deep, focused execution to solve core operations and achieve revenue growth.
            </p>
          </div>
          <div className="flex gap-2">
            <span className={`w-12 h-1 rounded-full ${data.themeColor === "teal" ? "bg-cyber-teal" : "bg-electric-blue"}`} />
            <span className="w-4 h-1 bg-white/10 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.competencies.map((comp, idx) => (
            <GlassCard key={idx} hoverColor={data.themeColor} className="flex flex-col md:flex-row gap-6 p-8 items-start">
              <div className="shrink-0">{comp.icon}</div>
              <div className="space-y-2">
                <h3 className="font-headline text-xl font-bold text-white">{comp.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{comp.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Showcase / Process Segment */}
      <section className="py-24 bg-midnight-surface/30 border-t border-white/5 overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="font-headline text-3xl font-bold text-white leading-tight">
              A premium framework optimized for digital speed.
            </h2>
            <p className="font-body text-body-md text-text-muted leading-relaxed">
              We design every flow using pre-packaged UI frameworks, automated code integration schedules, and clean metrics tracking, bypassing standard operational issues to go live weeks faster.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {data.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 font-body text-sm text-white">
                  <CheckCircle className={`w-5 h-5 ${data.themeColor === "teal" ? "text-cyber-teal" : "text-electric-blue"}`} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050608] via-transparent to-transparent z-10" />
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover animate-float-slow"
              style={{ animation: "float 8s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
