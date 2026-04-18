"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, BookOpen, FileText, LayoutDashboard, ShieldCheck, Users, Github } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Features", id: "features" },
              { name: "Products", id: "products" },
              { name: "Metrics", id: "metrics" },
              { name: "Testimonials", id: "testimonials" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "contact" },
              { name: "GitHub", id: "github" }
            ]}
            brandName="EduStream"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCentered
            background={{ variant: "sparkles-gradient" }}
            title="Master Your Future with EduStream"
            description="Powerful LMS built on MERN. Enroll in professional courses, track your progress, and earn certified qualifications."
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/portrait-asian-girl-with-tablet-drinks-coffee-street-walking-city-centre_1258-124748.jpg", alt: "Student" },
              { src: "http://img.b2bpic.net/free-photo/close-up-shot-happy-emotive-young-african-american-guy-with-afro-hairstyle-bristle-smiling-broadly-while-wearing-denim-coat-backpack-walking-across-park-festival_176420-19819.jpg", alt: "Student" },
              { src: "http://img.b2bpic.net/free-photo/portrait-female-business-executive-with-arms-crossed_1170-1133.jpg", alt: "Student" },
              { src: "http://img.b2bpic.net/free-photo/woman-sitting-library-couch_273609-12733.jpg", alt: "Student" },
              { src: "http://img.b2bpic.net/free-photo/weather-effects-collage-concept_23-2150062191.jpg", alt: "Student" }
            ]}
            avatarText="Trusted by 5,000+ students"
            buttons={[{ text: "Get Started", href: "#products" }, { text: "Learn More", href: "#about" }, { text: "View on GitHub", href: "https://github.com/" }]}
            marqueeItems={[{ type: "text", text: "React.js" }, { type: "text", text: "Node.js" }, { type: "text", text: "MongoDB" }, { type: "text", text: "Express" }, { type: "text", text: "Cloud Ready" }]}
          />
        </div>

        <div id="about" data-section="about">
          <AboutMetric
            useInvertedBackground={true}
            title="Our Impact"
            metrics={[
              { icon: BookOpen, label: "Active Courses", value: "150+" },
              { icon: Users, label: "Enrolled Students", value: "5k+" },
              { icon: Award, label: "Certificates Issued", value: "2k+" }
            ]}
            metricsAnimation="slide-up"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureBento
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "Secure Auth", description: "JWT-powered authentication.", bentoComponent: "reveal-icon", icon: ShieldCheck },
              { title: "Interactive Dashboard", description: "Track progress.", bentoComponent: "reveal-icon", icon: LayoutDashboard },
              { title: "Certified Results", description: "Auto-generate certificates.", bentoComponent: "reveal-icon", icon: FileText }
            ]}
            title="Core Features"
            description="Everything an LMS needs to facilitate learning."
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={true}
            products={[
              { id: "p1", name: "React & Node Web Dev", price: "Free", imageSrc: "http://img.b2bpic.net/free-photo/retro-computer-icon-isolated_53876-71278.jpg" },
              { id: "p2", name: "Data Science", price: "$49", imageSrc: "http://img.b2bpic.net/free-photo/strategy-performance-target-report-analytics-concept_53876-163287.jpg" },
              { id: "p3", name: "UX/UI Design", price: "$39", imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg" }
            ]}
            title="Top Courses"
            description="Industry-standard courses."
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardTwo
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            metrics={[
              { id: "m1", value: "98%", description: "Completion Rate" },
              { id: "m2", value: "4.9/5", description: "Satisfaction" },
              { id: "m3", value: "24/7", description: "Support" }
            ]}
            title="Learning Progress"
            description="Track your journey."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            useInvertedBackground={true}
            testimonials={[
              { id: "t1", name: "Sarah J.", imageSrc: "http://img.b2bpic.net/free-photo/people-working-as-team-company_23-2149136890.jpg" },
              { id: "t2", name: "Michael R.", imageSrc: "http://img.b2bpic.net/free-photo/side-view-latin-friends-hanging-out_23-2151139410.jpg" },
              { id: "t3", name: "Elena K.", imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-young-woman-outdoor-with-headphones_624325-2762.jpg" },
              { id: "t4", name: "David M.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-her-room-sits-indoors-records-video-digital-camera-holds-notebook_1258-255085.jpg" },
              { id: "t5", name: "Chloe S.", imageSrc: "http://img.b2bpic.net/free-photo/blonde-young-woman-smiling-portrait-wearing-blue-gentle-shirt-building_158595-6609.jpg" }
            ]}
            cardTitle="What Students Say"
            cardTag="Testimonials"
            cardAnimation="slide-up"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={false}
            faqs={[
              { id: "q1", title: "How do I enroll?", content: "Register as a student." },
              { id: "q2", title: "Official certificate?", content: "Yes, verified certificates." },
              { id: "q3", title: "Track progress?", content: "Via student dashboard." }
            ]}
            sideTitle="Frequently Asked Questions"
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            useInvertedBackground={true}
            background={{ variant: "sparkles-gradient" }}
            text="Ready to launch your learning journey?"
            buttons={[{ text: "Contact Support", href: "mailto:hello@edustream.com" }, { text: "Follow on GitHub", href: "https://github.com/" }]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoText="EduStream"
            leftLink={{ text: "Privacy Policy", href: "#" }}
            rightLink={{ text: "Terms of Service", href: "#" }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
