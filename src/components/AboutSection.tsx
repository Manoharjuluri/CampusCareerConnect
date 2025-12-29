import { Card, CardContent } from "@/components/ui/card";
import { Target, UserCheck, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    { icon: Target, title: "Clear Roadmap", description: "Get a step-by-step plan from college selection to career success. No confusion, just clarity." },
    { icon: UserCheck, title: "Personal Mentoring", description: "We genuinely care about your future. Every student gets personal attention and guidance." },
    { icon: Lightbulb, title: "Industry Skills", description: "Learn what companies actually want. Get trained in latest technologies and soft skills." },
    { icon: Users, title: "Success Community", description: "Connect with 10,000+ successful students who started their journey just like you." },
  ];

  return (
    <section id="about" className="content-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-black mb-3 text-balance">
            <span className="text-blue-600">From Admission</span>{" "}
            <span className="text-blue-600">to Ambition</span>{" "}
            <span className="text-blue-600">we're with you</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
            We understand the confusion after 12th grade.<br />
            Which college? What course? How to build skills?
            CCC is your complete mentor throughout this journey — from choosing the right B.Tech college to landing your dream job.{" "}
            <br />
            <b className="text-neutral-900">we are with you</b>.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch mb-8 lg:mb-12">
          <div className="flex flex-col gap-6 md:gap-8 lg:h-full">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-black text-blue-600 text-balance">Why CCC is Different</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                We know what it&apos;s like to feel lost after 12th grade. That&apos;s why CCC exists — to be
                your trusted guide from Inter results to your first job offer. We don&apos;t just help you get admission,
                we prepare you for lifelong success.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { n: "1", title: "Find Your Perfect College", desc: "Choose from 500+ top institutions across India with expert guidance." },
                { n: "2", title: "Master Industry Skills", desc: "Start skill training from Day 1 with our exclusive Trainlance program." },
                { n: "3", title: "Secure Job Offers", desc: "Graduate with job offers, not just a degree. 98% placement success rate." },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-3 p-4 rounded-2xl border border-border/30">
                  <div className="flex-shrink-0 w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold">
                    {item.n}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 md:p-6 border-2 border-primary/20 rounded-2xl bg-primary/5 lg:mt-auto">
              <p className="text-base md:text-lg font-semibold text-primary text-center">
                Join 10,000+ students who trusted CCC and are now working in top companies.<br></br>
                Best Career Counselling Platform for Students | <b>Campus Career Connect</b>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:self-stretch">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-primary/30 bg-background shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group h-full"
                >
                  <CardContent className="flex h-full flex-col justify-between gap-4 p-6 sm:p-8 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-primary text-base sm:text-lg">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="section-divider" />

        {/* Responsive Statistics — fixed */}
        <div className="border-2 border-border/30 rounded-3xl p-6 md:p-10 shadow-elegant">
          <h3 className="text-xl md:text-2xl font-black text-primary text-center mb-5 md:mb-6">
            Our Track Record Speaks
          </h3>

          {/* Auto-fit columns so items wrap naturally on small screens */}
          <div
            className="
              grid gap-4 sm:gap-6 md:gap-8
              [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]
            "
          >
            <div className="text-center group px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                10,000+
              </div>
              <div className="text-muted-foreground font-semibold text-xs sm:text-sm md:text-base leading-tight text-pretty">
                Students Placed Successfully
              </div>
            </div>

            <div className="text-center group px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-muted-foreground font-semibold text-xs sm:text-sm md:text-base leading-tight text-pretty">
                Top College Partners
              </div>
            </div>

            <div className="text-center group px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-muted-foreground font-semibold text-xs sm:text-sm md:text-base leading-tight text-pretty">
                Students Get Job Offers
              </div>
            </div>

            <div className="text-center group px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-muted-foreground font-semibold text-xs sm:text-sm md:text-base leading-tight text-pretty">
                Expert Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
