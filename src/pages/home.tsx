import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Shield, Clock, Handshake, ChevronRight, Star, Quote, Phone, MapPin, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/fade-in";
import storefrontImage from "@/assets/storefront.jpg";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <div className="max-w-2xl">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-wide uppercase">
                  <Shield className="mr-2 h-4 w-4" /> Trusted Financial Connection
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121212] mb-6 leading-tight">
                  Find the right lender for your financial needs.
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                  Speedy Cash Loan connects you with our network of trusted lenders. A simple, secure way to review your options when you need them most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-[#A30D25] hover:-translate-y-0.5">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link href="/services" className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 text-base font-bold text-gray-900 shadow-sm transition-all hover:border-primary hover:text-primary">
                    How It Works
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] text-gray-400 font-bold overflow-hidden">
                        {/* Placeholder avatars */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                      </div>
                    ))}
                  </div>
                  <p>Trusted by thousands nationwide</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={200}>
              <div className="flex justify-center lg:justify-end">
                <div className="relative max-w-sm w-full">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2rem] blur-2xl opacity-60"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-200 bg-white">
                    <img
                      src={storefrontImage}
                      alt="Speedy Cash Loan storefront location"
                      className="w-full h-auto object-contain"
                      loading="eager"
                    />
                  </div>
                  <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-gray-100 px-5 py-3 hidden sm:flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#121212] leading-tight">Licensed & Trusted</p>
                      <p className="text-[11px] text-gray-500 leading-tight">Tampa, FL</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#121212] mb-4">Why use Speedy Cash Loan?</h2>
              <p className="text-gray-600 text-lg">We prioritize your privacy and make the process of finding a lender as straightforward as possible.</p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={100}>
              <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:scale-110 transition-transform">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#121212] mb-4">Quick Process</h3>
                <p className="text-gray-600 leading-relaxed">Our simple form takes only minutes to complete. We quickly forward your details to our network.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:scale-110 transition-transform">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#121212] mb-4">Secure & Private</h3>
                <p className="text-gray-600 leading-relaxed">We use industry-standard encryption to protect your personal information throughout the process.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:scale-110 transition-transform">
                  <Handshake className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#121212] mb-4">Wide Network</h3>
                <p className="text-gray-600 leading-relaxed">We partner with a diverse range of licensed lenders, increasing the chances of finding a match.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#121212] text-white relative overflow-hidden">
        {/* Subtle red glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-bold text-white mb-8 tracking-wide uppercase">
                  Simple Process
                </div>
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">A straightforward connection process.</h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                  Navigating financial options shouldn't be complicated. We provide a single point of entry to a wide network of reputable lenders.
                </p>
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-white">Submit your details</h4>
                      <p className="text-gray-400 leading-relaxed">Fill out our secure online form with your basic information and requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-white/10 text-white font-bold text-lg group-hover:bg-primary transition-colors duration-300">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-white">We search our network</h4>
                      <p className="text-gray-400 leading-relaxed">We instantly route your information to lenders in our network who may be able to help.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-white/10 text-white font-bold text-lg group-hover:bg-primary transition-colors duration-300">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-white">Review your options</h4>
                      <p className="text-gray-400 leading-relaxed">If a lender matches with you, you'll be redirected to their site to review the specific terms and decide if you want to proceed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={200}>
              <div className="relative bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-md shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                    <div className="h-6 w-32 bg-white/20 rounded"></div>
                    <div className="h-6 w-6 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-12 bg-white/10 rounded-xl w-full"></div>
                    <div className="h-12 bg-white/10 rounded-xl w-full"></div>
                    <div className="h-12 bg-white/10 rounded-xl w-full"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-12 bg-white/10 rounded-xl w-full"></div>
                      <div className="h-12 bg-white/10 rounded-xl w-full"></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="h-14 bg-primary rounded-xl w-full shadow-[0_0_20px_rgba(200,16,46,0.4)]"></div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="h-2 w-1/3 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services / Options */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#121212] mb-6">Financial options to consider</h2>
              <p className="text-gray-600 text-lg">Our network includes lenders that offer various types of financial products tailored to your situation.</p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction="up" delay={100}>
              <div className="group rounded-[2rem] border-2 border-gray-100 bg-white p-10 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#121212] mb-4">Short-Term Relief</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Options designed to help cover immediate, unexpected expenses until your next payday. These typically have shorter repayment periods.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" /> <span className="text-gray-700 font-medium">Quick processing</span></li>
                  <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" /> <span className="text-gray-700 font-medium">Useful for emergencies</span></li>
                  <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" /> <span className="text-gray-700 font-medium">Smaller amounts</span></li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-primary font-bold text-lg group-hover:text-[#A30D25]">
                  Learn more <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="group rounded-[2rem] border-2 border-gray-100 bg-white p-10 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#121212] mb-4">Installment Options</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Loans that provide a lump sum upfront and are repaid in scheduled, predictable payments over a set period of time.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" /> <span className="text-gray-700 font-medium">Predictable schedules</span></li>
                  <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" /> <span className="text-gray-700 font-medium">Longer repayment terms</span></li>
                  <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" /> <span className="text-gray-700 font-medium">May support larger amounts</span></li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-primary font-bold text-lg group-hover:text-[#A30D25]">
                  Learn more <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#121212] mb-6">What people say</h2>
              <p className="text-gray-600 text-lg">We've helped thousands connect with lenders when they needed it most.</p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { text: "The process was incredibly smooth. I submitted my info and was reviewing terms with a lender within minutes. Highly recommend Speedy Cash Loan.", author: "Michael R." },
              { text: "When my car broke down, I didn't know where to look. Speedy Cash Loan made it so easy to find a lender who was willing to work with me.", author: "Sarah J." },
              { text: "Professional, clear, and secure. They made it very obvious they were connecting me, not lending directly, which I appreciated.", author: "David T." }
            ].map((testimonial, i) => (
              <FadeIn key={i} direction="up" delay={100 * (i + 1)}>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 relative h-full flex flex-col">
                  <Quote className="h-8 w-8 text-primary/20 absolute top-8 left-8" />
                  <div className="mb-6 flex">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-gray-700 italic mb-8 flex-1 leading-relaxed z-10">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <span className="font-bold text-[#121212]">{testimonial.author}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#121212] mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">Clear answers to common questions about our service.</p>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={200}>
            <Accordion type="single" collapsible className="w-full bg-white rounded-3xl p-4 sm:p-8 border border-gray-200 shadow-sm">
              <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary py-6">Are you a direct lender?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  No. Speedy Cash Loan is a lead generator. We do not make loans or credit decisions. We provide a free service that attempts to connect you with independent lenders from our network.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary py-6">How much does your service cost?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  Our matching service is completely free to use. We are compensated by the lenders in our network when we connect you with them. Any fees or interest related to a loan will be determined by your lender and disclosed to you before you accept the loan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary py-6">Will this affect my credit score?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  Speedy Cash Loan does not perform hard credit checks. However, the lenders in our network may verify your identity and review your credit through national databases (like Equifax, Experian, TransUnion) or alternative providers, which may impact your credit score.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-0">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary py-6">Am I guaranteed a loan?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  No. We cannot guarantee that you will be connected with a lender or approved for a loan. Approval depends entirely on the independent lenders and their specific underwriting criteria.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center mt-12">
              <Link href="/faq" className="text-primary font-bold text-lg hover:text-[#A30D25] inline-flex items-center group">
                View all FAQs <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeIn direction="up">
            <div className="bg-[#121212] rounded-[3rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="text-white z-10 md:w-1/2">
                <h2 className="text-3xl font-extrabold mb-4">Need Assistance?</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">We're here to help answer any questions you have about our connection process.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">Call Us</p>
                      <p className="font-bold text-lg">1-877-611-0007</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">Email Us</p>
                      <p className="font-bold text-lg">ericmatthewsloan4u@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">Visit Us</p>
                      <p className="font-bold text-lg">3605 W Waters Ave #1050, Tampa, FL</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="z-10 md:w-1/2 flex justify-center md:justify-end w-full">
                 <div className="bg-white p-8 rounded-3xl w-full max-w-md text-center">
                   <h3 className="text-2xl font-bold text-[#121212] mb-4">Ready to start?</h3>
                   <p className="text-gray-600 mb-8">Take the first step to review your options today.</p>
                   <Link href="/contact" className="flex h-14 w-full items-center justify-center rounded-xl bg-primary px-8 text-lg font-bold text-white shadow-lg transition-colors hover:bg-[#A30D25]">
                     Get Started Now
                   </Link>
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={150}>
            <div className="mt-16 rounded-[2rem] overflow-hidden border border-gray-200 shadow-lg">
              <iframe
                title="Speedy Cash Loan location on Google Maps"
                src="https://www.google.com/maps?q=3605+W+Waters+Ave+%231050,+Tampa,+FL+33614&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale-[15%]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">Ready to see your options?</h2>
            <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Take the first step by filling out our secure form. We'll attempt to connect you with a lender from our network immediately.
            </p>
            <Link href="/contact" className="inline-flex h-16 items-center justify-center rounded-xl bg-white px-12 text-lg font-bold text-primary shadow-xl transition-transform hover:scale-105 hover:bg-gray-50">
              Start Your Request <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
