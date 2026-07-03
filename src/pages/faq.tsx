import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";

export default function Faq() {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="bg-gray-50 py-20 lg:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121212] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Clear, honest answers about how our lead-generation service works.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FadeIn direction="up" delay={200}>
            <Accordion type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-2xl px-8 bg-white shadow-sm data-[state=open]:border-primary data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left font-bold text-xl hover:text-primary py-6 hover:no-underline">What exactly does Speedy Cash Loan do?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  Speedy Cash Loan is a free online lead-generation service. We do not act as a lender or make credit decisions. When you submit your information on our site, we attempt to connect you with one of the independent lenders in our network who may be able to offer you a loan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-200 rounded-2xl px-8 bg-white shadow-sm data-[state=open]:border-primary data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left font-bold text-xl hover:text-primary py-6 hover:no-underline">How much does your service cost?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  Using our website is completely free. We do not charge you any fees to submit a request. We are compensated by the lenders in our network for connecting you with them. Any fees, interest rates, or costs associated with a loan will be determined entirely by the lender and disclosed to you prior to accepting the loan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-200 rounded-2xl px-8 bg-white shadow-sm data-[state=open]:border-primary data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left font-bold text-xl hover:text-primary py-6 hover:no-underline">Are there any guarantees I will get a loan?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  No. We cannot guarantee that you will be matched with a lender, nor can we guarantee that you will be approved for a loan. Approval is determined solely by the independent lenders based on their own criteria.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-2xl px-8 bg-white shadow-sm data-[state=open]:border-primary data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left font-bold text-xl hover:text-primary py-6 hover:no-underline">Will using this site affect my credit score?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  Submitting your information on our site does not result in a hard credit pull from us. However, the lenders in our network may perform credit checks with national bureaus (like Experian, Equifax, TransUnion) or alternative providers to determine your eligibility. These inquiries by lenders may impact your credit score.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-2xl px-8 bg-white shadow-sm data-[state=open]:border-primary data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left font-bold text-xl hover:text-primary py-6 hover:no-underline">What information do I need to provide?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  Generally, you will need to provide your basic personal information (name, address, contact details), employment and income information, and banking details so a lender can deposit funds if approved.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-2xl px-8 bg-white shadow-sm data-[state=open]:border-primary data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left font-bold text-xl hover:text-primary py-6 hover:no-underline">How quickly will I receive the funds?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  If you are matched with a lender and accept their loan offer, funds are typically deposited into your bank account as soon as the next business day. Exact funding times vary by lender and your bank's processing times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-gray-200 rounded-2xl px-8 bg-white shadow-sm data-[state=open]:border-primary data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left font-bold text-xl hover:text-primary py-6 hover:no-underline">Am I obligated to accept a loan offer?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  Absolutely not. If you are connected with a lender, you will be presented with their loan terms. You have the right to review these terms carefully and decline the offer if it doesn't meet your needs. You are under no obligation to proceed until you officially sign the agreement with the lender.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>

          <FadeIn direction="up" delay={400}>
            <div className="mt-20 text-center bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-[#121212]">Still have questions?</h3>
              <p className="text-gray-600 text-lg mb-8">If you didn't find the answer you were looking for, please reach out to us.</p>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-xl bg-white border-2 border-gray-200 px-8 text-lg font-bold text-[#121212] shadow-sm transition-all hover:border-primary hover:text-primary">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
