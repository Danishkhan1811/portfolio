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
        <div className="flex flex-col items-center justify-center gap-12">
            {/* CARD 1 */}
            <div className="p-8 my-4 relative z-10 rounded-4xl backdrop-blur-lg backdrop-saturate-150">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Left side content */}
                    <div className="w-full h-[65vh] lg:w-1/3 text-white flex flex-col justify-between">
                        <h1 className="text-5xl font-bold tracking-tight text-emerald-300 font-krona">SCROLL</h1>

                        <p className="text-lg text-gray-100 font-poppins">
                            Scroll is a PDF Chatbot web-app, that analyses documents to answer questions intelligently.
                        </p>

                        <div className="flex gap-3 flex-wrap font-krona">
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">NEXT JS</span>
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">tRPC</span>
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">PRISMA</span>
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">OPEN AI</span>
                        </div>

                        <button className="font-krona flex items-center gap-2 text-purple-100 hover:text-purple-500 transition-colors cursor-pointer">
                            <span>View Project</span>
                            <ArrowUpRight size={20} className="border rounded-full p-1" />
                        </button>
                    </div>

                    {/* Right side card */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Game card */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src="/scroll.png"
                                    alt="Quizzical game interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* CARD 1 */}
            <div className="p-8 my-4 relative z-10 rounded-4xl backdrop-blur-lg backdrop-saturate-150">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                     {/* Left side card */}
                     <div className="w-full lg:w-2/3">
                        <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Game card */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src="/scroll.png"
                                    alt="Quizzical game interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Right side content */}
                    <div className="w-full h-[65vh] lg:w-1/3 text-white flex flex-col justify-between">
                        <h1 className="text-5xl font-bold tracking-tight text-emerald-300 font-krona">SCROLL</h1>

                        <p className="text-lg text-gray-100 font-poppins">
                            Scroll is a PDF Chatbot web-app, that analyses documents to answer questions intelligently.
                        </p>

                        <div className="flex gap-3 flex-wrap font-krona">
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">NEXT JS</span>
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">tRPC</span>
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">PRISMA</span>
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">OPEN AI</span>
                        </div>

                        <button className="font-krona flex items-center gap-2 text-purple-100 hover:text-purple-500 transition-colors cursor-pointer">
                            <span>View Project</span>
                            <ArrowUpRight size={20} className="border rounded-full p-1" />
                        </button>
                    </div>
                </div>
            </div>



             {/* CARD 1 */}
             <div className="p-8 my-4 relative z-10 rounded-4xl backdrop-blur-lg backdrop-saturate-150">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Left side content */}
                    <div className="w-full h-[65vh] lg:w-1/3 text-white flex flex-col justify-between">
                        <h1 className="text-5xl font-bold tracking-tight text-emerald-300 font-krona">SCROLL</h1>

                        <p className="text-lg text-gray-100 font-poppins">
                            Scroll is a PDF Chatbot web-app, that analyses documents to answer questions intelligently.
                        </p>

                        <div className="flex gap-3 flex-wrap font-krona">
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">NEXT JS</span>
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">tRPC</span>
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">PRISMA</span>
                            <span className="px-4 py-2 bg-emerald-300/20 rounded-full text-sm text-emerald-300">OPEN AI</span>
                        </div>

                        <button className="font-krona flex items-center gap-2 text-purple-100 hover:text-purple-500 transition-colors cursor-pointer">
                            <span>View Project</span>
                            <ArrowUpRight size={20} className="border rounded-full p-1" />
                        </button>
                    </div>

                    {/* Right side card */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Game card */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src="/scroll.png"
                                    alt="Quizzical game interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
