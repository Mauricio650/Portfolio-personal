export function BtnStarts ({content}) {
    return (
        <button type="button" class="btn">
                <strong className="orbitron-1">{content}</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>
                
                <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                </button>
    )
}