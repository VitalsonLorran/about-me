import Link from "next/link"
import { useState } from "react"


export const Navigation = () => {

    const [navClicked, useNavClicked] = useState(false)
    const useClickNav = () => {
        useNavClicked(!navClicked)
    }
    const cssHead:string = 'cursor-pointer hover:text-black hover:underline hover:pb-4 hover:transition hover:duration-500'
    const cssNav:string = 'w-8 border border-white my-1 '
    return(
        <div className="flex justify-start h-14 items-start mr-10 w-full mb-14 fixed">
            <div className="flex ml-20 h-full w-full items-center justify-around  text-2xl">
                <div className={cssHead}><Link href={"/"}>Home</Link></div>
                <div className={cssHead}><Link href="pages/Projetos">Projetos</Link></div>
                <div className={cssHead}><Link href="/Aboutme">About-me</Link></div>
                <div className={cssHead}><Link href="/Contato">Contato</Link></div>
            </div>
            <button 
            onClick={useClickNav}
            className="flex flex-col h-full pl-5 items-center justify-center cursor-pointer">
                {!navClicked &&
                <div className="flex items-center pr-7 flex-col justify-center">
                    <div className={ cssNav }> </div>
                    <div className={ cssNav }> </div>
                    <div className={ cssNav }> </div>
                </div>
                }
                {navClicked &&
                <div className="w-60 mt-64 ">
                    <ul className="flex flex-col">
                        <button className="hover:text-stone-400 text-right pr-4 text-4xl" onClick={useClickNav}>x</button>
                        <li className="hover:text-stone-400 my-5 hover:text-2xl hover:scale-110 hover:duration-150"><Link href="/">Home</Link></li>
                        <li className="hover:text-stone-400 my-5 hover:text-2xl hover:scale-110 hover:duration-150"><Link href="/Projetos">Projetos</Link></li>
                        <li className="hover:text-stone-400 my-5 hover:text-2xl hover:scale-110 hover:duration-150"><Link href="/Aboutme">About-me</Link></li>
                        <li className="hover:text-stone-400 my-5 hover:text-2xl hover:scale-110 hover:duration-150"><Link href="/Contato">Contato</Link></li>
                    </ul>
                </div>
                }   
            </button>
        </div>
    )
}