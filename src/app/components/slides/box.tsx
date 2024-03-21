import { ReactNode } from "react"
import "../../globals.css"

export type Component = {
    children?: ReactNode;
}

export function BoxHead({children}: Component){
    return(
        <div className="h-[23%] bg-red-600 text-white text-center text-5xl
                        font-semibold grid justify-center content-center
                        UHD:text-8xl UHD:font-bold">
            {children}
        </div>
    )
}



export function Content({children}: Component){
    return(
        <div className="w-full bg-white flex flex-col">
            {children}
        </div>
    )
}
