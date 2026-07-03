import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="bg-gray-50 py-20 lg:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121212] mb-6">
              About Speedy Cash Loan
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We are dedicated to providing a transparent, secure, and straightforward connection between consumers and reputable lenders.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn direction="up" delay={200}>
            <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-[#121212] prose-p:text-gray-600 prose-p:leading-relaxed">
              <h2>Who We Are</h2>
              <p>
                Speedy Cash Loan is a licensed lead-generation company based in Tampa, Florida. We recognize that financial emergencies happen to everyone, and finding a trustworthy lender during a stressful time can be overwhelming. We created this platform to simplify that process.
              </p>
              <p className="mb-16">
                We are not a direct lender. We do not make credit decisions, and we do not determine the rates or terms of any loan. Instead, we act as a bridge. By submitting a single inquiry through our site, your information is routed through our network of approved, independent lenders, saving you the time of applying to dozens of sites individually.
              </p>

              <h2>Our Commitment</h2>
              <div className="grid sm:grid-cols-2 gap-8 mb-16 not-prose">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#121212] mb-3">Transparency</h3>
                  <p className="text-gray-600 leading-relaxed">We are honest about our role. We are clear that we are a lead generator and do not promise guaranteed approvals or specific rates.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#121212] mb-3">Privacy</h3>
                  <p className="text-gray-600 leading-relaxed">We use advanced encryption technology to ensure your sensitive personal information is protected while you use our service.</p>
                </div>
              </div>

              <h2>Important Information</h2>
              <div className="bg-white border-l-4 border-primary p-8 shadow-lg rounded-r-2xl not-prose">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#121212] text-lg mb-2">Not a Lender</h4>
                    <p className="text-gray-600">Speedy Cash Loan is not a lender or a creditor. We do not originate loans.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121212] text-lg mb-2">No Guarantees</h4>
                    <p className="text-gray-600">Submitting your information does not guarantee that you will be connected with a lender, nor does it guarantee loan approval.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121212] text-lg mb-2">Independent Terms</h4>
                    <p className="text-gray-600">If you are connected with a lender, they will provide you with their specific terms, rates, and conditions. You are under no obligation to accept any loan offer.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
