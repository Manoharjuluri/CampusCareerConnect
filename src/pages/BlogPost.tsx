import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Update document title and meta tags for SEO
  useEffect(() => {
    if (slug && blogContent[slug]) {
      const post = blogContent[slug];
      document.title = `${post.title} | Campus Career Connect Blog`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription);
      }
    }
  }, [slug]);

  // Blog content based on slug
  const blogContent: Record<string, any> = {
    "career-guidance-right-college-decision": {
      title: "Career Guidance for Students: Are We Making the Right College Decision?",
      metaDescription: "Are we Making the Right College Choice? Discover why career guidance matters more than ever and learn 7 compelling reasons why proper support helps students make informed decisions about their future.",
      date: "2025-01-20",
      readTime: "10 min read",
      category: "Right College?",
      content: [
        {
          type: "intro",
          text: "Are we Making the Right College Choice? Career Guidance to Students. Do you read college brochures, course lists and tuition figures and wonder, what about making a wrong decision? You are not alone. The same knot in the stomach is experienced by the students and parents all around the world."
        },
        {
          type: "paragraph",
          text: "Having numerous options, shifting careers, and friends, relatives, and social media shouting their opinions at you, one may even be nearly certain that the career and college choice they have made is not right. There is a fear of not spending time and money wisely."
        },
        {
          type: "paragraph",
          text: "Giving students good career guidance does not guarantee them a wonderful future. It gives clearer next steps. When they have the proper support, adolescents are able to pilot ideas before they even make any payments, relieve stress at home and they also do not regret having gone to school later. Families will be able to make decisions that suit the student who sits in front of them today as opposed to making a guess."
        },
        {
          type: "heading",
          level: 2,
          text: "What does good career guidance to the students really mean?"
        },
        {
          type: "paragraph",
          text: "When one talks of career guidance, one will tend to envision a one-minute test and a list of majors. That is just the tip of the iceberg that students require."
        },
        {
          type: "paragraph",
          text: "Career guidance of students is a straight forward life long process. It makes them realize who they are, what options they can make, and attempt things in the actual world, prior to committing themselves to a 4-year plan and a mountain of loans. It is not as much about a single large decision but rather it is a combination of small and informed choices."
        },
        {
          type: "paragraph",
          text: "An effective guide, be it a counsellor, teacher or coach, asks questions, listens and provides tools not orders. It is aimed at assisting students to relate their strengths and values to smart education and training options."
        },
        {
          type: "heading",
          level: 2,
          text: "It Begins With Understanding Yourself, Not With Choosing a Major"
        },
        {
          type: "paragraph",
          text: "You must first know the individual who will be studying the major before choosing the major. It is a way of considering interest, strengths, values and personality. You may be a problem solver, but a paperwork detestor. Perhaps you are the kind that loves to serve people but gets exhausted in large masses. Perhaps you have more fun with your hands than sitting at a desk all day. These details matter."
        },
        {
          type: "paragraph",
          text: "Personal awareness will allow students to pose the question, \"Is this the line of thinking, working, and living that I prefer?\" The career guidance to students must begin with frank self-reflection and then align their potential career paths with college choices with their own personas and not those they wish the world of the world to believe they are."
        },
        {
          type: "heading",
          level: 2,
          text: "It Consists of Fieldwork, Not Web-based Tests"
        },
        {
          type: "paragraph",
          text: "Quizzes that are offered online can be entertaining and even useful, but these are not the only tools. The actual solutions are usually found outside of the classroom. This can be learned more quickly than a long survey through job shadowing of a day, by simply talking with someone already in a field, or, trying a brief internship. Clubs, part time jobs and volunteering are other revelations of what is right and wrong."
        },
        {
          type: "paragraph",
          text: "Consider them simply as mini experiments, not life long commitments. A student can volunteers in an animal clinic, understand that he/she dislikes the medical part, but likes communicating with pet owners. The realization may indicate alternative and more appropriate directions."
        },
        {
          type: "heading",
          level: 2,
          text: "7 Naked Reasons Career Advice on Students Counts More Than Ever"
        },
        {
          type: "paragraph",
          text: "This stress of having to get it right will not disappear. This is the reason why considerate support is so vital at the moment."
        },
        {
          type: "heading",
          level: 3,
          text: "1. College Is Costly, So Guessing Can Cost you thousands"
        },
        {
          type: "paragraph",
          text: "Tuitions, fees, books, and accommodation are quickly accumulated. The guesses made by students when they are guessing a major and then changing the major a couple of times or dropping out become very costly."
        },
        {
          type: "paragraph",
          text: "Career guidance at an early stage of the student assists them in trying out ideas with the students before engaging them in a long term contract. As an illustration, a student believes that nursing would be a good career to pursue, shadows a nurse and realizes that he or she faints when they see blood. Having such knowledge, they transition to the health administration programs of a local college and end up saving years of trial and error and several dollars."
        },
        {
          type: "heading",
          level: 3,
          text: "2. Students Are Under More Pressure than ever to figure out on a short notice"
        },
        {
          type: "paragraph",
          text: "The teens on social media feeds appear as those who have their entire life on track. To make it worse, parents and teachers usually question, What do you plan to do?"
        },
        {
          type: "paragraph",
          text: "The pressure may drive students into hasty decisions, such as majoring in an option because their peers did it. Quality advice would provide them with a secure environment to respond, I do not know yet, and questions to be asked without judgment. They will be able to slow down, investigate, and make more calm decisions rather than panic moves with the support."
        },
        {
          type: "heading",
          level: 3,
          text: "3. A lot of Great Careers are Not the Old four-year college"
        },
        {
          type: "paragraph",
          text: "The message has been straightforward over the years: either go to a four year university immediately or risk being left behind. That story is incomplete."
        },
        {
          type: "paragraph",
          text: "Good avenues are available by way of trade schools, community colleges, short tech programs, the military, sponsored gap years or by starting a small business. Career advising to students ought to be like an opening rather than a closing. By having all the realistic options available, teens will have the ability to choose training that suits their money and learning style as well as long-term goals rather than feeling that they are forced into one standard path."
        },
        {
          type: "heading",
          level: 3,
          text: "4. The Nature of Work and Employment is Rapidly Evolving, college students require skills and not degrees"
        },
        {
          type: "paragraph",
          text: "New workplaces emerge, the old ones disappear, and the tools are being replaced after every several years. A job title nowadays might not even be in existence in 10 years."
        },
        {
          type: "paragraph",
          text: "Due to this, students require powerful skills that can be transferable. Such aspects as problem-solving, writing, speaking, simple coding, and learning new tools fast. They can be guided on the courses, programs, and experiences that can develop these flexible skills. In that manner, they will be prepared to alter directions in the future in case they desire or require it."
        },
        {
          type: "heading",
          level: 3,
          text: "5. Good Advice Assists Parents in Assisting but Not in Overprotecting"
        },
        {
          type: "paragraph",
          text: "The majority of parents want the best of their children, yet fear and love may confuse in the most difficult ways. You can drive a safe job or follow the same path you were following without even trying to do so."
        },
        {
          type: "paragraph",
          text: "Third voice can be exercised by a counselor, teacher, or coach. The parents are not left behind, and they make students feel heard. Parents can just do one simple thing: ask open-ended questions, such as, What classes do you find energizing? What kind of work have you liked so far? rather than You should be a doctor. This is called face-to-face and not silent pressure."
        },
        {
          type: "heading",
          level: 3,
          text: "6. Planning ahead can help to avoid burnout and dropping out"
        },
        {
          type: "paragraph",
          text: "Students jump into a major only to realize that they do not like the day to day job. This is followed by boredom, stress and feeling confined. Grades drop. A few of them cease attending classes and eventually quit."
        },
        {
          type: "paragraph",
          text: "This risk can be mitigated through early honest career guidance of middle school and early high school students. As adolescents experiment with various courses, groups, and extracurricular activities that suit them, they receive initial hints about what works. That will make subsequent decisions feel more lifelike and make them less of a blind guess, which will assist in their motivation."
        },
        {
          type: "heading",
          level: 3,
          text: "7. Direction Makes Students confident to switch tracks in case necessary"
        },
        {
          type: "paragraph",
          text: "The myth that is detrimental is that there is one good career that a person should pursue and remain in until they die. In practice in real life, various adults switch gears a number of times."
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion"
        },
        {
          type: "paragraph",
          text: "Thus, is our career and college choice the right one? The truth of it is that there is seldom the right way to do things. A high level of career guidance with students would mean no longer having a perfect plan, but rather a smart next step."
        },
        {
          type: "paragraph",
          text: "Students make better choices and experience less fear when they know themselves, research viable alternatives and engage the attention of adults who listen. Parents also have a calmer mind, since the plan has been made out of fact and not conjecture."
        },
        {
          type: "paragraph",
          text: "Select one small thing, one sincere conversation, or one new experience this week. That small action can initiate a journey that suits the student that he or she is now and what they are becoming at the moment."
        }
      ]
    },
    "best-career-counselling-platform-2025": {
      title: "How to Choose the Best Career Counselling Platform in 2025",
      metaDescription: "Learn how to choose the Best Career Counselling Platform in 2025 with clear criteria, real reviews, and step-by-step checks for students and parents.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Career Guidance",
      content: [
        {
          type: "intro",
          text: "Choosing a career can feel like standing at a crossroads with hundreds of roads and no clear signboards. Courses, exams, placements, work trends, and family expectations all pull you in different directions. In this confusion, a Best Career Counselling Platform can act like a clear map."
        },
        {
          type: "paragraph",
          text: "The right platform does more than tell you which course to pick. It helps you understand yourself, your strengths, and what kind of work you can enjoy and sustain. It connects your interests with real opportunities in the job market."
        },
        {
          type: "paragraph",
          text: "This guide explains what to look for, what to avoid, and how to judge if a platform actually adds value to your journey."
        },
        {
          type: "heading",
          level: 2,
          text: "Why Career Counselling Matters More Today"
        },
        {
          type: "paragraph",
          text: "Careers do not follow a straight line anymore. Students may change fields, pick up new skills, or work in roles that did not exist a few years ago. A random guess at this stage can cost years of time and money."
        },
        {
          type: "heading",
          level: 3,
          text: "Good career counselling helps you:"
        },
        {
          type: "list",
          items: [
            "Avoid choosing a course only because friends chose it.",
            "Match your skills and interests with practical options.",
            "Understand future trends in jobs and skills.",
            "Plan a clear path from school or college to employment."
          ]
        },
        {
          type: "paragraph",
          text: "In simple terms, strong counselling gives you clarity and confidence. You stop making choices out of fear and start making them with awareness."
        },
        {
          type: "heading",
          level: 2,
          text: "What Makes the Best Career Counselling Platform"
        },
        {
          type: "paragraph",
          text: "Not every website with tests and charts offers quality guidance. The best career counselling platform shares some common traits that you can check even before signing up."
        },
        {
          type: "heading",
          level: 3,
          text: "1. Strong focus on personalization"
        },
        {
          type: "paragraph",
          text: "A good platform treats you as a person, not a data point."
        },
        {
          type: "heading",
          level: 4,
          text: "Look for:"
        },
        {
          type: "list",
          items: [
            "Detailed questionnaires on interests, values, and personality.",
            "Separate sections for school students, college students, and working professionals.",
            "Reports that talk about your pattern of strengths, not only a list of careers."
          ]
        },
        {
          type: "paragraph",
          text: "If the advice looks copy-pasted or too generic, it will not help you much."
        },
        {
          type: "heading",
          level: 3,
          text: "2. Qualified and experienced counsellors"
        },
        {
          type: "paragraph",
          text: "Technology helps, but people still matter. The platform should clearly share who its counsellors are and what they have studied."
        },
        {
          type: "heading",
          level: 4,
          text: "Check for:"
        },
        {
          type: "list",
          items: [
            "Background in psychology, education, or career guidance.",
            "Experience with students from your level (school, UG, PG).",
            "Training in standardized assessments."
          ]
        },
        {
          type: "paragraph",
          text: "Also see if you can book one-on-one sessions, either online or in person. Tools are useful, but a conversation often unlocks deeper insights."
        },
        {
          type: "heading",
          level: 3,
          text: "3. Reliable assessments and reports"
        },
        {
          type: "paragraph",
          text: "Many free tests online give random results that change every time. The best platforms use standardized, research-based assessments."
        },
        {
          type: "heading",
          level: 4,
          text: "Pay attention to:"
        },
        {
          type: "list",
          items: [
            "Clear explanation of what each test measures.",
            "Simple, visual reports that you can understand without jargon.",
            "Links between your scores and suggested career paths."
          ]
        },
        {
          type: "paragraph",
          text: "If a platform only shares your \"type\" or \"color\" without explaining next steps, treat it as entertainment, not guidance."
        },
        {
          type: "heading",
          level: 3,
          text: "4. Updated information on courses and careers"
        },
        {
          type: "paragraph",
          text: "Career advice loses value when it is outdated. A strong platform connects assessments with real, current opportunities."
        },
        {
          type: "heading",
          level: 4,
          text: "Check whether it:"
        },
        {
          type: "list",
          items: [
            "Shows up-to-date information on courses, exams, and colleges.",
            "Shares job roles, required skills, and possible salary ranges.",
            "Talks about new-age careers along with traditional ones."
          ]
        },
        {
          type: "paragraph",
          text: "You should feel that the platform understands today's education and hiring trends, not just old textbook paths."
        },
        {
          type: "heading",
          level: 3,
          text: "5. Practical support beyond counselling"
        },
        {
          type: "paragraph",
          text: "The best career counselling platform does not stop at \"You should choose this field\"."
        },
        {
          type: "heading",
          level: 4,
          text: "Look for support such as:"
        },
        {
          type: "list",
          items: [
            "Help with choosing subjects or combinations in school.",
            "Guidance on building a profile, internships, and projects.",
            "Help with college shortlisting and application planning.",
            "Resume, LinkedIn, and interview preparation support."
          ]
        },
        {
          type: "paragraph",
          text: "When a platform guides you from self-awareness to actual action, your chances of success rise sharply."
        },
        {
          type: "heading",
          level: 4,
          text: "Online Platform vs Traditional Counsellor"
        },
        {
          type: "paragraph",
          text: "Many students wonder if they should visit a counsellor in person or use an online platform. Both options have strengths and limits."
        },
        {
          type: "heading",
          level: 4,
          text: "Online platforms offer:"
        },
        {
          type: "list",
          items: [
            "Flexible timings and access from any city or town.",
            "Structured tools and dashboards to track progress.",
            "Exposure to a wide range of courses and careers."
          ]
        },
        {
          type: "heading",
          level: 4,
          text: "On the other hand, traditional counsellors in schools or private practice offer:"
        },
        {
          type: "list",
          items: [
            "Face-to-face conversations and body language cues.",
            "Local knowledge of nearby colleges and institutes.",
            "Immediate emotional support when students feel pressure."
          ]
        },
        {
          type: "paragraph",
          text: "The ideal choice often combines both. A strong platform supported by trained counsellors, whether on video or in person, gives the best of both worlds."
        },
        {
          type: "heading",
          level: 4,
          text: "How to Evaluate a Career Counselling Platform Step by Step"
        },
        {
          type: "paragraph",
          text: "Instead of searching for the \"Best Career Counselling Platform\" and clicking the first ad you see, use a simple checklist."
        },
        {
          type: "heading",
          level: 4,
          text: "Step 1: Review transparency and credibility"
        },
        {
          type: "heading",
          level: 4,
          text: "Open the \"About\" page and check:"
        },
        {
          type: "list",
          items: [
            "Who founded the platform and why.",
            "Profiles of counsellors and psychologists.",
            "Any partnerships with schools, colleges, or organizations."
          ]
        },
        {
          type: "paragraph",
          text: "Lack of clear information is a warning sign."
        },
        {
          type: "heading",
          level: 4,
          text: "Step 2: Study the process"
        },
        {
          type: "paragraph",
          text: "A clear, structured process builds trust. Look for:"
        },
        {
          type: "list",
          items: [
            "A first stage of assessment and data gathering.",
            "A second stage of analysis and report sharing.",
            "A final stage of counselling, planning, and follow-up."
          ]
        },
        {
          type: "paragraph",
          text: "If the platform jumps straight to course suggestions without understanding you, the advice will be weak."
        },
        {
          type: "heading",
          level: 4,
          text: "Step 3: Check student reviews and case stories"
        },
        {
          type: "paragraph",
          text: "Real experiences help you judge impact."
        },
        {
          type: "heading",
          level: 4,
          text: "Look for:"
        },
        {
          type: "list",
          items: [
            "Detailed reviews from students and parents, not only star ratings.",
            "Examples of students who changed paths after counselling.",
            "Feedback on clarity, support, and responsiveness."
          ]
        },
        {
          type: "paragraph",
          text: "Focus on patterns. If many reviews praise the same strengths, you can expect similar quality."
        },
        {
          type: "heading",
          level: 4,
          text: "Step 4: Compare pricing with value"
        },
        {
          type: "paragraph",
          text: "Higher price does not always mean higher quality, but free is not always better either."
        },
        {
          type: "heading",
          level: 4,
          text: "Ask:"
        },
        {
          type: "list",
          items: [
            "What do I get for this fee?",
            "Are sessions live or only recorded?",
            "Do I receive reports and a clear action plan?"
          ]
        },
        {
          type: "paragraph",
          text: "Choose the option that balances your budget with the level of support you need."
        },
        {
          type: "heading",
          level: 4,
          text: "Step 5: Test with a small step"
        },
        {
          type: "paragraph",
          text: "If possible, start with:"
        },
        {
          type: "list",
          items: [
            "A free orientation call.",
            "A basic assessment.",
            "A single counselling session."
          ]
        },
        {
          type: "paragraph",
          text: "Use that experience to decide whether to continue or switch to another provider."
        },
        {
          type: "heading",
          level: 3,
          text: "Common Mistakes Students Make When Choosing Platforms"
        },
        {
          type: "paragraph",
          text: "Many students repeat the same errors when they search for help."
        },
        {
          type: "heading",
          level: 4,
          text: "Some frequent mistakes are:"
        },
        {
          type: "list",
          items: [
            "Following friends blindly: A platform that worked for a topper in science may not suit a student who loves design or humanities.",
            "Trusting only social media ads: Attractive graphics and big promises mean little without clear proof.",
            "Ignoring parents' questions: Parents pay for the service in many cases, so include them in the decision. They may notice gaps that you miss.",
            "Expecting instant answers: No serious counsellor can tell you your \"perfect career\" in 10 minutes. Good guidance takes reflection and honest discussion."
          ]
        },
        {
          type: "paragraph",
          text: "Avoid these traps and you already improve your chances of making a sound choice."
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion: Your Career Deserves Informed Guidance"
        },
        {
          type: "paragraph",
          text: "Career decisions shape where you live, how you spend your days, and how you feel about your work. Guesswork is too risky at this stage. The best career counselling platform for you is the one that understands your story, respects your goals, and backs every suggestion with logic and data."
        },
        {
          type: "paragraph",
          text: "Take time to review options, ask sharp questions, and start with small steps. Treat counselling as a partnership, not a magic formula. When you combine self-awareness with expert guidance, you give yourself a strong base for studies, work, and long-term growth."
        }
      ]
    }
  };

  const post = blogContent[slug || ""];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Blog Post Not Found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const renderContent = () => {
    return post.content.map((item: any, index: number) => {
      switch (item.type) {
        case "heading":
          const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
          return (
            <HeadingTag
              key={index}
              className={`font-bold text-primary mb-4 mt-8 ${
                item.level === 2
                  ? "text-3xl"
                  : item.level === 3
                  ? "text-2xl"
                  : "text-xl"
              }`}
            >
              {item.text}
            </HeadingTag>
          );
        case "paragraph":
          return (
            <p key={index} className="text-muted-foreground mb-4 leading-relaxed text-lg">
              {item.text}
            </p>
          );
        case "list":
          return (
            <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
              {item.items.map((listItem: string, listIndex: number) => (
                <li key={listIndex} className="text-muted-foreground leading-relaxed">
                  {listItem}
                </li>
              ))}
            </ul>
          );
        case "intro":
          return (
            <p key={index} className="text-xl text-foreground mb-6 leading-relaxed font-medium">
              {item.text}
            </p>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Blog Post Content */}
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent()}
          </div>

          {/* CTA Card */}
          <Card className="mt-12 border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Start Your Career Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get expert career guidance and college admission support from Campus Career Connect
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Free Counseling
                  </Button>
                </Link>
                <Link to="/schedule-call">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

