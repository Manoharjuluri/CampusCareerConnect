import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
      const res = await fetch("https://f04or36zm8.execute-api.ca-central-1.amazonaws.com/career/careerContacts", {
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
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Contact our expert counselors for personalized guidance 
            and support in choosing the right college and career path.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-card h-full">
              <CardHeader>
                <CardTitle className="text-darkgrey">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm">
                      CCC Campus, Malakpet, Hyderabad<br />
                 </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 8074313417</p>
                    <p className="text-muted-foreground text-sm">+91 9390163762</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">info@campuscareerconnect.com</p>
                    <p className="text-muted-foreground text-sm">support@campuscareerconnect.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Office Hours</h4>
                    <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 10:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                  </div>
                </div>

                <div className="pt-4">
                  {/* <h4 className="font-semibold text-primary mb-3">Follow Us</h4> */}
                  {/* <div className="flex space-x-4">
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Instagram</Button>
                    <Button variant="outline" size="sm">LinkedIn</Button>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-secondary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="mt-1" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="mt-1" value={form.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="mt-1" value={form.email} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phoneNumber" type="tel" placeholder="Enter your phone number" className="mt-1" value={form.phoneNumber} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="grade">Current Status *</Label>
                      <Select value={form.currentStatus} onValueChange={(val) => handleSelect("currentStatus", val)}>
                        <SelectTrigger className="mt-1">
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
                      <Label htmlFor="interest">Area of Interest *</Label>
                      <Select value={form.areaOfInterest} onValueChange={(val) => handleSelect("areaOfInterest", val)}>
                        <SelectTrigger className="mt-1">
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

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your career goals, questions, or how we can help you..."
                      className="mt-1"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="rounded" checked={form.consent} onChange={handleChange} />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to receive communications from Campus Career Connect and understand that I can unsubscribe at any time.
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" variant="cta" size="lg" className="flex-1" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  {success && <div className="text-green-600 text-center font-medium">{success}</div>}
                  {error && <div className="text-red-600 text-center font-medium">{error}</div>}
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
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
        <div className="mt-16 text-center bg-gradient-secondary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who found their perfect college and career path with Campus Career Connect. 
            Your journey to success starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white/10 border-grey/30 text-white hover:bg-white/20" onClick={() => navigate("/schedule-call")}>
              Start Free Consultation
            </Button>
            <Button variant="hero" size="lg" className="bg-white/10 border-grey/30 text-white hover:bg-white/20">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;