"use client"

import { TopComponents } from "@/components/TopComponents";
import { BottomComponents } from "@/components/BottomComponents";

export default function Home() {
  return (
    
    <div className="bg-gray-600 h-screen w-screen">
      
      <TopComponents />
      <div className="max-w-screen-xl m-auto bg-black text-center p-10">
        
        <p>Mudando aqui alguma coisa de novo...</p>
      </div>
      <BottomComponents />
    </div>
    
    )
}
