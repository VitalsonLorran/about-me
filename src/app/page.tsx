"use client"

import { BoxRotate } from "@/components/BoxRotate";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import Contato from "../../pages/api/Contato";
import { Router } from "next/router";
import { Rotas } from "@/components/Rotas";

export default function Home() {
  return (
    
    <div className="bg-gray-600 h-screen w-screen">
      
      <Navigation />
      <div className="h-14"></div>
      <div className="max-w-screen-xl m-auto bg-black">
        
        Mudando aqui alguma coisa
      </div>
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
