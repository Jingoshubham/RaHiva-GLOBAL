"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Restaurant Website",
        category: "Web Application",
        image: "/hiralal.png",
        description: "A fully responsive web solution delivered to our client, featuring a dynamic menu, integrated reservation system, and optimized UI for increased customer engagement.",
        link: "https://www.hiralaldirasoi.in/"
    },
    {
        title: "E-Commerce Platform",
        category: "Mobile & Web",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop", // Reliable shopping/tech image
        description: "Multi-vendor innovative e-commerce platform with real-time inventory and AI-driven recommendations.",
        link: "#ecommerce-case-study"
    },
    {
        title: "Fintech Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        description: "Modern financial dashboard design focusing on data visualization and user experience.",
        link: "#fintech-case-study"
    },
];

// Note: Using placeholder images from Unsplash. Ideally, these should be local assets or specific URLs.

export function Projects() {
    return (
        <section id="portfolio" className="py-24 bg-muted">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground text-lg">
                            Explore some of our recent success stories and digital transformations.
                        </p>
                    </div>
                    <Link
                        href="#contact"
                        className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                    >
                        View all projects <ExternalLink className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-background"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                {/* Fallback to a colored div if image fails or for placeholder if next/image config is strict */}
                                <div className="absolute inset-0 bg-muted-foreground/10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm font-medium text-primary mb-2">
                                    {project.category}
                                </p>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex gap-4">
                                    <Link
                                        href={project.link}
                                        className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                                        onClick={(e) => {
                                            if (project.link.startsWith('#')) {
                                                e.preventDefault();
                                                alert(`Navigating to ${project.title} case study (Demo)`);
                                            }
                                        }}
                                    >
                                        View Case Study
                                        <ExternalLink className="h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
