import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="bg-[#121212] text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We are here to help. Reach out to our team with any general inquiries.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#121212]">Get in Touch</h2>
                <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                  Please note that Speedy Cash Loan is a lead generator, not a lender. We cannot answer questions about specific loan offers, terms, or account statuses. Please contact your lender directly for account-specific inquiries.
                </p>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-4 rounded-2xl mr-6 text-primary mt-1">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#121212] mb-2">Corporate Office</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">3605 W Waters Ave #1050<br />Tampa, FL 33614</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-4 rounded-2xl mr-6 text-primary mt-1">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#121212] mb-2">Phone</h3>
                      <p className="text-gray-600 text-lg">1-877-611-0007</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-4 rounded-2xl mr-6 text-primary mt-1">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#121212] mb-2">Email</h3>
                      <p className="text-gray-600 text-lg">ericmatthewsloan4u@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="left" delay={200}>
              <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-10 sm:p-12 rounded-[3rem]">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="bg-green-100 p-6 rounded-full mb-8">
                      <CheckCircle2 className="h-16 w-16 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-[#121212]">Message Sent!</h3>
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                    <Button 
                      className="h-14 px-8 text-lg font-bold bg-primary hover:bg-[#A30D25] rounded-xl"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <h3 className="text-3xl font-extrabold mb-8 text-[#121212]">Send a Message</h3>
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="h-14 bg-gray-50 border-gray-200 focus-visible:ring-primary rounded-xl text-lg px-4" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="h-14 bg-gray-50 border-gray-200 focus-visible:ring-primary rounded-xl text-lg px-4" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" className="h-14 bg-gray-50 border-gray-200 focus-visible:ring-primary rounded-xl text-lg px-4" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</Label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="How can we help you today?" 
                        className="min-h-[160px] bg-gray-50 border-gray-200 focus-visible:ring-primary rounded-xl text-lg p-4 resize-y"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-16 text-lg font-bold bg-primary hover:bg-[#A30D25] rounded-xl shadow-lg transition-transform hover:-translate-y-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
                      By submitting this form, you agree to our Privacy Policy. Please do not include sensitive financial information in this general inquiry form.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </div>
  );
}
