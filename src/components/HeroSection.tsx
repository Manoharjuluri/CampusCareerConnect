import { ArrowRight, Play, Star, Users, Award, TrendingUp, Building2, Briefcase, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
const heroStudents = "/hero-students.jpg";

const HeroSection = () => {
  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-hidden pt-24 bg-gradient-to-b from-background to-background/90">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStudents}
          alt="Students achieving success in B.Tech college admission and career placement through Campus Career Connect"
          className="w-full h-full object-cover opacity-25"
          style={{ objectPosition: 'center bottom' }}
          loading="lazy"
        />
      </div>



      {/* Main Content */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full overflow-x-hidden">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins text-foreground mb-6 leading-tight text-balance">
          <span className="text-primary">From Dream College</span>
            <br />
            <span className="text-primary">to</span>
            <span className="text-primary"> Dream Job</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto font-medium leading-relaxed text-balance">
          <b>Your bridge from college admission to career success.
            <br />
          </b>
Learn, Train, and Get Placed with CCC.
          </p>

          {/* Stats Row */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          >
            {/* Top Colleges */}
            <div className="flex items-center gap-3 text-foreground hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary">
                <Building2 className="text-white w-6 h-6"  />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-primary" style={{ fontSize: '20px' }}>500+</span>
                <span className="font-medium text-sm">Top Colleges</span>
              </div>
            </div>

            {/* Placement Rate */}
            <div className="flex items-center gap-3 text-foreground hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary">
                <Briefcase className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary" style={{ fontSize: '20px' }}>98%</span>
                <span className="font-medium text-sm">Placement Rate</span>
              </div>
            </div>

            {/* Expert Support */}
            <div className="flex items-center gap-3 text-foreground hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary">
                <Headphones className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-primary" style={{ fontSize: '20px' }}>24/7</span>
                <span className="font-medium text-sm">Expert Support</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              variant="outline" 
              size="xl" 
              className="text-xl font-bold border-2 border-primary text-primary hover:text-primary-dark backdrop-blur-md shadow-card hover:shadow-elegant"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ArrowRight className="w-6 h-6 mr-3" />
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="text-xl font-bold border-2 border-primary text-primary hover:text-primary-dark backdrop-blur-md shadow-card hover:shadow-elegant"
              onClick={() => {
                const el = document.getElementById('partners');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Play className="w-6 h-6 mr-3" />
              Explore Colleges
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-gray-900">Trusted by India's Top Colleges</span>
            </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-medium text-gray-900">Complete Skill Training Included</span>
              </div>
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-gray-900">End-to-End Admission Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        {/* <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 border border-primary/70 rounded-full mt-2 animate-pulse"></div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
