import './css/project.css'
interface Project {
    heading: string;
    content: string;
    link: string;
}

function Project(props: Project) {
  return (
    <div className="w:90% container flex items:center">
        <div className="w:half% m:auto">
        <h4
            className="text:lg"
        >
            {props.heading}
        </h4>
        <p className="text:md mt:2 mob::text-wide">
            {props.content}
        </p>
        </div>
        <div className="btn:flat bg-purple-700 flex items:center justify:center w:7 h:7 tc-white-100 korolev-rounded mt:5 mob::wide">
            <a href={props.link} className="dec:none tc-white-200">Check it out</a>
        </div>
    </div>
  )
} 

export default Project