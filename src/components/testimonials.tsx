"use client";

import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Rishi Raj",
        role: "Owner, Restaurant.",
        content: "Thanks for delivering Hiralal Di Rashoi Website , The UI/UX is outstanding and user feedback has been incredibly positive",
         rating: 5,
    },
    {
        name: "Pradeep Kumar",
        role: "Founder,Home Consultancy Pvt Ltd",
        content: "Very Positive Feedback from the user on recent delivered application, Thanks to RaHiva Team.",
        rating: 5,
    },
    {
        name: "Aditya Singh",
        role: "Founder, Singh Restaurant",
        content: "Professional, responsive, and technically brilliant. RaHiva GLOBAL is not just a vendor, but a strategic partner in our growth.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-muted/30 p-8 rounded-2xl shadow-sm border border-border"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-lg italic mb-6 text-foreground/80">
                                &quot;{testimonial.content}&quot;
                            </p>
                            <div>
                                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
