import React from "react";
import Link from "next/link";

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">{children}</div>
)

export const Background: React.FC = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        <div className="bg-white h-[30vh] lg:h-auto"></div>
        <div className="bg-black h-[70vh] lg:min-h-screen"></div>
    </div>
)
export const Left: React.FC<{ progress: number, children: React.ReactNode }> = ({ children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div style={{
            transform: `translateY(${translateY}px)`
        }} className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto" >
            <div className="leading-10"> {children}</div>
        </div>
    )

}
export const Right: React.FC<{ progress: number, children: React.ReactNode }> = ({ children, progress }) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)

    return (
        <div style={{
            transform: `translateY(${translateY}px)`
        }} className="flex flex-1 lg:items-center justify-center h-screen" >
            <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0"> {children}</div>
        </div>
    )

}