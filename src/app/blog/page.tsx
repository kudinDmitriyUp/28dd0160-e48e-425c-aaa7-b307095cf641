"use client";

import ReactLenis from "lenis/react";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Leaf, Shield } from "lucide-react";

const footerColumns: FooterColumn[] = [
    {
        title: "Product",
        items: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "FAQ", href: "/faq" },
        ],
    },
    {
        title: "Company",
        items: [
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/careers" },
        ],
    },
    {
        title: "Resources",
        items: [
            { label: "Documentation", href: "/docs" },
            { label: "Support", href: "/support" },
            { label: "Contact", href: "/contact" },
        ],
    },
];

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

    return (
        <ThemeProvider defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal">
            <ReactLenis root>
                <div id="nav" data-section="nav">

                    <NavbarStyleCentered navItems={[
              { name: "Home", id: "hero" },
              { name: "Our Story", id: "about" },
              { name: "Products", id: "products" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Lumina Skincare" />
                </div>

                    {isLoading ? (
                        <div className="w-content-width mx-auto py-20 text-center">
                            <p className="text-foreground">Loading posts...</p>
                        </div>
                    ) : (
                        <div id="blog" data-section="blog">
                            <BlogCardOne
                                blogs={posts}
                                title="Latest Articles"
                                description="Stay updated with our latest insights"
                                textboxLayout="default"
                                useInvertedBackground={false}
                                carouselMode="buttons"
                                animationType="slide-up"
                            />
                        </div>
                    )}

                    <div id="footer" data-section="footer">

                        <FooterBaseCard logoText="Lumina Skincare"
            columns={[
              { title: "Products", items: [{ label: "Shop All", href: "#products" }, { label: "New Arrivals", href: "#" }] },
              { title: "Support", items: [{ label: "Contact", href: "#contact" }, { label: "FAQ", href: "#faq" }] },
            ]} />
                    </div>
            </ReactLenis>
        </ThemeProvider>
    );
}

