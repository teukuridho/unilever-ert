import { ReactNode } from "react"
import "../../globals.css"

import {Content_f, Component_t} from "./box"

function Container_f({children}: Component_t){
    return(
        <div className="h-full mb-2 grid gap-3 grid-cols-2 grid-rows-2 justify-between">
            {children}
        </div>
    )
}

export default function Slide3() {
    return (
        <div className="h-full bg-red-600 p-[0.2%]">
            <Container_f>
                <Content_f>
                    hello 1
                </Content_f>

                <Content_f>
                    hello 2

                </Content_f>

                <Content_f>heloo</Content_f>
                
                <Content_f>heloo</Content_f>
            </Container_f>
            
        </div>
    )
}