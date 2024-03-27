'use client'

import Slide1 from "../components/slides/Slide1"
import Slide2 from "../components/slides/Slide2"

// list of slides
const slides = [
    Slide1,
    Slide2
]

export default function SlidesPage() {
    // rencananya ini akan jalan slide 1 - 5
    // untuk sekarang jalan hanya slide 3
    return (
        <div className="h-full w-full">
            <Slide2/>
        </div>
    )
}