import "../../globals.css"
import {Content, Component, BoxHead} from "./box"
import { SimpleTable, TableContent } from "./table"

function Container({children}: Component){
    return(
        <div className="h-full mb-2 grid gap-3 grid-cols-2 grid-rows-2 justify-between
            UHD:gap-5">
            {children}
        </div>
    )
}

export default function Slide3() {
    return (
        <div className="h-[75vh] bg-[#4472c4] p-[0.02%] UHD:h-[78vh]">
            <Container>
                <Content>
                    <div className="h-full flex">
                        <div className="h-full w-[75%] justify-center text-3xl">
                            <div className="h-[15%] w-full bg-yellow-200 mb-1
                                text-center flex justify-around items-center font-semibold
                                UHD:text-[70px]">
                                <p>Monday, 4 Mar 2024</p>
                                <p>Shift 1</p>
                            </div>

                            <div className="h-[44.5%] w-full bg-red-600 mb-2 text-white
                                text-center grid content-center font-bold flex-row
                                UHD:text-[80px] UHD:gap-10">
                                <p>EMERGENCY CONTACT:</p>
                                <p>0622-6979062</p>
                                <p>(Ext 8062)</p>
                            </div>

                            <div className="h-[35%] w-full bg-yellow-200 text-black font-bold
                                text-center grid justify-items-center content-center
                                UHD:text-[80px] UHD:gap-10">
                                <p className="text-red-600">EMERGENCY CONTROLLER:</p>
                                <p>ENDY JULISETIAWAN</p>
                                <p>08116176085</p>
                            </div>
                        </div>

                        <div className="h-full w-[50%] flex flex-col justify-center items-center text-[13px]">
                            <SimpleTable className="h-[990px] w-[70%] mb-1 
                                UHD:mt-1 UHD:text-[40px]">
                                <th className="h-full w-full bg-[#f39a09] flex items-center justify-center border-2 border-gray-500 text-white">
                                    Fire Fighter
                                </th>
                                <div className="h-full flex flex-row mt-1 justify-center items-center content-center self-center
                                    UHD:text-[40px]">
                                    <TableContent Name="Wira J" Role="Security" ID="085xxxx" className="bg-yellow-300"  other={"h-[26px] mr-1 UHD:h-[54px]"}/>
                                    <TableContent Name="Fahri A" Role="Security" ID="085xxxx" className="bg-yellow-300"  other={"h-[26px] ml-1 UHD:h-[54px]"}/>
                                </div>
                                <div className="flex">
                                    <TableContent Name="Wahyu D" Role="Security" ID="085xxxx" className="bg-yellow-300" other={"h-[26px] mr-1 UHD:h-[54px]"}/>
                                    <TableContent Name="Triandi T" Role="Security" ID="085xxxx" className="bg-yellow-300"  other={"h-[26px] ml-1 UHD:h-[54px]"}/>
                                </div>
                                <div className="flex">
                                    <TableContent Name="Sandi S" Role="Security" ID="085xxxx" className="bg-yellow-300"  other={"h-[26px] mr-1 UHD:h-[54px]"}/>
                                    <TableContent Name="" Role="" ID="" className="bg-yellow-300"  other={"h-[26px] ml-1 UHD:h-[54px]"}/>
                                </div>
                            </SimpleTable>

                            <SimpleTable className="h-fit w-[90%] flex-col 
                                UHD:text-[36px]">
                                <th className="w-full bg-blue-700 border-2 border-gray-500 text-white">
                                    Pump Operator
                                </th>
                                <tr className="flex w-full">
                                    <TableContent Name="Ilham J" Role="Utility" ID="085xxxx" className="bg-blue-300" other={"mr-1"} />
                                    <TableContent Name="Khairul" Role="Utility" ID="085xxxx" className="bg-blue-300" other={"ml-1"} />
                                </tr>
                            </SimpleTable>
                        </div>
                    </div>
                </Content>

                <Content>
                    <BoxHead>
                        FA1 & TF1 EMERGENCY RESPONSE TEAM
                    </BoxHead>
                    <div className="h-full flex justify-around content-center items-center mt-3">
                        <SimpleTable className="w-[20%] grid items-center content-center">
                            <th className="bg-red-600 text-white text-[30px] text-center flex items-center content-center justify-center
                                UHD:text-[50px]">
                                Incident <br /> Controller
                            </th>
                            <TableContent Name="M Pujianto N" Role="WH & WWTP" ID="085xxxx" className="bg-red-300" other={"text-[20px] UHD:text-[50px]"} />
                        </SimpleTable>

                        <SimpleTable className="w-[20%] ml-1 grid gap-[1px] content-center justify-center text-[23px]
                            UHD:text-[50px]">
                            <th className="w-[210px] bg-green-700 text-white font-black flex items-center content-center justify-center
                                UHD:w-[350px] UHD:h-[150px]">
                                First Aider
                            </th>
                            <TableContent Name="Diki Angga" Role="FA1 & TF1" ID="085xxxx" className="bg-green-300" />
                            <TableContent Name="Fikrie Alia" Role="FA1 & TF1" ID="085xxxx" className="bg-green-300" />
                        </SimpleTable>

                        <SimpleTable className="h-full w-[54%] grid gap-1 content-center text-[23px]
                            UHD:text-[50px]">
                            <th className="bg-purple-700 text-white font-black flex justify-center content-center items-center
                                UHD:text-[60px] UHD:h-[150px]">
                                Floor Warden
                            </th>
                            <div className="flex gap-5 justify-between">
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                            </div>
                            
                        </SimpleTable>
                    </div>
                </Content>

                <Content>
                    <BoxHead>
                        FA2 & TF2 EMERGENCY RESPONSE TEAM
                    </BoxHead>
                    
                    <div className="h-full flex justify-around content-center items-center mt-3">
                        <SimpleTable className="w-[20%] grid items-center content-center">
                            <th className="bg-red-600 text-white text-[30px] text-center flex items-center content-center justify-center
                                UHD:text-[50px]">
                                Incident <br /> Controller
                            </th>
                            <TableContent Name="M Pujianto N" Role="WH & WWTP" ID="085xxxx" className="bg-red-300" other={"text-[20px] UHD:text-[50px]"} />
                        </SimpleTable>

                        <SimpleTable className="w-[20%] ml-1 grid gap-[1px] content-center justify-center text-[23px]
                            UHD:text-[50px]">
                            <th className="w-[210px] bg-green-700 text-white font-black flex items-center content-center justify-center
                                UHD:w-[350px] UHD:h-[150px]">
                                First Aider
                            </th>
                            <TableContent Name="Diki Angga" Role="FA1 & TF1" ID="085xxxx" className="bg-green-300" />
                            <TableContent Name="Fikrie Alia" Role="FA1 & TF1" ID="085xxxx" className="bg-green-300" />
                        </SimpleTable>

                        <SimpleTable className="h-full w-[54%] grid gap-1 content-center text-[23px]
                            UHD:text-[50px]">
                            <th className="bg-purple-700 text-white font-black flex justify-center content-center items-center
                                UHD:text-[60px] UHD:h-[150px]">
                                Floor Warden
                            </th>
                            <div className="flex gap-5 justify-between">
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                            </div>
                            
                        </SimpleTable>
                    </div>

                </Content>

                <Content>
                    <BoxHead>
                        <p className="text-4xl font-bold
                            UHD:text-7xl UHD:font-extrabold">
                            DOVE AND NATURAL SURFACTANT <br />
                            EMERGENCY RESPONSE TEAM
                        </p>
                    </BoxHead>
                    
                    <div className="h-full flex justify-around content-center items-center mt-3">
                        <SimpleTable className="w-[20%] grid items-center content-center">
                            <th className="bg-red-600 text-white text-[30px] text-center flex items-center content-center justify-center
                                UHD:text-[50px]">
                                Incident <br /> Controller
                            </th>
                            <TableContent Name="M Pujianto N" Role="WH & WWTP" ID="085xxxx" className="bg-red-300" other={"text-[20px] UHD:text-[50px]"} />
                        </SimpleTable>

                        <SimpleTable className="w-[20%] ml-1 grid gap-[1px] content-center justify-center text-[23px]
                            UHD:text-[50px]">
                            <th className="w-[210px] bg-green-700 text-white font-black flex items-center content-center justify-center
                                UHD:w-[350px] UHD:h-[150px]">
                                First Aider
                            </th>
                            <TableContent Name="Diki Angga" Role="FA1 & TF1" ID="085xxxx" className="bg-green-300" />
                            <TableContent Name="Fikrie Alia" Role="FA1 & TF1" ID="085xxxx" className="bg-green-300" />
                        </SimpleTable>

                        <SimpleTable className="h-full w-[54%] grid gap-1 content-center text-[23px]
                            UHD:text-[50px]">
                            <th className="bg-purple-700 text-white font-black flex justify-center content-center items-center
                                UHD:text-[60px] UHD:h-[150px]">
                                Floor Warden
                            </th>
                            <div className="flex gap-5 justify-between">
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="FA1 & TF1" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                            </div>
                            
                        </SimpleTable>
                    </div>

                </Content>
            </Container>
        </div>
    )
}