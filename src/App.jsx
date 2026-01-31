import { motion } from 'framer-motion'
import { 
  ExclamationTriangleIcon, 
  ScaleIcon, 
  UserMinusIcon, 
  ChartBarIcon, 
  BuildingOfficeIcon, 
  ArrowTrendingDownIcon,
  BellAlertIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  DocumentTextIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

// Logo Component
function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="4" height="24" rx="1" fill="#1E293B"/>
        <path d="M8 6h18l-4 6 4 6H8V6z" fill="#DC2626"/>
      </svg>
      <span className="text-xl font-bold">
        <span className="text-flag-red">Red</span>
        <span className="text-navy">Flag</span>
      </span>
    </div>
  )
}

// Navigation
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate hover:text-navy transition-colors">Features</a>
          <a href="#how-it-works" className="text-slate hover:text-navy transition-colors">How It Works</a>
          <a href="#pricing" className="text-slate hover:text-navy transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-slate hover:text-navy transition-colors hidden sm:block">Sign In</a>
          <a href="#pricing" className="bg-flag-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Try Free
          </a>
        </div>
      </div>
    </nav>
  )
}

// Animated Stock Report Demo
function AnimatedStockDemo() {
  const flags = [
    { icon: ScaleIcon, label: "Legal Risk", score: 8, color: "bg-flag-red" },
    { icon: UserMinusIcon, label: "Insider Selling", score: 7, color: "bg-amber" },
    { icon: ChartBarIcon, label: "Financial", score: 5, color: "bg-amber" },
  ]

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="font-mono text-lg font-semibold text-navy">ACME</span>
          <span className="text-slate text-sm ml-2">ACME Corporation</span>
        </div>
        <motion.div 
          className="text-xs text-slate flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ClockIcon className="w-3 h-3" />
          Just now
        </motion.div>
      </div>

      {/* Risk Score */}
      <motion.div 
        className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <ExclamationTriangleIcon className="w-5 h-5 text-flag-red" />
          <span className="text-sm font-medium text-flag-red uppercase tracking-wide">Risk Score</span>
        </div>
        <motion.div 
          className="text-4xl font-bold text-flag-red"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            7.8
          </motion.span>
          <span className="text-xl text-red-400"> / 10</span>
        </motion.div>
        <div className="text-sm font-semibold text-flag-red mt-1">HIGH RISK</div>
      </motion.div>

      {/* Flags */}
      <div className="space-y-3">
        {flags.map((flag, i) => (
          <motion.div 
            key={flag.label}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 ${flag.color} rounded-lg flex items-center justify-center`}>
                <flag.icon className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-navy text-sm">{flag.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold text-slate">{flag.score}/10</span>
              <motion.div 
                className={`w-2 h-2 rounded-full ${flag.color}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 + i * 0.2, type: "spring" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scanning Animation */}
      <motion.div 
        className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-slate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <SparklesIcon className="w-4 h-4 text-sky" />
        </motion.div>
        Scanned 50+ risk sources
      </motion.div>
    </motion.div>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                See the risks{' '}
                <span className="text-flag-red">before</span> you buy.
              </h1>
              <p className="text-lg text-slate mb-8 leading-relaxed">
                AI-powered stock scanner that finds lawsuits, insider selling, and warning signs you might miss. 
                Think of it as a background check for stocks.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#pricing" 
                  className="bg-flag-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                >
                  Try Free
                </a>
                <a 
                  href="#how-it-works" 
                  className="bg-white text-navy px-8 py-3 rounded-lg font-semibold border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  See Demo
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-emerald" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-emerald" />
                  5 free reports/month
                </div>
              </div>
            </motion.div>
          </div>
          <div>
            <AnimatedStockDemo />
          </div>
        </div>
      </div>
    </section>
  )
}

// Stats Banner
function StatsBanner() {
  const stats = [
    { value: "127,000+", label: "Red flags detected" },
    { value: "50+", label: "Risk sources scanned" },
    { value: "10,000+", label: "Stocks analyzed" },
  ]

  return (
    <section className="py-12 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works
function HowItWorks() {
  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: "Enter Ticker",
      description: "Type any stock symbol — AAPL, TSLA, or that hot tip from Reddit."
    },
    {
      icon: SparklesIcon,
      title: "AI Scans",
      description: "We check 50+ sources: lawsuits, SEC filings, insider trades, news, and more."
    },
    {
      icon: DocumentTextIcon,
      title: "Get Report",
      description: "See all red flags in seconds with severity scores and source links."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Get a complete risk assessment in under 30 seconds
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-flag-red/10 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-flag-red" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-flag-red text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-slate">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Grid
function Features() {
  const features = [
    {
      icon: ScaleIcon,
      title: "Legal Risk Detection",
      description: "Lawsuits, SEC investigations, regulatory actions — we find them all."
    },
    {
      icon: UserMinusIcon,
      title: "Insider Activity Tracking",
      description: "See when executives sell. Patterns speak louder than press releases."
    },
    {
      icon: ChartBarIcon,
      title: "Financial Health Signals",
      description: "Debt ratios, cash burn, accounting red flags analyzed automatically."
    },
    {
      icon: BellAlertIcon,
      title: "Real-time Alerts",
      description: "Get notified when new risks appear on your watchlist stocks."
    },
    {
      icon: BuildingOfficeIcon,
      title: "Operational Insights",
      description: "Employee sentiment, executive turnover, customer complaints."
    },
    {
      icon: ArrowTrendingDownIcon,
      title: "Market Signals",
      description: "Short interest spikes, analyst downgrades, unusual options activity."
    }
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Every risk, one dashboard
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            We aggregate warning signs from 50+ sources so you don't have to dig through SEC filings yourself.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.title}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{feature.title}</h3>
              <p className="text-slate text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials
function Testimonials() {
  const testimonials = [
    {
      quote: "I wish I had RedFlag before I bought Peloton at $150. Would have saved me $40,000.",
      author: "Michael R.",
      role: "Retail Investor"
    },
    {
      quote: "Finally, a tool that focuses on what could go wrong instead of pumping stocks.",
      author: "Sarah K.",
      role: "Financial Advisor"
    },
    {
      quote: "The insider selling alerts alone are worth the subscription. Saved me twice already.",
      author: "David L.",
      role: "Day Trader"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Don't learn the hard way
          </h2>
          <p className="text-lg text-slate">
            Join investors who check before they buy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.author}
              className="bg-white rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-navy mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-navy">{testimonial.author}</div>
                <div className="text-sm text-slate">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing
function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Try before you commit",
      features: [
        "5 stock reports/month",
        "Basic risk score",
        "Limited source details"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For serious investors",
      features: [
        "Unlimited reports",
        "All risk categories",
        "20-stock watchlist",
        "Email alerts",
        "1 year historical data"
      ],
      cta: "Upgrade to Pro",
      popular: true
    },
    {
      name: "Premium",
      price: "$49",
      period: "/month",
      description: "For professionals",
      features: [
        "Everything in Pro",
        "100-stock watchlist",
        "Real-time alerts",
        "API access",
        "Priority support",
        "5 years historical data"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-navy text-white ring-4 ring-flag-red' 
                  : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-flag-red text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-navy'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-navy'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-gray-300' : 'text-slate'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? 'text-gray-300' : 'text-slate'}`}>
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircleIcon className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-emerald' : 'text-emerald'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-slate'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-flag-red text-white hover:bg-red-700' 
                    : 'bg-navy text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section className="py-20 px-4 bg-navy">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop buying blind
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Every stock has a story. Make sure you know the whole story — including the parts they don't advertise.
          </p>
          <a 
            href="#pricing" 
            className="inline-block bg-flag-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
          >
            Start Scanning Free →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="mb-4 [&_span]:text-white" />
            <p className="text-sm">
              See the risks before you buy. AI-powered stock risk analysis for retail investors.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © 2026 RedFlag. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            RedFlag is not investment advice. Always do your own research.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Nav />
      <Hero />
      <StatsBanner />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
