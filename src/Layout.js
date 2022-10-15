import {useState} from "react"
import "./Layout.css"
import RigaTitolo from "./RigaTitolo";
import RigaTitoloHW from "./RigaTitoloHW";
import PrincipalBtn from "./PrincipalBtn";
import Info from "./Info";

export default function Layout(){

    const [idWrapper, setIdWrapper] = useState("wrapper_msg");
    const [idInfo, setIdInfo] = useState("info_hddn");
    const [wrapperBtn, setWrapperBtn] = useState("btn");

    const swtchVis = () => {
        setIdWrapper("wrapper_msg_hddn");
        setWrapperBtn("btn_hddn");
        setIdInfo("info");
    }

    return(
        <div id="container">
            <div id={idInfo}>
                <Info/>
            </div>
            <div id={idWrapper}>
                <RigaTitolo testo="quaranta"/>
                <RigaTitolo testo="splendidi"/>
                <RigaTitolo testo="autunni"/>
                <RigaTitoloHW testo="festeggiamo?"/>
            </div>
            <div id={wrapperBtn}>
                    <PrincipalBtn caption="informazioni" onClick={swtchVis}/>
            </div>
        </div>
    );
}