import { motion } from "framer-motion";
import AnimatedComponent from "./AnimatedComponent"

const AnimatedHeader = ({title}) => {
    return (
        <>
            <AnimatedComponent>
                <h1 
                    className="text-5xl tracking-tight font-bold leading-[0.85] uppercase text-center text-white w-full mb-8">
                    {title}
                </h1>
            </AnimatedComponent>
        </>
    )
}

export default AnimatedHeader