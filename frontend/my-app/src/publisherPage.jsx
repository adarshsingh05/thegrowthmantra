"use client"
import { Link } from "react-router-dom";

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useInView } from "framer-motion"
import {
  ChevronRight,
  ArrowRight,
  Globe,
  Users,
  Shield,
  DollarSign,
  Menu,
  X,
  PieChart,
  Rocket,
  ChevronDown,
  Database,
  CreditCard,
  UserPlus,
  BarChart2,
 
} from "lucide-react";
import ZohoForm from "./ZohoForm";
export default function AfLynkPublisherPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLogoIndex, setActiveLogoIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [scrollY, setScrollY] = useState(0)
  const [activeAccordion, setActiveAccordion] = useState(null)
  const sectionRef = useRef(null)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const introRef = useRef(null)
  const featuresRef = useRef(null)
  const howItWorksRef = useRef(null)
  const faqRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const introInView = useInView(introRef, { once: false, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const howItWorksInView = useInView(howItWorksRef, { once: true, amount: 0.2 })
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll()

  const logos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20%2B%20White-%20Aflynk%20Media-yCS0q4ibMChBmTmymtan4YTRn5yabb.png", // Black + White
    "footer.png", // Teal
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

  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      title: "Exclusive, High-Converting Campaigns",
      description:
        "Gain access to premium, exclusive offers across verticals like iGaming, Crypto, E-commerce, Nutra, BFSI, and Travel. These hand-picked campaigns aren't available on other networks—giving you a competitive edge and maximum monetization potential.",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-500" />,
      title: "Real-Time Analytics & Data Optimization",
      description:
        "Our advanced tracking and reporting dashboard gives you a bird's-eye view of your traffic, conversions, and earnings in real time. Leverage performance insights to make smarter decisions, scale faster, and boost ROI—no guesswork, just growth.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Flexible Commission & Payout Models",
      description:
        "Choose how you earn—CPI, CPS, CPA, or CPL. Whether you prefer revenue share or fixed payouts, we tailor monetization to match your audience and goals. Plus, our fast payout options—including Net-30 and flexible threshold models—ensure your cash flow never slows your hustle.",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "AI-Powered Fraud Protection",
      description:
        "We don't just track traffic—we safeguard it. Our cutting-edge fraud detection system uses machine learning to identify and block invalid clicks, bot traffic, or malicious leads. That means cleaner traffic and payouts you can trust.",
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      title: "Global Scale. Local Precision.",
      description:
        "Whether you target India, the US, LATAM, or Europe, our geo-optimized campaigns help you localize your strategy while operating globally. With 50+ countries supported and growing, AfLynk gives you global reach with region-specific precision.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Dedicated Support & Account Management",
      description:
        "Behind every top-earning affiliate is a team that backs them—and we've got yours. From setup to scaling, our experienced account managers offer personalized guidance and insights tailored to your campaigns. And with 24/7 customer support, we're always just a message away.",
    },
  ]

  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-teal-500" />,
      title: "Sign Up",
      description:
        "Create your account in just a few minutes. The registration process is quick, and you'll get immediate access to the platform.",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "Browse Offers",
      description: "Choose from hundreds of exclusive campaigns that align with your audience's needs and interests.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      title: "Promote",
      description:
        "Start promoting offers via your website, email list, social media, or apps. AfLynk provides you with all the marketing materials you need.",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-purple-500" />,
      title: "Optimize",
      description:
        "Use our real-time reporting tools to track your campaigns and make data-driven decisions to boost conversions.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-green-500" />,
      title: "Earn & Get Paid",
      description:
        "Sit back and relax while you earn commissions. We offer flexible payouts to make sure you're paid when you need it.",
    },
  ]

  const faqs = [
    {
      question: "How fast can I get paid?",
      answer: "AfLynk offers multiple payment options, including our Net-30. Choose the option that fits your needs.",
    },
    {
      question: "What offers can I promote?",
      answer:
        "We offer many campaigns in iGaming, E-commerce, Travel, Nutra, and many other industries. All our offers are high-converting and exclusive.",
    },
    {
      question: "Is there a minimum traffic requirement?",
      answer:
        "No, we welcome publishers of all sizes. Whether you're just starting or a seasoned professional, AfLynk offers campaigns for all levels of experience.",
    },
    {
      question: "How do I track my performance?",
      answer:
        "Our advanced dashboard provides real-time analytics on all your campaigns, allowing you to track clicks, conversions, and earnings with precision.",
    },
    {
      question: "What marketing materials do you provide?",
      answer:
        "We provide a comprehensive suite of marketing materials including banners, landing pages, email templates, and more to help you promote effectively.",
    },
  ]

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const stats = [
    { value: "50+", label: "Countries Supported" },
    { value: "100%", label: "Exclusive Offers" },
    { value: "24/7", label: "Support Available" },
    { value: "Net-30", label: "Fast Payouts" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
     <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    {/* Logo */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
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

    {/* Desktop Navigation + CTA */}
    <div className="hidden md:flex items-center justify-center flex-1">
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

    </div>

    {/* CTA Button */}
    <motion.a
      href="#cta"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:flex bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium items-center"
    >
      <span>Become a Publisher</span>
      <ChevronRight className="ml-1 h-4 w-4" />
    </motion.a>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-orange-50 to-gray-50 overflow-hidden"
      >
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-purple-600"
              >
                Unlock Limitless Earning Potential with AfLynk Media
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
                Join a network that offers exclusive high-converting offers, flexible payment options, and global reach
                – Everything you need to accelerate your earnings.
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12"
              >
                <motion.a
                  href="#cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center"
                >
                  <span className="text-white">Sign Up and Start Earning Now</span>{" "}
                  <ArrowRight className="ml-2 h-5 w-5 text-white" />
                </motion.a>

                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </motion.div>
            </motion.div>
<motion.img
  src="image.png"
  alt="AfLynk Publisher Dashboard"
  className="w-full h-auto object-contain z-10 relative"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  style={{ objectPosition: 'top', height: '65%' }} // Adjust height here
/>

          </div>

          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mt-16 bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={scaleIn} custom={index} className="p-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8">
              Welcome to AfLynk Media
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-gray-700 mb-10">
              The world's most dynamic and results-driven affiliate network, designed for publishers who want to
              maximize earnings, streamline optimization, and scale globally. Whether you specialize in iGaming, crypto,
              travel, e-commerce, BFSI, or Nutra, AfLynk's exclusive offers, real-time analytics, and world-class
              support make us the partner of choice for top publishers across the globe.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">Low Conversions?</h3>
                <p className="text-gray-700">
                  AfLynk provides exclusive, high-converting offers you can't find anywhere else.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Late Payments?</h3>
                <p className="text-gray-700">
                  Our flexible payment options ensure you're paid on your terms — quickly and consistently.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Lack of Insights?</h3>
                <p className="text-gray-700">
                  Our real-time optimization tools allow you to track your campaigns and adjust in real-time for maximum
                  returns.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why AfLynk Works for You</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                At AfLynk Media, we believe publishers deserve more than just offers—they deserve a performance engine
                that drives real results. That's why we've built a global affiliate network rooted in trust,
                transparency, and technology, with you—the publisher—at the center.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  custom={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
                  <div className="relative z-10 flex flex-row items-start">
                    {/* Logo/icon now on the left side with proper alignment for all screen sizes */}
                    <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    {/* Text content now on the right side */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            
<motion.div 
  variants={fadeInUp} 
  className="mt-16 relative overflow-hidden rounded-xl"
>
  {/* Background gradient with pattern overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 opacity-95"></div>
  <div className="absolute inset-0 opacity-20" 
       style={{
         backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
         backgroundSize: "30px 30px"
       }}
  ></div>
  
  {/* Content container */}
  <div className="relative py-10 md:py-14 px-6 md:px-10 rounded-xl text-center text-white shadow-lg z-10">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-white opacity-60 rounded-tl-lg"></div>
    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-white opacity-60 rounded-br-lg"></div>
    
    {/* Main content */}
    <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
      AfLynk isn't just another affiliate network.
      <span className="block mt-2 text-yellow-300 text-3xl md:text-4xl">It's your unfair advantage.</span>
    </h3>
    
    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
      Ready to scale smarter, faster, and with partners who actually get it? Let's grow together.
    </p>
    
    {/* CTA button */}
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#f97316" }}
      whileTap={{ scale: 0.98 }}
      className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-white hover:text-orange-500"
    >
      Join AfLynk Today
    </motion.button>
  </div>
  
  {/* Accent corners */}
  <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-300 opacity-80 transform translate-x-1/2 -translate-y-1/2 rounded-full blur-lg"></div>
  <div className="absolute bottom-0 left-0 w-12 h-12 bg-purple-400 opacity-70 transform -translate-x-1/3 translate-y-1/3 rounded-full blur-md"></div>
</motion.div>
          </motion.div>
        </div>
      </section>

      {/* Network Visualization */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Global Publisher Network</h2>
              <p className="text-xl text-gray-300 mb-8">
                Connect with advertisers across the globe and access exclusive campaigns that drive real results. Our
                network spans over 50 countries, giving you unparalleled reach and opportunity.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-800/50 px-4 py-2 rounded-full text-sm">iGaming</span>
                <span className="bg-purple-800/50 px-4 py-2 rounded-full text-sm">Crypto</span>
                <span className="bg-green-800/50 px-4 py-2 rounded-full text-sm">E-commerce</span>
                <span className="bg-red-800/50 px-4 py-2 rounded-full text-sm">Nutra</span>
                <span className="bg-yellow-800/50 px-4 py-2 rounded-full text-sm">BFSI</span>
                <span className="bg-teal-800/50 px-4 py-2 rounded-full text-sm">Travel</span>
                <span className="bg-blue-800/50 px-4 py-2 rounded-full text-sm">FMCG</span>
                <span className="bg-purple-800/50 px-4 py-2 rounded-full text-sm">EduTech</span>
                <span className="bg-green-800/50 px-4 py-2 rounded-full text-sm">Web3</span>
                <span className="bg-red-800/50 px-4 py-2 rounded-full text-sm">CPG</span>
                <span className="bg-yellow-800/50 px-4 py-2 rounded-full text-sm">HealthTech</span>
                <span className="bg-teal-800/50 px-4 py-2 rounded-full text-sm">HelathCare</span>


              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex justify-center"
            >
              <motion.img
                src="sec.png"
                alt="AfLynk Publisher Network"
                className="max-w-full h-[400px]"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.05, 1, 1.05, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
   <section id="how-it-works" ref={howItWorksRef} className="py-20 md:py-32 bg-white overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      animate={howItWorksInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="max-w-6xl mx-auto"
    >
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Becoming a publisher with AfLynk is simple and fast. Here's how to get started:
        </p>
      </motion.div>

      {/* Only show desktop layout on md screens and up */}
      <div className="relative hidden md:block">
        {/* Connection Line for desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-blue-500 transform -translate-x-1/2"></div>

        <div className="space-y-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-8`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                  <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
                    {index % 2 === 0 ? (
                      <>
                        <span>{step.title}</span>
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          {step.icon}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          {step.icon}
                        </div>
                        <span>{step.title}</span>
                      </>
                    )}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Number circle for desktop */}
              <div className="w-12 relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl z-10 relative">
                  {index + 1}
                </div>
              </div>

              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Simple mobile view */}
      <div className="md:hidden mt-6">
        <div className="space-y-2">
          {steps.map((step, index) => (
            <div key={`mobile-${index}`}>
              {/* Card with number inside */}
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold flex items-center gap-2 mb-1">
                  {/* Number circle inside card */}
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <span>{step.title}</span>
                </h4>
                <p className="text-gray-600 text-sm pl-9">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div variants={fadeInUp} className="mt-20 text-center">
        <motion.a
          href="#cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-medium text-lg"
        >
          <span className="text-white">Sign Up and Start Earning Now</span>
        </motion.a>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* FAQ Section */}
      <section
        id="faq"
        ref={faqRef}
        className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700">
                Got questions? We've got answers. If you don't see what you're looking for, reach out to our team.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        ref={ctaRef}
        className="py-20 md:py-32 bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              Join AfLynk Media Today
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl mb-10">
              Unlock the full potential of your affiliate business. With exclusive campaigns, flexible payouts, and
              dedicated support, you're just a few clicks away from transforming your earnings.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg"
              >
                Become a Publisher Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
                        className="h-6 w-6 text-orange-600"
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
                      <a href="mailto:contact@aflynk.com" className="text-orange-600 hover:underline">
                        contact@aflynk.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-600"
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
  <a href="tel:+918505846555" className="text-orange-600 hover:underline block">
    +91-85058 465555
  </a>
  <a href=" +91-7988540592" className="text-orange-600 hover:underline block">
    +91-7988540592
  </a>
</div>

                  </div>

                  <div className="flex items-start">
                    <div className="bg-transparent p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-600"
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
                      <p className="text-orange-600">
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
        <img
          src='footer.png'
          alt="AfLynk Media Logo"
          className="h-22 w-36 mb-4"
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
        className="fixed bottom-8 right-8 bg-orange-600 text-white p-3 rounded-full shadow-lg z-50"
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
