"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Menu, X, Mail, Phone, Clock, Globe, Users, Zap, ArrowRight, ArrowUp, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import ZohoForm from "./ZohoForm" // Import the ZohoForm component

export default function AfLynkContact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLogoIndex, setActiveLogoIndex] = useState(0)
  const [formType, setFormType] = useState("contactPage") // Default to contact page form
  const [scrolled, setScrolled] = useState(false)

  const logos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20%2B%20White-%20Aflynk%20Media-yCS0q4ibMChBmTmymtan4YTRn5yabb.png", // Black + White
     "footer.png",// Main Logo
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange%20Logo-%20Afflynk%20Media-kIeTpSt0INpu4Y0dbuSmue4FXUDsu4.png", // Orange
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % logos.length)
    }, 5000)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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

  // Form configurations
  const formConfigs = {
    basic: {
      formId: "ContactUsBasic",
      divId: "keBaXMl5lor6IwJBjnxrEOnHKNgcBY6OxVqkjCUlsJE",
      height: "1082px",
    },
    contactPage: {
      formId: "ContactUsPage",
      divId: "oQ5ljY9nYSFTxGl-0wl21OuBrlC7DC1WZb5Wd_3QIQI",
      height: "1318px",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white shadow-sm"}`}
      >
        <div className="container mx-auto px-4 py-4 relative flex items-center justify-between">
          {/* Logo on the left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center z-10"
          >
            <AnimatePresence >
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
            <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Home
            </a>
            <a href="/publisher" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Publishers
            </a>
            <a href="/advertiser" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Advertisers
            </a>
            <a href="#" className="text-teal-600 font-semibold transition-colors">
              Contact
            </a>
            <Link to="/aboutus" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              About Us
            </Link>
          </div>

          {/* Right-aligned Get Started Button */}
          <div className="hidden md:flex z-10">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full font-medium flex items-center shadow-md hover:shadow-lg transition-all"
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
                {["Home", "Publishers", "Advertisers", "Contact", "About Us"].map((item, idx) => (
                  <a
                    key={idx}
                    href={
                      item === "Home"
                        ? "/"
                        : item === "Publishers"
                          ? "/publisher"
                          : item === "Advertisers"
                            ? "/advertiser"
                            : item === "About Us"
                              ? "/aboutus"
                              : "#"
                    }
                    className={`${item === "Contact" ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"} transition-colors font-medium py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center shadow-md"
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
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-teal-50 to-cyan-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Let's Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
                Profitable
              </span>{" "}
              Together
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-8 leading-relaxed">
              Whether you're a high-performing publisher or a results-driven advertiser, our team is here to help you
              accelerate your success. Reach out—we'll respond quickly and effectively.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center w-full sm:w-auto shadow-md hover:shadow-lg transition-all"
              >
                <Mail className="mr-2 h-5 w-5" /> Talk to Our Team
              </motion.a>
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center w-full sm:w-auto hover:border-teal-300 hover:bg-gray-50 transition-all"
              >
                <Phone className="mr-2 h-5 w-5" /> Request a Callback
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-teal-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute top-20 -right-16 w-32 h-32 bg-cyan-100 rounded-full opacity-50 blur-2xl"></div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Why Contact AfLynk Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center mb-8">
              <div className="h-0.5 w-12 bg-teal-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Why Contact AfLynk?</h2>
              <div className="h-0.5 w-12 bg-teal-500 ml-4"></div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-gray-700 space-y-4 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <p className="leading-relaxed">
                At AfLynk Media, we understand that in performance marketing, every second—and every conversion—counts.
                Whether you're an advertiser looking to tap into a premium pool of global affiliates or a publisher
                searching for high-converting offers and reliable payouts, we're here to ensure your experience is
                seamless, transparent, and growth-focused.
              </p>
              <p className="leading-relaxed">
                Our dedicated account managers are available across multiple time zones to assist with onboarding,
                technical integration, campaign strategies, payouts, and everything in between. We don't just respond to
                queries—we co-build growth journeys.
              </p>
              <p className="leading-relaxed">
                With roots in India and branches across key global markets, we bridge the gap between local expertise
                and international scale. You'll never feel out of reach or left in the dark.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12">
              <h3 className="text-xl font-semibold mb-8 text-center text-gray-900">
                Here's what you can expect when you contact us:
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="bg-teal-100 p-4 rounded-full inline-flex mb-6 group-hover:bg-teal-200 transition-colors">
                    <Zap className="h-6 w-6 text-teal-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Fast Response</h4>
                  <p className="text-gray-700 leading-relaxed">Lightning-fast responses (usually within 24 hours)</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="bg-teal-100 p-4 rounded-full inline-flex mb-6 group-hover:bg-teal-200 transition-colors">
                    <Globe className="h-6 w-6 text-teal-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Domain Expertise</h4>
                  <p className="text-gray-700 leading-relaxed">Deep domain expertise across multiple industries</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="bg-teal-100 p-4 rounded-full inline-flex mb-6 group-hover:bg-teal-200 transition-colors">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Expert Guidance</h4>
                  <p className="text-gray-700 leading-relaxed">Guidance from experts who've built affiliate empires</p>
                </div>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-10 text-center text-gray-700 italic">
              Whether you have a quick question or a full-scale project in mind, we're here to listen—and deliver.
            </motion.p>
          </motion.section>

          {/* Contact Form Section with Zoho Forms */}
          <motion.section
            id="contact-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 relative ml-20"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-teal-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute bottom-10 -right-10 w-20 h-20 bg-cyan-100 rounded-full opacity-50 blur-xl"></div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center mb-8 mr-[140px]">
              <div className="h-0.5 w-12 bg-teal-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <div className="h-0.5 w-12 bg-teal-500 ml-4"></div>
            </motion.div>

            {/* Form Type Selector */}
            <motion.div variants={fadeInUp} className="mb-8 flex justify-center mr-[140px]">
              <div className="bg-white rounded-full shadow-sm p-1.5 inline-flex">
                <button
                  onClick={() => setFormType("contactPage")}
                  className={`px-6 py-2.5 rounded-full transition-all ${formType === "contactPage" ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md" : "bg-transparent text-gray-700 hover:bg-gray-100"}`}
                >
                  Full Contact Form
                </button>
               
              </div>
            </motion.div>

            {/* Zoho Form Container */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <div className="w-full max-w-4xl">
                <ZohoForm
                  formId={formConfigs[formType].formId}
                  divId={formConfigs[formType].divId}
                  height={formConfigs[formType].height}
                />
              </div>
            </motion.div>
          </motion.section>

          {/* Contact Info */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center mb-8">
              <div className="h-0.5 w-12 bg-teal-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Contact Channels</h2>
              <div className="h-0.5 w-12 bg-teal-500 ml-4"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-teal-200">
                <div className="bg-teal-100 p-4 rounded-full inline-flex mb-6">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Email Us</h3>
                <a
                  href="mailto:contact@aflynk.com"
                  className="text-teal-600 hover:text-teal-700 hover:underline font-medium inline-flex items-center"
                >
                  contact@aflynk.com <ArrowRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-gray-600 mt-3">For inquiries, onboarding, and support</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-teal-200">
                <div className="bg-teal-100 p-4 rounded-full inline-flex mb-6">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Call Us</h3>
                <a href="tel:+918505846555" className="text-teal-600 hover:underline block">
    +91-85058 465555
  </a>
  <a href=" +91-7988540592" className="text-teal-600 hover:underline block">
    +91-7988 540592
  </a>
                <p className="text-gray-600 mt-3">India</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-teal-200">
                <div className="bg-teal-100 p-4 rounded-full inline-flex mb-6">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Visit Us</h3>
                <p className="text-gray-700">Plot No 20, Block H-1/A, Sec-63, Noida</p>
                <p className="text-gray-600 mt-3">India</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-gradient-to-r from-teal-500 to-teal-600 p-8 rounded-2xl shadow-md text-white text-center"
            >
              <Clock className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Response Time</h3>
              <p className="max-w-2xl mx-auto">
                We typically respond within 24 hours during business days. For urgent matters, please call us directly.
              </p>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="footer.png" alt="AfLynk Media Logo" className="h-22 w-36 mb-4" />
              <p className="text-gray-400 text-sm">AfLynk Media LLP</p>
              <p className="text-gray-400 text-sm">Plot No 20, Block H-1/A, Sec-63, Noida</p>
              <p className="text-gray-400 text-sm">contact@aflynk.com</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Home</span>
                  </a>
                </li>
                <li>
                  <a href="/advertiser" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Advertisers</span>
                  </a>
                </li>
                <li>
                  <a href="#publishers" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Publisher</span>
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Case Studies</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Contact Us</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">About Us</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="policy" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Privacy and Policy</span>
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Terms and conditions</span>
                  </a>
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
              <p className="text-gray-400 text-sm">&copy; 2025 AfLynk Media LLP</p>

              {/* Invisible placeholder to keep spacing balanced */}
              <p className="text-transparent text-sm select-none">Center Placeholder</p>

              <p className="text-gray-400 text-sm">All rights reserved.</p>
            </div>

            {/* Centered absolute text */}
            <p className="absolute left-1/2 top-8 transform -translate-x-1/2 text-gray-400 text-sm">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 rounded-full shadow-lg z-50 hover:shadow-xl transition-all"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.a>
    </div>
  )
}
