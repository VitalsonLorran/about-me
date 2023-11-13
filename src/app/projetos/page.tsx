"use client"

import Link from "next/link";
import { BottomComponents } from "../../components/BottomComponents";
import { TopComponents } from "../../components/TopComponents";

export default function Page () {
    return (
        <div>
            <p>Aqui estão todos os meus projetos:</p>
            <Link href={"/"}>Home</Link>
        </div>
    )
}