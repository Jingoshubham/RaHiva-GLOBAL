"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, BarChart3, Video, Palette, Globe } from "lucide-react";
import Link from "next/link";

const services = [
     {
        icon: <Globe className="h-10 w-10 text-primary" />,
        title: "Consultancy Services",
        description: "We offer comprehensive consultancy and manpower solutions to help businesses build strong teams, improve efficiency, adn achieve sustainable growth, Our approach combines strategic consulting with reliable manpower support tailored to your business needs..",
    },
    {
        icon: <Globe className="h-10 w-10 text-primary" />,
        title: "Web Development",
        description: "Custom websites built with modern technologies tailored to your business needs.",
    },
    {
        icon: <Smartphone className="h-10 w-10 text-primary" />,
        title: "App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
        icon: <BarChart3 className="h-10 w-10 text-primary" />,
        title: "CRM & ERP Solutions",
        description: "Streamline your business operations with customized CRM and ERP systems.",
    },
    {
        icon: <Video className="h-10 w-10 text-primary" />,
        title: "Portfolio Management Services",
        description: "We offer professional portfolio management services designed to help individuals and businesses grow, protect, and optimize their investments, Our approach focuses on strategic planning , risk managemet, and long-term vlue creation based on your financial goals.",
    },
    {
        icon: <Palette className="h-10 w-10 text-primary" />,
        title: "UI/UX Design",
        description: "User-centric design creating intuitive and engaging digital experiences.",
    },
    {
        icon: <Code className="h-10 w-10 text-primary" />,
        title: "Digital Marketing",
        description: "Strategic marketing campaigns to grow your audience and boost conversions.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Comprehensive digital solutions designed to drive growth and innovation for your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-background p-8 rounded-2xl shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all"
                        >
                            <div className="mb-6 p-4 bg-primary/10 rounded-xl w-fit">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground mb-4">{service.description}</p>
                            {/* <Link
                                href="#contact"
                                className="text-primary font-medium hover:underline inline-flex items-center"
                            >
                                Learn more
                            </Link> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
