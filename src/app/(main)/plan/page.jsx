"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PlanTier = ({ title, price, description, features, limitations, isPopular, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={`relative flex flex-col p-8 rounded-3xl bg-opacity-5 bg-background border transition-all duration-300 hover:shadow-xl hover:scale-105 ${isPopular
                ? "border-indigo-500 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] transform md:-translate-y-4 hover:-translate-y-6"
                : "border-border hover:border-indigo-500/50 hover:-translate-y-2"
                }`}
        >
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                        Most Popular
                    </span>
                </div>
            )}

            {/* Glow Effect for Popular Plan */}
            {isPopular && (
                <div className="absolute inset-0 bg-indigo-600/5 rounded-3xl -z-10 pointer-events-none blur-xl"></div>
            )}

            <div className="mb-6">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-muted-foreground mt-2 text-sm min-h-[40px]">{description}</p>
            </div>

            <div className="mb-6">
                <span className="text-4xl font-extrabold">{price}</span>
                {price !== "Free" && <span className="text-muted-foreground">/month</span>}
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                        <Check className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
                        <span className="text-foreground">{feature}</span>
                    </li>
                ))}
                {limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <X className="w-5 h-5 mr-3 text-muted-foreground/50 shrink-0" />
                        <span>{limitation}</span>
                    </li>
                ))}
            </ul>

            <Link href="/sign-in" className="mt-auto">
                <Button
                    variant={isPopular ? "default" : "outline"}
                    className={`w-full ${isPopular ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "border-border hover:bg-indigo-600/10 hover:text-indigo-400"}`}
                >
                    {price === "Free" ? "Get Started" : "Upgrade to " + title}
                </Button>
            </Link>
        </motion.div>
    );
};

const PlansPage = () => {
    const plans = [
        {
            title: "Basic",
            price: "Free",
            description: "For beginners who have just started their coding journey.",
            features: [
                "Interactive code editor",
                "Curated problem sets",
                "Limited access to AI hints",
                "Limited access to AI debugging",
                "Limited access to Code Assistant"
            ],
            limitations: [
                "No Interview preparation",
                "No Roadmap creation",
                "No Study planner"
            ],
            isPopular: false,
        },
        {
            title: "Standard",
            price: "$9.99",
            description: "For learners who need more intelligent guidance.",
            features: [
                "All Basic features",
                "Increased access to AI debugging",
                "Increased AI hints & code optimization",
                "Increased access to Code Assistant",
                "Limited access to Interview preparation",
                "Limited Roadmap creation"
            ],
            limitations: [
                "Limited Study planner access"
            ],
            isPopular: true,
        },
        {
            title: "Premium",
            price: "$19.99",
            description: "The ultimate coding companion for landing your dream role.",
            features: [
                "Everything in Standard",
                "Full access to AI Code Assistant",
                "Full access to AI hints & debugging",
                "Full unrestricted Interview preparation",
                "Open access to Roadmap creation",
                "Open access to Study planner"
            ],
            limitations: [],
            isPopular: false,
        }
    ];

    return (
        <div className="flex flex-col w-full min-h-[calc(100vh-64px)] overflow-x-hidden">
            <div className="w-full py-16 px-4 md:px-20 relative">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen z-0">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full animate-pulse mix-blend-screen"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center space-y-4 mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-extrabold tracking-tight"
                        >
                            Choose Your <span className="text-indigo-600">Plan</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            Unlock the full power of AI to accelerate your coding journey. Upgrade anytime.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 items-center max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <PlanTier
                                key={plan.title}
                                title={plan.title}
                                price={plan.price}
                                description={plan.description}
                                features={plan.features}
                                limitations={plan.limitations}
                                isPopular={plan.isPopular}
                                delay={0.2 + index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlansPage;
