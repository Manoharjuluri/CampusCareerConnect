import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsConditions = () => {
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
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="text-primary-foreground/80">Your agreement with Campus Career Connect</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Summary</h2>
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <p>
                <strong>What this means:</strong> By using Campus Career Connect (CCC), you agree to these terms. 
                We'll help you find colleges and provide training, but we can't guarantee admission results. 
                You're responsible for providing accurate information and following our guidelines.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <h3 className="text-xl font-medium mb-3">What We Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>College admission guidance and counseling</li>
              <li>Connections with partner private B.Tech colleges</li>
              <li>Trainlance skill development programs</li>
              <li>Career planning and mentorship</li>
              <li>Application support and documentation help</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Important Note</h3>
              <p className="text-yellow-700">
                We provide guidance and support, but admission decisions are made by individual colleges. 
                We cannot guarantee admission to any specific institution.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Accurate Information</h3>
                <ul className="text-sm space-y-1">
                  <li>• Provide truthful academic records</li>
                  <li>• Share correct contact details</li>
                  <li>• Update us about any changes</li>
                  <li>• Submit authentic documents</li>
                </ul>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Professional Conduct</h3>
                <ul className="text-sm space-y-1">
                  <li>• Respect our team and counselors</li>
                  <li>• Follow college application deadlines</li>
                  <li>• Attend scheduled sessions</li>
                  <li>• Complete training assignments</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Fees & Payments</h2>
            <h3 className="text-xl font-medium mb-3">Service Fees</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Consultation and counseling fees as agreed</li>
              <li>College application processing charges</li>
              <li>Trainlance course fees (separate billing)</li>
              <li>Additional services as requested</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Payment Terms</h3>
            <div className="bg-muted/30 p-4 rounded-lg">
              <ul className="space-y-2">
                <li>• Fees are due as per agreed payment schedule</li>
                <li>• No refunds after admission process begins</li>
                <li>• Partial refunds available before counseling starts</li>
                <li>• Training fees are handled separately by Trainlance</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">College Partner Relationships</h2>
            <p className="mb-4">
              We maintain partnerships with various private colleges to help facilitate admissions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Partner colleges may provide preferred consideration for CCC students</li>
              <li>We may receive placement fees from partner institutions</li>
              <li>Our recommendations are based on your profile and college suitability</li>
              <li>Final admission decisions rest with individual colleges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Trainlance Training Programs</h2>
            <h3 className="text-xl font-medium mb-3">Program Details</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Skill development courses from 1st year onwards</li>
              <li>Programming, soft skills, and aptitude training</li>
              <li>Industry-relevant curriculum and certifications</li>
              <li>Regular progress tracking and assessments</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Training Commitments</h3>
            <div className="bg-muted/30 p-4 rounded-lg">
              <ul className="space-y-2">
                <li>• Regular attendance required for optimal results</li>
                <li>• Complete assignments and projects on time</li>
                <li>• Participate actively in training sessions</li>
                <li>• Follow course guidelines and requirements</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations & Disclaimers</h2>
            <div className="grid gap-4">
              <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">No Admission Guarantees</h3>
                <p className="text-red-700 text-sm">
                  We cannot guarantee admission to any specific college or program. 
                  Admission depends on your qualifications, college requirements, and available seats.
                </p>
              </div>
              <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Career Outcomes</h3>
                <p className="text-orange-700 text-sm">
                  While our training improves your skills, job placement depends on market conditions, 
                  your performance, and individual effort.
                </p>
              </div>
              <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Third-Party Services</h3>
                <p className="text-blue-700 text-sm">
                  We work with partner colleges and Trainlance. Their policies and decisions 
                  are independent of CCC's control.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <h3 className="text-xl font-medium mb-3">When Services May End</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Completion of agreed services</li>
              <li>Violation of these terms</li>
              <li>Non-payment of fees</li>
              <li>Your request to discontinue services</li>
              <li>Inappropriate behavior towards staff or partners</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
            <p className="mb-4">
              If you have concerns or disputes:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact your assigned counselor first</li>
              <li>Escalate to our support team if unresolved</li>
              <li>Formal complaint to management if needed</li>
              <li>Arbitration in Noida, Uttar Pradesh for legal matters</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="mb-2">For questions about these terms:</p>
              <ul className="space-y-1">
                <li><strong>Email:</strong> legal@campuscareerconnect.com</li>
                <li><strong>Phone:</strong> +91 8074313417</li>
                <li><strong>Address:</strong> CCC Campus, Malakpet,Hyderabad</li>
                <li><strong>Business Hours:</strong> Monday-Saturday, 9 AM - 6 PM</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              We may update these terms occasionally to reflect service changes or legal requirements. 
              We'll notify you of significant changes via email or website notice. Continued use of our 
              services indicates acceptance of updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;