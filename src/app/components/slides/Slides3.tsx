import "../../globals.css"
import {Content, Component, BoxHead} from "./box"

function Container({children}: Component){
    return(
        <div className="h-full mb-2 grid gap-3 grid-cols-2 grid-rows-2 justify-between">
            {children}
        </div>
    )
}

export default function Slide3() {
    return (
        <div className="h-full bg-slate-800 p-[0.2%]">
            <Container>
                <Content>
                    <div className="h-full flex ">
                        <div className="h-full w-[50%] justify-center text-xl">
                            <div className="h-[15%] w-full bg-yellow-200 mb-2
                                text-center flex justify-around items-center font-black">
                                <p>Monday, 4 Mar 2024</p>
                                <p>SHIFT 1</p>
                            </div>

                            <div className="h-[42.5%] w-full bg-red-600 mb-2 text-2xl text-white
                                text-center grid content-center font-extrabold">
                                <p>EMERGENCY CONTACT:</p>
                                <p>0622-6979062</p>
                                <p>(Ext 8062)</p>
                            </div>

                            <div className="h-[37%] w-full bg-yellow-200 text-black font-extrabold
                                text-center grid justify-items-center content-center">
                                <p className="text-red-600">EMERGENCY CONTROLLER:</p>
                                <p>ENDY JULISETIAWAN</p>
                                <p>08116176085</p>
                            </div>
                        </div>
                        <div className="h-full w-[50%] justify-center">
                            <p></p>
                        </div>
                    </div>
                </Content>

                <Content>
                    <BoxHead>
                        FA1 & TF1 EMERGENCY RESPONSE TEAM
                    </BoxHead>
                </Content>

                <Content>
                    <BoxHead>
                    FA2 & TF2 EMERGENCY RESPONSE TEAM
                    </BoxHead>
                </Content>

                <Content>
                    <BoxHead>
                        DOVE AND NATURAL SURFACTANT <br />
                        EMERGENCY RESPONSE TEAM
                    </BoxHead>
                </Content>
            </Container>
        </div>
    )
}