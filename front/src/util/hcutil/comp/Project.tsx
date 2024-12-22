interface Project {
    heading: string;
    content: string;
}

function Project(props: Project) {
  return (
    <div className="w:80% m:auto">
        <h4
            className="text:lg"
        >
            {props.heading}
        </h4>
        <p className="text:md">
            {props.content}
        </p>
    </div>
  )
}

export default Project