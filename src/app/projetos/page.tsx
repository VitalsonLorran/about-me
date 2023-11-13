"use client"

import Link from "next/link";
import { BottomComponents } from "../../components/BottomComponents";
import { TopComponents } from "../../components/TopComponents";

export default function Page () {
    return (
        <div className="bg-gray-600 h-screen w-screen">
            <TopComponents />
            <div className="max-w-screen-xl m-auto bg-black text-center p-10">
                <p className="bg-black">Aqui estão todos os meus projetos:</p>
                <Link href={"/"}>Home</Link>
            </div>
            <BottomComponents />
        </div>
    )
}