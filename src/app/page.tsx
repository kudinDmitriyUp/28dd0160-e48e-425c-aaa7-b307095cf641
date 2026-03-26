"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Leaf, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
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
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "hero" },
              { name: "Our Story", id: "about" },
              { name: "Products", id: "products" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Lumina Skincare"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogoBillboard
            logoText="Lumina Skincare"
            description="Reveal your natural radiance with our sustainably sourced, organic skincare formulations designed for daily harmony."
            buttons={[
              { text: "Shop Collection", href: "#products" },
              { text: "Our Philosophy", href: "#about" },
            ]}
            buttonAnimation="slide-up"
            background={{ variant: "plain" }}
            imageSrc="https://pixabay.com/get/g5f13a9fa511dcf4abac398237df089cad91a8b636d7c13f6650104b4d4283c12db6a95002827a9f42ced57c8604ac1a2c094c34be6c02c2c4fe7d5a1ab2d85b3_1280.jpg"
            mediaAnimation="blur-reveal"
          />
        </div>

        <div id="about" data-section="about">
          <InlineImageSplitTextAbout
            heading={[
              { type: "text", content: "Pure Ingredients for " },
              { type: "image", src: "https://pixabay.com/get/gbed88515f002e3ee1a196e5782b12ce0b318c5c45e61981b8f24ed3783e7bde5bf787a58d6d56a0846217a815bd083d07c93021f606fa241e015c391441ec7e4_1280.jpg", alt: "Skincare Ingredients" },
              { type: "text", content: " a Radiant Life" },
            ]}
            buttons={[{ text: "Read Our Story", href: "#" }]}
            useInvertedBackground={true}
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardOne
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            products={[
              { id: "p1", name: "Radiance Serum", price: "$45", imageSrc: "https://pixabay.com/get/g10b13f5bce3ba16971cd06b3217326c8b8bb459f7ea5336e4ec92170d20c1a03d61152db619a24ab4bcf846b3817ec7db8e5b0696d3c69f38f8ae63a2c3ac50d_1280.jpg" },
              { id: "p2", name: "Daily Moisturizer", price: "$38", imageSrc: "https://pixabay.com/get/g93d2c30ec09877ef7abb2383b50103feec24a10a5342c380a081532eed902e8e139775dd97eb3f67b69a80f8d9f26a1792b722d3af6142678ee2bfd3c45f7322_1280.jpg" },
              { id: "p3", name: "Nourishing Face Oil", price: "$52", imageSrc: "https://pixabay.com/get/g477737312f55dadafad11092226459739a32f74d35f820fd8fa48a60982316fe0e5d6ce4fcc0435e36b2833bdf7eed7de3b0a60d4910d5baf1e6ebd68a84691c_1280.jpg" },
            ]}
            title="Essential Care Collection"
            description="Discover your new daily staples, formulated with love and clinical precision."
          />
        </div>

        <div id="features" data-section="features">
          <FeatureBento
            animationType="blur-reveal"
            title="Why Lumina?"
            description="Science-backed formulas meet nature's finest ingredients."
            textboxLayout="split"
            useInvertedBackground={true}
            features={[
              { title: "Vegan & Cruelty-Free", description: "Ethically sourced ingredients, never tested on animals.", bentoComponent: "reveal-icon", icon: Shield },
              { title: "Clinical Results", description: "Formulas that deliver measurable skin improvements.", bentoComponent: "animated-bar-chart" },
              { title: "Sustainable Packaging", description: "Eco-friendly materials to protect our planet.", bentoComponent: "reveal-icon", icon: Leaf },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFifteen
            useInvertedBackground={false}
            testimonial="Lumina has completely transformed my daily routine. My skin has never felt more hydrated and balanced."
            rating={5}
            author="Elena R."
            avatars={[
              { src: "https://pixabay.com/get/gc1520dbebb5c5dd785e7c84d2e0d55f89ded2543dfd63319c870b9c40496c47abb8db13a6abf6aaba79c0e9487dd91d6ec68009c64e269b1b73dc3fd065ac9fc_1280.jpg", alt: "User 1" },
              { src: "https://pixabay.com/get/g7c006d3a33e3f36c903059aee7315b1541166d008fc7af67fb134ed28c61745f3a481ff8e5375679be7cc4add2012cf935a8ab6be8053aa230eab3e47aa0bc1e_1280.jpg", alt: "User 2" },
              { src: "https://pixabay.com/get/ge326bfe9cc3188f8815ba2d2281c281989fad51ed9689918ddddd6cd4843a69d41821f96ff204357b6b81b9e3845cdfafd8a547399e7ef800375482c4e802e74_1280.jpg", alt: "User 3" },
              { src: "https://pixabay.com/get/gc832abe8ad01c74b28b573ea4e8eb80199277402a2e9827db078d87e87329a021eab03ffb65898c8fa55071a0bca9f6e6df826edb860a5abc42524aff17e338a_1280.jpg", alt: "User 4" },
            ]}
            ratingAnimation="slide-up"
            avatarsAnimation="slide-up"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="split"
            useInvertedBackground={true}
            faqs={[
              { id: "q1", title: "Are your products suitable for sensitive skin?", content: "Yes, our formulations are gentle and pH-balanced for all skin types." },
              { id: "q2", title: "Where are products made?", content: "All Lumina products are handcrafted in our boutique lab in California." },
              { id: "q3", title: "Can I recycle the packaging?", content: "Absolutely! Every component of our packaging is 100% recyclable." },
            ]}
            imageSrc="https://pixabay.com/get/g89d79e7fed0c4744b1d275ed9d398ec7d6dbb8e9a305708c295d132c38ed7ccb4b3e81559598ed1f975edc89fe0fbb75a0fe8c4c045f7da30a13e57d5607411a_1280.jpg"
            mediaAnimation="blur-reveal"
            title="Frequently Asked Questions"
            description="Everything you need to know about your new skincare routine."
            faqsAnimation="blur-reveal"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Join Us"
            title="Stay Glowing"
            description="Get exclusive access to new launches, skincare tips, and special events."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Lumina Skincare"
            columns={[
              { title: "Products", items: [{ label: "Shop All", href: "#products" }, { label: "New Arrivals", href: "#" }] },
              { title: "Support", items: [{ label: "Contact", href: "#contact" }, { label: "FAQ", href: "#faq" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
