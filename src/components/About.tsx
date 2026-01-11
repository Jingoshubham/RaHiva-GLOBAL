"use client";

import { Star } from "lucide-react";

const Abouts = [
    {
        name: "Himanshu Raj",
        role: "Founder & CEO.",
        content: "We believe technology and consultancy together create real business impact, Our mission is to deliver strategic guidance and reliable IT solutions thate help organizations grow,adapt, and succeed in a digital-first wold.",
    },
    {
        name: "Sandeep Gupta",
        role: "Co-Founder",
        content: "Strong business are built on clear strategy, smart execution, and the right use of technology, As a consulting and IT-driven organization, we focus on creating practical solutions that deliver long-term value.",
    },
    {
        name: "Simiran Gupta",
        role: "Managing Director",
        content: "We believe in structured growth driven by clarity, consistency and commitment.",
    },
    {
        name: "Shubham Srivastwa",
        role: "CTO",
        content: "At the core of our technology lies performance, security, and scalability, We focus on building robust systems that solve real business challenges, Our approach combines innovation with reliability to create future-ready digital solutions.",
    },
    {
        name: "Yash Tyagi",
        role: "Co-CTO",
        content: "We collaborate to design and deliver technology that is scalable secure, and efficient, Our focus is on building strong architecures and high-performance systems, By combining innovation with practical execution, we enable businessess to grow with confidence.",
    },
    {
        name: "Ayush Rai",
        role: "Advisor",
        content: "We provide strategic guidance grounded in industry experience and practical insight, Our role is to support informed decision-making and long-term business growth, By aligning strategy, technology, and execution, we help organization move forward with clarity.",
    },
];

export function About() {
    return (
        <section className="py-24 bg-background" id="about">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About Team</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our team is driven by passion, innovation, and a commitment to growth. We believe in teamwork, creativity, and delivering value through every project we take on . Get to know the talented minds who shape our vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Abouts.map((About, index) => (
                        <div
                            key={index}
                            className="bg-muted/30 p-8 rounded-2xl shadow-sm border border-border"
                        >
                            <p className="text-lg italic mb-6 text-foreground/80">
                                &quot;{About.content}&quot;
                            </p>
                            <div>
                                <h4 className="font-bold text-lg">{About.name}</h4>
                                <p className="text-sm text-muted-foreground">{About.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
