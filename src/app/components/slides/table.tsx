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
    other?: String;
}

export function SimpleTable({children, className}: Component){
    return(
        <table className={"grid" + " " + className}>
            {children}
        </table>
    )
}

export function TableContent({Name, Role, ID, className, other}: Content){
	return(
		<tr  className="w-full flex flex-col gap-[0.5px]">
            <td className={"text-center font-bold border-2 border-gray-500 " + className + " " + other}>{Name}</td>
            <td className={"text-center flex justify-center content-center items-center border-2 border-gray-500 " + other}>{Role}</td>
            <td className={"text-center justify-center border-2 border-gray-500 mb-1 " + other}>{ID}</td>
        </tr>
	)
}