import BlogRouter from "../../routes/routes"
import FooterNav from "./comp/FooterNav"
import HeaderNav from "./comp/HeaderNav"
import Hero from "./comp/Hero"
import Project from "./comp/Project"
import Skill from "./comp/Skills"
const container = document.getElementById('button-div');
function handleClick(){
    
    container!.style.cursor = 'pointer';
    console.log("clicked")
    window.location.href = "https://github.com/stinklewinks";
}
function HomePage() {

  return (
    <>
    <div className="bg:grad:down grape w:full m:auto">
        {/* <HeaderNav /> */}
        
        <Hero />
    <div className="m:auto w:60 flex col items:start justify:center bgc-white-200">
    
        <Skill 
            heading="Not Your Typical Engineer"
            content="Determination and passion are what has kept me on the path of becoming a creative engineer. Every step of my higher education journey has been telling me to give up and choose another path. I refuse to believe it. I am a full-stack engineer, cloud architect, and ethical hacker."
            id="about-me"
        />
            <Skill
                heading="Full Stack Engingeer"
                content="I am a full stack engineer that is capable of creating both native and web applications. I am skilled in various languages that include:"
                id="full-stack"
            />
            <Skill 
                heading="Cloud Architect"
                content="I am a cloud architect that is capable of creating cloud applications. I am skilled in various cloud platforms that include:"
                id="cloud-architect"
            />
            <Skill 
                heading="Ethical Hacker"
                content="I am an ethical hacker (in training) that is capable of creating ethical applications. I am skilled in various ethical hacking techniques that include:"
                id="ethical-hacking"
            />
        <div className="m:auto flex col items:center justify:center" id="projects">
            <h3 className="text-center">My GitHub</h3>
            {/* Create a GitHub Card */}
            <div className="w:30 h:20 m:auto bg-purple-600 rounded:md mb:10 flex col items:center justify:center">
                <div className="w:90% h:90% rounded:md bgc-white-200" id="button-div">
                    <div onClick={handleClick} className="flex items:center justify:center mt:20">    
                        <i className="fas-br github icon:lg icon:blue-200"></i><span className="text:lg">/stinklewinks</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb:10 flex col gap:1">
            <h3 className="text-center text:xlg">My Current Projects</h3>
            <Project 
                heading={"Juice"}
                content="A full, extensive, expressive CSS/UI Library. This site exclusively uses the Juice library."
                link="https://github.com/citrusworx/juice"
            />
            <Project 
                heading="KiwiPress"
                content="KiwiPress is a headless WordPress library that is designed to be used in conjunction with any WordPress installation. Create a decoupled WordPress powerhouse.
                        This site will incorporate KiwiPress very soon."
                link="https://npmjs.com/kiwipress"
            />
            <Project 
                heading="Kiwi Engine"
                content="Kiwi Engine is designed to be a comprehensive app engine that can create any type of 'business application'. Business application in this sense means
                    any non-graphic intensive application."
                link="https://github.com/citrusworx/kiwi"
            />
        </div>
    </div>
    <FooterNav />
    </div>
    </>
  )
}

export default HomePage