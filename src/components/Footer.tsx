import {  AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci"
import { BsTwitter } from "react-icons/bs"
import { ImInstagram } from "react-icons/im"
import Link from "next/link";
export const Footer = () => {
    const css: string = "visited:bg-black h-10 w-10 mx-3 hover:fill-black hover:mb-2 hover:transition hover:duration-500 hover:ease-linear"

    return (
        <div className='flex justify-center items-center w-full h-20 absolute bottom-0 left-0'> {/**posicionando ele em baixo: absolute bottom e left:0 */}
            <Link target="_blank" href="https://twitter.com/vitalsonlorran">
                <BsTwitter 
                    className= {css}/> 
            </Link>
            <Link target="_blank" href="https://github.com/VitalsonLorran">
                <AiFillGithub className= {css} />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/vitalsonlorran/">
                <CiLinkedin  className= {css}/>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/vitalsonlorran">
                <ImInstagram className= {css} />
            </Link>
        </div>
    )
}