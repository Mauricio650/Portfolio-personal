export function CardProject ({pathImg,title,text, linkWeb, linkRepo, arrSvg = []}) {
    return (
        <article class="bg-black flex flex-col justify-between border border-yellow-300 rounded-xl shadow-lg p-4 w-xs lg:w-80 hover:scale-105 transition-transform duration-300">
  
                <img src={pathImg} alt={`img of my project ${title}`} class="rounded-lg mb-3"/>
                
                
                <h2 class="text-red-800 pixelify-sans-3 text-lg mb-2">{title}</h2>
                
                
                <p class="text-green-500 text-md mb-3 font-mono">
                    {text}
                </p>
                
                <article className="py-2 flex justify-items-start items-center gap-1">
                    {
                        arrSvg.map((svg,i) => <img key={i} className="w-5 hover:scale-[1.2]" src={`svg/${svg}`} alt="" /> )
                    }
                </article>
                <div class="flex justify-between orbitron-1">
                    <a href={linkWeb} target="_blank" rel="noopener noreferrer" class="bg-cyan-500 text-black px-3 py-1 rounded-md text-xs font-bold hover:bg-cyan-300 transition">Demo</a>
                    <a href={linkRepo} target="_blank" rel="noopener noreferrer" class="bg-pink-500 text-black px-3 py-1 rounded-md text-xs font-bold hover:bg-pink-300 transition">GitHub</a>
                </div>
        </article>
    )
}