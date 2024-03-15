import type { Metadata, Viewport } from "next";
import UnileverLogo from '../assets/images/unilever.png'
import P3KLogo from '../assets/images/p3k.png'
import SlidesFooter from "../components/slides/SlidesFooter";
import SlidesSubTitle from "../components/slides/SlidesSubTitle";
interface SlidesLayoutProps {
    children: React.ReactNode
}
export const metadata: Metadata = {
    title: 'Slides',
};

export const viewport: Viewport = {
//   width: 1920,
//   height: 1080,
  initialScale: 1,
//   viewportFit: 'cover'  
}    

export default function SlidesLayout(props: SlidesLayoutProps) {
    return (
        <div className="">
            <div className="h-[85vh]">
                <div className="h-[20%] bg-yellow-300 px-4 border-b-[1px] border-black flex justify-between gap-3 items-center">
                    <img src={UnileverLogo.src} className="max-h-full"/>
                    <div className="font-bold text-5xl text-center">
                        <p>PT UNILEVER OLEOCHEMICAL INDONESIA</p>
                        <SlidesSubTitle/>
                    </div>
                    <img src={P3KLogo.src} className="max-h-full p-4"/>
                </div>
                {props.children}
            </div>
            <div className="h-[15vh] bg-green-600 text-white flex items-center justify-center p-5">
                <SlidesFooter/>
            </div>
        </div>
    )
}