import { FadeIn } from "@/components/ui/fade-in";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="bg-[#121212] text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </FadeIn>
        </div>
      </div>

      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn direction="up" delay={200}>
            <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-[#121212] prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-li:marker:text-primary">
              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl mb-12 not-prose">
                <p className="text-lg font-bold text-[#121212] mb-2">Important Disclosure</p>
                <p className="text-gray-600 m-0 leading-relaxed">Speedy Cash Loan is a lead-generation service, not a direct lender. By using our website and services, you consent to the collection, use, and sharing of your information with our network of independent lenders and third-party partners as described in this policy.</p>
              </div>

              <h2>1. Introduction</h2>
              <p>Speedy Cash Loan ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website, and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>

              <h2>2. Information We Collect</h2>
              <p>We may collect several types of information from and about users of our Website, including:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, address, email address, telephone number, social security number, date of birth, driver's license number, employment information, income information, and bank account information.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, operating system, referring URLs, device information, and interactions with our website.</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect about you or that you provide to us to:</p>
              <ul>
                <li>Match you with potential lenders in our network based on your submitted profile.</li>
                <li>Share your information with our network of lenders and other third-party financial service providers to process your request.</li>
                <li>Communicate with you regarding your request, our services, or promotional offers.</li>
                <li>Improve our website, customer service, and overall user experience.</li>
                <li>Comply with legal and regulatory obligations.</li>
              </ul>

              <h2>4. Sharing Your Information</h2>
              <p>Because we are a lead generator, <strong>sharing your information is essential to our service</strong>. We may disclose personal information that we collect or you provide:</p>
              <ul>
                <li>To our network of independent lenders and financial service providers so they can evaluate your request and potentially offer you a loan.</li>
                <li>To third-party service providers, contractors, and other parties we use to support our business (e.g., email providers, data aggregators).</li>
                <li>To comply with any court order, law, or legal process, including responding to any government or regulatory request.</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Speedy Cash Loan, our customers, or others.</li>
              </ul>
              <p><em>Note: Once your information is shared with a lender, their use of your information will be governed by their own privacy policy.</em></p>

              <h2>5. Credit Checks</h2>
              <p>While Speedy Cash Loan does not perform hard credit checks, the lenders in our network may verify your identity and review your credit information from national databases (such as Equifax, Experian, TransUnion) or alternative providers. This may impact your credit score.</p>

              <h2>6. Security</h2>
              <p>We implement industry-standard security measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, and we cannot guarantee the absolute security of your personal information.</p>

              <h2>7. Children Under the Age of 18</h2>
              <p>Our Website is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this Website.</p>

              <h2>8. Contact Information</h2>
              <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
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
