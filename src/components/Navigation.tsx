import { useState } from "react"

export const Navigation = () => {

    const [navClicked, useNavClicked] = useState(false)
    const clickNav = () => {
        useNavClicked(!navClicked)
    }
    const cssHead:string = 'cursor-pointer hover:text-black hover:underline hover:pb-4 hover:transition hover:duration-500'
    const cssNav:string = 'w-8 border border-white my-1 '
    return(
        <div className="flex justify-start  items-start h-14 w-full mb-14 fixed">
            <div className="flex ml-20 h-full w-full items-center justify-around  text-2xl">
                <div className={cssHead}><a href="">Home</a></div>
                <div className={cssHead}><a href="">Projetos</a></div>
                <div className={cssHead}><a href="">About-me</a></div>
                <div className={cssHead}><a href="">Contato</a></div>
            </div>
            <button 
            onClick={clickNav}
            className="flex flex-col h-full pl-5 bg-black items-center justify-center cursor-pointer">
                {!navClicked &&
                <div className="flex items-center flex-col justify-center">
                    <div className={ cssNav }> </div>
                    <div className={ cssNav }> </div>
                    <div className={ cssNav }> </div>
                </div>
                }
                {navClicked &&
                <div className="">
                    <ul className="flex flex-col">
                        <li>Home</li>
                        <li>Projetos</li>
                        <li>About-me</li>
                        <li>Contato</li>
                    </ul>
                </div>
                }   
            </button>
        </div>
    )
}