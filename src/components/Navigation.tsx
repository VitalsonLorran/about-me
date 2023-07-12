export const Navigation = () => {
    
    const clickNav = () => {

    }
    
    return(
        <div className="flex justify-start  items-start h-14 w-full mb-14 fixed">
            <div className="flex ml-20 h-full w-full items-center justify-around  text-2xl">
                <div className="cursor-pointer hover:text-black hover:underline"><a href="">Home</a></div>
                <div className="cursor-pointer hover:text-black hover:underline"><a href="">Projetos</a></div>
                <div className="cursor-pointer hover:text-black hover:underline"><a href="">About-me</a></div>
                <div className="cursor-pointer hover:text-black hover:underline"><a href="">Contato</a></div>
            </div>
            <button 
            onClick={clickNav}
            className="flex flex-col h-full w-48 items-center justify-center cursor-pointer">
                <div className="w-8 border border-white my-1"> </div>
                <div className="w-8 border border-white my-1"> </div>
                <div className="w-8 border border-white my-1"> </div>
            </button>
        </div>
    )
}