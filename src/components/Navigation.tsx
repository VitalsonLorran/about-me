export const Navigation = () => {
    
    const clickNav = () => {

    }
    const cssHead:string = 'cursor-pointer hover:text-black hover:underline hover:pb-4 hover:transition hover:duration-500'
    const cssNav:string = 'w-8 border border-white my-1'
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
            className="flex flex-col h-full w-48 items-center justify-center cursor-pointer">
                <div className={ cssNav }> </div>
                <div className={ cssNav }> </div>
                <div className={ cssNav }> </div>
            </button>
        </div>
    )
}