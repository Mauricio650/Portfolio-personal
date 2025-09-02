export function BackGround ({children}) {
    return (
        <>
    <div className="min-h-screen relative">
  <div
    className="fixed inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
    }}
  />
  <div className='relative z-10'>

  
    {children}

  </div>
</div>
    </>
    )
}