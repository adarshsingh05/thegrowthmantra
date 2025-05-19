"use client"

import { useState, useEffect, useRef } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import {
  ChevronRight,
  Menu,
  X,
  Globe,
  BarChart,
  Users,
  Shield,
  ArrowRight,
  Target,
  Clock,
  Check,
  Rocket,
  TrendingUp,
  ExternalLink,
  Linkedin,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function AfLynkAbout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLogoIndex, setActiveLogoIndex] = useState(0)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const whoWeAreRef = useRef(null)
  const whatWeDoRef = useRef(null)
  const missionRef = useRef(null)
  const visionRef = useRef(null)
  const whyAfLynkRef = useRef(null)
  const foundersRef = useRef(null)
  const ctaRef = useRef(null)

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const whoWeAreInView = useInView(whoWeAreRef, { once: false, amount: 0.2 })
  const whatWeDoInView = useInView(whatWeDoRef, { once: false, amount: 0.2 })
  const missionInView = useInView(missionRef, { once: false, amount: 0.2 })
  const visionInView = useInView(visionRef, { once: false, amount: 0.2 })
  const whyAfLynkInView = useInView(whyAfLynkRef, { once: false, amount: 0.2 })
  const foundersInView = useInView(foundersRef, { once: false, amount: 0.2 })
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.2 })

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const logos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20%2B%20White-%20Aflynk%20Media-yCS0q4ibMChBmTmymtan4YTRn5yabb.png", // Black + White
 "footer.png",
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange%20Logo-%20Afflynk%20Media-kIeTpSt0INpu4Y0dbuSmue4FXUDsu4.png", // Orange
  ]

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { 
  //     opacity: 1, 
  //     y: 0,
  //     transition: { duration: 0.8 }
  //   }
  // };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % logos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Animation variants
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

  const cardHover = {
    rest: { scale: 1, transition: { duration: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }

  // What We Do items
  const whatWeDoItems = [
    {
      title: "Global Performance Campaigns",
      description:
        "We support all major models—CPA, CPL, CPS, CPI, CPM—across premium verticals including iGaming, Casino, Betting, Crypto, Nutra, Ecommerce, BFSI, Education, Travel, and Mobile Apps.",
      icon: <Globe className="h-8 w-8 text-white" />,
      color: "from-teal-500 to-blue-500",
    },
    {
      title: "Curated Publisher Network",
      description:
        "We onboard only quality publishers through email, display, search, social, push, native, and influencer traffic—because quality beats quantity, always.",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "24/7 Account Management",
      description:
        "With campaign managers operating across time zones, our partners receive personalized support, real-time optimization, and strategic insights round the clock.",
      icon: <Clock className="h-8 w-8 text-white" />,
      color: "from-indigo-500 to-purple-600",
    },
  ]

  // Mission items
  const missionItems = [
    "Clean data and clear results",
    "Payouts that are on time, every time",
    "Technology that makes campaigns intelligent",
    "Relationships that go beyond contracts",
  ]

  // Vision items
  const visionItems = [
    "Advertisers find partners, not just placements",
    "Publishers build wealth, not just traffic",
    "Trust is earned, not claimed",
    "Every stakeholder wins together",
  ]

  // Why AfLynk items
  const whyAfLynkItems = [
    "12+ years of hands-on founder-level experience in global performance marketing",
    "Transparent tracking, fraud detection, and brand-safe practices",
    "Multi-vertical strength—from Nutra to Crypto to BFSI to iGaming",
    "All performance models: CPA, CPL, CPS, CPI, CPT",
    "Global payout capabilities in multiple currencies and payment modes",
    "Personal affiliate managers who understand your goals—not just your dashboards",
    "Fast onboarding, real-time analytics, and scalable campaign architecture",
    "100M+ Mobile App downloads",
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
       <Helmet>
                    <title> Get in Touch | AfLynk Media – Global Affiliate Marketing Network
      </title>
                    <meta
                      name="About AfLynk Media | Global Affiliate Network for Advertisers & Publishers."
                      content=" Meet the founders of AfLynk Media and discover how we’re redefining global affiliate marketing through innovation, transparency, and high-performance partnerships.
            "
                    />
                  </Helmet>
      {/* Navigation */}
     <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Mobile Logo (only visible on mobile) */}
          {/* <div className="sm:w-16 md:w-20 flex items-center"> */}
            <img
              src={logos[1]}
              alt="AfLynk Media Logo"
          className="h-12 md:h-14"
            />
          {/* </div> */}

          {/* Center Navigation */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </Link>
            <a
              href="/advertiser"
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
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium flex items-center"
            >
              <Link to='/contact'>
              Get Started </Link> <ChevronRight className="ml-1 h-4 w-4 text-white" />
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
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 z-0"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl z-0"></div>

        {/* Animated Network Lines */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,30 50,50 T100,50"
              stroke="url(#gradient1)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,30 Q35,65 70,30 T100,30"
              stroke="url(#gradient1)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.path
              d="M0,70 Q35,35 70,70 T100,70"
              stroke="url(#gradient1)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeInOut", delay: 0.4 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600"
            >
              We Don't Just Move Traffic. We Engineer Outcomes.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-700 mb-10">
              Born from the trenches of performance marketing, AfLynk Media is a next-gen global affiliate network built
              by practitioners, not spectators.
            </motion.p>

            <motion.a
              href="#founders"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg"
            >
              Meet the Minds Behind the Movement <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Network Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 max-w-5xl mx-auto relative"
          >
            <div className="relative h-64 md:h-80 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50">
              {/* Animated Network Nodes */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute top-3/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-2/3 w-5 h-5 bg-indigo-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/3 left-3/4 w-4 h-4 bg-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1.5,
                }}
              />

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.line
                  x1="25%"
                  y1="25%"
                  x2="33%"
                  y2="75%"
                  stroke="url(#lineGradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
                <motion.line
                  x1="33%"
                  y1="75%"
                  x2="67%"
                  y2="50%"
                  stroke="url(#lineGradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                />
                <motion.line
                  x1="67%"
                  y1="50%"
                  x2="75%"
                  y2="33%"
                  stroke="url(#lineGradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <motion.line
                  x1="75%"
                  y1="33%"
                  x2="25%"
                  y2="25%"
                  stroke="url(#lineGradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 1.7 }}
                />
                <defs>
                  <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Data Flow Animation */}
              <motion.div
                className="absolute top-[25%] left-[25%] w-2 h-2 bg-white rounded-full shadow-md"
                animate={{
                  top: ["25%", "75%", "50%", "33%", "25%"],
                  left: ["25%", "33%", "67%", "75%", "25%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute top-[25%] left-[25%] w-2 h-2 bg-white rounded-full shadow-md"
                animate={{
                  top: ["25%", "75%", "50%", "33%", "25%"],
                  left: ["25%", "33%", "67%", "75%", "25%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: 2,
                }}
              />

              {/* Globe in Center */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm"></div>
                  <Globe className="w-full h-full text-blue-600/70" />
                </div>
              </motion.div>

              {/* Labels */}
              <div className="absolute top-[20%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded text-xs font-medium text-teal-700">
                Publishers
              </div>
              <div className="absolute top-[75%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded text-xs font-medium text-blue-700">
                Advertisers
              </div>
              <div className="absolute top-[50%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded text-xs font-medium text-indigo-700">
                Campaigns
              </div>
              <div className="absolute top-[33%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded text-xs font-medium text-purple-700">
                Analytics
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section ref={whoWeAreRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={whoWeAreInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600"
            >
              Built by Marketers. Designed for Scale.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInLeft}>
                <p className="text-lg text-gray-700 mb-6">
                  AfLynk Media is more than a network. It's the culmination of over a decade of hands-on experience,
                  relentless optimization, and an unshakable belief in partnership over profit.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Founded by Arun Chachan and Sonali Rao, AfLynk was created for a new era of affiliate marketing—one
                  where both advertisers and publishers get more than just clicks and conversions. They get trust.
                  Transparency. Tenacity.
                </p>

                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-blue-100 mb-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <span className="text-3xl mr-3">🧠</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Arun Chachan (Founder)</h3>
                      <p className="text-gray-700">
                        Brings 12+ years of high-stakes performance marketing expertise to the helm. Having led
                        seven-figure affiliate campaigns across verticals like iGaming, Crypto, Finance, and Ecommerce,
                        Arun knows both sides of the table—affiliate and advertiser. His journey from solo performance
                        marketer to strategic entrepreneur ensures AfLynk operates with both depth and vision.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-teal-50 p-6 rounded-xl border border-teal-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <span className="text-3xl mr-3">💡</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Sonali Rao (Co-Founder)</h3>
                      <p className="text-gray-700">
                        Is the strategic engine driving operations, client and publisher success, and scalable
                        execution. With a rich background in business operations, campaign delivery, and digital
                        enablement, Sonali has mastered the art of aligning systems with outcomes. Her operational
                        intelligence ensures AfLynk is fast, focused, and always partner-first.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={slideInRight} className="relative md:mt-[200px]">
                <div className="relative z-10 bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Founding Story</h3>
                  <p className="text-gray-700 mb-6">
                    Together, they created AfLynk as the answer to a noisy affiliate world—one where results matter more
                    than rhetoric and every campaign is a step toward shared growth.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                        <Target className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Precision</h4>
                        <p className="text-gray-600">Targeting the right audience with the right offers</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Trust</h4>
                        <p className="text-gray-600">Building relationships based on transparency and results</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Growth</h4>
                        <p className="text-gray-600">Scaling campaigns with data-driven strategies</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-gradient-to-r from-teal-300/20 to-blue-300/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full blur-2xl -z-10"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={whatWeDoRef} className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={whatWeDoInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-center text-gray-900">
              Affiliate Marketing that Works as Hard as You Do
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-16 text-center max-w-4xl mx-auto">
              At AfLynk, we connect high-intent audiences with high-performing offers across a global ecosystem of
              publishers and advertisers. Whether you're a growth-hungry brand or a media-savvy publisher, we make sure
              every click and conversion creates measurable impact.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {whatWeDoItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col"
                >
                  <div className={`bg-gradient-to-r ${item.color} p-6`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-xl font-semibold mt-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600"
            >
              We're building performance ecosystems that scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section ref={missionRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial="hidden" animate={missionInView ? "visible" : "hidden"} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                To Build the Most Transparent, Performance-Driven Affiliate Network in the World
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-gray-700 mb-8">
                Our mission is clear: To empower brands and publishers to grow smarter, faster, and more profitably
                through real partnerships and razor-sharp performance.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-lg font-medium mb-6 text-gray-900">
                We're obsessed with:
              </motion.p>

              <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                {missionItems.map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                      <Check className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p variants={fadeInUp} className="text-lg text-gray-700">
                We believe in the power of real people, real conversations, and relentless optimization. At AfLynk,
                affiliate marketing isn't just a channel. It's the catalyst for your growth.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={missionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-1">
                  <div className="bg-white rounded-xl p-8">
                    <div className="flex justify-center mb-8">
                      <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                        <Target className="h-10 w-10 text-teal-600" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Our Approach</h3>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                          <BarChart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Data-Driven</h4>
                          <p className="text-gray-600">
                            We make decisions based on real-time analytics and performance metrics
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mt-1 mr-4">
                          <Users className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">People-First</h4>
                          <p className="text-gray-600">
                            We prioritize relationships and understand the human side of business
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mt-1 mr-4">
                          <Rocket className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Results-Oriented</h4>
                          <p className="text-gray-600">We focus on delivering measurable outcomes that drive growth</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-gradient-to-r from-teal-300/20 to-blue-300/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section
        ref={visionRef}
        className="py-20 md:py-32 bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
              A Global Affiliate Ecosystem Where Performance Meets Purpose
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-16 text-center max-w-4xl mx-auto">
              We envision AfLynk as the most trusted affiliate platform in the world—where scale doesn't sacrifice
              ethics, and growth doesn't compromise integrity.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visionItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  custom={index}
                  whileHover={{ y: -10 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-center text-white font-medium">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-16 text-center max-w-4xl mx-auto">
              <p className="text-blue-100 mb-6">
                We're on a mission to professionalize and humanize performance marketing—and to build a global standard
                where results speak louder than hype.
              </p>
              <p className="text-xl font-semibold text-white">
                Because the future of affiliate marketing is not transactional. It's transformational.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why AfLynk Section */}
      <section ref={whyAfLynkRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={whyAfLynkInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
  variants={fadeInUp}
  className="text-3xl md:text-5xl font-bold mb-6 text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600"
>
  <span>We're Your Unfair Advantage in Affiliate Marketing</span>
</motion.h2>


            <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-16 text-center max-w-4xl mx-auto">
              Here's what sets us apart from the crowd:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {whyAfLynkItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 border border-blue-100 flex items-start"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>

             <motion.div 
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerChildren}
      className="mt-12 relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-600 rounded-xl p-8 text-white shadow-2xl"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      
      <div className="relative z-10">
        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl font-medium text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed text-center"
        >
          Whether you're an <span className="font-bold text-white">emerging D2C brand</span>, a <span className="font-bold text-white">global fintech advertiser</span>, or a <span className="font-bold text-white">seasoned publisher</span>—we have the tools, talent, and tech to get you to the next level.
        </motion.p>
        
        <motion.div 
          variants={fadeInUp}
          className="flex justify-center items-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 text-transparent py-2 px-4 border-t-2 border-b-2 border-yellow-300/30 my-2">
            We're not a network. We're your growth partner.
          </h2>
        </motion.div>
        
        <motion.div
          variants={fadeInUp} 
          className="mt-8 flex justify-center space-x-4"
        >
          <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg shadow-lg transform transition hover:-translate-y-1">
            Partner With Us
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transform transition hover:-translate-y-1">
            Learn More
          </button>
        </motion.div>
      </div>
    </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founders in Focus Section */}
      <section
        id="founders"
        ref={foundersRef}
        className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={foundersInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">
              Founders in Focus
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                variants={slideInLeft}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-r from-teal-500 to-blue-500 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">Arun Chachan</h3>
                    <p className="text-white/90 font-medium">Founder </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Growth Marketing Strategist | 12+ Years | Scaled Multi-Million Dollar Campaigns
                  </p>
                  <a
                    href="https://linkedin.com/in/arunchachan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    <Linkedin className="h-5 w-5 mr-2" /> LinkedIn <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-500 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">Sonali Rao</h3>
                    <p className="text-white/90 font-medium">Co-Founder</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Client and Publisher Success Architect | Digital Strategy | Operational Excellence
                  </p>
                  <a
                    href="https://linkedin.com/in/sonalirao07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    <Linkedin className="h-5 w-5 mr-2" /> LinkedIn <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 md:py-32 bg-gradient-to-br from-teal-600 to-blue-600 text-white overflow-hidden"
      >
        <div className="container mx-auto px-4 relative">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>

          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Let's Grow Together
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-12">
              Join hundreds of advertisers and publishers who are scaling smarter with AfLynk Media.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-center gap-6">
              <motion.a
                href="/publisher-page"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-600 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center shadow-lg"
              >
                I'm a Publisher <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center"
              >
                I'm an Advertiser <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
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
          className="h-22 w-36 mb-4"
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
 +91-7988540592          </li>
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

      {/* Back to Top Button */}
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-3 rounded-full shadow-lg z-50"
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
