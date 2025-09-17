import { Card, CardContent } from "@/components/ui/card";
import { Target, UserCheck, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Clear Roadmap",
      description: "Get a step-by-step plan from college selection to career success. No confusion, just clarity."
    },
    {
      icon: UserCheck,
      title: "Personal Mentoring",
      description: "We genuinely care about your future. Every student gets personal attention and guidance."
    },
    {
      icon: Lightbulb,
      title: "Industry Skills",
      description: "Learn what companies actually want. Get trained in latest technologies and soft skills."
    },
    {
      icon: Users,
      title: "Success Community",
      description: "Connect with 10,000+ successful students who started their journey just like you."
    }
  ];

  return (
    <section id="about" className="content-section">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-black mb-4 text-balance">
            <span className="text-blue-600">From Admission</span>{" "}
            <span className="text-blue-600">to Ambition</span>{" "}
            <span className="text-blue-600">we're with you</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            We understand the confusion after 12th grade.<br></br> Which college? What course? How to build skills? 
            CCC is your complete mentor throughout this journey - from choosing the right B.Tech college to landing your dream job. <br></br><b className="text-neutral-900">we are with you</b>.

          </p>
        </div>

        <div className="grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch mb-16 lg:mb-20">
          <div className="flex flex-col gap-6 md:gap-8 lg:h-full">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-blue-600 text-balance">Why CCC is Different</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We know what it's like to feel lost after 12th grade. That's why CCC exists - to be
                your trusted guide from Inter results to your first job offer. We don't just help you get admission,
                we prepare you for lifelong success.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl border border-border/30">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Find Your Perfect College</h4>
                  <p className="text-muted-foreground leading-relaxed">Choose from 500+ top institutions across India with expert guidance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl border border-border/30">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold">2</div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Master Industry Skills</h4>
                  <p className="text-muted-foreground leading-relaxed">Start skill training from Day 1 with our exclusive Trainlance program.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl border border-border/30">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold">3</div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Secure Job Offers</h4>
                  <p className="text-muted-foreground leading-relaxed">Graduate with job offers, not just a degree. 98% placement success rate.</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-2 border-primary/20 rounded-2xl bg-primary/5 lg:mt-auto">
              <p className="text-lg font-semibold text-primary text-center">
                Join 10,000+ students who trusted CCC and are now working in top companies.
                Your success story starts here.
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
                  <CardContent className="flex h-full flex-col justify-between gap-4 p-8 text-center">
                    <div className="w-16 h-16 border-2 border-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-primary text-lg">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="section-divider"></div>
        
        {/* Enhanced Statistics */}
        <div className="border-2 border-border/200 rounded-3xl p-10 shadow-elegant">
          <h3 className="text-2xl font-black text-primary text-center mb-8">Our Track Record Speaks</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">10,000+</div>
              <div className="text-muted-foreground font-semibold">Students Placed Successfully</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-muted-foreground font-semibold">Top College Partners</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-muted-foreground font-semibold">Students Get Job Offers</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-muted-foreground font-semibold">Expert Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;