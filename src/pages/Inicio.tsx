import Link from "next/link";


export default function Inicio () {
    return(
        <div>
            <div className="bg-slate-800 h-20 w-20">Aqui é o início</div>
            <button><Link href={"/"}>Home</Link></button>
        </div>
    )
}