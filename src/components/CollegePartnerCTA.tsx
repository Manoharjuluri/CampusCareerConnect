import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Award, ArrowRight } from "lucide-react";

const CollegePartnerCTA = () => {
  const benefits = [
    {
      icon: Users,
      title: "Quality Students",
      description: "Get access to pre-screened, motivated students ready for B.Tech programs"
    },
    {
      icon: TrendingUp,
      title: "Increased Admissions",
      description: "Boost your enrollment numbers with our proven student recruitment strategies"
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description: "Enhance your college's reputation by partnering with India's leading student platform"
    }
  ];

  return (
  <section className="pt-12 pb-10 md:pb-12 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want More Quality Admissions?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Partner with Campus Career Connect to connect with thousands of motivated 12th-passed 
            students seeking quality B.Tech education. Join our network of premium colleges 
            and experience increased enrollment with qualified candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white group mb-4 hover:bg-white hover:text-primary transition-colors"
          >
            Partner with CCC
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-white/70 text-sm">
            <b>Join 500+ colleges already partnering with us</b>
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">15K+</div>
            <div className="text-white/80">Students Placed Annually</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80">Partner Colleges</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-white/80">Student Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80">Support System</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegePartnerCTA;