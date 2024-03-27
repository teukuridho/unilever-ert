import Slide2SVG from '../../assets/images/secondSlide.svg'
import Image from 'next/image';
import PyramidDate from './PyramidDate';

export default function Slide2() {
    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <div className='relative font-semibold text-3xl p-[0.1%] h-full'>
                <Image src={Slide2SVG} alt='' className='h-full w-fit'/>
                <div className='absolute top-[3.5%] left-[33.5%] w-full max-w-[4%] text-center'>
                    0
                </div>
                <div className='absolute top-[13%] left-[31.5%] w-full max-w-[8%] text-center'>
                    0
                </div>
                <div className='absolute top-[23.5%] left-[29.4%] w-full max-w-[12.2%] text-center'>
                    0
                </div>
                <div className='absolute top-[34%] left-[29.4%] w-full max-w-[12.2%] text-center'>
                    0
                </div>
                <div className='absolute top-[44.5%] left-[29.4%] w-full max-w-[12.2%] text-center'>
                    0
                </div>
                <div className='absolute top-[55.5%] left-[29.4%] w-full max-w-[12.2%] text-center'>
                    0
                </div>
                <div className='absolute top-[66%] left-[29.4%] w-full max-w-[12.2%] text-center'>
                    0
                </div>
                <div className='absolute top-0 right-0 h-full w-full max-w-[35%] flex flex-col items-center'>
                    <div className='absolute top-[2.5%] right-[0.8%] w-full text-center text-gray-800'>
                        Class A Fatalities
                    </div>
                    <div className='absolute top-[13%] right-[0.8%] w-full text-center text-gray-800'>
                        L T A
                    </div>
                    <div className='absolute top-[23.5%] right-[0.8%] w-full text-center text-gray-800'>
                        R W C
                    </div>
                    <div className='absolute top-[34%] right-[0.8%] w-full text-center text-gray-800'>
                        M T C
                    </div>
                    <div className='absolute top-[44.5%] right-[0.8%] w-full text-center text-gray-800'>
                        F A C
                    </div>
                    <div className='absolute top-[55.5%] right-[0.8%] w-full text-center text-gray-800'>
                        Nearmiss Report
                    </div>
                    <div className='absolute top-[66%] right-[0.8%] w-full text-center text-gray-800'>
                        SBO & UC
                    </div>
                </div>
                <div className='absolute top-[47%] left-[1%] w-full max-w-[12.2%] text-2xl font-normal h-[14%]'>
                    <div className='absolute top-0'>
                        Lagging
                    </div>
                    <div className='absolute bottom-[10%]'>
                        Leading
                    </div>
                </div>
                <div className='absolute bottom-0 left-[8%] w-full max-w-[91%] text-2xl h-[25%]'>
                    <div className='absolute top-[2%] text-white w-full font-semibold'>
                        <div className='absolute'>
                            Employee Manhour YTD
                        </div>
                        <div className='absolute right-0'>
                            0
                        </div>
                    </div>
                    <div className='absolute top-[35%] text-black w-full font-normal'>
                        <div className='absolute'>
                            Contractor Manhour YTD
                        </div>
                        <div className='absolute right-0'>
                            0
                        </div>
                    </div>
                    <div className='absolute bottom-[35%] text-black w-full font-normal'>
                        <div className='absolute'>
                            Day Since Last LTA
                        </div>
                        <div className='absolute right-0'>
                            0
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-[2%] left-[1%] w-[15%]'>
                <PyramidDate/>
            </div>
        </div>
    )
}