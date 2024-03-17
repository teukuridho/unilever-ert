import { ReactNode } from "react"
import "../../globals.css"

export type Component = {
    children?: ReactNode;
}

export function BoxHead({children}: Component){
    return(
        <div className="h-[25%] bg-red-600 text-white text-center text-5xl
                        font-semibold grid justify-center content-center">
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
