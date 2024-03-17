import { ReactNode } from "react"
import "../../globals.css"

export type Component = {
    children?: ReactNode;
    className?: String;
}

type Content = {
    // Content table
    Name?: string;
    Role?: string;
    ID?: string;
    className?: String;
}

export function SimpleTable({children, className}: Component){
    return(
        <table className={"grid" + " " + className}>
            {children}
        </table>
    )
}

export function TableContent({Name, Role, ID, className}: Content){
	return(
		<tr  className="w-full h-fit flex flex-col mb-1">
            <td className={"text-center font-bold border-2 border-gray-500" + " " + className}>{Name}</td>
            <td className="text-center justify-center border-2 border-gray-500">{Role}</td>
            <td className="text-center border-2 border-gray-500">{ID}</td>
        </tr>
	)
}