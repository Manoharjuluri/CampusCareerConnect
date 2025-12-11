/**
 * College Details Data
 * Comprehensive information about partner colleges including courses, placements, and labs
 */

export interface CollegeDetails {
  name: string;
  logo: string;
  location: string;
  ranking: string;
  category: string;
  description: string;
  courses: string[];
  placements: {
    averageSalary: string;
    placementRate: string;
    topRecruiters: string[];
    highestPackage?: string;
  };
  labs: string[];
  facilities: string[];
  highlights: string[];
  website?: string;
}

export const collegeDetailsData: Record<string, CollegeDetails> = {
  "SRM Institute": {
    name: "SRM Institute of Science and Technology",
    logo: "/srm-logo.png",
    location: "Chennai, Tamil Nadu",
    ranking: "#5 Private Engineering",
    category: "Engineering",
    description: "SRM Institute of Science and Technology (SRMIST) is a prestigious private deemed university established in 1985. With multiple campuses across India, SRMIST is ranked 13th in Engineering by NIRF 2024 and accredited with A++ grade by NAAC.",
    courses: [
      "B.Tech Computer Science Engineering",
      "B.Tech Electronics & Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Civil Engineering",
      "B.Tech Electrical & Electronics Engineering",
      "B.Tech Information Technology",
      "B.Tech Artificial Intelligence & Data Science",
      "B.Tech Cyber Security",
      "B.Tech Biotechnology",
      "B.Tech Aerospace Engineering"
    ],
    placements: {
      averageSalary: "₹6-8 LPA",
      placementRate: "95%+",
      highestPackage: "₹45 LPA",
      topRecruiters: [
        "Microsoft", "Amazon", "Google", "TCS", "Infosys", "Wipro",
        "Accenture", "Cognizant", "IBM", "Oracle", "Dell", "HCL"
      ]
    },
    labs: [
      "Advanced Computing Lab",
      "Robotics & Automation Lab",
      "IoT & Embedded Systems Lab",
      "Data Science & AI Lab",
      "Cyber Security Lab",
      "VLSI Design Lab",
      "Communication Systems Lab",
      "CAD/CAM Lab",
      "Fluid Mechanics Lab",
      "Material Testing Lab"
    ],
    facilities: [
      "250-acre main campus with modern infrastructure",
      "Central library with extensive digital resources",
      "Air-conditioned auditoriums (4000+ capacity)",
      "Smart classrooms with advanced IT infrastructure",
      "5000+ computer systems",
      "Separate hostels for boys and girls",
      "Sports complexes and recreational facilities",
      "Research centers for innovation"
    ],
    highlights: [
      "NIRF Rank 13 in Engineering (2024)",
      "NAAC A++ Accreditation",
      "Multiple campuses across India",
      "Annual cultural fest 'Milan'",
      "Strong industry partnerships",
      "International collaborations"
    ],
    website: "https://www.srmist.edu.in"
  },
  "VIT University": {
    name: "VIT University (Vellore Institute of Technology)",
    logo: "/vit-logo.png",
    location: "Vellore, Tamil Nadu",
    ranking: "#8 Private Engineering",
    category: "Engineering",
    description: "VIT University is one of India's premier private universities, established in 1984. Known for its excellent placement record and world-class infrastructure, VIT consistently ranks among the top engineering colleges in India.",
    courses: [
      "B.Tech Computer Science Engineering",
      "B.Tech Electronics & Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Civil Engineering",
      "B.Tech Electrical & Electronics Engineering",
      "B.Tech Information Technology",
      "B.Tech Biotechnology",
      "B.Tech Chemical Engineering",
      "B.Tech Aerospace Engineering",
      "B.Tech Automobile Engineering"
    ],
    placements: {
      averageSalary: "₹7-9 LPA",
      placementRate: "96%+",
      highestPackage: "₹50 LPA",
      topRecruiters: [
        "Microsoft", "Amazon", "Google", "Goldman Sachs", "JP Morgan",
        "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Dell",
        "Oracle", "IBM", "Adobe", "Samsung"
      ]
    },
    labs: [
      "Advanced Computing & AI Lab",
      "Robotics & Automation Lab",
      "IoT & Embedded Systems Lab",
      "VLSI & Chip Design Lab",
      "Communication & Signal Processing Lab",
      "CAD/CAM/CAE Lab",
      "Fluid Mechanics & Heat Transfer Lab",
      "Material Science Lab",
      "Biotechnology Research Lab",
      "Chemical Process Lab"
    ],
    facilities: [
      "Sprawling campus with modern architecture",
      "State-of-the-art library with digital resources",
      "Fully air-conditioned hostels",
      "International standard sports facilities",
      "Advanced research centers",
      "Industry collaboration labs",
      "Entrepreneurship development cell",
      "International student exchange programs"
    ],
    highlights: [
      "Consistently ranked among top 10 private engineering colleges",
      "Excellent placement record with 96%+ placement rate",
      "Strong industry-academia collaboration",
      "International partnerships with 300+ universities",
      "Research-focused curriculum",
      "Active student clubs and societies"
    ],
    website: "https://vit.ac.in"
  },
  "Manipal Institute": {
    name: "Manipal Institute of Technology",
    logo: "/manipal-logo.jpg",
    location: "Manipal, Karnataka",
    ranking: "#12 Engineering",
    category: "Technology",
    description: "Manipal Institute of Technology (MIT) is a premier engineering college under Manipal Academy of Higher Education. Established in 1957, MIT is known for its excellent academic standards and strong industry connections.",
    courses: [
      "B.Tech Computer Science Engineering",
      "B.Tech Electronics & Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Civil Engineering",
      "B.Tech Electrical & Electronics Engineering",
      "B.Tech Information Technology",
      "B.Tech Biotechnology",
      "B.Tech Chemical Engineering",
      "B.Tech Industrial & Production Engineering",
      "B.Tech Mechatronics Engineering"
    ],
    placements: {
      averageSalary: "₹6-8 LPA",
      placementRate: "94%+",
      highestPackage: "₹42 LPA",
      topRecruiters: [
        "Microsoft", "Amazon", "Google", "Goldman Sachs", "JP Morgan",
        "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Dell",
        "Oracle", "IBM", "Siemens", "Bosch"
      ]
    },
    labs: [
      "Advanced Computing & AI Lab",
      "Robotics & Mechatronics Lab",
      "IoT & Embedded Systems Lab",
      "VLSI Design Lab",
      "Communication Systems Lab",
      "CAD/CAM Lab",
      "Fluid Mechanics Lab",
      "Material Testing Lab",
      "Biotechnology Lab",
      "Chemical Process Lab"
    ],
    facilities: [
      "Beautiful campus with modern infrastructure",
      "Well-equipped library with digital resources",
      "Comfortable hostel accommodations",
      "Sports and recreational facilities",
      "Research and innovation centers",
      "Industry collaboration spaces",
      "Entrepreneurship cell",
      "International exchange programs"
    ],
    highlights: [
      "Established in 1957 with rich legacy",
      "Part of Manipal Academy of Higher Education",
      "Strong industry partnerships",
      "Excellent placement opportunities",
      "Research-oriented approach",
      "Active student community"
    ],
    website: "https://manipal.edu/mit"
  },
  "GITAM University": {
    name: "GITAM University",
    logo: "/gitam.jpg",
    location: "Hyderabad, Vishakapatnam, Bangalore",
    ranking: "#15 Private Engineering",
    category: "Engineering",
    description: "GITAM (Gandhi Institute of Technology and Management) is a leading private university with campuses in multiple cities. Known for its quality education and strong placement record.",
    courses: [
      "B.Tech Computer Science Engineering",
      "B.Tech Electronics & Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Civil Engineering",
      "B.Tech Electrical & Electronics Engineering",
      "B.Tech Information Technology",
      "B.Tech Aerospace Engineering"
    ],
    placements: {
      averageSalary: "₹5-7 LPA",
      placementRate: "92%+",
      highestPackage: "₹38 LPA",
      topRecruiters: [
        "TCS", "Infosys", "Wipro", "Accenture", "Cognizant",
        "Tech Mahindra", "Capgemini", "IBM", "Dell"
      ]
    },
    labs: [
      "Computer Networks Lab",
      "Embedded Systems Lab",
      "VLSI Design Lab",
      "Communication Lab",
      "CAD/CAM Lab"
    ],
    facilities: [
      "Modern campus infrastructure",
      "Well-stocked library",
      "Hostel facilities",
      "Sports facilities"
    ],
    highlights: [
      "Multiple campus locations",
      "Strong industry connections",
      "Good placement record"
    ]
  },
  "LPU": {
    name: "Lovely Professional University",
    logo: "/lpu-logo.png",
    location: "Punjab",
    ranking: "#25 Private Engineering",
    category: "Engineering",
    description: "LPU is one of India's largest private universities with a sprawling campus. Known for its innovative teaching methods and excellent infrastructure.",
    courses: [
      "B.Tech Computer Science Engineering",
      "B.Tech Electronics & Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Civil Engineering",
      "B.Tech Electrical & Electronics Engineering",
      "B.Tech Information Technology",
      "B.Tech Aerospace Engineering",
      "B.Tech Automobile Engineering"
    ],
    placements: {
      averageSalary: "₹5-7 LPA",
      placementRate: "90%+",
      highestPackage: "₹40 LPA",
      topRecruiters: [
        "Microsoft", "Amazon", "TCS", "Infosys", "Wipro",
        "Accenture", "Cognizant", "IBM", "Dell", "Oracle"
      ]
    },
    labs: [
      "Advanced Computing Lab",
      "Robotics Lab",
      "IoT Lab",
      "VLSI Design Lab",
      "Communication Systems Lab",
      "CAD/CAM Lab"
    ],
    facilities: [
      "600+ acre campus",
      "Modern infrastructure",
      "Well-equipped library",
      "Hostel accommodations",
      "Sports facilities",
      "Research centers"
    ],
    highlights: [
      "One of India's largest private universities",
      "Strong placement record",
      "Industry-oriented curriculum",
      "International collaborations"
    ]
  },
  "Amity University": {
    name: "Amity University",
    logo: "/amity-logo.png",
    location: "Noida",
    ranking: "#30 Private Engineering",
    category: "Engineering",
    description: "Amity University is a leading private university with multiple campuses across India. Known for its quality education and industry partnerships.",
    courses: [
      "B.Tech Computer Science Engineering",
      "B.Tech Electronics & Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Civil Engineering",
      "B.Tech Electrical & Electronics Engineering",
      "B.Tech Information Technology",
      "B.Tech Biotechnology"
    ],
    placements: {
      averageSalary: "₹5-7 LPA",
      placementRate: "88%+",
      highestPackage: "₹35 LPA",
      topRecruiters: [
        "TCS", "Infosys", "Wipro", "Accenture", "Cognizant",
        "Tech Mahindra", "Capgemini", "IBM"
      ]
    },
    labs: [
      "Computer Lab",
      "Electronics Lab",
      "Mechanical Lab",
      "Communication Lab",
      "CAD Lab"
    ],
    facilities: [
      "Modern campus",
      "Library facilities",
      "Hostel accommodation",
      "Sports facilities"
    ],
    highlights: [
      "Multiple campuses",
      "Industry partnerships",
      "Good placement opportunities"
    ]
  },
  "Amritha Vishwa Vidyapeetham": {
    name: "Amrita Vishwa Vidyapeetham",
    logo: "/amrita-logo.png",
    location: "Coimbatore",
    ranking: "#22 Private Engineering",
    category: "Engineering",
    description: "Amrita Vishwa Vidyapeetham is a multi-campus, multi-disciplinary research university. Known for its strong emphasis on research and innovation.",
    courses: [
      "B.Tech Computer Science Engineering",
      "B.Tech Electronics & Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Civil Engineering",
      "B.Tech Electrical & Electronics Engineering",
      "B.Tech Information Technology",
      "B.Tech Aerospace Engineering"
    ],
    placements: {
      averageSalary: "₹6-8 LPA",
      placementRate: "93%+",
      highestPackage: "₹40 LPA",
      topRecruiters: [
        "Microsoft", "Amazon", "TCS", "Infosys", "Wipro",
        "Accenture", "Cognizant", "IBM", "Oracle"
      ]
    },
    labs: [
      "Advanced Computing Lab",
      "Robotics Lab",
      "VLSI Design Lab",
      "Communication Systems Lab",
      "CAD/CAM Lab"
    ],
    facilities: [
      "Research-focused campus",
      "Modern infrastructure",
      "Well-equipped labs",
      "Library resources",
      "Hostel facilities"
    ],
    highlights: [
      "Strong research focus",
      "Excellent placement record",
      "Industry collaborations",
      "Innovation-driven approach"
    ]
  }
};

