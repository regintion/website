import { motion } from "motion/react";
import { useState } from "react";
import { ModernNavigationBar } from "./components/sections/ModernNavigationBar";
import { ModernHeroSection } from "./components/sections/ModernHeroSection";
import { TDBNewsSection } from "./components/sections/TDBNewsSection";
import { QuarterlyEarningsSection } from "./components/sections/QuarterlyEarningsSection";
import { InvestorDaySection } from "./components/sections/InvestorDaySection";
import { EventsPresentationsSection } from "./components/sections/EventsPresentationsSection";
import { AnnualReportsSection } from "./components/sections/AnnualReportsSection";
import { ShareholderInfoSection } from "./components/sections/ShareholderInfoSection";
import { TDBPerformanceSection } from "./components/sections/TDBPerformanceSection";
import { NewsletterSignupSection } from "./components/sections/NewsletterSignupSection";
import { ModernFooter } from "./components/sections/ModernFooter";
import bankLogo from 'figma:asset/bb82525bc7caa35b46b45cfecc3ef037efe23e38.png';

export default function App() {
  const [activeSection, setActiveSection] = useState("investor-relations");

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      {/* Premium Dark Luxury Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep Black Base with Diagonal Navy Blue Gradient */}
        <div className="absolute inset-0" style={{ background: '#0a0a0a' }}>
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, #0a0a0a 0%, #001f3f 25%, #0a0a0a 50%, #001f3f 75%, #0a0a0a 100%),
                radial-gradient(circle at 25% 25%, rgba(0, 31, 63, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(0, 166, 81, 0.2) 0%, transparent 60%),
                radial-gradient(circle at 50% 0%, rgba(0, 31, 63, 0.3) 0%, transparent 70%)
              `
            }}
          />
        </div>

        {/* Luxury Banking Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px', '0px 0px'],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            backgroundImage: `
              linear-gradient(rgba(0, 166, 81, 0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 166, 81, 0.25) 1px, transparent 1px),
              linear-gradient(rgba(0, 31, 63, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 31, 63, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 200px 200px, 200px 200px'
          }}
        />

        {/* Premium Eco Leaf Patterns */}
        <div className="absolute inset-0 opacity-[0.02]">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${10 + (i * 6)}%`,
                left: `${8 + (i * 6.2)}%`,
                width: '20px',
                height: '30px',
                background: i % 4 === 0 ? 'rgba(0, 166, 81, 0.3)' : 
                           i % 4 === 1 ? 'rgba(0, 31, 63, 0.2)' :
                           i % 4 === 2 ? 'rgba(0, 138, 68, 0.25)' : 'rgba(0, 204, 102, 0.2)',
                clipPath: 'polygon(50% 0%, 85% 25%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 15% 25%)',
                borderRadius: '50% 20% 50% 20%'
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.2, 0.4, 0.15, 0.2],
                y: [0, -15, 10, 0],
                x: [0, 8, -5, 0]
              }}
              transition={{
                duration: 25 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}
        </div>

        {/* Luxury Organic Atmospheric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full opacity-[0.06]"
            style={{
              background: `
                radial-gradient(circle, 
                  rgba(0, 31, 63, 0.4) 0%, 
                  rgba(0, 166, 81, 0.2) 30%, 
                  rgba(0, 31, 63, 0.15) 60%, 
                  transparent 80%
                )
              `,
              filter: 'blur(120px)'
            }}
            animate={{
              scale: [1, 1.3, 1.1, 1],
              x: [0, 40, -20, 0],
              y: [0, -30, 15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute -bottom-60 -left-60 w-[800px] h-[800px] rounded-full opacity-[0.05]"
            style={{
              background: `
                radial-gradient(circle, 
                  rgba(0, 166, 81, 0.3) 0%, 
                  rgba(0, 31, 63, 0.2) 40%, 
                  rgba(0, 138, 68, 0.15) 70%, 
                  transparent 85%
                )
              `,
              filter: 'blur(140px)'
            }}
            animate={{
              scale: [1, 1.2, 1.4, 1],
              x: [0, -30, 10, 0],
              y: [0, 25, -10, 0],
              rotate: [0, -120, -240, -360]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8
            }}
          />

          <motion.div
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04]"
            style={{
              background: `
                radial-gradient(circle, 
                  rgba(0, 204, 102, 0.25) 0%, 
                  rgba(0, 31, 63, 0.15) 50%, 
                  transparent 75%
                )
              `,
              filter: 'blur(100px)'
            }}
            animate={{
              scale: [1, 1.15, 0.9, 1],
              x: [0, 20, -15, 0],
              y: [0, -15, 20, 0],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 15
            }}
          />
        </div>

        {/* Glowing Green Accent Lines */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-0.5 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(0, 166, 81, 0.6) 20%, rgba(0, 204, 102, 0.8) 50%, rgba(0, 166, 81, 0.6) 80%, transparent 100%)',
            boxShadow: '0 0 20px rgba(0, 166, 81, 0.4), 0 0 40px rgba(0, 166, 81, 0.2)'
          }}
          animate={{
            opacity: [0.5, 1, 0.7, 0.5],
            scaleX: [1, 1.05, 1.02, 1],
            boxShadow: [
              '0 0 20px rgba(0, 166, 81, 0.4), 0 0 40px rgba(0, 166, 81, 0.2)',
              '0 0 30px rgba(0, 204, 102, 0.6), 0 0 60px rgba(0, 204, 102, 0.3)',
              '0 0 25px rgba(0, 166, 81, 0.5), 0 0 50px rgba(0, 166, 81, 0.25)',
              '0 0 20px rgba(0, 166, 81, 0.4), 0 0 40px rgba(0, 166, 81, 0.2)'
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className="fixed bottom-0 left-0 right-0 h-0.5 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(0, 31, 63, 0.7) 30%, rgba(0, 166, 81, 0.8) 50%, rgba(0, 31, 63, 0.7) 70%, transparent 100%)',
            boxShadow: '0 0 25px rgba(0, 166, 81, 0.4), 0 0 50px rgba(0, 31, 63, 0.2)'
          }}
          animate={{
            opacity: [0.6, 1, 0.8, 0.6],
            scaleX: [1, 1.08, 1.04, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />

        {/* Luxury Banking Technology Circuit Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.015]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0, 166, 81, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 80% 70%, rgba(0, 31, 63, 0.25) 1.5px, transparent 1.5px),
              radial-gradient(circle at 50% 20%, rgba(0, 204, 102, 0.2) 1px, transparent 1px),
              linear-gradient(45deg, rgba(0, 138, 68, 0.08) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(0, 31, 63, 0.06) 25%, transparent 25%)
            `,
            backgroundSize: '120px 120px, 80px 80px, 60px 60px, 100px 100px, 100px 100px'
          }}
        />

        {/* Premium Banking Atmospheric Glow */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1.05, 1],
            opacity: [0.2, 0.4, 0.3, 0.2],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-[900px] h-[900px] rounded-full"
            style={{
              background: `
                radial-gradient(circle, 
                  rgba(0, 166, 81, 0.08) 0%, 
                  rgba(0, 31, 63, 0.06) 30%, 
                  rgba(0, 138, 68, 0.04) 60%, 
                  rgba(0, 204, 102, 0.03) 80%, 
                  transparent 95%
                )
              `,
              filter: 'blur(90px)'
            }}
          />
        </motion.div>

        {/* Subtle Animated Gradient Overlays */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(0, 166, 81, 0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 60%, rgba(0, 31, 63, 0.04) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 30%, rgba(0, 204, 102, 0.025) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 40%, rgba(0, 166, 81, 0.03) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Premium Navigation */}
        <ModernNavigationBar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Page Content */}
        <main>
          {/* Hero Section with Large Logo Watermark */}
          <ModernHeroSection bankLogo={bankLogo} />

          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* TDB News & Updates */}
            <TDBNewsSection />

            {/* Quarterly Earnings Section */}
            <QuarterlyEarningsSection />

            {/* Investor Day Section */}
            <InvestorDaySection />

            {/* Events & Presentations */}
            <EventsPresentationsSection />

            {/* Annual Reports */}
            <AnnualReportsSection />

            {/* Shareholder Information */}
            <ShareholderInfoSection />

            {/* TDB Annual Performance */}
            <TDBPerformanceSection />

            {/* Newsletter Signup */}
            <NewsletterSignupSection />
          </div>
        </main>

        {/* Premium Footer with Logo Watermark */}
        <ModernFooter bankLogo={bankLogo} />
      </div>
    </div>
  );
}