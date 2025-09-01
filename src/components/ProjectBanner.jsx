import { Ghost } from "./Ghost";
import { RocketModel } from "./RocketModel";

export function ProjectBanner () {
    return (
        <article className="w-full">
            <div className="retro-container2 w-full flex justify-center items-center h-[50px] sm:h-[100px]">
            <h1 className="text-center text-2xl text-[#fe2929] pixelify-sans-3">Proyectos</h1>
            <Ghost></Ghost>
            </div>
            
            <article className="h-[400px]">
                <RocketModel></RocketModel>
            </article>
        </article>
    )
}