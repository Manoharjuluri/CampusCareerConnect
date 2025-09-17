import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const testimonial1 = "/testimonial-1.jpg";
const testimonial2 = "/testimonial-2.jpg";
const testimonial3 = "/testimonial-4.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Shree Durga",
      college: "SRM Institute of Science & Technology",
      course: "B.Tech Computer Science",
      image: testimonial1,
      rating: 5,
      testimonial: "CCC helped me get into SRM University for B.Tech CSE, and Trainlance's programming courses from first year gave me a huge advantage. I secured a software engineering internship in my second year itself!"
    },
    {
      name: "Piyanshu Patel",
      college: "Manipal Institute of Technology",
      course: "B.Tech Information Technology",
      image: testimonial2,
      rating: 5,
      testimonial: "The admission process was so smooth with CCC's support. But what really made the difference was Trainlance's soft skills and aptitude training. I'm now confident in interviews and have already received a pre-placement offer!"
    },
    {
      name: "Arjuna Kumari",
      college: "VIT Vellore",
      course: "B.Tech Electronics & Communication",
      image: testimonial3,
      rating: 5,
      testimonial: "CCC found me the perfect college match at VIT, and Trainlance's comprehensive training program helped me build skills beyond my curriculum. I'm graduating with both technical expertise and industry-ready soft skills."
    }
  ];

  return (
    <section id="testimonials" className="pt-16 md:pt-20 pb-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hear from students who transformed their dreams into reality with Campus Career Connect
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-white fill-white mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-white fill-white" strokeWidth={0} />
                    ))}
                  </div>
                </div>
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-white text-sm">{testimonial.course}</p>
                    <p className="text-white text-sm font-medium">{testimonial.college}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
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
    </section>
  );
};

export default TestimonialsSection;