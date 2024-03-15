import "../../globals.css"

function Content(){
    return(
        <div className="bg-white h-1/3 font-sans mb-3 flex flex-row">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat 
            consequuntur est sed. Sit vel atque moll
        </div>
    )
}

export default function Slide3() {
    return (
        <div className="bg-blue-900 h-screen">
            <Content></Content>
            <Content></Content>
        </div>
    )
}