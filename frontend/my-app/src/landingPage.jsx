"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronRight, ArrowRight, CheckCircle, Globe, BarChart, Users, Zap, Shield, DollarSign, Award, Menu, X, TrendingUp, Target, Briefcase, Star } from 'lucide-react'
import { Link } from "react-router-dom";

export default function AfLynkLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLogoIndex, setActiveLogoIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [scrollY, setScrollY] = useState(0)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const advertisersRef = useRef(null)
  const publishersRef = useRef(null)
  const caseStudiesRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const statsInView = useInView(statsRef, { once: false, amount: 0.3 })
  const advertisersInView = useInView(advertisersRef, { once: true, amount: 0.2 })
  const publishersInView = useInView(publishersRef, { once: true, amount: 0.2 })
  const caseStudiesInView = useInView(caseStudiesRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll()
  
  const logos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20%2B%20White-%20Aflynk%20Media-yCS0q4ibMChBmTmymtan4YTRn5yabb.png", // Black + White
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teal%20Logo-%20Afflynk%20Media-a5lrBAJ9HCbT5rqELeamaqi5m96xOV.png", // Teal
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
      setScrollY(window.scrollY)
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionId = section.id
        if (sectionTop < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, [sectionId]: true }))
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const advertisersFeatures = [
    { icon: <Zap className="h-6 w-6 text-teal-500" />, text: "Lightning-fast campaign launches (under 24 hrs)" },
    { icon: <CheckCircle className="h-6 w-6 text-teal-500" />, text: "Verified Publishers" },
    { icon: <Shield className="h-6 w-6 text-teal-500" />, text: "Built-in fraud prevention (AI + human moderation)" },
    { icon: <BarChart className="h-6 w-6 text-teal-500" />, text: "Transparent tracking dashboard (real-time ROI)" },
    { icon: <Users className="h-6 w-6 text-teal-500" />, text: "Dedicated performance managers" },
  ]

  const publishersFeatures = [
    { icon: <Award className="h-6 w-6 text-orange-500" />, text: "Exclusive campaigns in high-paying verticals" },
    { icon: <DollarSign className="h-6 w-6 text-orange-500" />, text: "Flexible payment options" },
    { icon: <Globe className="h-6 w-6 text-orange-500" />, text: "Global offers, local optimization" },
    { icon: <Zap className="h-6 w-6 text-orange-500" />, text: "Mobile-friendly affiliate tools & creatives" },
    { icon: <Users className="h-6 w-6 text-orange-500" />, text: "Referral bonus programs to earn more" },
  ]

  const verticals = [
    "iGaming & Casino",
    "Crypto & Web3",
    "Nutra & Supplements",
    "BFSI & Fintech",
    "E-commerce & D2C",
    "Education & EdTech",
    "Travel, Telecom, and Mobile Apps",
  ]

  const publisherTypes = [
    "Content creators",
    "Influencers & bloggers",
    "Media buyers",
    "SEO affiliates",
    "Email marketers",
    "App & tool owners",
  ]

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "20+", label: "Verticals" },
    { value: "300K+", label: "Partners Worldwide" },
    { value: "$50K+", label: "Top Publishers Monthly Earnings" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
     <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center flex-shrink-0"
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
          className="h-14 md:h-16 w-auto"
        />
      </AnimatePresence>
    </motion.div>

    {/* Center Navigation */}
    <div className="hidden md:flex flex-grow justify-center space-x-8">
      <a href="#advertisers" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
        Advertisers
      </a>
      <Link to="/publisher" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
  Publisher
</Link>
      <a href="#case-studies" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
        Case Study
      </a>
      <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
        Contact
      </a>
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
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  </div>

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
          <a href="#advertisers" className="text-gray-700 hover:text-teal-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
            Advertisers
          </a>
          <a href="#publishers" className="text-gray-700 hover:text-orange-500 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
            Publishers
          </a>
          <a href="#case-studies" className="text-gray-700 hover:text-purple-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
            Case Studies
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
            Contact
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


      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center md:text-left"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600"
              >
                Reimagine Affiliate Marketing with AfLynk
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
                From crypto to consumer tech, our global affiliate network empowers advertisers and publishers with
                smarter performance, real profits, and strategic scale — across every major vertical.
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-600 mb-10 text-lg">
                Welcome to AfLynk Media — where performance isn't a promise. It's a guarantee. Whether you're a publisher
                looking to unlock new monetization routes or an advertiser chasing ROI at scale, we connect the dots
                between data, demand, and delivery.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
                <motion.a
                  href="#get-started"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center"
                >
                  <span className="text-white">🚀 Start Scaling with AfLynk</span> <ArrowRight className="ml-2 h-5 w-5 text-white" />
                </motion.a>

                <motion.a
                  href="#publishers"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center"
                >
                  💼 Become a Publisher <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="relative hidden md:block"
            >
              <motion.img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n1ph9ng7-H6CJlUVnSWQnjdJyylnfmzbdAmQFaE.png" 
                alt="AfLynk Analytics Dashboard" 
                className="w-full h-auto object-contain z-10 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-teal-100/30 to-purple-100/30 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>

          <motion.div 
            ref={statsRef}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={fadeInUp} 
            className="mt-16 bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  custom={index}
                  className="p-4"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-xl font-medium text-gray-800">
                Are your campaigns just running? Or are they converting?
              </p>
              <p className="text-gray-600 mt-2">
                With 10+ years of experience, we are trusted by advertisers & publishers worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advertisers Section */}
      <section id="advertisers" ref={advertisersRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={advertisersInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Advertisers Who Demand More</h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-teal-600">
                You Don't Just Want Clicks. You Want Customers. We Deliver Them.
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInLeft} className="relative">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-100 relative z-10">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">
                    You're tired of spending big for traffic that doesn't convert. Tired of vanity metrics, fraudulent
                    traffic, slow campaign launches, and limited reach. At AfLynk, we know what you want — measurable
                    ROI, fraud-free scale, and precision targeting.
                  </h4>
                  <p className="text-gray-600 mb-6">
                    We don't just run campaigns. We architect performance. Whether you're launching a new app, promoting
                    a gaming brand, or scaling a D2C product, AfLynk brings you hyper-targeted distribution across:
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {verticals.map((vertical, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={advertisersInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center"
                      >
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{vertical}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <p className="text-gray-600 mb-6">
                    With customizable models (CPA, CPL, CPS, CPI, CPT) and granular geo-targeting across India, MENA,
                    SEA, LATAM, EU & the US, we help you break into new markets, safely and profitably.
                  </p>
                </div>
                
                <motion.img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zanag960-Zr7tEHCBdkUO7Lx1v5wisnGxpq9dFy.png" 
                  alt="Strategic chess pieces" 
                  className="absolute -bottom-16 -right-16 w-32 h-32 md:w-40 md:h-40 object-contain z-0 opacity-80"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={advertisersInView ? { opacity: 0.8, scale: 1, rotate: 10 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>

              <motion.div variants={slideInRight}>
                <h4 className="text-xl font-semibold mb-6 text-teal-600">Features:</h4>
                <ul className="space-y-4 mb-8">
                  {advertisersFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={advertisersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm"
                    >
                      <div className="mr-4 mt-1">{feature.icon}</div>
                      <p className="text-gray-700">{feature.text}</p>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="text-center">
                  <a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg"
                  >
                   <span className="text-white">🚀 I'm an Advertiser — Let's Talk Scale</span> 
                  </a>
                </motion.div>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <p className="text-gray-700 font-medium">
                    We've helped scale brands from $0 to $100K+/mo— and we're just getting started.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publishers Section */}
      <section id="publishers" ref={publishersRef} className="py-20 md:py-32 bg-gradient-to-br from-orange-50 to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={publishersInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">For Publishers Who Want Freedom & Fortune</h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-orange-500">
                Turn Your Traffic into Real Income — Not Excuses.
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInLeft} className="order-2 md:order-1">
                <h4 className="text-xl font-semibold mb-6 text-orange-500">What You Get:</h4>
                <ul className="space-y-4 mb-8">
                  {publishersFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={publishersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div className="mr-4 mt-1">{feature.icon}</div>
                      <p className="text-gray-700">{feature.text}</p>
                    </motion.li>
                  ))}
                </ul>

                <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">Best For:</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {publisherTypes.map((type, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={publishersInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center"
                      >
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{type}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="text-center">
                  <a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-medium text-lg"
                  >
                  <span className="text-white">💼 Become a Publisher Today</span>  
                  </a>
                </motion.div>
              </motion.div>

              <motion.div variants={slideInRight} className="order-1 md:order-2 relative">
                <div className="bg-white p-8 rounded-2xl shadow-md relative z-10">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">
                    You've tried the rest. Slow payouts, dead offers, poor support, and campaigns that tank your
                    credibility. You deserve better.
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Enter AfLynk. We hand-curate the highest-converting, fastest-paying, evergreen, and exclusive offers
                    in the world — so your content finally pays you what it's worth. No more guesswork. No more generic
                    dashboards. Just real tools, real payouts, and real success.
                  </p>

                  <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 mb-6">
                    <p className="text-gray-700 font-medium">
                      Freedom isn't just a word. It's what happens when your traffic earns what it should.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <p className="text-gray-700 font-medium">
                      Top 5% of AfLynk publishers earn $50K+ monthly. You could be next.
                    </p>
                  </div>
                </div>
                
                <motion.img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6m7p29bv-UbQMTir7UzydbIeAJVDr598AJf838i.png" 
                  alt="Growth figure" 
                  className="absolute -top-10 -right-45 w-32 h-32 md:w-60 md:h-60 object-contain z-0 ml-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={publishersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" ref={caseStudiesRef} className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={caseStudiesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8">
              Become our next Case study
            </motion.h2>

            <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold mb-12 text-purple-600">
              People Don't Just Work With Us — They Stick With Us.
            </motion.h3>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <BarChart className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2 relative z-10">Measurable Results</h4>
                <p className="text-gray-600 relative z-10">Real-time analytics and transparent reporting for every campaign.</p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Globe className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2 relative z-10">Global Reach</h4>
                <p className="text-gray-600 relative z-10">Access to markets across India, MENA, SEA, LATAM, EU & the US.</p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Shield className="h-10 w-10 text-teal-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2 relative z-10">Fraud Protection</h4>
                <p className="text-gray-600 relative z-10">Advanced AI and human moderation to ensure quality traffic.</p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg"
              >
              <span className="text-white">🎯 Want to Be Our Next Case Study? Talk to Us</span>  
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-8 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden ml-4 mr-4 rounded-2xl">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isVisible["get-started"] ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </motion.h2>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400"
            >
              You've Seen the Difference. Now Make It Yours.
            </motion.h3>

            <motion.p variants={fadeInUp} className="text-gray-300 mb-12 text-lg">
              Whether you're a performance-hungry advertiser or a publisher tired of broken promises, AfLynk is your
              growth engine. Our team, tech, and track record are designed for one thing only — your success.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-3 gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-4 rounded-xl font-medium text-lg flex items-center justify-center"
              >
                <span className="text-white">🚀 I'm an Advertiser</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-xl font-medium text-lg flex items-center justify-center"
              >
                <span className="text-white">💼 I'm a Publisher</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 px-6 py-4 rounded-xl font-medium text-lg flex items-center justify-center"
              >
                🤝 Just Exploring?
              </motion.a>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-12 text-xl font-medium text-gray-300">
              Performance starts when you do.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isVisible["contact"] ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Ready to transform your affiliate marketing strategy? Our team is here to help you achieve your goals.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-teal-600"
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
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">Email</h4>
                      <a href="mailto:contact@aflynk.com" className="text-teal-600 hover:underline">
                        contact@aflynk.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-teal-600"
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
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                      <a href="tel:+918505846555" className="text-teal-600 hover:underline">
                        +91-85058 465555
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-teal-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        AfLynk Media LLP, A venture by 93 Communications
                        <br />
                        Plot No 20, Block H-1/A, Sec-63, Noida
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium text-lg"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logos[1] || "/placeholder.svg"} alt="AfLynk Media Logo" className="h-22 w-22 mb-4" />
              <p className="text-gray-400 text-sm">AfLynk Media LLP, A venture by 93 Communications</p>
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
                  <a href="#advertisers" className="text-gray-400 hover:text-white transition-colors">
                   <span className="text-gray-400">Advertiser</span> 
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
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                   <span className="text-gray-400">Privacy and Policy</span> 
                  </a>
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

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} AfLynk Media LLP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg z-50"
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
