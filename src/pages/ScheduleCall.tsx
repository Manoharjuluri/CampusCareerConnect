import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  countryCode: z.string().default("+91"),
  mobile: z.string()
    .length(10, "Mobile number must be exactly 10 digits")
    .regex(/^[6-9][0-9]{9}$/, "Mobile number must start with 6, 7, 8, or 9 and be 10 digits"),
  qualification: z.string().min(1, "Please select your highest qualification"),
  state: z.string().min(1, "Please select your native state"),
  receiveUpdates: z.boolean().default(false),
  agreeTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

type FormData = z.infer<typeof formSchema>;

const ScheduleCall = () => {
  const [otpSent, setOtpSent] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: "+91",
      receiveUpdates: false,
      agreeTerms: false,
    },
  });

  const handleGetOTP = () => {
    const mobile = form.getValues("mobile");
    if (mobile && mobile.length >= 10) {
      setOtpSent(true);
      toast({
        title: "OTP Sent",
        description: "OTP has been sent to your mobile number",
      });
    } else {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid mobile number",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        formType: "expertForm",
        name: data.name,
        phoneNumber: data.mobile,
        collegeName: data.qualification,
        nativeVillage: data.state,
        receiveUpdates: data.receiveUpdates,
      };
      const res = await fetch("https://f04or36zm8.execute-api.ca-central-1.amazonaws.com/career/careerContacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Failed to submit. Please try again.");
      toast({
        title: "Form Submitted Successfully",
        description: "Our career expert will contact you soon!",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: err.message || "Something went wrong.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-primary hover:text-primary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Form */}
          <div className="order-2 lg:order-1">
            <Card className="border-0 shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-grey-700 mb-4">
                  Talk to Our Career Expert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Phone Number */}
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" maxLength={10} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Mobile Number */}
                    {/* <div>
                      <Label>Mobile Number</Label>
                      <div className="flex gap-2 mt-1">
                        <FormField
                          control={form.control}
                          name="countryCode"
                          render={({ field }) => (
                            <Select value={field.value} onValueChange={field.onChange}>
                              <SelectTrigger className="w-20">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="+91">🇮🇳 +91</SelectItem>
                                <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                <SelectItem value="+44">🇬🇧 +44</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="mobile"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input 
                                  placeholder="Enter mobile number" 
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={handleGetOTP}
                          className="whitespace-nowrap"
                        >
                          {otpSent ? "Resend OTP" : "GET OTP"}
                        </Button>
                      </div> */}
                    
                    {/* Highest Qualification */}
                    <FormField
                      control={form.control}
                      name="qualification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your college name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Native State */}
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Native Village</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your Village name" {...field} />
                          </FormControl>
                           
                        
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Receive Updates */}
                    <FormField
                      control={form.control}
                      name="receiveUpdates"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Receive Updates</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    {/* Terms and Conditions */}
                    <FormField
                      control={form.control}
                      name="agreeTerms"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="text-sm text-muted-foreground leading-relaxed">
                              By proceeding further, I agree to the{" "}
                              <Link to="/terms" className="text-accent hover:underline">
                                Terms & Conditions
                              </Link>{" "}
                              and{" "}
                              <Link to="/privacy" className="text-accent hover:underline">
                                Privacy Policy
                              </Link>{" "}
                              of Campus Career Connect
                            </div>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Submit
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Illustration */}
          <div className="order-1 lg:order-2 text-center">
            <div className="bg-gradient-to-b from-secondary to-secondary rounded-2xl p-8 text-white">
              <div className="mb-6">
                <Phone className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Expert Career Guidance</h3>
                <p className="text-white/90 leading-relaxed">
                  Get personalized career counseling from our expert advisors. 
                  We'll help you choose the right college and career path based on 
                  your interests, skills, and goals.
                </p>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">One-on-one counseling session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">College and course recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Career roadmap planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Admission guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;