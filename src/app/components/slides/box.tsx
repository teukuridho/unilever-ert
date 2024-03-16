import { ReactNode } from "react"
import "../../globals.css"

export type Component = {
    children?: ReactNode;
}

export function BoxHead({children}: Component){
    return(
        <div className="h-[22.5%] bg-red-600 text-white text-center text-2xl 
                        font-extrabold flex items-center justify-center">
            {children}
        </div>
    )
}



export function Content({children}: Component){
    return(
        <div className={"w-full bg-white"}>
            {children}
        </div>
    )
}
