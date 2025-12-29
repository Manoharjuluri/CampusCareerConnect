import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { env } from "@/config/env";

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
  const navigate = useNavigate();

  // Initialize Meta Pixel once
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pixelReady.current) return;
    pixelReady.current = loadMetaPixelOnce(env.META_PIXEL_ID);
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
    { name: "Blog", href: "/blog" },
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
    "Educational Loan Assistance through State and Central Government Schemes",
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
          src={`https://www.facebook.com/tr?id=${env.META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Top promo ribbon: Responsive layout for all screen sizes */}
      <div className="w-full bg-primary text-white text-xs sm:text-sm">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8">
          {/* Mobile Layout (stacked) */}
          <div className="flex flex-col sm:hidden py-2 space-y-1">
            {/* Promo text - full width on mobile */}
            <div className="text-center">
              <span className="text-xs font-medium">
                🚀 Admissions Open 2025! | Free Counseling
              </span>
            </div>
            {/* Bottom row: Enquiry and Phone */}
            <div className="flex items-center justify-between">
              <a href="#contact" className="text-white font-semibold hover:underline flex items-center gap-1">
                <MessageCircle className="w-3 h-3 text-white" fill="currentColor" stroke="none" />
                <span>Enquiry</span>
              </a>
              <div className="flex items-center gap-3">
                <a href="tel:8074313417" className="flex items-center gap-1 hover:underline" aria-label="Call 8074313417">
                  <Phone className="w-3 h-3" />
                  <span>8074313417</span>
                </a>
                <a href="tel:9390163762" className="flex items-center gap-1 hover:underline" aria-label="Call 9390163762">
                  <Phone className="w-3 h-3" />
                  <span>9390163762</span>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout (horizontal) */}
          <div className="hidden sm:flex items-center justify-between gap-2 lg:gap-4 h-10">
            {/* Left: Enquiry link */}
            <div className="flex items-center">
              <a href="#contact" className="text-white font-semibold hover:underline flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-white" fill="currentColor" stroke="none" />
                <span>Enquiry</span>
              </a>
            </div>

            {/* Center: Promo text - responsive sizing */}
            <div className="flex-1 text-center px-2 lg:px-4">
              <span className="text-xs sm:text-sm lg:text-base font-medium">
                <span className="hidden lg:inline">🚀 Admissions Open for 2026! | Get Free Counseling & College Guidance</span>
                <span className="lg:hidden">🚀 Admissions Open 2026! | Free Counseling</span>
              </span>
            </div>

            {/* Right: phone numbers - responsive display */}
            <div className="flex items-center gap-2 lg:gap-4">
              <a href="tel:8074313417" className="flex items-center gap-1 lg:gap-2 hover:underline" aria-label="Call 8074313417">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden md:inline">8074313417</span>
                <span className="md:hidden">Call</span>
              </a>
              <a href="tel:9390163762" className="flex items-center gap-1 lg:gap-2 hover:underline" aria-label="Call 9390163762">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden lg:inline">9390163762</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2 xl:px-4 relative">
        <div className="flex items-center h-16 xl:h-20 w-full">
          {/* Logo & Title */}
          <div className="flex items-center space-x-2 xl:space-x-4 group flex-shrink-0">
            <div className="p-1 bg-white/90 border-2 border-primary rounded-2xl shadow-card group-hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
              <img
                src="/ccc-logo.jpeg"
                alt="Campus Career Connect - Best B.Tech College Admission and Career Guidance Platform Logo"
                className="w-12 h-12 xl:w-16 xl:h-16 object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-lg xl:text-2xl font-black font-poppins gradient-text tracking-tight leading-tight">
                Campus Career Connect
              </h1>
              <p className="text-xs xl:text-sm text-muted-foreground font-semibold leading-tight hidden xl:block">
                Your Journey from College Dreams to Career Goals
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-10 ml-4 xl:ml-8 flex-1 justify-center xl:justify-start">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith('#');
              const className = "relative text-foreground hover:text-primary font-medium transition-colors duration-200 group px-1.5 xl:px-2 py-2 flex items-center justify-center text-sm xl:text-base whitespace-nowrap";
              const style = { minWidth: "auto", textAlign: "center" as const };
              
              if (isHashLink) {
                const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  // If not on home page, navigate to home first, then scroll
                  if (location.pathname !== '/') {
                    navigate(`/${link.href}`);
                  } else {
                    // Already on home page, just scroll
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                };
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleHashClick}
                    className={className}
                    style={style}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full rounded-full" />
                  </a>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={className}
                  style={style}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              );
            })}
          </nav>

          {/* Why Us? (Desktop) */}
          <div className="hidden lg:block relative group ml-2 xl:ml-4">
            <button
              type="button"
              className="relative bg-primary text-white font-bold transition-colors duration-200 px-3 xl:px-4 py-2 flex items-center justify-center cursor-pointer rounded-lg shadow hover:bg-primary/90 text-sm xl:text-base whitespace-nowrap"
              style={{ minWidth: "auto", textAlign: "center" }}
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
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors duration-200 ml-auto z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Backdrop overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 bg-background shadow-lg z-40 transition-all duration-300 ease-in-out overflow-y-auto border-t border-border/50 ${
            isMenuOpen ? "max-h-[calc(100vh-200px)] opacity-100 pb-6 visible" : "max-h-0 opacity-0 invisible"
          }`}
          style={{ 
            top: "100%",
            pointerEvents: isMenuOpen ? "auto" : "none"
          }}
        >
          <nav className="flex flex-col space-y-4 pt-4 px-4">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith('#');
              const className = "text-foreground hover:text-primary font-medium transition-colors duration-200 py-2 px-4 rounded-xl hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary";
              
              if (isHashLink) {
                const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  // If not on home page, navigate to home first, then scroll
                  if (location.pathname !== '/') {
                    navigate(`/${link.href}`);
                  } else {
                    // Already on home page, just scroll
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                };
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleHashClick}
                    className={className}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {link.name}
                  </a>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={className}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {link.name}
                </Link>
              );
            })}

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
