import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Image assets (replace with your actual paths)
const testimonial1 = "/testimonial-1.jpg";
const testimonial2 = "/testimonial-2.jpg";
const testimonial3 = "/testimonial-3.jpg";
const testimonial4 = "/testimonial4.jpg";
const testimonial5 = "/testimonial-5.jpg";
const testimonial6 = "/testimonial-6.jpg";
const testimonial7 = "/testimonial-7.jpg";
const testimonial8 = "/testimonial-8.jpg";
const testimonial9 = "/testimonial-9.jpg";
const testimonial10 = "/testimonial-10.jpg";
const testimonial11 = "/testimonial-11.jpg";
const testimonial12 = "/testimonial-12.jpg";
const testimonial13 = "/testimonial-13.jpg";
const testimonial14 = "/testimonial-14.jpg";
const testimonial15 = "/testimonial-15.jpg";

/**
 * TestimonialsSection
 * - Responsive horizontal carousel (1/2/3 cards per view)
 * - Arrows + dots + snap scrolling
 * - Autoplay with pause on hover/focus and on user interaction
 * - Accessible (aria-live updates, buttons labeled)
 */
export default function TestimonialsSection({ autoplayDelay = 5000 }: { autoplayDelay?: number }) {
  const testimonials = useMemo(
    () => [
      // ----- Engineering (existing) -----
      {
        name: "Shree Durga",
        college: "sandip University",
        course: "B.Tech Computer Science",
        image: testimonial1,
        rating: 5,
        testimonial:
          "CCC helped me get into sandip University for B.Tech CSE, and Trainlance's programming courses from first year gave me a huge advantage. I secured a software engineering internship in my second year itself!",
      },
      {
        name: "Srinivas",
        college: "Manipal Institute of Technology",
        course: "B.Tech Information Technology",
        image: testimonial2,
        rating: 5,
        testimonial:
          "The admission process was so smooth with CCC's support. But what really made the difference was Trainlance's soft skills and aptitude training. I'm now confident in interviews and have already received a pre-placement offer!",
      },
      {
        name: "Arjuna Kumari",
        college: "SRM Institute of Science & Technology",
        course: "B.Tech Electronics & Communication",
        image: testimonial3,
        rating: 5,
        testimonial:
          "CCC found me the perfect college match at SRM , and Trainlance's comprehensive training program helped me build skills beyond my curriculum. I'm graduating with both technical expertise and industry-ready soft skills.",
      },
      {
        name: "Rahul Verma",
        college: "Amrita Vishwa Vidyapeetham",
        course: "B.Tech Mechanical Engineering",
        image: testimonial4,
        rating: 5,
        testimonial:
          "With CCC's guidance I switched from a general list to a college that truly fit my profile. Trainlance's mock interviews and resume labs helped me convert two core offers.",
      },
      {
        name: "Sana Fatima",
        college: "Anna University",
        course: "B.E. Computer Science",
        image: testimonial5,
        rating: 5,
        testimonial:
          "I joined Trainlance tracks alongside my coursework and led a hackathon team. CCC + Trainlance gave me the confidence to present, network, and land an internship abroad.",
      },

      // ----- MBA / BBA & Business -----
      {
        name: "Ananya Reddy",
        college: "Woxsen School of Business",
        course: "MBA – Marketing & Strategy",
        image: testimonial6,
        rating: 5,
        testimonial:
          "CCC's profile mapping and SOP review were spot on. Trainlance's case interview bootcamps sharpened my problem structuring—helped me crack a leading FMCG summer internship.",
      },
      {
        name: "Rohit Malhotra",
        college: "Vivekananda Global University",
        course: "MBA – Human Resources",
        image: testimonial7,
        rating: 5,
        testimonial:
          "From group discussions to HR case rounds, the targeted practice I got through Trainlance made all the difference. I landed an HRBP role with a tech unicorn.",
      },
      {
        name: "Preethi Sharma",
        college: "Sandip University",
        course: "BBA – Finance",
        image: testimonial8,
        rating: 4,
        testimonial:
          "I started with zero confidence in presentations. After CCC's mentorship and Trainlance's Excel + PPT clinics, I won our B-school stock pitch competition.",
      },
      {
        name: "Mohammed Arif",
        college: "Presidency University",
        course: "BBA – Marketing",
        image: testimonial9,
        rating: 5,
        testimonial:
          "The GD-PI drills and personal branding sessions helped me secure a digital marketing internship and freelance clients by semester 4.",
      },

      // ----- Data / Design / Law / Health / Other Domains -----
     
    ],
    []
  );

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(1);
  const [paused, setPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const updatePerView = useCallback(() => {
    const w = viewportRef.current?.clientWidth || window.innerWidth;
    if (w >= 1024) setPerView(3);
    else if (w >= 768) setPerView(2);
    else setPerView(1);
  }, []);

  useEffect(() => {
    updatePerView();
    const onResize = () => updatePerView();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updatePerView]);

  const maxPage = Math.max(0, Math.ceil(testimonials.length / perView) - 1);

  const scrollToPage = (p: number, smooth: boolean = true) => {
    const clamped = Math.max(0, Math.min(p, maxPage));
    setPage(clamped);
    const viewport = viewportRef.current;
    if (!viewport) return;
    const card = viewport.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const gap = 32; // matches gap-8
    const cardWidth = card.offsetWidth + gap;
    viewport.scrollTo({ left: clamped * cardWidth, behavior: smooth ? "smooth" : "auto" });
  };

  const prev = () => {
    setUserInteracted(true);
    const target = page - 1 < 0 ? maxPage : page - 1;
    scrollToPage(target);
  };
  const next = () => {
    setUserInteracted(true);
    const target = page + 1 > maxPage ? 0 : page + 1;
    scrollToPage(target);
  };

  // Sync `page` when user scrolls manually (wheel/drag)
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const onScroll = () => {
      const scrollLeft = viewport.scrollLeft;
      const card = viewport.querySelector<HTMLElement>("[data-card]");
      if (!card) return;
      const gap = 32;
      const cardWidth = card.offsetWidth + gap;
      const approxPage = Math.round(scrollLeft / cardWidth);
      setPage(Math.max(0, Math.min(approxPage, maxPage)));
    };
    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => viewport.removeEventListener("scroll", onScroll as any);
  }, [maxPage]);

  // Pause on hover/focus inside section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onEnter = () => setPaused(true);
    const onLeave = () => setPaused(false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusout", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusout", onLeave);
    };
  }, []);

  // Autoplay (skips if user scrolled/used arrows recently)
  useEffect(() => {
    if (paused) return; // paused via hover/focus
    const timer = setInterval(() => {
      if (userInteracted) return; // don't fight the user
      const target = page + 1 > maxPage ? 0 : page + 1;
      scrollToPage(target);
    }, Math.max(2500, autoplayDelay));
    return () => clearInterval(timer);
  }, [page, maxPage, paused, userInteracted, autoplayDelay]);

  // After a short cooldown, allow autoplay again post interaction
  useEffect(() => {
    if (!userInteracted) return;
    const id = setTimeout(() => setUserInteracted(false), 6000);
    return () => clearTimeout(id);
  }, [userInteracted]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="pt-16 md:pt-20 pb-20 bg-primary"
      aria-label="Student success stories carousel"
      aria-live="polite"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Hear from students who transformed their dreams into reality with Campus Career Connect
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="hidden md:block text-white/80 text-sm">
              {/* Page numbers removed */}
          </div>
          <div className="ml-auto flex gap-3">
              {/* Carousel navigation buttons removed */}
          </div>
        </div>

        {/* Viewport */}
        <div
          ref={viewportRef}
          className="overflow-x-auto scroll-smooth pb-8 custom-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
          }}
        >
          <div className="grid auto-cols-[80%] md:auto-cols-[48%] lg:auto-cols-[32%] grid-flow-col gap-8">
            {testimonials.map((t, i) => (
              <article
                key={i}
                data-card
                style={{ scrollSnapAlign: "start" }}
                className="min-w-[80%] md:min-w-[48%] lg:min-w-[32%]"
                aria-label={`Testimonial ${i + 1}: ${t.name} from ${t.college}`}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-6 pb-10 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-white fill-white mr-3" />
                      <div className="flex" aria-label={`Rating: ${t.rating} out of 5`}>
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-white fill-white" strokeWidth={0} />
                        ))}
                      </div>
                    </div>

                    <p className="text-white/90 mb-6 leading-relaxed flex-1">
                      "{t.testimonial}"
                    </p>

                    <div className="flex items-center mt-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{t.name}</h4>
                        <p className="text-white text-sm">{t.course}</p>
                        <p className="text-white text-sm font-medium">{t.college}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>


        {/* Additional Stats */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">4.3/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Placement Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles for carousel viewport */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b;
        }
        .custom-scrollbar {
          scrollbar-color: #3b82f6 #1e293b;
          scrollbar-width: thin;
        }
      `}</style>
    </section>
  );
}
