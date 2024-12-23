interface Project {
    heading: string;
    content: string;
    link: string;
}

function Project(props: Project) {
  return (
    <div className="w:80% flex items:center">
        <div className="w:half% m:auto">
        <h4
            className="text:lg"
        >
            {props.heading}
        </h4>
        <p className="text:md w:90%">
            {props.content}
        </p>
        </div>
        <div className="btn:flat bg-purple-700 flex items:center justify:center w:7 h:7 tc-white-100 korolev-rounded">
            <a href={props.link} className="dec:none tc-white-200">Check it out</a>
        </div>
    </div>
  )
} 

export default Project