import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="bg-[#121212] text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-[#121212] to-[#121212]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We simplify the process of finding a lender by offering a single, secure point of entry to a wide network of financial providers.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="mb-24">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#121212]">How Our Matching Service Works</h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn direction="up" delay={100}>
                <div className="relative h-full">
                  <div className="absolute top-8 left-12 w-[calc(100%-3rem)] h-0.5 bg-gray-200 -z-10 hidden md:block"></div>
                  <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow h-full relative">
                    <div className="bg-primary text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 shadow-md">1</div>
                    <h3 className="text-2xl font-bold mb-4 text-[#121212]">Submit Information</h3>
                    <p className="text-gray-600 leading-relaxed">You complete our secure online form, providing the basic details lenders need to evaluate your request.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={200}>
                <div className="relative h-full">
                  <div className="absolute top-8 left-12 w-[calc(100%-3rem)] h-0.5 bg-gray-200 -z-10 hidden md:block"></div>
                  <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow h-full relative">
                    <div className="bg-gray-100 text-gray-500 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl mb-8">2</div>
                    <h3 className="text-2xl font-bold mb-4 text-[#121212]">Network Search</h3>
                    <p className="text-gray-600 leading-relaxed">We instantly route your details through our network of licensed lenders using proprietary technology.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={300}>
                <div className="h-full">
                  <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow h-full relative">
                    <div className="bg-gray-100 text-gray-500 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl mb-8">3</div>
                    <h3 className="text-2xl font-bold mb-4 text-[#121212]">Connect</h3>
                    <p className="text-gray-600 leading-relaxed">If a match is found, you are redirected to the lender's website where you can review their specific terms and decide if you want to accept the offer.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="mb-24">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#121212] text-center">Types of Financial Products in Our Network</h2>
              <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
                The independent lenders in our network offer various products. When you are connected with a lender, they will provide details about the specific product they are offering you.
              </p>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn direction="up" delay={100}>
                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 transition-colors">
                  <h3 className="text-2xl font-bold mb-6 text-[#121212]">Short-Term Loans</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    Often used for immediate, unexpected expenses like car repairs or medical bills. These are typically smaller amounts intended to be repaid quickly, often on your next payday.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700 font-medium"><CheckCircle2 className="text-primary h-6 w-6 mr-3" /> Typically under $1,000</li>
                    <li className="flex items-center text-gray-700 font-medium"><CheckCircle2 className="text-primary h-6 w-6 mr-3" /> Short repayment window (2-4 weeks)</li>
                    <li className="flex items-center text-gray-700 font-medium"><CheckCircle2 className="text-primary h-6 w-6 mr-3" /> Fast funding (often next business day)</li>
                  </ul>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={200}>
                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 transition-colors">
                  <h3 className="text-2xl font-bold mb-6 text-[#121212]">Installment Loans</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    Provides a lump sum that you repay over a longer period through scheduled, regular payments. Useful for larger expenses that you prefer to pay off gradually.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700 font-medium"><CheckCircle2 className="text-primary h-6 w-6 mr-3" /> Larger potential amounts</li>
                    <li className="flex items-center text-gray-700 font-medium"><CheckCircle2 className="text-primary h-6 w-6 mr-3" /> Extended repayment terms (months to years)</li>
                    <li className="flex items-center text-gray-700 font-medium"><CheckCircle2 className="text-primary h-6 w-6 mr-3" /> Predictable payment schedule</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn direction="up">
            <div className="bg-primary/5 border border-primary/20 p-12 rounded-[3rem] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-6 text-[#121212]">Ready to see if we can connect you?</h3>
                <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Our service is free to use, and there is no obligation to accept any loan offer presented to you by a lender.
                </p>
                <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-lg font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-[#A30D25]">
                  Get Started Now <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </div>
  );
}
