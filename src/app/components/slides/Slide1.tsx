import Image from 'next/image';
import Slide1SVG from '../../assets/images/firstSlide.svg'
import PyramidDate from './PyramidDate';

export default function Slide1() {
    return (
        <div className='w-full h-full flex justify-center items-center relative'>
            <div className='relative font-semibold text-3xl'>
                <Image src={Slide1SVG} alt=""/>
                <div className='absolute top-[6.5%] left-[28.5%] w-full max-w-[4%] text-center'>
                    0
                </div>
                <div className='absolute top-[22%] left-[25.5%] w-full max-w-[10%] text-center'>
                    0
                </div>
                <div className='absolute top-[38%] left-[23%] w-full max-w-[15%] text-center'>
                    0
                </div>
                <div className='absolute top-[54%] left-[23%] w-full max-w-[15%] text-center'>
                    0
                </div>
                <div className='absolute top-[71%] left-[23%] w-full max-w-[15%] text-center'>
                    0
                </div>
                <div className='absolute top-[88%] left-[23%] w-full max-w-[15%] text-center'>
                    0
                </div>
                <div className='absolute top-0 right-0 h-full w-full max-w-[40%] flex flex-col items-center'>
                    <div className='absolute top-[6.5%] right-[10%] w-full max-w-[64%]'>
                        Category I
                    </div>
                    <div className='absolute top-[22%] right-[10%] w-full max-w-[64%]'>
                        Category II
                    </div>
                    <div className='absolute top-[38%] right-[10%] w-full max-w-[64%]'>
                        Category III
                    </div>
                    <div className='absolute top-[54%] right-[10%] w-full max-w-[64%]'>
                        Category IV
                    </div>
                    <div className='absolute top-[71%] right-[10%] w-full max-w-[64%]'>
                        Category V
                    </div>
                    <div className='absolute top-[88%] right-[10%] w-full max-w-[64%]'>
                        Category VI
                    </div>
                </div>
            </div>
            <div className='absolute top-[2%] left-[1%] w-[15%]'>
                <PyramidDate/>
            </div>
        </div>
    )
}