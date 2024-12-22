
function Hero() {
  return (
    <div
        className="m:auto w:80 h:60 flex col items:center justify:center bg-purple-700"
        id="header-container"
    >
        <h2 className="tc-white-100 text:lg">Hello, I am Drew Winkles</h2>
        <p className="tc-white-100 text:md">I am a <span className="underline tc-creamsicle-200" id="creative-engineer-tool">creative engineer</span></p>
    </div>
  )
}

export default Hero