import { ReactNode } from "react"
import "../../globals.css"

export type Component_t = {
    children?: ReactNode;
}

export function Box({children}: Component_t){
    return(
        <p>
            hello
        </p>
    )
}

export function Content_f({children}: Component_t){
    return(
        <div className="bg-slate-50 w-full">
            {children}
        </div>
    )
}
