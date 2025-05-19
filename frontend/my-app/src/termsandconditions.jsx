"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Menu, X, Scale, ArrowRight, ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
export default function AfLynkTerms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLogoIndex, setActiveLogoIndex] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const logos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20%2B%20White-%20Aflynk%20Media-yCS0q4ibMChBmTmymtan4YTRn5yabb.png", // Black + White
 "footer.png",
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange%20Logo-%20Afflynk%20Media-kIeTpSt0INpu4Y0dbuSmue4FXUDsu4.png", // Orange
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % logos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
       <Helmet>
                          <title> Get in Touch | AfLynk Media – Global Affiliate Marketing Network
            </title>
                          <meta
                            name=" Terms of Use | AfLynk Media
"
                            content="  Read our terms and conditions for using the AfLynk Media platform. Understand your rights, obligations, and responsibilities as an advertiser, publisher, or site visitor.
.
      
                  "
                          />
                        </Helmet>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Mobile Logo (only visible on mobile) */}
          <div className="sm:w-16 md:w-20 flex items-center">
            <img
              src={logos[1]}
              alt="AfLynk Media Logo"
          className="h-12 md:h-14"
            />
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </Link>
            <a
              href="#advertisers"
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Advertisers
            </a>
            <Link
              to="/publisher"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Publisher
            </Link>
            
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              to="/aboutus"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
                About Us
            </Link>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:flex flex-shrink-0">
            <motion.a
              href="#get-started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium flex items-center"
            >
              Get Started <ChevronRight className="ml-1 h-4 w-4 text-white" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
         {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <a
                  href="/advertiser"
                  className="text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Advertisers
                </a>
                <Link to="/publisher" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  Publisher
                </Link>
                {/* <a
                  href="#case-studies"
                  className="text-gray-700 hover:text-purple-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </a> */}
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/aboutus"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#get-started"
                  className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Terms & Conditions
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-4">
              Effective Date: 24th May 2025
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center items-center space-x-2 text-blue-600">
              <Scale className="h-5 w-5" />
              <span className="text-sm font-medium">Please read these terms carefully</span>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Main Content - Clean Version */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <section id="introduction" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Introduction
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  Welcome to AfLynk Media LLP, a venture by 93Communications. Hereby referred to as "Aflynk Media".
                  These Terms and Conditions ("Terms") govern your use of our website, platform, and affiliate services.
                  By using our services, you agree to comply with these Terms.
                </motion.p>
              </section>

              <section id="definitions" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Definitions
                </motion.h2>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>"We," "our," or "AfLynk" refers to AfLynk Media.</li>
                  <li>"User" means any visitor, advertiser, publisher, or partner using our services.</li>
                  <li>
                    "Services" refers to affiliate tracking, campaign management, reporting tools, and platform
                    utilities.
                  </li>
                </motion.ul>
              </section>

              <section id="eligibility" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Eligibility
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  To use AfLynk, you must be at least 18 years old and legally able to enter into contracts. You
                  represent that all registration information you submit is truthful and accurate.
                </motion.p>
              </section>

              <section id="account-registration" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Account Registration
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  You agree to provide complete and accurate information when creating an account. You are responsible
                  for maintaining the confidentiality of your account credentials.
                </motion.p>
              </section>

              <section id="publisher-obligations" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Publisher Obligations
                </motion.h2>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Promote offers through approved and ethical channels only.</li>
                  <li>No incentivized, spam, or misleading traffic is permitted.</li>
                  <li>Traffic must comply with local advertising laws and industry standards.</li>
                  <li>Violations may result in termination and forfeiture of earnings.</li>
                </motion.ul>
              </section>

              <section id="advertiser-obligations" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Advertiser Obligations
                </motion.h2>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Offers must be valid, legal, and accurately described.</li>
                  <li>Clear creatives, targeting, and T&Cs must be provided.</li>
                  <li>Advertisers are responsible for verifying affiliate placements and performance.</li>
                  <li>AfLynk is not liable for third-party actions or user-generated content.</li>
                </motion.ul>
              </section>

              <section id="payment-terms" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Payment Terms
                </motion.h2>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Publishers are paid based on validated conversions and approved invoices.</li>
                  <li>Payout frequency, threshold, and method are stated in your account.</li>
                  <li>Fraudulent activity may lead to delayed or denied payments.</li>
                </motion.ul>
              </section>

              <section id="intellectual-property" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Intellectual Property
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  All content on our platform (logos, content, platform UI, tech) is owned by AfLynk or its licensors.
                  Unauthorized use is prohibited.
                </motion.p>
              </section>

              <section id="data-usage" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Data Usage
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  We collect data in accordance with our Privacy Policy. Users agree not to misuse any campaign data or
                  platform analytics.
                </motion.p>
              </section>

              <section id="prohibited-activities" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Prohibited Activities
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  Users may not:
                </motion.p>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Use bots or automated traffic</li>
                  <li>Misrepresent campaigns or brand partnerships</li>
                  <li>Reverse engineer the platform</li>
                  <li>Circumvent tracking or payment systems</li>
                  <li>Violate local or international laws</li>
                </motion.ul>
              </section>

              <section id="termination" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Termination
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  We reserve the right to suspend or terminate your account at our discretion, with or without cause.
                  Outstanding balances may be withheld if fraud or breach is detected.
                </motion.p>
              </section>

              <section id="disclaimers" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Disclaimers
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  AfLynk provides services "as-is." We do not guarantee specific earnings, traffic volume, or
                  advertiser/publisher performance.
                </motion.p>
              </section>

              <section id="limitation-of-liability" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Limitation of Liability
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  AfLynk is not liable for indirect, incidental, or consequential damages related to your use of our
                  platform. Maximum liability shall not exceed the amount paid to you in the last 60 days.
                </motion.p>
              </section>

              <section id="modifications" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Modifications
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  We may update these Terms from time to time. Your continued use of the platform constitutes your
                  acceptance of the revised Terms.
                </motion.p>
              </section>

              <section id="governing-law" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Governing Law
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive
                  jurisdiction of the courts of New Delhi.
                </motion.p>
              </section>

              <section id="contact" className="mb-6">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Contact Us
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  For questions or concerns, contact:
                </motion.p>
                <motion.div variants={fadeInUp} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <p className="font-medium text-gray-900 mb-2">AfLynk Media</p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Email:</span> contact@aflynk.com
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Website:</span> www.aflynk.com
                  </p>
                </motion.div>
              </section>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Have Questions About Our Terms?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team is here to help you understand your rights and obligations when using the AfLynk platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg flex items-center justify-center"
              >
                Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="/privacy-policy"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center"
              >
                View Privacy Policy <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
     <footer className="bg-gray-900 text-white py-12 w-full">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <img
          src='footer.png'
          alt="AfLynk Media Logo"
          className="h-22 w-32 mb-4"
        />
        <p className="text-gray-400 text-sm">
AfLynk Media LLP        </p>
        <p className="text-gray-400 text-sm">Plot No 20, Block H-1/A, Sec-63, Noida</p>
        <p className="text-gray-400 text-sm">contact@aflynk.com</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-gray-400">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#advertisers"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-gray-400">Advertiser</span>
            </a>
          </li>
          <li>
            <a
              href="#publishers"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-gray-400">Publisher</span>
            </a>
          </li>
         
          <li>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-gray-400">Contact Us</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-gray-400">About Us</span>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Legal</h4>
        <ul className="space-y-2">
          <li>
            <Link to ='policy' className="text-gray-400 hover:text-white transition-colors">
              <span className="text-gray-400">Privacy and Policy</span> 
            </Link>
          </li>
          <li>
           <Link to ='/tandc' className="text-gray-400 hover:text-white transition-colors">
              <span className="text-gray-400">Terms and Conditions</span>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            contact@aflynk.com
          </li>
          <li className="flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
             +91-7988540592
          </li>
           <li className="flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91-85058 465555
                </li>
          <li className="flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            www.aflynk.com
          </li>
        </ul>
      </div>
    </div>
<div className="relative border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; 2025 AfLynk Media LLP
              </p>

              <p className="text-gray-400 text-sm text-center order-3 md:order-none">
                Made with ❤️ in India
              </p>

              <p className="text-gray-400 text-sm text-center md:text-right">
                All rights reserved.
              </p>
            </div>
          </div>
  </div>
</footer>

      {/* Back to Top Button - Appears when scrolling down */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-3 rounded-full shadow-lg z-50 hover:shadow-xl transition-shadow"
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
