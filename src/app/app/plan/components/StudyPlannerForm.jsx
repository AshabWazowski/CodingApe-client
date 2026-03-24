"use client";

import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    nextStep,
    prevStep,
    updateFormData,
} from "@/app/store/slices/studyPlannerSlice";

// Animation Variants
const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 500 : -500,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
        },
    },
    exit: (direction) => ({
        x: direction < 0 ? 500 : -500,
        opacity: 0,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
        },
    }),
};

export default function StudyPlannerForm() {
    const dispatch = useDispatch();
    const { currentStep, formData } = useSelector((state) => state.studyPlanner);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({ [name]: value }));
    };

    const handleNext = () => dispatch(nextStep());
    const handlePrev = () => dispatch(prevStep());

    // Determine direction for animation based on simple logic (Next goes right, Prev goes left)
    // To strictly manage direction, we usually need custom state, but for a simple multi-step form, we can just assume 1 (forward) unless navigating back.
    // Here we simplify by using AnimatePresence with mode="wait" and a simple fade/slide.

    return (
        <div className="w-full max-w-2xl mx-auto p-8 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Build Your Plan</h2>
                <p className="text-zinc-400">Step {currentStep} of 3</p>

                {/* Progress Bar */}
                <div className="w-full bg-zinc-800 h-2 rounded-full mt-4 overflow-hidden">
                    <motion.div
                        className="h-full bg-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStep / 3) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            <div className="relative min-h-[350px]">
                <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="primaryGoal" className="text-zinc-300">Primary Goal</Label>
                                    <Input
                                        id="primaryGoal"
                                        name="primaryGoal"
                                        placeholder="e.g., Learning Web Dev, AI/ML..."
                                        value={formData.primaryGoal}
                                        onChange={handleChange}
                                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="startDate" className="text-zinc-300">Start Date</Label>
                                        <Input
                                            type="date"
                                            id="startDate"
                                            name="startDate"
                                            value={formData.startDate}
                                            onChange={handleChange}
                                            className="bg-zinc-800/50 border-zinc-700 text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="endDate" className="text-zinc-300">End Date</Label>
                                        <Input
                                            type="date"
                                            id="endDate"
                                            name="endDate"
                                            value={formData.endDate}
                                            onChange={handleChange}
                                            className="bg-zinc-800/50 border-zinc-700 text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="hoursPerDay" className="text-zinc-300">Availability (hours per day)</Label>
                                    <Input
                                        type="number"
                                        id="hoursPerDay"
                                        name="hoursPerDay"
                                        placeholder="e.g., 2"
                                        value={formData.hoursPerDay}
                                        onChange={handleChange}
                                        className="bg-zinc-800/50 border-zinc-700 text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="offDays" className="text-zinc-300">Specific &quot;Off-Days&quot;?</Label>
                                    <Input
                                        id="offDays"
                                        name="offDays"
                                        placeholder="e.g., Sundays, Weekends..."
                                        value={formData.offDays}
                                        onChange={handleChange}
                                        className="bg-zinc-800/50 border-zinc-700 text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-zinc-300 block mb-2">Current Knowledge</Label>
                                    <div className="flex gap-4">
                                        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                                            <label key={level} className="flex items-center gap-2 text-zinc-300 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="currentKnowledge"
                                                    value={level}
                                                    checked={formData.currentKnowledge === level}
                                                    onChange={handleChange}
                                                    className="accent-purple-600 w-4 h-4 cursor-pointer"
                                                />
                                                {level}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-zinc-300 block mb-2">Learning Style</Label>
                                    <div className="flex gap-4">
                                        {['Video', 'Reading', 'Practice'].map((style) => (
                                            <label key={style} className="flex items-center gap-2 text-zinc-300 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="learningStyle"
                                                    value={style}
                                                    checked={formData.learningStyle === style}
                                                    onChange={handleChange}
                                                    className="accent-purple-600 w-4 h-4 cursor-pointer"
                                                />
                                                {style}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="profession" className="text-zinc-300 block mb-2">Profession</Label>
                                    <select
                                        id="profession"
                                        name="profession"
                                        value={formData.profession}
                                        onChange={handleChange}
                                        className="w-full h-10 rounded-md border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus-visible:outline-none focus:ring-2 focus:ring-purple-600"
                                    >
                                        <option value="" disabled>Select your profession</option>
                                        <option value="Student">Student</option>
                                        <option value="Professional">Working Professional</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="priorityTopics" className="text-zinc-300">Priority Topics (Weak areas)</Label>
                                    <textarea
                                        id="priorityTopics"
                                        name="priorityTopics"
                                        placeholder="e.g., React Hooks, CSS Grid..."
                                        value={formData.priorityTopics}
                                        onChange={handleChange}
                                        className="w-full min-h-[100px] rounded-md border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-zinc-800">
                <Button
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
                >
                    Previous
                </Button>

                {currentStep < 3 ? (
                    <Button
                        onClick={handleNext}
                        className="bg-purple-600 hover:bg-purple-700 text-white min-w-[100px]"
                    >
                        Next
                    </Button>
                ) : (
                    <Button
                        onClick={() => alert("Form Submitted! \n" + JSON.stringify(formData, null, 2))}
                        className="bg-green-600 hover:bg-green-700 text-white min-w-[100px]"
                    >
                        Submit
                    </Button>
                )}
            </div>
        </div>
    );
}
