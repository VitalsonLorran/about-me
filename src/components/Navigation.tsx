import { useState } from "react"

export const Navigation = () => {

    const [navClicked, useNavClicked] = useState(false)
    const clickNav = () => {
        useNavClicked(!navClicked)
    }
    const cssHead:string = 'cursor-pointer hover:text-black hover:underline hover:pb-4 hover:transition hover:duration-500'
    const cssNav:string = 'w-8 border border-white my-1 '
    return(
        <div className="flex justify-start h-14 items-start mr-10 w-full mb-14 fixed">
            <div className="flex ml-20 h-full w-full items-center justify-around  text-2xl">
                <div className={cssHead}><a href="/">Home</a></div>
                <div className={cssHead}><a href="/Projetos">Projetos</a></div>
                <div className={cssHead}><a href="/Aboutme">About-me</a></div>
                <div className={cssHead}><a href="/Contato">Contato</a></div>
            </div>
            <button 
            onClick={clickNav}
            className="flex flex-col h-full pl-5 items-center justify-center cursor-pointer">
                {!navClicked &&
                <div className="flex items-center flex-col justify-center">
                    <div className={ cssNav }> </div>
                    <div className={ cssNav }> </div>
                    <div className={ cssNav }> </div>
                </div>
                }
                {navClicked &&
                <div className="w-32 block">
                    <ul className="flex flex-col">
                        <button className="hover:text-stone-400 text-right pr-4" onClick={clickNav}>x</button>
                        <li className="hover:text-stone-400 my-2"><a href="/">Home</a></li>
                        <li className="hover:text-stone-400 my-2"><a href="/Projetos">Projetos</a></li>
                        <li className="hover:text-stone-400 my-2"><a href="/Aboutme">About-me</a></li>
                        <li className="hover:text-stone-400 my-2"><a href="/Contato">Contato</a></li>
                    </ul>
                </div>
                }   
            </button>
        </div>
    )
}