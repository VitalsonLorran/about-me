export const Navigation = () => {
    return(
        <div className="flex justify-start  items-start h-14 w-full  fixed">
            <div className="flex h-full w-full items-center justify-center bg-slate-400">
                <div className="cursor-pointer ">Logo</div>
            </div>
            <div className="flex flex-col h-full w-48 items-center justify-center cursor-pointer">
                <div className="w-10 border border-white my-1"> </div>
                <div className="w-10 border border-white my-1"> </div>
                <div className="w-10 border border-white my-1"> </div>
            </div>
        </div>
    )
}