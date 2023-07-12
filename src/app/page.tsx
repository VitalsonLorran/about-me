"use client"

import { BoxRotate } from "@/components/BoxRotate";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion"


export default function Home() {
  return (
    <div className="bg-gray-600 h-screen w-screen">
      <Navigation />
      <div className="h-14"></div>
      <Footer />
    </div>
    )
}
