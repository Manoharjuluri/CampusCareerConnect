import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const META_PIXEL_ID = "720718777655354";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    __META_PIXEL_LOADED__?: boolean;
  }
}

/**
 * Loads Meta Pixel exactly once (SSR-safe + StrictMode-safe).
 */
function loadMetaPixelOnce(id: string) {
  if (typeof window === "undefined") return false;
  if (window.__META_PIXEL_LOADED__) return true;

  // Already present? Just mark loaded.
  if (window.fbq && (window.fbq as any).version) {
    window.__META_PIXEL_LOADED__ = true;
    return true;
  }

  // Inject script (idempotent)
  if (!document.getElementById("meta-pixel-script")) {
    (function (f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      t.id = "meta-pixel-script";
      s = b.getElementsByTagName(e)[0];
      s?.parentNode?.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  }

  // Initialize and mark loaded
  window.fbq?.("init", id);
  window.__META_PIXEL_LOADED__ = true;
  return true;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pixelReady = useRef(false);
  const location = useLocation(); // for SPA route tracking

  // Initialize Meta Pixel once
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pixelReady.current) return;
    pixelReady.current = loadMetaPixelOnce(META_PIXEL_ID);
    window.fbq?.("track", "PageView");
  }, []);

  // Track SPA route changes (fires PageView when path changes)
  useEffect(() => {
    if (!pixelReady.current) return;
    window.fbq?.("track", "PageView");
  }, [location.pathname, location.search, location.hash]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track helper
  const track = useCallback((event: string, params?: Record<string, unknown>) => {
    if (!pixelReady.current) return;
    try {
      window.fbq?.("track", event, params);
    } catch {
      // no-op
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Top Colleges", href: "#partners" },
    { name: "Skill Training", href: "#trainlance" },
    { name: "Get Support", href: "#contact" },
  ];

  const whyUsPoints = [
    "Free Career Guidance after 12th by experts",
    "Free Campus Visits to shortlisted colleges",
    "Trainlance Tie-up for guaranteed placement training",
    "Top B Tech College Admissions with full support",
    "Personalized College Selection based on goals & budget",
    "Internships & Industry Exposure during your course",
    "Dedicated Mentorship from admission to job offer",
    "Educational Loan Assistance through Credella",
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-card border-b border-border/30" : ""
      }`}
    >
      {/* noscript fallback for Meta Pixel */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      <div className="w-full px-4">
        <div className="flex items-center h-20 w-full">
          {/* Logo & Title */}
          <div className="flex items-center space-x-4 group">
            <div className="p-1 bg-white/90 border-2 border-primary rounded-2xl shadow-card group-hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
              <img
                src="/ccc-logo.jpeg"
                alt="Campus Career Connect logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-black font-poppins gradient-text tracking-tight leading-tight">
                Campus Career Connect
              </h1>
              <p className="text-sm text-muted-foreground font-semibold leading-tight">
                Your Journey from College Dreams to Career Goals
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 ml-8 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-foreground hover:text-primary font-medium transition-colors duration-200 group px-2 py-2 flex items-center justify-center"
                style={{ minWidth: "110px", textAlign: "center" }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Why Us? (Desktop) */}
          <div className="hidden lg:block relative group">
            <button
              type="button"
              className="relative bg-primary text-white font-bold transition-colors duration-200 px-4 py-2 flex items-center justify-center cursor-pointer rounded-lg shadow hover:bg-primary/90"
              style={{ minWidth: "110px", textAlign: "center" }}
              onClick={() => track("Lead", { source: "Why Us Tab (Desktop)" })}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Why Us?
            </button>
            <div className="absolute right-0 mt-2 w-80 bg-white border border-border rounded-xl shadow-lg z-50 p-4 text-left animate-fade-in opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
              <h3 className="font-bold text-lg mb-2 text-primary">Why Choose Us?</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                {whyUsPoints.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors duration-200 ml-auto"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-20 left-0 w-full bg-background shadow-lg z-40 transition-all duration-300 ${
            isMenuOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
          style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
        >
          <nav className="flex flex-col space-y-4 pt-4 border-t border-border/50 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200 py-2 px-4 rounded-xl hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.name}
              </a>
            ))}

            {/* Why Us (Mobile) */}
            <div className="relative">
              <button
                type="button"
                className="bg-primary text-white font-bold transition-colors duration-200 py-2 px-4 rounded-lg shadow w-full text-left hover:bg-primary/90"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => track("Lead", { source: "Why Us Tab (Mobile)" })}
              >
                Why Us?
              </button>
              <div className="mt-2 w-full bg-white border border-border rounded-xl shadow-lg z-50 p-4 text-left animate-fade-in">
                <h3 className="font-bold text-lg mb-2 text-primary">Why Choose Us?</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                  {whyUsPoints.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-3 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full font-bold"
                onClick={() =>
                  track("Contact", {
                    placement: "Header Mobile",
                    content_name: "Book Free Call",
                  })
                }
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Free Call
              </Button>
              <Button
                variant="default"
                size="sm"
                className="w-full font-bold"
                onClick={() =>
                  track("Lead", { step: "Get Started", content_category: "Header" })
                }
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
