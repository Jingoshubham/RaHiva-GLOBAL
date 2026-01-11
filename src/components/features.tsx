"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, TrendingUp, Lightbulb } from "lucide-react";

const features = [
    {
        icon: <Clock className="h-8 w-8" />,
        title: "24/7 Support",
        description: "Round-the-clock technical assistance to ensure your business never stops.",
    },
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: "Secure Payments",
        description: "Enterprise-grade security protocols to protect your transactions and data.",
    },
    {
        icon: <TrendingUp className="h-8 w-8" />,
        title: "Progress Reports",
        description: "Regular updates and transparent reporting on project milestones.",
    },
    {
        icon: <Lightbulb className="h-8 w-8" />,
        title: "Innovation Hub",
        description: "Leveraging the latest technologies to keep you ahead of the curve.",
    },
];

const stats = [
    { value: "500+", label: "Clients Worldwide" },
    { value: "98%", label: "Retention Rate" },
    { value: "10+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
];

export function Features() {
    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Why Choose RaHiva Global ?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            We combine technical expertise with business acumen to deliver solutions that drive real results. Our commitment to quality and innovation sets us apart.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="p-3 bg-muted rounded-lg w-fit text-primary">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-muted rounded-2xl p-8 border border-border">
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4">
                                    <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-primary">
                                        {stat.value}
                                    </div>
                                    <div className="text-muted-foreground font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
