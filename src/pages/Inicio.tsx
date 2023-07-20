import Link from "next/link";


export default function Inicio () {
    return(
        <div>
            <div>Aqui é o início</div>
            <button><Link href={"/"}>Home</Link></button>
        </div>
    )
}