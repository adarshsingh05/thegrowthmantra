"use client"
import ZohoForm from "./ZohoForm" // Import the ZohoForm component

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import {
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Globe,
  BarChart,
  Users,
  Zap,
  Shield,
  DollarSign,
  Award,
  Menu,
  X,
} from "lucide-react"
import { Link } from "react-router-dom"
import { StarIcon } from "@heroicons/react/24/solid"
export default function AfLynkLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLogoIndex, setActiveLogoIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({
    stats: false,
    publishers: false,
    "get-started": false,
  })
  const [scrollY, setScrollY] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const advertisersRef = useRef(null)
  const publishersRef = useRef(null)
  const caseStudiesRef = useRef(null)

  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const advertisersInView = useInView(advertisersRef, {
    once: true,
    amount: 0.2,
  })
  const publishersInView = useInView(publishersRef, {
    once: true,
    amount: 0.2,
  })
  const caseStudiesInView = useInView(caseStudiesRef, {
    once: true,
    amount: 0.2,
  })

  const { scrollYProgress } = useScroll()

  const logos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20%2B%20White-%20Aflynk%20Media-yCS0q4ibMChBmTmymtan4YTRn5yabb.png", // Black + White
    "footer.png", // Teal
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange%20Logo-%20Afflynk%20Media-kIeTpSt0INpu4Y0dbuSmue4FXUDsu4.png", // Orange
  ]

  // Logo size animation based on scroll position
  const logoScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.5])
  const logoOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const navbarOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % logos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Effect for stats section visibility
  useEffect(() => {
    if (statsInView) {
      setIsVisible((prev) => ({ ...prev, stats: true }))
    }
  }, [statsInView])

  // Effect for publishers section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, publishers: true }))
        }
      },
      { threshold: 0.1 },
    )

    if (publishersRef.current) {
      observer.observe(publishersRef.current)
    }

    return () => {
      if (publishersRef.current) {
        observer.unobserve(publishersRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setHasScrolled(window.scrollY > 100)

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
    {
      icon: <Zap className="h-6 w-6 text-teal-500" />,
      text: "Lightning-fast campaign launches (under 24 hrs)",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-teal-500" />,
      text: "Verified Publishers",
    },
    {
      icon: <Shield className="h-6 w-6 text-teal-500" />,
      text: "Fraud prevention (AI + human moderation)",
    },
    {
      icon: <BarChart className="h-6 w-6 text-teal-500" />,
      text: "Transparent tracking dashboard ",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-500" />,
      text: "Dedicated performance managers",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-500" />,
      text: "Multiple vertical expertise",
    },
  ]

  const publishersFeatures = [
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      text: "Exclusive campaigns in high-paying verticals",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-orange-500" />,
      text: "Flexible payment options",
    },
    {
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      text: "Global offers, local optimization",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      text: "Mobile-friendly affiliate tools & creatives",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      text: "Referral bonus programs to earn more",
    },
    {
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      text: "Dedicated Account Manager",
    },
  ]

  const verticals = [
    "iGaming & Casino",
    "Crypto & Web3",
    "Nutra & Supplements",
    "BFSI & Fintech",
    "E-commerce & D2C",
    "Education & EdTech",
    "Travel, Telecom,",
    "Game and reward Apps",
  ]

  const publisherTypes = [
    "Content creators",
    "Influencers & bloggers",
    "Media buyers",
    "SEO affiliates",
    "Email marketers",
    "App & tool owners",
    "YouTubers",
    "TG/FB Group Owners",
  ]

  const stats = [
    {
      value: "10M+",
      description: "Qualified Leads Generated",
    },
    {
      value: "100M+",
      description: "App Downloads Driven",
    },
    {
      value: "3M+",
      description: "Verified Transactions Tracked",
    },
    {
      value: "12+",
      description: "Years of Industry Mastery",
    },
    {
      value: "20+",
      description: "High-Converting Verticals",
    },
  ]

  return (
    <>
   
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <title>AfLynk Media | Global Affiliate Marketing Network for Advertisers & Publishers</title>
      <meta name= "AfLynk Media | Global Affiliate Marketing Network for Advertisers & Publishers" content="Join AfLynk Media — India's and the world’s most reliable affiliate marketing network. Advertise or monetize with CPI, CPA, CPL, CPS, and more across 20+ verticals, including crypto, iGaming, BFSI & Nutra"/>
      {/* Navigation (always visible) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo (visible on all devices) */}
          <div className="flex items-center">
            <img src={logos[1] || "/placeholder.svg"} alt="AfLynk Media Logo"                className="h-12 md:h-14"
 />
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Home{" "}
            </Link>
            <a href="/advertiser" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Advertisers
            </a>
            <Link to="/publisher" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Publisher
            </Link>
            {/* <a
              href="#case-studies"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Case Study
            </a> */}
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Contact
            </Link>
            <Link to="/aboutus" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
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

      {/* Hero Section with appropriate padding for mobile */}
      <section
        ref={heroRef}
        className=" mt-24 md:mt-0 md:pt-64 md:pb-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
      >
        <div className="container mx-auto px-4 md:mt-[-60px] ">
          <div className="grid md:grid-cols-2 gap-8 items-center ">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "visible"}
              variants={staggerContainer}
              className="  mt-0 text-left md:mt-[-100px]"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600"
              >
                <span className="inline-block mb-0 mt-0">Reimagine Affiliate Marketing with AfLynk</span>
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
                From crypto to consumer tech, our global affiliate network empowers advertisers and publishers with
                smarter performance, real profits, and strategic scale — across every major vertical.
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-600 mb-10 text-lg">
                Welcome to AfLynk Media — where performance isn't a promise. It's a guarantee. Whether you're a
                publisher looking to unlock new monetization routes or an advertiser chasing ROI at scale, we connect
                the dots between data, demand, and delivery.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12"
              >
                <motion.a
                  href="#get-started"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center"
                >
                  <span className="text-white">🚀 Start Scaling with AfLynk</span>{" "}
                  <ArrowRight className="ml-2 h-5 w-5 text-white" />
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
                src="main.png"
                alt="AfLynk Analytics Dashboard"
                className="w-[1000px] h-[610px] object-contain z-10 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-teal-100/30 to-purple-100/30 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>

          <div className="w-full py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              {/* Heading */}

              {/* Banner */}
              <div className="mt-12 bg-gradient-to-r from-red-400 via-red-500 to-yellow-500 rounded-2xl shadow-2xl p-10 text-center relative text-white">
                <div className="flex justify-center mb-4">
                  <StarIcon className="h-10 w-10 text-white drop-shadow-md" />
                  <StarIcon className="h-10 w-10 text-white drop-shadow-md" />
                  <StarIcon className="h-10 w-10 text-white drop-shadow-md" />
                  <StarIcon className="h-10 w-10 text-white drop-shadow-md" />
                  <StarIcon className="h-10 w-10 text-white drop-shadow-md" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Are your campaigns just running? Or are they converting?
                </h2>
                <p className="mt-4 text-lg font-medium">
                  With 10+ years of experience, we're trusted by advertisers & publishers worldwide.
                </p>

                {/* Button */}
                <div className="mt-8 flex justify-center">
                  <button className="flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-100 transition duration-300">
                    <Link to="/contact">Schedule a Call</Link>
                    <ArrowRightIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-center text-olive-700 mb-16 mt-14">
                Our Impact in Numbers
              </h2>

              {/* Stats grid */}
              <div
                ref={statsRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 transition-opacity duration-1000"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center h-40"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">{stat.value}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
            {/* Keep banner position unchanged */}
            <motion.div variants={fadeInUp} className="text-center mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl transform -skew-y-1 shadow-lg"></div>
              <div className="relative py-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
                  Built for Advertisers Who Demand More
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-teal-600">
                  You Don't Just Want Clicks - You Want Customers. We Deliver Them.
                </h3>
              </div>
            </motion.div>

            {/* Centered "You're tired of" section with more impact */}
            <motion.div
              variants={fadeInUp}
              className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg border border-teal-100 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="marketing-content space-y-8">
                  {/* Problem Statement Section - more impactful */}
                  <h4 className="text-2xl font-bold text-gray-800 text-center mb-6 border-b-2 border-teal-200 pb-4">
                    You're tired of:
                  </h4>

                  <ul className="space-y-4 pl-1">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-1.5 mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg font-medium">
                        Spending big for traffic that <span className="text-red-600 font-bold">doesn't convert</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-1.5 mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg font-medium">
                        Chasing <span className="text-red-600 font-bold">vanity metrics</span> with no real value
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-1.5 mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg font-medium">
                        Fighting <span className="text-red-600 font-bold">fraudulent traffic</span> that drains your
                        budget
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-1.5 mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg font-medium">
                        <span className="text-red-600 font-bold">Slow campaign launches</span> that miss market
                        opportunities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-1.5 mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg font-medium">
                        Platforms with <span className="text-red-600 font-bold">limited reach</span> and targeting
                        capabilities
                      </span>
                    </li>
                  </ul>

                  {/* Solution Statement Section */}
                  <h4 className="text-2xl font-bold text-gray-800 text-center mt-8 mb-6 border-b-2 border-teal-200 pb-4">
                    At AfLynk, we deliver what you want:
                  </h4>

                  <ul className="space-y-4 pl-1">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600 rounded-full p-1.5 mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg font-medium">
                        <span className="text-teal-600 font-bold">Measurable ROI</span> you can track and scale
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600 rounded-full p-1.5 mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg font-medium">
                        <span className="text-teal-600 font-bold">Fraud-free scale</span> with verified traffic sources
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600 rounded-full p-1.5 mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg font-medium">
                        <span className="text-teal-600 font-bold">Precision targeting</span> that reaches your ideal
                        audience
                      </span>
                    </li>
                  </ul>

                  <p className="text-gray-700 font-medium text-lg pt-4 text-center">
                    We don't just run campaigns.{" "}
                    <span className="text-blue-600 font-bold">We architect performance.</span> Whether you're launching
                    a new app, promoting a gaming brand, or scaling a D2C product, AfLynk brings you hyper-targeted
                    distribution.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Features section below the main content */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h4 className="text-2xl font-semibold mb-6 text-teal-600 text-center">Features That Drive Results:</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {advertisersFeatures.slice(0, 6).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={advertisersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className="mr-4 mt-1 text-teal-500">{feature.icon}</div>
                    <p className="text-gray-700">{feature.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {verticals.map((vertical, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={advertisersInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{vertical}</span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-6">
                <p className="text-gray-600">
                  With customizable models (CPA, CPL, CPS, CPI, CPT) and granular geo-targeting across India, MENA, SEA,
                  LATAM, EU & the US, we help you break into new markets, safely and profitably.
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#contact"
                  className="inline-flex items-center group bg-gradient-to-r from-teal-600 to-green-700 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl"
                >
                  <span className="text-white mr-3">🚀 I'm an Advertiser — Let's Talk Scale</span>
                  <div className="bg-white rounded-full p-2 transform group-hover:translate-x-1 transition-transform">
                    <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </motion.div>
            </motion.div>

            {/* New impactful banner for $0 to $100K */}
            <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 opacity-90"></div>
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <svg width="240" height="240" viewBox="0 0 24 24" fill="white">
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                </svg>
              </div>
              <div className="relative py-12 px-8 md:px-12 text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  We've helped scale brands from
                  <div className="mt-3 mb-3">
                    <span className="bg-white text-blue-700 px-4 py-2 rounded-lg inline-block transform -rotate-1 shadow-lg">
                      $0 to $100K+/mo
                    </span>
                  </div>
                  — and we're just getting started.
                </h3>
                <p className="text-white text-xl mt-4 max-w-3xl mx-auto opacity-90">
                  Join the brands who've multiplied their growth with our performance-focused approach.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publishers Section */}
      <section
        ref={publishersRef}
        id="publishers"
        className="py-20 md:py-32 bg-gradient-to-br from-orange-50 to-gray-50 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-6xl mx-auto">
            {/* Header - Positioned at the top */}
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">For Publishers Who Want Freedom & Fortune</h2>
              <div className="h-1 w-32 bg-orange-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Join hundreds of successful publishers who are maximizing their revenue with AfLynk Media's premium
                affiliate network.
              </p>
            </motion.div>

            {/* What You Get - Positioned in the middle with adjusted size */}
            <motion.div variants={fadeInUp} className="mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
                What You Get
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {publishersFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                      {feature.icon}
                    </div>
                    <p className="text-gray-700 text-center">{feature.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-2xl font-semibold mb-6 text-center text-gray-800">Best For</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {publisherTypes.map((type, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                      className="flex items-center bg-orange-50 p-3 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{type}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg"
                >
                  <span className="text-white">💼 Become a Publisher Today</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Turn Your Traffic Section - Full screen with image icons */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-blue-600 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Turn Your Traffic into Real Income — Not Excuses
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Pain Points Column */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">You've tried the rest. Here's what you're facing:</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                    <span className="text-red-300 mr-3 text-xl">✗</span>
                    <span className="text-white font-medium">Slow payouts that leave you cashflow constrained</span>
                  </li>
                  <li className="flex items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                    <span className="text-red-300 mr-3 text-xl">✗</span>
                    <span className="text-white font-medium">Dead offers wasting your traffic and effort</span>
                  </li>
                  <li className="flex items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                    <span className="text-red-300 mr-3 text-xl">✗</span>
                    <span className="text-white font-medium">Poor support when you need answers fast</span>
                  </li>
                  <li className="flex items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                    <span className="text-red-300 mr-3 text-xl">✗</span>
                    <span className="text-white font-medium">Campaigns that tank your credibility with audiences</span>
                  </li>
                </ul>

                <div className="border-l-4 border-white/40 pl-4 py-3 bg-white/10 rounded-r-lg backdrop-blur-sm">
                  <p className="text-white font-bold text-xl">You deserve better.</p>
                </div>
              </div>

              {/* Solution Column */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Enter AfLynk Media.</h3>
                </div>

                <p className="mb-6 text-white font-medium">
                  We hand-curate the highest-converting, fastest-paying, evergreen, and exclusive offers in the world —
                  so your content finally pays you what it's worth.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                    <span className="text-green-300 mr-3 text-xl">✓</span>
                    <span className="text-white font-medium">No more guesswork with transparent metrics</span>
                  </li>
                  <li className="flex items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                    <span className="text-green-300 mr-3 text-xl">✓</span>
                    <span className="text-white font-medium">No more generic dashboards that hide what matters</span>
                  </li>
                  <li className="flex items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                    <span className="text-green-300 mr-3 text-xl">✓</span>
                    <span className="text-white font-medium">Just real tools that drive performance</span>
                  </li>
                  <li className="flex items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                    <span className="text-green-300 mr-3 text-xl">✓</span>
                    <span className="text-white font-medium">Real payouts that arrive on time, every time</span>
                  </li>
                </ul>

                {/* <div className="p-5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm text-center">
                  <p className="text-white font-bold text-xl">
                    "Freedom isn't just a word. It's what happens when your traffic earns what it should."
                  </p>
                </div> */}
              </div>
            </div>

            {/* Results Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 relative overflow-hidden"
            >
              {/* Dollar sign decorative elements */}
              <div className="absolute -top-6 -left-6 text-6xl text-white/10 font-bold">$</div>
              <div className="absolute -bottom-6 -right-6 text-6xl text-white/10 font-bold">$</div>

              <div className="relative z-10 text-center py-4">
                <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <DollarSign className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-3xl md:text-4xl mb-2">
                      Top 5% of AfLynk publishers earn <span className="text-yellow-300">$50K+ monthly</span>.
                    </p>
                    <p className="text-white/80 font-semibold text-xl md:text-2xl">
                      You could be next. <span className="inline-block animate-pulse">→</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-12 text-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-xl shadow-lg"
              >
                <Link to="/contact">Start Monetizing Your Traffic Today</Link>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        ref={caseStudiesRef}
        className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-gray-50 overflow-hidden"
      >
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
                <p className="text-gray-600 relative z-10">
                  Real-time analytics and transparent reporting for every campaign.
                </p>
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
                <p className="text-gray-600 relative z-10">
                  Access to markets across India, MENA, SEA, LATAM, EU & the US.
                </p>
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
                <p className="text-gray-600 relative z-10">
                  Advanced AI and human moderation to ensure quality traffic.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg"
              >
                <span className="text-white">
                  <Link to="/contact">🎯 Want to Be Our Next Case Study? Talk to Us</Link>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="get-started"
        className="py-8 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden ml-4 mr-4 rounded-2xl"
      >
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
                <Link to="/contact">
                  <span className="text-gray-800">🤝 Just Exploring?</span>
                </Link>{" "}
              </motion.a>
            </motion.div>

            {/* Enhanced visually impactful tagline */}
            <motion.div variants={fadeInUp} className="mt-16 mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-lg"></div>
              <div className="relative">
                <div className="h-px bg-gradient-to-r from-transparent via-white/70 to-transparent mb-6"></div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible["get-started"] ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <motion.p
                    className="text-3xl font-bold tracking-wider py-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-300 to-white"
                    animate={{
                      backgroundPosition: ["0% center", "100% center", "0% center"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                  >
                    Performance starts when you do.
                  </motion.p>
                </motion.div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/70 to-transparent mt-6"></div>
              </div>

              {/* Pulsing highlight elements */}
              <motion.div
                className="absolute -left-8 top-1/2 w-6 h-6 rounded-full bg-blue-400"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />

              <motion.div
                className="absolute -right-8 top-1/2 w-6 h-6 rounded-full bg-teal-400"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: 1.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
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
  <a href="tel:+918505846555" className="text-teal-600 hover:underline block">
    +91-85058 465555
  </a>
  <a href=" +91-7988540592" className="text-teal-600 hover:underline block">
    +91-7988540592
  </a>
</div>

                  </div>

                  <div className="flex items-start">
                    <div className="bg-transparent p-3 rounded-full mr-4">
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
                        AfLynk Media LLP
                        <br />
                        Plot No 20, Block H-1/A, Sec-63, Noida
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-transparent p-6 rounded-2xl shadow-sm w-full">
                  <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

                  {/* Zoho Form Integration */}
                  <div className="mr-0 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0" style={{ marginRight: '65px' }}>
  <ZohoForm
    formId="ContactUsBasic"
    divId="keBaXMl5lor6IwJBjnxrEOnHKNgcBY6OxVqkjCUlsJE"
    height="300px"
    width="130%"
  />
</div>

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
              <img src="footer.png" alt="AfLynk Media Logo" className="h-18 w-48 mb-4" />
              <p className="text-gray-400 text-sm">AfLynk Media LLP</p>
              <p className="text-gray-400 text-sm">Plot No 20, Block H-1/A, Sec-63, Noida</p>
              <p className="text-gray-400 text-sm">contact@aflynk.com</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Home</span>
                  </a>
                </li>
                <li>
                  <a href="/advertiser" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Advertiser</span>
                  </a>
                </li>
                <li>
                  <a href="/publisher" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Publisher</span>
                  </a>
                </li>
                <li></li>
                <li>


                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Contact Us</span>
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">About Us</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/policy" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-gray-400">Privacy and Policy</span>
                  </Link>
                </li>
                <li>
                  <a href="/tandc" className="text-gray-400 hover:text-white transition-colors">
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
        className="fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg z-50"
      >
      {/* no more svgs */}
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
    </>
  )
}
