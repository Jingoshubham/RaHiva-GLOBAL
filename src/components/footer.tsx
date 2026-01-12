"use client";

import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted py-12 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                                RG
                            </div>
                            <span className="text-xl font-bold tracking-tight">RaHiva GLOBAL</span>
                        </Link>
                        <p className="text-muted-foreground mb-4">
                            Empowering businesses through digital transformation and innovative technology solutions.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="flex p-2 rounded-full bg-background hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="flex p-2 rounded-full bg-background hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="flex p-2 rounded-full bg-background hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="flex p-2 rounded-full bg-background hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">App Development</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} RaHiva GLOBAL PVT All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground">Privacy</Link>
                        <Link href="#" className="hover:text-foreground">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
