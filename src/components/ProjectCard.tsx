"use client"

import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function QuizzicalCard() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            <div className="container mx-auto p-4 my-4 relative z-10 rounded-xl bg-[#000000]/75 backdrop-blur-lg backdrop-saturate-150">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Left side content */}
                    <div className="w-full lg:w-1/3 text-white space-y-8">
                        <h1 className="text-5xl font-bold tracking-tight text-purple-100">QUIZZICAL</h1>

                        <p className="text-lg text-purple-100">
                            Designed the complete visual experience for a responsive trivia game, including UI, visual identity, and
                            user flow, in collaboration with a developer.
                        </p>

                        <div className="flex gap-3 flex-wrap">
                            <span className="px-4 py-2 bg-purple-950/50 rounded-full text-sm">UI DESIGN</span>
                            <span className="px-4 py-2 bg-purple-950/50 rounded-full text-sm">UX DESIGN</span>
                            <span className="px-4 py-2 bg-purple-950/50 rounded-full text-sm">FIGMA</span>
                        </div>

                        <button className="flex items-center gap-2 text-purple-100 hover:text-purple-200 transition-colors">
                            <span>View Project</span>
                            <ArrowUpRight size={20} className="border rounded-full p-1" />
                        </button>
                    </div>

                    {/* Right side card - using placeholder image */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Game card */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src="/placeholder.svg?height=450&width=800"
                                    alt="Quizzical game interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
