"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Menu, X, Shield, ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"
export default function AfLynkPrivacyPolicy() {
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
    
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4 relative flex items-center justify-between">
          {/* Logo on the left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center z-10"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeLogoIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={logos[1]}
                alt="AfLynk Media Logo"
                className="h-12 md:h-14"
              />
            </AnimatePresence>
          </motion.div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="/publisher" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Publishers
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Advertisers
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Right-aligned Get Started Button */}
          <div className="hidden md:flex z-10">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium flex items-center"
            >
              Get Started <ChevronRight className="ml-1 h-4 w-4 text-white" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-10">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
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
                  href="/"
                  className="text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
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
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-4">
              Effective Date: 24th May 2025
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center items-center space-x-2 text-blue-600">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Your privacy is our priority</span>
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
                  Welcome to AfLynk Media LLP, a venture by 93Communications. Hereby referred to as "Aflynk Media". We
                  respect your privacy and are committed to protecting the personal information you share with us. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our
                  website, use our services, or interact with our platform.
                </motion.p>
              </section>

              <section id="who-we-are" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Who We Are
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  AfLynk Media is a global performance marketing and affiliate network operating across multiple
                  verticals including Gaming, Crypto, BFSI, Ecommerce, Nutra, Education, and Travel. Our domain is
                  www.aflynk.com.
                </motion.p>
              </section>

              <section id="what-information" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  What Information We Collect
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  We collect both personal and non-personal information from advertisers, publishers, and website
                  visitors, including:
                </motion.p>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Contact Information (name, email address, phone number)</li>
                  <li>Business Information (company name, vertical, campaign goals)</li>
                  <li>Technical Data (IP address, browser type, device ID)</li>
                  <li>Behavioral Data (pages visited, links clicked, conversions)</li>
                  <li>Affiliate Tracking Data (referrals, cookies, subIDs, postbacks)</li>
                </motion.ul>
              </section>

              <section id="how-we-collect" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  How We Collect Your Information
                </motion.h2>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Information you provide when filling out forms on our site</li>
                  <li>Data collected via cookies, pixels, tracking scripts, or analytics tools</li>
                  <li>Information exchanged during email, chat, or phone communications</li>
                  <li>Affiliate or advertiser data shared during onboarding or campaign setup</li>
                </motion.ul>
              </section>

              <section id="how-we-use" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  How We Use Your Information
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  We use your data to:
                </motion.p>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Onboard publishers and advertisers</li>
                  <li>Optimize affiliate campaigns and offer matching</li>
                  <li>Improve platform performance and user experience</li>
                  <li>Prevent fraud, abuse, or misuse of our services</li>
                  <li>Send updates, promotional materials, or newsletters (you may opt-out)</li>
                </motion.ul>
              </section>

              <section id="legal-basis" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Legal Basis for Processing (for EU users)
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  If you are in the EU, we process your data under one of the following lawful bases:
                </motion.p>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Your consent</li>
                  <li>Performance of a contract</li>
                  <li>Compliance with legal obligations</li>
                  <li>Legitimate business interests (e.g., fraud prevention, marketing)</li>
                </motion.ul>
              </section>

              <section id="sharing" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Sharing Your Information
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  We do not sell your personal data. We may share your information with:
                </motion.p>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Service providers (hosting, analytics, payment processors)</li>
                  <li>Affiliates or advertisers for campaign fulfillment</li>
                  <li>Legal or regulatory bodies, if required</li>
                </motion.ul>
              </section>

              <section id="cookies" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Cookies and Tracking Technologies
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  AfLynk uses cookies and pixels for tracking conversions, optimizing campaigns, and analyzing user
                  behavior. You may disable cookies via your browser settings, but this may affect functionality.
                </motion.p>
              </section>

              <section id="data-retention" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Data Retention
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  We retain your data only as long as necessary for the purposes stated above or as required by law.
                </motion.p>
              </section>

              <section id="data-security" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Data Security
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  We implement commercially reasonable safeguards (technical and organizational) to protect your
                  personal information from unauthorized access, use, or disclosure.
                </motion.p>
              </section>

              <section id="international" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  International Data Transfers
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  Your information may be processed outside your jurisdiction, including countries with different data
                  protection laws. We ensure appropriate safeguards are in place (e.g., data processing agreements).
                </motion.p>
              </section>

              <section id="your-rights" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Your Rights
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  Depending on your jurisdiction, you may have rights such as:
                </motion.p>
                <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Right to access or correct your data</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </motion.ul>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  To exercise your rights, email us at privacy@aflynk.com.
                </motion.p>
              </section>

              <section id="childrens-privacy" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Children's Privacy
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  AfLynk Media is not intended for children under 18. We do not knowingly collect personal data from
                  minors.
                </motion.p>
              </section>

              <section id="changes" className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2"
                >
                  Changes to This Policy
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. Updates will be posted on this page with a new
                  effective date.
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
                  For any privacy-related concerns or requests, contact:
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Have Questions About Your Privacy?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're committed to transparency and protecting your data. If you have any questions about our privacy
              practices, we're here to help.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg"
            >
              Contact Our Privacy Team
            </motion.a>
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
          className="h-12 md:h-14"
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
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 AfLynk Media LLP
              </p>

              {/* Invisible placeholder to keep spacing balanced */}
              <p className="text-transparent text-sm select-none">
                Center Placeholder
              </p>

              <p className="text-gray-400 text-sm">All rights reserved.</p>
            </div>

            {/* Centered absolute text */}
            <p className="absolute left-1/2 top-8 transform -translate-x-1/2 text-gray-400 text-sm">
              Made with ❤️ in India
            </p>
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
