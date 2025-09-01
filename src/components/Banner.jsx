import { Ghost } from "./Ghost";

export function Banner({text}){
    return (
        <div className="retro-container2 w-full flex justify-center items-center h-[50px] sm:h-[100px]">
            <h1 className="text-center text-2xl text-[#ff0000] pixelify-sans-3">{text}</h1>
            
            <Ghost></Ghost>
        </div>
    )
}