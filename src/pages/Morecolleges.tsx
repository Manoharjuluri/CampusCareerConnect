
import React from "react";

const moreColleges = [
  { name: "Bennett University", logo: "/bennett-logo.png" },
  { name: "Shiv Nadar University", logo: "/shivnadar-logo.png" },
  { name: "Chandigarh University", logo: "/chandigarh-logo.png" },
  { name: "BITS Pilani", logo: "/bits-logo.png" },
  { name: "Jain University", logo: "/jain-logo.png" },
  { name: "Graphic Era University", logo: "/graphicera-logo.png" },
  { name: "Presidency University", logo: "/presidency-logo.png" },
  { name: "REVA University", logo: "/reva-logo.png" },
  { name: "Galgotias University", logo: "/galgotias-logo.png" },
  { name: "Sharda University", logo: "/sharda-logo.png" },
  { name: "SRM AP", logo: "/srmap-logo.png" },
  { name: "Vignan University", logo: "/vignan-logo.png" },
  { name: "Lovely Professional University", logo: "/lpu2-logo.png" },
  { name: "Chitkara University", logo: "/chitkara-logo.png" },
  { name: "Thapar Institute", logo: "/thapar-logo.png" },
  { name: "Jaypee University", logo: "/jaypee-logo.png" },
  { name: "Nirma University", logo: "/nirma-logo.png" },
  { name: "Christ University", logo: "/christ-logo.png" },
  { name: "Symbiosis University", logo: "/symbiosis-logo.png" },
  { name: "MIT World Peace University", logo: "/mitwpu-logo.png" },
  { name: "Flame University", logo: "/flame-logo.png" },
  { name: "O.P. Jindal University", logo: "/jindal-logo.png" },
  { name: "Ashoka University", logo: "/ashoka-logo.png" },
  { name: "JSS Academy", logo: "/jss-logo.png" },
  { name: "PES University", logo: "/pes-logo.png" },
  { name: "BMS College", logo: "/bms-logo.png" },
  { name: "RV College", logo: "/rv-logo.png" },
  { name: "Dayananda Sagar University", logo: "/dsu-logo.png" },
  { name: "CMR University", logo: "/cmr-logo.png" },
  { name: "Alliance University", logo: "/alliance-logo.png" },
  { name: "IIIT Hyderabad", logo: "/iiith-logo.png" },
  { name: "IIIT Bangalore", logo: "/iiitb-logo.png" },
  { name: "NIT Warangal", logo: "/nitw-logo.png" },
  { name: "NIT Trichy", logo: "/nitt-logo.png" },
  { name: "NIT Surathkal", logo: "/nitk-logo.png" },
  { name: "VIT Bhopal", logo: "/vitb-logo.png" },
  { name: "VIT AP", logo: "/vitap-logo.png" },
  { name: "Kalinga University", logo: "/kalinga-logo.png" },
  { name: "Siksha O Anusandhan", logo: "/soa-logo.png" },
  { name: "KIIT University", logo: "/kiit2-logo.png" },
  { name: "Xavier University", logo: "/xavier-logo.png" },
  { name: "NIFT Delhi", logo: "/nift-logo.png" },
  { name: "Pearl Academy", logo: "/pearl-logo.png" },
  { name: "Whistling Woods", logo: "/ww-logo.png" },
  { name: "IIAD Delhi", logo: "/iiad-logo.png" },
  { name: "Anant National University", logo: "/anant-logo.png" },
  { name: "Banasthali University", logo: "/banasthali-logo.png" },
  { name: "Birla Institute", logo: "/birla-logo.png" },
  { name: "DTU Delhi", logo: "/dtu-logo.png" },
  { name: "NSUT Delhi", logo: "/nsut-logo.png" },
  { name: "IGDTUW Delhi", logo: "/igdtuw-logo.png" },
  { name: "Jamia Millia Islamia", logo: "/jamia-logo.png" },
  { name: "Aligarh Muslim University", logo: "/amu-logo.png" },
];

const MoreColleges: React.FC = () => {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">More College Partners</h2>
        <div className="grid grid-cols-3 gap-8">
          {moreColleges.map((college, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-card p-6 flex flex-col items-center justify-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mb-4 bg-gray-100">
                <img src={college.logo} alt={college.name + ' logo'} className="w-20 h-20 object-contain" />
              </div>
              <h3 className="font-semibold text-primary text-lg text-center">{college.name}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-bold shadow-card text-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-200">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreColleges;
