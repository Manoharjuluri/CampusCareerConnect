import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    // If not on home page, navigate to home first, then scroll
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-[#232F3E] text-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-full overflow-x-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full overflow-x-hidden">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Campus Career Connect</h3>
                <p className="text-sm text-primary-foreground/80">Empowering Student Success</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner in building a successful academic and professional future. 
              We bridge the gap between dreams and reality.
            </p>
            <div className="flex space-x-4">
              <span className="text-sm border  px-3 py-1 rounded-full text-accent-foreground">10K+ Students</span>
              <span className="text-sm border  px-3 py-1 rounded-full text-accent-foreground">500+ Partners</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => handleHashClick(e, '#home')} className="text-primary-foreground/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleHashClick(e, '#about')} className="text-primary-foreground/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" onClick={(e) => handleHashClick(e, '#services')} className="text-primary-foreground/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" onClick={(e) => handleHashClick(e, '#testimonials')} className="text-primary-foreground/80 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#partners" onClick={(e) => handleHashClick(e, '#partners')} className="text-primary-foreground/80 hover:text-white transition-colors">Partner Colleges</a></li>
              <li><a href="#trainlance" onClick={(e) => handleHashClick(e, '#trainlance')} className="text-primary-foreground/80 hover:text-white transition-colors">Training (Trainlance)</a></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#contact" onClick={(e) => handleHashClick(e, '#contact')} className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/80">B.Tech College Placement</span></li>
              <li><span className="text-primary-foreground/80">Career Counseling</span></li>
              <li><span className="text-primary-foreground/80">Admission Support</span></li>
              <li><span className="text-primary-foreground/80">Trainlance Skill Training</span></li>
              <li><span className="text-primary-foreground/80">Programming Courses</span></li>
              <li><span className="text-primary-foreground/80">Soft Skills Development</span></li>
              <li><span className="text-primary-foreground/80">Aptitude Training</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  CCC Campus, Malakpet, Hyderabad <br />
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-primary-foreground/80 text-sm">+91 8074313417</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-primary-foreground/80 text-sm">info@campuscareerconnect.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-2">
                <a href="https://www.facebook.com/share/17FAqgpYkR/" target="_blank" rel="noopener noreferrer" className="text-accent-foreground p-2 rounded transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/campuscareerconnect?utm_source=ig_web_button_share_sheet&igsh=MXQ3eGNtcGhveGZxOA==" target="_blank" rel="noopener noreferrer" className="text-accent-foreground p-2 rounded transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-accent-foreground p-2 rounded transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595zm-12.5-10h-.03c-.01 0-.02.01-.02.02v.01c0 .01.01.02.02.02h.03c.01 0 .02-.01.02-.02v-.01c0-.01-.01-.02-.02-.02z" />
                  </svg>
                </a>
                <a href="#" className="text-accent-foreground p-2 rounded transition-colors" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Campus Career Connect All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
