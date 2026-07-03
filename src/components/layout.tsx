import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/logo.jpg";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Top Bar */}
      <div className="bg-[#121212] text-white/80 py-2 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs font-medium">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-3 w-3 text-primary" /> 1-877-611-0007
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-3 w-3 text-primary" /> ericmatthewsloan4u@gmail.com
              </span>
            </div>
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-primary" /> 3605 W Waters Ave #1050, Tampa, FL 33614
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-all shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <img src={logoImage} alt="Speedy Cash Loan" width={48} height={48} className="h-12 w-12 object-contain" loading="eager" />
                <span className="text-xl font-extrabold tracking-tight hidden sm:inline-block text-[#121212]">
                  Speedy Cash Loan
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4">
                <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-[#A30D25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Get Started
                </Link>
              </div>
            </nav>
            <button
              className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white absolute w-full shadow-lg">
            <div className="space-y-1 px-4 pb-6 pt-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-4 text-base font-semibold rounded-md ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-gray-50 hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t my-4 pt-4">
                <div className="text-sm text-muted-foreground mb-4 space-y-2 px-3">
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> 1-877-611-0007</div>
                  <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> ericmatthewsloan4u@gmail.com</div>
                </div>
                <Link
                  href="/contact"
                  className="block px-3 py-4 text-base font-bold bg-primary text-primary-foreground rounded-md text-center shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 bg-white">{children}</main>

      <footer className="bg-[#121212] text-white pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <img src={logoImage} alt="Speedy Cash Loan" width={48} height={48} className="h-12 w-12 object-contain bg-white rounded-md p-1" loading="lazy" />
                <span className="text-xl font-bold tracking-tight">Speedy Cash Loan</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                We are a lead-generation service that connects individuals with a network of approved, independent lenders. Secure, transparent, and professional.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">About Us</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Our Services</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">FAQ</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary shrink-0" /> 1-877-611-0007</li>
                <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-primary shrink-0" /> ericmatthewsloan4u@gmail.com</li>
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary shrink-0" /> 3605 W Waters Ave #1050,<br/>Tampa, FL 33614</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 text-xs text-gray-400 space-y-6 leading-relaxed">
            <p className="font-bold text-white text-sm">
              Speedy Cash Loan is a lead generation company and not a direct lender.
            </p>
            <p>
              <strong className="text-white">Important Disclosure:</strong> Speedy Cash Loan is a lead generator, not a direct lender, and does not make credit decisions. We do not guarantee that you will be connected with a lender or that you will receive a loan offer. The operator of this website does not charge any fees for its service. By submitting your information on this website, you are providing express written consent for us to share your information with our network of lenders and other third-party partners.
            </p>
            <p>
              Lenders may perform a credit check to determine your creditworthiness. We are not responsible for the actions of any lender. Loan approval, terms, and conditions are determined solely by the lender and may vary based on your state of residence and other factors.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5">
              <p>&copy; {new Date().getFullYear()} Speedy Cash Loan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
