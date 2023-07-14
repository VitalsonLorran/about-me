"use client"

import { BoxRotate } from "@/components/BoxRotate";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="bg-gray-600 h-screen w-screen">
      
      <Link href="/Inicio" className="my-32 bg-black">Home</Link>
      
      <div className="h-14"></div>
      <BoxRotate color={"bg-black"}
      className ="absolute bottom-0 mb-10 ml-10"
      />
      <BoxRotate color={"bg-white"} 
      className="absolute bottom-0 right-0 mb-10"
      />
      <Footer />
    </div>
    
    )
}
