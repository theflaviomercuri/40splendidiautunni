import "./PrincipalBtn.css"

export default function PrincipalBtn(props){
    return(
        <button onClick={props.onClick}>{props.caption}</button>
    );
}