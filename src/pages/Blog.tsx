import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "best-career-counselling-platform-2025",
    title: "How to Choose the Best Career Counselling Platform in 2025",
    description: "Learn how to choose the Best Career Counselling Platform in 2025 with clear criteria, real reviews, and step-by-step checks for students and parents. Discover essential factors like counselor qualifications, platform credibility, success rates, personalized guidance, and cost-effectiveness. Get expert tips on evaluating online vs offline counseling, understanding different assessment tools, and making informed decisions that align with your career goals and aspirations.\nWhat are you waiting for?\n go read full blog now.....",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Career Guidance",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "career-guidance-right-college-decision",
    title: "Career Guidance for Students: Are We Making the Right College Decision?",
    description: "Are we Making the Right College Choice? Career Guidance to Students. Do you read college brochures, course lists and tuition figures and wonder, what about making a wrong decision? You are not alone. The same knot in the stomach is experienced by the students and parents all around the world. Having numerous options, shifting careers, and friends, relatives, and social media shouting their opinions at you, one may even be nearly certain that the career and college choice they have made is not right. There is a fear of not spending time and money wisely.\n\nDiscover 7 compelling reasons why career guidance matters more than ever, from avoiding costly mistakes to building confidence in making informed decisions.",
    date: "2025-01-20",
    readTime: "10 min read",
    category: "Right College?",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "confused-what-to-do-after-12th",
    title: "Confused What to Do After 12th? An Easy Way of Selecting the Right Path",
    description: "Your score was high, everybody told you congratulations, and you had a feeling that your brain is frozen. The following question comes quick: college, course, entrance exams and future. You feel lost because you do not know what to do with your life after 12th, but you are not lagging. Discover a realistic 4-step decision model (Interest, Strength, Opportunity, Reality Check) to make the right choice and learn how to communicate with parents effectively.\n\nAvoid the 5 bad ways students pick courses and find your path even without being completely clear about your future.",
    date: "2025-01-25",
    readTime: "12 min read",
    category: "Career Guidance",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Career Guidance Blog | Campus Career Connect</title>
        <meta name="description" content="Expert insights, tips, and guides to help you make informed career decisions. Read our blog for career guidance, college admission tips, and success stories." />
        <meta name="keywords" content="career guidance blog, college admission blog, B.Tech admission tips, career counseling blog, engineering college blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://campuscareerconnect.com/blog" />
        <meta property="og:title" content="Career Guidance Blog | Campus Career Connect" />
        <meta property="og:description" content="Expert insights, tips, and guides to help you make informed career decisions." />
        <meta property="og:site_name" content="Campus Career Connect" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://campuscareerconnect.com/blog" />
        <meta name="twitter:title" content="Career Guidance Blog | Campus Career Connect" />
        <meta name="twitter:description" content="Expert insights, tips, and guides to help you make informed career decisions." />
        
        <link rel="canonical" href="https://campuscareerconnect.com/blog" />
      </Helmet>
      <Header />
      <main className="flex-1 pt-2 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Back Button */}
          <div className="mb-3">
            <Link to="/">
              <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
              Career Guidance Blog
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights, tips, and guides to help you make informed career decisions
            </p>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="border border-border/50 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full flex flex-col bg-white min-h-[500px]"
              >
                <Link to={`/blog/${post.id}`} className="h-full flex flex-col">
                  {post.image && (
                    <div className="w-full h-56 bg-gradient-subtle overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-4 text-sm leading-relaxed flex-1 whitespace-pre-line">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-8 col-span-full">
              <p className="text-muted-foreground">More blog posts coming soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
