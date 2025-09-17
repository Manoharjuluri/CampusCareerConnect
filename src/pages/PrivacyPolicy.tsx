import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="ghost" className="text-primary-foreground mb-4 hover:underline hover:text-primary-foreground/90">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-primary-foreground/80">How we protect and use your information</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Simple Summary</h2>
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <p>
                <strong>What we do:</strong> We help you find the right college and provide career training. 
                We collect your basic information (name, email, phone) to connect you with colleges and track your progress.
              </p>
              <p className="mt-2">
                <strong>What we don't do:</strong> We never sell your personal information or spam you with unwanted messages.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your name, email address, and phone number</li>
              <li>Academic details (12th grade marks, preferred courses)</li>
              <li>Career interests and goals</li>
              <li>College preferences and location choices</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Training Data</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Course progress and completion rates</li>
              <li>Assignment scores and skill assessments</li>
              <li>Trainlance platform usage and learning patterns</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>How you use our website (pages visited, time spent)</li>
              <li>Your device type and browser information</li>
              <li>IP address for security and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">College Admissions</h3>
                <ul className="text-sm space-y-1">
                  <li>• Match you with suitable colleges</li>
                  <li>• Share your profile with partner institutions</li>
                  <li>• Track admission progress</li>
                  <li>• Provide counseling support</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Training & Development</h3>
                <ul className="text-sm space-y-1">
                  <li>• Create personalized learning paths</li>
                  <li>• Track skill development progress</li>
                  <li>• Provide relevant course recommendations</li>
                  <li>• Issue certificates and credentials</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-green-800 mb-2">✓ We DO share with:</h3>
              <ul className="text-green-700 space-y-1">
                <li>• Partner colleges (only when you apply)</li>
                <li>• Trainlance platform (for your training courses)</li>
                <li>• Our counselors and support team</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">✗ We DON'T share with:</h3>
              <ul className="text-red-700 space-y-1">
                <li>• Marketing companies or advertisers</li>
                <li>• Social media platforms</li>
                <li>• Any company that wants to buy your data</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights & Choices</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Access Your Data</h3>
                <p className="text-sm">Ask us for a copy of all information we have about you.</p>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Update Information</h3>
                <p className="text-sm">Correct or update your personal details anytime.</p>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Delete Your Account</h3>
                <p className="text-sm">Request complete removal of your data from our systems.</p>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Control Communications</h3>
                <p className="text-sm">Choose what emails and notifications you receive.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              We protect your information using industry-standard security measures:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encrypted data transmission and storage</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to authorized personnel only</li>
              <li>Secure servers and backup systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Age Requirements</h2>
            <p>
              Our services are designed for students who have completed 12th grade (typically 17+ years). 
              If you're under 18, please have a parent or guardian review this policy with you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="mb-2">
                Questions about your privacy or this policy? We're here to help:
              </p>
              <ul className="space-y-1">
                <li><strong>Email:</strong> privacy@campuscareerconnect.com</li>
                <li><strong>Phone:</strong> +91 80743 13417</li>
                <li><strong>Address:</strong> CCC Campus, Malakpet, Hyderabad</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We may update this privacy policy occasionally. When we do, we'll notify you by email 
              and update the "Last updated" date at the top of this page. Continued use of our services 
              means you accept the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;