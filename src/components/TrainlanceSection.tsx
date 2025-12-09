import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, MessageSquare, Brain, Trophy, CheckCircle, Users } from "lucide-react";

const TrainlanceSection = () => {
  const programs = [
    {
      icon: Code,
      title: "Programming Mastery",
      description: "Learn industry-relevant programming languages like Python, Java, JavaScript, and more from first year onwards.",
      duration: "4 Years",
      color: "from-primary to-primary"
    },
    {
      icon: MessageSquare,
      title: "Soft Skills Development",
      description: "Build communication, leadership, and teamwork skills essential for corporate success.",
      duration: "Continuous",
      color: "from-primary to-primary"
    },
    {
      icon: Brain,
      title: "Aptitude & Logical Reasoning",
      description: "Strengthen analytical thinking and problem-solving abilities for competitive exams and interviews.",
      duration: "Ongoing",
      color: "from-primary to-primary"
    }
  ];

  const outcomes = [
    "100% Job-Ready Graduates",
    "Higher Placement Success Rate",
    "Industry-Relevant Skills",
    "Competitive Advantage",
    "Continuous Skill Updates",
    "Expert Mentorship"
  ];

  return (
    <section id="trainlance" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            CCC
            <img src="/tieup.jpg" alt="Campus Career Connect and Trainlance partnership for guaranteed placement training" className="inline-block w-10 h-10 mx-2" loading="lazy" />
            Trainlance Partnership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond college admission, we ensure your success with comprehensive skill training 
            through our exclusive partnership with Trainlance from your very first year.
          </p>
        </div>

        {/* Partnership Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Why CCC Partners with Trainlance?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Getting into college is just the beginning. Today's job market demands more than 
              just a degree. That's why we've partnered with Trainlance, India's leading skill 
              development platform, to provide continuous training from day one.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our students don't just graduate with a B.Tech degree; they graduate with 
              industry-ready skills, practical experience, and the confidence to excel in 
              their chosen careers.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.999 13.2l-3.2-3.2 1.066-1.066L8 11.067l6.134-6.134 1.066 1.067L8 13.2z" fill="white" />
                    </svg>
                  </span>
                  <span className="text-sm text-muted-foreground">{outcome}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg">
              Learn More About Training
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-subtle rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary">5,000+ Students</h4>
                <p className="text-muted-foreground">Successfully trained and placed</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-muted-foreground">Higher Salary</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">
            Comprehensive Skill Development Programs
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-primary mb-3">{program.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-medium">{program.duration}</span>
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Training Timeline */}
        <div className="bg-gradient-subtle rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8 bg-[#E3F2FD] text-primary rounded-lg py-3">
            Your Training Journey
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { year: "Step-1", focus: "Foundation Skills", details: ["Aptitude,", "Basic programming,", "communication fundamentals"] },
              { year: "Step-2", focus: "Intermediate Skills", details: ["Advanced programming,", "soft skills development"] },
              { year: "Step-3", focus: "Specialization", details: ["Domain expertise,", "project-based learning"] },
              { year: "Step-4", focus: "Industry Readiness", details: ["Interview preparation,", "real-world projects"] }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">{phase.year}</h4>
                <h5 className="font-medium mb-2" style={{ color: '#3a7ca5' }}>{phase.focus}</h5>
                <p className="text-sm text-muted-foreground">{phase.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainlanceSection;