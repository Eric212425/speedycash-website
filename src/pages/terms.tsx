import { FadeIn } from "@/components/ui/fade-in";

export default function Terms() {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="bg-[#121212] text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </FadeIn>
        </div>
      </div>

      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn direction="up" delay={200}>
            <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-[#121212] prose-p:text-gray-600 prose-p:leading-relaxed">
              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl mb-12 not-prose">
                <p className="text-lg font-bold text-[#121212] mb-2">Important Disclosure</p>
                <p className="text-gray-600 m-0 leading-relaxed">Speedy Cash Loan is a lead generator, not a lender. We do not make loans or credit decisions, nor do we broker loans. We connect consumers with independent, third-party lenders.</p>
              </div>

              <h2>1. Agreement to Terms</h2>
              <p>By accessing or using the Speedy Cash Loan website (the "Site") and our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these Terms, please do not use the Site.</p>

              <h2>2. Nature of Service</h2>
              <p>Speedy Cash Loan provides an online lead-generation service that connects consumers seeking loans with independent, third-party lenders in our network. We are not a direct lender, broker, or agent of any lender. We do not endorse or recommend any specific lender or loan product.</p>
              <p>We do not charge you a fee to use our service. We receive compensation from the lenders in our network for providing them with leads.</p>

              <h2>3. No Guarantee of Approval or Rates</h2>
              <p>Completing a request on our Site does not guarantee that you will be connected with a lender, nor does it guarantee loan approval. We do not make any credit decisions. The lender you are connected with is solely responsible for determining your eligibility, approval, rates, terms, and conditions.</p>

              <h2>4. Consent to Share Information</h2>
              <p>By submitting your information on the Site, you provide express written consent to share your personal and financial information with our network of lenders and third-party partners so they can process your request and potentially offer you a loan.</p>

              <h2>5. Credit Checks</h2>
              <p>You acknowledge that the lenders in our network may obtain your credit report from national credit bureaus (such as Equifax, Experian, TransUnion) or alternative providers to evaluate your creditworthiness. This may result in an inquiry on your credit report, which could impact your credit score.</p>

              <h2>6. Independent Lender Terms</h2>
              <p>If you are connected with a lender, you will be redirected to their website or contacted by them directly. Any loan agreement you enter into will be solely between you and the lender. Speedy Cash Loan is not a party to any loan agreement. You should review all terms, fees, and conditions provided by the lender carefully before accepting any offer.</p>

              <h2>7. Eligibility</h2>
              <p>To use our services, you must be a U.S. resident, at least 18 years old, and have a valid bank account, valid email address, and regular income. Our services may not be available in all states.</p>

              <h2>8. Electronic Communications</h2>
              <p>By using the Site, you consent to receive communications from us and our network lenders electronically, including via email, SMS/text message, and phone calls. Standard message and data rates may apply.</p>

              <h2>9. Disclaimer of Warranties</h2>
              <p>The Site and services are provided "as is" and "as available" without any warranties of any kind. Speedy Cash Loan disclaims all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose.</p>

              <h2>10. Limitation of Liability</h2>
              <p>Speedy Cash Loan shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Site or our services, or any loan you obtain from a lender in our network.</p>

              <h2>11. Contact Information</h2>
              <p>If you have any questions regarding these Terms, please contact us at:</p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 not-prose mt-8">
                <p className="font-bold text-[#121212] text-lg mb-2">Speedy Cash Loan</p>
                <p className="text-gray-600 mb-1">3605 W Waters Ave #1050<br />Tampa, FL 33614</p>
                <p className="text-gray-600 mb-1"><span className="font-medium text-[#121212]">Email:</span> ericmatthewsloan4u@gmail.com</p>
                <p className="text-gray-600"><span className="font-medium text-[#121212]">Phone:</span> 1-877-611-0007</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
