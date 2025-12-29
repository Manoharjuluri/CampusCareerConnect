import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { env } from "@/config/env";

const ContactSection = () => {

  const navigate = useNavigate();
  // Contact form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    currentStatus: "",
    areaOfInterest: "",
    message: "",
    consent: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  // Handle select changes
  const handleSelect = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const payload = {
        formType: "contactForm",
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        currentStatus: form.currentStatus,
        areaOfInterest: form.areaOfInterest,
        message: form.message
      };
      const res = await fetch(`${env.API_BASE_URL}/careerContacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Failed to submit. Please try again.");
      setSuccess("Thank you! Your message has been sent.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        currentStatus: "",
        areaOfInterest: "",
        message: "",
        consent: false
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section id="contact" className="pt-0 pb-12 bg-gradient-subtle" style={{marginTop: '-3.5rem'}}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Get in Touch with Us
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to start your journey? Get expert career guidance, personalized counselling, and scientific assessments to discover your perfect career path.
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-card h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-darkgrey text-lg sm:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">Address</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      CCC Campus, Malakpet, Hyderabad<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">Phone</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">+91 8074313417</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">+91 9390163762</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm break-all">info@campuscareerconnect.com</p>
                    <p className="text-muted-foreground text-xs sm:text-sm break-all">support@campuscareerconnect.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">Office Hours</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Saturday: 10:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-secondary text-lg sm:text-xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        className="mt-1 text-sm" 
                        value={form.firstName} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        className="mt-1 text-sm" 
                        value={form.lastName} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        className="mt-1 text-sm" 
                        value={form.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                      <Input 
                        id="phoneNumber" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="mt-1 text-sm" 
                        value={form.phoneNumber} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>

                  {/* Status and Interest Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="grade" className="text-sm font-medium">Current Status *</Label>
                      <Select value={form.currentStatus} onValueChange={(val) => handleSelect("currentStatus", val)}>
                        <SelectTrigger className="mt-1 text-sm">
                          <SelectValue placeholder="Select your current status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12th-passed">12th Passed</SelectItem>
                          <SelectItem value="12th-appearing">12th Appearing</SelectItem>
                          <SelectItem value="gap-year">Gap Year</SelectItem>
                          <SelectItem value="college-student">College Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="interest" className="text-sm font-medium">Area of Interest *</Label>
                      <Select value={form.areaOfInterest} onValueChange={(val) => handleSelect("areaOfInterest", val)}>
                        <SelectTrigger className="mt-1 text-sm">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Engineering & Technology</SelectItem>
                          <SelectItem value="medical">Medical & Healthcare</SelectItem>
                          <SelectItem value="business">Business & Management</SelectItem>
                          <SelectItem value="arts">Arts & Sciences</SelectItem>
                          <SelectItem value="design">Design & Media</SelectItem>
                          <SelectItem value="law">Law</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your career goals, questions, or how we can help you..."
                      className="mt-1 text-sm resize-none"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="rounded mt-1 flex-shrink-0" 
                      checked={form.consent} 
                      onChange={handleChange} 
                    />
                    <Label htmlFor="consent" className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      I agree to receive communications from Campus Career Connect and understand that I can unsubscribe at any time.
                    </Label>
                  </div>

                  {/* Success/Error Messages */}
                  {success && (
                    <div className="text-green-600 text-center font-medium text-sm sm:text-base p-3 bg-green-50 rounded-lg">
                      {success}
                    </div>
                  )}
                  {error && (
                    <div className="text-red-600 text-center font-medium text-sm sm:text-base p-3 bg-red-50 rounded-lg">
                      {error}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="flex-1 order-1 sm:order-1" 
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      className="flex-1 sm:flex-none order-2 sm:order-2"
                      onClick={() => navigate("/schedule-call")}
                    >
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center bg-gradient-secondary rounded-2xl p-6 sm:p-8 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Transform Your Future?</h3>
          <p className="text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Join thousands of successful students who found their perfect college and career path with Campus Career Connect. 
            Your journey to success starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-white/10 border-grey/30 text-white hover:bg-white/20 flex-1 sm:flex-none" 
              onClick={() => navigate("/schedule-call")}
            >
              Start Free Consultation
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-white/10 border-grey/30 text-white hover:bg-white/20 flex-1 sm:flex-none"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;