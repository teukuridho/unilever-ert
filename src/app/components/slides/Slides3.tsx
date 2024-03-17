import "../../globals.css"
import {Content, Component, BoxHead} from "./box"
import { SimpleTable, TableContent } from "./table"

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
                    <div className="h-full flex">
                        <div className="h-full w-[75%] justify-center text-3xl">
                            <div className="h-[15%] w-full bg-yellow-200 mb-2
                                text-center flex justify-around items-center font-semibold">
                                <p>Monday, 4 Mar 2024</p>
                                <p>Shift 1</p>
                            </div>

                            <div className="h-[42.5%] w-full bg-red-600 mb-2 text-white
                                text-center grid content-center font-bold">
                                <p>EMERGENCY CONTACT:</p>
                                <p>0622-6979062</p>
                                <p>(Ext 8062)</p>
                            </div>

                            <div className="h-[35%] w-full bg-yellow-200 text-black font-bold
                                text-center grid justify-items-center content-center">
                                <p className="text-red-600">EMERGENCY CONTROLLER:</p>
                                <p>ENDY JULISETIAWAN</p>
                                <p>08116176085</p>
                            </div>
                        </div>

                        <div className="h-fit w-[50%] grid justify-items-center">
                            <SimpleTable className="w-[60%]">
                                <th className="h-fit w-full bg-yellow-500 flex items-center justify-center border-2 border-gray-500 text-white">
                                    Fire FIghter
                                </th>
                                <div className="flex">
                                    <TableContent Name="Wira J" Role="Security" ID="085xxxx" className="bg-yellow-300" />
                                    <TableContent Name="Fahri A" Role="Security" ID="085xxxx" className="bg-yellow-300" />
                                </div>
                            </SimpleTable>
                            <SimpleTable className="h-fit w-[90%] flex-col">
                                <th className="w-full bg-blue-700 border-2 border-gray-500 text-white">
                                    Pump Operator
                                </th>
                                <tr className="flex w-full">
                                    <TableContent Name="Ilham J" Role="Utility" ID="085xxxx" className="bg-blue-300" />
                                    <TableContent Name="Khairul" Role="Utility" ID="085xxxx" className="bg-blue-300" />
                                </tr>
                            </SimpleTable>
                        </div>
                    </div>
                </Content>

                <Content>
                    <BoxHead>
                        FA1 & TF1 EMERGENCY RESPONSE TEAM
                    </BoxHead>
                    <div className="flex justify-around items-center mt-3">
                        <SimpleTable className="w-[20%]">
                            <th className="bg-red-700 text-white text-center flex items-center content-center justify-center">
                                Incident Controller
                            </th>
                            <TableContent Name="M Pujianto N" Role="WH & WWTP" ID="085xxxx" className="bg-red-300" />
                        </SimpleTable>

                        <SimpleTable className="w-[20%] ml-1 flex-row">
                            <th className="bg-green-700 text-white flex items-center content-center justify-center">
                                First Aider
                            </th>
                            <TableContent Name="Diki Angga" Role="Utility" ID="085xxxx" className="bg-green-300" />
                            <TableContent Name="Fikrie Alia" Role="Utility" ID="085xxxx" className="bg-green-300" />
                        </SimpleTable>

                        <SimpleTable className="w-[40%] content-center">
                            <th className="bg-purple-700 text-white">
                                Floor Warden
                            </th>
                            <div className="flex justify-between">
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                            </div>
                            
                        </SimpleTable>
                    </div>
                </Content>

                <Content>
                    <BoxHead>
                        FA2 & TF2 EMERGENCY RESPONSE TEAM
                    </BoxHead>
                    <div className="flex justify-around items-center mt-3">
                        <SimpleTable className="w-[20%]">
                            <th className="bg-red-700 text-white text-center flex items-center content-center justify-center">
                                Incident Controller
                            </th>
                            <TableContent Name="M Pujianto N" Role="WH & WWTP" ID="085xxxx" className="bg-red-300" />
                        </SimpleTable>

                        <SimpleTable className="w-[20%] ml-1 flex-row">
                            <th className="bg-green-700 text-white flex items-center content-center justify-center">
                                First Aider
                            </th>
                            <TableContent Name="Diki Angga" Role="Utility" ID="085xxxx" className="bg-green-300" />
                            <TableContent Name="Fikrie Alia" Role="Utility" ID="085xxxx" className="bg-green-300" />
                        </SimpleTable>

                        <SimpleTable className="w-[40%] content-center">
                            <th className="bg-purple-700 text-white">
                                Floor Warden
                            </th>
                            <div className="flex justify-between">
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                            </div>
                            
                        </SimpleTable>
                    </div>
                </Content>

                <Content>
                    <BoxHead>
                        <p className="text-4xl font-bold">
                            DOVE AND NATURAL SURFACTANT <br />
                            EMERGENCY RESPONSE TEAM
                        </p>
                    </BoxHead>
                    <div className="flex justify-around items-center mt-3">
                        <SimpleTable className="w-[20%]">
                            <th className="bg-red-700 text-white text-center flex items-center content-center justify-center">
                                Incident Controller
                            </th>
                            <TableContent Name="M Pujianto N" Role="WH & WWTP" ID="085xxxx" className="bg-red-300" />
                        </SimpleTable>

                        <SimpleTable className="w-[20%] ml-1 flex-row">
                            <th className="bg-green-700 text-white flex items-center content-center justify-center">
                                First Aider
                            </th>
                            <TableContent Name="Diki Angga" Role="Utility" ID="085xxxx" className="bg-green-300" />
                            <TableContent Name="Fikrie Alia" Role="Utility" ID="085xxxx" className="bg-green-300" />
                        </SimpleTable>

                        <SimpleTable className="w-[40%] content-center">
                            <th className="bg-purple-700 text-white">
                                Floor Warden
                            </th>
                            <div className="flex justify-between">
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                                <tr className="w-full">
                                    <TableContent Name="Polim R L" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                    <TableContent Name="Dimas Y P" Role="Utility" ID="085xxxx" className="bg-purple-300" />
                                </tr>
                            </div>
                            
                        </SimpleTable>
                    </div>
                </Content>
            </Container>
        </div>
    )
}