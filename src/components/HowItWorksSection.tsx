import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, UserPlus, Search, MessageCircle, GraduationCap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Connect with Us",
      description: "Reach out to our expert counselors who understand your academic goals and career aspirations.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Search,
      title: "Choose Your College",
      description: "Browse our curated list of premium private  colleges and find the perfect match for your profile.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: UserPlus,
      title: "Get Admission Support",
      description: "Receive end-to-end admission assistance, from application to enrollment, ensuring a smooth process.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Start Career Training with Trainlance",
      description: "Begin your skill development journey from first year with programming, soft skills, and aptitude training.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
  <section id="how-it-works" className="pt-6 pb-6 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            How Campus Career Connect Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our simple 4-step process helps you navigate from confusion to clarity, 
            from dreams to reality.
          </p>
        </div>

  <div className="relative pt-2">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 transform -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="border border-border/80 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 step-number-deepblue rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
            <style>{`
              .step-number-deepblue {
                background-color: #001d3d !important;
              }
            `}</style>
          </div>
        </div>

        {/* Benefits Section */}
  <div className="mt-2 bg-gradient-subtle rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Our Process?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-18">
            {[
              {
                title: "Personalized Approach",
                description: "Every student is unique, and so is our guidance"
              },
              {
                title: "Expert Support",
                description: "24/7 support from industry professionals"
              },
              {
                title: "Proven Results",
                description: "95% of our students get into their preferred colleges"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="w-8 h-8 flex items-center justify-center mt-1 rounded-full bg-blue-500 shadow-md">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="none" />
                    <path d="M6 10.5L9 13.5L14 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;