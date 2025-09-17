import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const PartnersSection = () => {
  const [showAllColleges, setShowAllColleges] = useState(false);
  
  const partners = [
    { name: "SRM Institute", logo: "/srm-logo.png", category: "Engineering", location: "Chennai", ranking: "#5 Private Engineering" },
    { name: "VIT University", logo: "/vit-logo.png", category: "Engineering", location: "Vellore", ranking: "#8 Private Engineering" },
    { name: "Manipal Institute", logo: "/manipal-logo.jpg", category: "Technology", location: "Karnataka", ranking: "#12 Engineering" },
    { name: "GITAM University", logo: "/gitam.jpg", category: "Engineering", location: "Hyderabad,Vishakapatnam,Banglore", ranking: "#15 Private Engineering" },
    { name: "VR Siddhartha Engineering College", logo: "/vrsiddardha.png", category: "Engineering", location: "Vijayawada", ranking: "#20 Private Engineering" },
    { name: "LPU", logo: "/lpu-logo.png", category: "Engineering", location: "Punjab", ranking: "#25 Private Engineering" },
    { name: "Amity University", logo: "/amity-logo.png", category: "Engineering", location: "Noida", ranking: "#30 Private Engineering" },
    { name: "KL University", logo: "/kl-logo.png", category: "Engineering", location: "Hyderabad,Vijayawada", ranking: "#35 Private Engineering" },
    { name: "Anurag University", logo: "/anurag-university-logo.png", category: "Engineering", location: "Hyderabad", ranking: "#40 Private Engineering" },
    { name: "Mallareddy engineering college", logo: "/mallareddy-logo.jpg", category: "Engineering", location: "Hyderabad", ranking: "#18 Private Engineering" },
    { name: "Amritha Vishwa Vidyapeetham", logo: "/amrita-logo.png", category: "Engineering", location: "Coimbatore", ranking: "#22 Private Engineering" },
    { name: "Parul University", logo: "/Parul-University-Logo.png", category: "Engineering", location: "Gujarat", ranking: "#45 Private Engineering" }
  ];

  const moreColleges = [
    { name: "Bennett University", logo: "/bennet-university.png", category: "Engineering", location: "Greater Noida", ranking: "#50 Private Engineering" },
    { name: "Guru Nanak College", logo: "/gurunanak.png", category: "Engineering", location: "Hyderabad", ranking: "#55 Private Engineering" },
    { name: "Chandigarh University", logo: "/chandigarh university.jpg", category: "Engineering", location: "Chandigarh", ranking: "#60 Private Engineering" },
    { name: "Sandip University", logo: "/sandip university.png", category: "Engineering", location: "Nasik", ranking: "#89 Private Engineering" },
    { name: "Vignan's Foundation for Science, Technology & Research", logo: "/vignan-logo.jpg", category: "Engineering", location: "Guntur", ranking: "#65 Private Engineering" },
    { name: "R.V.R. & J.C.College of Engineering", logo: "/rvrjc.jpg", category: "Engineering", location: "Guntur", ranking: "#70 Private Engineering" },
    { name: "Presidency University", logo: "/presidency.jpg", category: "Engineering", location: "Bangalore", ranking: "#75 Private Engineering" },
    { name: "REVA University", logo: "/Reva_logo.jpeg", category: "Engineering", location: "Bangalore", ranking: "#80 Private Engineering" },
    { name: "Dhanekula Institute of Engineering & Technology", logo: "/dhanekula.png", category: "Engineering", location: "Vijayawada", ranking: "#85 Private Engineering" },
    { name: "Sharda University", logo: "/sharada.png", category: "Engineering", location: "Greater Noida", ranking: "#90 Private Engineering" },
    { name: "Vishnu Institute of Technology", logo: "/vishnu.png", category: "Engineering", location: "Bhimavaram", ranking: "#95 Private Engineering" },
    { name: "Acharya Nagarjuna University (ANU)", logo: "/acharya.png", category: "Engineering", location: "Guntur", ranking: "#100 Private Engineering" },
    { name: "MLR Institute of Technology", logo: "/mlr.jpg", category: "Engineering", location: "Hyderabad", ranking: "#25 Private Engineering" },
    { name: "Anna University", logo: "/anna-logo.png", category: "Engineering", location: "Chennai", ranking: "#105 Private Engineering" },
    { name: "Kalasalingam Academy of Research and Education", logo: "/kalasalingam-logo.png", category: "Engineering", location: "Chennai", ranking: "#110 Private Engineering" },
    { name: "SASTRA Deemed University", logo: "/sastra.png", category: "Engineering", location: "Thanjavur", ranking: "#115 Private Engineering" },
    { name: "Sathyabama Institute of Science and Technology, Chennai", logo: "/sathyabama.png", category: "Engineering", location: "Chennai", ranking: "#120 Private Engineering" },
    { name: "Visvesvaraya Technological University", logo: "/viswa.png", category: "Engineering", location: "Bangalore", ranking: "#125 Private Engineering" },
    { name: "Symbiosis University", logo: "/symbiosis-logo.png", category: "Engineering", location: "Pune", ranking: "#130 Private Engineering" },
    { name: "Ramaiah Institute of Technology", logo: "/ramaih.png", category: "Engineering", location: "Pune", ranking: "#135 Private Engineering" },
    { name: "Flame University", logo: "/flame.jpg", category: "Engineering", location: "Pune", ranking: "#140 Private Engineering" },
    { name: "CMR Institute of Technology", logo: "/cmr.jpg", category: "Engineering", location: "Sonipat", ranking: "#145 Private Engineering" },
    { name: "Ashoka University", logo: "/ashoka-logo.png", category: "Engineering", location: "Sonipat", ranking: "#150 Private Engineering" },
    { name: "JSS Academy", logo: "/jss-logo.png", category: "Engineering", location: "Noida", ranking: "#155 Private Engineering" },
    { name: "PES University", logo: "/pes.png", category: "Engineering", location: "Bangalore", ranking: "#160 Private Engineering" },
    { name: "BMS College", logo: "/bms.png", category: "Engineering", location: "Bangalore", ranking: "#165 Private Engineering" },
    { name: "RV College", logo: "/rv.jpg", category: "Engineering", location: "Bangalore", ranking: "#170 Private Engineering" },
   
  ];

  const allColleges = [...partners, ...moreColleges];
  const displayedColleges = showAllColleges ? allColleges : partners;

  const categories = [];

  return (
    <section id="partners" className="pt-12 pb-20 md:pt-14 lg:pt-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Private B.Tech College Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've partnered with India's top private B.Tech colleges to provide you 
            with direct access to quality engineering education and guaranteed placements.
          </p>
        </div> */}

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-2">
          {categories.map((category, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{category.count.split('+')[0].slice(-1)}</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">{category.title}</h3>
                <p className="text-accent font-medium">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Logos/Names */}
        <div className="bg-gradient-subtle rounded-2xl py-8 px-4 sm:px-6 lg:px-8 mb-4 overflow-x-hidden">
          <h3 className="text-2xl font-bold text-primary text-center mb-4">Top  College Partners</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-5 lg:gap-y-6 max-w-full overflow-x-hidden">
            {displayedColleges.map((college, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img src={college.logo} alt={college.name + ' logo'} className="w-24 h-24 object-contain rounded-full" />
                  </div>
                  <h4 className="font-semibold text-primary text-lg mb-2">{college.name}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{college.location}</p>
                  <p className="text-primary text-xs font-medium bg-primary/10 rounded-full px-3 py-1 inline-block">
                    {college.ranking}
                  </p>
                  <div className="mt-3">
                    <span className="text-xs text-black bg-gray-100 rounded-full px-4 py-1">
                      {college.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}

          {showAllColleges && (
            <div className="flex justify-center mt-6">
              <span className="text-lg font-semibold text-primary whitespace-nowrap text-center">
                ...and many more universities and colleges
              </span>
            </div>
          )}
          </div>

          {/* View More/Less Button */}
          <div className="flex justify-center mt-8">
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-bold shadow-card flex items-center gap-2 text-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-200"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
              onClick={() => {
                if (showAllColleges) {
                  // Scroll to the Top  College Partners heading
                  const heading = document.querySelector('h3.text-2xl.font-bold.text-primary.text-center.mb-4');
                  if (heading) {
                    heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
                setShowAllColleges(!showAllColleges);
              }}
            >
              {showAllColleges ? 'View Less' : 'View More'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className={`w-5 h-5 transition-transform duration-200 ${showAllColleges ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>


        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-semibold text-primary mb-2">Direct Admission</h3>
            <p className="text-muted-foreground text-sm">Skip the hassle with direct admission processes through our partner colleges</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-semibold text-primary mb-2">Scholarship Opportunities</h3>
            <p className="text-muted-foreground text-sm">Access exclusive scholarships and financial aid through our partnerships</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-semibold text-primary mb-2">Priority Support</h3>
            <p className="text-muted-foreground text-sm">Get priority support and faster responses from college admission teams</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;