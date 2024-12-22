interface Skill {
    heading: string;
    content: string;
    id: string;
}
function Skill(props: Skill) {
  return (
    <div className="m:rel:10 p:rel:10" id={props.id}>
        <h4 className="text:lg">{props.heading}</h4>
        <p className="text:md">
            {props.content}
        </p>
    </div>
  )
}

export default Skill