// Default data for colleges not in the detailed list
export const getDefaultCollegeDetails = (college: { name: string; logo: string; location: string; ranking: string; category: string }): CollegeDetails => {
  return {
    name: college.name,
    logo: college.logo,
    location: college.location,
    ranking: college.ranking,
    category: college.category,
    description: `${college.name} is a reputed ${college.category} institution located in ${college.location}. The college offers quality B.Tech programs and has a strong track record in placements and academics.`,
    courses: [
      "B.Tech Computer Science Engineering",
      "B.Tech Electronics & Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Civil Engineering",
      "B.Tech Electrical & Electronics Engineering",
      "B.Tech Information Technology"
    ],
    placements: {
      averageSalary: "₹4-6 LPA",
      placementRate: "85%+",
      highestPackage: "₹30 LPA",
      topRecruiters: [
        "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Tech Mahindra"
      ]
    },
    labs: [
      "Computer Lab",
      "Electronics Lab",
      "Mechanical Lab",
      "Communication Lab",
      "CAD Lab"
    ],
    facilities: [
      "Modern infrastructure",
      "Library facilities",
      "Hostel accommodation",
      "Sports facilities"
    ],
    highlights: [
      "Quality education",
      "Industry-oriented curriculum",
      "Good placement opportunities"
    ]
  };
};

