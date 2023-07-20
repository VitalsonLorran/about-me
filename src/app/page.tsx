"use client"

import { BoxRotate } from "@/components/BoxRotate";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import Aboutme from "./pages/Aboutme";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";


export default function Home() {
  return (
    
    <div className="bg-gray-600 h-screen w-screen">
      
      <Navigation />
      
      
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
