"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Menu,
  X,
  Mail,
  Phone,
  User,
  Building,
  MessageSquare,
  Send,
  Clock,
  Globe,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom"
export default function AfLynkContact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLogoIndex, setActiveLogoIndex] = useState(0)
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    userType: "",
    message: "",
  })

  const logos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20%2B%20White-%20Aflynk%20Media-yCS0q4ibMChBmTmymtan4YTRn5yabb.png", // Black + White
    "mainlogo.png", // Main Logo
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange%20Logo-%20Afflynk%20Media-kIeTpSt0INpu4Y0dbuSmue4FXUDsu4.png", // Orange
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % logos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Show success message or redirect
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    // Reset form
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      userType: "",
      message: "",
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
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
      <Link to ='/aboutus' className="text-gray-700 hover:text-blue-600 transition-colors font-medium"> About Us</Link>
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
          {["Home", "Publishers", "Advertisers", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={item === "Home" ? "/" : item === "Publishers" ? "/publisher-page" : "#"}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center"
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
              Let's Build Something Profitable Together
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-8">
              Whether you're a high-performing publisher or a results-driven advertiser, our team is here to help you
              accelerate your success. Reach out—we'll respond quickly and effectively.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center w-full sm:w-auto"
              >
                <Mail className="mr-2 h-5 w-5" /> Talk to Our Team
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" /> Request a Callback
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
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
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8 text-center text-gray-900">
              Why Contact AfLynk?
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-gray-700 space-y-4 max-w-4xl mx-auto">
              <p>
                At AfLynk Media, we understand that in performance marketing, every second—and every conversion—counts.
                Whether you're an advertiser looking to tap into a premium pool of global affiliates or a publisher
                searching for high-converting offers and reliable payouts, we're here to ensure your experience is
                seamless, transparent, and growth-focused.
              </p>
              <p>
                Our dedicated account managers are available across multiple time zones to assist with onboarding,
                technical integration, campaign strategies, payouts, and everything in between. We don't just respond to
                queries—we co-build growth journeys.
              </p>
              <p>
                With roots in India and branches across key global markets, we bridge the gap between local expertise
                and international scale. You'll never feel out of reach or left in the dark.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">
                Here's what you can expect when you contact us:
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">Lightning-fast responses (usually within 24 hours)</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">Deep domain expertise across multiple industries</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">Guidance from experts who've built affiliate empires</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-10 text-center text-gray-700">
              Whether you have a quick question or a full-scale project in mind, we're here to listen—and deliver.
            </motion.p>
          </motion.section>

          {/* Contact Form & Info Section */}
          <motion.section
            id="contact-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Form */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Start the Conversation</h2>
              <p className="text-gray-600 mb-6">
                Let us know who you are and how we can help. We'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">
                    Are You?
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="publisher">Publisher</option>
                    <option value="advertiser">Advertiser</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us what you're looking for..."
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium text-lg flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">Contact Channels</h2>
                <p className="text-gray-700 mb-8">
                  Choose the most convenient way to reach us. Our team is ready to assist you with any questions.
                </p>

                <div className="space-y-8 flex-grow">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Email Us</h3>
                        <a href="mailto:contact@aflynk.com" className="text-blue-600 hover:underline font-medium">
                          contact@aflynk.com
                        </a>
                        <p className="text-gray-600 mt-1">For inquiries, onboarding, and support</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Call Us</h3>
                        <a href="tel:+918505846555" className="text-blue-600 hover:underline font-medium">
                          +91-85058 46555
                        </a>
                        <p className="text-gray-600 mt-1">India</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Response Time</h3>
                        <p className="text-gray-600">
                          We typically respond within 24 hours during business days. For urgent matters, please call us
                          directly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} className="mt-8 bg-gradient-to-r from-teal-500 to-blue-500 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-semibold mb-2">Ready to scale your business?</h3>
                  <p className="mb-4">
                    Our team of experts is ready to help you achieve your performance marketing goals.
                  </p>
                  <a href="#contact-form" className="inline-flex items-center text-white font-medium hover:underline">
                    Contact us now <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
       <footer className="bg-gray-900 text-white py-12 w-full">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <img
          src={logos[1] || "/placeholder.svg"}
          alt="AfLynk Media Logo"
          className="h-22 w-32 mb-4"
        />
        <p className="text-gray-400 text-sm">
          AfLynk Media LLP, a 93 Communications Venture
        </p>
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
              href="#case-studies"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-gray-400">Case Studies</span>
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
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
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

    <div className="border-t border-gray-800 mt-12 pt-8">
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">
          &copy; 2025 AfLynk Media LLP
        </p>
        <p className="text-gray-400 text-sm">
          All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>


      {/* Back to Top Button */}
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.a>
    </div>
  )
}
