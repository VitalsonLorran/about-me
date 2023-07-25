import { BoxRotate } from "./BoxRotate"
import { Footer } from "./Footer"

export const BottomComponents = () => {
    return (
        <>
        <BoxRotate color={"bg-black"}
      className ="absolute bottom-0 mb-10 ml-10"
      />
      <BoxRotate color={"bg-white"} 
      className="absolute bottom-0 right-0 mb-10"
      />
      <Footer />
        </>
    )
}