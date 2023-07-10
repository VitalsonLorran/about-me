import { motion } from "framer-motion"

type Props= {
    color: String
}

export const BoxRotate = ({ color }: Props) => {
    return(
        <motion.h1
      className= { ` h-20 w-20 rounded mr-10 ${color} ` }
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["30%", "30%", "50%", "50%", "30%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 10
      }}
      />
    )
}