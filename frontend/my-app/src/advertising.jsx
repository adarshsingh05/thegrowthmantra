"use client"

import { useState, useEffect } from "react"
import {
  StarIcon,
  CheckCircleIcon,
  UsersIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  RefreshCcw,
} from "lucide-react"
import { Link } from "react-router-dom"
import {
  ChevronRight,
  ArrowRight,
  Globe,
  BarChart,
  Users,
  Zap,
  Shield,
  DollarSign,
  Award,
  Menu,
  X,
  TrendingUp,
  ChevronDown,
  Search,
  Rocket,
  Check,
  Star,
} from "lucide-react"

export default function AfLynkAdvertiser() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLogoIndex, setActiveLogoIndex] = useState(0)
  const [activeFaq, setActiveFaq] = useState(null)

  const logos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20%2B%20White-%20Aflynk%20Media-yCS0q4ibMChBmTmymtan4YTRn5yabb.png",
    "footer.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange%20Logo-%20Afflynk%20Media-kIeTpSt0INpu4Y0dbuSmue4FXUDsu4.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % logos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const whyChooseItems = [
    {
      title: "Exclusive Access to Top-Tier Publishers",
      description:
        "Our network of high-quality, vetted affiliates ensures that your campaigns reach the most qualified audiences for your vertical. We offer access to top publishers in iGaming, Crypto, Nutra, e-commerce, and BFSI, among others, allowing you to run highly-targeted campaigns with precision.",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Cutting-Edge Tracking & Analytics",
      description:
        "Make data-driven decisions with real-time tracking of your campaigns. AfLynk's robust analytics tools give you instant insights into conversions, traffic sources, and ROI. You'll never have to guess where your spend is going again.",
      icon: <BarChart className="h-8 w-8 text-white" />,
      color: "from-teal-500 to-emerald-600",
    },
    {
      title: "Global Reach & Diversified Verticals",
      description:
        "AfLynk is more than just a network — it's a global partner. We cover 50+ countries and offer multi-vertical solutions, making it easy to scale campaigns across markets. Whether you're looking for CPI, CPS, CPL, or CPA, we've got a performance model that fits your needs.",
      icon: <Globe className="h-8 w-8 text-white" />,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Real-Time Optimization & AI-Powered Tools",
      description:
        "AfLynk's advanced optimization tools utilize artificial intelligence to improve campaign performance on the fly. By analyzing trends in real-time, we ensure that your campaigns continue to evolve and maximize ROI throughout their lifecycle.",
      icon: <Zap className="h-8 w-8 text-white" />,
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Fraud-Free Advertising",
      description:
        "Protect your brand and budget with AfLynk. We ensure that your campaigns are free of fraudulent activity, guaranteeing that you pay for only authentic leads.",
      icon: <Shield className="h-8 w-8 text-white" />,
      color: "from-rose-500 to-pink-600",
    },
  ]

  const howItWorksSteps = [
    {
      title: "Sign Up",
      description:
        "Create your account in minutes. AfLynk's simple registration process ensures that you can start running campaigns quickly and without hassle.",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Browse Campaigns",
      description:
        "Choose from a wide array of exclusive offers in multiple verticals like iGaming, Travel, Crypto, and Nutra. Select the campaigns that fit your business goals.",
      icon: <Search className="h-8 w-8 text-white" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Launch Campaigns",
      description:
        "Set up your campaigns with the help of our expert team. AfLynk provides all the marketing assets you need to make your campaigns a success.",
      icon: <Rocket className="h-8 w-8 text-white" />,
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Optimize & Scale",
      description:
        "Use our real-time reporting tools to track performance and optimize your campaigns. Adjust targeting, budgets, and creatives as needed to scale effectively.",
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Get Results",
      description:
        "Watch your results unfold with high-converting traffic, flexible payout models, and verified leads. AfLynk ensures your campaigns run smoothly and deliver real business growth.",
      icon: <Award className="h-8 w-8 text-white" />,
      color: "from-emerald-500 to-green-500",
    },
  ]

  const faqItems = [
    {
      question: "What verticals does AfLynk cover?",
      answer:
        "AfLynk offers campaigns across various verticals, including iGaming, Crypto, E-commerce, BFSI, Nutra, and Travel. Our diverse network allows you to target specific audiences across multiple industries.",
    },
    {
      question: "How do I track my campaigns?",
      answer:
        "AfLynk provides real-time analytics and tracking tools, so you can monitor your campaigns and adjust them for optimal performance. Our dashboard gives you insights into conversions, traffic sources, and ROI in real-time.",
    },
    {
      question: "What payment models do you offer?",
      answer:
        "AfLynk offers CPI, CPS, CPL, CPA, and Revenue Share models to fit your business needs. We work with you to determine the best payment model for your specific campaign goals and budget.",
    },
    {
      question: "How do you ensure traffic quality?",
      answer:
        "We have a rigorous vetting process for all publishers in our network and employ advanced fraud detection systems. Our combination of AI tools and human oversight ensures you receive only high-quality, legitimate traffic.",
    },
    {
      question: "Can I target specific geographic regions?",
      answer:
        "Yes, AfLynk offers granular targeting options including geographic targeting across 50+ countries. You can focus your campaigns on specific regions, countries, or even cities to maximize relevance and conversion rates.",
    },
  ]

  const painPoints = [
    {
      title: "Struggling to scale your campaigns?",
      solution:
        "AfLynk's global affiliate network ensures your offers reach highly targeted audiences to drive consistent, scalable results.",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Concerned about ROI?",
      solution:
        "With real-time analytics and AI-powered optimization, we ensure your ad spend delivers maximum returns.",
      icon: <DollarSign className="h-6 w-6 text-white" />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Worried about fraud?",
      solution:
        "We provide industry-leading fraud prevention tools to protect your business and ensure authentic leads.",
      icon: <Shield className="h-6 w-6 text-white" />,
      color: "from-amber-500 to-orange-600",
    },
  ]

  const stats = [
    {
      value: "50+",
      label: "Countries Covered",
      icon: <Globe className="h-6 w-6 text-teal-500" />,
    },
    {
      value: "12+",
      label: "Years Experience",
      icon: <Award className="h-6 w-6 text-blue-500" />,
    },
    {
      value: "1M+",
      label: "Monthly Conversions",
      icon: <TrendingUp className="h-6 w-6 text-indigo-500" />,
    },
    {
      value: "500+",
      label: "Active Advertisers",
      icon: <Users className="h-6 w-6 text-purple-500" />,
    },
    {
      value: "100M+",
      label: "App Downloads Driven",
      icon: <Globe className="h-6 w-6 text-teal-500" />,
    },
    {
      value: "3M+",
      label: "Verified Transaction Tracked",
      icon: <Award className="h-6 w-6 text-teal-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <title>Advertise with AfLynk Media | Scale Globally with High-Intent Traffic</title>
      <meta
        name="description"
        content="Partner with AfLynk to acquire high-quality leads and users at scale. Our premium publisher network drives performance across 20+ verticals—iGaming, Crypto, Ecommerce, BFSI, and more. Transparent, data-driven, and ROI-focused."
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logos[1] || "/placeholder.svg"} alt="AfLynk Media Logo" className="h-12 md:h-14" />
          </div>

          {/* Desktop Navigation + CTA */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="hidden md:flex flex-grow justify-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Home
              </Link>
              <a href="/advertiser" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Advertisers
              </a>
              <Link to="/publisher" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Publisher
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Contact
              </Link>
              <Link to="/aboutus" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                About Us
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#cta"
            className="hidden md:flex bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium items-center hover:shadow-lg transition-shadow"
          >
            <span>Start Advertising</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
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
                href="/contact"
                className="relative overflow-hidden bg-white/10 backdrop-blur-sm text-black border-2 border-white/20 px-8 py-4 rounded-full font-medium flex items-center justify-center group"
              >
                <span className="relative z-10">Schedule a Demo</span>
                <div className="absolute right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-black" />
                </div>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Static Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-teal-500/20">
                <span className="text-teal-600 font-medium">Performance Marketing Excellence</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">
                Supercharge Your Brand's Growth with AfLynk Media
              </h1>

              <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
                Unlock a world of performance-driven marketing with high-converting affiliates across multiple global
                verticals. Your perfect advertising partner is just one click away.
              </h2>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
                <a
                  href="#cta"
                  className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center shadow-xl group hover:shadow-2xl transition-shadow"
                >
                  <span className="relative z-10 text-white mr-6">Start Advertising with AfLynk</span>
                  <div className="absolute right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </a>

                <a
                  href="#why-choose"
                  className="relative overflow-hidden bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center group hover:bg-gray-50 transition-colors"
                >
                  <span className="relative z-10 mr-6">Learn More</span>
                  <div className="absolute right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-gray-600" />
                  </div>
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-teal-500/30 rounded-full blur-xl"></div>

                {/* Main image with frame */}
                <div className="relative bg-gradient-to-r from-teal-500 to-blue-500 p-1 rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl opacity-70 blur-xl -z-10"></div>

                  <div className="relative bg-white rounded-2xl overflow-hidden">
                    <img
                      src="advertiser.png"
                      alt="AfLynk Advertiser Dashboard"
                      className="w-full h-[550px] object-contain z-10"
                    />

                    {/* Static overlay elements */}
                    <div className="absolute top-5 right-5 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      +450$ Today
                    </div>

                    <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium shadow-lg flex items-center">
                      <TrendingUp className="h-4 w-4 text-teal-500 mr-2" />
                      <span className="text-gray-800">App Downloads: 100M+</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -right-10 top-1/3 bg-white rounded-xl shadow-lg p-3 flex items-center">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Verified Transactions</div>
                    <div className="text-sm font-semibold ml-4">3M+</div>
                  </div>
                </div>

                <div className="absolute -left-10 bottom-1/4 bg-white rounded-xl shadow-lg p-3 flex items-center">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <DollarSign className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Qualified Lead</div>
                    <div className="text-sm font-semibold">10M+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Static scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-gray-500 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center relative overflow-hidden group hover:shadow-2xl transition-shadow"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block font-2xl mb-4 px-4 py-1 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-teal-500/20">
                <span className="text-teal-600 font-bold">Why Choose AfLynk ?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Welcome to AfLynk Media — The Premier Performance Marketing Network
              </h2>
              <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
                AfLynk gives you access to the world's most effective affiliate marketers, equipped with tools that
                enable you to maximize your ROI. Whether you're in iGaming, Crypto, e-commerce, BFSI, Nutra, or Travel,
                we offer high-converting traffic and data-driven insights to help you grow your brand and reach new
                heights.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 group hover:shadow-2xl transition-shadow"
                >
                  <div
                    className={`bg-gradient-to-r ${point.color} p-6 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{point.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700">{point.solution}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-xl">
              <div>
                <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-teal-500/20">
                  <span className="text-teal-600 font-medium">Data-Driven Approach</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Real-Time Analytics & Insights</h3>
                <p className="text-gray-700 mb-6">
                  At AfLynk, we believe in the power of data to drive results. Our platform provides real-time insights
                  and analytics that help you make informed decisions about your campaigns.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparent reporting</h4>
                      <p className="text-gray-600 text-sm">Complete visibility into campaign performance metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">AI-powered optimization</h4>
                      <p className="text-gray-600 text-sm">
                        Machine learning algorithms that improve campaign performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fraud detection</h4>
                      <p className="text-gray-600 text-sm">
                        Advanced systems to ensure traffic quality and protect your budget
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-300/20 to-blue-300/20 rounded-xl blur-xl -z-10"></div>
                <div className="relative bg-white p-1 rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
                  <img src="graph.png" alt="Performance Analytics" className="w-full h-auto rounded-lg" />
                </div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a1esmalp-eevTDvFEmLp7Lv3d7BoqvFCAv0Tprc.png"
                    alt="Money Icon"
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AfLynk Section */}
      <section id="why-choose" className="py-24 md:py-36 overflow-hidden relative">
        {/* Static Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950"></div>
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-indigo-500/20"></div>

          {/* Static particle effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-60"
                style={{
                  width: Math.random() * 3 + 1 + "px",
                  height: Math.random() * 3 + 1 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>
        </div>

        {/* Banner at the top of the section */}
        <div className="absolute top-0 left-0 w-full h-16 md:h-20 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 opacity-90">
          <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-center md:justify-between">
            <h3 className="text-white font-bold text-xl md:text-2xl tracking-wide hidden md:block">AfLynk Advantage</h3>
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 text-yellow-300 mr-1" />
                <span className="text-white text-sm md:text-base font-medium">100M+ App Downloads Driven</span>
              </div>
              <div className="hidden md:flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-1" />
                <span className="text-white text-sm md:text-base font-medium">12+ Years of Industry Mastery</span>
              </div>
              <div className="flex items-center">
                <UsersIcon className="w-5 h-5 text-blue-300 mr-1" />
                <span className="text-white text-sm md:text-base font-medium"> 3M+ Verified Transactions Tracked</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-16 md:pt-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-4 px-6 py-2 bg-white/15 rounded-full backdrop-blur-md border border-white/30 shadow-lg">
                <span className="text-gray-600 font-medium tracking-wide text-base md:text-lg">PREMIUM ADVANTAGE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
                Why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">AfLynk</span>{" "}
                <span className="text-black"> is the Top Choice for Advertisers </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-600 max-w-4xl mx-auto font-light leading-relaxed">
                AfLynk Media delivers transparent, data-driven, and high-performance advertising solutions that elevate
                your marketing strategy to new heights.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {whyChooseItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/30 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    <div className="flex justify-center md:justify-start">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 duration-300`}
                      >
                        <div className="text-3xl text-black">{item.icon}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black tracking-tight">{item.title}</h3>
                      <p className="text-blue-400 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} rounded-bl-3xl opacity-40`}
                  ></div>

                  {/* Pattern */}
                  <div className="absolute bottom-0 left-0 w-full h-24 opacity-10">
                    <svg width="100%" height="100%" className="text-white">
                      <defs>
                        <pattern
                          id={`pattern-${index}`}
                          x="0"
                          y="0"
                          width="10"
                          height="10"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="1" cy="1" r="1" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-10 border border-white/30 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-teal-500/30 via-blue-500/30 to-indigo-500/30"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4ts33ur6-UYrkQrmLO4v6G7cN66K7r4hMTOYuwr.png"
                        alt="Team Collaboration"
                        className="w-56 h-auto object-contain rounded-lg shadow-lg"
                      />
                      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 opacity-30 blur-lg"></div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-black tracking-tight">
                    Partner with the Industry Leader
                  </h3>
                  <p className="text-blue-600 text-xl mb-10 max-w-3xl mx-auto">
                    Join hundreds of successful advertisers who have transformed their marketing performance with
                    AfLynk. Our expert team is ready to help you achieve exceptional results.
                  </p>

                  <a
                    href="#cta"
                    className="relative overflow-hidden inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl group hover:shadow-3xl transition-shadow"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Become an Advertiser Today
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-30 blur-md"></div>
                  </a>

                  {/* Trust indicators */}
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-full flex items-center">
                      <ShieldCheckIcon className="w-5 h-5 text-teal-400 mr-2" />
                      <span className="text-black text-sm">Secure & Trusted</span>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-full flex items-center">
                      <ClockIcon className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-black text-sm">24/7 Support</span>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-full flex items-center">
                      <RefreshCcw className="w-5 h-5 text-indigo-400 mr-2" />
                      <span className="text-black text-sm">Money-Back Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial banner */}
            <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-6 shadow-xl border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white text-lg font-medium italic">
                    "AfLynk transformed our digital strategy with a 247% increase in conversion rates in just 3 months."
                  </p>
                  <div className="mt-2 text-blue-200 text-sm">Sarah Johnson, CMO at TechLead Solutions</div>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                    Read Success Stories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-blue-900 opacity-20"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              className="fill-indigo-900 opacity-30"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-blue-950 opacity-40"
            />
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-teal-500/20">
                <span className="text-teal-600 font-medium">Simple Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">How It Works – Step-by-Step</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Getting started with AfLynk as an advertiser is easy. Here's how it works:
              </p>
            </div>

            <div className="relative">
              {/* Connection Line - desktop only */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-blue-500 to-indigo-500 hidden md:block transform -translate-x-1/2 rounded-full"></div>

              <div className="space-y-16 md:space-y-24 relative">
                {howItWorksSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center gap-8`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-white p-6 rounded-xl shadow-xl inline-block relative group hover:shadow-2xl transition-shadow">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-300"></div>

                        {/* Mobile version - number to the left of heading */}
                        <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3 md:hidden">
                          <div
                            className={`w-8 h-8 min-w-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                          >
                            {index + 1}
                          </div>
                          <span>{step.title}</span>
                        </h3>

                        {/* Desktop version */}
                        <h3 className="text-2xl font-semibold mb-3 items-center gap-3 hidden md:flex">
                          {index % 2 === 0 ? (
                            <>
                              <span>{step.title}</span>
                              <div
                                className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                              >
                                {step.icon}
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                              >
                                {step.icon}
                              </div>
                              <span>{step.title}</span>
                            </>
                          )}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>

                    {/* Number circles - desktop only */}
                    <div className="md:w-12 relative hidden md:block">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl z-10 relative shadow-lg hover:scale-120 transition-transform`}
                      >
                        {index + 1}
                      </div>
                      <div
                        className={`absolute top-0 left-0 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} opacity-60`}
                      />
                    </div>

                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 text-center">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl max-w-4xl mx-auto shadow-xl relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-300/20 rounded-full blur-xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300/20 rounded-full blur-xl -z-10"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="hover:scale-110 hover:rotate-5 transition-transform">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai16tfmt-LdN1PGv0ei4nxw0k2wftycQAEe7edY.png"
                        alt="Network Reach"
                        className="w-32 h-auto object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Amplify Your Marketing?</h3>
                  <p className="text-gray-700 mb-8">
                    Join our network of successful advertisers and start seeing real results. Our team is ready to help
                    you launch your first campaign.
                  </p>
                  <a
                    href="#cta"
                    className="relative overflow-hidden inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg shadow-xl group md:h-16 hover:shadow-2xl transition-shadow"
                  >
                    <span className="relative z-10">Start Advertising with AfLynk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-teal-500/20">
                <span className="text-teal-600 font-medium">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700">
                Got questions? We've got answers. If you don't see what you're looking for, reach out to our team.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className={`border ${
                    activeFaq === index ? "border-teal-500 shadow-lg" : "border-gray-200"
                  } rounded-xl overflow-hidden transition-all duration-300 bg-white`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 md:px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <h3 className={`text-xl font-semibold ${activeFaq === index ? "text-teal-600" : "text-gray-800"}`}>
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        activeFaq === index
                          ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          activeFaq === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-6">
                Still have questions? Our team is here to help you get started with AfLynk.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 group"
              >
                Contact our support team
                <span className="ml-2 group-hover:ml-3 transition-all duration-300">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 md:py-32 relative overflow-hidden">
        {/* Static Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700"></div>
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-white/30 via-white/20 to-white/10"></div>

          {/* Static floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <span className="text-black text-2xl font-medium">Take the Next Step</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Stop Missing Out on High-Quality Affiliates, Global Reach, and Maximum ROI
            </h2>

            <p className="text-xl text-black mb-12">
              AfLynk Media is the perfect partner to help you scale your brand with data-driven results. Take your
              advertising campaigns to the next level with AfLynk.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href="/contact"
                className="relative overflow-hidden text-teal-600 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center shadow-xl group hover:shadow-2xl transition-shadow"
              >
                <span className="relative z-10 md:mr-6">Start Advertising Now</span>
                <div className="absolute right-4 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-teal-600" />
                </div>
              </a>

              <a
                href="/contact"
                className="relative overflow-hidden bg-white/10 backdrop-blur-sm text-black border-2 border-white/20 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center group hover:bg-white/20 transition-colors"
              >
                <div className="absolute right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"></div>
              </a>
            </div>

            {/* Static floating badges */}
            <div className="mt-16 relative">
              <div className="hidden md:flex absolute -top-10 -left-20 text-black backdrop-blur-sm rounded-lg shadow-lg p-3 items-center">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Trusted by</div>
                  <div className="text-sm font-semibold">500+ Advertisers</div>
                </div>
              </div>

              <div className="hidden md:flex absolute mb-4 -bottom-10 -right-20 text-black backdrop-blur-sm rounded-lg shadow-lg p-3 items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Globe className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Global Reach</div>
                  <div className="text-sm font-semibold">50+ Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="footer.png" alt="AfLynk Media Logo" className="h-22 w-36 mb-4" />
              <p className="text-gray-400 text-sm">AfLynk Media LLP </p>
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
                  +91-7988540592{" "}
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
              <p className="text-gray-400 text-sm text-center md:text-left">&copy; 2025 AfLynk Media LLP</p>

              <p className="text-gray-400 text-sm text-center order-3 md:order-none">Made with ❤️ in India</p>

              <p className="text-gray-400 text-sm text-center md:text-right">All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-3 rounded-full shadow-lg z-50 hover:scale-110 hover:shadow-xl transition-all"
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
      </a>
    </div>
  )
}
